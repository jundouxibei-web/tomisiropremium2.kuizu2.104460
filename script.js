 'use strict';

const answer1 = "ろぼっとよシロー"; // 正解（例）
const answer2 = "かーとよシロー";
const answer3 = ["まっシロー","ほわいとよシロー","シロー"];
const answer4 = "とよシローにん";
const answer5 = "かおなシロー";
const answer6 = "びんぼうひまなシロー";
const answer7 = "ろまんてぃすとよシロー";
const answer8 = "おいろなおシロー";
const answer9 = "さんかいみたらシロー";
const answer10 = "はるぱごるにすわシロー";


 const button0 = document.getElementById("totoi1");
 if (button0) {
 button0.addEventListener("click", () => {
    document.querySelector('.setumei').style.display = 'none';
  document.querySelector('.toi').style.display = 'block';
  localStorage.setItem("score", 0);
 });
}

let score = Number(localStorage.getItem("score")) || 0;

 const button1 = document.getElementById("hint1");
 if (button1) {
 button1.addEventListener("click", () => {
  document.querySelector('.hint').style.display = 'block';
   document.querySelector('.hintbtn').style.display = 'none';
  score -= 5; 
    document.getElementById("score").textContent = score;
    console.log('-5');
    localStorage.setItem("score", score); // ← 保存
 });
 }


 const button11 = document.getElementById("checktoi1");
 if (button11) {
 button11.addEventListener("click", () => {
const input = document.getElementById("toyo1").value;
document.querySelector('.kaitou').style.display = 'block';
document.querySelector('.mondai').style.display = 'none';
if (input === answer1) {
    score += 10; 
    document.getElementById("score").textContent = score;
   console.log('+10');
    localStorage.setItem("score", score); // ← 保存
    
     document.querySelector('.seikai').style.display = 'block';
     document.querySelector('.ome').style.display = 'block';
     document.querySelector('.seikaikaisetu').style.display = 'block';
  } else {
   console.log('0');
    document.querySelector('.huseikai').style.display = 'block';
    document.querySelector('.zan').style.display = 'block';
    document.querySelector('.huseikaikaisetu').style.display = 'block';
  }
 });
}

 const button111 = document.getElementById("gonext1");
 if (button111) {
 button111.addEventListener("click", () => {
  location.href = 'index2.html';
 })
}


 const button2 = document.getElementById("hint2");
 if (button2) {
 button2.addEventListener("click", () => {
  document.querySelector('.hint').style.display = 'block';
   document.querySelector('.hintbtn').style.display = 'none';
  score -= 5; 
    document.getElementById("score").textContent = score;
    console.log('-5');
    localStorage.setItem("score", score); // ← 保存
 });
}


 const button22 = document.getElementById("checktoi2");
 if (button22) {
 button22.addEventListener("click", () => {
const input = document.getElementById("toyo2").value;
document.querySelector('.kaitou').style.display = 'block';
document.querySelector('.mondai').style.display = 'none';
if (input === answer2) {
    score += 10; 
    document.getElementById("score").textContent = score;
   console.log('+10');
    localStorage.setItem("score", score); // ← 保存
    
     document.querySelector('.seikai').style.display = 'block';
     document.querySelector('.ome').style.display = 'block';
     document.querySelector('.seikaikaisetu').style.display = 'block';
  } else {
   console.log('0');
    document.querySelector('.huseikai').style.display = 'block';
    document.querySelector('.zan').style.display = 'block';
    document.querySelector('.huseikaikaisetu').style.display = 'block';
  }
 });
}

 const button222 = document.getElementById("gonext2");
 if (button222) {
 button222.addEventListener("click", () => {
  location.href = 'index3.html';
 })
}

 const button3 = document.getElementById("hint3");
 if (button3) {
 button3.addEventListener("click", () => {
  document.querySelector('.hint').style.display = 'block';
   document.querySelector('.hintbtn').style.display = 'none';
  score -= 5; 
    document.getElementById("score").textContent = score;
    console.log('-5');
    localStorage.setItem("score", score); // ← 保存
 });
}


 const button33 = document.getElementById("checktoi3");
 if (button33) {
 button33.addEventListener("click", () => {
const input = document.getElementById("toyo3").value;
document.querySelector('.kaitou').style.display = 'block';
document.querySelector('.mondai').style.display = 'none';
if (answer3.includes(input)) {
    score += 10; 
    document.getElementById("score").textContent = score;
   console.log('+10');
    localStorage.setItem("score", score); // ← 保存
    
     document.querySelector('.seikai').style.display = 'block';
     document.querySelector('.ome').style.display = 'block';
     document.querySelector('.seikaikaisetu').style.display = 'block';
  } else {
   console.log('0');
    document.querySelector('.huseikai').style.display = 'block';
    document.querySelector('.zan').style.display = 'block';
    document.querySelector('.huseikaikaisetu').style.display = 'block';
  }
 });
}

 const button333 = document.getElementById("gonext3");
 if (button333) {
 button333.addEventListener("click", () => {
  location.href = 'index4.html';
 })
}

 const button4 = document.getElementById("hint4");
 if (button4) {
 button4.addEventListener("click", () => {
  document.querySelector('.hint').style.display = 'block';
   document.querySelector('.hintbtn').style.display = 'none';
  score -= 5; 
    document.getElementById("score").textContent = score;
    console.log('-5');
    localStorage.setItem("score", score); // ← 保存
 });
}


 const button44 = document.getElementById("checktoi4");
 if (button44) {
 button44.addEventListener("click", () => {
const input = document.getElementById("toyo4").value;
document.querySelector('.kaitou').style.display = 'block';
document.querySelector('.mondai').style.display = 'none';
if (input === answer4) {
    score += 10; 
    document.getElementById("score").textContent = score;
   console.log('+10');
    localStorage.setItem("score", score); // ← 保存
    
     document.querySelector('.seikai').style.display = 'block';
     document.querySelector('.ome').style.display = 'block';
     document.querySelector('.seikaikaisetu').style.display = 'block';
  } else {
   console.log('0');
    document.querySelector('.huseikai').style.display = 'block';
    document.querySelector('.zan').style.display = 'block';
    document.querySelector('.huseikaikaisetu').style.display = 'block';
  }
 });
}

 const button444 = document.getElementById("gonext4");
 if (button444) {
 button444.addEventListener("click", () => {
  location.href = 'index5.html';
 })
}

 const button5 = document.getElementById("hint5");
 if (button5) {
 button5.addEventListener("click", () => {
  document.querySelector('.hint').style.display = 'block';
   document.querySelector('.hintbtn').style.display = 'none';
  score -= 5; 
    document.getElementById("score").textContent = score;
    console.log('-5');
    localStorage.setItem("score", score); // ← 保存
 });
}


 const button55 = document.getElementById("checktoi5");
 if (button55) {
 button55.addEventListener("click", () => {
const input = document.getElementById("toyo5").value;
document.querySelector('.kaitou').style.display = 'block';
document.querySelector('.mondai').style.display = 'none';
if (input === answer5) {
    score += 10; 
    document.getElementById("score").textContent = score;
   console.log('+10');
    localStorage.setItem("score", score); // ← 保存
    
     document.querySelector('.seikai').style.display = 'block';
     document.querySelector('.ome').style.display = 'block';
     document.querySelector('.seikaikaisetu').style.display = 'block';
  } else {
   console.log('0');
    document.querySelector('.huseikai').style.display = 'block';
    document.querySelector('.zan').style.display = 'block';
    document.querySelector('.huseikaikaisetu').style.display = 'block';
  }
 });
}

 const button555 = document.getElementById("gonext5");
 if (button555) {
 button555.addEventListener("click", () => {
  location.href = 'index6.html';
 })
}

 const button6 = document.getElementById("hint6");
 if (button6) {
 button6.addEventListener("click", () => {
  document.querySelector('.hint').style.display = 'block';
   document.querySelector('.hintbtn').style.display = 'none';
  score -= 5; 
    document.getElementById("score").textContent = score;
    console.log('-5');
    localStorage.setItem("score", score); // ← 保存
 });
}


 const button66 = document.getElementById("checktoi6");
 if (button66) {
 button66.addEventListener("click", () => {
const input = document.getElementById("toyo6").value;
document.querySelector('.kaitou').style.display = 'block';
document.querySelector('.mondai').style.display = 'none';
if (input === answer6) {
    score += 10; 
    document.getElementById("score").textContent = score;
   console.log('+10');
    localStorage.setItem("score", score); // ← 保存
    
     document.querySelector('.seikai').style.display = 'block';
     document.querySelector('.ome').style.display = 'block';
     document.querySelector('.seikaikaisetu').style.display = 'block';
  } else {
   console.log('0');
    document.querySelector('.huseikai').style.display = 'block';
    document.querySelector('.zan').style.display = 'block';
    document.querySelector('.huseikaikaisetu').style.display = 'block';
  }
 });
}

 const button666 = document.getElementById("gonext6");
 if (button666) {
 button666.addEventListener("click", () => {
  location.href = 'index7.html';
 })
}

 const button7 = document.getElementById("hint7");
 if (button7) {
 button7.addEventListener("click", () => {
  document.querySelector('.hint').style.display = 'block';
   document.querySelector('.hintbtn').style.display = 'none';
  score -= 5; 
    document.getElementById("score").textContent = score;
    console.log('-5');
    localStorage.setItem("score", score); // ← 保存
 });
}


 const button77 = document.getElementById("checktoi7");
 if (button77) {
 button77.addEventListener("click", () => {
const input = document.getElementById("toyo7").value;
document.querySelector('.kaitou').style.display = 'block';
document.querySelector('.mondai').style.display = 'none';
if (input === answer7) {
    score += 10; 
    document.getElementById("score").textContent = score;
   console.log('+10');
    localStorage.setItem("score", score); // ← 保存
    
     document.querySelector('.seikai').style.display = 'block';
     document.querySelector('.ome').style.display = 'block';
     document.querySelector('.seikaikaisetu').style.display = 'block';
  } else {
   console.log('0');
    document.querySelector('.huseikai').style.display = 'block';
    document.querySelector('.zan').style.display = 'block';
    document.querySelector('.huseikaikaisetu').style.display = 'block';
  }
 });
}

 const button777 = document.getElementById("gonext7");
 if (button777) {
 button777.addEventListener("click", () => {
  location.href = 'index8.html';
 })
}


 const button8 = document.getElementById("hint8");
 if (button8) {
 button8.addEventListener("click", () => {
  document.querySelector('.hint').style.display = 'block';
   document.querySelector('.hintbtn').style.display = 'none';
  score -= 5; 
    document.getElementById("score").textContent = score;
    console.log('-5');
    localStorage.setItem("score", score); // ← 保存
 });
}


 const button88 = document.getElementById("checktoi8");
 if (button88) {
 button88.addEventListener("click", () => {
const input = document.getElementById("toyo8").value;
document.querySelector('.kaitou').style.display = 'block';
document.querySelector('.mondai').style.display = 'none';
if (input === answer8) {
    score += 10; 
    document.getElementById("score").textContent = score;
   console.log('+10');
    localStorage.setItem("score", score); // ← 保存
    
     document.querySelector('.seikai').style.display = 'block';
     document.querySelector('.ome').style.display = 'block';
     document.querySelector('.seikaikaisetu').style.display = 'block';
  } else {
   console.log('0');
    document.querySelector('.huseikai').style.display = 'block';
    document.querySelector('.zan').style.display = 'block';
    document.querySelector('.huseikaikaisetu').style.display = 'block';
  }
 });
}

 const button888 = document.getElementById("gonext8");
 if (button888) {
 button888.addEventListener("click", () => {
  location.href = 'index9.html';
 })
}


