import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  currentQuestion=0;
  answerList=[];
  result=0;
  currentAnswer=[];
  questionPool=[
    {
      question:"What is your name?",
      answers:["My name is Jeff","Arthur, King of the Britains","This should not be a question","I am correct answer"],
      correct:[1]
    },
    {
      question:"What is your quest?",
      answers:["I don't know","Is this a Monty Python referrence?","To seek a holy grail","To get 100% on this quiz"],
      correct:[2]
    },
    {
      question:"What is your favorite color?",
      answers:["Blue","Yellow","This is a Monty Python referrence!","Rainbow"],
      correct:[0]
    },
    {
      question:"What is next question going to be?",
      answers:["No idea about that","How about a magic trick?","Something stupid","I don't know"],
      correct:[3]
    },
    {
      question:"I don't know?",
      answers:["Somebody's got no ideas for questions I guess","Apple","ž˝#l‚♂ír<Š","The world is flat"],
      correct:[2]
    },
    {
      question:"What is Apple?",
      answers:["All three are correct",
        "An apple is a sweet, edible fruit produced by an apple tree (Malus pumila). Apple trees are cultivated worldwide, and are the most widely grown species in the genus Malus.",
        "Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services.",
        "The Apple (also called Star Rock) is a 1980 science fiction musical comedy film written and directed by Menahem Golan."],
      correct:[0]
    },
    {
      question:"How many holes in a polo",
      answers:["1","2","3","4"],
      correct:[3]
    },
    {
      question:"Can a match box?",
      answers:["Yes","No","No, but a tin can","Yes, one beat Mike Tyson"],
      correct:[2]
    },
    {
      question:".sdrawkcab noitseuq siht rewsnA",
      answers:[".K.O","What?","I don't understand","Tennis elbow"],
      correct:[0]
    },
    {
      question:"What sound does a bell make?",
      answers:["Whoop","F'taang","Froon","Blip-blop-bloop-banga-o-langa-woof, nubby-frrph 120,000 eckleck-ooo-looo-a-scap-babble-de booble wop."],
      correct:[1]
    },
  ];
  constructor() { }

  ngOnInit() {
    this.setQuestionValues();
    localStorage.setItem("answers",JSON.stringify([]));
    localStorage.setItem("results",JSON.stringify([]));
  }
  printOut(e:Event){
    e.preventDefault();
    this.answerList.push(this.currentAnswer.slice());
    console.log(this.answerList);
    this.currentQuestion++;
    //document.getElementsByClassName("progress-bar").item(0).style.width=this.currentQuestion/this.questionPool.length*100+"%";
    if(this.currentQuestion>=this.questionPool.length){
      this.finishQuiz();
    } else{
      this.setQuestionValues();
    }
  }
  setQuestionValues(){
    document.getElementById("question").innerText=this.questionPool[this.currentQuestion].question;
    for(let i=0;i<this.questionPool[this.currentQuestion].answers.length;i++){
      document.getElementById("ans"+i+"txt").innerText=this.questionPool[this.currentQuestion].answers[i];
    }
  }
  finishQuiz(){
    document.getElementsByClassName("custom-style-quiz").item(0).classList.add("hidden");
    document.getElementsByClassName("results").item(0).classList.remove("hidden");
    let count=0;
    for(let i=0;i<this.answerList.length;i++){
      if(JSON.stringify(this.questionPool[i].correct)===JSON.stringify(this.answerList[i])){
        count++;
      }
      console.log(this.questionPool[i].correct);
      console.log(this.answerList[i]);
    }
    this.result=(count/this.questionPool.length*100);
    document.getElementsByClassName("result-text").item(0).innerHTML="You have answered "+this.result.toFixed(2)+" % of questions right";
  }
  retry(){
    document.getElementsByClassName("custom-style-quiz").item(0).classList.remove("hidden");
    document.getElementsByClassName("results").item(0).classList.add("hidden");
    this.currentQuestion=0;
    //document.getElementsByClassName("progress-bar").item(0).style.width=this.currentQuestion/this.questionPool.length*100+"%";
    let ans = JSON.parse(localStorage.getItem("answers"));
    let res = JSON.parse(localStorage.getItem("results"));
    ans.push(this.answerList);
    res.push(this.result);
    localStorage.setItem("answers",JSON.stringify(ans));
    localStorage.setItem("results",JSON.stringify(res));
    console.log(localStorage);
    this.answerList=[];
    this.setQuestionValues();
  }
  set(value){
    if(this.currentAnswer.includes(value)){
      this.currentAnswer.splice(this.currentAnswer.indexOf(value),1);
    } else{
      this.currentAnswer.push(value);
    }
  }

}


