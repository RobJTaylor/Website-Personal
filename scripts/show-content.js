var currentContent = "#about";
var lastLink = "about-link";

function showContent(id) {    

    $("#" + lastLink).removeClass('nav-active');
    $(event.target).addClass('nav-active');
    lastLink = $(event.target).attr('id');
    console.log(lastLink);

    $(currentContent).fadeOut('fast', function () {
        var newContent = $("#" + id);
        newContent.addClass("a:active");
        newContent.show();
        $("#" + id).fadeIn('fast');
    });

    currentContent = "#" + id;
    switch (id) {
        case "about":
            $("#headerText").fadeOut('fast', function () {
                $("#headerText").html("Hi, I'm Rob Taylor");
                $("#headerText").fadeIn('fast');
            });
            break;
        case "skills":
            $("#headerText").fadeOut('fast', function () {
                $("#headerText").html("My Skills");
                $("#headerText").fadeIn('fast');
            });
            changeSkill();
            break;
        case "industry":
            $("#headerText").fadeOut('fast', function () {
                $("#headerText").html("Industry Experience");
                $("#headerText").fadeIn('fast');
            });
            break;
        case "projects":
            $("#headerText").fadeOut('fast', function () {
                $("#headerText").html("Projects");
                $("#headerText").fadeIn('fast');
            });
            break;
        case "contact":
            $("#headerText").fadeOut('fast', function () {
                $("#headerText").html("Contact Me");
                $("#headerText").fadeIn('fast');
            });
            break;
    }
}

function pillSwitcher(pillId, hideId, showId) {
    var parentPill = $(event.target).parent().attr('id');
    $('#' + parentPill).addClass('active');
    $('#' + pillId).removeClass('active');
    $('#' + hideId).hide();
    $('#' + showId).show();
}