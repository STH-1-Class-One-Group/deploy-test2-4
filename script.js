document.addEventListener('DOMContentLoaded', () => {
    /* 1. HTML 요소 불러오기 */
    const moreBtn = document.getElementById('more-btn');
    const resetBtn = document.getElementById('toggle-btn');
    const whaleContainer = document.getElementById('whale-container');
    const whaleImg = document.getElementById('whale-img');
    const hair_zone = document.getElementById('hair-zone');

    let whiskerCount = 0; /* 수염 개수 관리 */

    /* 2. 'More' 버튼 클릭: 수염 생성 */
/* 2. 'More' 버튼 클릭 이벤트 */
moreBtn.addEventListener('click', () => {
    
    // [수정] 한 가닥만 생성하기 위해 반복문 삭제
    const whisker = document.createElement('div');
    whisker.className = 'whisker';

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
    
    // 기획한 레이어: 고래(3) > 수염(2) > hair(1)
    whisker.style.zIndex = '2';

    // 화면에 추가
    whaleContainer.appendChild(whisker);
    
    whiskerCount++;
    console.log(`수염이 ${whiskerCount}개째 자라나고 있습니다!`);
});

    /* 3. 'Reset' 버튼 클릭: 초기화 */
    resetBtn.addEventListener('click', () => {
        const allWhiskers = document.querySelectorAll('.whisker');
        allWhiskers.forEach(w => w.remove());
        whiskerCount = 0; 
    });
});