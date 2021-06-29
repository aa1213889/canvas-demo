function draw() {
  /** @type {HTMLCanvasElement} */
  const canvas = document.querySelector('#canvas')
  if (!canvas.getContext) return
  const ctx = canvas.getContext('2d')

  const bgImage = new Image()
  bgImage.src = 'bg.png'

  let x = 0
  function bgMove() {
    ctx.save() //4.记录状态

    ctx.translate(-x, 0) //1.往后滚动

    ctx.drawImage(bgImage, 0, 0)
    ctx.drawImage(bgImage, canvas.width, 0) //2.两张图片无缝衔接
    x++
    if (x >= canvas.width) x = 0

    ctx.restore() //5.还原状态

    window.requestAnimationFrame(bgMove) //3.递归调用 开启动画
  }

  bgImage.onload = () => {
    bgMove()
  }
}

draw()
