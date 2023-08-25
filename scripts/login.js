var api = new APISchemas();
var firebaseCol = new FirebaseCollections();

$("#btnLogin").click(function(){

    var email = $("#email").val(), 
    password = $("#password").val();

    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        // var user = userCredential.user;
        window.location = "?view=productos";
    })
    .catch((error) => {
        //var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    });

});