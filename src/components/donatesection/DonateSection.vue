<script setup></script>
<template>
  <section id="donate" class="section">
    <div class="donateSection">
      <div class="donateItem bg-primary">
        <h4 class="text-52s">小額支持喵喵</h4>
        <span class="font-semibold text-20s">您的小筆捐款，是每隻毛孩未來的大大動力！</span>
        <div class="donateItem_display">
          <div>
            <button>小額捐款 <img src="/imgs/arrow-right.svg" alt="" /></button>
          </div>
          <img src="/imgs/donate.png" alt="" />
        </div>
      </div>
      <div class="donateItem bg-secondary">
        <h4 class="text-52s">民眾服務信箱</h4>
        <span class="font-semibold text-20s">親愛的鄉親，每一位市民的意見都是我們社區前進的原動力！</span>
        <div class="donateItem_display">
          <div>
            <button>填寫表單 <img src="/imgs/arrow-right.svg" alt="" /></button>
          </div>
          <img src="/imgs/service.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
button {
  @apply h-16 w-[9.5rem] py-4 px-6 gap-2  rounded-[500px] bg-[#F1F5F9] flex items-center justify-around text-textPrimary
  mobile:h-12 mobile:w-[7rem] mobile:text-14s mobile:px-3 mobile:py-2;
  img {
    @apply scale-75;
  }
}
.donateSection {
  @apply bg-white m-auto flex gap-6 mobile:flex-col;
  .donateItem {
    @apply w-[49%] p-24 gap-6 rounded-[2rem]  flex flex-col text-white
    table:px-10 py-6
    mobile:w-full;
    &_display {
      @apply flex items-center justify-between;
      height: -webkit-fill-available;
      img {
        @apply table:max-w-[50%];
      }
    }
  }
}
h4 {
  font-family: "MantouSans";
}
</style>
