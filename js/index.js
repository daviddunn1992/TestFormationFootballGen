class Index {

  constructor() { 
      
  }

  init(){
    const configInstance = new LocalConfigParser("match-lineup");
    configInstance.getLocalConfigData().then((data) => this.callBackForConfig(data));
  } 

  callBackForConfig(payload){
    const formationClassInstance = new FormationGen(payload);
    //console.log(formationClassInstance.generateFormationDiv());
    let mainComponent = document.getElementById("mainContainer");
    mainComponent.appendChild(formationClassInstance.generateFormationDiv());

    let introText = document.getElementById("intoText");
    let teamNameComponent = document.getElementById("teamName");
    if (payload.team != null){
      teamNameComponent.innerHTML = payload.team;
      introText.style.display ='block';
    }
  }
}

const indexInstance = new Index();
indexInstance.init();

