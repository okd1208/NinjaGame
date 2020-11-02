'use strict'
{
  const start = document.getElementById('start');
  const menu = document.getElementById('menu');
  const d = 'dismiss';
  const atack = document.getElementById('atack');
  // const atack = document.getElementById('fot1');
  const fight = document.getElementById('fight');
  const fightF1 = document.getElementById('fightF1');
  const fightF1D = document.getElementById('fightF1D');
  const fightF2 = document.getElementById('fightF2');
  const fightF2D = document.getElementById('fightF2D');
  const fightF3 = document.getElementById('fightF3');
  const fightF3D = document.getElementById('fightF3D');
  const fightC1 = document.getElementById('fightC1');
  const fightC1D = document.getElementById('fightC1D');
  const fightC2 = document.getElementById('fightC2');
  const fightC2D = document.getElementById('fightC2D');
  const fightC3 = document.getElementById('fightC3');
  const fightC3D = document.getElementById('fightC3D');
  const ak= document.getElementById('ak');
  const qes = document.getElementById('qes');
  const gd = document.getElementById('gd');
  const appear = document.getElementById('appear');
  var aprp ='ディフェンダーLv.1が現れた';
  var dmg = '攻撃しました';
  var nnnP = '力をためた';
  var bariaP = 'ガードをした';
  var patcP = '必殺攻撃を放った';
  var i = 0;
  const speed = 100;
  const select = document.getElementById('select');
  const whichs = document.getElementById('which');
  const atc = document.getElementById('atc');
  const patc = document.getElementById('patc');
  const baria = document.getElementById('baria');
  const nnn = document.getElementById('nnn');
  const myHP = document.getElementById('myHP');
  const yourHP = document.getElementById('yourHP');
  const damage = document.getElementById('damage');
  const nnnT = document.getElementById('nnnT');
  const bariaT = document.getElementById('bariaT');
  const patcT = document.getElementById('patcT');
  const cpD = document.getElementById('cpD');
  const cpT = document.getElementById('cpT');
  const myC = document.getElementById('myC');
  const yourC = document.getElementById('yourC');
  const fin = document.getElementById('fin');
  const finT = document.getElementById('finT');
  const restart = document.getElementById('restart');
  const startM = document.getElementById('startM');
  const exp = document.getElementById('exp');
  const syuriken = document.getElementById('syuriken');
  const Csyuriken = document.getElementById('Csyuriken');
  const sword = document.getElementById('sword');
  const Gsword = document.getElementById('Gsword');
  const GswordR = document.getElementById('GswordR');
  const swordR = document.getElementById('swordR');
  var aC =0;
  var yC = 0;
  var cp = ['攻撃','ガード','必殺技','溜める'];
  var y = (Math.floor(Math.random()*4));
  var yh = 100;
  var mh =100;
  var now = '▶︎';
  var Nnow = '';
  var se3 =[ak,qes,gd];
  var nowC =0;
  var aPoint =35;
  var dicideNow =0;
  var fightC =[fightC1,fightC2,fightC3];
  var randCx =0;
  var F='';
  var FD='';
  var C='';
  var CD='';
  var sx = 400;
  var Csx = 280;
  var sy = 850;
  var Csy = 400;
  var ro = 0;
  var Cro = 0;

  function randC(){
    randCx = Math.floor(Math.random()*3);
    fightC[randCx].classList.remove(d);
    if(randCx==0){
      C=fightC1;
      CD =fightC1D;
    }else if(randCx==1){
      C=fightC2;
      CD =fightC2D;
      }else if(randCx==2){
        C=fightC3;
       CD =fightC3D;
      }
  }

  randC();

  ak.textContent = now;

  window.addEventListener('keydown',function(){
    if(event.keyCode == 39){
      if(nowC==2){
        return;
      }
      se3[nowC].textContent = Nnow;
      nowC++;
      se3[nowC].textContent = now;
    }else if(event.keyCode == 37){
      if(nowC==0){
        return;
      }
      se3[nowC].textContent = Nnow;
      nowC--;
      se3[nowC].textContent = now;
    }

    if(event.keyCode ==13){
      if(nowC==0){
        loadA(menu,exp);
        dicideNow=nowC;
        F = fightF1;
        FD = fightF1D
        myC.textContent =aC=0;
      }else if(nowC ==1){
        loadA(menu,exp);
        dicideNow=nowC;
        F = fightF2;
        FD = fightF2D;
        myC.textContent =aC=0;
      }else{
        loadA(menu,exp);
        dicideNow=nowC;
        myC.textContent =aC=2;
        F = fightF3;
        FD = fightF3D;
      }
      
      if(randCx==2){
        yC=2;
          yourC.textContent = yC;
      }
    }

  })
  

  load(start,start,menu);

  // loadB(exp,exp,fight,apr);
  
  load(select,appear,whichs);
  RS();
  
  

  // load(atc,nnn.parentNode,damage);
  // loadB(atc,patc.parentNode,damage,da);
  loadC(atc,damage,da);
  loadC(nnn,nnnT,nn);
  loadC(baria,bariaT,ba);
  loadC(patc,patcT,pa);
  loadD(damage);
  loadD(nnnT);
  loadD(bariaT);
  loadD(patcT);
  

  exp.addEventListener('click',function(){
    if(dicideNow==0){
      loadA(exp,fight);
      fightF1.classList.remove(d);
      apr();
    }else if(dicideNow==1){
      loadA(exp,fight);
      fightF2.classList.remove(d);
      apr();
    }else{
      loadA(exp,fight);
      fightF3.classList.remove(d);
      apr();
    }
  })

  function clearW(){
    nnn.parentNode.classList.add(d);
    patc.parentNode.classList.add(d);
  }
  function addW(){
    nnn.parentNode.classList.remove(d);
    patc.parentNode.classList.remove(d);
  }


  function load(event,clear,next){
    event.addEventListener('click',function(){
    clear.classList.add(d);
    next.classList.remove(d);
  });
  };
  function loadA(clear,next){
    clear.classList.add(d);
    next.classList.remove(d);
  };


  function loadB(event,clear,next,action){
    event.addEventListener('click',function(){
    clear.classList.add(d);
    next.classList.remove(d);
    action();
  });
  };


  function loadC(event,T,action){
    event.addEventListener('click',function(){
    clearW();
    T.classList.remove(d);
    action();
    finish();
  });
  };


  function loadD(T){
    T.addEventListener('click',function(){
    addW();
    T.classList.add(d);
  });
  };


  function apr(){
    if(randCx==0){
      setInterval(() => {
        if(i <= aprp.length){
            appear.textContent = 'アタッカーLv.1が現れた'.substr(0,i);
            i++;
          }
        }, speed);
    }else if(randCx==1){
      setInterval(() => {
        if(i <= aprp.length){
            appear.textContent = '一発屋Lv.1が現れた'.substr(0,i);
            i++;
          }
        }, speed);
    }else{
        setInterval(() => {
        if(i <= aprp.length){
            appear.textContent = 'アサシンLv.1が現れた'.substr(0,i);
            i++;
          }
        }, speed);
      }
    i=0;
  }





  
  function nn(){
    re(nnnT);
    aC++;
    myC.textContent = aC;
    shufflu();
    cpT.classList.remove(d);
    cpT.textContent = cp[y];
    resN();
  }
  

  function da(){
    re(damage);
    if(aC<=0){
      damage.textContent = 'タメが足りません';
      return;
    }else{
      aC--;
      myC.textContent = aC;
      shufflu();
      cpT.classList.remove(d);
      cpT.textContent = cp[y];
      resA();
      stroke(syuriken,'#syuriken');
    }
  }

function stroke(s,SorS){
  $(function(){
    var ss= setInterval(() => {
      s.classList.remove('dismiss');
      $(SorS).css('margin-top',sx);
      $(SorS).css('right',sy);
      $(SorS).css('transform','rotate(0.'+ro+'turn)');
      if(ro==10){ro=0;}
      ro+=0.5;
      sx--;
      sy-=3;
      if(sx==250){
        clearInterval(ss);
        s.classList.add('dismiss');
        //sy=400
        sx = 400;
        sy = 850;
      }
    }, 1);
  })
 };
function strokeP(s,SorS){
  $(function(){
    var ss= setInterval(() => {
      s.classList.remove('dismiss');
      $(SorS).css('margin-top',sx);
      $(SorS).css('right',sy);
      sx--;
      sy-=3;
      if(sx==250){
        clearInterval(ss);
        s.classList.add('dismiss');
        //sy=400
        sx = 400;
        sy = 850;
      }
    }, 1);
  })
 };

 
function Cstroke(s,SorS){
  $(function(){
    var ss= setInterval(() => {
      s.classList.remove('dismiss');
      $(SorS).css('margin-top',Csx);
      $(SorS).css('right',Csy);
      $(SorS).css('transform','rotate(0.'+Cro+'turn)');
      if(Cro==10){Cro=0;}
      Cro+=0.5;
      Csx++;
      Csy+=3;
      if(Csx==450){
        clearInterval(ss);
        s.classList.add('dismiss');
        console.log(Csy);
        //sy=400
        Csx = 280;
        Csy = 400;
      }
    }, 1);
  })
 };
function CstrokeP(s,SorS){
  $(function(){
    var ss= setInterval(() => {
      s.classList.remove('dismiss');
      $(SorS).css('margin-top',Csx);
      $(SorS).css('right',Csy);
      $(SorS).css('transform','rotate(0.85turn)');
      Csx++;
      Csy+=3;
      if(Csx==450){
        clearInterval(ss);
        s.classList.add('dismiss');
        console.log(Csy);
        //sy=400
        Csx = 280;
        Csy = 400;
      }
    }, 1);
  })
 };


  function ba(){
    re(bariaT);
    var x= setInterval(() => {
      bariaT.textContent = bariaP.substr(0,i);
      i++;
    }, speed);
          if(i == bariaP.length){
            clearInterval(x);
        }
        shufflu();
    cpT.classList.remove(d);
    cpT.textContent = cp[y];
    baS();
  }
var Gx=300;
var Gy=250;
var Tx=-0.1;

  function baS(){
    Gsword.classList.remove(d);
    
    setTimeout(function(){
      var Sbari = setInterval(() => {
      
      $(function(){
        $('#Gsword').css('margin-top',Gx);
        $('#Gsword').css('left',Gy);
        $('#Gsword').css('transform','rotate('+Tx+'turn)');
      if(Tx>=0.20){
        clearInterval(Sbari);
        setTimeout(() => {
          Gx = 300;
          Gy = 250;
          Tx=-0.1;
          $('#Gsword').css('margin-top',Gx);
          $('#Gsword').css('left',Gy);
          $('#Gsword').css('transform','rotate('+Tx+'turn)');
          Gsword.classList.add(d); 
        }, 200);
        }else{
        Tx+=0.01;
      }
    })
    Gx+=5;
    Gy+=2;
    }, 0.1);
    
    },500)
  }

var CGx=200;
var CGy=760;
var CTx=0.1;
  function CbaS(){
    GswordR.classList.remove(d);
    
    setTimeout(function(){
      var Sbari = setInterval(() => {
      
      $(function(){
        $('#GswordR').css('margin-top',CGx);
        $('#GswordR').css('left',CGy);
        $('#GswordR').css('transform','rotate('+CTx+'turn)');
        console.log(CTx);
      if(CTx<=-0.2){
        clearInterval(Sbari);
        setTimeout(() => {
          CGx = 200;
          CGy = 760;
          CTx=0.1;
          $('#GswordR').css('margin-top',CGx);
          $('#GswordR').css('right',CGy);
          $('#GswordR').css('transform','rotate('+CTx+'turn)');
          GswordR.classList.add(d); 
        }, 200);
        }else{
        CTx-=0.01;
      }
    })
    CGx+=5;
    CGy-=2;
    }, 0.1);
    
    },500)
  }


  function pa(){
    re(patcT);
    if(aC<=1){
      patcT.textContent = 'タメが足りません';
      return;
    }else{
      aC-=2;
      shufflu();
      cpT.classList.remove(d);
      cpT.textContent = cp[y];
      myC.textContent = aC;
      resP();
      strokeP(sword,'#sword');
    }
  }

  function shufflu(){
    y = (Math.floor(Math.random()*4));
    if(aC==0 && yC==0){
      y=3;
      yC++;
      yourC.textContent = yC;
      return;
    }else if(yC<1 && y==0){
      shufflu();
    }else if(yC<2 && y==2){
      shufflu();
    }else if(y==3){
      yC++;
      yourC.textContent = yC;
    }else if(y==0 && yC>=1){
      yC--;
      yourC.textContent = yC;
      Cstroke(Csyuriken,'#Csyuriken');
    }else if(y==2 && yC>=2){
      yC-=2;
      yourC.textContent = yC;
      CstrokeP(swordR,'#swordR');
    }else{
      CbaS();
      return;
    }
  }
  

  function yhd(p){
    yh-=p;
    yourHP.textContent=yh;
    Damagedcp(C,CD);
  }
  function mhd(p){
    mh-=p;
    myHP.textContent = mh;
    Damaged(F,FD);
  }




  function resA(){
    if(y==3){
      if(dicideNow==0){
        yhd(40);
      }else{
        yhd(30);
      }
      typing(damage,dmg);
    }else if(y==2){
      if(dicideNow==0){
              if(randCx==1){
                mhd(20)
              }else{
                mhd(10);
              }
      }else{
              if(randCx==1){
                mhd(30)
              }else{
                mhd(20);
              }
      }
      typing(damage,'攻撃しましたが、相手が必殺技をしてきました')
    }else{
      typing(damage,'攻撃しましたが、無効化されました')
  }
 }


  function resN(){
    if(y==2){
      if(randCx==1){
        mhd(60)}else{
          mhd(50);
        }
       typing(nnnT,'相手が必殺技をしてきました')
    }else if(y==0){
      if(randCx==0){
        mhd(40)
      }else{
        mhd(30)    
      }
      typing(nnnT,'相手が攻撃をしてきました') 
    }else{
    typing(nnnT,nnnP)
    }
  }


  function resP(){
    if(y==0){
        if(dicideNow==1){
          if(randCx==0){
            yhd(20)}else{
              yhd(30);
            }
        }else{
          if(randCx==0){
            yhd(10)
          }else{
            yhd(20)
          }
         }
      typing(patcT,'相手が攻撃してきましたが、必殺技で打ち勝ちました');
    }else if(y==3){
      if(dicideNow==1){
        yhd(60);
      }else{
        yhd(50)
      }
        typing(patcT,patcP);
    }else{
      typing(patcT,'無効化されました')
    }
  }


  function typing(T,P){
    var x= setInterval(() => {
      T.textContent = P.substr(0,i);
      i++;
      if(i > P.length){
        clearInterval(x);
      }
    }, speed);
  }


  function re(T){
    i=0;
    T.textContent = '';
  }


  function finish(){
    
    if(yh <= 0){
      yourHP.textContent =0;
        setTimeout(function(){
          fin.classList.remove(d);
          finT.textContent = 'You Win!'
        },600);
      };
      if(mh <=0){
        myHP.textContent = 0;
        setTimeout(function(){
          fin.classList.remove(d);
          finT.textContent = 'You Lose...';
        },600);
      };
  }

  function RS(){
    restart.addEventListener('click',function (){
      ress();
      if(dicideNow==0){
        yC=2;
        yourC.textContent=yC;
      }
    });
  }

 startM.addEventListener('click',function(){
   ress();
   fight.classList.add(d);
   start.classList.remove(d);
   fightF1.classList.add(d);
   fightF2.classList.add(d);
   fightF3.classList.add(d);
   fightC[randCx].classList.add(d);
   randC();
 })

 function ress(){
  fin.classList.add(d);
  yourHP.textContent=yh=100;
  myHP.textContent=mh=100;
  damage.classList.add(d);
  bariaT.classList.add(d);
  patcT.classList.add(d);
  nnnT.classList.add(d);
  addW();
  cpT.classList.add(d);
  yourC.textContent=yC=0;
  myC.textContent= aC =0;
     if(dicideNow==2){
       myC.textContent = aC=2;
       console.log(aC);
     }
};
  
function Damaged(F,FD){
  setTimeout(()=>{
  F.classList.add(d);
  FD.classList.remove(d);
  setTimeout(() => {
    FD.classList.add(d);
    F.classList.remove(d);
  }, 100);

},600);
}

function Damagedcp(C,CD){
    setTimeout(()=>{
      C.classList.add(d);
      CD.classList.remove(d);
      setTimeout(() => {
        CD.classList.add(d);
        C.classList.remove(d);
      }, 100);

    },600);
}
}
