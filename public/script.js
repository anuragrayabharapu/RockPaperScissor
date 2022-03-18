var btns=document.getElementsByClassName("a");
var playerScore=document.getElementById('playerScore');
var compScore=document.getElementById('compScore');
var phand=document.getElementById('playerHand');
var chand=document.getElementById('compHand');
let timerOne=null;
let timerTwo=null;
let roundBoard=document.getElementById('round');
let result=document.getElementById('result');
let round=1;
roundBoard.innerText=`Round ${round}`;
let pscore=0;
let cscore=0;

Object.keys(btns).forEach(btnkey=> {
     btns[btnkey].addEventListener('click',function(){
         
         Object.keys(btns).forEach(key=>{
             btns[key].disabled=true;
         });
         var value=Number(this.value);
         var random=randomComp();
         removeShaking();
         initialiseShaking();
         timerOne=setTimeout(()=>
            {
                 if(value===1)
                  {
                      phand.src="PRock.png";
                  }
                  else if(value===2)
                  {
                      phand.src="PPaper.jpg";
                  }
                  else if(value===3){
                      phand.src="PScissor.jpg";
                  }
                  if(random===1)
                  {
                      chand.src="CRock.jpg";
                  }
                  else if(random===2)
                  {
                    chand.src="CPaper.jpg";
                  }
                  else if(random===3)
                  {
                    chand.src="CScissor.png";
                  }
                 if(random===value)
                 {
                     console.log('draw');
                     result.innerText="Draw!!";
                 }
                 else if((value===1 && random===3)||(value===2 && random===1)||(value===3 && random===2))
                 {
                    console.log('player wins');
                    pscore++;
                    playerScore.innerText=pscore;
                    result.innerText="You Won!!!";
                 }
                 else
                 {
                    console.log("comp wins");
                    cscore++;
                    compScore.innerText=cscore;
                    
                    result.innerText="Comp Wins!!!";
                 }
                
                 timerTwo=setTimeout(()=>{
                   
                     chand.src='CRock.jpg';
                     phand.src='PRock.png';
                     Object.keys(btns).forEach(key=>{
                         btns[key].disabled=false;
                     });
                     result.innerText=null;
                     removeShaking();
                     round++;
                     roundBoard.innerText=`Round ${round}`;
                 },1500);
            },1000);
        });
     });
     function removeShaking(){
         clearTimeout(timerOne);
         clearTimeout(timerTwo);
         timerOne=timerTwo=null;
         phand.classList.remove('ani1');
         chand.classList.remove('ani2');
     }
     function initialiseShaking(){
         phand.classList.add('ani1');
         chand.classList.add('ani2');
     }
     function randomComp(){
         return Math.floor(Math.random()*3)+1;
     }