function showContent(id) {
    elementIds = ['about', 'skills', 'industry', 'projects', 'contact'];

    for (var elementId = 0; elementId < elementIds.length; elementId++) {
        var element = document.getElementById(elementIds[elementId]);
        element.style.display = 'none';
        element.style.visibility = 'hidden';
    }

    var element = document.getElementById(id);
    element.classList.add("a:active");
    element.style.display = 'block';
    element.style.visibility = 'visible';

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