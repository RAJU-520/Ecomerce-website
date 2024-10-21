const wrapper = document.querySelector(".sliderwrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products=[
  {
    id:1,
    title:"Air Force",
    price:119,
    colors: [
      {
        code:"blue",
        img:"./img/img/airforcem.png.png",
      },
      {
        color:"black",
        img:"./img/img/airforce.png",
      },
    ],
  },
  {
    id: 2,
    title:"Jordan",
    price:149,
    colors: [
      {
        code:"light blue",
        img: "./img/img/jordan1.png",
      },
      {
        code: "red",
        img: "./img/img/jordanm.png",
      },
    ],
  },
  {
    id:3,
    title:"Blazer",
    price:109,
    colors:[
      {
        code:"white",
        img:"./img/img/blazerm.png",
      },
      {
        code:"black",
        img:"./img/img/blazer2.png",
      },
    ],
  },
  {
    id:4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "white",
        img:"./img/img/crater.png",
      },
      {
        code:"pink",
        img:"./img/img/creater.png",
      },
    ],
  },
  {
    id:5,
    title:"Hippie",
    price:99,
    colors:[
      {
        code: "gray",
        img:"./img/img/hippie.png",
      },
      {
        code: "blue",
        img:"./img/img/hippie3.png"
      },
    ],
  },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
  item.addEventListener("click", () => {
      //change the current slide
    wrapper.style.transform = `translatex(${-100 * index}vw)`;

      //change the choosen product
    choosenProduct = products[index];
      // chane texts of currentProduct
    currentProductTitle.textContent=choosenProduct.title;
    currentProductPrice.textContent="$" + choosenProduct.price;
    currentProductImg.src=choosenProduct.colors[0].img
    //assign new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});


currentProductColors.forEach((color,index)=>{
  color.addEventListener("click", ()=>{
    currentProductImg.src=choosenProduct.colors[index].img
  });
});

currentProductSizes.forEach((size,index)=>{
  size.addEventListener("click",()=>{
    currentProductSizes.forEach((size)=>{
      size.style.backgroundColor="white";
      size.style.color="black";
    });
    size.style.backgroundColor="black";
    size.style.color="white";
  });
});

const productButton=document.querySelector(".productButton");
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");

productButton.addEventListener("click",()=>{
  payment.style.display="flex"
})

close.addEventListener("click",()=>{
  payment.style.display="none"
})

// script.js

// Function to filter the menu items based on search input
function filterMenuItems() {
  // Get the search input value
  const searchQuery = document.querySelector('.searchInput').value.toLowerCase();
  
  // Get all menu items
  const menuItems = document.querySelectorAll('.menuItem');
  const slider = document.querySelectorAll('.slider');

  // Loop through all menu items and hide or show based on search query
  menuItems.forEach(item => {
      // Get the text content of the item and convert it to lowercase
      const itemText = item.textContent.toLowerCase();
      
      // Check if the item text includes the search query
      if (itemText.includes(searchQuery)) {
          item.style.display = 'block'; // Show item if it matches
      } else {
          item.style.display = 'none'; // Hide item if it does not match
      }
  });
}

// Add event listener to the search input to call filterMenuItems on input
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.searchInput').addEventListener('input', filterMenuItems);
});


