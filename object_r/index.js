function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [{
    title: 'ハリーポッター',
    price: 1000
  },
  {
    title: 'JavaScript入門',
    price: 1500
  }
];

const bookShop = createBookShop(inventory);


bookShop.inventoryValue();

bookShop.priceForTitle('ハリーポッター');




function saveFile(url, data) {
  $.ajax({
    method: 'POST',
    url,
    data
  });
}


const url = 'http://fileupload.com';
const data = {
  color: 'red'
};

saveFile(url, data);
