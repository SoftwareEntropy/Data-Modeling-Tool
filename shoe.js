/* hold equipment stats */
var shoeJobStat = 0; var shoeAllStat = 0; var shoeHp = 0; var shoeMp = 0; var shoeAtt = 0; var shoeMAtt = 0;

/* Update star force options, change image on selection */
function updateShoeStarForceOptions() {
    var selectedShoe = document.getElementById("selectShoe").value;
    var starForceSelect = document.getElementById("shoeStarForce");
    var shoeEquipImage = document.getElementById("shoeImage2");
    starForceSelect.innerHTML = "";
    var options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];;
    switch(selectedShoe) {
        case "tyrantShoe":
            options = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            shoeEquipImage.src = "images/common/01072743.img.info.icon._outlink.png";
            break;
        case "absolabShoe":
            shoeEquipImage.src = "images/common/01073032.img.info.icon._outlink.png";
            break;
		case "arcaneShoe":
            shoeEquipImage.src = "images/common/01073159.img.info.icon._outlink.png";
            break;
		case "none":
            options = [0];
            shoeEquipImage.src = "images/UIelements/Equip.Equip.Slots.7._outlink.png";
            break;	
    }
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        option.value = options[i];
        starForceSelect.add(option);
    }
	updateShoeStarForceStats();
}

/* Calculate and fetch stats */
function updateShoeStarForceStats() {
	var selectedShoe = document.getElementById("selectShoe").value;
	var starForceSelect = document.getElementById("shoeStarForce").value;
	switch(selectedShoe) {
		/* (itemLevel, starForceLevel, itemType, itemJobStat, itemAllStat, itemHp, itemMP, itemAttack, itemMagAttack) */
		case "tyrantShoe":
            output = getItemStats(150, starForceSelect, "superior", 0, 50, 0, 0, 30, 30);
            break;
        case "absolabShoe":
            output = getItemStats(160, starForceSelect, "shoe", 20, 0, 0, 0, 5, 5);
            break;
		case "arcaneShoe":
            output = getItemStats(200, starForceSelect, "shoe", 40, 0, 0, 0, 9, 9);
            break;
		case "none":
            output = getItemStats(0, starForceSelect, "shoe", 0, 0, 0, 0, 0, 0);
            break;	
    }
	shoeJobStat = parseInt(output.jobStat);
	shoeAllStat = parseInt(output.allStat);
	shoeHp = parseInt(output.hp);
	shoeMp = parseInt(output.mp);
	shoeAtt = parseInt(output.att);
	shoeMAtt = parseInt(output.mAtt);
}