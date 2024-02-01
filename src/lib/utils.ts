import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
    const currentDate: Date = new Date();
    const previousDate: Date = new Date(dateString);

    const timeDifference: number = currentDate.getTime() - previousDate.getTime();
    const seconds: number = Math.floor(timeDifference / 1000);
    const minutes: number = Math.floor(seconds / 60);
    const hours: number = Math.floor(minutes / 60);
    const days: number = Math.floor(hours / 24);
    const months: number = Math.floor(days / 30.5);
    const years: number = Math.floor(months / 12);

    if (years > 0) {
      return years === 1 ? "a day ago" : `${years} days ago`;
    } else if (months > 0) {
      return months === 1? "a month ago" : `${months} months ago`;
    } else if (days > 0) {
        return days === 1 ? "a day ago" : `${days} days ago`;
    } else if (hours > 0) {
        return hours === 1 ? "an hour ago" : `${hours} hours ago`;
    } else if (minutes > 0) {
        return minutes === 1 ? "a minute ago" : `${minutes} minutes ago`;
    } else {
        return "just now";
    }
}

export const checkIsLiked = (likeList: string[], userId: string) => {
    return likeList.includes(userId);
};