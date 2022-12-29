import dayjs from 'dayjs'
import { generateDaysOfWeek } from '@utils/date'

export const state = () => ({
  selectedDate: dayjs(),
  selectedWeeks: [],
  eventsCalendar: {
    '2022-12-26': [
      {
        id: 1,
        color: '#14b8a6',
        title: 'Englis: Level 1',
        level: 'stage 47/70',
        description: 'Practice Writing and Talking',
        type: 'learning',
        startTime: '2022-12-26 17:30',
        endTime: '2022-12-26 18:30',
      },
      {
        id: 2,
        color: '#22d3ee',
        title: 'UI/UX advance ',
        level: 'stage 47/70',
        description: 'Interface Animation In Priciple',
        type: 'learning',
        startTime: '2022-12-26 19:30',
        endTime: '2022-12-26 21:00',
      },
      {
        id: 3,
        color: '#d8b4fe',
        title: 'Speaking Club',
        level: 'stage 47/70',
        description: 'Speaking Club',
        type: 'additional',
        startTime: '2022-12-26 07:30',
        endTime: '2022-12-26 08:15',
      },
    
    ],
    '2022-12-27': [
      {
        id: 5,
        color: '#14b8a6',
        title: 'Englis: Level 1',
        level: 'stage 47/70',
        description: 'Practice Writing and Talking',
        type: 'learning',
        startTime: '2022-12-27 17:30',
        endTime: '2022-12-27 18:30',
      },
      {
        id: 6,
        color: '#22d3ee',
        title: 'UI/UX advance ',
        level: 'stage 47/70',
        description: 'Interface Animation In Priciple',
        type: 'learning',
        startTime: '2022-12-27 19:30',
        endTime: '2022-12-27 21:00',
      },
    
      {
        id: 8,
        color: '#bae6fd',
        title: 'Create A Cool Portofolio',
        level: 'stage 47/70',
        description: 'Interface Animation In Priciple',
        type: 'additional',
        startTime: '2022-12-27 18:45',
        endTime: '2022-12-27 20:00',
      },
    ],
    '2022-12-28': [
      {
        id: 9,
        color: '#14b8a6',
        title: 'Englis: Level 1',
        level: 'stage 47/70',
        description: 'Practice Writing and Talking',
        type: 'learning',
        startTime: '2022-12-28 17:30',
        endTime: '2022-12-28 18:30',
      },

      {
        id: 11,
        color: '#d8b4fe',
        title: 'Speaking Club',
        level: 'stage 47/70',
        description: 'Speaking Club',
        type: 'additional',
        startTime: '2022-12-28 07:30',
        endTime: '2022-12-28 08:15',
      },
      {
        id: 12,
        color: '#bae6fd',
        title: 'Create A Cool Portofolio',
        level: 'stage 47/70',
        description: 'Interface Animation In Priciple',
        type: 'additional',
        startTime: '2022-12-28 18:45',
        endTime: '2022-12-28 20:00',
      },
    ],
    '2022-12-29': [
      {
        id: 13,
        color: '#14b8a6',
        title: 'Englis: Level 1',
        level: 'stage 47/70',
        description: 'Practice Writing and Talking',
        type: 'learning',
        startTime: '2022-12-29 17:30',
        endTime: '2022-12-29 18:30',
      },
      {
        id: 14,
        color: '#22d3ee',
        title: 'UI/UX advance ',
        level: 'stage 47/70',
        description: 'Interface Animation In Priciple',
        type: 'learning',
        startTime: '2022-12-29 19:30',
        endTime: '2022-12-29 21:00',
      },
      {
        id: 15,
        color: '#d8b4fe',
        title: 'Speaking Club',
        level: 'stage 47/70',
        description: 'Speaking Club',
        type: 'additional',
        startTime: '2022-12-29 07:30',
        endTime: '2022-12-29 08:15',
      },
      {
        id: 16,
        color: '#bae6fd',
        title: 'Create A Cool Portofolio',
        level: 'stage 47/70',
        description: 'Interface Animation In Priciple',
        type: 'additional',
        startTime: '2022-12-29 18:45',
        endTime: '2022-12-29 20:00',
      },
    ],
    '2022-12-30': [
      {
        id: 17,
        color: '#14b8a6',
        title: 'Englis: Level 1',
        level: 'stage 47/70',
        description: 'Practice Writing and Talking',
        type: 'learning',
        startTime: '2022-12-30 17:30',
        endTime: '2022-12-30 18:30',
      },
  
      {
        id: 19,
        color: '#d8b4fe',
        title: 'Speaking Club',
        level: 'stage 47/70',
        description: 'Speaking Club',
        type: 'additional',
        startTime: '2022-12-30 07:30',
        endTime: '2022-12-30 08:15',
      },
      {
        id: 20,
        color: '#bae6fd',
        title: 'Create A Cool Portofolio',
        level: 'stage 47/70',
        description: 'Interface Animation In Priciple',
        type: 'additional',
        startTime: '2022-12-30 18:45',
        endTime: '2022-12-30 20:00',
      },
    ],
    '2022-12-31': [
      {
        id: 21,
        color: '#14b8a6',
        title: 'Englis: Level 1',
        level: 'stage 47/70',
        description: 'Practice Writing and Talking',
        type: 'learning',
        startTime: '2022-12-31 17:30',
        endTime: '2022-12-31 18:30',
      },
      {
        id: 22,
        color: '#22d3ee',
        title: 'UI/UX advance ',
        level: 'stage 47/70',
        description: 'Interface Animation In Priciple',
        type: 'learning',
        startTime: '2022-12-31 19:30',
        endTime: '2022-12-31 21:00',
      },

    ],
    '2023-01-01': [
      {
        id: 25,
        color: '#14b8a6',
        title: 'Englis: Level 1',
        level: 'stage 47/70',
        description: 'Practice Writing and Talking',
        type: 'learning',
        startTime: '2023-01-01 17:30',
        endTime: '2023-01-01 18:30',
      },
      {
        id: 26,
        color: '#22d3ee',
        title: 'UI/UX advance ',
        level: 'stage 47/70',
        description: 'Interface Animation In Priciple',
        type: 'learning',
        startTime: '2023-01-01 19:30',
        endTime: '2023-01-01 21:00',
      },
      {
        id: 27,
        color: '#d8b4fe',
        title: 'Speaking Club',
        level: 'stage 47/70',
        description: 'Speaking Club',
        type: 'additional',
        startTime: '2023-01-01 07:30',
        endTime: '2023-01-01 08:15',
      },
      {
        id: 28,
        color: '#bae6fd',
        title: 'Create A Cool Portofolio',
        level: 'stage 47/70',
        description: 'Interface Animation In Priciple',
        type: 'additional',
        startTime: '2023-01-01 18:45',
        endTime: '2023-01-01 20:00',
      },
    ],
    '2023-01-02': [
      {
        id: 29,
        color: '#14b8a6',
        title: 'Englis: Level 1',
        level: 'stage 47/70',
        description: 'Practice Writing and Talking',
        type: 'learning',
        startTime: '2023-01-02 17:30',
        endTime: '2023-01-02 18:30',
      },
      {
        id: 30,
        color: '#22d3ee',
        title: 'UI/UX advance ',
        level: 'stage 47/70',
        description: 'Interface Animation In Priciple',
        type: 'learning',
        startTime: '2023-01-02 19:30',
        endTime: '2023-01-02 21:00',
      },
      {
        id: 31,
        color: '#d8b4fe',
        title: 'Speaking Club',
        level: 'stage 47/70',
        description: 'Speaking Club',
        type: 'additional',
        startTime: '2023-01-02 07:30',
        endTime: '2023-01-02 08:15',
      },
      {
        id: 32,
        color: '#bae6fd',
        title: 'Create A Cool Portofolio',
        level: 'stage 47/70',
        description: 'Interface Animation In Priciple',
        type: 'additional',
        startTime: '2023-01-02 18:45',
        endTime: '2023-01-02 20:00',
      },
    ],
    '2023-01-03': [
      {
        id: 33,
        color: '#14b8a6',
        title: 'Englis: Level 1',
        level: 'stage 47/70',
        description: 'Practice Writing and Talking',
        type: 'learning',
        startTime: '2023-01-03 17:30',
        endTime: '2023-01-03 18:30',
      },
      {
        id: 34,
        color: '#22d3ee',
        title: 'UI/UX advance ',
        level: 'stage 47/70',
        description: 'Interface Animation In Priciple',
        type: 'learning',
        startTime: '2023-01-03 19:30',
        endTime: '2023-01-03 21:00',
      },
 
    ],
  },
})

