//*------------------------------- Constants -------------------------------*//
const p1Ships = []
const p1Active = []
const p2Ships = []
const p2Active = []
const p1Hits = []
const p1Miss = []
const p2Hits = []
const p2Miss = []
let joinedTemp = []
let joinedSpaces = []


//1-PT Boat, 2-Submarine, 3-Cruiser, 4-Battleship, 5-Carrier

//*------------------------------- Variables -------------------------------*//
//turns
// 0-P1 Ship Placement, 1-P2 Ship Placement, 2-P1 Gameplay, 3-P2 GamePlay 
let turn = 0
let shipClick, shotClick
let shipSelected = null
//orientation
let or = 'horizontal'

//*---------------------- Cached Element References ------------------------*//

//Message Elements
const title = document.querySelector('#title')
const player = document.querySelector('#player')
const prompt = document.querySelector('#prompt')

//Ship Placement Buttons
const play = document.querySelector('#play')
const ready1 = document.querySelector('#ready1')
const ready2 = document.querySelector('#ready2')
const reset = document.querySelector('#reset')
const back = document.querySelector('#back')
const rghtButtons = document.querySelector('#right-buttons')
const horizontal = document.querySelector('#horizontal')
const vertical = document.querySelector('#vertical')

const img = document.querySelector('img')

//Gameplay buttons
const endTurn = document.querySelector('#end-turn')

//GamePlay Areas
const playArea = document.querySelector('.play-area')

//ship selection divs
const shipBoard = document.querySelector('.ship-board')
const shotBoard = document.querySelector('.shot-board')
const shipBank = document.querySelector('#ship-bank')
const shipBankV = document.querySelector('#bank-box-v')
const shipBankH = document.querySelector('#bank-box-h')

//ship Divs
const pt = document.querySelectorAll('.pt')
const sub = document.querySelectorAll('.sub')
const cru = document.querySelectorAll('.cru')
const bat = document.querySelectorAll('.bat')
const car = document.querySelectorAll('.car')

//Ship Board Divs
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

//Shot-board divs
const shotSquares = document.querySelectorAll('.shot-board > div')
const s00 = document.querySelector('#s0-0')
const s01 = document.querySelector('#s0-1')
const s02 = document.querySelector('#s0-2')
const s03 = document.querySelector('#s0-3')
const s04 = document.querySelector('#s0-4')
const s05 = document.querySelector('#s0-5')
const s06 = document.querySelector('#s0-6')
const s07 = document.querySelector('#s0-7')
const s08 = document.querySelector('#s0-8')
const s09 = document.querySelector('#s0-9')

const s10 = document.querySelector('#s1-0')
const s11 = document.querySelector('#s1-1')
const s12 = document.querySelector('#s1-2')
const s13 = document.querySelector('#s1-3')
const s14 = document.querySelector('#s1-4')
const s15 = document.querySelector('#s1-5')
const s16 = document.querySelector('#s1-6')
const s17 = document.querySelector('#s1-7')
const s18 = document.querySelector('#s1-8')
const s19 = document.querySelector('#s1-9')

const s20 = document.querySelector('#s2-0')
const s21 = document.querySelector('#s2-1')
const s22 = document.querySelector('#s2-2')
const s23 = document.querySelector('#s2-3')
const s24 = document.querySelector('#s2-4')
const s25 = document.querySelector('#s2-5')
const s26 = document.querySelector('#s2-6')
const s27 = document.querySelector('#s2-7')
const s28 = document.querySelector('#s2-8')
const s29 = document.querySelector('#s2-9')

const s30 = document.querySelector('#s3-0')
const s31 = document.querySelector('#s3-1')
const s32 = document.querySelector('#s3-2')
const s33 = document.querySelector('#s3-3')
const s34 = document.querySelector('#s3-4')
const s35 = document.querySelector('#s3-5')
const s36 = document.querySelector('#s3-6')
const s37 = document.querySelector('#s3-7')
const s38 = document.querySelector('#s3-8')
const s39 = document.querySelector('#s3-9')

