var warriors = [
  {
    name:"Bob",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Mavis",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Morty",
    damage:4,
    health:10,
    warrior:true
  },
  {
    name:"Larry",
    damage:2,
    health:17,
    warrior:false
  }
]

var wrapperEle = document.body.querySelector(".wrapper");
var nameList = ["Bob", "Mavis", "Morty", "Larry"];
for(var i = 0; i<nameList.length; i++){
  var ele = document.createElement("div");
  ele.innerHTML=nameList[i];
  if (nameList[i] == "Mavis") {
    ele.style.color = "Red";
  }
  
  if (nameList[i] == "Larry") {
    ele.style.color = "Red";
    
  }
  
  wrapperEle.appendChild(ele);
}