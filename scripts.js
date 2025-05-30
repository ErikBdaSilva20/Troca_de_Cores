function changeColor(color) {
  document.body.style.backgroundImage = 'none'

  document.body.style.backgroundColor = color
}

function randomColor() {
  const red = Math.floor(Math.random() * 255)
  const green = Math.floor(Math.random() * 255)
  const blue = Math.floor(Math.random() * 255)
  document.body.style.backgroundImage = 'none'

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

function customColor() {
  const colorInput = document.querySelector('.inputColor').value

  changeColor(colorInput)
}

function chooseImage(img) {
  const fileReader = new FileReader()

  fileReader.onload = e => {
    const result = e.target.result

    document.body.style.backgroundImage = `url(${result})`
  }

  fileReader.readAsDataURL(img)
}
