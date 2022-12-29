import dayjs from 'dayjs'

export const generateDaysOfWeek = function (date) {
  const selectedDate = dayjs(date)
  const currentSelecteDate = selectedDate.set(
    'date',
    selectedDate.get('date') - selectedDate.get('day') + 1
  )
  return Array.from(Array(7).keys()).map((value) => {
    return currentSelecteDate.add(value, 'day')
  })
}
export const getDayName = function (dateOfWeek = 0) {
  const daysName = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thrusday',
    'Friday',
    'Saturday',
  ]
  return daysName[dateOfWeek]
}
