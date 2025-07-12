export const scheduleKeys = {
  all: ['WEEKLY_SCHEDULE'] as const,
  weekly: (start: string, end: string) => [...scheduleKeys.all, start, end] as const,
};
