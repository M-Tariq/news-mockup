<template>
  <div @mousemove="resetTimeout" @keypress="resetTimeout">
    <!-- Your app content -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.setupIdleTimeout();
  },
  methods: {
    setupIdleTimeout() {
      let timeout;
      const idleTime = 300000; // 5 minutes (300,000 milliseconds)

      const resetTimeout = () => {
        clearTimeout(timeout);
        timeout = setTimeout(this.logout, idleTime);
      };

      this.resetTimeout = resetTimeout;

      // Initialize the timeout
      timeout = setTimeout(this.logout, idleTime);
    },
    logout() {
      window
        .logout()
        .then((response) => {
          console.log(response.message);
          alert("Logged out!");
          localStorage.clear();
          this.$router.push("/login");
        })
        .catch((error) => {
          console.error(error.message);
          alert("Something went wrong!");
        });
    },
  },
};
</script>
