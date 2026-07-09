const container = document.getElementById("titan-list");

async function getTitans(){
    const response = await fetch('https://api.attackontitanapi.com/titans');
    const result = await response.json();

    return result.results;
}

function displayTitans(titansArray) {
    titansArray.forEach(titan => {
        const titanCard = document.createElement("div");

        titanCard.classList.add("titan-card");

        let allegianceClass = "allegiance-none";
        const currentAllegiance = titan.allegiance.toLowerCase();
        
        if (currentAllegiance.includes("marley")) {
            allegianceClass = "allegiance-marley";
        } else if (currentAllegiance.includes("eldia")) {
            allegianceClass = "allegiance-eldia";
        }

        titanCard.innerHTML = `
            <img src="${titan.img}" alt="${titan.name}" />
            <div class="card-content">
                <h2>${titan.name}</h2>
                <p class="info-row"><strong>Height:</strong> ${titan.height}</p>
                <p class="info-row"><strong>Abilities:</strong> ${titan.abilities.join(", ")}</p>
                <span class="allegiance-badge ${allegianceClass}">${titan.allegiance}</span>
            </div>
        `;

        container.appendChild(titanCard);
    });
}

async function runCode(){
    const resultOFGetTitans = await getTitans();

    console.log("Bellow is the result of get titan");
    console.log(resultOFGetTitans);

     displayTitans(resultOFGetTitans);
}
runCode();