const s40 = document.querySelector('#s4-0')
const s41 = document.querySelector('#s4-1')
const s42 = document.querySelector('#s4-2')
const s43 = document.querySelector('#s4-3')
const s44 = document.querySelector('#s4-4')
const s45 = document.querySelector('#s4-5')
const s46 = document.querySelector('#s4-6')
const s47 = document.querySelector('#s4-7')
const s48 = document.querySelector('#s4-8')
const s49 = document.querySelector('#s4-9')

const s50 = document.querySelector('#s5-0')
const s51 = document.querySelector('#s5-1')
const s52 = document.querySelector('#s5-2')
const s53 = document.querySelector('#s5-3')
const s54 = document.querySelector('#s5-4')
const s55 = document.querySelector('#s5-5')
const s56 = document.querySelector('#s5-6')
const s57 = document.querySelector('#s5-7')
const s58 = document.querySelector('#s5-8')
const s59 = document.querySelector('#s0-9')

const s60 = document.querySelector('#s6-0')
const s61 = document.querySelector('#s6-1')
const s62 = document.querySelector('#s6-2')
const s63 = document.querySelector('#s6-3')
const s64 = document.querySelector('#s6-4')
const s65 = document.querySelector('#s6-5')
const s66 = document.querySelector('#s6-6')
const s67 = document.querySelector('#s6-7')
const s68 = document.querySelector('#s6-8')
const s69 = document.querySelector('#s6-9')

const s70 = document.querySelector('#s7-0')
const s71 = document.querySelector('#s7-1')
const s72 = document.querySelector('#s7-2')
const s73 = document.querySelector('#s7-3')
const s74 = document.querySelector('#s7-4')
const s75 = document.querySelector('#s7-5')
const s76 = document.querySelector('#s7-6')
const s77 = document.querySelector('#s7-7')
const s78 = document.querySelector('#s7-8')
const s79 = document.querySelector('#s7-9')

const s80 = document.querySelector('#s8-0')
const s81 = document.querySelector('#s8-1')
const s82 = document.querySelector('#s8-2')
const s83 = document.querySelector('#s8-3')
const s84 = document.querySelector('#s8-4')
const s85 = document.querySelector('#s8-5')
const s86 = document.querySelector('#s8-6')
const s87 = document.querySelector('#s8-7')
const s88 = document.querySelector('#s8-8')
const s89 = document.querySelector('#s8-9')

const s90 = document.querySelector('#s9-0')
const s91 = document.querySelector('#s9-1')
const s92 = document.querySelector('#s9-2')
const s93 = document.querySelector('#s9-3')
const s94 = document.querySelector('#s9-4')
const s95 = document.querySelector('#s9-5')
const s96 = document.querySelector('#s9-6')
const s97 = document.querySelector('#s9-7')
const s98 = document.querySelector('#s9-8')
const s99 = document.querySelector('#s9-9')




//*--------------------------- Event Listeners -----------------------------*//

//Pageload buttons
play.addEventListener('click', shipPlacementLoad)

//Ship Placement Buttons
back.addEventListener('click', backBtn)
reset.addEventListener('click', resetBtn)
vertical.addEventListener('click', vToggle)
horizontal.addEventListener('click', hToggle)
ready1.addEventListener('click', () => {
  if(joinedSpaces.length === 17){
    turn = 1
    joinedSpaces.forEach(coord => p1Ships.push(coord))
    joinedSpaces.forEach(coord => p1Active.push(coord))
    joinedSpaces = []
    removeHighlight()
    shipPlacementLoad()
  }else if(joinedSpaces.length > 17){
    prompt.innerText = 'You have too many ships for this voyage. Please reset'
    prompt.style.color = 'palevioletred'
    setTimeout(() => {
      prompt.innerText = 'Please click a ship and then click a space to place it'
      prompt.style.color = 'whitesmoke'}, 2000)
  }else{
    prompt.innerText = 'You must finish placing your ships'
    prompt.style.color = 'palevioletred'
    setTimeout(() => {
      prompt.innerText = 'Please click a ship and then click a space to place it'
      prompt.style.color = 'whitesmoke'}, 2000)
  }
})
ready2.addEventListener('click',() => {
  if(joinedSpaces.length === 17){
    turn = 2
    joinedSpaces.forEach(coord => p2Ships.push(coord))
    joinedSpaces.forEach(coord => p2Active.push(coord))
    joinedSpaces = []
    gamePageLoad()
  }else{
    prompt.innerText = 'You must finish placing your ships'
    prompt.style.color = 'palevioletred'
    setTimeout(() => {
      prompt.innerText = 'Please click a ship and then click a space to place it'
      prompt.style.color = 'whitesmoke'}, 2000)
  }})

