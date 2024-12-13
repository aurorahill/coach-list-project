<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '/',
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #4165d5;
  border: 1px solid #4165d5;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  margin: 0.5rem;
  display: inline-block;
  text-align: center;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #3351ac;
  border-color: #3351ac;
}

.flat {
  background-color: transparent;
  color: #4165d5;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #4165d5;
  color: #4165d5;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #e1e7fc;
}
@media (max-width: 600px) {
  button {
    padding: 0.75rem 0.5rem;
    margin: 0.5rem 0;
  }
}
</style>
