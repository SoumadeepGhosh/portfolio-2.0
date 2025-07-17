import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { iconComponents } from "@/lib/data" // Import the iconComponents map

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getIconComponent(iconName: string) {
  return iconComponents[iconName]
}
