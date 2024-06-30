<template>
  <div class="article">
    <h1>Article Title</h1>
    <p>Preview of the article...</p>
    <button @click="signUp">Sign Up to Read More</button>
  </div>
</template>

<script>
export default {
  methods: {
    signUp() {
      this.$root.currentPage = "SignUpPage";
    },
  },
};
</script>

<style scoped>
.article {
  padding: 20px;
}
button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
