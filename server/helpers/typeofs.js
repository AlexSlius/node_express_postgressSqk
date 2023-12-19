const type = (value) => {
    var regex = /^\[object (\S+?)\]$/;
    var matches = Object.prototype.toString.call(value).match(regex) || [];

    return (matches[1] || 'undefined').toLowerCase();
}

const isArray = (value) => {
    return (type(value) === 'array')
}

module.exports = {
    isArray
}