# Planning the Movie Component

```JS
import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount() { // render후 component 생성 후 호출 됨
    setTimeout(() => { // js 함수 6초후 isLoading을 false로 바꿈
    this.setState({ isLoading: false });
    }, 6000); 
  }
  render() {
    const { isLoading } = this.state; // {isLoading} 생성
    return <div>{isLoading ? "Loading..." : "We are ready"}
    </div>; // isLoading 이 true라면 Loading... false라면 We are ready 
  }
}

export default App;
```
* React에서 state의 선언이 필수는 아니며 미래에 생겨날 state에 대해서도 미리 선언이 가능하다
* 