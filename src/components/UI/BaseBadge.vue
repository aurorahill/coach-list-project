<template>
  <span class="badge" :class="type">{{ text }}</span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin: 5px;
  font-size: 0.9rem;
}

.frontend {
  background-color: #769b7c;
  color: white;
}

.backend {
  background-color: #293855;
  color: white;
}

.career {
  background-color: #f1ac20;
  color: white;
}
</style>
