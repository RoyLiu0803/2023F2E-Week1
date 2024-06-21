<script setup>
defineProps({
  policy: null,
  isSub: {
    type: Boolean,
    default: false,
  },
});
const baseUrl = import.meta.env.BASE_URL;
</script>
<template>
  <div class="policyItem" :class="{ subItem: isSub }">
    <p class="policyItem_text">{{ policy.text }}</p>
    <img :src="`${baseUrl}${policy.image}`" alt="" />
  </div>
</template>
<style scoped>
img {
  @apply rounded-2xl;
}
.policyItem {
  @apply w-[30%] table:w-[48%] mobile:!w-max;
  &_text {
    @apply text-24s font-bold whitespace-pre-wrap p-4 pt-0 min-h-[5.5rem];
  }
}
</style>
