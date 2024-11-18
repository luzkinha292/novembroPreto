
const emojis = [
  "<img alt='javascript' src='https://www.rio.rj.gov.br/igstatic/50/64/14/5064144.jpg'>",
  "<img alt='javascript' src='https://www.rio.rj.gov.br/igstatic/50/64/14/5064144.jpg'>",
  "<img alt='javascript' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Martin_Luther_King%2C_Jr..jpg/640px-Martin_Luther_King%2C_Jr..jpg'>",
  "<img alt='javascript' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Martin_Luther_King%2C_Jr..jpg/640px-Martin_Luther_King%2C_Jr..jpg'>",
  "<img alt='javascript' src='https://cdn-images-1.medium.com/max/1200/1*eyY3w_h-hC2Y41nym3YZ3Q.jpeg'>",
  "<img alt='javascript' src='https://cdn-images-1.medium.com/max/1200/1*eyY3w_h-hC2Y41nym3YZ3Q.jpeg'>",
  "<img alt='javascript' src='https://miltonsantos.com.br/site/wp-content/uploads/2011/04/16.jpg'>",
  "<img alt='javascript' src='https://miltonsantos.com.br/site/wp-content/uploads/2011/04/16.jpg'>",
  "<img alt='javascript' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fwbEYRWaBo79GvK9_hJYHXfgFTwt63vZfA&s'>",
  "<img alt='javascript' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fwbEYRWaBo79GvK9_hJYHXfgFTwt63vZfA&s'>",
  "<img alt='javascript' src='https://s2.glbimg.com/Ecj1Ne9SZuc5gQzJC44S96yPUhk=/e.glbimg.com/og/ed/f/original/2019/05/17/machado_de_assis_real.jpg'>",
  "<img alt='javascript' src='https://s2.glbimg.com/Ecj1Ne9SZuc5gQzJC44S96yPUhk=/e.glbimg.com/og/ed/f/original/2019/05/17/machado_de_assis_real.jpg'>",
  "<img alt='react' src='https://www.sambariocarnaval.com/images/elzaeterna.jpg'>",
  "<img alt='react' src='https://www.sambariocarnaval.com/images/elzaeterna.jpg'>",
  "<img alt='react' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3fFNju6W0P775A1erT_2NOfpa7lq9u0Nzw&s'>",
  "<img alt='react' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3fFNju6W0P775A1erT_2NOfpa7lq9u0Nzw&s'>",
];
let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = shuffleEmojis[i];
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
}

function playSound(audioName) {
  let audio = new Audio(`./src/sounds/${audioName}.m4a`);
  audio.volume = 0.5;
  audio.play();
}

function handleClick() {
  if (openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }
  playSound("flip");
}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
    playSound("flipback");
  }

  openCards = [];

  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    Swal.fire({
      title: "Parabéns!",
      text: "Você conseguiu finalizar!",
      imageUrl: "giphy.webp",
      color: "rgba(0,0,123)",
      backdrop: "rgba(0,0,123,0.4)",
      imageAlt: "Custom image",
      confirmButtonText: "Reiniciar"
    }).then(function() {
      window.location.reload();
  });
  }
}
