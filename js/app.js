//*------------------------------- Constants -------------------------------*//
const hit = "red";
const miss = "white";
const shipMid = "grey";


//*------------------------------- Variables -------------------------------*//
let turn 

//*---------------------- Cached Element References ------------------------*//

//Message Elements
const title = document.querySelector('#title')
const player = document.querySelector('#player')
const prompt = document.querySelector('#prompt')


//img
const img = document.querySelector('#page-load-image')

//Ship Placement Buttons
const play = document.querySelector('#play')
const ready = document.querySelector('#ready')
const reset = document.querySelector('#reset')
const horizontal = document.querySelector('#horizontal')
const vertical = document.querySelector('#vertical')
const shipBoard = document.querySelector('.ship-board')
const shotBoard = document.querySelector('.shot-board')
const shipBankV = document.querySelector('#bank-box-v')
const shipBankH = document.querySelector('#bank-box-h')

//ship Divs
const pt = document.querySelectorAll('.pt')
const sub = document.querySelectorAll('.sub')
const cru = document.querySelectorAll('.cru')
const bat = document.querySelectorAll('.bat')
const car = document.querySelectorAll('.car')

//Board Divs
const shipSquares = document.querySelectorAll('.ship-board > div')
const g00 = document.querySelector('#g0-0')
const g01 = document.querySelector('#g0-1')
const g02 = document.querySelector('#g0-2')
const g03 = document.querySelector('#g0-3')
const g04 = document.querySelector('#g0-4')
const g05 = document.querySelector('#g0-5')
const g06 = document.querySelector('#g0-6')
const g07 = document.querySelector('#g0-7')
const g08 = document.querySelector('#g0-8')
const g09 = document.querySelector('#g0-9')

const g10 = document.querySelector('#g1-0')
const g11 = document.querySelector('#g1-1')
const g12 = document.querySelector('#g1-2')
const g13 = document.querySelector('#g1-3')
const g14 = document.querySelector('#g1-4')
const g15 = document.querySelector('#g1-5')
const g16 = document.querySelector('#g1-6')
const g17 = document.querySelector('#g1-7')
const g18 = document.querySelector('#g1-8')
const g19 = document.querySelector('#g1-9')

const g20 = document.querySelector('#g2-0')
const g21 = document.querySelector('#g2-1')
const g22 = document.querySelector('#g2-2')
const g23 = document.querySelector('#g2-3')
const g24 = document.querySelector('#g2-4')
const g25 = document.querySelector('#g2-5')
const g26 = document.querySelector('#g2-6')
const g27 = document.querySelector('#g2-7')
const g28 = document.querySelector('#g2-8')
const g29 = document.querySelector('#g2-9')
const g30 = document.querySelector('#g3-0')
const g31 = document.querySelector('#g3-1')
const g32 = document.querySelector('#g3-2')
const g33 = document.querySelector('#g3-3')
const g34 = document.querySelector('#g3-4')
const g35 = document.querySelector('#g3-5')
const g36 = document.querySelector('#g3-6')
const g37 = document.querySelector('#g3-7')
const g38 = document.querySelector('#g3-8')
const g39 = document.querySelector('#g3-9')

const g40 = document.querySelector('#g4-0')
const g41 = document.querySelector('#g4-1')
const g42 = document.querySelector('#g4-2')
const g43 = document.querySelector('#g4-3')
const g44 = document.querySelector('#g4-4')
const g45 = document.querySelector('#g4-5')
const g46 = document.querySelector('#g4-6')
const g47 = document.querySelector('#g4-7')
const g48 = document.querySelector('#g4-8')
const g49 = document.querySelector('#g4-9')
const g50 = document.querySelector('#g5-0')
const g51 = document.querySelector('#g5-1')
const g52 = document.querySelector('#g5-2')
const g53 = document.querySelector('#g5-3')
const g54 = document.querySelector('#g5-4')
const g55 = document.querySelector('#g5-5')
const g56 = document.querySelector('#g5-6')
const g57 = document.querySelector('#g5-7')
const g58 = document.querySelector('#g5-8')
const g59 = document.querySelector('#g0-9')
const g60 = document.querySelector('#g6-0')
const g61 = document.querySelector('#g6-1')
const g62 = document.querySelector('#g6-2')
const g63 = document.querySelector('#g6-3')
const g64 = document.querySelector('#g6-4')
const g65 = document.querySelector('#g6-5')
const g66 = document.querySelector('#g6-6')
const g67 = document.querySelector('#g6-7')
const g68 = document.querySelector('#g6-8')
const g69 = document.querySelector('#g6-9')

