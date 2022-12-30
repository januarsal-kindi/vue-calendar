<template>
  <div class="pt-4 px-6 bg-black text-white">
    <div class="container mx-auto">
      <div class="text-lg font-semibold">
        <!-- {{dayjs(selectedDate).format('MMMM YYYY')}} -->
          <client-only placeholder="Loading...">

        <VueDatePicker
          :value="dayjs(selectedDate).format('YYYY-MM-DD')"
          @input="
            (e) => {
              onSelectDate(e)
            }
          "
        />
          </client-only>
      </div>
      <div class="hidden xl:block lg:block md:block 2xl:block">
        <DateSlider />
      </div>
      <div class="block xl:hidden lg:hidden md:hidden 2xl:hidden">
        <DateSliderMobile />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import dayjs from 'dayjs'
import { VueDatePicker } from '@mathieustan/vue-datepicker'
import DateSlider from './DateSlider.vue'
import DateSliderMobile from './DateSliderMobile.vue'

import '@mathieustan/vue-datepicker/dist/vue-datepicker.min.css'

export default {
  name: 'CalendarMonthAndDate',
  components: {
    DateSlider,
    VueDatePicker,
    DateSliderMobile
  },
  computed: {
    ...mapGetters({
      selectedDate: 'calendar/getSelectedDate',
    }),
  },
  methods: {
    ...mapActions({
      initCalendar: 'calendar/init',
      setSelectedDate: 'calendar/setSelectedDate',
    }),
    dayjs,
    onSelectDate(e) {
      this.setSelectedDate(e)
      this.initCalendar()
    },
  },
}
</script>
<style lang="css" scoped>
.dot-position-horizontal {
  left: -0.28rem;
}
</style>
