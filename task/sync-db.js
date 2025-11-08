let times = 0;

const syncDB = () => {
    times += 1
    console.log('Tick cada 5 segs ', times)
    console.log('Cangrejo')

    return times
}

module.exports = {
    syncDB
}