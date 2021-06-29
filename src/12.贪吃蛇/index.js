/**
 * SnakeGame:
 *  gap:网格间隔 一个网格面积 = gap ^ 2
 * LEVEL:难度
 * DIRECTION:方向
 */

/** @type {HTMLCanvasElement} */
const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

const LEVEL = {
  EASY: 0,
  NORMAL: 1,
  HARD: 2
}
const DIRECTION = {
  UP: 1,
  RIGHT: 2,
  DOWN: 3,
  LEFT: 4
}

class Rect {
  constructor(x, y, width, height, color) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
  }
  rDraw() {
    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
    ctx.strokeRect(this.x, this.y, this.width, this.height)
    ctx.closePath()
  }
}

class SnakeGame {
  constructor(gap = 40) {
    this.gap = gap
    this.init()
  }
  init() {
    this.drawGrids()
    this.snake = new Snake(this.gap)
    this.keyListener()
  }
  drawGrids() {
    //背景网格
    ctx.strokeStyle = 'gray'
    for (let widthIndex = 1; widthIndex <= canvas.width / this.gap - 1; widthIndex++) {
      ctx.moveTo(widthIndex * this.gap, 0)
      ctx.lineTo(widthIndex * this.gap, canvas.height)
    }
    for (let heightIndex = 1; heightIndex <= canvas.height / this.gap - 1; heightIndex++) {
      ctx.moveTo(0, heightIndex * this.gap)
      ctx.lineTo(canvas.width, heightIndex * this.gap)
    }
    ctx.stroke()
  }
  keyListener() {
    document.onkeydown = (event) => {
      switch (event.key) {
        case 'ArrowUp':
          this.snake.direction = DIRECTION.UP
          break
        case 'ArrowRight':
          this.snake.direction = DIRECTION.RIGHT
          break
        case 'ArrowDown':
          this.snake.direction = DIRECTION.DOWN
          break
        case 'ArrowLeft':
          this.snake.direction = DIRECTION.LEFT
          break
      }
    }
  }
}

class Snake {
  constructor(gap) {
    this.gap = gap
    this.head = null
    this.body = []
    this.isEat = false
    this.direction = DIRECTION.RIGHT
    this.bodyColor = 'green'
    this.headColor = 'red'
    this.init()
  }
  init() {
    this.iniSnake()
    this.drawSnake()
    this.move()
  }
  drawSnake() {
    this.head.rDraw()
    for (const item of this.body) {
      item.rDraw()
    }
  }
  iniSnake() {
    this.head = new Rect(canvas.width / 2, canvas.height / 2, this.gap, this.gap, this.headColor)
    let x = this.head.x - this.gap
    let y = this.head.y
    for (let i = 0; i < 3; i++) {
      const rect = new Rect(x, y, this.gap, this.gap, this.bodyColor)
      this.body.push(rect)
      x -= this.gap
    }
  }
  step() {
    const _head = this.head
    this.body.unshift(new Rect(_head.x, _head.y, _head.width, _head.height, this.bodyColor))
    if (this.isEat) {
      //吃到了
      this.isEat = false
    } else {
      //没吃到 删掉尾巴最后一个
      this.body.pop()
    }
    switch (this.direction) {
      case DIRECTION.UP:
        _head.y -= _head.height
        break
      case DIRECTION.RIGHT:
        _head.x += _head.width
        break
      case DIRECTION.DOWN:
        _head.y += _head.height
        break
      case DIRECTION.LEFT:
        _head.x -= _head.width
        break
    }
  }

  move() {
    //snake跑起来
    setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      this.step()
      this.drawSnake()
    }, 200)
  }
}

class Food {}

new SnakeGame()
