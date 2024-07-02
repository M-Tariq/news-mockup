<template>
  <div class="navbar">
    <div class="brand">
      <h1>News Site</h1>
      <!-- Replace with your brand name or logo -->
    </div>
    <div class="nav-items">
      <button class="login-btn" @click="login">Login</button>
    </div>
  </div>
  <!-- Your main content here -->
</template>
  
  <script>
export default {
  name: "App",
  methods: {
    login() {
      // Handle login functionality
      console.log("Clicked Login button");
    },
  },
};
</script>
  
  <style scoped>
.navbar {
  /* position: fixed; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;
  padding-left: 6rem;
  padding-right: 6rem;
}

.brand h1 {
  margin: 0;
}

.login-btn {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-btn:hover {
  background-color: #0056b3;
}
</style>
  