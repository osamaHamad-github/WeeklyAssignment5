document.getElementById('circumference-calculator').addEventListener('click', toCircumference)

document.getElementById('area-calculator').addEventListener('click', toArea)

document.getElementById('calculate-area').addEventListener('click', calculateArea)

document.getElementById('calculate-circumference').addEventListener('click', calculateCircumference)

document.getElementById('area-input').addEventListener('focus', radiusBlueA)

document.getElementById('area-input').addEventListener('blur', radiusGreyA)

document.getElementById('circumference-input').addEventListener('focus', radiusBlueC)

document.getElementById('circumference-input').addEventListener('blur', radiusGreyC)

// this is for the area page
// converts the circle's radius to blue when the radius input is selected
function radiusBlueA () {
  document.getElementById('circle-1').src = '/images/circle-focus.png'
}

// converts the radius color back to original
function radiusGreyA () {
  document.getElementById('circle-1').src = '/images/circle.png'
}

// this is for the circumference page
// converts the circle's radius to blue when the radius input is selected
function radiusBlueC () {
  document.getElementById('circle-2').src = '/images/circle-focus.png'
}

// converts the radius color back to original
function radiusGreyC () {
  document.getElementById('circle-2').src = '/images/circle.png'
}

// switches to the circumference calculator
function toCircumference () {
  // displays circumference section and hides area section
  document.getElementById('area-section').style.display = 'none'
  document.getElementById('circumference-section').style.display = 'block'
}

// switches to the area calculator
function toArea () {
  // displays area section and hides circumference section
  document.getElementById('area-section').style.display = 'block'
  document.getElementById('circumference-section').style.display = 'none'
}

// calculates area
function calculateArea () {
  // assigning radius to a variable
  let radius = document.getElementById('area-input').value

  // trimming white spaces off of the variables
  // this will help with detecting the blank variable error
  radius = radius.trim()

  // parsing through our inputs to check for forbidden inputs
  // strings, null, numbers less than or equal to zero are forbidden
  if (isNaN(radius)) {
    // this detects values that are Not a Number
    document.getElementById('area').innerText = `Value Error: '${radius}' is not a number`
    return 0 
  } else if (radius === '') {
    // this detects blank variables
    document.getElementById('area').innerText = 'Value Error: all variables must be filled'
    return 0 
  } else if (radius <= 0) {
    // this detects values equal to zero or any negative number
    document.getElementById('area').innerText = `Math Error: cannot have value less than or equal to 0 (${radius})`
    return 0
  }

  // parsing radius from string to float
  radius = parseFloat(radius)

  // formula for the area of the circle
  let area = Math.PI * (radius ** 2)

  // rounding the number to 2 decimal places
  area = area.toFixed(2)

  // prints the area calculated to the html
  document.getElementById('area').innerText = area
}

// calculates circumference
function calculateCircumference () {
  // assigning radius to a variable
  let radius = document.getElementById('circumference-input').value

  // trimming white spaces off of the variables
  // this will help with detecting the blank variable error
  radius = radius.trim()

  // parsing through our inputs to check for forbidden inputs
  // strings, null, numbers less than or equal to zero are forbidden
  if (isNaN(radius)) {
      // this detects values that are Not a Number
      document.getElementById('circumference').innerText = `Value Error: '${radius}' is not a number`
      return 0 
    } else if (radius === '') {
      // this detects blank variables
      document.getElementById('circumference').innerText = 'Value Error: all variables must be filled'
      return 0 
    } else if (radius <= 0) {
      // this detects values equal to zero or any negative number
      document.getElementById('circumference').innerText = `Math Error: cannot have value less than or equal to 0 (${radius})`
      return 0
  }

  // parsing radius from string to float
  radius = parseFloat(radius)

  // formula for the area of the circle
  let circumference = 2 * Math.PI * radius

  // rounding the number to 2 decimal places
  circumference = circumference.toFixed(2)

  // prints the area calculated to the html
  document.getElementById('circumference').innerText = circumference
}
