var api = new APISchemas();
var firebaseCol = new FirebaseCollections();

$("#btnSignUp").click(function(){

    var email = $("#semail").val(), 
    password = $("#spassword").val();

    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        //var user = userCredential.user;
        window.location = "?view=productos";
    })
    .catch((error) => {
        //var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    });

});