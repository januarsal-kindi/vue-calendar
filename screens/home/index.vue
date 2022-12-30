<template>
  <div>
    <div>
      <CalendarMonthAndDate />
    </div>
    <div class="grid mx-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 mt-8 container  gap-6">
      <div class="">
        <ListEvent />
      </div>
      <div class="col-span-2">
        <TimeTable />
      </div>
    </div>
  </div>
</template>

<script>
import CalendarMonthAndDate from './CalendarMonthAndDate'
import ListEvent from './ListEvent.vue'
import TimeTable from './TimeTable.vue'

export default {
  name: 'HomeScreen',
  components: {
    CalendarMonthAndDate,
    ListEvent,
    TimeTable,
  },
  layout: 'default',
}
</script>
