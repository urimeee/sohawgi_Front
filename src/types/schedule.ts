export type DailyScheduleDate = {
  year: string,
  month: string,
  day: string
}

export type WeeklyScheduleRange = {
  start: string,
  end: string,
}

export type UseSchedulesProps = {
  dailyDate ?: DailyScheduleDate,
  weekRangeDate ?: WeeklyScheduleRange,
}