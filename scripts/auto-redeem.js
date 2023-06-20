

setInterval(function(){ 
  const claimButton = document.querySelector(".claimable-bonus__icon");

  if(claimButton !== null){
    console.log("Points claimed!");
    claimButton.click();
  }else{
    console.log("No points to claim.");
  }
}, 1000); // every 10 seconds


const streamerName = document.querySelector(".tw-title").innerText;
if(streamerName !== undefined){
  console.log("Streamer name: " + streamerName);
}else{
  console.log("Streamer name not found.");
}
