<script setup>
defineProps({
  event: null,
  isSub: {
    type: Boolean,
    default: false,
  },
});
const baseUrl = import.meta.env.BASE_URL;
</script>
<template>
  <div class="eventItem" :class="{ subItem: isSub }">
    <div class="imgbox">
      <img class="w-[calc(100vw-4.5rem)] table:max-w-none" :src="`${baseUrl}${event.image}`" alt="" />
    </div>
    <div class="eventItem_content">
      <span class="eventItem_date">{{ event.date }}</span>
      <span class="eventItem_title">{{ event.title }}</span>
      <p class="eventItem_text">{{ event.text }}</p>
    </div>
  </div>
</template>
<style scoped>
.subItem {
  @apply inline-flex gap-2;
  div {
    @apply !pt-0 !text-16s;
  }
  .imgbox {
    @apply w-[12.5rem] h-max rounded-2xl overflow-hidden mobile:my-auto;
    img {
      @apply w-[12.5rem];
    }
  }
  .eventItem_content {
    @apply max-w-[70%] mobile:max-w-[70%];
  }
}
.eventItem {
  &_content {
    @apply pt-4 flex gap-2 text-textPrimary flex-col mobile:w-[calc(100vw-4.5rem)] mobile:gap-1;
  }
  &_date {
    @apply text-14s text-[#64748B];
  }
  &_title {
    @apply text-20s font-bold mobile:text-16s;
  }
  &_text {
    @apply text-16s max-w-fit mobile:text-14s;
  }
}
</style>
