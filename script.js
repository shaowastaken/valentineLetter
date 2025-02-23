

function no() {
    console.log('miao');
    document.getElementById('text').innerText = "Sorry, I didn't understand";
    document.getElementById('btnNo').classList.add("hidden");
}

function yes() {
    const textEl = document.getElementById('text');
    const pingGifEl = document.getElementById('pinguGif');
    document.getElementById('btnNo').classList.add("hidden");
    document.getElementById('btnYes').classList.add("hidden");
    document.getElementById('text').innerText = "Yippie";
    document.getElementById('text').classList.add("size-[0vw]");
    document.getElementById("pinguGif").src = "https://media1.tenor.com/m/32-amfpsB8gAAAAd/penguin-cute.gif";
    document.getElementById("pinguGif").classList.remove("size-[30vw]");
    document.getElementById("pinguGif").classList.add("size-[100vw]");
    document.getElementById("pinguGif").classList.add("absolute");
    document.getElementById("pinguGif").classList.add("size-[100vw]");
    document.getElementById("pinguGif").classList.add("-top-200px");
    textEl.style.visibility = "hidden";
    pingGifEl.style.top = "25vh";
    pingGifEl.style.height = "50vh";
    pingGifEl.requestFullscreen();
}



