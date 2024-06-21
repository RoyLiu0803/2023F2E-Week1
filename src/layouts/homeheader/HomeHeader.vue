<script setup>
import { isLoading } from "@/components/loadingitem/loadingItem.js";
const scrollToView = view => {
  const yOffset = -50;
  const element = document.getElementById(view);
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};
</script>
<template>
  <header v-if="!isLoading" class="homeHeader">
    <div class="homeHeader_container">
      <div class="flex items-center">
        <img src="/imgs/logo.svg" class="h-[43px] w-[53px]" /> <span>喵立翰 Miao Li-Han</span>
      </div>
      <nav class="table:hidden">
        <ul>
          <li @click="scrollToView('advocate')"><label>候選人主張</label></li>
          <li @click="scrollToView('event')"><label>最新活動</label></li>
          <li @click="scrollToView('policy')"><label>政策議題</label></li>
          <li @click="scrollToView('donate')"><label>小額捐款</label></li>
          <li @click="scrollToView('donate')"><label>民眾服務信箱</label></li>
        </ul>
      </nav>
      <nav class="self-center mobile:hidden">
        <ul>
          <li class="touchIcon">
            <img src="/imgs/icon-fb.png" alt="facebook" />
          </li>
          <li class="touchIcon">
            <img src="/imgs/icon-ig.png" alt="ig" />
          </li>
          <li class="touchIcon">
            <img src="/imgs/icon-yt.png" alt="youtube" />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.homeHeader {
  @apply fixed z-30 w-[100vw] h-[100px] py-4 mobile:relative;
  &_container {
    @apply flex justify-between w-[97.5vw] h-[67px] py-3 px-6 mx-auto gap-0 rounded-2xl  bg-white;
    span {
      @apply ml-2 text-center font-bold text-24s text-primary;
    }
    ul {
      @apply flex gap-4 leading-9 text-18s;
      label {
        @apply cursor-pointer p-2;
        &:hover {
          @apply border-b-2 text-primary;
        }
      }
    }
  }
}
</style>
