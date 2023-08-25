<div class="row">
    <div class="col s12">
      <div class="card white">
        <div class="card-content black-text">
          <span class="card-title">Productos en carrito</span>
          <table>
            <thead>
                <tr>
                    <th style="width:10%;">Producto</th>
                    <th style="width:10%;">Cantidad</th>
                    <th style="width:50%;">Nombre</th>
                    <th style="width:10%;">Precio</th>
                    <th style="width:20%;">Opciones</th>
                </tr>
            </thead>

            <tbody id="kartContent">
                
            </tbody>
        </table>
        </div>
        <div class="card-action">
            </br>
            <div class="col s6">
                <div id="paypal-button-container"></div>
            </div>
            <div class="col s6">
                <h5 class="right" id="totalKart">Total: $0.00</h5>
            </div>
            </br></br></br>
        </div>
      </div>
    </div>
</div>

<script src="https://www.paypal.com/sdk/js?client-id=AUUWd5Mp7jiw1YBLtefJgwlfPRhzcTYO0i03n7d0SHT4gN8QizjVIEJYQ7QSF_GFO1ucR4QCfAP27s1O&enable-funding=venmo&currency=MXN" data-sdk-integration-source="button-factory"></script>
<script type="text/javascript" src="./scripts/carrito.js?v1.0.0"></script>

