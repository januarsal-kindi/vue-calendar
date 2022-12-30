<template>
    <div class="mt-1 relative flex justify-center items-center">
      <div
        class="absolute m-auto left-0 right-0 w-full flex justify-between transform -translate-y-1/2 top-1/2"
      >
        <ArrowCircleLeftIcon
          class="hover:cursor-pointer"
          @click="() => gotoPrevousDay()"
        />
        <ArrowCircleRightIcon
          class="hover:cursor-pointer"
          @click="() => gotoNextDay()"
        />
      </div>

      <div class="relative mx-4">
        <transition
          name="slide-fade"
          mode="out-in"
          class="flex justify-center items-center"
          tag="div"
        >
          <div class="h-28 w-full flex flex-row cursor-pointer">
            <div class="flex flex-col justify-center items-center">
              <h1 class="text-2xl">
                {{ dayjs(selectedDate).get('date') }}
              </h1>
              <h3 class="text-sm">
                {{ getDayName(dayjs(selectedDate).get('day')) }}
              </h3>
              <div class="px-2 mr-1 flex">
                <div class="flex flex-row items-center mt-2">
                  <span
                    class="mx-1 flex justify-center items-center w-2 h-2 border bg-black border-gray-400 rounded-full"
                  >
                  </span>
                  <span
                    v-for="event in getEventByDate(selectedDate)"
                    :key="`${event.id}-rounded`"
                    :style="{
                      background: event.color,
                    }"
                    class="mx-1 flex justify-center items-center w-2 h-2 border bg-black border-gray-400 rounded-full"
                  >
                  </span>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
</template>

<script>
import dayjs from 'dayjs'
import { mapActions, mapGetters } from 'vuex'
import { getDayName } from '@utils/date'

import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from '@vue-hero-icons/solid'
export default {
  name: 'DateSliderMobile',
  components: {
    ArrowCircleLeftIcon,
    ArrowCircleRightIcon,
  },
  data: function () {
    return {
      date: dayjs(),
    }
  },
  computed: {
    ...mapGetters({
      daysOfWeek: 'calendar/getSelectedWeeks',
      selectedDate: 'calendar/getSelectedDate',
      getEventByDate: 'calendar/getEventByDate',
    }),
  },
  mounted() {
    this.initCalendar()
  },
  methods: {
    ...mapActions({
      initCalendar: 'calendar/init',
      setSelectedDate: 'calendar/setSelectedDate',
    }),
    getDayName,
    dayjs,
    gotoNextDay() {
      this.setSelectedDate(dayjs(this.selectedDate).add(1, 'day'))
      this.initCalendar()
    },
    gotoPrevousDay() {
      this.setSelectedDate(dayjs(this.selectedDate).add(-1, 'day'))
      this.initCalendar()
    },
  },
}
</script>
<style lang="css" scoped>
.dot-position-horizontal {
  left: -0.28rem;
}

.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.15s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(50vw);
  opacity: 0;
  position: absolute;
}
</style>
