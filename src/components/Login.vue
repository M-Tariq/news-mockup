<template>
  <div class="signup-form">
    <h2>Sign In</h2>

    <!-- Sign In Form -->
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          v-model="signinForm.username"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model="signinForm.password"
          required
        />
      </div>
      <button type="submit">Sign In</button>
    </form>

    <!-- Toggle Button -->
    <button @click="goToSignUp">Create an account</button>
  </div>
</template>

<script>
export default {
  name: "LogIn",
  data() {
    return {
      signinForm: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    goToSignUp() {
      this.$router.push(`/signup`);
    },

    login() {
      window
        .login(this.signinForm.username, this.signinForm.password)
        .then((response) => {
          console.log(response.message);
          alert("Logged in!");
          this.resetForm();
          this.goToOtpVerification();
          localStorage.setItem("isLoggedIn", true);
        })
        .catch((error) => {
          console.error(error.message);
          alert("Login failed!");
          localStorage.clear();
        });
    },

    resetForm() {
      this.signinForm.username = null;
      this.signinForm.password = null;
    },

    goToOtpVerification() {
      this.$router.push("/otp");
    },
  },
};
</script>

<style scoped>
.signup-form {
  box-sizing: border-box;
  min-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h2 {
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="tel"],
input[type="password"] {
  width: 95%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

button:hover {
  background-color: #0056b3;
}
</style>
