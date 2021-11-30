# 함수!

> function

함수를 쓸 수 있게 만드는 키워드

ex)
```js
function add(a,b){
    return a+b;
}
const sum = add(3,4)
```
(A,B)는 외부에서 받아온 인자 - 직접 만드는 이름이기에 관련 된 방법으로 작성가능

함수의 이름은 함수 자체를 가르키고 있는 아이다
이름은 함수를 가리키고 있는 주소를 가지고 있다
함수를 호출하기 위해서는 괄호를 이용해서 필요한 데이터가 있다면 데이터도 전달하면 된다

```js
function surprise (operator){
    const result = operator(2,3) // add(2,3)
    console.log(result)
}
surprise(add)
```
