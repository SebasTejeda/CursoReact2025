export const formattedDate = date => {
    const fecha = new Date(date)

    const format = new Intl.DateTimeFormat('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(fecha)

    return format
}

export const formatFloat = (price, cant=3) => {
    const ans = parseFloat(price).toFixed(cant)
    return ans === 'NaN' ? '-' : ans
}
