<template>
  <header>
    <nav>
      <h1>
        <router-link to="/" class="logo"
          ><img src="/code.png" alt="Logo"
        /></router-link>
      </h1>
      <ul>
        <li><router-link to="/coaches">Coaches</router-link></li>
        <li v-if="isLoggedIn">
          <router-link to="/requests">Requests</router-link>
        </li>
        <li v-else><router-link to="/auth">Login</router-link></li>
        <li v-if="isLoggedIn">
          <base-button @click="logout">Logout</base-button>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.replace('/coaches');
    },
  },
};
</script>
<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #f2f8fc;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  height: 3rem;
}

header a {
  text-decoration: none;
  color: #0573e1;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 2px solid transparent;
  border-radius: 10px;
  font-weight: bold;
}

a:active,
a:hover,
a.router-link-active {
  border: 2px solid #0573e1;
}
.logo {
  padding: 0.75rem 0;
}
h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  max-width: 40rem;
  width: 100%;
  padding: 0 1.5rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
@media (max-width: 600px) {
  header {
    width: 100%;
    height: 10rem;
    padding: 2rem;
  }
  header nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
