function draw() {
    /** @type {HTMLCanvasElement} */
    const canvas = document.querySelector('#canvas')
    if (!canvas.getContext) return
    const ctx = canvas.getContext('2d')

    ctx.strokeStyle = 'orange'

    ctx.arc(75, 75, 50, 0, Math.PI * 2, false) //脸
    ctx.moveTo(110, 75) //去掉线
    ctx.arc(75, 75, 35, 0, Math.PI, false) //嘴巴
    ctx.moveTo(65, 65) //去掉线
    ctx.arc(60, 65, 5, 0, Math.PI * 2, false) //左眼
    ctx.moveTo(95, 65) //去掉线
    ctx.arc(90, 65, 5, 0, Math.PI * 2, false) //右眼
    ctx.stroke()
}
draw()