# 변수 let, const 정리!

> 변수 : 데이트를 담고있는것 (데이터에 접근하거나 업데이트를 하게 함)

> let

- 변수의 이름은 원하는대로 지정가능
- 담을 수 있는 데이터는 문자든 숫자든 상관 X (가장 작은 데이터들을 primitive 데이터 타입 이라고 부름)
- 변수의 이름을 정할땐 어떤 정보를 가지고 있는지에 대한 정보를 담아 정하는게 좋음

> object

- 적어도 하나에서 두가지 이상의 key와 value를 지니고있어야함

### let, object 둘다 변수를 할당할 때 변수 안에 들어있는 값이 복사 되어서 들어옴
```js
ex) let obj = {
    name: 'ellie',
    age : 5
};
let obj2 = obj
console.log(obj2.name) -> // ellie
```
> let 과 const
- let 은 정의된 변수의 값을 변경 가능하지만, const 는 변경이 불가능
- 단, obj 자체를 다른 변수로 변경은 불가능하지만 obj가 가지고 있는 변수안의 내용을 바꾸는건 가능 
ex)
```js
const obj = {
    name : 'ellie',
    age : 5
};
obj.name = 'James'
```