const button9 = document.getElementById("hint9");
 if (button9) {
 button9.addEventListener("click", () => {
  document.querySelector('.hint').style.display = 'block';
   document.querySelector('.hintbtn').style.display = 'none';
  score -= 5; 
    document.getElementById("score").textContent = score;
    console.log('-5');
    localStorage.setItem("score", score); // ← 保存
 });
}


 const button99 = document.getElementById("checktoi9");
 if (button99) {
 button99.addEventListener("click", () => {
const input = document.getElementById("toyo9").value;
document.querySelector('.kaitou').style.display = 'block';
document.querySelector('.mondai').style.display = 'none';
if (input === answer9) {
    score += 10; 
    document.getElementById("score").textContent = score;
   console.log('+10');
    localStorage.setItem("score", score); // ← 保存
    
     document.querySelector('.seikai').style.display = 'block';
     document.querySelector('.ome').style.display = 'block';
     document.querySelector('.seikaikaisetu').style.display = 'block';
  } else {
   console.log('0');
    document.querySelector('.huseikai').style.display = 'block';
    document.querySelector('.zan').style.display = 'block';
    document.querySelector('.huseikaikaisetu').style.display = 'block';
  }
 });
}

 const button999 = document.getElementById("gonext9");
 if (button999) {
 button999.addEventListener("click", () => {
  location.href = 'index10.html';
 })
}

