# All you need to know about State

* 매 순간 setState를 호출할 때 마다 react는 새로운 state와 함께 render function을 호출함
* state는 object이기에 함수에서의 호출
`this.state.count = 1`로 쓸수있음
* 그렇게 될 경우 console에서는 state를 set해라, state를 직접 변경하지마라 라고 뜸 (동작도 불가)
    * react는 render function을 refresh하지 않았기때문 = 매번 state의(object의) 상태를 변경할 때 react가 render function을 호출해서 바꿔주길 원함
* 만약 setState function을 호출하면, react는 언제 setState를 호출할 지를 알고 또한 내가 view를 refresh하길 원하는걸 알고 render를 refresh하길 원하는걸 안다
    * 쉽게 말해 state의 숫자가 바뀔때 react는 어떤것이든 refresh해주길 원함, 이걸 해결해주는게 setState! state를 refresh 할때 render function도 함께 refrest!
* state는 object이므로 setState는 새로운 state를 받아야하고, 따라서 setState({count:1})
`add = () => {this.setState({ count: this.state.count + 1})}`
`minus = () =>  {this.setState({ count: this.state.count - 1})}`
* 위 아래는 같은 함수지만 위의 함수들은 state에 의존하기 때문에 나중에 성능문제가 있을수있음
`add = () => {this.setState(current => ({ count : current.count +1}))} `
`minus = () => {this.setState(current => ({ count : current.count -1}))}`
* 외부의 영향을 받지 않는 가장 이상적인 방법

```js
import React from "react";

class App extends React.Component{
  state = {
    count : 0
  };
    add = () => {this.setState(current => ({count : current.count + 1}))
    };
    minus = () => {this.setState(current => ({ count : current.count -1}))
    };
  render(){
    return(
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick = {this.add}>add</button>
        <button onClick = {this.minus} >minus</button>
      </div>
    )
  }
}




export default App; 
```

