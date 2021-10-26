# Fetching Movies from API

* axios : fetch 위에 있는 작은 layer
* 설치 : npm install axios
* import axios form "axios";
* componentDidMount(){
    const movies = axios.get("https://yts.mx/api/v2/list_movies.json")}
* axios.get은 느리기에 componentDidMount 함수가 끝날 때까지 약간 시간이 걸린다는걸 말해줘야한다
    * ```js
        getMovie = async () => {
        const movies = await axios.get("https://yts.mx/api/v2/list_movies.json")}
         componentDidMount(){
        this.getMoive();
        }
    }```
    * 함수가 호출되면 getMovie가 실행 되지만 JS에 getMovie function 의 시간이 필요하다고 말해야한다
        * 이를 위 해 async - await 
        async : 내가 뭘 기다리기를 원해?
        await : 응! axios가 끝날때까지만 기다려