let shop = document.getElementById("shop");

let shopItemsData = [
  {
    id: "okonomo",
    name: "Kemeja",
    price: 90,
    desc: "Lorem ttt, dolor sit amet consectetur adipisicing.",
    img: "img/img-2.jpg",
  },
  {
    id: "aerterytte",
    name: "Jas Hitam",
    price: 300,
    desc: "Lorem fafa, dolor sit amet consectetur adipisicing.",
    img: "img/img-4.jpg",
  },
  {
    id: "asdsdasd",
    name: "Dasi",
    price: 20,
    desc: "Lorem adsda, dolor sit amet consectetur adipisicing.",
    img: "img/img-5.png",
  },
  {
    id: "nmbmnvcm",
    name: "Sepatu",
    price: 150,
    desc: "Lorem jskdjs, dolor sit amet consectetur adipisicing.",
    img: "img/img-6.png",
  },
  {
    id: "fsdfsdfs",
    name: "Sepatu",
    price: 90,
    desc: "Lorem ttt, dolor sit amet consectetur adipisicing.",
    img: "img/img-12.png",
  },
  {
    id: "sfsdfsd",
    name: "Topi",
    price: 300,
    desc: "Lorem fafa, dolor sit amet consectetur adipisicing.",
    img: "img/img-11.png",
  },
  {
    id: "fsdfsdfsdf",
    name: "Jeans",
    price: 90,
    desc: "Lorem ttt, dolor sit amet consectetur adipisicing.",
    img: "img/img-10.png",
  },
  {
    id: "djaosdjsd",
    name: "Jas Hitam",
    price: 300,
    desc: "Lorem fafa, dolor sit amet consectetur adipisicing.",
    img: "img/img-7.png",
  },
  {
    id: "weqweweq",
    name: "Kemeja",
    price: 90,
    desc: "Lorem ttt, dolor sit amet consectetur adipisicing.",
    img: "img/img-2.jpg",
  },
  {
    id: "djaosdjsd",
    name: "Jas Hitam",
    price: 300,
    desc: "Lorem fafa, dolor sit amet consectetur adipisicing.",
    img: "img/img-7.png",
  },
];

let basket = [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      return `
    <div id=product-id-${id} class="item">
      <img width="220" src="${img}" alt="">
      <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-qantity">
          <h2>$ ${price}</h2>
          <div class="buttons">
            <i onclick="decrement(${id})" class="bi bi-dash-circle"></i>
            <div id=${id} class="quantity">0</div>
            <i onclick="increment(${id})" class="bi bi-plus-circle"></i>
          </div>
        </div>
      </div>
    </div>
    `;
    })
    .join(""));
};

generateShop();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  // save data in localstorage
  localStorage.setItem("simpen", JSON.stringify(basket));

  // console.log(basket);
  update(selectedItem.id);
};

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  // save data in localstorage
  localStorage.setItem("simpen", JSON.stringify(basket));

  // console.log(basket);
  update(selectedItem.id);
};
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
