$( document ).ready(function () {

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
    var path = "images/menu/";

    Object.keys(names).forEach(function (item) {
       mapObj[item]["link"].onmouseenter = function () {
           mapObj[item]["img"].src = path + "active/" + names[item] + ".png";
       };

       mapObj[item]["link"].onmouseleave = function () {
           mapObj[item]["img"].src = path + "normal/" + names[item] + ".png";
       };
    });



    new jBox('Modal', {
        width: 300,
        height: 100,
        attach: '.text-block div',
        title: 'My Modal Window',
        content: '<i>Hello there!</i>'
    });

});
