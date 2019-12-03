var currentContent = "#about";

function showContent(id) {
    elementIds = ['about', 'skills', 'industry', 'projects', 'contact'];

    if (id == "websites" || id == "software") {
        switch (id) {
            case "websites":
                $('#software-button').removeClass('active');
                $('#websites-button').addClass('active');
                $('#software').hide();
                $('#websites').show();
                break;
            case "software":
                $('#websites-button').removeClass('active');
                $('#software-button').addClass('active');
                $('#websites').hide();
                $('#software').show();
                break;
        }
    } else {
        console.log("here");
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
}