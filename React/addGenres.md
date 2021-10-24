# Adding Genres
 
```js
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
```
* genres의 type을 검사하는 항목도 추가
    * arrayOf는 Array타입의 배열 객체를 변환하는 형태
    * 특정 타입을 지정하지 않은 상태로 배열을 생성하면 어떤 값이 들어가도 상관없음. 다양한 타입의 데이터를 넣을 수 있다.
* props genres를 보내주기위해 app.js에서
    `<Movie genres={movie.genres} />`

    
 ```js
 function Movie({ year, title, summary, poster, genres }) {
  return (
    <div class="movie">
      <img src={poster} alt={title} title={title} />
      <div class="movie__data"> 
        <h3 class="movie__title">{title}</h3>
        <h5 class="movie__year">{year}</h5>
        <ul class="geners"> 
          {genres.map((genre, index) => (
            <li key={index} class="genres__genres">
              {genre}
            </li>
          ))}
        </ul>
        <p class="movie__summary">{summary.slice(0,180)}...</p>
      </div>
    </div>
  );
}
```
* {genre.map} array로 만들기 genre의 component를 만들고 li를 리턴함
    * map function은 각각의 고유 번호를 줘야하는데 map은 현재의 아이템과 함께 아이템 번호를 함꼐 줌 (이름은 자유, 현재는 index로 표시) li의 key에 {index}