function getCaptchaResponse() {
    var response = grecaptcha.getResponse();

    if(response.length == 0) {
        $("#g-recaptcha-error").show(0);
    } else {
        alert("Continuar con el envio");
        var name = $("#first_name").val();
        window.location = "?view=practica2&name=" + name;
    }
}

function verifyCaptcha() {
    $("#g-recaptcha-error").hide(0);
}

$("#submitForm").click(function() {
    getCaptchaResponse();
});
  