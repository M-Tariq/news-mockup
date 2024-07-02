<template>
  <div class="signup-form">
    <h2>OTP Verification</h2>

    <form @submit.prevent="verifyOtp">
      <div class="form-group">
        <!-- <label for="username">OTP:</label> -->
        <input
          type="text"
          id="otp"
          v-model="otp"
          placeholder="Enter 6 digit otp"
          required
        />
      </div>

      <button type="submit">Verify</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "OtpVerification",
  data() {
    return {
      otp: "",
    };
  },
  methods: {
    goToArticles() {
      this.$router.push(`/articles`);
    },

    verifyOtp() {
      window
        .otpverify(this.otp)
        .then((response) => {
          console.log(response.message);
          alert(response.message);
          localStorage.setItem("isLoggedIn", true);
          this.goToArticles();
        })
        .catch((error) => {
          console.error(error.message);
          alert(error.message);
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
  min-width: 80%;
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
