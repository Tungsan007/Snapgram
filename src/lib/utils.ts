import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatRelativeTime(dateString: string): string {
  const currentDate: Date = new Date();
  const providedDate: Date = new Date(dateString);
  const timeDifference: number = currentDate.getTime() - providedDate.getTime();
  const secondsDifference: number = Math.floor(timeDifference / 1000);

  interface Interval {
      label: string;
      seconds: number;
  }

  const intervals: Interval[] = [
      { label: 'year', seconds: 31536000 },
      { label: 'month', seconds: 2592000 },
      { label: 'day', seconds: 86400 },
      { label: 'hour', seconds: 3600 },
      { label: 'minute', seconds: 60 },
      { label: 'second', seconds: 1 }
  ];

  for (let i = 0; i < intervals.length; i++) {
      const interval: Interval = intervals[i];
      const intervalValue: number = Math.floor(secondsDifference / interval.seconds);
      if (intervalValue >= 1) {
          return intervalValue === 1 ? `1 ${interval.label} ago` : `${intervalValue} ${interval.label}s ago`;
      }
  }
  return 'Just now';
}

export const checkIsLiked = (likeList: string[], userId: string) => {
  return likeList.includes(userId);
};
