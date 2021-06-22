function draw() {
    /** @type {HTMLCanvasElement} */
    const canvas = document.querySelector('#canvas')
    if (!canvas.getContext) return
    const ctx = canvas.getContext('2d')

    ctx.strokeStyle = 'orange'
    ctx.lineWidth = 10

    ctx.arc(150, 150, 50, 0, Math.PI * 2, false)
    ctx.stroke()
}

function draw1() {
    /** @type {HTMLCanvasElement} */
    const canvas = document.querySelector('#canvas')
    if (!canvas.getContext) return
    const ctx = canvas.getContext('2d')

    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 2; j++) {
            ctx.beginPath()
            const x = 25 + j * 50
            const y = 25 + i * 50
            const radius = 20
            const startAngel = 0
            const endAngel = Math.PI + (Math.PI * j) / 2
            const anticlockwise = i % 2 === 0 ? false : true
            ctx.arc(x, y, radius, startAngel, endAngel, anticlockwise)
            if (i <= 1) {
                ctx.stroke()
            } else {
                ctx.fill()
            }
        }
    }
}
draw1()