const defaultSorting = ({ params }) => {
    const {
        sorting = 'DESC' // сортування від більшого до меньшого
    } = params

    return [
        ['createdAt', sorting.toUpperCase()],
    ]
}

module.exports = {
    defaultSorting
}