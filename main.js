
var levelElem = document.getElementById("level");
var strElem = document.getElementById("strAP");
var dexElem = document.getElementById("dexAP");
var intElem = document.getElementById("intAP");
var lukElem = document.getElementById("lukAP");
var hpElem = document.getElementById("hpAP");
var mpElem = document.getElementById("mpAP");

document.getElementById("level").defaultValue = "200"
document.getElementById("strAP").defaultValue = "0"
document.getElementById("dexAP").defaultValue = "0"
document.getElementById("intAP").defaultValue = "0"
document.getElementById("lukAP").defaultValue = "0"
document.getElementById("hpAP").defaultValue = "0"
document.getElementById("mpAP").defaultValue = "0"

var selectedLevel = parseInt(levelElem.value);
var totalAp;

updateApPoints();
updateHyperStatPoints();

/* Bootstrap popover */
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

/* Bootstrap tooltips */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

/* Event Listeners for Level change */
levelElem.addEventListener('blur', validateRange);
levelElem.addEventListener('blur', updateApPoints);
levelElem.addEventListener('blur', resetHyperStatsToZero);
levelElem.addEventListener('blur', updateHyperStatPoints);
levelElem.addEventListener('blur', calculateHyperStatPoints);

/* Event Listeners for stat change */
strElem.addEventListener('blur', calculateAttributePoints);
dexElem.addEventListener('blur', calculateAttributePoints);
intElem.addEventListener('blur', calculateAttributePoints);
lukElem.addEventListener('blur', calculateAttributePoints);
hpElem.addEventListener('blur', calculateAttributePoints);
mpElem.addEventListener('blur', calculateAttributePoints);

/* Inner ability */
selectinnerAbility1.addEventListener('change', updateInner);
selectinnerAbility2.addEventListener('change', updateInner);
selectinnerAbility3.addEventListener('change', updateInner);

/* Traits */
var dilligence = document.getElementById("dilligence");
var insight = document.getElementById("insight");
var empathy = document.getElementById("empathy");
var charm = document.getElementById("charm");
var ambition = document.getElementById("ambition");
var willpower = document.getElementById("willpower");
dilligence.addEventListener('blur', validateRange);
insight.addEventListener('blur', validateRange);
empathy.addEventListener('blur', validateRange);
charm.addEventListener('blur', validateRange);
ambition.addEventListener('blur', validateRange);
willpower.addEventListener('blur', validateRange);

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

/* Event Listeners for hyper stat changes */
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
createSymbolSelections();
linkSkillButtonEffects();

/* Number validation - set new minimum or maximum allowed values */
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

/* Update new maximum Attribute points */
function updateApPoints() {
	validateRange.call(this);
	var apPointsElem = document.getElementById("apPoints");
	var selectedLevel = parseInt(levelElem.value);
	totalAp = 5 + 5 + (selectedLevel * 5);
	apPointsElem.placeholder = totalAp + " points available";
	strElem.value = 0;
	dexElem.value = 0;
	intElem.value = 0;
	lukElem.value = 0;
	hpElem.value = 0;
	mpElem.value = 0;
	strElem.max = totalAp;
	dexElem.max = totalAp;
	intElem.max = totalAp;
	lukElem.max = totalAp;
	hpElem.max = totalAp;
	mpElem.max = totalAp;
}

/* Calculate used and remaining attribute points, save to placeholder */
function calculateAttributePoints() {
    validateRange.call(this);
    var apPointsElem = document.getElementById("apPoints");
    var strAllocated = parseInt(strElem.value);
    var dexAllocated = parseInt(dexElem.value);
    var intAllocated = parseInt(intElem.value);
    var lukAllocated = parseInt(lukElem.value);
	var hpAllocated = parseInt(hpElem.value);
    var mpAllocated = parseInt(mpElem.value);
    var allocatedAp = strAllocated + dexAllocated + intAllocated + lukAllocated + hpAllocated + mpAllocated;
    var remainingAp = totalAp - allocatedAp;
    apPointsElem.placeholder = remainingAp + " points available";
	/* set new maximum */
    strElem.max = strAllocated + remainingAp;
    dexElem.max = dexAllocated + remainingAp;
    intElem.max = intAllocated + remainingAp;
    lukElem.max = lukAllocated + remainingAp;
	hpElem.max = hpAllocated + remainingAp;
	mpElem.max = mpAllocated + remainingAp;
}

