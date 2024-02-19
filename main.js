/* On run tools */
//var numElement = document.querySelector('input[type="number"]')
//numElement.addEventListener('blur', validateRange);

var levelElem = document.getElementById("level");
var strElem = document.getElementById("strAP");
var dexElem = document.getElementById("dexAP");
var intElem = document.getElementById("intAP");
var lukElem = document.getElementById("lukAP");

document.getElementById("level").defaultValue = "200"
document.getElementById("strAP").defaultValue = "0"
document.getElementById("dexAP").defaultValue = "0"
document.getElementById("intAP").defaultValue = "0"
document.getElementById("lukAP").defaultValue = "0"

var selectedLevel = parseInt(levelElem.value);
var totalAp;
updateApPoints();
updateHyperStatPoints();

levelElem.addEventListener('blur', validateRange);
//levelElem.addEventListener('blur', setToDefaults);
levelElem.addEventListener('blur', updateApPoints);
levelElem.addEventListener('blur', resetHyperStatsToZero);
levelElem.addEventListener('blur', updateHyperStatPoints);
levelElem.addEventListener('blur', calculateHyperStatPoints);
strElem.addEventListener('blur', calculateAttributePoints);
dexElem.addEventListener('blur', calculateAttributePoints);
intElem.addEventListener('blur', calculateAttributePoints);
lukElem.addEventListener('blur', calculateAttributePoints);

/* Hyper stat elements */
var hspPointsElem = document.getElementById("hsPoints");
var strAllocated = document.getElementById("strHS");
var dexAllocated = document.getElementById("dexHS");
var intAllocated = document.getElementById("intHS");
var lukAllocated = document.getElementById("lukHS");
var hpAllocated = document.getElementById("hpHS");
var mpAllocated = document.getElementById("mpHS");
var altManaAllocated = document.getElementById("altManaHS");
var critRateAllocated = document.getElementById("critRateHS");
var critDamageAllocated = document.getElementById("critDamageHS");
var iedAllocated = document.getElementById("iedHS");
var bossAllocated = document.getElementById("bossHS");
var normMonDamAllocated = document.getElementById("normMonDamHS");
var dmgAllocated = document.getElementById("damHS");
var abnormalStatusAllocated = document.getElementById("abnormalStatusHS");
var attAllocated = document.getElementById("attHS");
var expAllocated = document.getElementById("expHS");
var arcaneForceAllocated = document.getElementById("arcaneForceHS");

strAllocated.addEventListener('change', calculateHyperStatPoints);
dexAllocated.addEventListener('change', calculateHyperStatPoints);
intAllocated.addEventListener('change', calculateHyperStatPoints);
lukAllocated.addEventListener('change', calculateHyperStatPoints);
hpAllocated.addEventListener('change', calculateHyperStatPoints);
mpAllocated.addEventListener('change', calculateHyperStatPoints);
altManaAllocated.addEventListener('change', calculateHyperStatPoints);
critRateAllocated.addEventListener('change', calculateHyperStatPoints);
critDamageAllocated.addEventListener('change', calculateHyperStatPoints);
iedAllocated.addEventListener('change', calculateHyperStatPoints);
bossAllocated.addEventListener('change', calculateHyperStatPoints);
normMonDamAllocated.addEventListener('change', calculateHyperStatPoints);
dmgAllocated.addEventListener('change', calculateHyperStatPoints);
abnormalStatusAllocated.addEventListener('change', calculateHyperStatPoints);
attAllocated.addEventListener('change', calculateHyperStatPoints);
expAllocated.addEventListener('change', calculateHyperStatPoints);
arcaneForceAllocated.addEventListener('change', calculateHyperStatPoints);
calculateHyperStatPoints();
legionBoard();
/* end on run tools */

/* number validation*/
function validateRange() {
    var value = parseInt(this.value) || 0;
    if (this.value === "") {
        this.value = 0;
    } else if (this.max && value > parseInt(this.max)) {
        this.value = this.max;
    } else if (this.min && value < parseInt(this.min)) {
        this.value = this.min;
    }
}

