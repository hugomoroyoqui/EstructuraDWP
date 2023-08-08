var api = new APISchemas();
var firebaseCol = new FirebaseCollections();

$(document).ready(function(){
    // Inicializacion
    $('select').formSelect();
    loadPositions();

    $("#content").find('h5').eq(2).text("Hola mundo").css('font-size', 
    parseFloat($("#content").find('h5').eq(2).css('font-size').split('px')[0])*1.75);

});

$("#btnAction").click(function(){
    var option = $("#selectOption").val();
    var position = parseInt($("#position").val());
    var textInput = $("#textInput").val();
    var textColor = $("#selectColor").val();

    if(option == "1"){
        // Agregar
        $("#content").append("<h5>"+textInput+"</h5>");
        loadPositions();
    } else if(option == "2"){
        // Editar
        $("#content").find('h5').eq(position).text(textInput);
        loadPositions();
    } else if(option == "4"){
        $("#content").find('h5').eq(position).css("color", textColor);
    } else {
        // Eliminar
        $("#content").find('h5').eq(position).remove();
        loadPositions();
    }

    clearInputs();
});

function clearInputs(){
    $("#position").val(0);
    $("#textInput").val("");
}

function loadPositions(){
    $("#position").empty();
    var longitud = $("#content").find('h5').length;

    for(var i = 0; i <= longitud -1; i++){
        $("#position").append('<option value="'+i+'">'
        +$("#content").find('h5').eq(i).text()+'</option>');
    }
    $('select').formSelect();  
}

$("#selectOption").change(function(){
    var option = $("#selectOption").val();

    if(option == "1"){
        $("#divPosition").hide(0);
        $("#divText").show(0);
        $("#divColor").hide(0);
    } else if (option == "2"){
        $("#divPosition").show(0);
        $("#divText").show(0);
        $("#divColor").hide(0);
    } else if (option == "3"){
        $("#divPosition").show(0);
        $("#divText").hide(0);
        $("#divColor").hide(0);
    } else {
        $("#divPosition").show(0);
        $("#divText").hide(0);
        $("#divColor").show(0);
    }
});

