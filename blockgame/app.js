/* import {
  ball
} from './ball.js'; */

// canavas 끌고오기(javascript에서 참조할 수 있게)
// 캔버스에 실질적으로 사용되는 도구인 2D rendering context 를 => ctx 라는 변수에 넣기
const canvas = document.querySelector(".canvas")
const ctx = canvas.getContext("2d")

// 공 반지름설정. 캔버스 위치 어디에서 시작할건지 설정. 등등
let ballRadius = 10;
let x = canvas.width / 2    //시작하는 곳 설정: 캔버스의 가로 중심에 해당하는 x 좌표
let y = canvas.height - 20    //아랫쪽에서 -20만끔 떨어지는 곳에서 
let dx = 0.6 //x방향으로 1씩 증가
let dy = -0.6 //y방향으로 -1씩 줄어드는


function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.strokeStyle = "#D0FC5C"
  ctx.stroke()
  ctx.closePath();
}

function draw() {
  //위 코드를 draw 함수 초기에 넣어주면 캔버스를 먼저 지우고 그려주니 깔끔하게 원만 날아가는 모습을 볼 수 있다.//
  //공의 흔적 발자취 없애는 함수 clearRect
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  // 캔버스 상에서 움직이는 물체의 x, y좌표를 업데이트하는데 사용될 수 있음 //
  x += dx; // x = x + dx와 동일한 표현(축약)
  y += dy;

  if (x > canvas.width - ballRadius || x < ballRadius) {
    dx = -dx;
    }
  if (y < ballRadius || y > canvas.height - ballRadius) {
    dy = -dy;
    }
}

setInterval(draw, 0.6)
//0.06 초 당 (60프레임) // 타이밍 함수: setInterval()
/* setInterval()의 첫번째 인자에는 실행시킬 함수, 
두번째 인자에는 얼마의 시간 단위로 실행시킬지이다. 시간 단위는 ms이다.
따라서 매 순간 원을 그리기를 반복해보자.*/

//원의 중심좌표(x,y)가 0보다 작아지거나 canvas보다 커지면 방향?바꿔주기


//패들만들기
// const paddleHeight = 10;
// const paddleWidth = 75;
// let paddleX = (canvas.width-paddleWidth) / 2;


// function drawPaddle() {
//   ctx.beginPath();
//   ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
//   ctx.fillStyle = "#0095DD";
//   ctx.fill();
//   ctx.closePath();
// }

/*코드 줄은 함께 캔버스의 지정된 위치와 지정된 너비 및 높이로 패들을 나타내는 직사각형을 그립니다. 
위치( paddleX, canvas.height - paddleHeight)에 따라 직사각형의 왼쪽 상단 모서리가 배치될 위치가 
결정되고 너비와 높이가 직사각형의 크기를 결정합니다. */

// 사용자가 패들 제어할 수 있도록 허용 