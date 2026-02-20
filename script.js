document.addEventListener('DOMContentLoaded', () => {
    const moreBtn = document.getElementById('more-btn');
    const resetBtn = document.getElementById('toggle-btn');
    const whaleContainer = document.getElementById('whale-container');
    const whaleImg = document.getElementById('whale-img');

    let whiskerCount = 0; // 수염 개수를 추적

    // 'more' 버튼 클릭 시 수염 생성
    moreBtn.addEventListener('click', () => {
        const whisker = document.createElement('div');
        whisker.className = 'whisker';
        
        // 고래 이미지의 상대적인 위치 계산
        const whaleRect = whaleImg.getBoundingClientRect();
        const containerRect = whaleContainer.getBoundingClientRect();

        // 수염의 위치를 고래 이미지의 턱 부분에 맞춰 조정
        // whaleImg의 왼쪽 상단을 기준으로 상대적인 위치 (px)
        const baseLeft = (whaleRect.left - containerRect.left) + whaleRect.width * 0.45; // 고래 입 중앙 근처
        const baseTop = (whaleRect.top - containerRect.top) + whaleRect.height * 0.65; // 고래 턱 부분

        // 각 수염마다 약간의 무작위성과 간격 추가
        const dynamicLeft = baseLeft + (Math.random() - 0.5) * 20; // 좁은 범위 내에서 좌우 무작위
        const dynamicTop = baseTop + whiskerCount * 5; // 아래로 갈수록 내려가게
        const rotation = -30 + (whiskerCount * 5); // 약간의 각도 변화

        whisker.style.left = `${dynamicLeft}px`;
        whisker.style.top = `${dynamicTop}px`;
        whisker.style.transform = `rotate(${rotation}deg)`;
        whisker.style.zIndex = 10; // 고래 이미지 위에 오도록

        whaleContainer.appendChild(whisker);
        whiskerCount++;
    });

    // 'Reset' 버튼 클릭 시 모든 수염 제거
    resetBtn.addEventListener('click', () => {
        const allWhiskers = document.querySelectorAll('.whisker');
        allWhiskers.forEach(whisker => whisker.remove());
        whiskerCount = 0; // 수염 개수 초기화
    });
});
