<template>
  <div>
    <div v-if="selectedCoach">
      <section>
        <base-card>
          <h2>{{ fullName }}</h2>
          <p>{{ selectedCoach.rate }}$/hour</p>
        </base-card>
      </section>
      <section>
        <base-card>
          <header>
            <h2>Do you have any question? Contact me!</h2>
            <base-button link :to="contactLink">Contact</base-button>
          </header>
          <router-view></router-view>
        </base-card>
      </section>
      <section>
        <base-card>
          <base-badge
            v-for="area in selectedCoach.areas"
            :key="area"
            :type="area"
            :title="area"
          ></base-badge>
          <p>{{ selectedCoach.description }}</p>
        </base-card>
      </section>
    </div>
    <p v-else-if="error">
      Failed to load coach details. Please try again later.
    </p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null,
      error: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    contactLink() {
      return '/coaches/' + this.id + '/contact';
    },
    genres() {
      return this.selectedCoach.genres;
    },
  },
  methods: {
    async fetchCoachDetails() {
      try {
        const coach = this.$store.getters['coaches/coaches'].find(
          (coach) => coach.id === this.id
        );
        if (!coach) {
          await this.$store.dispatch('coaches/loadCoaches');
          this.selectedCoach = this.$store.getters['coaches/coaches'].find(
            (coach) => coach.id === this.id
          );
        } else {
          this.selectedCoach = coach;
        }
      } catch (error) {
        this.error = 'Could not load coach details.';
      }
    },
  },
  created() {
    this.fetchCoachDetails();
  },
};
</script>
