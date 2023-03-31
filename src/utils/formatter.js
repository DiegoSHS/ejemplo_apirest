export const formatter = (inputDate, mode) => {
    const date = inputDate ? new Date(inputDate) : new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    switch (mode) {
        case 'date':
            return `${year}/${month}/${day}`
        case 'time':
            return `${hours}:${minutes}:${seconds}`
        case 'datetime':
            return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`
        default:
            return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`
    }
}