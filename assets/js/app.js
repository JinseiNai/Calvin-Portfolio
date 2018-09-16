$(document).ready(function () {
    $("#about-well, #project-well, #contact-well").hide();
    $("#about-well").show();

    $('.slider').slider();

    $("#nav-btn").on("click", function(event) {
        let target = event.target;
        console.log(target.text);
        hideAll();

        switch (target.text) {
            case "About":
            $("#about-well").slideDown(1000).show();
            break;

            case "Project":
            $("#project-well").slideDown(1000).show();
            break;

            case "Contact":
            $("#contact-well").slideDown(1000).show();
            break;

            default:
            $("#about-well").slideDown(1000).show();
        }
    });

    $("#submit").on("click", function() {
        $("#firstName, #lastName, #email, #message").val("");
        alert("Your message has been sent. Thank You!");
    })
});

function hideAll() {
    $("#about-well, #project-well, #contact-well").slideUp(1000).hide();
}