/* reset to start values */
/*function setToDefaults() {
	strElem.value = 0;
	dexElem.value = 0;
	intElem.value = 0;
	lukElem.value = 0;
	validateRange.call(strElem);
    validateRange.call(dexElem);
    validateRange.call(intElem);
    validateRange.call(lukElem);
}*/

function updateApPoints() {
	validateRange.call(this);
	var apPointsElem = document.getElementById("apPoints");
	var selectedLevel = parseInt(levelElem.value);
	totalAp = 5 + 5 + (selectedLevel * 5);
	apPointsElem.placeholder = totalAp + " points available";
	strElem.max = totalAp;
	dexElem.max = totalAp;
	intElem.max = totalAp;
	lukElem.max = totalAp;
}

/* Old */
/*function calculateAttributePoints() {
	validateRange.call(this);
	var selectedLevel = parseInt(document.getElementById("level").value);
	var strAllocated = parseInt(document.getElementById("strAP").value);
	var dexAllocated = parseInt(document.getElementById("dexAP").value);
	var intAllocated = parseInt(document.getElementById("intAP").value);
	var lukAllocated = parseInt(document.getElementById("lukAP").value);
	var allocatedAp = strAllocated + dexAllocated + intAllocated + lukAllocated;
	var totalAp = 5 + 5 + (selectedLevel * 5);
	var remainingAp = totalAp - allocatedAp;
	apPointsElem.placeholder = "Available AP: " + remainingAp;
	var display = document.getElementById("apPoints");
	display.placeholder =  totalAp;
	if (remainingAp > 0) {
		if (strAllocated < totalAp) {
			document.getElementById("strAP").max = strAllocated + remainingAp;
		}
		if (dexAllocated < totalAp) {
			document.getElementById("dexAP").max = dexAllocated + remainingAp;
		}
		if (intAllocated < totalAp) {
			document.getElementById("intAP").max = intAllocated + remainingAp;
		}
		if (lukAllocated < totalAp) {
			document.getElementById("lukAP").max = lukAllocated + remainingAp;
		}
	}
}*/

function calculateAttributePoints() {
    validateRange.call(this);
    var apPointsElem = document.getElementById("apPoints");
    var strAllocated = parseInt(strElem.value);
    var dexAllocated = parseInt(dexElem.value);
    var intAllocated = parseInt(intElem.value);
    var lukAllocated = parseInt(lukElem.value);
    var allocatedAp = strAllocated + dexAllocated + intAllocated + lukAllocated;
    var remainingAp = totalAp - allocatedAp;
    apPointsElem.placeholder = remainingAp + " points available";
	
    strElem.max = strAllocated + remainingAp;
    dexElem.max = dexAllocated + remainingAp;
    intElem.max = intAllocated + remainingAp;
    lukElem.max = lukAllocated + remainingAp;
}

function updateHyperStatPoints() {
	var selectedLevel = parseInt(levelElem.value);
	var hsPointsElem = document.getElementById("hsPoints");
	if (selectedLevel >= 200 && selectedLevel <= 209) {
		hyperStatPoints = (9 * selectedLevel - 1461);
	}
	if (selectedLevel >= 210 && selectedLevel <= 219) {
		hyperStatPoints = (10 * selectedLevel - 1670);
	}
	if (selectedLevel >= 220 && selectedLevel <= 229) {
		hyperStatPoints = (11 * selectedLevel - 1889);
	}
	if (selectedLevel >= 230 && selectedLevel <= 239) {
		hyperStatPoints = (12 * selectedLevel - 2118);
	}
	if (selectedLevel >= 240 && selectedLevel <= 249) {
		hyperStatPoints = (13 * selectedLevel - 2357);
	}
	if (selectedLevel >= 250 && selectedLevel <= 259) {
		hyperStatPoints = (14 * selectedLevel - 2606);
	}
	if (selectedLevel >= 260 && selectedLevel <= 269) {
		hyperStatPoints = (15 * selectedLevel - 2865);
	}
	if (selectedLevel >= 270 && selectedLevel <= 279) {
		hyperStatPoints = (16 * selectedLevel - 3134);
	}
	if (selectedLevel >= 280 && selectedLevel <= 289) {
		hyperStatPoints = (17 * selectedLevel - 3413);
	}
	if (selectedLevel >= 290 && selectedLevel <= 299) {
		hyperStatPoints = (18 * selectedLevel - 3702);
	}
	if (selectedLevel >= 300) {
		hyperStatPoints = (1699);
	}
	hsPointsElem.placeholder = hyperStatPoints + " points available";
}

