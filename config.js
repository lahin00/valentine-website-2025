<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Forever With JOYA 💍</title>

<style>
body {
    margin: 0;
    overflow: hidden;
    font-family: 'Segoe UI', sans-serif;
    background: radial-gradient(circle at top, #1e1e2f, #0f0f1a);
    color: white;
    text-align: center;
}

/* Stars */
.star {
    position: absolute;
    width: 2px;
    height: 2px;
    background: white;
    animation: twinkle 2s infinite alternate;
}
@keyframes twinkle {
    from {opacity: 0.2;}
    to {opacity: 1;}
}

/* Pages */
.page {
    display: none;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
}
.active {
    display: flex;
}

/* Buttons */
button {
    padding: 15px 30px;
    font-size: 20px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    margin: 10px;
    transition: 0.3s;
}

.yesBtn {
    background: #ff4d6d;
    color: white;
}

.noBtn {
    background: grey;
    color: white;
}

/* Fireworks */
.firework {
    position: absolute;
    font-size: 25px;
    animation: explode 1s ease-out forwards;
}
@keyframes explode {
    0% {transform: scale(0); opacity:1;}
    100% {transform: scale(3); opacity:0;}
}

/* Ring */
.ring {
    font-size: 60px;
    animation: pulse 1.5s infinite;
}
@keyframes pulse {
    0% {transform: scale(1);}
    50% {transform: scale(1.2);}
    100% {transform: scale(1);}
}
</style>
</head>

<body>

<!-- Tum Hi Ho -->
<iframe width="0" height="0"
src="https://www.youtube.com/embed/Umqb9KENgmk?autoplay=1&loop=1&playlist=Umqb9KENgmk"
allow="autoplay">
</iframe>

<!-- PAGE 1 -->
<div class="page active" id="page1">
    <h1>JOYA 🤍<br>Do you love me?</h1>
    <div>
        <button class="yesBtn" id="yes1" onclick="nextPage(2)">Yes 🤍</button>
        <button class="noBtn" id="no1" onclick="growYes('yes1','no1')">No</button>
    </div>
</div>

<!-- PAGE 2 (Secret Date) -->
<div class="page" id="page2">
    <h1>Enter the day our story began 💌<br>(DDMM)</h1>
    <input id="codeInput" type="text" placeholder="1301" style="padding:10px;border-radius:20px;border:none;text-align:center;">
    <br><br>
    <button class="yesBtn" onclick="checkCode()">Unlock 🤍</button>
</div>

<!-- PAGE 3 -->
<div class="page" id="page3">
    <h1>JOYA 🤍<br>Will you stay with me forever?</h1>
    <div>
        <button class="yesBtn" id="yesFinal" onclick="celebrate()">Yes 🤍</button>
        <button class="noBtn" id="noFinal" onclick="growYes('yesFinal','noFinal')">No</button>
    </div>
</div>

<!-- PAGE 4 (MARRY ME) -->
<div class="page" id="page4">
    <div class="ring">💍</div>
    <h1>JOYA 🤍<br><br>Will you marry me?</h1>
    <div>
        <button class="yesBtn" id="yesMarry" onclick="finalPage()">YES 💍</button>
        <button class="noBtn" id="noMarry" onclick="growYes('yesMarry','noMarry')">No</button>
    </div>
</div>

<!-- FINAL PAGE -->
<div class="page" id="page5">
    <h1>
        JOYA 🤍<br><br>
        From 13 January…<br>
        To Forever ♾️<br><br>
        I choose you.<br>
        Always.
    </h1>
</div>

<script>

// Stars
for (let i = 0; i < 120; i++) {
    let star = document.createElement("div");
    star.className = "star";
    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(star);
}

function nextPage(num) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById("page" + num).classList.add("active");
}

function growYes(yesId, noId) {
    let yes = document.getElementById(yesId);
    let no = document.getElementById(noId);

    yes.style.fontSize = (parseFloat(window.getComputedStyle(yes).fontSize) + 8) + "px";
    no.style.fontSize = (parseFloat(window.getComputedStyle(no).fontSize) - 5) + "px";

    if (parseFloat(window.getComputedStyle(no).fontSize) <= 5) {
        no.style.display = "none";
    }
}

function checkCode() {
    let code = document.getElementById("codeInput").value;
    if (code === "1301") {
        nextPage(3);
    } else {
        alert("Hint: 13 January 🤍");
    }
}

function celebrate() {
    for (let i = 0; i < 20; i++) {
        let fire = document.createElement("div");
        fire.className = "firework";
        fire.innerHTML = "✨";
        fire.style.left = Math.random() * 100 + "vw";
        fire.style.top = Math.random() * 100 + "vh";
        document.body.appendChild(fire);
        setTimeout(() => fire.remove(), 1000);
    }
    setTimeout(() => nextPage(4), 800);
}

function finalPage() {
    nextPage(5);
}
</script>

</body>
</html>
