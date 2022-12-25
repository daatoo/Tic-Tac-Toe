let xicon = document.getElementById("xicon")
let oicon = document.getElementById("oicon")
let currentchoice = "xicon"
document.querySelectorAll('button').forEach(occurence => {
  let id = occurence.getAttribute('id');
  occurence.addEventListener('click', function () {
    if (id == "xicon") {
      xicon.className = "w-[198px] h-[54px] rounded-[10px] cursor-pointer flex justify-center items-center bg-Silver"
      document.getElementById("partX1").className = "w-2.5 h-[42px] bg-DarkNavy -rotate-45 absolute rounded-[5px]"
      document.getElementById("partX2").className = "w-2.5 h-[42px] bg-DarkNavy rotate-45 absolute rounded-[5px]"

      oicon.className = "w-[198px] h-[54px] rounded-[10px] cursor-pointer flex justify-center items-center hover:bg-SemiDarkNavy"
      oicon.children[0].className = "w-8 h-8 rounded-[50%] flex justify-center items-center bg-Silver"
      oicon.children[0].children[0].className = "w-3 h-3 rounded-[50%] bg-DarkNavy"
      currentchoice = "xicon"
    } else if (id == "oicon") {
      xicon.className = "w-[198px] h-[54px] rounded-[10px] cursor-pointer flex justify-center items-center hover:bg-SemiDarkNavy"
      document.getElementById("partX1").className = "w-2.5 h-[42px] bg-Silver -rotate-45 absolute rounded-[5px]"
      document.getElementById("partX2").className = "w-2.5 h-[42px] bg-Silver rotate-45 absolute rounded-[5px]"

      oicon.className = "w-[198px] h-[54px] rounded-[10px] cursor-pointer flex justify-center items-center bg-Silver"
      oicon.children[0].className = "w-8 h-8 rounded-[50%] flex justify-center items-center bg-DarkNavy"
      oicon.children[0].children[0].className = "w-3 h-3 rounded-[50%] bg-Silver"
      currentchoice = "oicon"
    }
  });
});

let Btn1 = document.getElementById("Btn1")
let Btn2 = document.getElementById("Btn2")
let startmenu = document.getElementById("startmenu")
let gamediv = document.getElementById("gamediv")
let WhoAreYou = document.getElementById("WhichAreYou")
let WhichIsPc = document.getElementById("WhichIsPc")

Btn1.addEventListener("click", function () {
  startmenu.classList.add("hidden")
  startmenu.classList.remove("flex")
  gamediv.classList.remove("hidden")
  gamediv.classList.add("flex")
  if (currentchoice == "xicon") {
    WhoAreYou.innerText = "X (YOU)"
    WhichIsPc.innerText = "O (CPU)"
  } else if (currentchoice == "oicon") {
    WhichIsPc.innerHTML = "X (CPU)"
    WhoAreYou.innerHTML = "O (YOU)"
  }
})

// Create Board With 2D Array and Add Html Divs
boardWithDivs = [];
let b = 0
for (i = 0; i < 3; ++i) {
  boardWithDivs[i] = a = [];
  for (j = 0; j < 3; ++j) {
    boardWithDivs[i][j] = document.getElementById(b)
    b = b + 1
  }
}

let board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
let Xwins = document.getElementById("Xwins")
let Owins = document.getElementById("Owins")
let Xscore = document.getElementById("Xscore")
let Oscore = document.getElementById("Oscore")
// Check which was clicked
let Allsquare = document.getElementById("Allsquare")
Allsquare.addEventListener('click', function (event) {

  const clickedElement = event.target;

  if (clickedElement.matches(".square")) {
    // Get the row and column of the clicked square
    let k = 0
    for (ii = 0; ii < 3; ++ii) {
      boardWithDivs[i] = a = [];
      for (jj = 0; jj < 3; ++jj) {
        if (boardWithDivs[ii][jj].id === clickedElement.id && board[ii][jj] == 0) {
          boardWithDivs[ii][jj].children[0].className = "flex"
          board[ii][jj] = 1
          console.log( boardWithDivs[ii][jj].children[0])
        }
      }
    }

    // check if x wins
        // Check rows
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][2] === 1) {
        Xwins.classList.remove("hidden")
        Xwins.classList.add("flex")  
        Xscore.innerText++
        return board[i][0];
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[2][i] === 1) {
        Xwins.classList.remove("hidden")
        Xwins.classList.add("flex")  
        Xscore.innerText++
        return board[0][i];
      }
    }

    // Check diagonals
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[2][2] === 1) {
      Xwins.classList.remove("hidden")
      Xwins.classList.add("flex")  
      Xscore.innerText++
      return board[0][0];
    }
    if (board[2][0] === board[1][1] && board[1][1] === board[0][2] && board[0][2] === 1) {
      Xwins.classList.remove("hidden")
      Xwins.classList.add("flex") 
      Xscore.innerText++ 
      return board[2][0];
    }

    // end check for x


    freeDivs = []
    for(i = 0; i < 3; i++){
      for(a = 0; a < 3; a++){
        if(board[i][a] == 0){
          freeDivs.push(boardWithDivs[i][a])
        }
      }
    }
    const random = Math.floor(Math.random() * freeDivs.length);
    freeDivs[random].children[1].className = "flex"
    for(i = 0; i<3; i++){
      for(a = 0; a<3; a++){
        if(boardWithDivs[i][a].id == freeDivs[random].id){
          board[i][a] = 2
        }
      }
    }

        // check if o wins
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][2] === 2) {
        Owins.classList.remove("hidden")
        Owins.classList.add("flex")
        return board[i][0];
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[2][i] === 2) {
        Owins.classList.remove("hidden")
        Owins.classList.add("flex")
        return board[0][i];
      }
    }

    // Check diagonals
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[2][2] === 2) {
      Owins.classList.remove("hidden")
      Owins.classList.add("flex")      
      return board[0][0];
    }
    if (board[2][0] === board[1][1] && board[1][1] === board[0][2] && board[0][2] === 2) {
      Owins.classList.remove("hidden")
      Owins.classList.add("flex")      
      return board[2][0];
    }
    // end check if o wins
    console.log(freeDivs, freeDivs[random])


  }
})
console.log(boardWithDivs[1][2])
// console.log(board)

