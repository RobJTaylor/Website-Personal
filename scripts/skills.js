var skills = ['Java', 'C#', 'JavaScript', 'PHP', 'HTML', 'CSS', 'Python'];
var count = 0;
var animated = 0;

function changeSkill() {
    setInterval(updateText, 3000);

    if (animated == 0) {
        animateBars();
    }
}

function updateText() {
    $("#mainSkill").fadeOut('fast', function () {
        $("#mainSkill").html("<mark>" + skills[count] + "</mark>");
        $("#mainSkill").fadeIn('fast');
    });

    count++;

    if (count == skills.length) {
        count = 0;
    }
}

function animateBars() {
    $("#androidDevelopment").animate({
        width: "75%"
    }, 1500)

    $("#webDevelopment").animate({
        width: "80%"
    }, 1500)

    $("#versionControl").animate({
        width: "90%"
    }, 1500)

    $("#developmentMethodologies").animate({
        width: "90%"
    }, 1500)

    animated = 1;
}