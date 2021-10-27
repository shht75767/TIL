# split

백준 알고리즘을 공부하던 중 JAVASCRIPT에서의 데이터(예제 숫자 입력값) 값을 입력받기위한 코드에서 궁금한 점이 생김
```js
const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
```

    - 관련 링크 [split] (https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)


- split() 메서드는 String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눕니다.
    - ()안에 넣는 구분자를 이용하여 그 기준에 따라 문자열로 나눔

```js
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' '); // 띄어쓰기에 따라 나눔
console.log(words[3]); // words 배열의 4번째
// expected output: "fox"

const chars = str.split(''); // 글자 하나하나 인식
console.log(chars[8]); // 띄어쓰기도 포함 chars[4] = " "
// expected output: "k"

const strCopy = str.split(); // 아무것도 나누지않음
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]

```
- 문자열에만 사용이 가능하기에 정수인 경우엔 toString()을 앞에 먼저 사용
<br>
<br>


# fs 모듈

fs란 FileSystem의 약자로 파일 처리와 관련된 모듈

`const fs = require('fs')` 에서의 require는 fs모듈을 가져오는 역할
<br>
<br>



# readFile과 readFileSync차이
| readFile | readFileSync |
|--|--|
|비동기적|동기적|
|readFile(filename, [options], callback)|readFileSync(filename, [options])|
|filename의 파일을 [options]의 방식으로 읽은 후 callback으로 전달된 함수를 호출합니다.|filename의 파일을 [options]의 방식으로 읽은 후 문자열을 반환합니다. |
- [options]에는 보통 인코딩 방식이 오게 되며 웹에서는 utf8을 주로 사용합니다.
<br>
<br>

# Number() 와 parseInt()의 차이
Number() 와 parseInt()은 둘다 문자열을 숫자로 형변환 시켜줌
|예제|Number|parseInt|
|--|--|--|
|'0001'|1|1|
|123가나다(숫자+문자)|NaN|123 (숫자가 끝날 때 까지만 형변환)|
|가나다123(문자+숫자)|NaN|NaN (문자로 시작 할 경우엔 NaN)|
|'10.12345'|10.12345|10(정수만 뽑음)

parseInt()는 문자열로 된 부분에서 숫자(정수)만 뽑아서 변환해주는것이 특징
Number()은 문자열 전체가 숫자일때 소수점까지 숫자타입으로 가져옴


