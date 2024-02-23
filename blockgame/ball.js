
/* export class ball {
    constructor(stageWidth, stageHeight, radius, speed){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.radius = radius;
        
        //vx,vy는 x,y좌표값을 움직이는 속도라고 정하기.
        this.vx = speed;
        this.vy = speed;

        //ball이 스테이지내에 랜덤으로 위치할 수 있도록 함수 정의(다만 공이 중앙쪽에서 움직여야하니까 그걸 생각해서 짠거임.)
        const diameter = this.radius * 2;
        this.x = this.radius +(Math.random() * stageWidth - diameter);
        this.y = this.radius +(Math.random() * stageHeight - diameter);

        this.bouceWindow(stageWidth, stageHeight);

    }

    /*draw함수 만들기: context를가지고 오고 스테이지 사이즈를 가지고 옴.
    그럼 canvas context에 그림을 그릴 수 있는 함수가 완성되는거임.*/
/*
    draw(ctx, stageWidth, stageHeight){
        // x, y값에 vx와 vy를 더해주어서 공이 움직이게 만듬(this.y += this.vy)는y 좌표를 this.vy 만큼 이동시키는 것을 나타냄 
        this.x += this.vx;
        this.y += this.vy;
        

              // 공에 색을 정하고 그림 그리기
              ctx.fillStyle = '#4A148C';
              ctx.beginPath();
              ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
              ctx.fill()
     }


// 스테이지 상 닿았을 때 
   bouceWindow(stageWidth, stageHeight) {
    

  // 스테이지 넓이와 높이를 가지고 와서 
  const minX = this.radius;
  const maxX = stageWidth - this.radius;
  const minY = this.radius;
  const maxY = stageHeight - this.radius;

  // 스테이지 상에 공이 닿았다면 반대로 튕기기
  // 공이 어디에 닿았는지 판단하고 vx와 vy에 -1을 곱해줘서 반대로 움직이게 하기
  if(this.x <=minX || this.x >=maxX){
      this.vx *= -1;
      this.x += this.vx;
  } else if(this.y <=minY || this.y >=maxY){
      this.vy *= -1;
      this.t += this.vy;
  }

}
}

*/

/*기타메모
1) constructor에서 stageHeight는 공이 이동할 수 있는 공간의 세로(높이)를 의미합니다. 예를 들어, 게임이나 시뮬레이션에서 화면이나 렌더링 영역의 세로 크기를 나타냅니다.
일반적으로 stageHeight는 화면이나 캔버스의 세로 크기로 사용됩니다. 공이 화면을 벗어나지 않도록 이 값을 사용하여 경계를 설정하거나, 충돌을 감지하는 데 사용될 수 있습니다.

2) diameter는 공의 지름을 계산한 것입니다. 공의 반지름(this.radius)을 2로 곱해서 얻습니다.
this.x의 값은 this.radius를 더하여 공이 화면의 왼쪽 경계를 넘어가지 않도록 합니다. 
그리고 Math.random() 함수를 사용하여 0부터 1 사이의 임의의 값을 생성하고, 
이를 stageWidth에서 공의 지름을 뺀 값에 곱한 다음 공의 지름만큼 더하여 화면의 오른쪽 경계를 넘어가지 않도록 합니다.
this.y의 값도 마찬가지로 this.radius 를 
Math.random()함수stageHeight에서 공의 지름을 뺀 값에 곱한 다음 공의 지름만큼 더하여 화면의 아래쪽 경계를 넘어가지 않도록 합니다.
이러한 방식으로 생성된 x와 y 값은 화면 내에서 공의 중심이 위치할 수 있는 임의의 위치를 나타냅니다.

3) || 
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false


*/


 
