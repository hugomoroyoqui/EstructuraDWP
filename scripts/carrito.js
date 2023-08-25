var API = new APISchemas();
loadInKart();
loadProductsInKart();
var total = 0;

function loadProductsInKart(){
    $("#kartContent").empty();
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            fetch(API.root + "kart/user/" + user.uid)
            .then(response => response.json())
            .then(data => {
                total = 0;
                if (data.length > 0) {
                    // Data is'nt empty
                    data.forEach((doc) => {
                        total = total + doc.now_price;
                        $("#totalKart").text("Total: $" + total + ".00")
                        appendKart(doc);
                    });
                } else {
                    $("#totalKart").text("Total: $0.00")
                }
            }).catch(err => console.log(err));
        } else {
            window.location = "?view=login";
        }
    });
}

function appendKart(doc){
    $("#kartContent").append(
        '<tr>'
            +'<td><img src="'+doc.image+'" height="30" width="50"/></td>'
            +'<td>'+doc.quantity+'</td>'
            +'<td>'+doc.name+'</td>'
            +'<td>$'+doc.now_price+'.00</td>'
            +'<td><a class="waves-effect waves-light btn red" onclick="deleteToKart('+ "'" + doc.product_id + "'"+')">Eliminar</a></td>'
        +'</tr>'
    );
}

function deleteToKart(product_id){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            fetch(API.root + "kart/user/", {
                method: 'PUT',
                body: JSON.stringify({
                    product_id: product_id
            }),
            headers: {
                "Content-type": "application/json"
            }
            }).then(response => {
                M.toast({html: "Producto Eliminado Exitosamente."});
                loadInKart();
                loadProductsInKart();
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

function initPayPalButton() {
    paypal.Buttons({
      style: {
        shape: 'pill',
        color: 'gold',
        layout: 'horizontal',
        label: 'buynow',
        
      },

      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{"amount":{"currency_code":"MXN","value":total}}]
        });
      },

      onApprove: function(data, actions) {
        return actions.order.capture().then(function(orderData) {
          
          var paypal_order_id = orderData.id;
          var paypal_payer_id = orderData.payer.payer_id;
          var paypal_payer_email = orderData.payer.email_address;
          var paypal_country_code = orderData.payer.address.country_code;
          var paypal_amount = parseFloat(orderData.purchase_units[0].amount.value);
          var paypal_currency = orderData.purchase_units[0].amount.currency_code;
          
          doOrder(paypal_order_id, paypal_payer_id, paypal_payer_email, paypal_country_code, paypal_amount, paypal_currency);
          
        });
      },

      onError: function(err) {
        console.log(err);
      }
    }).render('#paypal-button-container');
  }

  initPayPalButton();

  function doOrder(paypal_order_id, payer_id, payer_email, country, amount, currency){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            fetch(API.root + "orders/", {
                method: 'POST',
                body: JSON.stringify({
                    user_id: user.uid, 
                    paypal_order_id: paypal_order_id, 
                    paypal_payer_id: payer_id, 
                    paypal_payer_email: payer_email, 
                    paypal_country: country, 
                    paypal_currency: currency, 
                    paypal_amount: amount
            }),
            headers: {
                "Content-type": "application/json"
            }
            }).then(function(res){ return res.json(); })
            .then(function(data){ 
                M.toast({html: "Orden enviada."});
                assignOrder(data.insertId);
             }).catch(err => console.log(err));
        } else {
            window.location = "?view=login";
        }
    });
  }

  function assignOrder(insertId){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            fetch(API.root + "kart/order/", {
                method: 'PUT',
                body: JSON.stringify({
                    order_id: insertId
            }),
            headers: {
                "Content-type": "application/json"
            }
            }).then(function(res){ return res.json(); })
            .then(function(data){ 
                loadInKart();
                loadProductsInKart();
             }).catch(err => console.log(err));
        } else {
            window.location = "?view=login";
        }
    });
  }