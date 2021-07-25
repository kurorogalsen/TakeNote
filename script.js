class idea{
    constructor(name, description){
        this.name = name;
        this.description = description;
    }
}
const addIcon = document.getElementById("addIcon");
const addIdea = document.getElementById("addIdea");
const mainSection = document.querySelector("main");

addIcon.addEventListener("click", ()=> {
    if(addIdea.style.right === "1%"){
        addIdea.style.right = "-105%";
        addIdea.style.opacity = "0";
    }
    else{
        addIdea.style.right = "1%";
        addIdea.style.opacity = "1";
    }
});

mainSection.addEventListener("click", () =>{
    if(addIdea.style.right === "1%"){
        addIdea.style.right = "-105%";
        addIdea.style.opacity = "0";
    }
})


const validIdea = document.getElementById("validIdea");
const ideaContainer = document.getElementById("ideaContainer");

const allIdea = [];

function updateIdeas(){
    let htmlOutput = "";
    for (let x in allIdea) {
        if(allIdea[x].name != undefined){
            htmlOutput += `
    
            <div class="card col-11 col-sm-9 col-md-5 col-lg-3 column">
                <header class="col-12 row">
                    ${allIdea[x].name}
                    <!-- <img id="exit${x}" width="30" src="exit.png"> -->
                </header>
                <main class="col-12">
                    ${allIdea[x].description}
                </main>
            </div>
            
            `;
        }
    }
    document.getElementById("ideaContainer").innerHTML = htmlOutput;
/* 
    for (const y in allIdea) {
        document.getElementById("exit"+y).addEventListener("click", () => {
            
        delete allIdea[y].name;
        updateIdeas();
        });
    } */
}
updateIdeas();

function deleteIdea(x){
    delete allIdea[x].name;
}

validIdea.addEventListener("click", () => {

    let projectName = document.getElementById("projectName").value;
    let projectDescription = document.getElementById("projectDescription").value;
    if(projectName !== ""){
        let newIdea = new idea(projectName, projectDescription);
        allIdea.push(newIdea);
        updateIdeas();
        document.getElementById("projectDescription").value = "";
        document.getElementById("projectName").value = "";
        projectDescription = document.getElementById("projectName").placeholder = "Give to your idea a title";
        document.getElementById("projectName").style.setProperty('--placeholder-color', 'rgb(41, 85, 47)');
    }
    else{
        projectDescription = document.getElementById("projectName").placeholder = "You forgot to give to your idea a title !!!";
        document.getElementById("projectName").style.setProperty('--placeholder-color', 'red');

    }
})
