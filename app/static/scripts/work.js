$( document ).ready(function () {
    $(".hover_element").each( function (i, elem) {
        var numb = i.toString();
        new jBox("Modal", {
            attach: ".window_elem" + numb,
            trigger: "click",
            title: $(".title" + numb),
            content: $(".content" + numb)
        })
    });
});