const g70 = document.querySelector('#g7-0')
const g71 = document.querySelector('#g7-1')
const g72 = document.querySelector('#g7-2')
const g73 = document.querySelector('#g7-3')
const g74 = document.querySelector('#g7-4')
const g75 = document.querySelector('#g7-5')
const g76 = document.querySelector('#g7-6')
const g77 = document.querySelector('#g7-7')
const g78 = document.querySelector('#g7-8')
const g79 = document.querySelector('#g7-9')

const g80 = document.querySelector('#g8-0')
const g81 = document.querySelector('#g8-1')
const g82 = document.querySelector('#g8-2')
const g83 = document.querySelector('#g8-3')
const g84 = document.querySelector('#g8-4')
const g85 = document.querySelector('#g8-5')
const g86 = document.querySelector('#g8-6')
const g87 = document.querySelector('#g8-7')
const g88 = document.querySelector('#g8-8')
const g89 = document.querySelector('#g8-9')

const g90 = document.querySelector('#g9-0')
const g91 = document.querySelector('#g9-1')
const g92 = document.querySelector('#g9-2')
const g93 = document.querySelector('#g9-3')
const g94 = document.querySelector('#g9-4')
const g95 = document.querySelector('#g9-5')
const g96 = document.querySelector('#g9-6')
const g97 = document.querySelector('#g9-7')
const g98 = document.querySelector('#g9-8')
const g99 = document.querySelector('#g9-9')




//*--------------------------- Event Listeners -----------------------------*//

//Pageload buttons
play.addEventListener('click', shipPlacementLoad)

//Ship Placement Buttons
back.addEventListener('click', pageLoad)
ready.addEventListener('click', hideShipBoard)
reset.addEventListener('click', exposeShipBoard)
vertical.addEventListener('click', vToggle)
horizontal.addEventListener('click', hToggle)

//ship divs
pt.forEach(pt => {
  pt.addEventListener('click', highlightShip)
})
sub.forEach(sub => {
  sub.addEventListener('click', highlightShip)
})
cru.forEach(cru => {
  cru.addEventListener('click', highlightShip)
})
bat.forEach(bat => {
  bat.addEventListener('click', highlightShip)
})
car.forEach(car => {
  car.addEventListener('click', highlightShip)
})


//Board Divs
shipSquares.forEach(shipSquare => {
  shipSquare.addEventListener('click', render)
})




//*------------------------------ Functions --------------------------------*//

function consoleLog(evt){
  console.log(evt.target.id)
  console.log(evt.target.classList)
  console.dir(evt.target)
  
}
turn = 0

function render(evt){
  let target = evt.target
  if(turn === 0){
    target.style.backgroundColor = shipMid
  // if(variable result of hit/miss logic){}
  // target.style.backgroundColor = hit
  // target.style.backgroundColor = miss
  }
}
//shipPlacement() - mechanic to prompt user and place ships
function shipPlacementLoad(){
  hidePageLoad()
  exposeShipPlacement()
}

//* Helper functions *//



//PageState Hide/Remove
function pageLoad() {
  img.removeAttribute('hidden')
  title.removeAttribute('hidden')
  play.removeAttribute('hidden')
}


function hidePageLoad(){
  img.setAttribute('hidden',true)
  title.setAttribute('hidden',true)
  play.setAttribute('hidden', true)
}

function exposeShipPlacement(){
  exposeShipBoard()
  player.innerText = 'Player 1'
  prompt.innerText = 'Please click the ship you wish to place then click the board sequentially where you would like it placed'
  ready.removeAttribute('hidden')
  reset.removeAttribute('hidden')


}

