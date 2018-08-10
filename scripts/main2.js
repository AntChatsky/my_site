var hmpg_link = document.getElementById("homepage_link"),
    hmpg_pic = document.getElementById("homepage_pic"),
    info_link = document.getElementById("info_link"),
    info_pic = document.getElementById("info_pic"),
    skills_link = document.getElementById("skills_link"),
    skills_pic = document.getElementById("skills_pic"),
    work_link = document.getElementById("work_link"),
    work_pic = document.getElementById("work_pic"),
    contacts_link = document.getElementById("contacts_link"),
    contacts_pic = document.getElementById("contacts_pic");

hmpg_link.onmouseenter = function () {
    hmpg_pic.src = "images/menu/active/homepage.png";
};

hmpg_link.onmouseleave = function () {
    hmpg_pic.src = "images/menu/normal/homepage.png";
};

info_link.onmouseenter = function () {
    info_pic.src = "images/menu/active/about_me.png";
};

info_link.onmouseleave = function () {
    info_pic.src = "images/menu/normal/about_me.png";
};

skills_link.onmouseenter = function () {
    skills_pic.src = "images/menu/active/skills.png";
};

skills_link.onmouseleave = function () {
    skills_pic.src = "images/menu/normal/skills.png";
};

work_link.onmouseenter = function () {
    work_pic.src = "images/menu/active/work.png";
};

work_link.onmouseleave = function () {
    work_pic.src = "images/menu/normal/work.png";
};

contacts_link.onmouseenter = function () {
    contacts_pic.src = "images/menu/active/contacts.png";
};

contacts_link.onmouseleave = function () {
    contacts_pic.src = "images/menu/normal/contacts.png";
};




