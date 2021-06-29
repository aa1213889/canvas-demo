function draw() {
  var ctx = document.getElementById('canvas').getContext('2d')
  var img = new Image()
  img.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png'
  img.onload = () => {
    //回调  图片加载完后才执行
    ctx.drawImage(img, 0, 0)
    ctx.beginPath()
    ctx.moveTo(30, 96)
    ctx.lineTo(70, 66)
    ctx.lineTo(103, 76)
    ctx.lineTo(170, 15)
    ctx.stroke()
  }
}

draw()
