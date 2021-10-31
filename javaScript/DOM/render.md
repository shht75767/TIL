# Critical rendering path

> 브라우저에서 URL을 입력하게 된다면?

**HTML** -> requets/response -> loading -> scripting -> rendering -> layout -> painting -> **composition**

이 과정중 Operation과정엔 layout -> painting -> composition 이 포함되어있는데

layout에선 X와Y, 너비, 높이를 고려하여 어느 위치에 얼마만큼의 크기를 가지고 그림을 그릴지 계산

paint과정에선 layout에서 가져온 그림들을 바로 그리는게 아니라 요소들의 배치에 따라 각각 조금씩 나누어 이미지를 준비함.(css에서 사용한 z-index도 이 과정중 포함) * 한번에 그리게 된다면 하나의 layout 수정시 전제적인 모든page를 수정해야하기에 비효율적

composition은 paint에서 준비한 이미지들을 순서에 맞게 올려놓아 표기하게 됨

※ 우리는 자바스크립트나 css로 DOM요소를 조작할 때에는 최소한의 CSS와 속성, HTML태그를 써야하며 Operation과정을 생각하여 composition이나 paint과정까지만 돌아가게 해야되는게 좋다  

> 브라우저의 layers확인 방법 

개발툴 - 점 세개 - 도구더보기 - 레이어 확인!
화면 클릭시 각도 변경이 가능,          

- will-change : 브라우저의 옵션이 변경이 가능할수도 있어 레이어를 따로 만들어 둠

> CSS의 속성값 확인

http://csstriggers.com/

> 참고 실습

./coordinates/main.js