<template>
  <div>
    <div class="my-4">
      <h2 class="text-lg mb-4 font-semibold">
        {{
        dayjs().diff(selectedDate,'day') == 0 ? 'Today' : dayjs(selectedDate).format('DD MMMM')
        }}</h2>
      <div class="">
        <p class="text-gray-400 text-xs">Courses</p>
        <div
          class="mt-2 w-full h-auto bg-white shadow-lg rounded-lg px-4 pt-2 pb-0 border border-gray-100"
        >
          <div
            v-if="getEventByTypeAndDate('learning', selectedDate).length <= 0"
            class="py-4"
          >
            <p class="text-gray-500 text-center">No Events</p>
          </div>
          <div
            v-for="(eventCalendar, index) in getEventByTypeAndDate(
              'learning',
              selectedDate
            )"
            :key="eventCalendar.id"
            class="event-item my-2 flex flex-row items-center pb-2 border-gray-300"
            :class="{
              'border-b':
                index + 1 <
                getEventByTypeAndDate('learning', selectedDate).length,
            }"
          >
            <div class="event-icon flex justify-center items-center">
              <div
                class="p-2 rounded-full"
                :style="{
                  background: eventCalendar.color,
                }"
              >
                <MapIcon size="20" />
              </div>
            </div>
            <div class="flex-1 mx-4 flex flex-col justify-center">
              <p class="text-sm font-semibold">{{ eventCalendar.title }}</p>
              <p class="text-gray-400 text-xs">s{{ eventCalendar.level }}</p>
            </div>
            <div>
              <DotsVerticalIcon size="16" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6">
      <div class="">
        <p class="text-gray-400 text-xs">additional</p>
        <div
          class="mt-2 w-full h-auto bg-white shadow-lg rounded-lg px-4 py-2 border border-gray-100"
        >
          <div
            v-if="getEventByTypeAndDate('learning', selectedDate).length <= 0"
            class="py-4"
          >
            <p class="text-gray-500 text-center">No Events</p>
          </div>
          <div
            v-for="(eventCalendar, index) in getEventByTypeAndDate(
              'additional',
              selectedDate
            )"
            :key="eventCalendar.id"
            class="event-item my-2 flex flex-row items-center pb-2 border-gray-300"
            :class="{
              'border-b':
                index + 1 <
                getEventByTypeAndDate('learning', selectedDate).length,
            }"
          >
            <div class="event-icon flex justify-center items-center">
              <div
                class="p-2 rounded-full"
                :style="{
                  background: eventCalendar.color,
                }"
              >
                <PlayIcon size="20" />
              </div>
            </div>
            <div class="flex-1 mx-4 flex flex-col justify-center">
              <p class="text-sm font-semibold">{{ eventCalendar.title }}</p>
              <p class="text-gray-400 text-xs">
                {{ eventCalendar.startTime }} - {{ eventCalendar.endTime }}
              </p>
            </div>
            <div>
              <DotsVerticalIcon size="16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MapIcon, DotsVerticalIcon, PlayIcon } from '@vue-hero-icons/outline'
import { mapGetters } from 'vuex'
import dayjs from 'dayjs'

export default {
  name: 'ListEvent',
  components: {
    MapIcon,
    DotsVerticalIcon,
    PlayIcon,
  },
  computed: {
    ...mapGetters({
      getEventByTypeAndDate: 'calendar/getEventByTypeAndDate',
      selectedDate: 'calendar/getSelectedDate',
    }),
  },
  methods: {
    dayjs
  }
}
</script>
