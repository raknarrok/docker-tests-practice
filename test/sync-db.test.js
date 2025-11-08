const { syncDB } = require('../task/sync-db')

describe('syncDB', () => {
    test('should increment times and return the correct value', () => {
        expect(syncDB()).toBe(1)
        expect(syncDB()).toBe(2)
        expect(syncDB()).toBe(3)
    })
})