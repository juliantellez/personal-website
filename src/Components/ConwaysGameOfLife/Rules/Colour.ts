/**
 * r,b,g,a
 */
class Colour {
    public r: number;
    public g: number;
    public b: number;
    public a: number;

    constructor(rgb ?: any) {
        if(rgb) {
            this.r = rgb.r
            this.g = rgb.g
            this.b = rgb.b
            this.a = 255
        } else {
            Object.assign(this, this.getRandomColour());
        }
    }

    getRandomValue(offset: number, range = 255) {
        return Math.abs(Math.floor(Math.sin(offset) * range))
    }

    getRandomColour() {
        const time = Date.now() / 200
        return {
            r: this.getRandomValue(time),
            g: this.getRandomValue(time + 2),
            b: this.getRandomValue(time + 4),
            a: 255
        }
    }

    getValue() {
        return `rgba(${this.r},${this.g},${this.b},${this.a})`
    }
}

export default Colour;
