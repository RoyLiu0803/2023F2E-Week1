<script setup>
const { isLoading, lottiePlayer } = loadingItem();
const baseUrl = import.meta.env.BASE_URL;
</script>
<template>
  <div v-if="isLoading">
    <div class="bg-white absolute top-0 left-0 w-[100vw] h-[100vh]"></div>
    <div class="loadingitem">
      <lottie-player
        id="loading"
        ref="lottiePlayer"
        count="3"
        :src="`${baseUrl}imgs/loading-lottie.json`"
        background="transparent"
        speed="1"
        style="width: 300px; height: 300px"
        direction="1"
        mode="normal"
        loop
      />
    </div>
  </div>
</template>

<style scoped>
.loadingitem {
  @apply absolute
  z-[999]
  left-1/2
  top-1/2
  -translate-x-1/2
  -translate-y-1/2;
}
</style>
