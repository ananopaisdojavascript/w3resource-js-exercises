const uncamelize = (text, separator) => { 
    if(typeof(separator) == "undefined") {
      separator = " ";
    } 
    
    text = text.replace(/[A-Z]/g, function (letter) {
      return separator + letter.toLowerCase();
    });
   
    return text.replace("/^" + separator + "/", '');
   
  }
  
  console.log(uncamelize('helloWorld'));
  console.log(uncamelize('helloWorld','-'));
  console.log(uncamelize('helloWorld','_'));