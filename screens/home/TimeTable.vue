<template>
  <div class="h-full">
    <h2 class="text-lg mb-4 font-semibold">Time Table</h2>
    <div class="relative h-full">
      <div
        class="w-full h-full min-h-[24rem] relative overflow-auto whitespace-nowrap box-border border-l-gray-200 mt-4 pl-8"
      >
        <div
          v-for="indexTime in 97"
          :id="`time-${indexTime}`"
          :key="indexTime"
          class="mt-4 w-[2rem] box-border h-[90%] inline-block relative"
          :class="{
            'border-l border-l-gray-200': ((indexTime - 1) * 15) % 60 == 0,
          }"
          @drop="
            onDrop({
              event: $event,
              time: dayjs(selectedDate)
                .startOf('date')
                .add((indexTime - 1) * 15, 'minute'),
              indexTime,
            })
          "
          @dragover.prevent
          @dragenter.prevent
        >
          <p class="absolute left-0 translate-x-[-50%]">
            {{
              ((indexTime - 1) * 15) % 60 == 0
                ? startHour.add((indexTime - 1) * 15, 'minute').format('HH:mm')
                : '&nbsp;'
            }}
          </p>
        </div>

        <div
          v-for="eventCalendar in getEventByDate(selectedDate)"
          :key="`event-id-${eventCalendar.id}`"
          draggable="true"
          class="absolute rounded-xl border border-gray-700 p-2"
          :style="{
            width: `${generateWidth(
              eventCalendar.startTime,
              eventCalendar.endTime
            )}rem`,
            top: eventCalendar.type == 'learning' ? '45px' : '52%',
            height: '38%',
            left:
              eventDraggedId == eventCalendar.id
                ? eventPositionDragged
                : `${generatePosition(eventCalendar.startTime)}rem`,
            background: eventCalendar.color,
          }"
          @dragover="(e) => onDragover(e, eventCalendar.id)"
        >
          <div class="flex justify-between flex-col h-full">
            <div
              class="px-1 py-1 bg-white rounded-full text-xs w-fit whitespace-normal"
            >
              {{ dayjs(eventCalendar.startTime).format('HH:mm') }} -
              {{ dayjs(eventCalendar.endTime).format('HH:mm') }}
            </div>
            <div>
              <p class="text-sm font-semibold whitespace-normal mb-1">
                {{ eventCalendar.description }}
              </p>
              <p class="text-xs text-gray-700 whitespace-normal">
                {{ eventCalendar.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { mapGetters,mapActions } from 'vuex'

export default {
  name: 'TimeTable',
  components: {},
  layout: 'default',
  data: () => ({
    startHour: dayjs().startOf('date'),
    // showEvent : true,
    positionLeft: `130rem`,
    eventDraggedId: null,
    eventPositionDragged: null,
  }),
  computed: {
    ...mapGetters({
      getEventByDate: 'calendar/getEventByDate',
      selectedDate: 'calendar/getSelectedDate',
    }),
  },
  methods: {
      ...mapActions({
      updateEvent: 'calendar/updateEvent',
    }),
    onDragover(ev, id) {
      this.eventDraggedId = id
      const shiftX = ev.clientX - ev.target.getBoundingClientRect().left
      this.eventPositionDragged = ev.pageX - shiftX + 'px'
    },
    onDrop({ event, indexTime, time }) {
      this.eventPositionDragged = indexTime * 2 + 'rem'
      this.updateEvent({dateTime:time,id:this.eventDraggedId})
      this.eventDraggedId = null 
      this.eventPositionDragged = null
    },
    generateWidth(startTime, endTime) {
      const startTimeFormat = dayjs(startTime)
      const endTimeFormat = dayjs(endTime)
      return (endTimeFormat.diff(startTimeFormat, 'minute') / 15) * 2
    },
    generatePosition(startTime) {
      const startTimeFormat = dayjs(startTime)
      const startTimeOfDate = dayjs(this.selectedDate)
        .set('hour', 0)
        .set('minute', 0)
      return (startTimeFormat.diff(startTimeOfDate, 'minute') / 15) * 2 + 2
    },
    dayjs,
  },
}
</script>
