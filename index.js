function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  
  var lowercase = "hello!"
  var uppercase = "HELLO!"
  var mixedcase = "I love you, Grandma."
<<<<<<< HEAD
  if (string.toLowerCase() === string) {
  return "I can\'t hear you!"
  }
  
  else if (string.toUpperCase() === string) {
  return "YES INDEED!"
  }
  

=======
  if (string.toLowerCase() === lowercase) {
  return "I can\'t hear you!"
  }
  
  else if (string.toUpperCase() === uppercase) {
  return "YES INDEED!"
  }
  
  else (string === mixedcase); {
  return "I love you, too."
  }
}

function sayHiToGrandma(string) {
  
  var lowercase = "hello!"
  var uppercase = "HELLO!"
  var mixedcase = "I love you, Grandma."
  if (string.toLowerCase() === lowercase) {
  return "I can\'t hear you!"
  }
  
  else if (string.toUpperCase() === uppercase) {
  return "YES INDEED!"
  }
  
  else (string === mixedcase); {
  return "I love you, too."
  }
}

function sayHiToGrandma(string) {
  
  var lowercase = "hello!"
  var uppercase = "HELLO!"
  var mixedcase = "I love you, Grandma."
  if (string.toLowerCase() === lowercase) {
  return "I can\'t hear you!"
  }
  
  else if (string.toUpperCase() === uppercase) {
  return "YES INDEED!"
  }
  
>>>>>>> 0cffd56efe1b9d7d675786730d1d29ab1c5bb63e
  else (string === mixedcase); {
  return "I love you, too."
  }
}
