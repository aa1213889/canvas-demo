function draw() {
  /** @type {HTMLCanvasElement} */
  const canvas = document.querySelector('#canvas')
  if (!canvas.getContext) return
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = '#4ccccc' //1
  ctx.save()
  ctx.fillRect(100, 100, 150, 150)

  ctx.fillStyle = 'red'
  ctx.save() //2
  ctx.fillRect(100, 300, 150, 150)

  ctx.restore() //还原了2的颜色
  ctx.fillRect(350, 100, 150, 150)

  ctx.restore() //还原了1的颜色
  ctx.fillRect(350, 300, 150, 150)

  /**栈的存储 */
}

draw()
