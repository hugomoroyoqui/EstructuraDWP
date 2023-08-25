var API = new APISchemas();
loadProduct();
loadInKart();

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
                        + '<div class="card white"><div class="card-content black-text">'
                            + '<div class="center"><img src="'+doc.image+'" height="150" width="200" /></div>'
                            + '<h6>' + doc.name + '</h6>'
                            + '<h5 class="right">$' + doc.price + '.00</h5></br></br>' 
                        + '</div>'
                        + '<div class="card-action">'
                            + '<b class="black-text">Stock: '+doc.stock+'</b>'
                            + '<a class="btn right purple darken-4" style="margin-top:-5px;" onclick="addToKart('+ "'" + doc.product_id + "'," + "'" + doc.price + "'" + ')">Agregar a carrito</a>'
                        + '</div></div>'
                    +'</div>');
            });
        } else {
            // No data
        }
    }).catch(err => console.log(err));
}


function addToKart(product_id, price){
    firebase.auth().onAuthStateChanged((user) => {
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
                M.toast({html: "Producto Agregado Exitosamente."});
                loadInKart();
            }).catch(err => console.log(err));
        } else {
            window.location = "?view=login";
        }
    });
}

function loadInKart(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            fetch(API.root + "kart/" + user.uid)
            .then(response => response.json())
            .then(data => {
                $("#inKart").text(data.length);
            }).catch(err => console.log(err));
        } else {
            window.location = "?view=login";
        }
    });
}