const button10 = document.getElementById("hint10");
 if (button10) {
 button10.addEventListener("click", () => {
  document.querySelector('.hint').style.display = 'block';
   document.querySelector('.hintbtn').style.display = 'none';
  score -= 5; 
    document.getElementById("score").textContent = score;
    console.log('-5');
    localStorage.setItem("score", score); // ← 保存
 });
}


 const button1010 = document.getElementById("checktoi10");
 if (button1010) {
 button1010.addEventListener("click", () => {
const input = document.getElementById("toyo10").value;
document.querySelector('.kaitou').style.display = 'block';
document.querySelector('.mondai').style.display = 'none';
if (input === answer10) {
    score += 10; 
    document.getElementById("score").textContent = score;
   console.log('+10');
    localStorage.setItem("score", score); // ← 保存
    
     document.querySelector('.seikai').style.display = 'block';
     document.querySelector('.ome').style.display = 'block';
     document.querySelector('.seikaikaisetu').style.display = 'block';
  } else {
   console.log('0');
    document.querySelector('.huseikai').style.display = 'block';
    document.querySelector('.zan').style.display = 'block';
    document.querySelector('.huseikaikaisetu').style.display = 'block';
  }
 });
}

 const button101010 = document.getElementById("gonext10");
 if (button101010) {
 button101010.addEventListener("click", () => {
  location.href = 'index11.html';
 })
}


