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

function cardVelocityAngle(e, mouseClickPosX){
  let velocity = e.movementX;
  /* Reverse value of the speed */
  velocity <= 0? velocity = Math.abs(velocity * 1.5) : velocity = -Math.abs(velocity * 1.5);
  
  /* Set the angle of the rotation depending on the position of the cursor in the card */
  if(mouseClickPosX <= 0 ){
    card.style.transform = `
      translate(-50%, -50%) 
      rotate(${Math.abs((mouseClickPosX + velocity)/5)}deg)
    `;
  } else{
    card.style.transform = `
      translate(-50%, -50%) 
      rotate(${-Math.abs((mouseClickPosX + velocity)/5)}deg)
    `;
  }
}

function moveCard(e){
  if(active){
    let mousePosX = e.clientX;
    let mousePosY = e.clientY;

    card.style.left = `${mousePosX - mouseClickPosX}px`;
    card.style.top = `${mousePosY - mouseClickPosY}px`;

    cardVelocityAngle(e, mouseClickPosX);
  }
}

function dragEnd(){
  cardPosX = card.offsetLeft;
  cardPosY = card.offsetTop;
  card.style.transform = `translate(-50%, -50%) rotate(0deg)`;

  active = false;
}

card.addEventListener('mousedown', clickCard);
document.addEventListener('mousemove', moveCard);
document.addEventListener('mouseup', dragEnd);