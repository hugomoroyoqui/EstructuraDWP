$("#logout").click(function(){
    auth.signOut().then(() => {
        window.location = "?view=login";
    }).catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);
    });
});


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        $("#userEmail").text(user.email);
    } else {
        window.location = "?view=login";
    }
});