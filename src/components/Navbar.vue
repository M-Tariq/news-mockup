<template>
  <div class="navbar">
    <div class="brand" @click="goToHomePage">
      <h1>News Site</h1>
      <!-- Replace with your brand name or logo -->
    </div>
    <div class="nav-items">
      <button v-if="isLoggedIn" class="login-btn" @click="logout">Logout</button>
      <button v-else class="login-btn" @click="login">Login</button>
    </div>
  </div>
  <!-- Your main content here -->
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
    };
  },

  mounted() {
    window.addEventListener("storage", this.handleStorageChange);
  },

  beforeDestroy() {
    // window.removeEventListener("storage", this.handleStorageChange);
  },

  methods: {
    handleStorageChange(event) {
      debugger;
      console.log("Storage event fired:", event);
      if (event.key === "isLoggedIn") {
        this.isLoggedIn = event.newValue === "true";
        console.log("isLoggedIn updated:", this.isLoggedIn);
      }
    },

    login() {
      console.log("Logged in. Redirecting to /login");
      this.$router.push("/login");
      this.isLoggedIn = false;
    },

    logout() {
      localStorage.removeItem("isLoggedIn");
      this.isLoggedIn = false;
      console.log("Logged out. Redirecting to /");
      this.$router.push("/");
    },

    goToHomePage() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;
  padding-left: 6rem; /* Adjust as needed */
  padding-right: 6rem; /* Adjust as needed */
  z-index: 1000; /* Ensure it stays above other content */
  box-sizing: border-box;
}

.brand h1 {
  margin: 0;
  cursor: pointer;
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

/* Optional: Add some padding to the top of the main content to avoid it being hidden under the navbar */
main {
  padding-top: 4rem; /* Adjust this value based on the navbar height */
}
</style>
