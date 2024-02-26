const { Circle } = require('../shapes')

describe('Circle', () => {
    let circle = 

    beforeEach(() => {
    circle = new Circle('black', 'red', 5, 'white', 'circle test', '12px', 100);
    })

    test('should be have these correct attributes and properties', () => {
        expect(circle.fillColor).toBe('black')
        expect(circle.borderColor).toBe('red')
        expect(circle.borderWidth).toBe(5)
        expect(circle.textColor).toBe('white')
        expect(circle.text).toBe('circle test')
        expect(circle.textSize).toBe('12px')
    });

    test('should render correct SVG for circle', () => {
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="90" fill="black" style="stroke-width:2;stroke:red" />
        <text x="150" y="125" font-size="12px" text-anchor="middle" fill="white">circle test</text>
        </svg>`      
    })
})



