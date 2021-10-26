# Deploying to Github Pages
    * 소문자, 띄어쓰기 금지

* 깃 허브 페이지 생성 (branch)
-> npm i gh-pages : 웹 사이트를 깃허브의 깃허브 페이지 도메인에 나타나게 해줌
* package.JSON으로 가서 home page 추가 : 필수 단계이자 gh-pages의 작동에 필요함
"homepage":"https://shht75767.github.io/movie_app/"
* gh-pages를 호출하기위해 "scripts" 에
"deploy" : "gh-pages -d build",
"predeploy" : "npm run build"
* npm run deploy 


