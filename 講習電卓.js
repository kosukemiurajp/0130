
//押した数値キーを文字列として入れる
var num="0";
//合計値を格納
var ans=0;
var flag=0; //数値なら0、記号なら1
var kigou="+"; //記号を入れる変数
  window.onload = function(){
    document.getElementById("0").onclick=function(){
     OnButtonClick(this.value);
    }
    document.getElementById("1").onclick=function(){
     OnButtonClick(this.value);
    }
    document.getElementById("2").onclick=function(){
     OnButtonClick(this.value);
    }
    document.getElementById("3").onclick=function(){
     OnButtonClick(this.value);
    }
    document.getElementById("4").onclick=function(){
     OnButtonClick(this.value);
    }
    document.getElementById("5").onclick=function(){
     OnButtonClick(this.value);
    }
    document.getElementById("6").onclick=function(){
     OnButtonClick(this.value);
    }
    document.getElementById("7").onclick=function(){
     OnButtonClick(this.value);
    }
    document.getElementById("8").onclick=function(){
     OnButtonClick(this.value);
    }
    document.getElementById("9").onclick=function(){
     OnButtonClick(this.value);
     }
 };
 function  OnButtonClick(x){
      //numが0なら押したボタンに置き換わる
      if(num=="0"){
      num=""+x;
      }else{
           //numが0ではないなら文字列とする
      num+=x;
      }
      document.getElementById("text1").value=num;
      flag=0;
 }


window.onload = function(){
  document.getElementById("÷").onclick=function(){
   Calc(this.value);
  }
  document.getElementById("×").onclick=function(){
   Calc(this.value);
  }
  document.getElementById("+").onclick=function(){
   Calc(this.value);
  }
  document.getElementById("-").onclick=function(){
   Calc(this.value);
  }
  document.getElementById("=").onclick=function(){
   Calc(this.value);
  }
  document.getElementById("c").onclick=function(){
   Calc(this.value);
  }
};

function Calc(a){
 if(flag==0){
   ans=eval(ans+kigou+num);
   num="";
   document.getElementById("text1").value=ans;
   flag=1;
   kigou=a;
 }
//"="の処理
  if(a=="="){
    num="";
    ans=0;
    kigou="+";
  }
//クリアの処理
  if(a=="c"){
    num="";
    ans=0;
    kigou="+";
    document.getElementById("text1").value="";
  }
}
