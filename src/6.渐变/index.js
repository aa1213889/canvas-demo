function draw() {
  /** @type {HTMLCanvasElement} */
  const canvas = document.querySelector('#canvas')
  if (!canvas.getContext) return
  const ctx = canvas.getContext('2d')
  const lingrad = ctx.createLinearGradient(0, 0, 150, 0)
  lingrad.addColorStop(0, '#cc6677')
  lingrad.addColorStop(0.5, '#fff')
  lingrad.addColorStop(1, '#c6c')
  ctx.fillStyle = lingrad
  ctx.fillRect(10, 10, 140, 140)
}

function draw1() {
  /** @type {HTMLCanvasElement} */
  var ctx = document.getElementById('canvas').getContext('2d')

  // 创建渐变
  var radgrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30)
  radgrad.addColorStop(0, '#A7D30C')
  radgrad.addColorStop(0.9, '#019F62')
  radgrad.addColorStop(1, 'rgba(1,159,98,0)')

  var radgrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50)
  radgrad2.addColorStop(0, '#FF5F98')
  radgrad2.addColorStop(0.75, '#FF0188')
  radgrad2.addColorStop(1, 'rgba(255,1,136,0)')

  var radgrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40)
  radgrad3.addColorStop(0, '#00C9FF')
  radgrad3.addColorStop(0.8, '#00B5E2')
  radgrad3.addColorStop(1, 'rgba(0,201,255,0)')

  var radgrad4 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90)
  radgrad4.addColorStop(0, '#F4F201')
  radgrad4.addColorStop(0.8, '#E4C700')
  radgrad4.addColorStop(1, 'rgba(228,199,0,0)')

  // 画图形
  ctx.fillStyle = radgrad4
  ctx.fillRect(0, 0, 150, 150)
  ctx.fillStyle = radgrad3
  ctx.fillRect(0, 0, 150, 150)
  ctx.fillStyle = radgrad2
  ctx.fillRect(0, 0, 150, 150)
  ctx.fillStyle = radgrad
  ctx.fillRect(0, 0, 150, 150)
}
draw1()