function updateNewHyperstatOptions(max, elem, currentVal) {
    elem.innerHTML = '';
    for (let i = max; i >= 0; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.text = i;
        if (i == currentVal) {
            option.selected = true;
        }
        elem.appendChild(option);
    }
}

function resetHyperStatsToZero() {
	strAllocated.value = 0;
	dexAllocated.value = 0;
	intAllocated.value = 0;
	lukAllocated.value = 0;
	hpAllocated.value = 0;
	mpAllocated.value = 0;
	altManaAllocated.value = 0;
	critRateAllocated.value = 0;
	critDamageAllocated.value = 0;
	iedAllocated.value = 0;
	bossAllocated.value = 0;
	normMonDamAllocated.value = 0;
	dmgAllocated.value = 0;
	abnormalStatusAllocated.value = 0;
	attAllocated.value = 0;
	expAllocated.value = 0;
	arcaneForceAllocated.value = 0;
}

function calculateHyperStatAllocation(statLevel) {
	var level = parseInt(statLevel);
	var totalCost = 0;
	switch (level) {
		case 15:
			totalCost = 550;
			break;
		case 14:
			totalCost = 440;
			break;
		case 13:
			totalCost = 345;
			break;
		case 12:
			totalCost = 265;
			break;
		case 11:
			totalCost = 200;
			break;
		case 10:
			totalCost = 150;
			break;
		case 9:
			totalCost = 115;
			break;
		case 8:
			totalCost = 85;
			break;
		case 7:
			totalCost = 60;
			break;
		case 6:
			totalCost = 40;
			break;
		case 5:
			totalCost = 25;
			break;
		case 4:
			totalCost = 15;
			break;
		case 3:
			totalCost = 7;
			break;
		case 2:
			totalCost = 3;
			break;
		case 1:
			totalCost = 1;
			break;
		case 0:
			totalCost = 0;
			break;
	}
	return totalCost;
}

function getNewHyperstatMaximums(remainingPoints, allocatedPoints) {
	if (remainingPoints + allocatedPoints >= 550) {
		return 15;
	} 
	if (remainingPoints + allocatedPoints >= 440) {
		return 14;
	}
	if (remainingPoints + allocatedPoints >= 345) {
		return 13;
	}
	if (remainingPoints + allocatedPoints >= 265) {
		return 12;
	}
	if (remainingPoints + allocatedPoints >= 200) {
		return 11;
	}
	if (remainingPoints + allocatedPoints >= 150) {
		return 10;
	}
	if (remainingPoints + allocatedPoints >= 115) {
		return 9;
	}
	if (remainingPoints + allocatedPoints >= 85) {
		return 8;
	}
	if (remainingPoints + allocatedPoints >= 60) {
		return 7;
	}
	if (remainingPoints + allocatedPoints >= 40) {
		return 6;
	}
	if (remainingPoints + allocatedPoints >= 25) {
		return 5;
	}
	if (remainingPoints + allocatedPoints >= 15) {
		return 4;
	}
	if (remainingPoints + allocatedPoints >= 7) {
		return 3;
	}
	if (remainingPoints + allocatedPoints >= 3) {
		return 2;
	}
	if (remainingPoints + allocatedPoints >= 1) {
		return 1;
	}
	return 0;
}


