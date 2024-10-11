const colors = ['yellow', 'red', 'pink', 'green']

window.addEventListener('load', () => {

  let winnerDeclared = false

  for (let i = 0; i < 5; i++) {
    const squareYellow = document.createElement('div')
    const squareRed = document.createElement('div')
    const squarePink = document.createElement('div')
    const squareGreen = document.createElement('div')
  
    document.querySelector('.yellow').appendChild(squareYellow)
    document.querySelector('.red').appendChild(squareRed)
    document.querySelector('.pink').appendChild(squarePink)
    document.querySelector('.green').appendChild(squareGreen)
  }

  const yellow = document.querySelector('.yellow').getElementsByTagName('div')
  const red = document.querySelector('.red').getElementsByTagName('div')
  const pink = document.querySelector('.pink').getElementsByTagName('div')
  const green = document.querySelector('.green').getElementsByTagName('div')

  const rollDice = document.getElementById('roll-dice')
  const collorRoll = document.getElementById('color-roll')

  const generateRandomColor = () => {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
  }

  const generateRandomImage = () => {
    const index = Math.floor(Math.random() * 4) + 1
    return `./public/happy${index}.gif`
  }
  
  const updateDivColor = (mainDiv, color, portuguese) => {
    let incorrectColor = []
    for (let i = 1; i < mainDiv.length; i++) {
      if(mainDiv[i].style.backgroundColor !== color){
        incorrectColor.push(mainDiv[i])
      }
    }

    if(incorrectColor.length > 0){
      incorrectColor[0].style.backgroundColor = color
    }

    if(incorrectColor.length === 1){
      rollDice.disabled = true;
      winnerDeclared = true
      const modal = document.getElementById('modal')
      modal.style.display = 'flex'
      document.getElementById('modal-content').style.backgroundColor = color
      document.getElementById('canvas').style.opacity = 0.4
      document.getElementById('controls').style.opacity = 0.4
      const winnerName = document.getElementById('winner-name')
      winnerName.textContent = portuguese

      document.getElementById('winner-image').src = generateRandomImage()
    }

  }
  
  const translateColor = (color) => {
    let portuguese;
    switch (color) {
      case 'yellow':
        portuguese = 'Amarelo';
        updateDivColor(yellow, 'yellow', portuguese)
        return portuguese
      case 'red':
        portuguese = 'Vermelho';
        updateDivColor(red, 'red', portuguese)
        return portuguese
      case 'pink':
        portuguese = 'Rosa';
        updateDivColor(pink, 'pink', portuguese)
        return portuguese
      case 'green':
        portuguese = 'Verde';
        updateDivColor(green, 'green', portuguese)
        return portuguese
    }
  }

  rollDice.addEventListener('click', () => {
    if (winnerDeclared) return;
    let i = 0;

    const dice = setInterval(() => {
      rollDice.disabled = true;

        collorRoll.textContent = "Escolhendo cor...";
        chooseColor = generateRandomColor();
        rollDice.style.backgroundColor = chooseColor;

        i++;

        if (i >= colors.length * 2) {
            clearInterval(dice);
            collorRoll.textContent = translateColor(chooseColor);
            rollDice.disabled = false;
        }
    }, 100);
  });
  
})

document.getElementById('play-again').addEventListener('click', () => {
  window.location.reload();
})