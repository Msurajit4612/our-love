// ---------------- Letter Typing ----------------

const letter =
"Every day with you feels like a blessing. You are my happiness, my peace, my best friend and the love of my life. I don't know what the future holds, but I know I want every future with you. ❤️";

let index = 0;

function typeLetter() {

    const box = document.getElementById("typing");

    if (!box) return;

    if (index < letter.length) {

        box.innerHTML += letter.charAt(index);

        index++;

        setTimeout(typeLetter,40);

    }

}

// ---------------- Love Reasons ----------------

const reasons = [
"❤️ Your smile makes my day.",
"❤️ You are my happiness.",
"❤️ You understand me better than anyone.",
"❤️ You always support me.",
"❤️ You are beautiful inside and out.",
"❤️ You make my life complete.",
"❤️ I feel lucky to have you.",
"❤️ You are my future wife.",
"❤️ I love everything about you."
];

let remainingReasons = [...reasons];

function showReason(){

    const box = document.getElementById("reason");
    const nextBtn = document.getElementById("nextBtn");

    if(remainingReasons.length > 0){

        const randomIndex = Math.floor(Math.random() * remainingReasons.length);

        box.innerHTML = remainingReasons[randomIndex];

        // Remove the shown reason so it won't repeat
        remainingReasons.splice(randomIndex, 1);

    }

    // Show Next button after all reasons are completed
    if(remainingReasons.length === 0){

        nextBtn.style.display = "inline-block";

    }

}

// ---------------- Love Quiz ----------------

function answer(){

    const q=document.getElementById("quiz");

    if(!q) return;

    q.innerHTML=

    "🥰 Correct Answer: WE BOTH LOVE EACH OTHER ❤️";

}

// ---------------- Together Since ----------------

function showDays(){

    const box=document.getElementById("days");

    if(!box) return;

    const start=new Date("2025-04-29");

    const today=new Date();

    const diff=Math.floor(

    (today-start)/(1000*60*60*24)

    );

    box.innerHTML=diff+" Days ❤️";

}

// ---------------- Final Message ----------------

function finalMessage(){

    const box=document.getElementById("final");

    if(box)

    box.innerHTML="❤️ I LOVE YOU FOREVER ❤️";

    createConfetti();

}

// ---------------- Hearts ----------------

function createHeart(){

    let h=document.createElement("div");

    h.id="heart";

    h.innerHTML="💖";

    h.style.left=Math.random()*100+"vw";

    h.style.fontSize=(15+Math.random()*20)+"px";

    h.style.animationDuration=(4+Math.random()*4)+"s";

    document.body.appendChild(h);

    setTimeout(()=>{

        h.remove();

    },8000);

}

setInterval(createHeart,500);

// ---------------- Confetti ----------------

function createConfetti(){

    for(let i=0;i<80;i++){

        let h=document.createElement("div");

        h.id="heart";

        h.innerHTML="❤️";

        h.style.left=Math.random()*100+"vw";

        h.style.fontSize=(15+Math.random()*30)+"px";

        h.style.animationDuration=(3+Math.random()*5)+"s";

        document.body.appendChild(h);

        setTimeout(()=>{

            h.remove();

        },8000);

    }

}

// ---------------- Auto Run ----------------

window.onload=function(){

    typeLetter();

    showDays();

}
