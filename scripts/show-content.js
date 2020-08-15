var currentContent = "#about";
var lastLink = "about-link";

//Headings obj - matches div id
var headings = {
    about: "Hi, I'm Rob Taylor",
    projects: "My Projects",
    contact: "Contact Me"
};

/**
 * Show a block of content
 * @param {String} id - The div id to fade in
 */
function showContent(id) {    

    //Highlight the current link
    $("#" + lastLink).removeClass('nav-active');
    $(event.target).addClass('nav-active');

    //Fade out the old content before fading in the new one
    $(currentContent).fadeOut('fast', function () {
        var newContent = $("#" + id);
        newContent.addClass("a:active");
        newContent.show();
        $("#" + id).fadeIn('fast');
    });

    //Fade out the old heading text before fading in the new one
    $("#headerText").fadeOut('fast', function () {
        $("#headerText").html(headings[id]);
        $("#headerText").fadeIn('fast');
    });

    //Finally, set our vars so we know what to fade out next time
    currentContent = "#" + id;
    lastLink = $(event.target).attr('id');
}

/**
 * Custom pill-switcher control. Code awaiting refactor.
 * @param {String} pillId - The new pill to highlight
 * @param {String} hideId - The old pill to un-highlight
 * @param {String} showId - The div to show
 */
function pillSwitcher(pillId, hideId, showId) {
    var parentPill = $(event.target).parent().attr('id');
    $('#' + parentPill).addClass('active');
    $('#' + pillId).removeClass('active');
    $('#' + hideId).hide();
    $('#' + showId).show();
}