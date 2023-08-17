var API = new APISchemas();

function loadProduct(){
    // Peticion Fetch para GET
    fetch(API.root + "products")
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {
            // Data is'nt empty
            data.forEach((doc) => {
                // Cycle of data
                $("#productContent").append(
                    '<div class="col s4">'
                    + '<div class="card">' 
                    + '<img src="'+doc.image+'" height="100" width="100" />'
                    + '<h5>' + doc.name + '</h5>' 
                    + '<a class="btn" onclick="addToKart('
                    + "'" + doc.product_id + "'," + "'" + doc.price + "'" 
                    + ')">Agregar a carrito</a>' 
                    + '</div>'
                    +'</div>');
            });
        } else {
            // No data
        }
    }).catch(err => console.log(err));
}


function addToKart(product_id, price){
    var user = firebase.auth().currentUser;

    if (user) {
        fetch(API.root + "kart/user/", {
            method: 'POST',
            body: JSON.stringify({
                product_id: product_id,
                user_id: user.uid,
                quantity: 1,
                now_price: price
        }),
        headers: {
            "Content-type": "application/json"
        }
        }).then(response => {
            alert("Producto Agregado Exitosamente.");
        }).catch(err => console.log(err));
    } else {
      window.location = "?view=login";
    }  
}

loadProduct();