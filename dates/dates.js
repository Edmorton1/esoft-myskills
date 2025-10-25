const date = new Date()

console.log(
  date.getFullYear(),
  date.getMonth(),
  date.getDate(),
  date.getDay(),
  date.getHours(),
  date.getMinutes(),
  date.getSeconds(),
  date.getMilliseconds(),
  date.getTime(),
  date.toString(),
  date.toISOString()
)

const iso = new Date('2025-10-25T00:00:00')

const newDateTZ = new Date('2025-10-25 18:24:07.221495+05')

const newDate = new Date('2025-10-25 18:24:07.221495')

console.log(iso, new Date(1761395507724).toString(), date.toLocaleString())

console.log(newDateTZ.toISOString(), newDate.toISOString())