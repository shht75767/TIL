# Class Components and State

*  state는 동적 데이터와 함께 작업할 때 만들어짐, 변하는 데이터, 존재하지 않는 데이터 = dynamic data
* props는 동적인 데이터를 표현하는데에 적합하지 않음
* state는 object이고 component의 data를 넣을 공간이 있으며 이 데이터는 변함 - state의 사용 이유
* 전에 했던 function App(){<Food/>} 와 같은 function을 실행하는 component는 function component 라고 함
* class component
    * class App extends React.Component{
        render(){
            return <h1>Im a class component</h1>
        }
    }
    * react는 자동적으로 class component의 render method를 실행함
    * function component는 함수이기에 뭔가를 return하여 screen에 표시하는 반면에 class component는 class지만 React.Component로 확장되어 screen에 표시됨 확장시켜 표시하기위에 render(){}안에 넣어야만 함
```js
class App extends React.Component{
    state = {
        count: 0
    };
        add = () => {
            console.log("add");
        };
        minus = () => {
            console.log("minus")
        };
        render(){
            return(
            <div>
                <h1>The number is : {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
            );
        }
    }
```
* add 와 minus 함수 추가 후 onClick 사용
    * react에는 html,javascript에서 쓰이는 onClick와 다른 자동적으로 주어진 onClick이 있음

