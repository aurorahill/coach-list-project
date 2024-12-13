<template>
  <li>
    <div>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
    </div>
    <h3>{{ firstName + ' ' + lastName }}</h3>

    <p>{{ rate }}$/hour</p>

    <div class="actions">
      <base-button link mode="outline" :to="contactLink"> Contact </base-button>
      <base-button link :to="coachDetailsLink"> View Details </base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'areas', 'rate'],
  computed: {
    coachDetailsLink() {
      return this.$route.path + '/' + this.id;
    },
    contactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 1rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 600px) {
  .actions {
    display: flex;
    flex-direction: column;
  }
}
</style>
