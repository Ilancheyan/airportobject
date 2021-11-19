const { TestWatcher } = require("@jest/core")

const airplane = require('./airplane')
describe ('airplane class',() => {
    test('airplane capacity', () => {
        const testairplane = new airplane(167) 
        expect(testairplane.valid_capacity()).toBeTruthy()
        
    })
    test('airplane capacity', () => {
        const testairplane = new airplane(165) 
        expect(testairplane.valid_capacity()).toBeFalsy()
        
    })
})