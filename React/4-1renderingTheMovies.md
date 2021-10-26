# Rendering the Movies

* 
```js
 getMovies = async () => {
    const {data : {data : {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json");
    console.log(movies); // = (movies.data.data.movies) 
    this.setState({movies , isLoading: false}) // ((setState, axios), isLoading)
```
* API에서 가져온 movies data를 콘솔로 보면 우리가 원하는 movie 데이터는 movies.data.data.movies에 있음
* ES6 문법을 이용하여 {data : {data : {movies}}}
* `setState({movies , isLoading: false})`
에서의 movies는 setState에서 가져온 movies와 axios에서 받아온 movies를 함께 부르는것, 데이터를 다 받아오고 isLoading을 false로 바꿔 render return의 false인 값을 불러옴

* false 즉, 데이터가 다 로딩되었을때의 값을 나타내가위해 Movie.js를 만들어 render함
    * import React form "react";
    * import PropTypes form "prop-types";
    * Movie.js는 component가 state를 필요로 하지 않기에 class보다 function component사용
    * 
    ```js 
    import React from "react";
    import PropTypes from "prop-types";

    function Movie({id, year, title, summary,  poster}){ 
    return <h5>{title}</h5>// 화면에 title표시
    }
    Movie.propTypes = { //type 검사 
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired 
    };
    export default Movie;
    ```

    * App.js
    ```js
    import React from "react";
    import axios from "axios";
    import Movie from "./Movie";

    class App extends React.Component {
        state = {
        isLoading: true,
        movies: []
        };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state; //state로 부터 movies를 가져옴
    return (
      <div>
        {isLoading
          ? "Loading..." 
          : movies.map(movie => ( //movies render
              <Movie  //import <Movie />
                key={movie.id} // 각각의 고유한 key가 필요
                id={movie.id} //<props들을 표시>
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
              ))}
              </div>
            );
          }
        }
        
        export default App;
        ```