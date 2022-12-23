let xicon = document.getElementById("xicon")
let oicon = document.getElementById("oicon")

function X_icon(){
    xicon.className = "w-[198px] h-[54px] rounded-[10px] cursor-pointer flex justify-center items-center bg-Silver"
    document.getElementById("partX1").className = "w-2.5 h-[42px] bg-DarkNavy -rotate-45 absolute rounded-[5px]"
    document.getElementById("partX2").className = "w-2.5 h-[42px] bg-DarkNavy rotate-45 absolute rounded-[5px]"

    oicon.className = "w-[198px] h-[54px] rounded-[10px] cursor-pointer flex justify-center items-center hover:bg-SemiDarkNavy"
    oicon.children[0].className = "w-8 h-8 rounded-[50%] flex justify-center items-center bg-Silver"
    oicon.children[0].children[0].className = "w-3 h-3 rounded-[50%] bg-DarkNavy"

}
function O_icon(){
    xicon.className = "w-[198px] h-[54px] rounded-[10px] cursor-pointer flex justify-center items-center hover:bg-SemiDarkNavy"
    document.getElementById("partX1").className = "w-2.5 h-[42px] bg-Silver -rotate-45 absolute rounded-[5px]"
    document.getElementById("partX2").className = "w-2.5 h-[42px] bg-Silver rotate-45 absolute rounded-[5px]"

    oicon.className = "w-[198px] h-[54px] rounded-[10px] cursor-pointer flex justify-center items-center bg-Silver"
    oicon.children[0].className = "w-8 h-8 rounded-[50%] flex justify-center items-center bg-DarkNavy"
    oicon.children[0].children[0].className = "w-3 h-3 rounded-[50%] bg-Silver"
}
console.log(oicon.children[0].children[0])