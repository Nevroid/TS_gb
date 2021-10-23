const currentDate = new Date()
function formatDate(date) {
  return date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate()
}

export const today = formatDate(currentDate)
export const chekinDate = formatDate(new Date(currentDate.setDate(currentDate.getDate() + 1)))
export const chekoutDate = formatDate(new Date(currentDate.setDate(currentDate.getDate() + 3)))
// export const lastDate = formatDate(new Date(currentDate.setMonth(currentDate.getDate() - 1 )))
export const lastDate = formatDate(new Date(currentDate.getFullYear(), (currentDate.getMonth() + 2), 0))


