<template>
  <div id="register">
    <div class="main-container flex flex-col gap-4 text-white">
      <p class="text-3xl font-semibold text-center">Create a new account</p>

      <BtlInput
        label="First Name"
        placeholder="First Name"
      />
      <BtlInput
        label="Last Name"
        placeholder="Last Name"
      />
      <BtlInput
        label="Email"
        placeholder="user@email.com"
        icon="email"
      />
      <BtlInput
        placeholder="********"
        label="Password"
        type="password"
        icon="key"
      />

      <BtlButton class="mt-1">Register</BtlButton>
      <div class="additional-action sign-in">
        Already have an account? <RouterLink to="/login">Sign In</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import BtlInput from "@/components/FormComponents/BtlInput";
import BtlButton from "@/components/FormComponents/BtlButton";
export default {
  name: "register",
  components: { BtlButton, BtlInput },
}
</script>

<style scoped lang="scss">
  #register {
    .main-container {
      max-width: 500px;
      margin: 200px auto 0;
    }

    .additional-action {
      text-align: center;

      a {
        color: #554CBD;
        text-decoration: underline;
        font-weight: 600;
      }
    }
  }
</style>
