# 브라우저 좌표

> element.getBoundingClientRect()

- element안에 들어있는 API, 즉 함수!
- 요소의 사이즈나 위치에 관한 정보를 얻어옴
- top과 left는 기존의 방식과 똑같지만 bottom과 right는 위에서 부터 혹은 왼쪽에서 부터 얼마나 떨어져있는지에 대한 거리가 나타남

> client x,y vs page x,y

|client|page|
|--|--|
|browser기준|page기준|
|스크롤시 변경 x|스크롤 변경시 처음과 좌표가 바뀜|