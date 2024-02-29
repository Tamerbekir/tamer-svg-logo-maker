//a descruction object that makes three variables (circle, square and trianlge) and imports them from the shapes.js file
const { Circle, Square, Triangle } = require('../shapes')

// Comments for one function can be aopplied to all other functions here..

//from the imported circle, we create a test for it
    describe('Circle', () => {
        let circle =
            //a new circle is created and is created using these attributes (black, red, white..etc)
            beforeEach(() => {
                circle = new Circle('black', 'red', 5, 'white', 'circle test', 100);
            })
            //the new circle that is made will have the attributes put into to them
        test('should have these correct attributes and properties', () => {
            expect(circle.fillColor).toBe('black')
            expect(circle.borderColor).toBe('red')
            expect(circle.borderWidth).toBe(5)
            expect(circle.textColor).toBe('white')
            expect(circle.text).toBe('circle test')
        })
        //the circle will then go through a test where the attributes in the new circle MUST match the circle that is rendered, otherwise the test will fail.
        test('should render correct SVG for circle', () => {
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="90" fill="black" style="stroke-width:2;stroke:red" />
            <text x="150" y="125" font-size="12px" text-anchor="middle" fill="white">circle test</text>
            </svg>`
        })

    describe('Square', () => {
        let square =

            beforeEach(() => {
                square = new Square('green', 'orange', 3, 'yellow', 'square test', 100)
            })

        test('should have these correct attirbutes and properties', () => {
            expect(square.fillColor).toBe('green')
            expect(square.borderColor).toBe('orange')
            expect(square.borderWidth).toBe(3)
            expect(square.textColor).toBe('yellow')
            expect(square.text).toBe('square test')
        })

        test('should render correct SVG for square', () => {
            `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="250" height="185" x="10" y="10" rx="0" ry="50" style="fill:green;stroke-width:3;stroke:orange" />
            <text x="135" y="125" font-size="12px" text-anchor="middle" fill="yellow">square test</text>
            </svg>`
        })
    })

    describe('Triangle', () => {
        let triangle = 

            beforeEach(() => {
                triangle = new Triangle('blue', 'pink', 7, 'purple', 'triangle test', 100)
            })

        test('should have these correct attributes and properties', () => {
            expect(triangle.fillColor).toBe('blue')
            expect(triangle.borderColor).toBe('pink')
            expect(triangle.borderWidth).toBe(7)
            expect(triangle.textColor).toBe('purple')
            expect(triangle.text).toBe('triangle test')
        })

        test('should render correct SVG for trianlge', () => {
            `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="100,10 10,190 190,190" style="fill:blue;stroke-width:7;stroke:pink" />
            <text x="100" y="170" font-size="12px" text-anchor="middle" fill="purple">triangle test</text>
            </svg>`
        })
    })
})