//ship divs
pt.forEach(pt => {
  pt.addEventListener('click', handleShipClick)
})
sub.forEach(sub => {
  sub.addEventListener('click', handleShipClick)
})
cru.forEach(cru => {
  cru.addEventListener('click', handleShipClick)
})
bat.forEach(bat => {
  bat.addEventListener('click', handleShipClick)
})
car.forEach(car => {
  car.addEventListener('click', handleShipClick)
})

//Board Divs
shipSquares.forEach(shipSquare => {
  shipSquare.addEventListener('click', handleShipClick)
})


//Game Play Buttons



//*------------------------------ Functions --------------------------------*//
//Page loads on unhidden HTML
//backButton
function backBtn() {
  turn = 0
  hideShipPlacement()
  title.removeAttribute('hidden')
  play.removeAttribute('hidden')
  img.removeAttribute('hidden')
  joinedSpaces = []
  removeHighlight()
}
//Upon click of Play Button// Loads p1 and ShipPlacementLoad 

function shipPlacementLoad(){
  if(turn === 0){
    player.innerText = 'Player 1'

  }
  if(turn === 1){
    player.innerText = 'Player 2'
  }
  resetShip()
  clearShipBoard()
  prompt.innerText = 'Please click a ship and then click a space to place it'
  hidePageLoad()
  exposeShipPlacement()
}

function resetBtn(){
  joinedSpaces = []
  shipSelected = null
  console.log('reached reset')
  removeHighlight()
  shipPlacementLoad()
}

function gamePageLoad(){
  prompt.innerText = 'Click the shot board to fire upon your opponent!'
  shotSquares.forEach(shotSquare => {
    shotSquare.addEventListener('click', handleShotClick)
  })
  clearShipBoard()
  hideShipBank()
  exposeShipBoard()
  exposeShotBoard()
  ready2.setAttribute('hidden', true)
  back.setAttribute('hidden', true)
  reset.setAttribute('hidden', true)
  endTurn.setAttribute('hidden', true)
  endTurn.innerText = 'End Turn'
  if(turn % 2 === 0){
    player.innerText = 'Player 1'
  }else{
    player.innerText = 'Player 2'
  }
  renderShipBoard()
  renderShotBoard()
}

function renderShipBoard(){
  if(turn % 2 === 0){
    p1Active.forEach(coord => {
      let square = document.querySelector(`#g${coord.substring(0,1)}-${coord.substring(1,2)}`)
    square.style.backgroundColor = 'grey'
    })
    //if player 1 -even
      // change div background color to gray for each coord in p1Ships array
  }else{
    p2Active.forEach(coord => {
      let square = document.querySelector(`#g${coord.substring(0,1)}-${coord.substring(1,2)}`)
    square.style.backgroundColor = 'grey'
    })
  }
}