/* Calculate and set allowable hyper stat points based on selected level */
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

/* Dynamic creation of new select level options for hyper stat */
/* Parameters: 1)New maximum level allowed, 2)stat element, 3) current level selected */
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

/* Called on level change, reset all selections */
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

/* Calculate total point cost of current level selection */
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

/* Returns new maximum level based on allocated and remaining points */
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

/* Calculate total point allocation, new maximums, and updates values */
function calculateHyperStatPoints() {
	/* Calculate total assigned points from levels */
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
	
	/* Update placeholder value */
	var remainingHsp = hyperStatPoints - allocatedHS;
    hspPointsElem.placeholder = remainingHsp + " points available";
	
	/* Get new maximum level selection and updates document */
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

/* Create legion board level options */
function legionBoard() {
	var strLeg = document.getElementById("legionStr");
	createSelections(strLeg, 15, 0);
	var dexLeg = document.getElementById("legionDex");
	createSelections(dexLeg, 15, 0);
	var intLeg = document.getElementById("legionInt");
	createSelections(intLeg, 15, 0);
	var lukLeg = document.getElementById("legionLuk");
	createSelections(lukLeg, 15, 0);
	var hpLeg = document.getElementById("legionHp");
	createSelections(hpLeg, 15, 0);
	var mpLeg = document.getElementById("legionMp");
	createSelections(mpLeg, 15, 0);
	var attLeg = document.getElementById("legionAtt");
	createSelections(attLeg, 15, 0);
	var mattLeg = document.getElementById("legionMagAtt");
	createSelections(mattLeg, 15, 0);
	var abLeg = document.getElementById("legionAbnormal");
	createSelections(abLeg, 40, 0);
	var xpLeg = document.getElementById("legionExp");
	createSelections(xpLeg, 40, 0);
	var crLeg = document.getElementById("legionCritRate");
	createSelections(crLeg, 40, 0);
	var bssLeg = document.getElementById("legionBoss");
	createSelections(bssLeg, 40, 0);
	var nmLeg = document.getElementById("legionNormMonDam");
	createSelections(nmLeg, 40, 0);
	var bdLeg = document.getElementById("legionBuffDuration");
	createSelections(bdLeg, 40, 0);
	var iedLeg = document.getElementById("legionIed");
	createSelections(iedLeg, 40, 0);
	var cdLeg = document.getElementById("legionCritDam");
	createSelections(cdLeg, 40, 0);
}

/* Create descending level options for element */
/* Parameters: 1)element, 2) maximum level allowed 3) selectedValue */
function createSelections(elem, max, selectedValue) {
    elem.innerHTML = '';
    for (let i = max; i >= 0; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.text = i;
        if (i == selectedValue) {
            option.selected = true;
        }
        elem.appendChild(option);
    }
}

/* Count current allocated values */
/* Currently unused */
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

function createSymbolSelections() {
	var vjSymbol = document.getElementById("vjSymbol");
	var chuchuSymbol = document.getElementById("chuchuSymbol");
	var lachSymbol = document.getElementById("lachSymbol");
	var arcanaSymbol = document.getElementById("arcanaSymbol");
	var morassSymbol = document.getElementById("morassSymbol");
	var esferaSymbol = document.getElementById("esferaSymbol");
	createSelections(vjSymbol, 20, 20);
	createSelections(chuchuSymbol, 20, 20);
	createSelections(lachSymbol, 20, 20);
	createSelections(arcanaSymbol, 20, 20);
	createSelections(morassSymbol, 20, 20);
	createSelections(esferaSymbol, 20, 20);
	var cerniumSymbol = document.getElementById("cerniumSymbol");
	var arcusSymbol = document.getElementById("arcusSymbol");
	var odiumSymbol = document.getElementById("odiumSymbol");
	var shangSymbol = document.getElementById("shangSymbol");
	var arteriaSymbol = document.getElementById("arteriaSymbol");
	var carcionSymbol = document.getElementById("carcionSymbol");
	createSelections(cerniumSymbol, 11, 11);
	createSelections(arcusSymbol, 11, 11);
	createSelections(odiumSymbol, 11, 11);
	createSelections(shangSymbol, 11, 11);
	createSelections(arteriaSymbol, 11, 11);
	createSelections(carcionSymbol, 11, 11);
}

function updateInner() {
    var ability1 = document.getElementById("selectinnerAbility1");
    var ability2 = document.getElementById("selectinnerAbility2");
    var ability3 = document.getElementById("selectinnerAbility3");
    var ability1options = document.getElementById("selectinnerAbility1").options;
    var ability2options = document.getElementById("selectinnerAbility2").options;
    var ability3options = document.getElementById("selectinnerAbility3").options;
	/* Reset */
	for (var i = 0; i < ability1options.length; i++) {
        ability1options[i].style.display = '';
    }
    for (var i = 0; i < ability2options.length; i++) {
        ability2options[i].style.display = '';
    }
    for (var i = 0; i < ability3options.length; i++) {
        ability3options[i].style.display = '';
    }
	/* Prevent duplicate values */
    if (ability1.value != "none") {
        for (var i = 0; i < ability2options.length; i++) {
            var option = ability2options[i];
            if (ability1.value == option.value) {
                option.style.display = 'none';
            }
        }
        for (var j = 0; j < ability3options.length; j++) {
            var option = ability3options[j];
            if (ability1.value == option.value) {
                option.style.display = 'none';
            }
        }
    }
    if (ability2.value != "none") {
        for (var i = 0; i < ability1options.length; i++) {
            var option = ability1options[i];
            if (ability2.value == option.value) {
                option.style.display = 'none';
            }
        }
        for (var j = 0; j < ability3options.length; j++) {
            var option = ability3options[j];
            if (ability2.value == option.value) {
                option.style.display = 'none';
            }
        }
    }

    if (ability3.value != "none") {
        for (var i = 0; i < ability2options.length; i++) {
            var option = ability2options[i];
            if (ability3.value == option.value) {
                option.style.display = 'none';
            }
        }
        for (var j = 0; j < ability1options.length; j++) {
            var option = ability1options[j];
            if (ability3.value == option.value) {
                option.style.display = 'none';
            }
        }
    }
}

/* Changes link skill toggle button text */
function linkSkillButtonEffects() {
	var ids = ['linkInvincibleBelief', 'linkEmpiricalKnowledge', 'linkAdventurersCuriosity', 'linkThiefsCunning',
    'linkPirateBlessing', 'linkCygnusBlessing', 'linkKnightsWatch', 'linkElvenBlessing', 'linkComboKillBlessing',
    'linkPhantomInstinct', 'linkLightWash', 'linkRunePersistence', 'linkCloseCall', 'linkSpiritOfFreedom',
    'linkWildRage', 'linkFuryUnleashed', 'linkHybridLogic', 'linkTermsAndConditions', 'linkUnfairAdvantage',
    'linkIronWill', 'linkTimeToPrepare', 'linkKeenEdge', 'linkElementalism', 'linkSolus', 'linkTideOfBattle',
    'linkNobleFire', 'linkInnateGift', 'linkBravado', 'linknaturesFriend', 'linkFocusSpirit', 'linkJudgment', 'linkRhinnesBlessing'];

	ids.forEach(function (id) {
		var button = document.getElementById(id);
		button.addEventListener('click', function() {
			if (button.classList.contains('active')) {
				button.innerHTML = '&#10003;';
			} else {
				button.innerHTML = '&#10005;';
			};
		});
	});
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
