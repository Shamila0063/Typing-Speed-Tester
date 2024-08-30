let startTime;
let timer;
let isTyping = false;

function startTyping() {
    const sentence = document.getElementById("sentence").innerText;
    const inputText = document.getElementById("input-box").value;

    if (!isTyping) {
        startTime = new Date().getTime();
        timer = setInterval(updateTime, 1000);
        isTyping = true;
    }

    if (sentence.startsWith(inputText)) {
        document.getElementById("input-box").classList.remove("error");
    } else {
        document.getElementById("input-box").classList.add("error");
    }

    if (inputText === sentence) {
        clearInterval(timer);
        calculateWPM();
        isTyping = false;
    }
}

function updateTime() {
    const currentTime = new Date().getTime();
    const timeElapsed = Math.floor((currentTime - startTime) / 1000);

    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 60;

    document.getElementById("minutes").innerText = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? `0${seconds}` : seconds;
}

function calculateWPM() {
    const timeElapsed = (new Date().getTime() - startTime) / 1000 / 60;
    const sentence = document.getElementById("sentence").innerText;
    const wordCount = sentence.split(" ").length;
    const wpm = Math.floor(wordCount / timeElapsed);
    document.getElementById("wpm").innerText = wpm;
}

function resetTest() {
    document.getElementById("input-box").value = "";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    document.getElementById("wpm").innerText = "0";
    document.getElementById("input-box").classList.remove("error");
    clearInterval(timer);
    isTyping = false;
}
