//tanawon niya an html element na may id na titan-list, himoon niya na reference sa variable na container
const container = document.getElementById("titan-list");

//async function para magamit an await keyword
async function getTitans(){
    //  await fetch mag kuha nan data sa api
    const response = await fetch('https://api.attackontitanapi.com/titans');
    //await response.jason() mag convert nan data sa json format para magamit sa javascript
    const result = await response.json();

<<<<<<< HEAD
    //magkuhan nan list nan titan na ya convert sa jason then return 
=======
>>>>>>> 1b67a6fc9c0b1256d5e7e9f7031f2885fb64699d
    return result.results;
}

//function na magkuha nan ya download na data para ibutang sa html card
function displayTitans(titansArray) {
    //Repeat niya an instructions for every titan in the list
    titansArray.forEach(titan => {
        // this created a new html div for each of the titans
        const titanCard = document.createElement("div");

        //this is for the css, atach niya an titan-card na class sa bago na div
        titanCard.classList.add("titan-card");

        //let statement para ma change ang value nan allegianceClass depende sa allegiance na gi check sa if else.
        let allegianceClass = "allegiance-none";
        //const variable, kuhaon niya an raw data nan allegiance sa api then i convert niya sa lowercace 
        const currentAllegiance = titan.allegiance.toLowerCase();
        
        //this check if an allegiance nan titan sa api is marley
        if (currentAllegiance.includes("marley")) {
            allegianceClass = "allegiance-marley"; //para sa coor nan badge sa css

        //this check if an allegiance nan titan sa api is eldia
        } else if (currentAllegiance.includes("eldia")) {
            allegianceClass = "allegiance-eldia"; //para sa coor nan badge sa css
        }

        //this is for the html content nan titan card, kuhaon niya an name, picture, heigh og abilities nan titan sa api tapos i display niya 
        titanCard.innerHTML = `
            <img src="${titan.img}"/>   <!--ini mag kuha nan url na yaka save sa image property-->
            <div class="card-content">   <!--this create a div para sa content or info nan titan-->
                <h2>${titan.name}</h2>   <!--name of the titan-->
                <p class="info-row"><strong>Height:</strong> ${titan.height}</p>   <!--height of the titan-->
                <p class="info-row"><strong>Abilities:</strong> ${titan.abilities.join(", ")}</p>   <!--abilities of the titan-->
                <span class="allegiance-badge ${allegianceClass}">${titan.allegiance}</span>   <!--allegiance of the titan-->
            </div>
        `;
        //ini an mag display nan titan card sa html page, appendChild mag add nan titanCard sa container
        container.appendChild(titanCard);
    });
}

<<<<<<< HEAD
//async function para magamit an await keyword
async function runCode(){
    //maghuwat ini na matapos ni getTitans() pag download an data tapos save niya sa resultOFGetTitans na variable
    const resultOFGetTitans = await getTitans();

    //print niya an ya fetch na data sa consol
    console.log("Bellow is the result of get titan");
    console.log(resultOFGetTitans);

    // ipasa niya ang ya download na list sa displayTitans function par ahimoon na card
     displayTitans(resultOFGetTitans);
}
//execute niya an runcode function
runCode();
=======
async function runCode(){
    const resultOFGetTitans = await getTitans();

    console.log("Bellow is the result of get titan");
    console.log(resultOFGetTitans);

     displayTitans(resultOFGetTitans);
}
runCode();
>>>>>>> 1b67a6fc9c0b1256d5e7e9f7031f2885fb64699d