function renderShotBoard(){
  //check if turn is odd or even
  if(turn % 2 === 0){
    p1Hits.forEach(coord => {
      let hit = document.querySelector(`#s${coord.substring(0,1)}-${coord.substring(1,2)}`)
      hit.style.backgroundColor = 'red'
    })
    p1Miss.forEach(coord => {
      let miss = document.querySelector(`#s${coord.substring(0,1)}-${coord.substring(1,2)}`)
      miss.style.backgroundColor = 'white'
    })
  }else{
    p2Hits.forEach(coord => {
      let hit = document.querySelector(`#s${coord.substring(0,1)}-${coord.substring(1,2)}`)
      hit.style.backgroundColor = 'red'
    })
    p2Miss.forEach(coord => {
      let miss = document.querySelector(`#s${coord.substring(0,1)}-${coord.substring(1,2)}`)
      miss.style.backgroundColor = 'white'
    })
  }
}


function renderWinner(){
  hideShipBoard()
  hideShotBoard()
  clearShipBoard()
  clearShotBoard()
  // hide
  if(winner = 'p1'){
    prompt.innerText = 'Player 1 wins!'
  }else{
    prompt.innerText = 'Player 2 wins!'
  }
}

function handleShotClick(evt){
  let targetClass = evt.target.classList
  if(targetClass.contains('square')){
    if(evt.target.style.backgroundColor !== ''){
      prompt.innerText = 'You have already fired there'
      prompt.style.color = 'palevioletred'
      setTimeout(() => {
        prompt.innerText = 'Click the shot board to fire upon your opponent!'
        prompt.style.color = 'whitesmoke'}, 2000)
    }else{
      endTurn.removeAttribute('hidden')
      endTurn.addEventListener('click', changeTurnLoad)
      idShipShot(evt)
      if(turn % 2 === 0){
        checkHitMiss()
      }else{
        checkHitMiss()
      }
    }
  }
  renderShotBoard()
  if(p1Ships.length === 0 || p2Ships.length === 0){
    if(p1Ships.length === 0){
      winner = 'p2'
      console.log(winner)
    }
    if(p2Ships.length === 0){
      winner = 'p1'
      console.log(winner)
    }
    renderWinner(winner)
  }
  shotSquares.forEach(shotSquare => {
    shotSquare.removeEventListener('click', handleShotClick)
  })
}

function changeTurnLoad(){
  turn ++
  title.innerText = ''
  prompt.innerText = `It's the next players turn, click the start turn button when you are ready.`
  endTurn.removeEventListener('click',changeTurnLoad)
  endTurn.innerText = 'Start Turn'
  endTurn.removeAttribute('hidden')
  endTurn.addEventListener('click', gamePageLoad)
  hideShipBoard()
  clearShotBoard()
  hideShotBoard()
}



function handleShipClick(evt) {
  let targetId = evt.target.id
  let targetClass = evt.target.classList
    if(targetClass.contains('square')){
      if(shipSelected === null){
        prompt.innerText = 'You must first select a ship'
        prompt.style.color = 'palevioletred'
        setTimeout(() => {
        prompt.innerText = 'Please click a ship and then click a space to place it'
        prompt.style.color = 'whitesmoke'}, 2000)
      }else{
        idShipShot(evt)
      }
    }else{
      highlightShip(evt)
      if(targetId.includes('pt')){
        shipSpaceNum = 2;
        prompt.innerText = `Please place your PT Cruiser in ${shipSpaceNum} available spaces.`
        shipSelected = 'pt'
      }
      if(targetId.includes('sub')){
        shipSpaceNum = 3;
        prompt.innerText = `Please place your Submarine in ${shipSpaceNum} available spaces.`
        shipSelected = 'sub'
      }
      if(targetId.includes('cru')){
        shipSpaceNum = 3;
        prompt.innerText = `Please place your Cruiser in ${shipSpaceNum} available spaces.`
        shipSelected = 'cru'
      }
      if(targetId.includes('bat')){
        shipSpaceNum = 4;
        prompt.innerText = `Please place your Battleship in ${shipSpaceNum} available spaces.`
        shipSelected = 'bat'
      }
      if(targetId.includes('car')){
        shipSpaceNum = 5;
        prompt.innerText = `Please place your Carrier in ${shipSpaceNum} available spaces.`
        shipSelected = 'car'
      }
    }
  }
  
