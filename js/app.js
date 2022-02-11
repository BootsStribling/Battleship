//*------------------------------- Constants -------------------------------*//


//*------------------------------- Variables -------------------------------*//


//*---------------------- Cached Element References ------------------------*//
const g00 = document.querySelector('#g0-0')

//*--------------------------- Event Listeners -----------------------------*//
g00.addEventListener('click', consoleLog)

//*------------------------------ Functions --------------------------------*//

function consoleLog(evt){
  console.log(evt.target.id)
  console.log(evt.target.classList)
  console.dir(evt.target)
  render(evt)
}

function render(evt){
  evt.target.innerText = 'X'
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