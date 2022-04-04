function findMatching(drivers, match) {
    return drivers.filter(function (driver) {
        return driver.toLowerCase() === match.toLowerCase()
    })
}

function fuzzyMatch(drivers, match) {
    return drivers.filter(function (driver) {
        return driver.toLowerCase().substring(0, match.length) === match.toLowerCase()
    })
}

function matchName(drivers, match) {
    return drivers.filter(function (driver) {
        return driver.name === match
    })
}