var API = new APISchemas();

$(document).ready(function(){
    $('.modal').modal();
});

loadOrders();

function loadOrders(){
    $("#orderContent").empty();
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            fetch(API.root + "orders/")
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    // Data is'nt empty
                    data.forEach((doc) => {
                        appendOrder(doc);
                    });
                } else {
                    
                }
            }).catch(err => console.log(err));
        } else {
            window.location = "?view=login";
        }
    });
}

function appendOrder(doc){
    $("#orderContent").append(
        '<tr>'
            +'<td>'+doc.order_id+'</td>'
            +'<td>'+doc.paypal_order_id+'</td>'
            +'<td>$'+doc.paypal_amount+'.00</td>'
            +'<td>'+doc.paypal_currency+'</td>'
            +'<td>'+doc.creation_date+'</td>'
            +'<td><a class="waves-effect waves-light btn pink" onclick="viewProducts('+ "'" + doc.order_id + "'," + "'" + doc.paypal_amount + "'" + ')">Ver Productos</a></td>'
        +'</tr>'
    );
}

function viewProducts(order_id, amount){
    $("#orderNo").text("Orden: #" + order_id);
    $("#orderTotal").text("Total: $" + amount + ".00");

    $("#productsContent").empty();
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            fetch(API.root + "kart/order/" + order_id)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    // Data is'nt empty
                    data.forEach((doc) => {
                        appendProducts(doc);
                    });
                } else {
                    
                }
            }).catch(err => console.log(err));
        } else {
            window.location = "?view=login";
        }
    });

    $("#modalProductsOfOrder").modal('open');
}

function appendProducts(doc){
    $("#productsContent").append(
        '<tr>'
            +'<td><img src="'+doc.image+'" height="30" width="50"/></td>'
            +'<td>'+doc.quantity+'</td>'
            +'<td>'+doc.name+'</td>'
            +'<td>$'+doc.now_price+'.00</td>'
        +'</tr>'
    );
}