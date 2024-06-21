import { nextTick } from "vue";
export const isLoading = ref(true);
export default () => {
  // document.body.style.overflow = "hidden";
  const lottiePlayer = ref(null);
  onMounted(() => {
    console.log(lottiePlayer);
    nextTick(() => {
      lottiePlayer.value.setLooping(false);
      lottiePlayer.value.play();
      lottiePlayer.value.addEventListener("complete", () => {
        isLoading.value = false;
        // document.body.style.overflow = "auto";
      });
    });
  });
  return { isLoading, lottiePlayer };
};
