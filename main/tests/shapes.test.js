const { Circle, Square, Triangle } = require('../shapes')

    describe('Circle', () => {
        let circle =

            beforeEach(() => {
                circle = new Circle('black', 'red', 5, 'white', 'circle test', '12px', 100);
            })

        test('should have these correct attributes and properties', () => {
            expect(circle.fillColor).toBe('black')
            expect(circle.borderColor).toBe('red')
            expect(circle.borderWidth).toBe(5)
            expect(circle.textColor).toBe('white')
            expect(circle.text).toBe('circle test')
            expect(circle.textSize).toBe('12px')
        })

        test('should render correct SVG for circle', () => {
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="90" fill="black" style="stroke-width:2;stroke:red" />
            <text x="150" y="125" font-size="12px" text-anchor="middle" fill="white">circle test</text>
            </svg>`
        })

    describe('Square', () => {
        let square =

            beforeEach(() => {
                square = new Square('green', 'orange', 3, 'yellow', 'square test', '15px', 100)
            })

        test('should have these correct attirbutes and properties', () => {
            expect(square.fillColor).toBe('green')
            expect(square.borderColor).toBe('orange')
            expect(square.borderWidth).toBe(3)
            expect(square.textColor).toBe('yellow')
            expect(square.text).toBe('square test')
            expect(square.textSize).toBe('15px')
        })

        test('should render correct SVG for square', () => {
            `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="250" height="185" x="10" y="10" rx="0" ry="50" style="fill:green;stroke-width:3;stroke:orange" />
            <text x="135" y="125" font-size="15px" text-anchor="middle" fill="yellow">square test</text>
            </svg>`
        })
    })

    describe('Triangle', () => {
        let triangle = 

            beforeEach(() => {
                triangle = new Triangle('blue', 'pink', 7, 'purple', 'triangle test', '18px', 100)
            })

        test('should have these correct attributes and properties', () => {
            expect(triangle.fillColor).toBe('blue')
            expect(triangle.borderColor).toBe('pink')
            expect(triangle.borderWidth).toBe(7)
            expect(triangle.textColor).toBe('purple')
            expect(triangle.text).toBe('triangle test')
            expect(triangle.textSize).toBe('18px')
        })

        test('should render correct SVG for trianlge', () => {
            `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="100,10 10,190 190,190" style="fill:blue;stroke-width:7;stroke:pink" />
            <text x="100" y="170" font-size="18px" text-anchor="middle" fill="purple">triangle test</text>
            </svg>`
        })
    })
})

