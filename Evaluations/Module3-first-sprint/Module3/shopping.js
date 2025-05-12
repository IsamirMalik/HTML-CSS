const cartItems = [
  { name: "Shoes", category: "Footwear", price: 4999, discount: 20 },
  { name: "T-shirt", category: "Apparel", price: 1999, discount: 35 },
  { name: "Bag", category: "Accessories", price: 2499, discount: 40 },
  { name: "Socks", category: "Apparel", price: 499, discount: 10 }
];

let discountedPrice = cartItems.map((ele)=>{
    ele.discountedPrice = ( ele.price/100 * (100 - ele.discount)).toFixed(2);
    return (ele);
})


filteredItems =  discountedPrice.filter((ele)=>{
    if(ele.discount >= 30)
    console.log({name : ele.name , discountedPrice : ele.discountedPrice});

})


totalDiscountedValue = cartItems.reduce((acc,curr)=>{
  if ( curr.discount >=30) acc+= +(curr.discountedPrice);
  return acc;
},0)

console.log(`totalDiscountedValue :  ${totalDiscountedValue}`)
