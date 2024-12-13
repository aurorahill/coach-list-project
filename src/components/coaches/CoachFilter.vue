<template>
  <base-card>
    <h2>Find Your Coach</h2>

    <!-- Input for Title filter -->
    <div>
      <label for="firstName">First Name: </label>
      <input
        type="text"
        id="firstName"
        v-model="filters.firstName"
        @input="setFilter"
      />
    </div>

    <!-- Input for Author filter -->
    <div>
      <label for="lastName">Last name: </label>
      <input
        type="text"
        id="lastName"
        v-model="filters.lastName"
        @input="setFilter"
      />
    </div>

    <!-- Genre filters -->
    <div class="genre">
      <span class="filter-option">
        <input
          type="checkbox"
          id="frontend"
          v-model="filters.areas.frontend"
          @change="setFilter"
        />
        <label for="frontend">Frontend</label>
      </span>
      <span class="filter-option">
        <input
          type="checkbox"
          id="backend"
          v-model="filters.areas.backend"
          @change="setFilter"
        />
        <label for="backend">Backend</label>
      </span>
      <span class="filter-option">
        <input
          type="checkbox"
          id="career"
          v-model="filters.areas.career"
          @change="setFilter"
        />
        <label for="career">Career</label>
      </span>
    </div>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        areas: {
          frontend: false,
          backend: false,
          career: false,
        },
        firstName: '',
        lastName: '',
      },
    };
  },
  methods: {
    setFilter() {
      // Emit the updated filters whenever any input or checkbox changes
      this.$emit('change-filter', this.filters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

div {
  margin: 1rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
@media (max-width: 600px) {
  .genre {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
