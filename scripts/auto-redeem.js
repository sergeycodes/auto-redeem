let streamerName = window.location.href.split("/")[3];



if(streamerName !== null){
  
  console.log("Streamer name: " + streamerName);
}else{
  console.log("Streamer name not found.");
}


setInterval(function(){ 
  const claimButton = document.querySelector(".claimable-bonus__icon");

  if(claimButton !== null){
    console.log("Points claimed!");
    claimButton.click();
  }else{
    console.log("No points to claim.");
  }
}, 1000); // every 10 seconds


