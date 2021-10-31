const ver = document.querySelector('.vertical');
const hori = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');
const targetRect = target.getBoundingClientRect();
const targetWidth = targetRect.width / 2;
const targetHeight = targetRect.height / 2;

window.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;

  ver.style.transform = `translateX(${x}px)`;
  hori.style.transform = `translateY(${y}px)`;
  target.style.transform = `translate(${x - targetWidth}px, ${
    y - targetHeight
  }px)`;
  tag.style.transform = `translate(${x}px, ${y}px)`;
  tag.innerText = `${x}px,${y}px`;

  /* css에서의 left와 top을 매번 변경시 Operation과정중 (layout -> painting -> composition) layout을 계속 변경해야하기에 비효율적

  ver.style.left = `${x}px`;
  hori.style.top = `${y}px`;
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  tag.style.left = `${x}px`;
  tag.style.top = `${y}px`;
  tag.innerText = `${x}px,${y}px`;*/
});
