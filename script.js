const card = document.getElementById('card');
let active = false;
let cardPosX = card.offsetLeft;
let cardPosY = card.offsetTop;
let mouseClickPosX = 0;
let mouseClickPosY = 0;

function clickCard(e){
  /* Get the space between the mouse and the edges of the card*/
  mouseClickPosX = e.clientX - cardPosX;
  mouseClickPosY = e.clientY - cardPosY;

  active = true;
}

function moveCard(e){
  if(active){
    let mousePosX = e.clientX;
    let mousePosY = e.clientY;

    card.style.left = `${mousePosX - mouseClickPosX}px`;
    card.style.top = `${mousePosY - mouseClickPosY}px`;
  }
}

function dragEnd(){
  cardPosX = card.offsetLeft;
  cardPosY = card.offsetTop;

  active = false;
}

card.addEventListener('mousedown', clickCard);
card.addEventListener('mousemove', moveCard);
card.addEventListener('mouseup', dragEnd);