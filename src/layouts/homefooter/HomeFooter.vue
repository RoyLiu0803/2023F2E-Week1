<script setup></script>
<template>
  <footer class="homefooter">
    <div class="homefooter_item">
      <div class="flex items-center gap-2">
        <p class="circle3 !w-8 !h-8 !text-20s">3</p>
        <p class="text-primary text-28s font-bold">喵立翰 Miao Li-Han</p>
      </div>
      <nav>
        <ul class="flex gap-3">
          <li class="touchIcon">
            <img class="m-auto" src="/imgs/icon-fb.png" alt="facebook" />
          </li>
          <li class="touchIcon w-10 h-10 flex items-center justify-center bg-white rounded-full">
            <img class="m-auto" src="/imgs/icon-ig.png" alt="ig" />
          </li>
          <li class="touchIcon w-10 h-10 flex items-center justify-center bg-white rounded-full">
            <img class="m-auto" src="/imgs/icon-yt.png" alt="youtube" />
          </li>
        </ul>
      </nav>
      <p class="text-14s">© 2023 喵立翰 Miao Li-Han 版權所有 <br />設計師：Jhen 工程師：Roy</p>
    </div>
    <div class="homefooter_item">
      <div class="text-24s font-bold">競選總部</div>
      <div class="text-16s">
        <div>辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓</div>
        <div>電話：(02) 888-5678</div>
        <div>電子郵件地址：meowoffice@linmeow.tw</div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.homefooter {
  @apply h-[17rem] py-16 px-[17.25rem] bg-bgSecondary flex justify-between text-textPrimary
  table:py-16 table:px-9 table:flex-col table:h-max table:gap-6;
  &_item {
    @apply flex flex-col justify-between gap-2;
  }
}
</style>
