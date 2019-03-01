let loginBtn = document.getElementById('login')
let hiddenParagraph = document.getElementById('error-msg')

hiddenParagraph.style.display = 'none'

loginBtn.addEventListener('click', function() {
  console.log('hello world')
  hiddenParagraph.style.display = 'inline-block'
  hiddenParagraph.style.color = '#ff0000'
  hiddenParagraph.style.border = '2px solid #ff0000'
  hiddenParagraph.style.padding = '10px'
  hiddenParagraph.style.marginTop = '10px'
  hiddenParagraph.style.textAlign = 'center'
  hiddenParagraph.style.borderRadius = '5px'
  hiddenParagraph.style.fontSize = '0.8rem'
})
