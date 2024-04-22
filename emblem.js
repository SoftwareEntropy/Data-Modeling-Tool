/* hold equipment stats */
var emblemJobStat = 0; var emblemAllStat = 0; var emblemHp = 0; var emblemMp = 0; var emblemAtt = 0; var emblemMAtt = 0; var emblemBoss = 0; var emblemIed = 0;

var charClass = document.getElementById("selectClass");
charClass.addEventListener("change", updateEmblemStarForceOptions);
var selectDropdown = document.getElementById("selectEmblem");
selectDropdown.options[3].style.display = "none";

/* Update star force options, change image on selection */
function updateEmblemStarForceOptions() {
    var selectedEmblem = document.getElementById("selectEmblem").value;
    var starForceSelect = document.getElementById("emblemStarForce");
    var emblemEquipImage = document.getElementById("emblemImage2");
	var charClassSelected = charClass.value;
    starForceSelect.innerHTML = "";
	for (var i = 1; i <= 3; i++) {
		selectDropdown.options[i].style.display = "none";
	}
	if (charClassSelected == "xenon") {
		selectDropdown.options[3].style.display = "block";
	} else {
		if (selectedEmblem == "hybridHeart") {
			selectDropdown.selectedIndex = 0;
		};
	}
    var options = [0];
    switch(selectedEmblem) {
        case "mitrasRage":
            emblemEquipImage.src = "images/common/01190557.img.info.icon._outlink.png";
            break;
        case "classEmblem":
            emblemEquipImage.src = "images/common/01191107.img.info.icon._outlink.png";
            break;
		case "hybridHeart":
            emblemEquipImage.src = "images/thief/01190201.img.info.icon._outlink.png";
            break;
		case "none":
			emblemEquipImage.src = "images/UIelements/Equip.Equip.Slots.30._outlink.png";
            break;
    }
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        option.value = options[i];
        starForceSelect.add(option);
    }
	updateEmblemStarForceStats();
}

/* Calculate and fetch stats */
function updateEmblemStarForceStats() {
	var selectedEmblem = document.getElementById("selectEmblem").value;
	var starForceSelect = document.getElementById("emblemStarForce").value;
	switch(selectedEmblem) {
		/* (itemLevel, starForceLevel, itemType, itemJobStat, itemAllStat, itemHp, itemMP, itemAttack, itemMagAttack) */
        case "mitrasRage":
            output = getItemStats(200, starForceSelect, "emblem", 40, 0, 0, 0, 5, 5);
            break;
		case "classEmblem":
            output = getItemStats(100, starForceSelect, "emblem", 0, 10, 0, 0, 2, 2);
            break;
		case "hybridHeart":
            output = getItemStats(100, starForceSelect, "emblem", 0, 0, 300, 100, 2, 2);
            break;
		case "none":
            output = getItemStats(0, starForceSelect, "emblem", 0, 0, 0, 0, 0, 0);
            break;	
    }
	emblemJobStat = parseInt(output.jobStat);
	emblemAllStat = parseInt(output.allStat);
	emblemHp = parseInt(output.hp);
	emblemMp = parseInt(output.mp);
	emblemAtt = parseInt(output.att);
	emblemMAtt = parseInt(output.mAtt);
}