export const actions = {
  init({ state, commit }) {
    const daysOfWeek = generateDaysOfWeek(state.selectedDate)
    commit('SET_WEEK', daysOfWeek)
  },
  setSelectedDate({ commit }, date) {
    commit('SET_SELECTED_DATE', date)
  },
  setNextWeek({ state, commit }) {
    const selecteDate = state.selectedWeeks[0].add(7, 'days')
    commit('SET_WEEK', generateDaysOfWeek(selecteDate))
    commit('SET_SELECTED_DATE', selecteDate)
  },
  setPreviousWeek({ state, commit }) {
    const selecteDate = state.selectedWeeks[0].add(-7, 'days')
    commit('SET_WEEK', generateDaysOfWeek(selecteDate))
    commit('SET_SELECTED_DATE', selecteDate)
  },
  updateEvent({ state, commit }, { dateTime, id }) {
    const allEvent = { ...state.eventsCalendar }
    const selectedDate = dayjs(dateTime).format('YYYY-MM-DD')
    const seletedEventByDate = allEvent[selectedDate]
    const selectedIndex = seletedEventByDate?.findIndex(
      (value) => value.id === id
    )

    if (selectedIndex > 0) {
      const durationInMinute = dayjs(
        seletedEventByDate[selectedIndex].endTime
      ).diff(seletedEventByDate[selectedIndex].startTime, 'minute')
      seletedEventByDate[selectedIndex] = {
        ...seletedEventByDate[selectedIndex],
        startTime: dayjs(dateTime).format('YYYY-MM-DD HH:mm'),
        endTime: dayjs(dateTime)
          .add(durationInMinute, 'minute')
          .format('YYYY-MM-DD HH:mm'),
      }
    }
    commit('UPDATE_EVENT', { data: seletedEventByDate, selectedDate })
  },
}

export const mutations = {
  SET_WEEK(state, daysOfWeek) {
    state.selectedWeeks = [...daysOfWeek]
  },
  SET_SELECTED_DATE(state, selectedDate) {
    state.selectedDate = selectedDate
  },
  UPDATE_EVENT(state, { selectedDate, data }) {
    state.eventsCalendar[selectedDate] = data
  },
}

export const getters = {
  getSelectedWeeks(state) {
    return state.selectedWeeks
  },
  getSelectedDate(state) {
    return state.selectedDate
  },
  getEventByTypeAndDate(state) {
    return function (type = '', date) {
      const selectedDate = dayjs(date).format('YYYY-MM-DD')
      const getEventsByDate = state.eventsCalendar[selectedDate]

      return getEventsByDate
        ? getEventsByDate.filter((value) => value.type === type)
        : []
    }
  },
  getEventByDate(state) {
    return function (date) {
      const selectedDate = dayjs(date).format('YYYY-MM-DD')
      const getEventsByDate = state.eventsCalendar[selectedDate]
      return getEventsByDate || []
    }
  },
}
