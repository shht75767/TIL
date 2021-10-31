# innerHTML vs innerText vs textContent

|비교|innerHTML|innerText|
|--|--|--|
|element.innerText = "`<div style='color:red'>A</div>"`|A|`<div style='color:red'>A</div>`|
||HTML태그를 해석하여 A만 나타남|HTML을 포함한 문자열까지 코드가 그대로 나타남|
|
