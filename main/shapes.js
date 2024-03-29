// Base class for shapes that includes common properties.
class Shapes {
  constructor(fill, border, borderWidth, textColor, text) {
    this.fillColor = fill
    this.borderColor = border
    this.borderWidth = borderWidth
    this.textColor = textColor
    this.text = text
  }
}

// a circle class that extends from the shapes THIS statments
// other shapes will be made and they, too, will have class extensions from class Shapes. Applies to rest of shapes
class Circle extends Shapes {
  constructor(fill, borderColor, borderWidth, textColor, text) {
    //using super as an inheritance, which means everything from the Shapes class can be used for the Circle class and the paramaters for super are for the circles logo.Applies to rest of shapes
    super(fill, borderColor, borderWidth, textColor, text)
  }

//rendering the circle by using the link for the circle provided and adding 'this' keyboard to replace the parts in which the user picks from the command terminal.
renderCircle() {
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="90" fill="${this.fillColor}" style="stroke-width:${this.borderWidth};stroke:${this.borderColor}" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
  }
}

class Square extends Shapes {
  constructor(fill, borderColor, borderWidth, textColor, text) {
    super(fill, borderColor, borderWidth, textColor, text)
  }

  //this will render the square along with the SVG that has the properties to shape out a square. he THIS statements are key'd into the specific locations in which the user enters from the prompts
renderSquare() {
  return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="250" height="185" x="10" y="10" rx="0" ry="50" style="fill:${this.fillColor};stroke-width:${this.borderWidth};stroke:${this.borderColor}" />
  <text x="135" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>
`
  }
}

class Triangle extends Shapes {
  constructor(fill, borderColor, borderWidth, textColor, text) {
    super(fill, borderColor, borderWidth, textColor, text)
  }

//this will render the triangle along with the SVG that has the properties to shape out a triangle. The THIS statements are key'd into the specific locations in which the user enters from the prompts
renderTriangle() {
  return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="100,10 10,190 190,190" style="fill:${this.fillColor};stroke-width:${this.borderWidth};stroke:${this.borderColor}" />
  <text x="100" y="170" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>
`
  }
}
//exporting the shapes and circle to render (will had more shapes such as triangle and square)
module.exports = { Shapes, Circle, Square, Triangle }
