//Define functions:
function checkAnswers(){
  // assign "0" to the "score" variable
  let score = 0
  let result= 0
  // assign the quiz elements to the quiz variable:
 quiz = document.forms.quiz.elements;
  //assign the answer to the qustion to the answer1 variable:
  
  
  answer1 = quiz.colour.value;
  //check the answer to the first question:
  if (answer1 == "pink"){
    score = score + 1;
  } 
  if (answer1 == "yellow"){
    score = score + 2;
  } 
  if (answer1 == "green"){
    score = score + 3;
  } 
  if (answer1 == "black"){
    score = score + 4;
  } 


  answer2 = quiz.animal.value;
  //check the answer to the first question:
  if (answer2 == "red-panda"){
    score = score + 1;
  } 
  if (answer2 == "giraffe"){
    score = score + 2;
  } 
  if (answer2 == "jaguar"){
    score = score + 3;
  } 
  if (answer2 == "gorilla"){
    score = score + 4;
  } 
  

  answer3 = quiz.music.value;
  //check the answer to the first question:
  if (answer3 == "R&B"){
    score = score + 1;
  } 
  if (answer3 == "pop"){
    score = score + 2;
  } 
  if (answer3 == "rock"){
    score = score + 3;
  } 
  if (answer3 == "country"){
    score = score + 4;
  } 


  answer4 = quiz.hobby.value;
  //check the answer to the first question:
  if (answer4 == "reading"){
    score = score + 1;
  } 
  if (answer4 == "running"){
    score = score + 2;
  } 
  if (answer4 == "knitting"){
    score = score + 3;
  } 
  if (answer4 == "swimming"){
    score = score + 4;
  } 
  
  if (score < 6){
    result = "HTML"
  }
  else if (score < 10){
    result = "Python"
  }
  else if (score < 13){
    result = "Javascript"
  }
  else {
    result = "Java"
  }

  //display the score variable in alert:
  alert ('The programming language you should learn is ' + result);

}


