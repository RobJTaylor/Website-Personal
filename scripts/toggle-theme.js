var currentTheme;

/**
 * Toggle the website theme (light/dark)
 */
function toggleTheme() {

    if (!currentTheme) {
        currentTheme = queryTheme();
    }

    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";

    if (currentTheme == "dark") {
        link.href = "css/lightTheme.css";

        //Remove old stylesheet, set currentTheme
        $('link[rel=stylesheet][href~="css/darkTheme.css"]').remove();
        currentTheme = "light";

        //Change moon to outline
        $("#themeToggle").removeClass("fas");
        $("#themeToggle").addClass("far");
    } else {
        link.href = "css/darkTheme.css";

        //Remove old stylesheet, set currentTheme
        $('link[rel=stylesheet][href~="css/lightTheme.css"]').remove();
        currentTheme = "dark";

        //Change moon to filled
        $("#themeToggle").removeClass("far");
        $("#themeToggle").addClass("fas");
    }

    document.getElementsByTagName('HEAD')[0].appendChild(link);
}

/**
 * Attempt to get the browser theme from media query. Fallback to light theme.
 */
function queryTheme() {
    if ( matchMedia('(prefers-color-scheme: dark)').matches ) {
        return "dark";
    } else {
        return "light";
    }
}

/**
 * Update the moon icon based on current theme
 */
window.onload = function() {
    //Set the moon to an outline if we've loaded in light theme
    if (this.queryTheme() == "light") {
        $("#themeToggle").removeClass("fas");
        $("#themeToggle").addClass("far");
    }
}