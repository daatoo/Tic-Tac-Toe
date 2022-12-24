let xicon = document.getElementById("xicon")
let oicon = document.getElementById("oicon")
let currentchoice = "xicon"
document.querySelectorAll('button').forEach(occurence => {
    let id = occurence.getAttribute('id');
    occurence.addEventListener('click', function() {
      if(id == "xicon"){
        xicon.className = "w-[198px] h-[54px] rounded-[10px] cursor-pointer flex justify-center items-center bg-Silver"
        document.getElementById("partX1").className = "w-2.5 h-[42px] bg-DarkNavy -rotate-45 absolute rounded-[5px]"
        document.getElementById("partX2").className = "w-2.5 h-[42px] bg-DarkNavy rotate-45 absolute rounded-[5px]"
    
        oicon.className = "w-[198px] h-[54px] rounded-[10px] cursor-pointer flex justify-center items-center hover:bg-SemiDarkNavy"
        oicon.children[0].className = "w-8 h-8 rounded-[50%] flex justify-center items-center bg-Silver"
        oicon.children[0].children[0].className = "w-3 h-3 rounded-[50%] bg-DarkNavy"
        currentchoice = "xicon"
      }else if(id == "oicon"){
        xicon.className = "w-[198px] h-[54px] rounded-[10px] cursor-pointer flex justify-center items-center hover:bg-SemiDarkNavy"
        document.getElementById("partX1").className = "w-2.5 h-[42px] bg-Silver -rotate-45 absolute rounded-[5px]"
        document.getElementById("partX2").className = "w-2.5 h-[42px] bg-Silver rotate-45 absolute rounded-[5px]"
    
        oicon.className = "w-[198px] h-[54px] rounded-[10px] cursor-pointer flex justify-center items-center bg-Silver"
        oicon.children[0].className = "w-8 h-8 rounded-[50%] flex justify-center items-center bg-DarkNavy"
        oicon.children[0].children[0].className = "w-3 h-3 rounded-[50%] bg-Silver"
        currentchoice = "oicon"
      }
    } );
});

let Btn1 = document.getElementById("Btn1")
let Btn2 = document.getElementById("Btn2")
let startmenu = document.getElementById("startmenu")
let gamediv = document.getElementById("gamediv")
let WhoAreYou = document.getElementById("WhichAreYou")
let WhichIsPc = document.getElementById("WhichIsPc")

Btn1.addEventListener("click", function(){
  startmenu.classList.add("hidden")
  startmenu.classList.remove("flex")
  gamediv.classList.remove("hidden")
  gamediv.classList.add("flex")
  if(currentchoice == "xicon"){
    WhoAreYou.innerText = "X (YOU)"
    WhichIsPc.innerText = "O (CPU)"
  }else if(currentchoice == "oicon"){
    WhichIsPc.innerHTML = "X (CPU)"
    WhoAreYou.innerHTML = "O (YOU)"
  }
})
