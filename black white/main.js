let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

changeColor = (e) => { 
  // console.log(e.keyCode);
  if (e.keyCode === 38) {
    if (red <= 255) {
    document.body.style.backgroundColor = `rgb(${red += 5}, ${green += 5}, ${blue +=5})`;
    }
  } else if (e.keyCode === 40) {
    if (red >= 0) {
    document.body.style.backgroundColor = `rgb(${red -= 5}, ${green -= 5}, ${blue -=5})`;

    
  }
}
console.log(red);
}



window.addEventListener('keydown', changeColor)



// `rgb(${red + 10}, ${green + 10}, ${blue + 10})`;