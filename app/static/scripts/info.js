$( document ).ready(function () {
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    var audio = [];
    var path_sounds = "../static/sounds/hologram/";
    var format = ".ogg";

    for (var i = 0; i < 5; i++) {
        console.log(audio);
        audio[i] = document.createElement("audio");
        audio[i].appendChild(document.createElement("source"));
        document.body.appendChild(audio[i]);
        audio[i].children[0].src = path_sounds + i.toString() + format;
    }

    $(".hologram img").click(function () {
        audio[getRndInteger(1, 4)].play();
    })
});