function checkHitMiss(){
  if(turn % 2 === 0){
    let match = false
    console.log(p2Ships)
    p2Ships.forEach((coord,idx) => {
      if(coord === shotClick){
        match = true
        p1Hits.push(shotClick)
        p2Ships.splice(idx,1)
        console.log('hit')
        
        return
      }else{
      }
    })
    if(!match){
      p1Miss.push(shotClick)
      console.log('miss')
    }
    return match
  }else{
    let match = false
    console.log(p1Ships)
    p1Ships.forEach((coord,idx) => {
      if(coord === shotClick){
        match = true
        p2Hits.push(shotClick)
        p1Ships.splice(idx,1)
        console.log('hit')
        return
      }else{
      }
    })
    if(!match){
      p2Miss.push(shotClick)
      console.log('miss')
    }
    return match
  }
}

function idShipShot(evt){
  let targetId = evt.target.id 
  console.log(targetId)
  if(targetId.includes('g')){
    if(turn === 0 || turn === 1){
      posExtract(evt)
      //returns boolean to inform if the click is valid for ship placement
      idValidClick(shipClick)
    }else{
      prompt.innerText = 'You cannot change the position of your ships when you have gone to battle.'
      prompt.style.color = 'palevioletred'
      setTimeout(() => {
      prompt.innerText = 'Please click a ship and then click a space to place it'
      prompt.style.color = 'whitesmoke'}, 2000)
    }
  }
  if(targetId.includes('s')){
    console.log(targetId)
    posExtract(evt)
  }
}

function pushJoinedTemp(shipClick){
  let tempShip = []
  joinedTemp = []
  let yOnBoard = (shipClick[0] + shipSpaceNum) <= 10
  let xOnBoard = (shipClick[1] + shipSpaceNum) <= 10
  if((or === 'vertical' && !yOnBoard) || (or === 'horizontal' && !xOnBoard)){
    prompt.innerText = 'That ship is off the board, please place it elsewhere'
    prompt.style.color = 'palevioletred'
    setTimeout(() => {
      prompt.innerText = 'Please click a ship and then click a space to place it'
      prompt.style.color = 'whitesmoke'}, 2000)
    resetBtn()
      return
  }
  if(or === 'vertical'){
    for(let i = 0; i < shipSpaceNum; i++){
      tempShip.push([(shipClick[0] + i), shipClick[1]])
    }
  }
  if(or === 'horizontal'){
    for(let i = 0; i < shipSpaceNum; i++){
      tempShip.push([shipClick[0], (shipClick[1] + i)])
    }
  }
  tempShip.forEach(ele => {joinedTemp.push(ele.join(''))})
}

function getMatch(){
  let match = false
  joinedTemp.forEach(coord => {
    if(joinedSpaces.includes(coord)){
      match = true
    }
  })
  return match
} 

function idValidClick(shipClick){
  pushJoinedTemp(shipClick)
  if(getMatch()){
    prompt.innerText = 'That ship is overlapping another ship, please place it elsewhere'
    prompt.style.color = 'palevioletred'
    setTimeout(() => {
      prompt.innerText = 'Please click a ship and then click a space to place it'
      prompt.style.color = 'whitesmoke'}, 2000)
  }else{
    joinedTemp.forEach(coord => joinedSpaces.push(coord))
    removeShip()
  }
  renderShip()
}

function removeShip(){
  console.log(shipSelected)
  if(shipSelected === 'pt'){pt.forEach(pt => pt.setAttribute('hidden', true))}
  if(shipSelected === 'sub'){sub.forEach(sub => sub.setAttribute('hidden', true))}
  if(shipSelected === 'cru'){cru.forEach(cru => cru.setAttribute('hidden', true))}
  if(shipSelected === 'bat'){bat.forEach(bat => bat.setAttribute('hidden', true))}
  if(shipSelected === 'car'){car.forEach(car => car.setAttribute('hidden', true))}
}

