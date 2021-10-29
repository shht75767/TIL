# window load

> script 호출의 방법 (load)

- `<head>` 안에서 `<script src="" defer></script>`       
- `<body>`에서의 `<script src="">`후 addEventListener
    - "load" event          
    - "DOMContentLoaded"        

|defer|load|DOMContentLoaded|
|--|--|--|
|HTML만 완료되면 호출|모든 리소스가 다 다운로드된 다음에 이벤트 발생|HTML만 완료되면 호출|