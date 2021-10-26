# Protection with PropTypes

* foodILike 변수에 rating 추가 (type = number)
    * App function의 map에 rating = {dish.rating} prop추가
    * Food function에 받아오는 값에 rating추가 후 
    <h3?>{rating}/5.0</h3> 표시

* component의 prop 사용시 전달받은 props가 맞는지 늘 점검(확인)이 필요함
* npm i prop-types : 전달받은 props가 내가 원하는 props인지를 확인
    * 설치확인은 package.json에서 dependencies에 prop-types가 있 는지 확인
* prop-types 사용 방법
    * import PropTypes from "prop-types";
    * function 사이에 Food.propTypes = {
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired
    } -> 각 props가 type가 스트링이 맞는지 검사
    * console창을 보면 rating의 type은 number 라고 오류가 뜨기에
        rating: PropTypes.number.isRequired 로 재검사
    * 끝!

