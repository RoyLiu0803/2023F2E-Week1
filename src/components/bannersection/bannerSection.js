import { onMounted, watch } from "vue";

export default () => {
  const marquee = ref(null);
  watch(isLoading, () => startAnimation());
  const startAnimation = () => {
    /** 跑馬燈 */
    const width = marquee.value.clientWidth;
    const moveX = width * -1.25;
    const duration = Math.abs(moveX / 50);
    gsap.to("#marqueeText", {
      x: moveX,
      duration,
      repeat: -1,
    });
    /** 頁面動畫 */
    const tl = gsap.timeline();
    tl.from("#titleText", {
      y: "10%",
      opacity: 0,
      duration: 0.35,
      scale: 1.25,
    });
    tl.from("#dateText", {
      y: "10%",
      opacity: 0,
      duration: 0.25,
    });
    tl.from("#nameText", {
      y: "10%",
      opacity: 0,
      duration: 0.25,
    });
    tl.from("#cloud", {
      y: "10%",
      opacity: 0,
      duration: 0.25,
    });
    tl.from("#man", {
      y: "10%",
      opacity: 0,
      duration: 0.35,
    });
  };
  return { marquee };
};
