<div class="row">
    <div class="col s12">
      <div class="card white">
        <div class="card-content black-text">
          <span class="card-title">Ordenes</span>
          <table>
            <thead>
                <tr>
                    <th style="width:10%;">Orden ID</th>
                    <th style="width:20%;">Orden Paypal</th>
                    <th style="width:15%;">Total</th>
                    <th style="width:10%;">Moneda</th>
                    <th style="width:30%;">Fecha</th>
                    <th style="width:15%;">Productos</th>
                </tr>
            </thead>

            <tbody id="orderContent">
                
            </tbody>
        </table>
        </div>
      </div>
    </div>
</div>

<div id="modalProductsOfOrder" class="modal">
    <div class="modal-content">
        <div class="row">
            <div class="col s9 left">
                <h5 id="orderNo">Orden: </h5>
            </div>
        </div>
        

        <table>
            <thead>
                <tr>
                    <th style="width:20%;">Producto</th>
                    <th style="width:10%;">Cantidad</th>
                    <th style="width:60%;">Nombre</th>
                    <th style="width:10%;">Precio</th>
                </tr>
            </thead>

            <tbody id="productsContent">
                
            </tbody>
        </table>
        
    </div>
    <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-red btn-flat left">Close</a>
        <span class="right" id="orderTotal" style="margin-right: 55px;">Total: </span>
    </div>
</div>




<script type="text/javascript" src="./scripts/transacciones.js?v1.0.0"></script>