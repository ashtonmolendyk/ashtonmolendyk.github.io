const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//for the tabs
function autoShop(page) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(page).style.display = "block";
}

ctx.fillStyle = "#872341"; // Red color
ctx.fillRect(50, 100, 300, 50);

// car roof
ctx.fillStyle = "#872341"; // Red color
ctx.fillRect(100, 50, 200, 50);

// wheels
ctx.beginPath();
ctx.arc(120, 150, 20, 0, 2 * Math.PI);
ctx.arc(280, 150, 20, 0, 2 * Math.PI);
ctx.fillStyle = "#FFFFFF"; // Black color
ctx.fill();
ctx.fillStyle = "#fff"; // White color
ctx.fillRect(120, 60, 35, 35);

ctx.fillStyle = "#BE3144"; // Red color
ctx.fillRect(400, 100, 300, 50);



// car roof
ctx.fillStyle = "#BE3144"; // Red color
ctx.fillRect(450, 50, 200, 50);

// wheels
ctx.beginPath();
ctx.arc(470, 150, 20, 0, 2 * Math.PI);
ctx.arc(625, 150, 20, 0, 2 * Math.PI);
ctx.fillStyle = "#FFFFFF"; //
ctx.fill();

ctx.fillStyle = "#fff"; // White color
ctx.fillRect(470, 60, 35, 35);



ctx.fillStyle = "#872341"; // Red color
ctx.fillRect(50, 100, 300, 50);

// ar roof
ctx.fillStyle = "#872341"; // Red color
ctx.fillRect(100, 50, 200, 50);

// wheels
ctx.beginPath();
ctx.arc(120, 150, 20, 0, 2 * Math.PI);
ctx.arc(280, 150, 20, 0, 2 * Math.PI);
ctx.fillStyle = "#FFFFFF"; // Black color
ctx.fill();
ctx.fillStyle = "#fff"; // White color
ctx.fillRect(120, 60, 35, 35);



ctx.fillStyle = "#F05941"; // Red color
ctx.fillRect(750, 100, 300, 50);

// car roof
ctx.fillStyle = "#F05941"; // Red color
ctx.fillRect(800, 50, 200, 50);

// wheels
ctx.beginPath();
ctx.arc(820, 150, 20, 0, 2 * Math.PI);
ctx.arc(980, 150, 20, 0, 2 * Math.PI);
ctx.fillStyle = "#FFFFFF"; //
ctx.fill();

//window 
ctx.fillStyle = "#fff"; // White color
ctx.fillRect(820, 60, 35, 35);

// spin repair slide
function spinImage() {
            var image = document.getElementById("spinImage");
            image.style.transform = "rotate(360deg)";
        }