function check11() {
    
  document.querySelector('.toi').style.display = 'none';
  document.querySelector('.kaito').style.display = 'block';

if (score >=-50){
    if(score<=0){
     document.getElementById("zeroika").textContent = "ちょっと待ってちょっと待って！一点も取れてないの？なんならマイナス点なんですけど？ヒントを見たうえで正解数よりも不正解数が多いだなんてとても勉強不足な人なんだね、、、そんなドパガキみたいな生活はやめてまっとうに生きてみよう！";
    }
}

if (score >=0){
    if(score<60){
        document.getElementById('rakutan').textContent = "残念！君の今の得点だと60点未満となっているね！このままだと「豊城学Ⅱ」の単位取得条件を満たせない！このままじゃ留年確定の道だ！再履修は何度でも可能だから結果を保存してすぐにテストを始めよう！";
    }
}

if (score >=60){
    if(score<70){
        document.getElementById('C').textContent = "おめでとう！君の今回の成績は60点以上！よって「豊城学Ⅱ」の単位取得条件達成だ！この講義は1220単位に相当するから一気に卒業単位をゲットだね！でも君の成績はC評価！もう一度挑戦してまだまだ上を目指そう！";
    }
}

if (score >=70){
    if(score<80){
        document.getElementById('B').textContent = "おめでとう！君の今回の成績は70点以上！よって「豊城学Ⅱ」の単位取得条件達成だ！この講義は1220単位に相当するから一気に卒業単位をゲットだね！でも君の成績はB評価！もう一度挑戦してまだまだ上を目指そう！";
    }
}

if (score >=80){
    if(score<90){
        document.getElementById('A').textContent = "おめでとう！君の今回の成績は80点以上！よって「豊城学Ⅱ」の単位取得条件達成だ！この講義は1220単位に相当するから一気に卒業単位をゲットだね！でも君の成績はA評価！もう一度挑戦してまだまだ上を目指そう！";
    }
}

if (score >=90){
    if(score<100){
        document.getElementById('S').textContent = "おめでとう！君の今回の成績は90点以上！よって「豊城学Ⅱ」の単位取得条件達成だ！この講義は1220単位に相当するから一気に卒業単位をゲットだね！でも君の成績はS評価！満点まであと少し！頑張ろう！";
    }
}

if (score === 100){
        document.getElementById('manten').textContent = "ついにやったか！夢の100点到達！約束通りエクストラステージの挑戦権を与えよう。ここにある3問は間違えても答えを表示しないから実力で解いてみよう！";
        document.querySelector('.ex').style.display = 'block';
}

}

document.getElementById("result").textContent =  score + "点";

const share_title = `とよシローなにシロークイズ${score}点でした。`;
  const share_twitter = document.getElementById("js-share-twitter");
  share_twitter.setAttribute(
      "href",
      "https://twitter.com/share?url=" + "https://jundouxibei-web.github.io/tomisiropremium.-.104460/" + "&text=" + share_title + "&hashtags=とよシローなにシロークイズ"
  );