function resetShip(){
    pt.forEach(pt => pt.removeAttribute('hidden'))
    sub.forEach(sub => sub.removeAttribute('hidden'))
    cru.forEach(cru => cru.removeAttribute('hidden'))
    bat.forEach(bat => bat.removeAttribute('hidden'))
    car.forEach(car => car.removeAttribute('hidden'))
}


function renderShip(){
  joinedSpaces.forEach((pos) => {
    // console.log(pos[0])
    let square = document.querySelector(`#g${pos[0]}-${pos[1]}`)
    // console.log(square)
    square.style.backgroundColor = 'darkgrey'
  })
}


function posExtract(evt){
  let targetId = evt.target.id
  shipClick = [parseInt(targetId.substring(1,2)), parseInt(targetId.substring(3,4))]
  shotClick = [parseInt(targetId.substring(1,2)), parseInt(targetId.substring(3,4))]
  shotClick = shotClick.join('')
}


function getWinner(){
  if(p1Ships.length === 0){
    winner = player2
  }
  if(p2Ships.length === 0){
    winner = player1
  }
  return winner
}


//*------------------------------ Helper functions -------------------------*//



//PageState Hide/Remove
function hidePageLoad(){
  title.setAttribute('hidden',true)
  play.setAttribute('hidden', true)
  img.setAttribute('hidden', true)
}

function exposeShipPlacement(){
  exposeShipBoard()
  player.removeAttribute('hidden')
  prompt.removeAttribute('hidden')
  reset.removeAttribute('hidden')
  back.removeAttribute('hidden')
  if(turn === 0){ready1.removeAttribute('hidden')}else{
    ready1.setAttribute('hidden',true)
    ready2.removeAttribute('hidden')}
  exposeShipBank()
}

function hideShipPlacement(){
  hideShipBoard()
  ready1.setAttribute('hidden', true)
  reset.setAttribute('hidden', true)
  back.setAttribute('hidden', true)
  player.setAttribute('hidden', true)
  prompt.setAttribute('hidden', true)
  hideShipBank()

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
  shipBank.removeAttribute('hidden')
  rghtButtons.removeAttribute('hidden')
  
}

function hideShipBank() {
  shipBank.setAttribute('hidden', true)
  rghtButtons.setAttribute('hidden', true)
}


//Ship-bank- toggle/highlight
function vToggle() {
  shipBankH.setAttribute('hidden',true)
  shipBankV.removeAttribute('hidden')
  vertical.setAttribute('hidden',true)
  horizontal.removeAttribute('hidden')
  or = 'vertical'
}

function hToggle() {
  shipBankV.setAttribute('hidden',true)
  shipBankH.removeAttribute('hidden')
  horizontal.setAttribute('hidden', true)
  vertical.removeAttribute('hidden')
  or = 'horizontal'
}

function removeHighlight(){
    pt.forEach(pt => pt.classList.remove('highlight'))
    sub.forEach(sub => sub.classList.remove('highlight'))
    cru.forEach(cru => cru.classList.remove('highlight'))
    bat.forEach(bat => bat.classList.remove('highlight'))
    car.forEach(car => car.classList.remove('highlight'))
  }

function highlightShip(evt){
  let targetId = evt.target.id
  removeHighlight()
  if(targetId.includes('pt')){pt.forEach(pt => pt.classList.add('highlight'))}
  if(targetId.includes('sub')){sub.forEach(sub => sub.classList.add('highlight'))}
  if(targetId.includes('cru')){cru.forEach(cru => cru.classList.add('highlight'))}
  if(targetId.includes('bat')){bat.forEach(bat => bat.classList.add('highlight'))}
  if(targetId.includes('car')){car.forEach(car => car.classList.add('highlight'))}
  }

function clearShipBoard(){
  shipSquares.forEach(coord => coord.style.backgroundColor = '')
}

function clearShotBoard(){
  shotSquares.forEach(coord => coord.style.backgroundColor = '')
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