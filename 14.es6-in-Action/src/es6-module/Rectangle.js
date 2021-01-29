import Shape from './Shape'

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color) // Shape class er constructor keu call korte hobe
        this.width = width
        this.height = height
    }

    common() {
        console.log('I am overriding of Shape common method')
    }
}

export default Rectangle