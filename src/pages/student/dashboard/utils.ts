import type { MyScheduleData } from "./queries/useMyScheduleQuery";

const getHour = (time: string) => Number(time.split(":")[0]);

// Group by hour, and collect items where their start time falls in that hour
export function groupByHour(data: MyScheduleData[]) {
  const hourGroups: Record<number, MyScheduleData[]> = {};
  data.forEach((item) => {
    const hour = getHour(item.time);
    if (!hourGroups[hour]) hourGroups[hour] = [];
    hourGroups[hour].push(item);
  });
  return hourGroups;
}
