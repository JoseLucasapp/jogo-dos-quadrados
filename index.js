window.addEventListener('load', () => {

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
  
})