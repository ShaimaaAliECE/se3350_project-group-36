function reset() {
    const reset = setTimeout(hedgehog, 1500);
}

function hedgehog() {
    document.getElementById("stepCorrect").innerHTML = "🦔";
}

function correctAudio() {
    caudio = document.getElementById("correctAudio");
    caudio.play();
}

function incorrectAudio() {
    iaudio = document.getElementById("incorrectAudio");
    iaudio.play();
}