# Reusable Components with JSX + Props

* JSX는 component에 정보를 보낼 수 있다
* React는 재사용 가능한 component를 만들어 component를 반복사용이 가능하게 함
* Food라는 component에 정보를 보내는 방법
```js
import React from "react";

function Food({ fav }) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Potato />
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" />
    </div>
  );
}
```
** Food라는 component에 fav라는 이름의 property를 Kimchi라는 value를 줌
** props는 Food의 component에 들어가있는 property를 합쳐서 부르는 말
** `function Food(props.fav)`=``function Food({fav})`` 를 console.log로 부르게 된다면 안에 있는 것들이 object로 나오는데  내부에있는 fav를 위와 같은 형식으로 한번에 부를 수 있음