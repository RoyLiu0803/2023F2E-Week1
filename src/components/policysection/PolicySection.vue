<script setup>
const policyData = reactive([
  {
    image: "imgs/policy1.png",
    text: "為毛孩子謀福利！\n推動寵物醫療保障方案",
  },
  {
    image: "imgs/policy2.png",
    text: "打造休閒天堂\n推廣寵物休閒與娛樂場所",
  },
  {
    image: "imgs/policy3.png",
    text: "推廣寵物飼養教育，讓愛更加專業",
  },
]);
</script>
<template>
  <section id="policy" class="section">
    <div class="policySection">
      <div class="mb-16 mobile:mb-10">
        <h3 class="labelText">POLICY ISSUES</h3>
        <h2>政策議題</h2>
      </div>
      <div class="policySection_content">
        <PolicyItem v-for="policy in policyData" :key="policy" :policy="policy" />
      </div>
    </div>
  </section>
</template>
<style scoped>
button {
  @apply h-16 w-[9.5rem] py-4 px-6 gap-2  rounded-[500px] bg-[#F1F5F9] flex items-center justify-around;
}
.policySection {
  @apply bg-white m-auto flex flex-col;
  &_content {
    @apply flex justify-between gap-8 table:flex-wrap mobile:gap-16;
  }
}
</style>
