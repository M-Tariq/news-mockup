<template>
  <div>
    <h1>Welcome to the Mockup News Site</h1>
    <router-link to="/article">Read Featured Article</router-link>
    <button @click="redirectToSignUp">See Other Articles</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    redirectToSignUp() {
      this.$router.push("/signup");
    },
  },
};
</script>
