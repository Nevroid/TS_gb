const currentDate = new Date()
function formatDate(date:object) {
  return date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate()
}

export const today = formatDate(currentDate)
export const chekinDate = formatDate(new Date(currentDate.setDate(currentDate.getDate() + 1)))
export const chekoutDate = formatDate(new Date(currentDate.setDate(currentDate.getDate() + 3)))

