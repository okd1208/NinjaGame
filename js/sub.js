const exp = document.getElementById('exp');
const restart = document.getElementById('restart');
const startM = document.getElementById('startM');
const syuriken = document.getElementById('syuriken');
var sx = 400;
var sy = 850;
$(function(){

 setInterval(function(){
   $('#startP').fadeToggle(1000);
 },1000);

 setInterval(function(){
   $('#expEnd').fadeToggle(1000);
 },1000);
 setInterval(function(){
   $('#enter').fadeToggle(1000);
 },1000);


exp.addEventListener('click',function(){
  $('#lets').fadeIn(500);
  $('#lets').slideUp(1500);
})
restart.addEventListener('click',function(){
  $('#lets').show();
  $('#lets').slideUp(1500);
})
startM.addEventListener('click',function(){
  $('#lets').show();
})


// var ss= setInterval(() => {
//   $('#syuriken').css('margin-top',sx);
//   $('#syuriken').css('right',sy);
//   sx--;
//   sy-=3;
//   if(sx==250){
//     clearInterval(ss);
//   }
// }, 10);
var Tx=-0.1;
$(function(){
  $('#Gsword').css('transform','rotate('+Tx+'turn)');
  console.log(Tx);
})

  
});

