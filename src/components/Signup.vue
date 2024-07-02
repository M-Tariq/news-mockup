<template>
  <div class="signup-form">
    <h2>Sign Up</h2>

    <!-- Sign Up Form -->
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="signupForm.username" required />
      </div>
      <div class="form-group">
        <label for="phone">Phone Number:</label>
        <PhoneInput v-model="signupForm.phone" />
        <vue-tel-input
          v-model="signupForm.phone"
          @input="onInput"
          @country-changed="onCountryChanged"
        />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="signupForm.password" required />
      </div>
      <button type="submit">Sign Up</button>
    </form>

    <!-- Toggle Button -->
    <button @click="goToSignIn">Already have an account? Sign In</button>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      isSignup: true,
      signupForm: {
        username: "",
        phone: "",
        password: "",
      },
      countryCode: "",
    };
  },
  methods: {
    onCountryChanged(countryData) {
      this.countryCode = "+" + countryData.dialCode;
    },

    register() {
      window
        .signup(this.signupForm.username, phoneWithCountryCode, this.signupForm.password)
        .then((response) => {
          console.log(response.message);
          this.$router.push("/login");
        })
        .catch((error) => {
          alert("Something went wrong.");
          console.error(error.message);
        });
    },
    goToSignIn() {
      this.$router.push(`/login`);
    },
  },
};
</script>

<style scoped>
.signup-form {
  box-sizing: border-box;
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  margin-top: 100px;
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

.vue-tel-input {
  margin: 0 8px !important;
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
