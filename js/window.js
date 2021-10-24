$(document).ready(function() {
    setTimeout(function() {
        showWindow("aboutMe");
      }, 300);
});

function showWindow(id) {
    $( "#" + id ).fadeIn(100);
    $( ".window" ).draggable({
        handle: ".titleBar",
        scroll: false
    });
    $( "#dock" + id).css({opacity: 1});
}

function closeWindow(id) {
    $( "#" + id ).fadeOut(100);
    $( "#dock" + id).attr("style", "");
}