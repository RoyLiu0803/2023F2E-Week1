<script setup></script>
<template>
  <section id="advocate" class="section bg-bgSecondary">
    <div class="advocateSction">
      <div class="advocateSction_content">
        <div>
          <h3 class="labelText">ADVOCATE</h3>
          <h2>候選人主張</h2>
        </div>
        <div class="font-bold text-28s mobile:text-20s">
          我堅信 ! 藉由推動更完善的<span>貓咪福利</span> 和相關政策，更是間接地投資於<span>台灣的未來。</span>
        </div>
        <div class="text-18s mobile:text-14s">
          畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。<br />
          因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
        </div>
      </div>
      <img class="rounded-r-3xl table:rounded-r-none table:!rounded-b-3xl" src="/imgs/advocate.png" alt="" />
    </div>
  </section>
</template>
<style scoped>
.advocateSction {
  @apply w-[82.5rem] bg-white m-auto flex justify-between rounded-3xl table:flex-col table:w-auto;
  &_content {
    @apply py-16 px-10 gap-8 flex flex-col text-textPrimary
    mobile:py-10;
    span {
      @apply text-primary;
    }
  }
}
</style>
