<template>
  <div id="login">
    <div class="main-container flex flex-col gap-4 text-white">
      <p class="text-3xl font-semibold text-center">Log in to your account</p>

      <BtlInput
        label="Email"
        placeholder="user@email.com"
      />

      <BtlInput
        label="Password"
        placeholder="********"
        type="password"
      />

      <BtlButton class="mt-1">
        Log In
      </BtlButton>

      <div class="additional-action forgot-password">
        Forgot your password? <RouterLink to="/recover">Recover</RouterLink>
      </div>
      <hr>
      <div class="additional-action sign-up">
        Don't have an account? <RouterLink to="/register">Sign Up</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import BtlInput from "../../components/FormComponents/BtlInput";
import BtlButton from "../../components/FormComponents/BtlButton";
export default {
  name: "login",
  components: {BtlButton, BtlInput }
}
</script>

<style scoped lang="scss">
#login {
  .main-container {
    max-width: 500px;
    margin: 200px auto 0;

    .additional-action {
      text-align: center;

      a {
        color: #554CBD;
        text-decoration: underline;
        font-weight: 600;
      }
    }
  }
}
</style>
