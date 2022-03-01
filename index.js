var option1 = document.getElementById("o1");
var option2 = document.getElementById("o2");
var loadin = document.getElementById("o3");
var q = document.getElementById("question");
var c = 0;
var m = 0;
var c2 = 0;
var cs = 0;

//Changes the buttons to the default.
function defaultQ() {   
    q.innerHTML = "Enter The Jank";
    option1.setAttribute("onclick","f1()");
    option1.innerHTML = "Begin";
    option2.setAttribute("onclick", "window.close()");
    option2.innerHTML = "Exit";
    loadin.outerHTML = "<p></p>";
}
defaultQ();
//RNG Start!
function f1() {   
    q.innerHTML = "Random Number Generator";
    option1.setAttribute("onclick","rng()");
    option1.innerHTML = "Select";
    option2.setAttribute("onclick", "f2()");
    option2.innerHTML = "Next";
}
function rng() {
     q.innerHTML = "Random Number Generator, 1-10";
    option1.setAttribute("onclick","rng110()");
    option1.innerHTML = "Roll";
    option2.setAttribute("onclick", "rng2()");
    option2.innerHTML = "Higher";
}   
function rng110() {
     q.innerHTML = Math.floor(Math.random() * 10 + 1);
    option1.setAttribute("onclick","rng110()");
    option1.innerHTML = "Roll";
    option2.setAttribute("onclick", "rng()");
    option2.innerHTML = "Return";
}   
function rng2() {
     q.innerHTML = "Random Number Generator, 1-100";
    option1.setAttribute("onclick","rng1100()");
    option1.innerHTML = "Roll";
    option2.setAttribute("onclick", "rng3()");
    option2.innerHTML = "Higher";
}  
function rng1100() {
     q.innerHTML = Math.floor(Math.random() * 100 + 1);
    option1.setAttribute("onclick","rng1100()");
    option1.innerHTML = "Roll";
    option2.setAttribute("onclick", "rng()");
    option2.innerHTML = "Return";
}   
function rng3() {
     q.innerHTML = "Random Number Generator, 1-1000";
    option1.setAttribute("onclick","rng11000()");
    option1.innerHTML = "Roll";
    option2.setAttribute("onclick", "f1()");
    option2.innerHTML = "Return";
}  
function rng11000() {
     q.innerHTML = Math.floor(Math.random() * 1000 + 1);
    option1.setAttribute("onclick","rng11000()");
    option1.innerHTML = "Roll";
    option2.setAttribute("onclick", "rng()");
    option2.innerHTML = "Return";
}   
//End of RNG; Start Of DND
function f2() {   
    q.innerHTML = "Standard Dice";
    option1.setAttribute("onclick","dnd4a()");
    option1.innerHTML = "Select";
    option2.setAttribute("onclick", "f3()");
    option2.innerHTML = "Next";
}
function dnd4a() {   
    q.innerHTML = "4 sided";
    option1.setAttribute("onclick","dnd4()");
    option1.innerHTML = "Roll";
    option2.setAttribute("onclick", "dnd6a()");
    option2.innerHTML = "Higher";
}
function dnd4() {
     q.innerHTML = "Roll returned a " + Math.floor(Math.random() * 4 + 1);
    option1.setAttribute("onclick","dnd4()");
    option1.innerHTML = "Roll";
    option2.setAttribute("onclick", "f2()");
    option2.innerHTML = "Return";
}   
function dnd6a() {   
    q.innerHTML = "6 sided";
    option1.setAttribute("onclick","dnd6()");
    option1.innerHTML = "Roll";
    option2.setAttribute("onclick", "dnd8a()");
    option2.innerHTML = "Higher";
}
function dnd6() {
     q.innerHTML = Math.floor(Math.random() * 6 + 1);
    option1.setAttribute("onclick","dnd6()");
    option1.innerHTML = "Roll";
    option2.setAttribute("onclick", "f2()");
    option2.innerHTML = "Return";
}   
function dnd8a() {   
    q.innerHTML = "8 sided";
    option1.setAttribute("onclick","dnd8()");
    option1.innerHTML = "Roll";
    option2.setAttribute("onclick", "dnd10a()");
    option2.innerHTML = "Higher";
}
function dnd8() {
     q.innerHTML = Math.floor(Math.random() * 8 + 1);
    option1.setAttribute("onclick","dnd8()");
    option1.innerHTML = "Roll";
    option2.setAttribute("onclick", "f2()");
    option2.innerHTML = "Return";
}   
function dnd10a() {   
    q.innerHTML = "10 sided";
    option1.setAttribute("onclick","dnd10()");
    option1.innerHTML = "Roll";
    option2.setAttribute("onclick", "dnd12a()");
    option2.innerHTML = "Higher";
}
function dnd10() {
     q.innerHTML = Math.floor(Math.random() * 10 + 1);
    option1.setAttribute("onclick","dnd10()");
    option1.innerHTML = "Roll";
    option2.setAttribute("onclick", "f2()");
    option2.innerHTML = "Return";
} 
function dnd12a() {   
    q.innerHTML = "12 sided";
    option1.setAttribute("onclick","dnd12()");
    option1.innerHTML = "Roll";
    option2.setAttribute("onclick", "dnd20a()");
    option2.innerHTML = "Higher";
}
function dnd12() {
     q.innerHTML = Math.floor(Math.random() * 12 + 1);
    option1.setAttribute("onclick","dnd12()");
    option1.innerHTML = "Roll";
    option2.setAttribute("onclick", "f2()");
    option2.innerHTML = "Return";
} 
function dnd20a() {   
    q.innerHTML = "20 sided";
    option1.setAttribute("onclick","dnd20()");
    option1.innerHTML = "Roll";
    option2.setAttribute("onclick", "f2()");
    option2.innerHTML = "Return";
}
function dnd20() {
     q.innerHTML = Math.floor(Math.random() * 20 + 1);
    option1.setAttribute("onclick","dnd20()");
    option1.innerHTML = "Roll";
    option2.setAttribute("onclick", "f2()");
    option2.innerHTML = "Return";
} 
//End of dice, start of stopwatch
//End command here also cause lazy
function end() {   
    q.innerHTML = "End Of List";
    option1.setAttribute("onclick","window.close()");
    option1.innerHTML = "Exit";
    option2.setAttribute("onclick", "f1()");
    option2.innerHTML = "Reset";
}
function f3() {   
    q.innerHTML = "Stopwatch";
    option1.setAttribute("onclick","stop()");
    option1.innerHTML = "Select";
    option2.setAttribute("onclick", "f4()");
    option2.innerHTML = "Next";
}
//literally the most jank thing ever
//like try pushing the start button more than once
//guess it lives up to its name
function stop() {   
    q.innerHTML = c+"s";
    option1.setAttribute("onclick","myTimer = setInterval(stopd, 1000)");
    option1.innerHTML = "Start";
    option2.setAttribute("onclick", "clearInterval(myTimer)");
    option2.innerHTML = "pause";
}
function stopd() {   
    q.innerHTML = m+ ++c+"s";
}
//end of stopwatch, start of clock
function f4() {   
    q.innerHTML = "Clock";
    option1.setAttribute("onclick","clocc()");
    option1.innerHTML = "Select";
    option2.setAttribute("onclick", "f5()");
    option2.innerHTML = "Next";
    clearInterval(myTimer)
}
function clocc() {  
myTimer = setInterval(clocupdate, 1)
    q.innerHTML = "Clock";
    option1.setAttribute("onclick","f4()");
    option1.innerHTML = "Return";
    option2.setAttribute("onclick", "hahathisfunctiondoesnothing()");
    option2.innerHTML = "Stare";
}
//clock returns "time" lmao; idc im to lazy
function clocupdate() {
    const d = new Date();
    let time = d.getTime(); 
    q.innerHTML = time; 
}
//end of clock, start of counter
function f5() {   
    q.innerHTML = "Counter";
    option1.setAttribute("onclick","counn()");
    option1.innerHTML = "Select";
    option2.setAttribute("onclick", "f6()");
    option2.innerHTML = "Next";
    clearInterval(myTimer)
}
function counn() {   
    q.innerHTML = c2;
    option1.setAttribute("onclick","counnt()");
    option1.innerHTML = "Up";
    option2.setAttribute("onclick", "counnd()");
    option2.innerHTML = "Down";
}
function counnt() {   
    q.innerHTML = ++c2;
}
function counnd() {   
    q.innerHTML = --c2;
}
//end of counter start of cps tester
function f6() {   
    q.innerHTML = "Click Speed Test";
    option1.setAttribute("onclick","cpt()");
    option1.innerHTML = "Select";
    option2.setAttribute("onclick", "f7()");
    option2.innerHTML = "Next";
    clearInterval(myTimer);
    clearTimeout(myTimeout);
}
function cpt() {   
    q.innerHTML = c2;
    option1.setAttribute("onclick","cpclickd()");
    option1.innerHTML = "Click";
    option2.setAttribute("onclick", "f6()");
    option2.innerHTML = "Back";
}
function cpclickd() {   
    q.innerHTML = ++c2;
    option1.setAttribute("onclick","cpclickd2()");
    const myTimeout = setTimeout(cpsend, 10000);
}
function cpclickd2() {   
    q.innerHTML = ++c2;
}
function cpsend() {
    q.innerHTML = c2 / 10 + " CPS";
    option1.setAttribute("onclick","alert('Done!')");
    option1.innerHTML = "Done!";
    option2.setAttribute("onclick", "cpt()");
    option2.innerHTML = "Reset";    
    c2 = 0;
}
//end of cps test start of 8ball
function f7() {   
    q.innerHTML = "Magic 8-Ball";
    option1.setAttribute("onclick","eballa()");
    option1.innerHTML = "Select";
    option2.setAttribute("onclick", "end()");
    option2.innerHTML = "Next";
}
function eballa() {   
    q.innerHTML = "Magic 8-Ball";
    option1.setAttribute("onclick","eball()");
    option1.innerHTML = "Shake";
    option2.setAttribute("onclick", "f7()");
    option2.innerHTML = "Back";
}
function eball() {
var num = num=Math.floor(Math.random() * 9 +1);
let response;
if (num > 9) {
  response = "For Sure!";
} else if (num > 8) {
  response = "YES!";
} else if (num > 7) {
  response = "Positive.";
} else if (num > 6) {
  response = "Yep.";
} else if (num > 5) {
  response = "My sources say yes.";
} else if (num > 4) {
  response = "Answer unclear, shake again.";
} else if (num > 3) {
  response = "No cigar.";
} else if (num > 2) {
  response = "No.";
} else if (num > 1) {
  response = "Nope.";
} else if (num > 0) {
  response = "Negitive.";}
q.innerHTML = response;
}
//end of 8ball start of