document.addEventListener('DOMContentLoaded', () => { /*html 페이지가 모두 로드되면 시작해라*/

    /*html에 있던거 가져와서 쓰겠다.*/
    const moreBtn = document.getElementById('more-btn');
    const resetBtn = document.getElementById('toggle-btn');
    const whaleContainer = document.getElementById('whale-container');
    const whaleImg = document.getElementById('whale-img');
    const hair_zone = document.getElementById('hair-zone');

    let whiskerCount = 0; /*수염 개수*/


/*More 버튼*/
moreBtn.addEventListener('click', () => {
    
    /*div 만들어서 whisker이라고 하고, className를 whisker이라 지음.*/
    const whisker = document.createElement('div');
    whisker.className = 'whisker';


    /*여기부터는 수학 공식-----------------------------------------------*/
    /*위치 확인*/
    const hairRect = hair_zone.getBoundingClientRect();
    const containerRect = whaleContainer.getBoundingClientRect();

    // 1. 0 ~ 180도 사이의 랜덤 각도 (고래 턱의 완만한 곡선 구간)
    const angle = Math.random() * Math.PI; 

    // 2. 타원 궤적 계산 (hair-zone의 테두리 좌표)
    const radiusX = hairRect.width / 2;
    const radiusY = hairRect.height / 2;
    
    // 중심점 기준 계산
    const centerX = radiusX;
    const centerY = radiusY;
    
    // 타원의 공식 적용 (x = a cos θ, y = b sin θ)
    const relX = centerX + radiusX * Math.cos(angle);
    const relY = centerY + radiusY * Math.sin(angle);

    // 3. 최종 위치 좌표 (부모 컨테이너 기준)
    const posX = (hairRect.left - containerRect.left) + relX;
    const posY = (hairRect.top - containerRect.top) + relY;

    // 4. 스타일 적용
    whisker.style.left = `${posX}px`;
    whisker.style.top = `${posY}px`;

    // [포인트] 수염이 턱 바깥쪽을 향해 뻗도록 각도 계산
    // 90도를 빼주는 이유는 수염(div)의 기본 방향 때문입니다.
    const rotationDeg = (angle * 180 / Math.PI) - 90;
    whisker.style.transform = `rotate(${rotationDeg}deg)`;
    /*---------------------------------------------------------------*/

    whisker.style.zIndex = '2'; /*카멜 표기법 zIndex*/

    whaleContainer.appendChild(whisker); /*고래 영역에 수염 추가*/
    
});

    /*Reset 버튼*/
    /*.whisker이 식별자인 애들을 전부 다 찾아서 담고, 하나씩 꺼내서 지운다.*/
    /*수염 개수도 0으로 초기화*/
    resetBtn.addEventListener('click', () => {
        const allWhiskers = document.querySelectorAll('.whisker');
        allWhiskers.forEach(w => w.remove());
        whiskerCount = 0; 
    });
});