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
      let quantVal;
      let notInArray = true;
      this.products.map( product => {
        if (product.name === this.productName) {
          quantVal = parseInt(product.quant) + parseInt(this.productQuant);
          product.quant = quantVal;
          notInArray = !notInArray;
        }
      });
      if (notInArray)
        this.products.push({
          name: this.productName,
          quant: this.productQuant
        });
      this.clearInput();
    },
    deleteItem: function (index) {
      this.products.splice(this.products.indexOf(index, 1));
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
          <button id="addBtn" @click="addItem">Add new product</button>
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
            <span class="action">Action</span>
          </div>
        </div>
        <div class="body">
          <div class="item" v-for="(product, index) in products">
            <span>{{ product.name }}</span>
            <span>{{ product.quant }}</span>
            <div class="action">
              <button @click="deleteItem(index)">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
});