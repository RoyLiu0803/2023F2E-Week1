<script setup>
const { marquee } = bannerSection();
</script>
<template>
  <section id="banner">
    <div class="title">
      <div></div>
      <h1 id="titleText" class="table:whitespace-pre-line">{{ "台灣的明天 \n喵先鋪路" }}</h1>
      <div class="flex items-center mobile:flex-col">
        <p id="dateText" class="date">2024 立委參選人</p>
        <div id="nameText" class="miaoLiHan">
          <p class="circle3">3</p>
          <p class="text-primary text-40s font-bold mobile:text-28s">喵立翰 Miao Li-Han</p>
        </div>
      </div>
    </div>
    <div class="relative mt-9">
      <object
        id="cloud"
        class="absolute bottom-0 left-1/2 -translate-x-1/2 z-[-1] mobile:max-h-[250px]"
        type="image/svg+xml"
        data="/imgs/banner-bg.svg"
      ></object>
      <!-- <img id="cloud" class="absolute bottom-0 left-1/2 -translate-x-1/2 z-[-1]" src="/imgs/banner-bg.svg" alt="" /> -->
      <img id="man" class="max-h-[500px] mobile:max-h-[377px]" src="/imgs/banner-people.png" alt="" />
    </div>
    <div class="marquee">
      <p id="marqueeText" ref="marquee" class="whitespace-nowrap translate-x-full">
        為喵星人，護台灣！ 從喵的眼中，看見台灣 喵的未來，人的希望
      </p>
    </div>
  </section>
</template>
<style scoped>
img,
object {
  @apply m-auto;
}
.title {
  font-family: "MantouSans";
  @apply mt-[100px] flex flex-col items-center mobile:mt-0;
  p {
    font-family: "Inter";
  }
  .date {
    @apply bg-secondary rounded-2xl px-4 py-3 text-white mr-4 text-28s font-bold mobile:text-20s;
  }
}
.circle {
  @apply w-[50px] h-[50px] bg-gradient rounded-full text-white text-32s font-black;
}
.marquee {
  font-family: "MantouSans";
  @apply flex gap-6 bg-primary text-white h-[5.45rem] leading-[5.45rem] text-[4rem] tracking-widest overflow-hidden;
}
</style>
