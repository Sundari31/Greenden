// Selecting Side Navbar, Menu

const sidenav = document.getElementById("sidenav")
const menuicon = document.getElementById("menuicon")
const closenav = document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.right="0"
}) 

closenav.addEventListener("click",function(){
     sidenav.style.right="-50%"
})

// Product Search Functionality

const productContainer = document.getElementById("productContainer")
const search = document.getElementById("search")
const productList = productContainer.querySelectorAll("div")

// console.log(productList)

  search.addEventListener("keyup",function(){
  var enertedValue = event.target.value.toUpperCase()

  for(count=0; count<productList.length; count=count+1)
  {

    const productname = productList[count].querySelector("h1").textContent

    if(productname.toUpperCase().indexOf(enertedValue)<0)
  {
    productList[count].style.display="none"
  }
  else{
    productList[count].style.display="block"
  }
  }
  })