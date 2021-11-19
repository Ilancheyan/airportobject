const { TestWatcher } = require("@jest/core")

const bag = require('./bag')
describe ('Bag class',() => {
    test('has weight', () => {
        const testbags = new bag(35)
        expect(testbags.valid_weight()).toBeFalsy()
        
    })
})