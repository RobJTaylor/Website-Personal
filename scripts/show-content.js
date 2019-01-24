var currentContent = "#about";

function showContent(id) {
    elementIds = ['about', 'skills', 'industry', 'projects', 'contact'];

    /*for (var elementId = 0; elementId < elementIds.length; elementId++) {
        $("." + elementIds[elementId]).fadeOut();
        element.style.display = 'none';
        element.style.visibility = 'hidden';
    }*/

    $(currentContent).fadeOut('fast', function () {
        var newContent = $("#" + id);
        newContent.addClass("a:active");
        newContent.show();
        $("#" + id).fadeIn('fast');
    });

    currentContent = "#" + id;
    var textElement = $("#headerText");

    switch (id) {
        case "about":
            $("#headerText").html("Hi, I'm Rob Taylor");
            break;
        case "skills":
            $("#headerText").html("My Skills");
            changeSkill();
            break;
        case "industry":
            $("#headerText").html("Industry Experience");
            break;
        case "projects":
            $("#headerText").html("Projects");
            break;
        case "contact":
            $("#headerText").html("Contact Me");
            break;
    }
}