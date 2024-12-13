<template>
  <div>
    <base-dialog :show="!!error" title="An error occured" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section><coach-filter @change-filter="setFilters"></coach-filter></section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadCoaches(true)"
            >Refresh</base-button
          >
          <base-button link to="/auth?redirect=register" v-if="!isLoggedIn"
            >Login to register as Coach</base-button
          >
          <base-button
            link
            to="/register"
            v-if="!isCoach && !isLoading && isLoggedIn"
            >Register As Coach</base-button
          >
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasCoaches">
          <coach-item
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :id="coach.id"
            :first-name="coach.firstName"
            :last-name="coach.lastName"
            :rate="coach.rate"
            :areas="coach.areas"
          ></coach-item>
        </ul>
        <h3 v-else>No coach found. Register a new coach!</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import CoachItem from '../../components/coaches/CoachItem.vue';

export default {
  components: {
    CoachItem,
    CoachFilter,
  },
  data() {
    return {
      activeFilters: {
        areas: {
          frontend: false,
          backend: false,
          career: false,
        },
        firstName: '',
        lastName: '',
      },
      isLoading: false,
      error: null,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];

      const areas = ['frontend', 'backend', 'career'];

      return coaches.filter((coach) => {
        let areaMatches = true;

        areas.forEach((area) => {
          if (this.activeFilters.areas[area] && !coach.areas.includes(area)) {
            areaMatches = false;
          }
        });

        const firstNameMatches = coach.firstName
          .toLowerCase()
          .includes(this.activeFilters.firstName.toLowerCase());

        const lastNameMatches = coach.lastName
          .toLowerCase()
          .includes(this.activeFilters.lastName.toLowerCase());

        return areaMatches && firstNameMatches && lastNameMatches;
      });
    },
    hasCoaches() {
      return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
    },
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
  },
  methods: {
    setFilters(updatedFilter) {
      this.activeFilters = updatedFilter;
    },
    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('coaches/loadCoaches', {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong';
      }

      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
  created() {
    this.loadCoaches();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
@media (max-width: 600px) {
  .controls {
    display: flex;
    flex-direction: column;
  }
}
</style>
