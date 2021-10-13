# Dynamic Component Generation

* 웹 사이트에 수동이 아닌 동적 데이트를 추가하는 방법
    * map - array의 각 item에서 function을 실행시켜 새로운 array를 줌
```js
function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}
const foodILike = [
  {
    id : 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  { id : 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  { id : 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  { id : 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  { id:5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food favourite="kimchi" />
      <Food favourite="ramen" />
      <Food favourite="samgiopsal" />
      <Food favourite="chukumi" />
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}
```
1. const 배열 생성 foodILike
2. Food라는 function - component 생성 (foodILike의 name과 image를 받아옴) img는 src속성사용
3. object의 속성을 바로 받아아하므로 {}사용하여야함
4. App()안에 {foodILike.map} - map속성 사용
5. {foodILike.map(dish => ())} dish의 이름은 자유
6. {foodILike.map(dish => ( <Food name ={dish.name} picture ={dish.image} />))} <Food/>사용과 함께 Food function에 dish.name / dish.image 넣어줌

7. React의 element들은 각각 다르게, 즉 고유의 name혹은 id가 있어야한다. FoodILike의 배열에 고유의 id를 추가해야함.
8. img element엔 시각장애인을 위한 alt prop가 있어야함 alt={name}