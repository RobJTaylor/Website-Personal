var skills = ['Java', 'C#', 'JavaScript', 'PHP', 'HTML', 'CSS', 'Python'];
var count = 0;
var triggered = 0;

function changeSkill() {
    if (triggered == 0) {
        setInterval(updateText, 2000);
        animateBars();
        triggered = 1;
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
}