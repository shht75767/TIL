```js
function Movie({ year, title, summary, poster, genres }) {
  return (
    <div class="movie">
      <img src={poster} alt={title} title={title} />
      <div class="movie__data">
        <h3 class="movie__title">{title}</h3>
        <h5 class="movie__year">{year}</h5>
        <ul class="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} class="genres__genres">
              {genre}
            </li>
          ))}
        </ul>
        <p class="movie__summary">{summary.slice(0, 180)}...</p>
      </div>
    </div>
  );
  ```
  * 글자수에 맞는 보더의 크기를 똑같이 해주기위해 글자수 조절
  ` <p class="movie__summary">{summary.slice(0, 180)}...</p>`
    * summary의 0~180개 까지의 글자수만 나타냄