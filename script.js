//! ------ Heart Like Feature -------

function handleheartlike(){
var allcard = document.querySelectorAll(".card");

allcard.forEach(function (card) {

    var icon = card.querySelector("i");
  card.addEventListener("dblclick", function () {
    var itag = document.createElement("i");
    itag.setAttribute("class", "ri-heart-fill middle");
    itag.style.position = "absolute";
    itag.style.top = "50%";
    itag.style.left = "50%";
    itag.style.transform = "translate(-50%,-50%) scale(0)";
    itag.style.fontSize = "40px";
    itag.style.opacity = "1";
    itag.style.transition = "all ease 0.5s";
    itag.style.color = "red";

    card.appendChild(itag);

    setTimeout(function () {
      itag.style.transform = "translate(-50%,-50%) scale(1)";
    }, 10);

    setTimeout(function () {
      itag.remove();
    }, 1000);

    
    if (icon) {
      icon.style.color = "red";
    }

    
  });

  icon.addEventListener("click", function () {
    if (icon.style.color === "rgba(90, 87, 87, 0.698)") {
      icon.style.color = "red";
    } else {
      icon.style.color = "rgba(90, 87, 87, 0.698)";
    }
  });
});


}

// handleheartlike();


//! ------Live Time------

function updateTime()
{
    const timeelem = document.querySelector("#time");
      const now = new Date();

      console.log(now);
      let hour = now.getHours().toString().padStart(2, "0");
      let min = now.getMinutes().toString().padStart(2, "0");
      let sec = now.getSeconds().toString().padStart(2, "0");

      timeelem.innerHTML = `${hour}:${min}:${sec}`;
}

function liveTime()
{
    updateTime();
    setInterval(updateTime,1000);
}

// liveTime();




