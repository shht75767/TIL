const ver = document.querySelector('.vertical');
const hori = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

window.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;

  ver.style.left = `${x}px`;
  hori.style.top = `${y}px`;
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  tag.style.left = `${x}px`;
  tag.style.top = `${y}px`;
  tag.innerText = `${x}px,${y}px`;
});