//element hide/remove

function exposeShipBoard(){
  shipBoard.removeAttribute('hidden');
}

function hideShipBoard(){
  shipBoard.setAttribute('hidden', true)
}


function exposeShotBoard(){
  shotBoard.removeAttribute('hidden')
}

function hideShotBoard(){
  shotBoard.setAttribute('hidden', true)
}

function exposeShipBank() {
  
}

function hideShipBank() {

}


//Ship-bank- toggle/highlight
function vToggle() {
  shipBankH.setAttribute('hidden',true)
  shipBankV.removeAttribute('hidden')
  vertical.setAttribute('hidden',true)
  horizontal.removeAttribute('hidden')
}

function hToggle() {
  shipBankV.setAttribute('hidden',true)
  shipBankH.removeAttribute('hidden')
  horizontal.setAttribute('hidden', true)
  vertical.removeAttribute('hidden')
}

function removeHighlight(){
    pt.forEach(pt => pt.classList.remove('highlight'))
    sub.forEach(sub => sub.classList.remove('highlight'))
    cru.forEach(cru => cru.classList.remove('highlight'))
    bat.forEach(bat => bat.classList.remove('highlight'))
    car.forEach(car => car.classList.remove('highlight'))
  }

function highlightShip(evt){
  removeHighlight()
  let target = evt.target.id
  if(
    target.includes('pt')  ||
    target.includes('sub') ||
    target.includes('cru') ||
    target.includes('bat') ||
    target.includes('car')
    ){
    evt.target.classList.add('highlight')
  }
}

//Constants
  // turn, player 1, player 2, shipinventory array of arrays, board array of arrays
  //ship inventory array of arrays is:
  // [
  //     [1,1], - pt
  //     [2,2,2], - submarine
  //     [3,3,3], - cruiser
  //     [4,4,4,4], - battleship
  //     [5,5,5,5,5] - carrier
  // ]
  //board = [
  // [ , , , , , , , , , ]
  // [ , , , , , , , , , ]
  // [ , , , , , , , , , ]
  // [ , , , , , , , , , ]
  // [ , , , , , , , , , ]
  // [ , , , , , , , , , ]
  // [ , , , , , , , , , ]
  // [ , , , , , , , , , ]
  // [ , , , , , , , , , ]
  // [ , , , , , , , , , ]
//] 

  //XVALUE OF BOARD IS BOARD[i][i] YVALUE is BOARD[i] - with these values, I now have x,y coordinates for all ship section locations
  //xvalue and yvalue will be defined as global variables

//Background written HTML- texture

//Page Load State
  // Page Load Function
    //Helper Function- showPageLoadState()
      //Shows image element
        //initImgLoad() - shows img element
      //Shows 3 button elements
        //Tutorial- eventlistener to loadMODL()
        //Play- eventlistener to shipPlacement()
        //Leaderboard- eventlistener to showLeader()
      // showTitle()
        //exposes h1 element with Battleship

  

