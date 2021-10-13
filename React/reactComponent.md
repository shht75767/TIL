# Create first React Component

* 항상 npm start를 실행하고 개발서버를 그대로 둘 필요가 있음 - page의 서버를 실행상태로 두는것
* index.js의 (<App/>)를 component라 부른다. react는 component와 함께 작동
* component는 HTML을 반환하는 함수 
* app.js 안에는 function과 component이 반복되어 이루어짐
* react는 component를 사용해서 html처럼 작성하는 경우에 필요 -> js와 html 사이의 이런 조합을 jsx라 부른다(react가 소개한 유일한 개념, 나머진 JS에서 소개)
* component 만드는 법
** src안에 js파일 생성
** component 작성시 import React from "react"; 는 필수
** 함수를 대문자로 작성 ex)
```
function Potato(){
    return <h3>Potato</h3>
}
```
** 마지막엔 export default Potato
** index.js 에서 potato.js를 import
*** react app에선 하나의 component만 rendering해야 하므로 기존의 app안에 Potato를 넣어야함
***app.js안에 import Potato form "./Potato" -- ./는 같은 src라는 directory에 있기에 사용
*** app.js의 app안에 potato사용
```
function App(){
    return (
        <div>
        <h1>Hello</h1>
        <Potato/>
        </div>
    );
}
```

