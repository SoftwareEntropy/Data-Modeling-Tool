/* hold equipment stats */
var heartJobStat = 0; var heartAllStat = 0; var heartHp = 0; var heartMp = 0; var heartAtt = 0; var heartMAtt = 0; var heartBoss = 0; var heartIed = 0;

/* Update star force options, change image on selection */
function updateHeartStarForceOptions() {
    var selectedHeart = document.getElementById("selectHeart").value;
    var starForceSelect = document.getElementById("heartStarForce");
    var heartEquipImage = document.getElementById("heartImage2");
	var label = document.getElementById("heartLabel");
	var heartPot1 = document.getElementById("heartPot1");
	var heartPot2 = document.getElementById("heartPot2");
	var heartPot3 = document.getElementById("heartPot3");
    starForceSelect.innerHTML = "";
    var options;
    switch(selectedHeart) {
        case "blackHeart":
            options = [15];
            heartEquipImage.src = "images/common/01672082.img.info.icon._outlink.png";
			heartPot1.value = ""; heartPot2.value = ""; heartPot3.value = "";
			heartPot1.hidden = true; heartPot2.hidden = true; heartPot3.hidden = true; label.style.display = 'none';
            break;
        case "wondroidHeart":
            options = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            heartEquipImage.src = "images/common/01672081.img.info.icon._outlink.png";
			heartPot1.value = ""; heartPot2.value = ""; heartPot3.value = "";
			heartPot1.hidden = false; heartPot2.hidden = false; heartPot3.hidden = false; label.style.display = 'block';
            break;
        case "outlawHeart":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            heartEquipImage.src = "images/common/01672069.img.info.icon._outlink.png";
			heartPot1.value = ""; heartPot2.value = ""; heartPot3.value = ""; 
			heartPot1.hidden = false; heartPot2.hidden = false; heartPot3.hidden = false; label.style.display = 'block';
            break;
		case "none":
            options = [0];
            heartEquipImage.src = "images/UIelements/Equip.Equip.Slots.28._outlink.png";
			heartPot1.hidden = false; heartPot2.hidden = false; heartPot3.hidden = false; label.style.display = 'block';
            break;
    }
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        option.value = options[i];
        starForceSelect.add(option);
    }
	updateHeartStarForceStats();
}

/* Calculate and fetch stats */
function updateHeartStarForceStats() {
	var selectedHeart = document.getElementById("selectHeart").value;
	var starForceSelect = document.getElementById("heartStarForce").value;
	switch(selectedHeart) {
		/* (itemLevel, starForceLevel, itemType, itemJobStat, itemAllStat, itemHp, itemMP, itemAttack, itemMagAttack) */
        case "blackHeart":
			output = getItemStats(120, starForceSelect, "heart", 0, 10, 100, 0, 77, 77);
            break;
        case "wondroidHeart":
			output = getItemStats(120, starForceSelect, "heart", 0, 10, 500, 0, 1, 1);
            break;
        case "outlawHeart":
			output = getItemStats(150, starForceSelect, "heart", 0, 5, 500, 0, 0, 0);
            break;
		case "none":
			output = getItemStats(0, starForceSelect, "heart", 0, 0, 0, 0, 0, 0);
            break;	
    }
	heartJobStat = parseInt(output.jobStat);
	heartAllStat = parseInt(output.allStat);
	heartHp = parseInt(output.hp);
	heartMp = parseInt(output.mp);
	heartAtt = parseInt(output.att);
	heartMAtt = parseInt(output.mAtt);
}