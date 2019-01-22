const card = document.getElementById('card');
let mousePosX = 0;
let mousePosY = 0;
let active = false;

function clickCard(e){
  active = true;
}

function moveCard(e){
  if(active){
    
    mousePosX = e.clientX;
    mousePosY = e.clientY;
    card.style.top = `${mousePosY}px`;
    card.style.left = `${mousePosX}px`;

  }
}

function dragEnd(){
  active = false;
}

card.addEventListener('mousedown', clickCard);
card.addEventListener('mousemove', moveCard);
card.addEventListener('mouseup', dragEnd);