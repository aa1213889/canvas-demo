function draw() {
  /** @type {HTMLCanvasElement} */
  const canvas = document.querySelector('#canvas')
  if (!canvas.getContext) return
  const ctx = canvas.getContext('2d')
  class Rect {
    constructor(x, y, width, height, color, speed) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
      this.color = color
      this.speed = speed
    }
    draw() {
      ctx.beginPath()
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.width, this.height)
      ctx.closePath()
    }
    move() {
      this.x += this.speed
      if (this.x >= canvas.width - this.width) {
        this.speed *= -1
      } else if (this.x < 0) {
        this.speed *= -1
      }
    }
    animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      this.draw()
      this.move()
    }
  }
  // Rect.prototype.move = () => {}

  //function

  const rect1 = new Rect(0, 100, 100, 100, 'red', 2)
  const rect2 = new Rect(700, 100, 100, 100, 'blue', -2)
}

draw()
