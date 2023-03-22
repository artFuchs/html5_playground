let activeIndex = 0

const groups = document.getElementsByClassName("card-group");

function onLoad() {
  for(let i=0; i<groups.length; i++){
    getNewImages(groups[i])
  }
}

window.onload = onLoad();

function mod(n,d) {
  return ((n % d) + d) % d;
}

function handleLoveClick() {
  handleClick("love");
}

function handleHateClick() {
  handleClick("hate");
}

function getNewImages(cardGroup){
  const cards = cardGroup.getElementsByClassName("card");
  for(let i = 0; i < cards.length; i++){
    cards[i].style.backgroundImage= "url(https://picsum.photos/200/300/?random&t=" + new Date().getTime()+i +")";
  }
}

function handleClick(type) {
  const nextIndex = mod(activeIndex + 1, groups.length);
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`);
  const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
  
  if (type == "love") {
    currentGroup.dataset.status = "after";
    nextGroup.dataset.status = "becoming-active-from-before";
  } else {
    currentGroup.dataset.status = "before";
    nextGroup.dataset.status = "becoming-active-from-after";
  }
  
  getNewImages(currentGroup);
    
  setTimeout(()=>{
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
}


