var app = new Vue({
  el: '#app',
  data(){
    return {
      products: [],
      productName: '',
      productQuant: '',
    }
  },
  methods: {
    addItem: function () {
      this.products.push({
        name: this.productName,
        quant: this.productQuant
      });
      this.clearInput();
    },
    clearInput: function () {
    	this.productName = '';
    	this.productQuant = '';
    }
  },
  template: `
    <div class="container">
      <div id="parameters">
        <div>
          <input type="text" id="itemName" placeholder="Product" v-model="productName">
          <input type="number" id="itemQuant" placeholder="Quantity" v-model="productQuant">
        </div>
        <div>
          <button id="addBtn" v-on:click="addItem">Add new product</button>
        </div>
      </div>
      <div id="list-title">
        <span>List of Products</span>
      </div>
      <div id="table">
        <div class="header">
          <div class="h-item">
            <span>Product</span>
            <span>Quantity</span>
          </div>
        </div>
        <div class="body">
          <div class="item" v-for="product in products">
            <span>{{ product.name }}</span>
            <span>{{ product.quant }}</span>
          </div>
        </div>
      </div>
    </div>
  `
});