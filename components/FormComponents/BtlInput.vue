<template>
  <div class="btl-input">
    <p class="label mb-2">{{ label }}</p>
    <input
      class="px-4 h-12 text-black"
      :placeholder="placeholder"
      :type="type"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "BtlInput",
  props: {
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false
    },
    type: {
      type: String,
      default: "text"
    }
  },
}
</script>

<style scoped lang="scss">
  .btl-input {
    .label {
      color: white;
    }

    input {
      height: 48px;
      width: 100%;
      background-color: white;
      outline: none;
      user-select: none;

      &::placeholder {
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
</style>