function calculateHyperStatPoints() {
    var strAlloc = calculateHyperStatAllocation(parseInt(strAllocated.value));
	var dexAlloc = calculateHyperStatAllocation(parseInt(dexAllocated.value));
	var intAlloc = calculateHyperStatAllocation(parseInt(intAllocated.value));
	var lukAlloc = calculateHyperStatAllocation(parseInt(lukAllocated.value));
	var hpAlloc = calculateHyperStatAllocation(parseInt(hpAllocated.value));
	var mpAlloc = calculateHyperStatAllocation(parseInt(mpAllocated.value));
	var altManaAlloc = calculateHyperStatAllocation(parseInt(altManaAllocated.value));
	var critRateAlloc = calculateHyperStatAllocation(parseInt(critRateAllocated.value));
	var critDamageAlloc = calculateHyperStatAllocation(parseInt(critDamageAllocated.value));
	var iedAlloc= calculateHyperStatAllocation(parseInt(iedAllocated.value));
	var bossAlloc = calculateHyperStatAllocation(parseInt(bossAllocated.value));
	var normMonDamAlloc = calculateHyperStatAllocation(parseInt(normMonDamAllocated.value));
	var dmgAlloc = calculateHyperStatAllocation(parseInt(dmgAllocated.value));
	var abnormalStatusAlloc = calculateHyperStatAllocation(parseInt(abnormalStatusAllocated.value));
	var attAlloc = calculateHyperStatAllocation(parseInt(attAllocated.value));
	var expAlloc = calculateHyperStatAllocation(parseInt(expAllocated.value));
	var arcaneForceAlloc = calculateHyperStatAllocation(parseInt(arcaneForceAllocated.value));
    var allocatedHS = strAlloc + dexAlloc + intAlloc + lukAlloc + hpAlloc +mpAlloc + altManaAlloc
		+ critRateAlloc + critDamageAlloc + iedAlloc + bossAlloc + normMonDamAlloc + dmgAlloc
		+ abnormalStatusAlloc + attAlloc +expAlloc + arcaneForceAlloc;
    var remainingHsp = hyperStatPoints - allocatedHS;
	
    hspPointsElem.placeholder = remainingHsp + " points available";

    var newStrMax = getNewHyperstatMaximums(remainingHsp, strAlloc);
	
	updateNewHyperstatOptions(newStrMax, strAllocated, strAllocated.value);
	
	var newDexMax = getNewHyperstatMaximums(remainingHsp, dexAlloc);
	updateNewHyperstatOptions(newDexMax, dexAllocated, dexAllocated.value);
	var newIntMax = getNewHyperstatMaximums(remainingHsp, intAlloc);
	updateNewHyperstatOptions(newIntMax, intAllocated, intAllocated.value);
	var newLukMax = getNewHyperstatMaximums(remainingHsp, lukAlloc);
	updateNewHyperstatOptions(newLukMax, lukAllocated, lukAllocated.value);
	var newHpMax = getNewHyperstatMaximums(remainingHsp, hpAlloc);
	updateNewHyperstatOptions(newHpMax, hpAllocated, hpAllocated.value);
	var newMpMax = getNewHyperstatMaximums(remainingHsp, mpAlloc);
	updateNewHyperstatOptions(newMpMax, mpAllocated, mpAllocated.value);
	var newAltManaMax = getNewHyperstatMaximums(remainingHsp, altManaAlloc);
	updateNewHyperstatOptions(newAltManaMax, altManaAllocated, altManaAllocated.value);
	var newCritRateMax = getNewHyperstatMaximums(remainingHsp, critRateAlloc);
	updateNewHyperstatOptions(newCritRateMax, critRateAllocated, critRateAllocated.value);
	var newCritDamageMax = getNewHyperstatMaximums(remainingHsp, critDamageAlloc);
	updateNewHyperstatOptions(newCritDamageMax, critDamageAllocated, critDamageAllocated.value);
	var newIedMax = getNewHyperstatMaximums(remainingHsp, iedAlloc);
	updateNewHyperstatOptions(newIedMax, iedAllocated, iedAllocated.value);
	var newBossMax = getNewHyperstatMaximums(remainingHsp, bossAlloc);
	updateNewHyperstatOptions(newBossMax, bossAllocated, bossAllocated.value);
	var newNormMonDamMax = getNewHyperstatMaximums(remainingHsp, normMonDamAlloc);
	updateNewHyperstatOptions(newNormMonDamMax, normMonDamAllocated, normMonDamAllocated.value);
	var newDmgMax = getNewHyperstatMaximums(remainingHsp, dmgAlloc);
	updateNewHyperstatOptions(newDmgMax, dmgAllocated, dmgAllocated.value);
	var newStatusMax = getNewHyperstatMaximums(remainingHsp, abnormalStatusAlloc);
	updateNewHyperstatOptions(newStatusMax, abnormalStatusAllocated, abnormalStatusAllocated.value);
	var newAttMax = getNewHyperstatMaximums(remainingHsp, attAlloc);
	updateNewHyperstatOptions(newAttMax, attAllocated, attAllocated.value);
	var newExpMax = getNewHyperstatMaximums(remainingHsp, expAlloc);
	updateNewHyperstatOptions(newExpMax, expAllocated, expAllocated.value);
	var newArcMax = getNewHyperstatMaximums(remainingHsp, arcaneForceAlloc);
	updateNewHyperstatOptions(newArcMax, arcaneForceAllocated, arcaneForceAllocated.value);
}

