<template>
  <div class="pt-4 px-6 bg-black text-white">
    <div class="container  mx-auto">
      <div class="text-lg font-semibold">{{dayjs(selectedDate).format('MMMM YYYY')}}</div>
      <DateSlider />
    </div>
  </div>
</template>

<script>
import {  mapGetters } from 'vuex'
import dayjs from 'dayjs'
import DateSlider from './DateSlider.vue'

export default {
  name: 'CalendarMonthAndDate',
  components: {
    DateSlider,
  },
  computed : {
     ...mapGetters({
      selectedDate: 'calendar/getSelectedDate',
    }),
  },
  methods : {
    dayjs
  }
}
</script>
<style lang="css" scoped>
.dot-position-horizontal {
  left: -0.28rem;
}
</style>
