<template>
  <client-only placeholder="Loading...">
    <div class="mt-1 relative">
      <div
        class="absolute m-auto left-0 right-0 w-full flex justify-between transform -translate-y-1/2 top-1/2"
      >
        <ArrowCircleLeftIcon
          class="hover:cursor-pointer"
          @click="() => setPreviousWeek()"
        />
        <ArrowCircleRightIcon
          class="hover:cursor-pointer"
          @click="() => setNextWeek()"
        />
      </div>

      <div class="relative ml-8 mr-4">
        <transition-group
          name="slide-fade"
          mode="out-in"
          class="grid grid-cols-7 gap-3"
          tag="div"
        >
          <div
            v-for="(day, index) in daysOfWeek"
            :key="index + day.get('date')"
            class="h-28 w-full flex cursor-pointer "
            @click="
              () => {
                setSelectedDate(day)
              }
            "
          >
            <div class="px-2 mr-1 flex items-end">
              <ol
                class="h-1/2 relative border-l border-gray-200 dark:border-gray-700"
              >
                <li class="">
                  <div class="absolute dot-position-horizontal">
                    <span
                      class="mb-1 flex justify-center items-center w-2 h-2 border bg-black border-gray-400 rounded-full"
                    >
                    </span>
                    <span
                      v-for="event in getEventByDate(day)"
                      :key="`${event.id}-rounded`"
                      :style="{
                        background: event.color,
                      }"
                      class="mb-1 flex justify-center items-center w-2 h-2 border bg-black border-gray-400 rounded-full"
                    >
                    </span>
                  </div>
                </li>
              </ol>
            </div>
            <div
              class="flex flex-col justify-center"
              :class="{
                'text-gray-400': !dayjs(selectedDate).isSame(day, 'day'),
              }"
            >
              <h1 class="text-2xl">
                {{ day.get('date') }}
              </h1>
              <h3 class="text-sm">{{ getDayName(day.get('day')) }}</h3>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </client-only>
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
  name: 'DateSlider',
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
      setNextWeek: 'calendar/setNextWeek',
      setPreviousWeek: 'calendar/setPreviousWeek',
      setSelectedDate: 'calendar/setSelectedDate',
    }),
    getDayName,
    dayjs,
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
