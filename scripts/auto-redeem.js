
const claimButton = document.querySelector(".claimable-bonus__icon");

if(document.querySelector(".claimable-bonus__icon")){
  console.log("Points claimed!");
  claimButton.click();
}else{
  console.log("No points to claim.");
}


