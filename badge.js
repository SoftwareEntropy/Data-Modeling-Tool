/* hold equipment stats */
var badgeJobStat = 0; var badgeAllStat = 0; var badgeHp = 0; var badgeMp = 0; var badgeAtt = 0; var badgeMAtt = 0; var badgeBoss = 0; var badgeIed = 0;

/* Update star force options, change image on selection */
function updateBadgeStarForceOptions() {
    var selectedBadge = document.getElementById("selectBadge").value;
    var starForceSelect = document.getElementById("badgeStarForce");
    var badgeEquipImage = document.getElementById("badgeImage2");
	var label = document.getElementById("badgeLabel");
	var badgePot1 = document.getElementById("badgePot1");
	var badgePot2 = document.getElementById("badgePot2");
	var badgePot3 = document.getElementById("badgePot3");
    starForceSelect.innerHTML = "";
    var options = [0];
    switch(selectedBadge) {
        case "crystalVentusBadge":
            badgeEquipImage.src = "images/common/01182087.img.info.icon._outlink.png"; badgeBoss = 0; badgeIed = 0;
			badgePot1.value = ""; badgePot2.value = ""; badgePot3.value = "";
			badgePot1.hidden = true; badgePot2.hidden = true; badgePot3.hidden = true; label.style.display = 'none';
            break;
        case "sevenDaysBadge":
            badgeEquipImage.src = "images/common/01182200.img.info.icon._outlink.png"; badgeBoss = 0; badgeIed = 10;
			badgePot1.value = ""; badgePot2.value = ""; badgePot3.value = "";
			badgePot1.hidden = true; badgePot2.hidden = true; badgePot3.hidden = true; label.style.display = 'none';
            break;
        case "genesisBadge":
            badgeEquipImage.src = "images/common/01182285.img.info.icon._outlink.png"; badgeBoss = 0; badgeIed = 0;
			badgePot1.value = ""; badgePot2.value = ""; badgePot3.value = "";
			badgePot1.hidden = true; badgePot2.hidden = true; badgePot3.hidden = true; label.style.display = 'none';
            break;
        case "ghostShipExorcistBadge":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            badgeEquipImage.src = "images/common/01182060.img.info.icon._outlink.png"; badgeBoss = 0; badgeIed = 0;
			badgePot1.hidden = false; badgePot2.hidden = false; badgePot3.hidden = false; label.style.display = 'block';
            break;
		case "sengokuHakaseBadge":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            badgeEquipImage.src = "images/common/01182273.img.info.icon._outlink.png"; badgeBoss = 0; badgeIed = 0;
			badgePot1.hidden = false; badgePot2.hidden = false; badgePot3.hidden = false; label.style.display = 'block';
            break;	
		case "none":
            badgeEquipImage.src = "images/UIelements/Equip.Equip.Slots.29._outlink.png"; badgeBoss = 0; badgeIed = 0;
			badgePot1.hidden = false; badgePot2.hidden = false; badgePot3.hidden = false; label.style.display = 'block';
            break;
    }
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        option.value = options[i];
        starForceSelect.add(option);
    }
	updateBadgeStarForceStats();
}

/* Calculate and fetch stats */
function updateBadgeStarForceStats() {
	var selectedBadge = document.getElementById("selectBadge").value;
	var starForceSelect = document.getElementById("badgeStarForce").value;
	switch(selectedBadge) {
		/* (itemLevel, starForceLevel, itemType, itemJobStat, itemAllStat, itemHp, itemMP, itemAttack, itemMagAttack) */
        case "crystalVentusBadge":
			output = getItemStats(130, starForceSelect, "badge", 0, 10, 0, 0, 5, 5);
            break;
        case "sevenDaysBadge":
			output = getItemStats(100, starForceSelect, "badge", 0, 7, 0, 0, 7, 7);
            break;
        case "genesisBadge":
			output = getItemStats(200, starForceSelect, "badge", 0, 15, 0, 0, 10, 10);
            break;
        case "ghostShipExorcistBadge":
			output = getItemStats(150, starForceSelect, "badge", 0, 3, 0, 0, 2, 2);
			badgeAtt = 2; badgeMAtt = 2;
            break;
		case "sengokuHakaseBadge":
			output = getItemStats(160, starForceSelect, "badge", 0, 10, 0, 0, 10, 10);
			badgeAtt = 10; badgeMAtt = 10;
            break;
		case "none":
			output = getItemStats(0, starForceSelect, "badge", 0, 0, 0, 0, 0, 0);
            break;	
    }
	badgeJobStat = parseInt(output.jobStat);
	badgeAllStat = parseInt(output.allStat);
	badgeHp = parseInt(output.hp);
	badgeMp = parseInt(output.mp);
	//Note: Badges do not add attack at any stage, use base values.
	//badgeAtt = parseInt(output.att);
	//badgeMAtt = parseInt(output.mAtt);
}