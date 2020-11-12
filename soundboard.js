
var buttonElement = document.getElementById('button1')

var x = document.getElementById('Kick 1')

buttonElement.addEventListener('click', function () {
    console.log('I was clicked!')
    audio.play()
    //alert('test2')

  })

  buttonElement.addEventListener('mouseenter', function () {
    console.log('I was clicked!')
    audio.play()
    //alert('test2')

  })

var buttonElement2 = document.getElementById('button2')

buttonElement2.addEventListener('mouseenter', function () {
    console.log('I was clicked!')
    audio2.play()
    //alert('test2')

})

buttonElement2.addEventListener('click', function () {
    console.log('I was clicked!')
    audio2.play()
    //alert('test2')

})

var buttonElement3 = document.getElementById('button3')

    buttonElement3.addEventListener('mouseenter', function () {
    audio3.play()
    //alert('test2')

})

var buttonElement3 = document.getElementById('button3')

    buttonElement3.addEventListener('click', function () {
    audio3.play()
    //alert('test2')

})


tellJoke = function (joke, punchline) {
    alert(joke)
    alert(punchline)
  }

playKick = function playKick() {
    var audio = document.getElementById("audio");
    audio.play();
  }

  
playSnare = function playSnare() {
    var audio2 = document.getElementById("audio2");
    audio2.play();
  }

playHat = function playHat() {
    var audio3 = document.getElementById("audio3");
    audio3.play();
}