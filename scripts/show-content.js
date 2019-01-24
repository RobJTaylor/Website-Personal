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
    var textElement = document.getElementById("headerText");

    switch (id) {
        case "about":
            textElement.innerHTML = "Hi, I'm Rob Taylor";
            break;
        case "skills":
            textElement.innerHTML = "My Skills";
            changeSkill();
            break;
        case "industry":
            textElement.innerHTML = "Industry Experience";
            break;
        case "projects":
            textElement.innerHTML = "Projects";
            break;
        case "contact":
            textElement.innerHTML = "Contact Me";
            break;
    }
}