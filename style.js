let titleEl = document.getElementById("title-el")
let tapEl = document.getElementById("tap-el")
let bodyEl1 = document.getElementById("body-el1")
let Modal = document.getElementById("modal");
let timerEl = document.getElementById("timer-el")
let randomEl = document.getElementById("random-el")
let letters = ["A","B","C","D","E","F","G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let randomIndex = Math.floor(Math.random(letters)*26)
let randomIndex2 = Math.floor(Math.random(letters)*26)
let randomIndex3 = Math.floor(Math.random(letters)*26)
let randomIndex4 = Math.floor(Math.random(letters)*26)
let randomLetter = letters[randomIndex]
let randomLetter2 = letters[randomIndex2]
let randomLetter3 = letters[randomIndex3]
let randomLetter4 = letters[randomIndex4]
let inputCon = document.getElementById("input-con")
let inputEl1 = document.getElementById("input-el1")
let inputEl2 = document.getElementById("input-el2")
let inputEl3 = document.getElementById("input-el3")
let inputEl4 = document.getElementById("input-el4")
let inputEl5 = document.getElementById("input-el5")
let warningEl = document.getElementById("warning-el")
//let errorEl = document.getElementById("error-el")
let errormsgEl = document.getElementById("error-msg")
let bodyEl = document.getElementById("body-el")
let warningTxt = document.getElementById("warning-txt")
let playBtn = document.getElementById("play-btn")
let arrayDiv = document.getElementById("array-test")
let leaderboardList = [`${JSON.parse(localStorage.getItem("username"))}`]
let usernameEl = document.getElementById("username-el")
let usernameEl2 = document.getElementById("username-el2") 
//let userValue = usernameEl.value
let totalScore = document.getElementById("total-score")
let timesEl = document.getElementById("times");
let isGoing = false

function toggleState(x){
    x.state =! x.state
}




function textColor(){
    setTimeout(() => {
        titleEl.style.fontSize='12rem'
        tapEl.style.color ='#00f0d1'
        tapEl.style.fontSize='2rem'
    }, 500);
    setTimeout(() => {
        titleEl.style.fontSize='10rem'
        tapEl.style.color='#a966ee'
        tapEl.style.fontSize='1.5rem'
    }, 1000);
    setTimeout(() => {
        textColor()
    }, 1000);
}
function errorCheck(x){
    if (x.value = ""){
        errormsgEl.textContent = "Please enter a word"
    }
    else if (x.value[0] !== randomLetter){
        errormsgEl.textContent = `Please enter a word starting with ${randomletter}`
    }
    else {
        x.value = x.value
    }
}


function closeModal(x) {
    x.style.display='none'
}
function openModal(x){
    setTimeout ( () =>{
        x.style.display='flex'
    }, 500)
    }
    
function pushUser(){
    let userValue = usernameEl.value
    let userValue2 = usernameEl2.value
    localStorage.setItem("userID", JSON.stringify(userValue))
    localStorage.setItem("userID2", JSON.stringify(userValue2))
}

function pushUserData(){
    let leaderboardList = [`${JSON.parse(localStorage.getItem("username"))}`]
    const word1 = inputEl1.value.toUpperCase()
    const word2 = inputEl2.value.toUpperCase()
    const word3 = inputEl3.value.toUpperCase()
    const word4 = inputEl4.value.toUpperCase()
    const word5 = inputEl5.value.toUpperCase()
    const uniq1 = new Set (word1)
    const uniq1x = [...uniq1].length
    const uniq2 = new Set (word2)
    const uniq2x = [...uniq2].length
    const uniq3 = new Set (word3)
    const uniq3x = [...uniq3].length
    const uniq4 = new Set (word4)
    const uniq4x = [...uniq4].length
    const uniq5 = new Set (word5)
    const uniq5x = [...uniq5].length

    let totalValue = (((uniq1x)*100) + ((word1.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq2x)*100) + ((word2.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq3x)*100) + ((word3.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq4x)*100) + ((word4.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq5x)*100) + ((word5.length)*100) + ((timerEl.textContent.slice(3)*100)))

    window.totalValue3 = totalValue;

    leaderboardList.push(
    `
    <div class="firstscore-container">
        <div class="username-actual">
            <span>${JSON.parse(localStorage.getItem("userID"))}</span>
        </div>
        <div class="score-actual">
            <span id="total-score">${totalValue}</span>
        </div>
    </div>
    `
    )
    localStorage.setItem("username", JSON.stringify(leaderboardList))
}

function pushUserData2(){
    let leaderboardList = [`${JSON.parse(localStorage.getItem("username"))}`]
    const word1 = inputEl1.value.toUpperCase()
    const word2 = inputEl2.value.toUpperCase()
    const word3 = inputEl3.value.toUpperCase()
    const word4 = inputEl4.value.toUpperCase()
    const word5 = inputEl5.value.toUpperCase()
    const uniq1 = new Set (word1)
    const uniq1x = [...uniq1].length
    const uniq2 = new Set (word2)
    const uniq2x = [...uniq2].length
    const uniq3 = new Set (word3)
    const uniq3x = [...uniq3].length
    const uniq4 = new Set (word4)
    const uniq4x = [...uniq4].length
    const uniq5 = new Set (word5)
    const uniq5x = [...uniq5].length

    let totalValue2 = (((uniq1x)*100) + ((word1.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq2x)*100) + ((word2.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq3x)*100) + ((word3.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq4x)*100) + ((word4.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq5x)*100) + ((word5.length)*100) + ((timerEl.textContent.slice(3)*100)))

    leaderboardList.push(
    `
    <div class="firstscore-container">
        <div class="username-actual">
            <span>${JSON.parse(localStorage.getItem("userID2"))}</span>
        </div>
        <div class="score-actual">
            <span id="total-score">${totalValue2}</span>
        </div>
    </div>
    `
    )
    localStorage.setItem("username", JSON.stringify(leaderboardList))
}

function arrayTest(){
    arrayDiv.innerHTML = arrayContent
}

function storeUsername(){
    localStorage.setItem("username", JSON.stringify(usernameEl.value))
}

function letterGen(){
        var randomness = setInterval(() => {
            function random1(){
                let letters = ["A","B","C","D","E","F","G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
                let randomIndex2 = Math.floor(Math.random(letters)*26)
                let randomLetter = letters[randomIndex2]
                randomEl.textContent = randomLetter
            }
            random1()
            setTimeout(()=>{
                clearInterval(randomness)
                inputCon.style.display='flex'
                inputEl1.placeholder=`${randomEl.textContent}`
                inputEl2.placeholder=`${randomEl.textContent}`
                inputEl3.placeholder=`${randomEl.textContent}`
                inputEl4.placeholder=`${randomEl.textContent}`
                inputEl5.placeholder=`${randomEl.textContent}`
            },5000)
        }, 300)
}

function countdown(){
    setTimeout((()=>{
        let timeCount = 30
        var countit = setInterval(() =>{
            function countup(){
                timeCount = timeCount - 1
                if(timeCount <=15 && timeCount >= 10 && timeCount % 2 === 0){
                    timerEl.textContent = `00:${timeCount}`
                    timerEl.style.color='#C2000E'
                    warningEl.style.display='none'
                    
                }
                else if(timeCount <=15 && timeCount >= 10 && timeCount % 2 != 0){
                    timerEl.textContent = `00:${timeCount}`
                    warningEl.style.display='block'
                    timerEl.style.color='#C2000E'
                    warningTxt.textContent=`You have ${timeCount} seconds left!`
                    
                }
                else if(timeCount < 10 && timeCount != 0 && timeCount % 2 === 0){
                    
                    timerEl.textContent = `00:0${timeCount}`
                    timerEl.style.color='#C2000E'
                    warningEl.style.display='none'
                }
                else if(timeCount < 10 && timeCount != 0 && timeCount % 2 != 0){
                    
                    timerEl.textContent = `00:0${timeCount}`
                    timerEl.style.color='#C2000E'
                    warningEl.style.display='block'
                    warningTxt.textContent=`You have ${timeCount} seconds left!`
                }
                else if(timeCount === 0 && isGoing === false){
                    timerEl.textContent = `00:0${timeCount}`
                    warningEl.style.display='block'
                    warningTxt.textContent=`Time up!`
                    console.log("timeUp")

                    let leaderboardList = [`${JSON.parse(localStorage.getItem("username"))}`]
            const word1 = inputEl1.value.toUpperCase()
            const word2 = inputEl2.value.toUpperCase()
            const word3 = inputEl3.value.toUpperCase()
            const word4 = inputEl4.value.toUpperCase()
            const word5 = inputEl5.value.toUpperCase()
            const uniq1 = new Set (word1)
            const uniq1x = [...uniq1].length
            const uniq2 = new Set (word2)
            const uniq2x = [...uniq2].length
            const uniq3 = new Set (word3)
            const uniq3x = [...uniq3].length
            const uniq4 = new Set (word4)
            const uniq4x = [...uniq4].length
            const uniq5 = new Set (word5)
            const uniq5x = [...uniq5].length
    
            let totalValue = (((uniq1x)*100) + ((word1.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq2x)*100) + ((word2.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq3x)*100) + ((word3.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq4x)*100) + ((word4.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq5x)*100) + ((word5.length)*100) + ((timerEl.textContent.slice(3)*100)))
                bodyEl.innerHTML = `
                <div class="score-section">
                    <span class="score-title" style="margin-bottom: 2rem; color:white">SCORE BREAKDOWN</span>
                    <div class="upper-score-section">
                        <span>WORDS PLAYED</span>  
                        <span>LETTER COUNT (x100)</span>
                        <span>UNIQUE LETTERS (x100)</span> 
                        <span>TIME (x100)</span>   
                        <span>TOTAL</span>     
                    </div>
                    <div class="scores">
                        <div class="words-played">
                            <div>
                                <span>${word1}</span>
                            </div>
                            <div>
                                <span>${word2}</span>
                            </div>
                            <div>
                                <span>${word3}</span>
                            </div>
                            <div>
                                <span>${word4}</span>
                            </div>
                            <div>
                                <span>${word5}</span>
                            </div>
                            <div>
                                <span>TOTAL</span>
                            </div>
                        </div>
                    <div class="word-count-container">
                        <div>
                            <span>${(word1.length)*100}</span>
                        </div>
                        <div>
                            <span>${(word2.length)*100}</span>
                        </div>
                        <div>
                            <span>${(word3.length)*100}</span>
                        </div>
                        <div>
                            <span>${(word4.length)*100}</span>
                        </div>
                        <div>
                            <span>${(word5.length)*100}</span>
                        </div>
                        <div>
                            <span>${((word1.length)*100) + ((word2.length)*100) + ((word3.length)*100) + ((word4.length)*100) + ((word5.length)*100)}</span>
                        </div>
                    </div>
                    <div class="unique-words-container">
                        <div id="uniq-con2">
                            <div id="uniq-con">
                                <span>${(uniq1x)*100}</span>
                            </div>
                        </div>
                        <div id="uniq-con2">
                            <div id="uniq-con">
                                <span>${(uniq2x)*100}</span>
                            </div>           
                        </div>
                        <div id="uniq-con2">
                            <div id="uniq-con">
                                <span>${(uniq3x)*100}</span>
                            </div> 
                        </div>
                        <div id="uniq-con2">
                            <div id="uniq-con">
                                <span>${(uniq4x)*100}</span>
                            </div>
                        </div>
                        <div id="uniq-con2">
                            <div id="uniq-con">
                                <span>${(uniq5x)*100}</span>
                            </div>
                        </div>
                        <div id="uniq-con2">
                            <div id="uniq-con">
                                <span>${((uniq1x)*100) + ((uniq2x)*100) + ((uniq3x)*100) + ((uniq4x)*100) + ((uniq5x)*100)}</span>
                            </div>
                        </div> 
                    </div>
                    <div class="time-score-container">
                        <div>
                            <span id='time-score'>${(timerEl.textContent.slice(3)*100)}</span>
                        </div>
                        <div>
                        <span id='time-score'>${(timerEl.textContent.slice(3)*100)}</span>
                        </div>
                        <div>
                        <span id='time-score'>${(timerEl.textContent.slice(3)*100)}</span>
                        </div>
                        <div>
                        <span id='time-score'>${(timerEl.textContent.slice(3)*100)}</span>
                        </div>
                        <div>
                        <span id='time-score'>${(timerEl.textContent.slice(3)*100)}</span>
                        </div>
                        <div>
                        <span id='time-score'>${((timerEl.textContent.slice(3)*100)) * 5}</span>
                        </div>
                    </div>
                    <div class="total-score-container">
                        <div>
                            <span>${((uniq1x)*100) + ((word1.length)*100) + ((timerEl.textContent.slice(3)*100))}</span>
                        </div>
                        <div>
                            <span>${((uniq2x)*100) + ((word2.length)*100) + ((timerEl.textContent.slice(3)*100))}</span>
                        </div>
                        <div>
                            <span>${((uniq3x)*100) + ((word3.length)*100) + ((timerEl.textContent.slice(3)*100))}</span>
                        </div>
                        <div>
                            <span>${((uniq4x)*100) + ((word4.length)*100) + ((timerEl.textContent.slice(3)*100))}</span>
                        </div>
                        <div>
                            <span>${((uniq5x)*100) + ((word5.length)*100) + ((timerEl.textContent.slice(3)*100))}</span>
                        </div>
                        <div>
                            <span>${(((uniq1x)*100) + ((word1.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq2x)*100) + ((word2.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq3x)*100) + ((word3.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq4x)*100) + ((word4.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq5x)*100) + ((word5.length)*100) + ((timerEl.textContent.slice(3)*100)))}</span>
                        </div>
                    </div>
                </div>
                <button class="submit-button" onclick="showLeaderboard();">Leaderboards</button>
                </div>
                
                `
                pushUserData()
                }
                else{
                    timerEl.textContent = `00:${timeCount}`
                }
            }
            countup();
            setTimeout(()=>{
                clearInterval(countit)
            },29000)
        },1000)
    }), 6000)
    

}

/*function countdown(){
    setTimeout(() => {
        timerEl.textContent='00:30'
    }, 6000);
    setTimeout(() => {
        timerEl.textContent='00:29'
    }, 7000);
    setTimeout(() => {
        timerEl.textContent='00:28'
    }, 8000);
    setTimeout(() => {
        timerEl.textContent='00:27'
    }, 9000);
    setTimeout(() => {
        timerEl.textContent='00:26'
    }, 10000);
    setTimeout(() => {
        timerEl.textContent='00:25'
    }, 11000);
    setTimeout(() => {
        timerEl.textContent='00:24'
    }, 12000);
    setTimeout(() => {
        timerEl.textContent='00:23'
    }, 13000);
    setTimeout(() => {
        timerEl.textContent='00:22'
    }, 14000);
    setTimeout(() => {
        timerEl.textContent='00:21'
    }, 15000);
    setTimeout(() => {
        timerEl.textContent='00:20'
    }, 16000);
    setTimeout(() => {
        timerEl.textContent='00:19'
    }, 17000);
    setTimeout(() => {
        timerEl.textContent='00:18'
    }, 18000);
    setTimeout(() => {
        timerEl.textContent='00:17'
    }, 19000);
    setTimeout(() => {
        timerEl.textContent='00:16'
    }, 20000);
    setTimeout(() => {
        timerEl.textContent='00:15'
        timerEl.style.color='#C2000E'
        warningEl.style.display='block'
    }, 21000);
    setTimeout(() => {
        timerEl.textContent='00:14'
        warningEl.style.display='none'
    }, 22000);
    setTimeout(() => {
        timerEl.textContent='00:13'
        warningEl.style.display='block'
        warningTxt.textContent='You have 13 seconds left!'
    }, 23000);
    setTimeout(() => {
        timerEl.textContent='00:12'
        warningEl.style.display='none'
    }, 24000);
    setTimeout(() => {
        timerEl.textContent='00:11'
        warningEl.style.display='block'
        warningTxt.textContent='You have 11 seconds left!'
    }, 25000);
    setTimeout(() => {
        timerEl.textContent='00:10'
        warningEl.style.display='none'
    }, 26000);
    setTimeout(() => {
        timerEl.textContent='00:09'
        warningEl.style.display='block'
        warningTxt.textContent='You have 9 seconds left!'
    }, 27000);
    setTimeout(() => {
        timerEl.textContent='00:08'
        warningEl.style.display='none'
    }, 28000);
    setTimeout(() => {
        timerEl.textContent='00:07'
        warningEl.style.display='block'
        warningTxt.textContent='You have 7 seconds left!'
    }, 29000);
    setTimeout(() => {
        timerEl.textContent='00:06'
        warningEl.style.display='none'
    }, 30000);
    setTimeout(() => {
        timerEl.textContent='00:05'
        warningEl.style.display='block'
        warningTxt.textContent='You have 5 seconds left!'
    }, 31000);
    setTimeout(() => {
        timerEl.textContent='00:04'
        warningEl.style.display='none'
    }, 32000);
    setTimeout(() => {
        timerEl.textContent='00:03'
        warningEl.style.display='block'
        warningTxt.textContent='You have 3 seconds left!'
    }, 33000);
    setTimeout(() => {
        timerEl.textContent='00:02'
        warningEl.style.display='none'
    }, 34000);
    setTimeout(() => {
        timerEl.textContent='00:01'
        warningEl.style.display='block'
        warningTxt.textContent='You have 1 second left!'
    }, 35000);
    setTimeout(() => {
        timerEl.textContent='00:00'
        warningEl.style.display='block'
        warningTxt.textContent='Time up!!!'
        warningEl.style.marginLeft='47%'
    }, 36000);
    setTimeout(()=>{
        if(isGoing === false){

            let leaderboardList = [`${JSON.parse(localStorage.getItem("username"))}`]
            const word1 = inputEl1.value.toUpperCase()
            const word2 = inputEl2.value.toUpperCase()
            const word3 = inputEl3.value.toUpperCase()
            const word4 = inputEl4.value.toUpperCase()
            const word5 = inputEl5.value.toUpperCase()
            const uniq1 = new Set (word1)
            const uniq1x = [...uniq1].length
            const uniq2 = new Set (word2)
            const uniq2x = [...uniq2].length
            const uniq3 = new Set (word3)
            const uniq3x = [...uniq3].length
            const uniq4 = new Set (word4)
            const uniq4x = [...uniq4].length
            const uniq5 = new Set (word5)
            const uniq5x = [...uniq5].length
    
            let totalValue = (((uniq1x)*100) + ((word1.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq2x)*100) + ((word2.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq3x)*100) + ((word3.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq4x)*100) + ((word4.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq5x)*100) + ((word5.length)*100) + ((timerEl.textContent.slice(3)*100)))
                bodyEl.innerHTML = `
                <div class="score-section">
                    <span class="score-title" style="margin-bottom: 2rem; color:white">SCORE BREAKDOWN</span>
                    <div class="upper-score-section">
                        <span>WORDS PLAYED</span>  
                        <span>LETTER COUNT (x100)</span>
                        <span>UNIQUE LETTERS (x100)</span> 
                        <span>TIME (x100)</span>   
                        <span>TOTAL</span>     
                    </div>
                    <div class="scores">
                        <div class="words-played">
                            <div>
                                <span>${word1}</span>
                            </div>
                            <div>
                                <span>${word2}</span>
                            </div>
                            <div>
                                <span>${word3}</span>
                            </div>
                            <div>
                                <span>${word4}</span>
                            </div>
                            <div>
                                <span>${word5}</span>
                            </div>
                            <div>
                                <span>TOTAL</span>
                            </div>
                        </div>
                    <div class="word-count-container">
                        <div>
                            <span>${(word1.length)*100}</span>
                        </div>
                        <div>
                            <span>${(word2.length)*100}</span>
                        </div>
                        <div>
                            <span>${(word3.length)*100}</span>
                        </div>
                        <div>
                            <span>${(word4.length)*100}</span>
                        </div>
                        <div>
                            <span>${(word5.length)*100}</span>
                        </div>
                        <div>
                            <span>${((word1.length)*100) + ((word2.length)*100) + ((word3.length)*100) + ((word4.length)*100) + ((word5.length)*100)}</span>
                        </div>
                    </div>
                    <div class="unique-words-container">
                        <div id="uniq-con2">
                            <div id="uniq-con">
                                <span>${(uniq1x)*100}</span>
                            </div>
                        </div>
                        <div id="uniq-con2">
                            <div id="uniq-con">
                                <span>${(uniq2x)*100}</span>
                            </div>           
                        </div>
                        <div id="uniq-con2">
                            <div id="uniq-con">
                                <span>${(uniq3x)*100}</span>
                            </div> 
                        </div>
                        <div id="uniq-con2">
                            <div id="uniq-con">
                                <span>${(uniq4x)*100}</span>
                            </div>
                        </div>
                        <div id="uniq-con2">
                            <div id="uniq-con">
                                <span>${(uniq5x)*100}</span>
                            </div>
                        </div>
                        <div id="uniq-con2">
                            <div id="uniq-con">
                                <span>${((uniq1x)*100) + ((uniq2x)*100) + ((uniq3x)*100) + ((uniq4x)*100) + ((uniq5x)*100)}</span>
                            </div>
                        </div> 
                    </div>
                    <div class="time-score-container">
                        <div>
                            <span id='time-score'>${(timerEl.textContent.slice(3)*100)}</span>
                        </div>
                        <div>
                        <span id='time-score'>${(timerEl.textContent.slice(3)*100)}</span>
                        </div>
                        <div>
                        <span id='time-score'>${(timerEl.textContent.slice(3)*100)}</span>
                        </div>
                        <div>
                        <span id='time-score'>${(timerEl.textContent.slice(3)*100)}</span>
                        </div>
                        <div>
                        <span id='time-score'>${(timerEl.textContent.slice(3)*100)}</span>
                        </div>
                        <div>
                        <span id='time-score'>${((timerEl.textContent.slice(3)*100)) * 5}</span>
                        </div>
                    </div>
                    <div class="total-score-container">
                        <div>
                            <span>${((uniq1x)*100) + ((word1.length)*100) + ((timerEl.textContent.slice(3)*100))}</span>
                        </div>
                        <div>
                            <span>${((uniq2x)*100) + ((word2.length)*100) + ((timerEl.textContent.slice(3)*100))}</span>
                        </div>
                        <div>
                            <span>${((uniq3x)*100) + ((word3.length)*100) + ((timerEl.textContent.slice(3)*100))}</span>
                        </div>
                        <div>
                            <span>${((uniq4x)*100) + ((word4.length)*100) + ((timerEl.textContent.slice(3)*100))}</span>
                        </div>
                        <div>
                            <span>${((uniq5x)*100) + ((word5.length)*100) + ((timerEl.textContent.slice(3)*100))}</span>
                        </div>
                        <div>
                            <span>${(((uniq1x)*100) + ((word1.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq2x)*100) + ((word2.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq3x)*100) + ((word3.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq4x)*100) + ((word4.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq5x)*100) + ((word5.length)*100) + ((timerEl.textContent.slice(3)*100)))}</span>
                        </div>
                    </div>
                </div>
                <button class="submit-button" onclick="showLeaderboard();">Leaderboards</button>
                </div>
                
                `
                pushUserData()
            }
    }, 36200)

    setTimeout(() => {

    }, 36200);
}*/

function hide(){
    inputCon.style.display='hidden'
}
function error(){
    errorEl.style.display ='flex'
    
}
function wordChecker(){
    try{
        let answer1 = inputEl1.value[0].toUpperCase()
        let answer2 = inputEl2.value[0].toUpperCase()
        let answer3 = inputEl3.value[0].toUpperCase()
        let answer4 = inputEl4.value[0].toUpperCase()
        let answer5 = inputEl5.value[0].toUpperCase()  
        let word1 = inputEl1.value.toUpperCase()
    let word2 = inputEl2.value.toUpperCase()
    let word3 = inputEl3.value.toUpperCase()
    let word4 = inputEl4.value.toUpperCase()
    let word5 = inputEl5.value.toUpperCase()
    
    
    if (answer1 === randomEl.textContent && answer2 === randomEl.textContent && answer3 === randomEl.textContent && answer4 === randomEl.textContent && answer5 === randomEl.textContent){
       /* index = letters.indexOf(randomLetter);
        letters.splice(index, 1);
        console.log(letters);
        hide();
        letterGen();
        countdown();
        console.log(inputEl1.value.length)
        console.log(inputEl1.value.length + inputEl1.value.length) */
        isGoing = true
        console.log(isGoing)
        scoreSection();
        
    }
    else if(inputEl1.value === ' ' || inputEl2.value === ' ' || inputEl3.value === ' ' || inputEl4.value === ' ' || inputEl1.value === ' ' || answer1 != randomEl.textContent || answer2 != randomEl.textContent || answer3 != randomEl.textContent || answer4 != randomEl.textContent || answer5 != randomEl.textContent){
        errormsgEl.textContent = "Kindly enter a valid response"
        console.log("enter correct word")
    }
    }
catch(error){
    console.log(error)
}

    
}
function wordChecker2(){
    let answer1 = inputEl1.value[0].toUpperCase()
    let answer2 = inputEl2.value[0].toUpperCase()
    let answer3 = inputEl3.value[0].toUpperCase()
    let answer4 = inputEl4.value[0].toUpperCase()
    let answer5 = inputEl5.value[0].toUpperCase()

    let word1 = inputEl1.value.toUpperCase()
    let word2 = inputEl2.value.toUpperCase()
    let word3 = inputEl3.value.toUpperCase()
    let word4 = inputEl4.value.toUpperCase()
    let word5 = inputEl5.value.toUpperCase()
    
    if (answer1 === randomEl.textContent && answer2 === randomEl.textContent && answer3 === randomEl.textContent && answer4 === randomEl.textContent && answer5 === randomEl.textContent){
       /* index = letters.indexOf(randomLetter);
        letters.splice(index, 1);
        console.log(letters);
        hide();
        letterGen();
        countdown();
        console.log(inputEl1.value.length)
        console.log(inputEl1.value.length + inputEl1.value.length) */
        

        scoreSection2();
        
    }
}

/*function timeScore(){
    let timeScore = document.getElementById("time-score")
    if(timerEl.textContent = "00:30"){
        timeScore.textContent = "3000"
    }
    if(timerEl.textContent = "00:20"){
        timeScore.textContent = "2000"
    }

}*/
function scoreSection(){ 
    const word1 = inputEl1.value.toUpperCase()
    const word2 = inputEl2.value.toUpperCase()
    const word3 = inputEl3.value.toUpperCase()
    const word4 = inputEl4.value.toUpperCase()
    const word5 = inputEl5.value.toUpperCase()
    const uniq1 = new Set (word1)
    const uniq1x = [...uniq1].length
    const uniq2 = new Set (word2)
    const uniq2x = [...uniq2].length
    const uniq3 = new Set (word3)
    const uniq3x = [...uniq3].length
    const uniq4 = new Set (word4)
    const uniq4x = [...uniq4].length
    const uniq5 = new Set (word5)
    const uniq5x = [...uniq5].length
    console.log(uniq2)
    bodyEl.innerHTML = 
`
<div class="score-section">
    <span class="score-title" style="margin-bottom: 2rem; color:white">SCORE BREAKDOWN</span>
    <div class="upper-score-section">
        <span>WORDS PLAYED</span>  
        <span>LETTER COUNT (x100)</span>
        <span>UNIQUE LETTERS (x100)</span> 
        <span>TIME (x100)</span>   
        <span>TOTAL</span>     
    </div>
    <div class="scores">
        <div class="words-played">
            <div>
                <span>${word1}</span>
            </div>
            <div>
                <span>${word2}</span>
            </div>
            <div>
                <span>${word3}</span>
            </div>
            <div>
                <span>${word4}</span>
            </div>
            <div>
                <span>${word5}</span>
            </div>
            <div>
                <span>TOTAL</span>
            </div>
        </div>
    <div class="word-count-container">
        <div>
            <span>${(word1.length)*100}</span>
        </div>
        <div>
            <span>${(word2.length)*100}</span>
        </div>
        <div>
            <span>${(word3.length)*100}</span>
        </div>
        <div>
            <span>${(word4.length)*100}</span>
        </div>
        <div>
            <span>${(word5.length)*100}</span>
        </div>
        <div>
            <span>${((word1.length)*100) + ((word2.length)*100) + ((word3.length)*100) + ((word4.length)*100) + ((word5.length)*100)}</span>
        </div>
    </div>
    <div class="unique-words-container">
        <div id="uniq-con2">
            <div id="uniq-con">
                <span>${(uniq1x)*100}</span>
            </div>
        </div>
        <div id="uniq-con2">
            <div id="uniq-con">
                <span>${(uniq2x)*100}</span>
            </div>           
        </div>
        <div id="uniq-con2">
            <div id="uniq-con">
                <span>${(uniq3x)*100}</span>
            </div> 
        </div>
        <div id="uniq-con2">
            <div id="uniq-con">
                <span>${(uniq4x)*100}</span>
            </div>
        </div>
        <div id="uniq-con2">
            <div id="uniq-con">
                <span>${(uniq5x)*100}</span>
            </div>
        </div>
        <div id="uniq-con2">
            <div id="uniq-con">
                <span>${((uniq1x)*100) + ((uniq2x)*100) + ((uniq3x)*100) + ((uniq4x)*100) + ((uniq5x)*100)}</span>
            </div>
        </div> 
    </div>
    <div class="time-score-container">
        <div>
            <span id='time-score'>${(timerEl.textContent.slice(3)*100)}</span>
        </div>
        <div>
        <span id='time-score'>${(timerEl.textContent.slice(3)*100)}</span>
        </div>
        <div>
        <span id='time-score'>${(timerEl.textContent.slice(3)*100)}</span>
        </div>
        <div>
        <span id='time-score'>${(timerEl.textContent.slice(3)*100)}</span>
        </div>
        <div>
        <span id='time-score'>${(timerEl.textContent.slice(3)*100)}</span>
        </div>
        <div>
        <span id='time-score'>${((timerEl.textContent.slice(3)*100)) * 5}</span>
        </div>
    </div>
    <div class="total-score-container">
        <div>
            <span>${((uniq1x)*100) + ((word1.length)*100) + ((timerEl.textContent.slice(3)*100))}</span>
        </div>
        <div>
            <span>${((uniq2x)*100) + ((word2.length)*100) + ((timerEl.textContent.slice(3)*100))}</span>
        </div>
        <div>
            <span>${((uniq3x)*100) + ((word3.length)*100) + ((timerEl.textContent.slice(3)*100))}</span>
        </div>
        <div>
            <span>${((uniq4x)*100) + ((word4.length)*100) + ((timerEl.textContent.slice(3)*100))}</span>
        </div>
        <div>
            <span>${((uniq5x)*100) + ((word5.length)*100) + ((timerEl.textContent.slice(3)*100))}</span>
        </div>
        <div>
            <span>${(((uniq1x)*100) + ((word1.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq2x)*100) + ((word2.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq3x)*100) + ((word3.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq4x)*100) + ((word4.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq5x)*100) + ((word5.length)*100) + ((timerEl.textContent.slice(3)*100)))}</span>
        </div>
    </div>
</div>
<button class="submit-button" onclick="showLeaderboard();">Leaderboards</button>
</div>
`
}
function scoreSection2(){ 
    const word1 = inputEl1.value.toUpperCase()
    const word2 = inputEl2.value.toUpperCase()
    const word3 = inputEl3.value.toUpperCase()
    const word4 = inputEl4.value.toUpperCase()
    const word5 = inputEl5.value.toUpperCase()
    const uniq1 = new Set (word1)
    const uniq1x = [...uniq1].length
    const uniq2 = new Set (word2)
    const uniq2x = [...uniq2].length
    const uniq3 = new Set (word3)
    const uniq3x = [...uniq3].length
    const uniq4 = new Set (word4)
    const uniq4x = [...uniq4].length
    const uniq5 = new Set (word5)
    const uniq5x = [...uniq5].length
    console.log(uniq2)
    bodyEl.innerHTML = 
`
<div class="score-section">
    <span class="score-title" style="margin-bottom: 2rem; color:white">SCORE BREAKDOWN</span>
    <div class="upper-score-section">
        <span>WORDS PLAYED</span>  
        <span>LETTER COUNT (x100)</span>
        <span>UNIQUE LETTERS (x100)</span> 
        <span>TIME (x100)</span>   
        <span>TOTAL</span>     
    </div>
    <div class="scores">
        <div class="words-played">
            <div>
                <span>${word1}</span>
            </div>
            <div>
                <span>${word2}</span>
            </div>
            <div>
                <span>${word3}</span>
            </div>
            <div>
                <span>${word4}</span>
            </div>
            <div>
                <span>${word5}</span>
            </div>
            <div>
                <span>TOTAL</span>
            </div>
        </div>
    <div class="word-count-container">
        <div>
            <span>${(word1.length)*100}</span>
        </div>
        <div>
            <span>${(word2.length)*100}</span>
        </div>
        <div>
            <span>${(word3.length)*100}</span>
        </div>
        <div>
            <span>${(word4.length)*100}</span>
        </div>
        <div>
            <span>${(word5.length)*100}</span>
        </div>
        <div>
            <span>${((word1.length)*100) + ((word2.length)*100) + ((word3.length)*100) + ((word4.length)*100) + ((word5.length)*100)}</span>
        </div>
    </div>
    <div class="unique-words-container">
    <div id="uniq-con2">
    <div id="uniq-con">
        <span>${(uniq1x)*100}</span>
    </div>
</div>
<div id="uniq-con2">
    <div id="uniq-con">
        <span>${(uniq2x)*100}</span>
    </div>           
</div>
<div id="uniq-con2">
    <div id="uniq-con">
        <span>${(uniq3x)*100}</span>
    </div> 
</div>
<div id="uniq-con2">
    <div id="uniq-con">
        <span>${(uniq4x)*100}</span>
    </div>
</div>
<div id="uniq-con2">
    <div id="uniq-con">
        <span>${(uniq5x)*100}</span>
    </div>
</div>
<div id="uniq-con2">
    <div id="uniq-con">
        <span>${((uniq1x)*100) + ((uniq2x)*100) + ((uniq3x)*100) + ((uniq4x)*100) + ((uniq5x)*100)}</span>
    </div>
</div> 
    </div>
    <div class="time-score-container">
        <div>
            <span id='time-score'>${(timerEl.textContent.slice(3)*100)}</span>
        </div>
        <div>
        <span id='time-score'>${(timerEl.textContent.slice(3)*100)}</span>
        </div>
        <div>
        <span id='time-score'>${(timerEl.textContent.slice(3)*100)}</span>
        </div>
        <div>
        <span id='time-score'>${(timerEl.textContent.slice(3)*100)}</span>
        </div>
        <div>
        <span id='time-score'>${(timerEl.textContent.slice(3)*100)}</span>
        </div>
        <div>
        <span id='time-score'>${((timerEl.textContent.slice(3)*100)) * 5}</span>
        </div>
    </div>
    <div class="total-score-container">
        <div>
            <span>${((uniq1x)*100) + ((word1.length)*100) + ((timerEl.textContent.slice(3)*100))}</span>
        </div>
        <div>
            <span>${((uniq2x)*100) + ((word2.length)*100) + ((timerEl.textContent.slice(3)*100))}</span>
        </div>
        <div>
            <span>${((uniq3x)*100) + ((word3.length)*100) + ((timerEl.textContent.slice(3)*100))}</span>
        </div>
        <div>
            <span>${((uniq4x)*100) + ((word4.length)*100) + ((timerEl.textContent.slice(3)*100))}</span>
        </div>
        <div>
            <span>${((uniq5x)*100) + ((word5.length)*100) + ((timerEl.textContent.slice(3)*100))}</span>
        </div>
        <div>
            <span>${(((uniq1x)*100) + ((word1.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq2x)*100) + ((word2.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq3x)*100) + ((word3.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq4x)*100) + ((word4.length)*100) + ((timerEl.textContent.slice(3)*100))) + (((uniq5x)*100) + ((word5.length)*100) + ((timerEl.textContent.slice(3)*100)))}</span>
        </div>
    </div>
</div>
<button class="submit-button" onclick="showLeaderboard2();">Leaderboards</button>
</div>
`
}


let testee = "lovely"
let uniqueLetters = (new Set(testee))
let uniqueL = uniqueLetters.toString()
console.log(uniqueL)


someArray = ["i,f,i,s,a,d,s,s,w,s"]
getUniqueArray = (array) => (
[...new Set(array)]
)



function showLeaderboard(){
    let leaderboardList = (JSON.parse(localStorage.getItem("username")))
    leaderboardList.sort((a,b) => {
        return a.totalScore - b.totalScore;
    });
    console.log(leaderboardList)
    bodyEl.innerHTML = 
    `
    <div class="leaderboard-container">
        <div class="leaderboard-title">
            <span>LEADERBOARD</span>
        </div>
        <div class="leaderboard-table">
            <div class="table-titles">
                <div class="username-column">
                    <span>USERNAME</span>
                </div>
            <div class="score-column">
                <span>SCORE</span>
            </div>
            </div>
            <div id="users-scores" class="users-score-container">
                 ${leaderboardList}
            </div>
        </div>
        <a href="index2.html" <button onclick="showIndex()" class="submit-button">Player 2</button></a>
        

    </div>

    `
}

function clearLB(){
    localStorage.clear()
}

function showLeaderboard2(){
    let leaderboardList = (JSON.parse(localStorage.getItem("username")))
    let winnerEl = document.getElementById("winner-el")
    leaderboardList.sort((a,b) => {
        return a.totalScore - b.totalScore;
    });
    console.log(leaderboardList)
    //winner(totalValue, totalValue2, winnerEl);
    
    bodyEl.innerHTML = 
    `
    <div class="leaderboard-container">
        <div class="leaderboard-title">
            <span id="winner-el"></span>
        </div>
        <div class="leaderboard-title">
            <span>LEADERBOARD</span>
        </div>
        <div class="leaderboard-table">
            <div class="table-titles">
                <div class="username-column">
                    <span>USERNAME</span>
                </div>
            <div class="score-column">
                <span>SCORE</span>
            </div>
            </div>
            <div id="users-scores" class="users-score-container">
                 ${leaderboardList}
            </div>
        </div>
        <a style="text-decoration:none;" href="secondpage.html" <button onclick="showIndex(), clearLB()" class="submit-button2">Play again</button></a>
        

    </div>

    `
}






leaderboardList.shift()
console.log(leaderboardList)

function winner(x,y,z){
    if(x > y){
        z.textContent = `Congratulations ${JSON.parse(localStorage.getItem("userID"))}, you win!`
    }
    else if(x < y){
        z.textContent = `Congratulations ${JSON.parse(localStorage.getItem("userID2"))}, you win!`
    }
}