//Ship Placement State- Player 1
  //shipPlacement()
  //loop that runs twice- once for player 1 and once for player 2
    //clearPageLoad()
      // hides - image, 3 button elements, title from page load state
    //showShipPlacement()
      // h2 element shows "player [x] turn"
      // h3 element shows "click your ship and then click the spaces you would like your ship in order
      // shows aside element with target divs inside
      // exposes shipPlacement Board of divs
      //shows ready button
  //handleClickShipPlacement- handles the clicks on this page
    
    //function that alters the border of the div to show highlighted ship that you clicked
    //h3 message updates to prompt user to click the spaces on the board that correspond to that ships number of spaces
    //accesses ship inventory to determine correct number of click spaces and display those as additional prompts in h3 - template literal is helpful here
    //ensure that all clicks were consecutive vertical or horizontal
        //define previous click variable
        //function to evaluate ship placement
          //loop through ships and for each:
            //prompt the user to click the ship they wish to place then click the spaces consecutively they would like the ship to go
            //function will only allow placement of ship in places that are logical and where the ship fits
              //loop through game board of arrays and compare new click to previous click to ensure the click is on a consecutive div
                //evaluate if the click is vertical or horizontal to previous click
                //ensure third click is also vertical/horizontal respective to previous horizontal click
                //not allow click of the same div as previous click
            //error code displays in red font on h3 element if:
              //click is not on a div
              //click is not vertical/horizontal(i.e. +1/-1 x,y value that isn't a negative number) to previous click
              //click is of the same div as previous click
            //successful placement of each click calls render function
          //upon successful placement of one ship the loop begins again waiting for the user to select the next ship
        //upon completion of all ships- h3 prompts user to click the ready button
  //ready button click pushes all ship placement locations to player 1 shiplocations array with x,y values and clears page for player two to loop through ship placement again.
    // hides player 1 ship placement grid
  //ready button of player 2 pushes ship locations to player 2 shiplocations array with x,y values
    //ready button of player 2 also calls the game function upon exit of the loop
    //hides player 2 ship placement grid 
  //renderShipPlacement()
    //if ship is first click or last click of that ships inventory and styles div in CSS to have border radius of a dome- showing endcap of the ship
    //upon first valid click of ship placement- styles the background of impossible places for ship placement with shader CSS class (i.e. rGBA(255,255,255,.25))
      //impossible placements of second click are: 
        //divs that are not an x or y value change of 1
        //any div that is negative x,y value
        //any div that is x,y value greater than 10
      //impossible placements of third click are:
        //if second click was a change in x value
          //divs that are not a change in x value
          //divs that are not an x value change of 1
        //is second click was a change in y value
          //divs that are not a change in y value
          //divs that are not a y value change of 1
      //render function scoped impossible placement clicks are:
        // divs that are more than ship inventory array.length away from first click
    //each click of a div in the ship placement changes the locally defined evt.target.id as a variable in the render function and changes the Css style of that variable to class style "ship"- which is grey instead of transparent
    //
        


//Main Gameplay-
  //game function
    //init()
      //checks to see if turn is player 1 or 2 and performs below accordingly
      //hides innerHTML of ship placement boards
      //unhides innerHTML of shipplacement grid for player 1 side by side with empty shot grid in flex box section
      //h2 prompts "player ${turn}'s turn"
      //h3 prompts player to click a div on shot board
      //waits for click on shot board
    //handleClick()
      //grabs event.target.id and assigns x,y values to it through x,y assigner function
      //shotRender(evt)
      //loops back over array of arrays to determine if any array of arrays has a .length of zero
        //if the length of any of those arrays is zero, the ship is sunk and the loop pops that array from ship inventory array
      //loops back over array of arrays to determine that ship inventory array has a .length greater than zero
        //if the ship inventory array has a length greater than zero there is at least one ship remaining and the game continues by switching the turn to player 2 and init for player 2
      //turn changes to player 2
    //shotRender()
      //loops over player 2 shipinventory positions, array of arrays for matches to x,y values of shot
        //if match
          //message prompt below shot board registers hit
          //fill of div changes to red
        //if no match
          //message prompt registers miss
          //fill of div changes to white
      //pops matched value from the ship inventory array of arrays

  //turns continue until win-condition of ship inventory array.lenghth is zero




//Winner State
  //hides all game elements except for h3 and replay button
  //displays h3 with winner of the game
  //replay button upon click calls gamePageLoad() to restart the game



//*--------------------------------------BONUSES------------------------------------------------------------*//

//Tutorial MODL PG 1 && 2

//LeaderBoard State with ranking and scoring

//Audio of Missle launch with hit or miss conditional audio

//Audio of ship placement completion- ding of ship bell, saluting, sonar, airplane takeoff, (battleship conditional audio)

//gif of water moving as background with nearly invisible grid in CSS to emphasize the waters

//conditional animation of hit or miss on player click of shot board

//missle/shot arc animation in CSS from existing ship location of player to shot location and animation following that sequentially

//timer with punishment for delay of game being a hit on an existing ship

// page state between page load state and ship placement state to allow players to type custom names for use throughout the rest of the game and saved if high score to leaderboard