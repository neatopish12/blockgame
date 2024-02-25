//패들만들기
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width-paddleWidth) / 2; //paddleX 는 paddle의 왼쪽 끝 x좌표를 말함 



function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

setInterval(drawPaddle, 1)
/*코드 줄은 함께 캔버스의 지정된 위치와 지정된 너비 및 높이로 패들을 나타내는 직사각형을 그립니다. 
위치( paddleX, canvas.height - paddleHeight)에 따라 직사각형의 왼쪽 상단 모서리가 배치될 위치가 
결정되고 너비와 높이가 직사각형의 크기를 결정합니다. */

// 사용자가 패들 제어할 수 있도록 허용 