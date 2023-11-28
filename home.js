const instbutton = document.getElementById("inst-btn");

instbutton.onclick = () => {
  location.href = "./instructions.html";
};

const srtbutton = document.getElementById("start-btn");
srtbutton.onclick = () => {
  location.href = "./select.html";
};

//Background music

let bgSound = new Audio('./assets/bgmusic.mp3');
bgSound.play();
bgSound.loop=true;

//nickname

let inputUsername=document.getElementById("input-username").value;

localStorage.setItem("nickname",inputUsername);
