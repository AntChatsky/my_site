$( document ).ready(function () {
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    var mapObj = {
      hmpg: {
        "link": document.getElementById("homepage_link"),
        "img": document.getElementById("homepage_pic")
      },
      info: {
        "link": document.getElementById("info_link"),
        "img": document.getElementById("info_pic")
      },
      skills: {
        "link": document.getElementById("skills_link"),
        "img": document.getElementById("skills_pic")
      },
      work: {
        "link": document.getElementById("work_link"),
        "img": document.getElementById("work_pic")
      },
      contacts: {
        "link": document.getElementById("contacts_link"),
        "img": document.getElementById("contacts_pic")
      }
    };

    var names = {hmpg: "homepage", info: "about_me", skills: "skills", work: "work", contacts: "contacts"};
    var path_images = "images/menu/";

    Object.keys(names).forEach(function (item) {
       mapObj[item]["link"].onmouseenter = function () {
           mapObj[item]["img"].src = path_images + "active/" + names[item] + ".png";
       };

       mapObj[item]["link"].onmouseleave = function () {
           mapObj[item]["img"].src = path_images + "normal/" + names[item] + ".png";
       };
    });

    var audio = [];
    var path_sounds = "sounds/hologram/";
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

