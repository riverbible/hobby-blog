# 📢 데바데 소식 (나의 관심사 블로그)

비대칭 PvP 게임 **데드 바이 데이라이트(Dead by Daylight)**의 업데이트 노트, 이벤트 일정, 입문자 가이드를 정리한 반응형 웹 블로그입니다.

* 🔗 **배포 사이트:** https://riverbible.github.io/hobby-blog/
* 🎨 **Figma 시안:** [디자인 시안 바로가기](https://www.figma.com/design/cVG5p82Mncp2VCghbkb03k/%EB%82%98%EC%9D%98-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0?node-id=0-1&p=f&t=r86LZeEykHJJL3V4-0)

---

## 🚀 실행 방법

1. **웹에서 바로 확인하기**
   * [GitHub Pages 배포 링크](https://riverbible.github.io/hobby-blog/)에 접속하면 별도 설치 없이 바로 확인할 수 있습니다.

2. **로컬 환경에서 실행하기**
   ```bash
   git clone https://github.com/riverbible/hobby-blog.git
   ```
   * 내려받은 폴더에서 `index.html`을 브라우저로 직접 열거나 VS Code의 **Live Server**로 실행합니다.
   * *참고:* Google Fonts, Swiper(v14), AOS(v2.3.1)는 CDN으로 연결되어 있어 인터넷 연결 환경에서 정상 동작합니다.

---

## ✨ 기능 소개

* **Hero 배너 슬라이드 (`Swiper`):** 메인 비주얼 배너가 무한 루프(`loop: true`)로 전환되며, 좌우 화살표와 커스텀 페이지네이션 바를 지원합니다.
* **데바데 기초 아코디언 탭 (`showGuide`):** 상단 탭 버튼이나 하단 카드를 클릭하면 선택된 카드의 가로 비율이 넓어지며(`flex: 2.2`) 숨겨진 배지와 아이콘이 나타납니다.
* **반응형 공략집 그리드 (`grid-template-areas`):** 데스크톱(4열)과 모바일 450px 이하(2열) 화면 크기에 맞춰 카드 영역 배치가 자동으로 재구성됩니다.
* **드로어 내비게이션 & TOP 버튼:** 햄버거 버튼 클릭 시 블러 배경 메뉴가 열리며, 스크롤 위치(`scrollY > 100`)에 따라 우측 하단 TOP 버튼이 부드럽게 나타납니다.
* **스크롤 등장 애니메이션 (`AOS`):** 스크롤을 내릴 때 최근 글, 기초 가이드, 공략집 섹션이 순차적으로 페이드업(`fade-up`)됩니다.

---

## 💡 핵심 코드 & 작성 이유

### 1. 탭 버튼과 카드 양방향 연동 (`js/app.js`)
```javascript
function showGuide(index) {
  tabs.forEach((tab) => tab.classList.remove("on"));
  cards.forEach((card) => card.classList.remove("on"));
  tabs[index].classList.add("on");
  cards[index].classList.add("on");
}
```
* **왜 이렇게 썼는지:** 상단 탭 버튼(`.guide-tabs`)과 아래 카드(`.guide-content`) 어느 쪽을 클릭하더라도 동일한 `index`의 `on` 클래스를 동시에 제어해 UI 상태가 서로 어긋나지 않도록 하나의 함수로 묶었습니다.

### 2. 선택된 카드만 넓어지는 아코디언 전환 (`css/style.css`)
```css
.guide-content li { flex: 1; transition: flex 0.4s, background-color 0.4s; }
.guide-content li.on { flex: 2.2; }
```
* **왜 이렇게 썼는지:** `width` 값을 직접 계산해 바꾸는 대신 `flex` 비율(`1` → `2.2`)과 `transition`을 조합하면, 4개의 카드 전체 너비를 유지하면서도 선택된 항목만 부드럽게 확장되는 효과를 간결하게 만들 수 있기 때문입니다.

### 3. 해상도별 그리드 영역 재배치 (`css/style.css`, `css/media.css`)
```css
/* 데스크톱 */
.walkthrough { grid-template-areas: "p1 p1 p2 p2" "p3 p4 p4 p5"; }
/* 모바일 (450px 이하) */
.walkthrough { grid-template-areas: "p1 p1" "p2 p2" "p3 p5" "p4 p4"; }
```
* **왜 이렇게 썼는지:** 복잡한 `grid-column`/`grid-row` 숫자 계산 대신 `grid-template-areas`로 각 항목(`p1`~`p5`)에 이름을 붙여두면, 모바일 미디어 쿼리에서 직관적으로 카드 배치 순서와 크기를 바꿀 수 있어 선택했습니다.
