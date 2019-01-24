var skills = ['Java', 'C#', 'JavaScript', 'PHP', 'HTML', 'CSS', 'Python'];
var count = 0;

function changeSkill() {
    setInterval(updateText, 3000);

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