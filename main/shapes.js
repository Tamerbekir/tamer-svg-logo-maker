// Base class for shapes that includes common properties
class Shapes {
  constructor(fill, border, borderWidth, textColor, text) {
    this.fillColor = fill
    this.border = border
    this.borderWidth = borderWidth
    this.textColor = textColor
    this.text = text
  }
}

// a circle class that extends from the shapes THIS statments while adding radius that is spefific for the circle class only.
// other shapes will be made as well as classes extentions for those as well that as speific for the shape type.
class Circle extends Shapes {
  constructor(fill, border, borderWidth, textColor, text, radius) {
    //using super as an inheritance, which means everything from the Shapes class can be used for the Circle class and the paramaters for super are for the circles logo
    super(fill, border, borderWidth, textColor, text);
    //radius used for circle class only.
    this.radius = radius; 
  }

//rendering the circle by using the link for the circle provided and adding 'this' keyboard to replace the parts in which the user picks from the command terminal
  renderCircle() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="${this.radius}" fill="${this.fillColor}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

//exporting the shapes and circle to render (will had more shapes such as triangle and square)
module.exports = { Shapes, Circle }
