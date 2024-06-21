<script setup>
const eventData = reactive([
  {
    image: "imgs/news1.png",
    date: "2023/12/26",
    title: "參與台北寵物論壇，爭取貓咪友善環境",
    text: "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。",
  },
  {
    image: "imgs/news2.png",
    date: "2023/12/24",
    title: "掃街模式開啟！帶著你的貓耳，來和我一起走！",
    text: "街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！",
  },
  {
    image: "imgs/news3.png",
    date: "2023/12/20",
    title: "收容所模特兒大比拼！",
    text: "今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！",
  },
  {
    image: "imgs/news4.png",
    date: "2023/12/26",
    title: "參與台北寵物論壇，爭取貓咪友善環境",
    text: "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！",
  },
]);
</script>
<template>
  <section id="event" class="section">
    <div class="eventSection">
      <div class="mb-16">
        <h3 class="labelText">LATEST EVENTS</h3>
        <h2>最新活動</h2>
      </div>
      <div class="eventSection_content">
        <EventItem :event="eventData[0]" class="max-w-[50%]" />
        <div class="flex flex-col gap-6">
          <EventItem is-sub :event="eventData[1]" />
          <EventItem is-sub :event="eventData[2]" />
          <EventItem is-sub :event="eventData[3]" />
          <button type="">查看更多 <img src="/imgs/arrow-right.svg" alt="" /></button>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
button {
  @apply h-16 w-fit py-4 px-6 gap-2  rounded-[500px] bg-[#F1F5F9] flex items-center justify-around;
}

.eventSection {
  @apply bg-white m-auto flex flex-col;
  &_content {
    @apply flex gap-8 table:flex-col;
  }
}
</style>
