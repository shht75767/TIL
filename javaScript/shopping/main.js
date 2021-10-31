// 1. input입력후 쇼핑리스트에 추가
// 2. 🗑 클릭으로 쇼핑리스트에 있는 제품을 삭제

const form = document.querySelector('.footer__form');
const input = document.querySelector('.footer__input');
const ul = document.querySelector('.items');
const button = document.querySelector('.item__delete');

function paintList(shopList) {
  const div = document.createElement('div');
  div.setAttribute('class', 'item');

  const li = document.createElement('li');
  li.setAttribute('class', 'item__row');

  const span = document.createElement('span');
  span.innerText = shopList;
  span.setAttribute('class', 'iten__name');

  const btn = document.createElement('button');
  btn.innerText = '🗑';
  btn.setAttribute('class', 'item__delete');

  div.appendChild(span);
  div.appendChild(btn);
  li.appendChild(div);
  ul.appendChild(li);
}

function addList(event) {
  event.preventDefault();
  let shopList = input.value;
  paintList(shopList);
  input.value = '';
}

function deleteItem(event) {
  console.log(event);
}
form.addEventListener('submit', addList);
button.addEventListener('click', deleteItem);
