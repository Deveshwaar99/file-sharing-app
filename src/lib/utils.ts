import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getFormattedDateTime() {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  let currentDate = new Date()

  let day = currentDate.getDate()
  let month = months[currentDate.getMonth()]
  let year = currentDate.getFullYear()
  let hours = currentDate.getHours()
  let minutes: string | number = currentDate.getMinutes()
  let meridian = hours >= 12 ? 'PM' : 'AM'

  hours = hours % 12
  hours = hours ? hours : 12

  minutes = minutes < 10 ? '0' + minutes : minutes

  let formattedDateTime = `${month} ${day}, ${year} at ${hours}:${minutes} ${meridian}`
  return formattedDateTime
}