function legionBoard() {
	var strLeg = document.getElementById("legionStr");
	createLegionBoardSelections(strLeg, 15);
	var strLeg = document.getElementById("legionDex");
	createLegionBoardSelections(strLeg, 15);
	var strLeg = document.getElementById("legionInt");
	createLegionBoardSelections(strLeg, 15);
	var strLeg = document.getElementById("legionLuk");
	createLegionBoardSelections(strLeg, 15);
	var strLeg = document.getElementById("legionHp");
	createLegionBoardSelections(strLeg, 15);
	var strLeg = document.getElementById("legionMp");
	createLegionBoardSelections(strLeg, 15);
	var strLeg = document.getElementById("legionAtt");
	createLegionBoardSelections(strLeg, 15);
	var strLeg = document.getElementById("legionMagAtt");
	createLegionBoardSelections(strLeg, 15);
	var strLeg = document.getElementById("legionAbnormal");
	createLegionBoardSelections(strLeg, 40);
	var strLeg = document.getElementById("legionExp");
	createLegionBoardSelections(strLeg, 40);
	var strLeg = document.getElementById("legionCritRate");
	createLegionBoardSelections(strLeg, 40);
	var strLeg = document.getElementById("legionBoss");
	createLegionBoardSelections(strLeg, 40);
	var strLeg = document.getElementById("legionNormMonDam");
	createLegionBoardSelections(strLeg, 40);
	var strLeg = document.getElementById("legionBuffDuration");
	createLegionBoardSelections(strLeg, 40);
	var strLeg = document.getElementById("legionIed");
	createLegionBoardSelections(strLeg, 40);
	var strLeg = document.getElementById("legionCritDam");
	createLegionBoardSelections(strLeg, 40);
}

function createLegionBoardSelections(elem, max) {
    elem.innerHTML = '';
    for (let i = max; i >= 0; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.text = i;
        if (i == 0) {
            option.selected = true;
        }
        elem.appendChild(option);
    }
}

function countLegionBoardSquares() {
	var strLeg = document.getElementById("legionStr").value;
	var strLeg = document.getElementById("legionDex").value;
	var strLeg = document.getElementById("legionInt").value;
	var strLeg = document.getElementById("legionLuk").value;
	var strLeg = document.getElementById("legionHp").value;
	var strLeg = document.getElementById("legionMp").value;
	var strLeg = document.getElementById("legionAtt").value;
	var strLeg = document.getElementById("legionMagAtt").value;
	var strLeg = document.getElementById("legionAbnormal").value;
	var strLeg = document.getElementById("legionExp").value;
	var strLeg = document.getElementById("legionCritRate").value;
	var strLeg = document.getElementById("legionBoss").value;
	var strLeg = document.getElementById("legionNormMonDam").value;
	var strLeg = document.getElementById("legionBuffDuration").value;
	var strLeg = document.getElementById("legionIed").value;
	var strLeg = document.getElementById("legionCritDam").value;
}


