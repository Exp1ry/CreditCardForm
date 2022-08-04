window.onload = () => cardFront.style.backgroundImage = "url('./images/cc__american--front.png')"
// User inputs
let enterCardNum = document.querySelectorAll('input')[0]
let enterCardName = document.querySelectorAll('input')[1]
let enterCardCVV = document.querySelectorAll('input')[2]
let enterCardMonth = document.querySelectorAll('select')[0]
let enterCardYear = document.querySelectorAll('select')[1]
let submitBtn = document.querySelector('button')

// Outputs
let cardFront = document.querySelector('.credit-card--front')
let cardBack = document.querySelector('.credit-card--back')
let cardDiv = document.querySelector('.credit-card__wrapper')



let cardTypes = [
  { name: 'american', num: '34' },
  { name: 'visa', num: '4' },
  { name: 'master', num: '5' },
  { name: 'discover', num: '6' }
]
let cardNumber = ['345678']



// Checks if cardNumber starts with any of card types
const cardChecker = (cardNumber, cardTypes) => {
  let cardLoop = cardTypes.some(i => cardNumber.startsWith(i.num))
  return cardLoop


}


enterCardCVV.oninput = (cvv) => {
  cvv = enterCardCVV.value
  cardDiv.classList.add('flip')

  if (cvv.length <= 3) {
    document.querySelector('.cvv').innerText = cvv
  }
  else {
    alert('Please enter a valid CVV')
    enterCardCVV.value = ''
  }
}


enterCardNum.oninput = (number) => {
  number = enterCardNum.value

  // Change card image depending on number input
  if (cardChecker(number, cardTypes) == true) {

    if (number === '34') {
      console.log('american')
      cardFront.style.backgroundImage = "url('./images/cc__american--front.png')"
      cardBack.style.backgroundImage = "url('./images/cc__american--back.png')"
    }
    else if (number === '4') {
      console.log('visa')
      cardFront.style.backgroundImage = "url('./images/cc__visa--front.png')"
      cardBack.style.backgroundImage = "url('./images/cc__visa--back.png')"
    }
    else if (number === '5') {
      console.log('master')
      cardFront.style.backgroundImage = "url('./images/cc__mastercard--front.png')"
      cardBack.style.backgroundImage = "url('./images/cc__mastercard--back.png')"
    }
    else if (number === '6') {
      console.log('discover')
      cardFront.style.backgroundImage = "url('./images/cc__discover--front.png')"
      cardBack.style.backgroundImage = "url('./images/cc__discover--back.png')"
    }


  }
  cardDiv.classList.remove('flip')

  if (number.length <= 16) {

    document.querySelector('.card-number__shadow').innerText = number
    document.querySelector('.card-number__emboss').innerText = number
  }
  else if (number.length > 16) {
    alert('Please enter a valid card number')
    document.querySelector('.card-number__shadow').innerText = ''
    document.querySelector('.card-number__emboss').innerText = ''
    enterCardNum.value = ''
  }

  return number




}

enterCardName.oninput = (name) => {
  name = enterCardName.value
  let one = ['1']
  let two = ['2']
  let three = ['3']
  let four = ['4']
  let five = ['5']
  let six = ['6']
  let svn = ['7']
  let eight = ['8']
  let nine = ['9']
  let zero = ['0']


  if (name.includes(one) || name.includes(two) || name.includes(three) || name.includes(four) || name.includes(five) || name.includes(six) || name.includes(svn) || name.includes(eight) || name.includes(nine) || name.includes(zero)) {
    alert('Please enter a valid name')
    enterCardName.value = ''
    document.querySelector('.card-holder__shadow').innerText = ''
    document.querySelector('.card-holder__emboss').innerText = ''
    document.querySelector('.signature').innerText = ''
  }
  else {
    document.querySelector('.card-holder__shadow').innerText = name
    document.querySelector('.card-holder__emboss').innerText = name
    document.querySelector('.signature').innerText = name

  }

}


const monthAndDay = (month, year) => {


  document.querySelector('.expiration-date__shadow').innerText = `${month}/${year}`
  document.querySelector('.expiration-date__emboss').innerText = `${month}/${year}`
}

enterCardMonth.oninput = (monthInp) => {
  enterCardYear.oninput = (yearInp) => {

    yearInp = enterCardYear.value

    monthAndDay(monthInp, yearInp)
  }
  monthInp = enterCardMonth.value
  monthAndDay(monthInp, yearInp)
}


submitBtn.onclick = () => alert('Thank you!')



