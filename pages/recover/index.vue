<template>
  <div id="recover">
    <div class="main-container flex flex-col gap-4 text-white">
      <p class="text-3xl font-semibold text-center">Recover your account</p>

      <BtlInput
        label="Email"
        placeholder="user@email.com"
      />

      <BtlButton class="mt-1">
        Send Recovery Link
      </BtlButton>

      <div class="additional-action sign-up">
        Don't have an account? <RouterLink to="/register">Sign Up</RouterLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import BtlInput from "~/components/FormComponents/BtlInput.vue";
import BtlButton from "~/components/FormComponents/BtlButton.vue";
export default {
  name: "recover",
  components: { BtlButton, BtlInput }
}
</script>

<style lang="scss" scoped>
#recover {
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
