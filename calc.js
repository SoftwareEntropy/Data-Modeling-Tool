/* base stats */
var charLevel; var charClass; var classType; var primaryStat; var cStr; var cDex; var cInt; var cLuk; var att; var mAtt; var hp; var mp; var arcaneForce; var sacredForce;
var finalStr; var finalDex; var finalInt; var finalLuk; var finalHp;
/* multipliers */
var percentStr; var percentDex; var percentInt; var percentLuk; var percentAllStat; var percentHp; var percentMp;
var critRate; var critDmg; var bossDmg; var dmg; var monsterDmg; var ied; var abnormalStatusDmg;
var percentAtt; var percentMagAtt; var finalDamage;
/* special stats */
var cdSkipChance; var cdReductionSec; var cdReductionPercent; var passiveSkills; var buffDuration; var elementalIgnore; var tripleScaling;
var weaponAttackSpeed; /* use new cal  avg(4), slow(2) */ var weaponMultiplier; var lapisMultiplier; var lapisSpd; var lazuliMultiplier; var lazuliSpd;
/* trackers */
var hasTermsAndConditions = false; var ozRingLv;
var genesisWeapon; var pitchedSet; var rootAbyssSet; var absolabSet; var arcaneSet; var eternalSet; var golluxSet; var dawnSet;
var bossSet; var monsterParkSet;
/* combat only stats */
var combatDmg; var combatIed;

// Apply event listeners to all buttons
const selectElements = document.querySelectorAll('.form-select');
const inputElements = document.querySelectorAll('.form-control');
const buttonElements = document.querySelectorAll('.linkbtn');
selectElements.forEach(element => {
    element.addEventListener('change', aggregate);
});
inputElements.forEach(element => {
    element.addEventListener('change', aggregate);
});
buttonElements.forEach(element => {
    element.addEventListener('click', aggregate);
});

// Load functions
aggregate();

function aggregate() {
	clearValues();
	getSpecification();
	designateClassAndPrimaryStat();
	getAttributeAllocation();
	getInnerAbilitySelections();
	getTraitsBonuses();
	getHyperStatAllocation();
	getLinkSkillSelections();
	getFamiliarPotentialSelections();
	getFamiliarBadgeSelections();
	getLegionBoardSelections();
	getLegionMemberSelections();

	updateWeaponData();
	updateSubWeaponData();
	updateEquipmentData();

	editEquipmentImages();
	getSetEffects();
	getSetStats();
	getEquipmentPotentials();
	getAdditionalStats();
	getSymbolStats();
	//applyRebootPassive
	updateStatsTable();
}

function clearValues() {
	/* base stats */
	charLevel = 0; charClass = "none"; classType = "none"; primaryStat = "none";
	cStr = 0; cDex = 0; cInt = 0; cLuk = 0; att = 0; mAtt = 0; hp = 0; mp = 0; arcaneForce = 0; sacredForce = 0;
	finalStr  = 0; finalDex = 0; finalInt = 0; finalLuk = 0; finalHp = 0;
	/* multipliers */
	percentStr = 0; percentDex = 0; percentInt = 0; percentLuk = 0; percentAllStat = 0; percentHp = 0; percentMp = 0;
	critRate = 0; critDmg = 0; bossDmg = 0; dmg = 0; monsterDmg = 0; ied = []; abnormalStatusDmg = 0;
	percentAtt = 0; percentMagAtt = 0; finalDamage = 0;
	/* special stats */
	cdSkipChance = 0; cdReductionSec = 0; cdReductionPercent = 0; passiveSkills = 0; buffDuration = 0; elementalIgnore = []; tripleScaling = false;
	weaponAttackSpeed = 0; weaponMultiplier = 0; lapisMultiplier = 1.49; lapisSpd = 8; lazuliMultiplier = 1.34; lazuliSpd = 6;
	/* trackers */
	hasTermsAndConditions = false; ozRingLv = 0;
	genesisWeapon = 0; pitchedSet = 0; rootAbyssSet = 0; absolabSet = 0; arcaneSet = 0; eternalSet = 0; golluxSet = 0; dawnSet = 0;
	bossSet = 0; monsterParkSet = 0;
	/* combat only stats */
	combatDmg = 0; combatIed = [];
}

function getSpecification() {
	/* get class name, selected level */
	charClass = document.getElementById("selectClass").value;
	charLevel = parseInt(document.getElementById("level").value);
	let selectedServer = document.getElementById("selectServer").value;
	if (selectedServer == "Heroic") {
		if (charLevel == 300) {
			finalDamage += 70; //300
		}
		else {
			finalDamage += 65; //250+
		}
	}
}

function designateClassAndPrimaryStat() {
	let selection = document.getElementById("selectClass").value;
	switch (selection) {
		case "adele":
		case "aran":
		case "blaster":
		case "darkKnight":
		case "dawnWarrior":
		case "demonSlayer":
		case "hayato":
		case "hero":
		case "kaiser":
		case "mihile":
		case "paladin":
		case "zero":
		case "demonAvenger":
		case "none":
			classType = "warrior";
			primaryStat = "str";
			break;
		case "bowmaster":
		case "kain":
		case "marksman":
		case "mercedes":
		case "pathfinder":
		case "wildHunter":
		case "windArcher":
			classType = "bowman";
			primaryStat = "dex";
			break;
		case "archMageIceLightning":
		case "archMageFirePoison":
		case "battleMage":
		case "beastTamer":
		case "bishop":
		case "blazeWizard":
		case "evan":
		case "illium":
		case "kanna":
		case "kinesis":
		case "lara":
		case "luminous":
			classType = "magician";
			primaryStat = "int";
			break;
		case "hoyoung":
		case "khali":
		case "nightLord":
		case "nightWalker":
		case "phantom":
			classType = "thief";
			primaryStat = "luk";
			break;
		case "cadena": // triple stat scaling
		case "dualBlade": // triple stat scaling
		case "shadower": // triple stat scaling
		case "xenon": // triple stat scaling
			classType = "thief";
			primaryStat = "luk";
			tripleScaling = true;
			break;	
		case "ark":
		case "buccaneer":
		case "cannoneer":
		case "shade":
		case "thunderBreaker":
			classType = "pirate";
			primaryStat = "str";
			break;
		case "angelicBuster":	
		case "corsair":	
		case "mechanic":
			classType = "pirate";
			primaryStat = "dex";
			break;
		default:
			classType = "none";
			primaryStat = "none";
			break;
	}
};

function getAttributeAllocation() {
	/* get allocated attribute points */
	cStr = parseInt(document.getElementById("strAP").value) + 4;
	cDex = parseInt(document.getElementById("dexAP").value) + 4;
	cInt = parseInt(document.getElementById("intAP").value) + 4;
	cLuk = parseInt(document.getElementById("lukAP").value) + 4;
	hp += 545 + 18 * parseInt(document.getElementById("hpAP").value); //DA
	mp = 5 + 108 + 8.8 * parseInt(document.getElementById("mpAP").value); //Mage
}

function getInnerAbilitySelections() {
	/* get inner ability selections */
	var inner1 = document.getElementById("selectinnerAbility1").value;
	var subsidiary = [
		document.getElementById("selectinnerAbility2").value,
		document.getElementById("selectinnerAbility3").value
		];
	switch (inner1) {
		case "attSpeed":
			weaponAttackSpeed += 1;
			break;
		case "wepAtt":
			att += 30;
			break;
		case "magAtt":
			mAtt += 30;
			break;
		case "crit":
			critRate += 30;
			break;
		case "hp":
			percentHp += 20;
			break;
		case "boss":
			bossDmg += 20;
			break;
		case "norm":
			monsterDmg += 10;
			break;
		case "abn":
			abnormalStatusDmg += 10;
			break;
		case "cdSkip":
			cdSkipChance += 20;
			break;
		case "passive+1":
			passiveSkills += 1;
			break;
		case "buff":
			buffDuration += 50;
			break;
		default:
			/* skip drop rate, meso increase */
			break;
	}
	subsidiary.forEach(function(innerAbility) {
		switch (innerAbility) {
			case "wepAtt":
				att += 21;
				break;
			case "magAtt":
				mAtt += 21;
				break;
			case "crit":
				critRate += 20;
				break;
			case "hp":
				percentHp += 10;
				break;
			case "boss":
				bossDmg += 10;
				break;
			case "norm":
				monsterDmg += 8;
				break;
			case "abn":
				abnormalStatusDmg += 8;
				break;
			case "cdSkip":
				cdSkipChance += 8;
				break;
			case "buff":
				buffDuration += 38;
				break;
			default:
				/* omit drop rate, meso increase */
				break;
		}
	});
}

function getTraitsBonuses() {
	/* traits bonuses */
	// Empathy
	buffDuration += Math.floor(parseInt(document.getElementById("empathy").value) / 10);
	mp += Math.floor(parseInt(document.getElementById("empathy").value) / 5) * 100;
	// Ambition
	ied.push(Math.floor(parseInt(document.getElementById("ambition").value) / 5) * .5);
	// Insight
	elementalIgnore.push(Math.floor(parseInt(document.getElementById("insight").value) / 10) * .5);
	// Willpower
	hp += (Math.floor(parseInt(document.getElementById("willpower").value) / 5) * 100);
	/* skip willpower +5 def, +1 abnormal status resist per 5 levels*/
}

function getHyperStatAllocation() {
	/* hyper stat bonuses */
	finalStr += (parseInt(document.getElementById("strHS").value) * 30);
	finalDex += (parseInt(document.getElementById("dexHS").value) * 30);
	finalInt += (parseInt(document.getElementById("intHS").value) * 30);
	finalLuk += (parseInt(document.getElementById("lukHS").value) * 30);
	percentHp += (parseInt(document.getElementById("hpHS").value) * 2);
	percentMp += (parseInt(document.getElementById("mpHS").value) * 2);
	critDmg += parseInt(document.getElementById("critDamageHS").value);
	ied.push(parseInt(document.getElementById("iedHS").value) * 3);
	dmg += (parseInt(document.getElementById("damHS").value) * 3);
	att += (parseInt(document.getElementById("attHS").value)* 3);
	mAtt += (parseInt(document.getElementById("attHS").value) * 3);
	if (parseInt(document.getElementById("critRateHS").value) <= 5) {
		critRate += parseInt(document.getElementById("critRateHS").value);
	} else {
		critRate += 5 + ((parseInt(document.getElementById("critRateHS").value) - 5) * 2);
	}
	if (parseInt(document.getElementById("bossHS").value) <= 5) {
		bossDmg += (parseInt(document.getElementById("bossHS").value) * 3);
	} else {
		bossDmg += (5 * 3) + ((parseInt(document.getElementById("bossHS").value) - 5) * 4);
	}
	if (parseInt(document.getElementById("normMonDamHS").value) <= 5) {
		monsterDmg += (parseInt(document.getElementById("normMonDamHS").value) * 3);
	} else {
		monsterDmg += ((5 * 3) + ((parseInt(document.getElementById("normMonDamHS").value) - 5) * 4));
	}
	if (parseInt(document.getElementById("arcaneForceHS").value) <= 10) {
		arcaneForce += (parseInt(document.getElementById("arcaneForceHS").value) * 5);
	} else {
		arcaneForce += (10 * 5) + ((parseInt(document.getElementById("arcaneForceHS").value) - 10) * 10);
	}
	/* omit df/tf/pp, status resist, bonus exp */
}

function getLinkSkillSelections() {
	/* add link skill bonuses */
	/* assume 100% uptime, proportional damage increase */
	var ids = ['linkInvincibleBelief', 'linkEmpiricalKnowledge', 'linkAdventurersCuriosity', 'linkThiefsCunning',
    'linkPirateBlessing', 'linkCygnusBlessing', 'linkKnightsWatch', 'linkElvenBlessing', 'linkComboKillBlessing',
    'linkPhantomInstinct', 'linkLightWash', 'linkRunePersistence', 'linkCloseCall', 'linkSpiritOfFreedom',
    'linkWildRage', 'linkFuryUnleashed', 'linkHybridLogic', 'linkTermsAndConditions', 'linkUnfairAdvantage',
    'linkIronWill', 'linkTimeToPrepare', 'linkKeenEdge', 'linkElementalism', 'linkSolus', 'linkTideOfBattle',
    'linkNobleFire', 'linkInnateGift', 'linkBravado', 'linknaturesFriend', 'linkFocusSpirit', 'linkJudgment', 'linkRhinnesBlessing'];

	ids.forEach(function (id) {
		var selectedLinkSkill = document.getElementById(id);
		if (selectedLinkSkill.classList.contains('active')) {
			if (id == 'linkEmpiricalKnowledge') {
				combatDmg += 9;
				combatIed.push(9);
			};
			if (id == 'linkAdventurersCuriosity') {
				critRate += 10;
			};
			if (id == 'linkThiefsCunning') {
				combatDmg += 9;
			};
			if (id == 'linkPhantomInstinct') {
				critRate += 20;
			};
			if (id == 'linkLightWash') {
				ied.push(20);
			};
			if (id == 'linkWildRage') {
				dmg += 15;
			};
			if (id == 'linkFuryUnleashed') {
				bossDmg += 20;
			};
			if (id == 'linkHybridLogic') {
				percentAllStat += 10;
			};
			if (id == 'linkTermsAndConditions') {
				hasTermsAndConditions = true;
			};
			if (id == 'linkUnfairAdvantage') {
				combatDmg += 12;
			};
			if (id == 'linkIronWill') {
				percentHp += 20;
			};
			if (id == 'linkTimeToPrepare') {
				combatDmg += 8.5; /* 17% for 20 of 40 seconds, use average */
			};
			if (id == 'linkKeenEdge') {
				att += 15; mAtt += 15;
			};
			if (id == 'linkElementalism') {
				dmg += 10;
			};
			if (id == 'linkSolus') {
				combatDmg += 16;
			};
			if (id == 'linkTideOfBattle') {
				combatDmg += 12;
			};
			if (id == 'linkNobleFire') {
				bossDmg += 4;
				dmg += 8; /* +2 up to 8 for each party member */
			};
			if (id == 'linkInnateGift') {
				dmg += 5;
			};
			if (id == 'linkBravado') {
				dmg += 10;
			};
			if (id == 'linknaturesFriend') {
				dmg += 5;
				monsterDmg += 11; /* conditional normal monster dmg +11% */
			};
			if (id == 'linkFocusSpirit') {
				bossDmg += 10;
				critRate += 10;
				percentHp += 5;
				percentMp += 5;
			};
			if (id == 'linkJudgment') {
				critDmg += 4;
			};
			if (id == 'linkRhinnesBlessing') {
				ied.push(10);
			};
		};
	});
}

function getFamiliarPotentialSelections() {
	/* percent stat */
	percentStr += parseInt(document.getElementById("famStr").value);
	percentDex += parseInt(document.getElementById("famDex").value);
	percentInt += parseInt(document.getElementById("famInt").value);
	percentLuk += parseInt(document.getElementById("famLuk").value);
	percentAllStat += parseInt(document.getElementById("famStat").value);
	/* flat stat (affected by potentials) */
	cStr += parseInt(document.getElementById("famFlatStr").value);
	cDex += parseInt(document.getElementById("famFlatDex").value);
	cInt += parseInt(document.getElementById("famFlatInt").value);
	cLuk += parseInt(document.getElementById("famFlatLuk").value);
	att += parseInt(document.getElementById("famFlatAtt").value);
	mAtt += parseInt(document.getElementById("famFlatMAtt").value);
	/* other percent multipliers */
	critRate += parseInt(document.getElementById("famCritRate").value);
	critDmg += parseInt(document.getElementById("famCritDam").value);
	ied.push(parseInt(document.getElementById("famIed").value));
	bossDmg += parseInt(document.getElementById("famBoss").value);
	dmg += parseInt(document.getElementById("famDam").value);
	percentAtt += parseInt(document.getElementById("famAtt").value);
	percentMagAtt += parseInt(document.getElementById("famMAtt").value);
}

function getFamiliarBadgeSelections(){
	cStr += parseInt(document.getElementById("famBadgeStr").value);
	cDex += parseInt(document.getElementById("famBadgeDex").value);
	cInt += parseInt(document.getElementById("famBadgeInt").value);
	cLuk += parseInt(document.getElementById("famBadgeLuk").value);
	percentAllStat += parseInt(document.getElementById("famBadgeStat").value);
	cStr += parseInt(document.getElementById("famBadgeFlatStat").value);
	cDex += parseInt(document.getElementById("famBadgeFlatStat").value);
	cInt += parseInt(document.getElementById("famBadgeFlatStat").value);
	cLuk += parseInt(document.getElementById("famBadgeFlatStat").value);
	percentHp += parseInt(document.getElementById("famBadgehp%").value);
	hp += parseInt(document.getElementById("famBadgeHp").value);
	mp += parseInt(document.getElementById("famBadgeMp").value);
	critRate += parseInt(document.getElementById("famBadgeCrit%").value);
	ied.push(parseInt(document.getElementById("famBadgeIed").value));
	dmg += parseInt(document.getElementById("famBadgeDam").value);
	percentAtt += parseInt(document.getElementById("famBadgeAtt%").value);
	att += parseInt(document.getElementById("famBadgeAtt").value);
	percentMagAtt += parseInt(document.getElementById("famBadgeMAtt%").value);
	mAtt += parseInt(document.getElementById("famBadgeMAtt").value);
}

function getLegionBoardSelections() {
	cStr += parseInt(document.getElementById("legionStr").value) * 5;
	cDex += parseInt(document.getElementById("legionDex").value) * 5;
	cInt += parseInt(document.getElementById("legionInt").value) * 5;
	cLuk += parseInt(document.getElementById("legionLuk").value) * 5;
	hp += parseInt(document.getElementById("legionHp").value) * 250;
	mp += parseInt(document.getElementById("legionMp").value) * 250;
	critRate += parseInt(document.getElementById("legionCritRate").value);
	critDmg += parseInt(document.getElementById("legionCritDam").value) * 0.5;
	ied.push(parseInt(document.getElementById("legionIed").value));
	bossDmg += parseInt(document.getElementById("legionBoss").value);
	monsterDmg += parseInt(document.getElementById("legionNormMonDam").value);
	buffDuration += parseInt(document.getElementById("legionBuffDuration").value);
	att += parseInt(document.getElementById("legionAtt").value);
	mAtt += parseInt(document.getElementById("legionMagAtt").value);
	//omit abnormal status, exp bonus
	//var legionAbnormal = parseInt(document.getElementById("legionAbnormal").value);
	//var legionExp = parseInt(document.getElementById("legionExp").value);
}

function getLegionMemberSelections() {
	finalStr += parseInt(document.getElementById("memberStr").value);
	finalDex += parseInt(document.getElementById("memberDex").value);
	finalInt += parseInt(document.getElementById("memberInt").value);
	finalLuk += parseInt(document.getElementById("memberLuk").value);
	percentHp += parseInt(document.getElementById("memberHp%").value);
	finalHp += parseInt(document.getElementById("memberHp").value);
	percentMp += parseInt(document.getElementById("memberMp%").value);
	critRate += parseInt(document.getElementById("memberCritRate").value);
	critDmg += parseInt(document.getElementById("memberCritDamage").value);
	ied.push(parseInt(document.getElementById("memberIgnoreDefense").value));
	bossDmg += parseInt(document.getElementById("memberBossDamage").value);
	buffDuration += parseInt(document.getElementById("memberBuffDuration").value);
	dmg += (parseInt(document.getElementById("memberDamageChance").value) / 5); /* use average, 20% chance to trigger 4|8|12|14|20 / 5 */
	cdReductionPercent += parseInt(document.getElementById("memberCooldown").value);
	/*var memberSummonDuration = parseInt(document.getElementById("memberSummonDuration").value);*/
};

function updateWeaponData() {
	let charData = classData[charClass];
	classType = charData.classType;
	weaponAttackSpeed += charData.weaponAttackSpeed;
	weaponMultiplier = charData.weaponMultiplier;
	let weaponStatIndex = charData.weaponRefNum;
	let selectWeapon = document.getElementById("selectWeapon").value;
	let starForceSelect = document.getElementById("weaponStarForce").value;
	let weapon = weaponStats[selectWeapon][weaponStatIndex];
	if (weapon != undefined) {
		let weaponOutput = getItemStats(weapon.itemLv, starForceSelect, "weapon", weapon.jobStat, weapon.allStat, weapon.hp, weapon.mp, weapon.att, weapon.mAtt);
		weaponJobStat = parseInt(weaponOutput.jobStat);
		document.getElementById("weaponStr").innerHTML = weaponAllStat = parseInt(weaponOutput.allStat);
		document.getElementById("weaponDex").innerHTML = weaponAllStat/* = parseInt(weaponOutput.allStat)*/;
		document.getElementById("weaponInt").innerHTML = weaponAllStat/* = parseInt(weaponOutput.allStat)*/;
		document.getElementById("weaponLuk").innerHTML = weaponAllStat/* = parseInt(weaponOutput.allStat)*/;
		document.getElementById("weaponHp").innerHTML = weaponHp = parseInt(weaponOutput.hp);
		document.getElementById("weaponMp").innerHTML = weaponMp = parseInt(weaponOutput.mp);
		document.getElementById("weaponAtt").innerHTML = weaponAtt = parseInt(weaponOutput.att);
		document.getElementById("weaponMAtt").innerHTML = weaponMAtt = parseInt(weaponOutput.mAtt);
		cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
		if (primaryStat == "str" || primaryStat == "dex") {
			cStr += weaponJobStat; cDex += weaponJobStat;
			document.getElementById("weaponStr").innerHTML = weaponJobStat + weaponAllStat;
			document.getElementById("weaponDex").innerHTML = weaponJobStat + weaponAllStat;
		} else if (primaryStat == "luk") {
			cLuk += weaponJobStat; cDex += weaponJobStat;
			document.getElementById("weaponLuk").innerHTML = weaponJobStat + weaponAllStat;
			document.getElementById("weaponDex").innerHTML = weaponJobStat + weaponAllStat;
		} else {
			cInt += weaponJobStat; cLuk += weaponJobStat;
			document.getElementById("weaponInt").innerHTML = weaponJobStat + weaponAllStat;
			document.getElementById("weaponLuk").innerHTML = weaponJobStat + weaponAllStat;
		}
		var weaponEquipImage = document.getElementById("weaponImage2");
		weaponEquipImage.src = charData.weaponImages[selectWeapon];
		bossDmg += parseInt(weaponBoss);
		ied.push(parseInt(weaponIed));
	} else {
		document.getElementById("weaponStr").innerHTML = 0;
		document.getElementById("weaponDex").innerHTML = 0;
		document.getElementById("weaponInt").innerHTML = 0;
		document.getElementById("weaponLuk").innerHTML = 0;
		document.getElementById("weaponHp").innerHTML = 0;
		document.getElementById("weaponMp").innerHTML = 0;
		document.getElementById("weaponAtt").innerHTML = 0;
		document.getElementById("weaponMAtt").innerHTML = 0;
	}
}

function updateSubWeaponData() {
	let selectedSubWeapon = document.getElementById("selectSubweapon").value;
	if (charClass == "zero") { selectedSubWeapon = document.getElementById("selectWeapon").value; }; // if class = "zero", match weapon type
	let subWeaponIndex = classData[charClass].secondary[selectedSubWeapon]?.subWeaponRefNum;
	let stats = subWeaponStats[subWeaponIndex];
	document.getElementById("subweaponStr").innerHTML = subweaponAllStat;
	document.getElementById("subweaponDex").innerHTML = subweaponAllStat;
	document.getElementById("subweaponInt").innerHTML = subweaponAllStat;
	document.getElementById("subweaponLuk").innerHTML = subweaponAllStat;
	// Special Cases
	if (subWeaponIndex == 11) { // Deimos Sage Shield, +10 Int
		cStr += subweaponAllStat; cDex += subweaponAllStat; cInt += subweaponJobStat + subweaponAllStat + 10; cLuk += subweaponJobStat + subweaponAllStat;
		hp += subweaponHp; mp += subweaponMp; att += subweaponAtt; mAtt += subweaponMAtt;
		document.getElementById("subweaponInt").innerHTML = subweaponJobStat + subweaponAllStat + 10;
		document.getElementById("subweaponLuk").innerHTML = subweaponJobStat + subweaponAllStat;
	} else if (subWeaponIndex == 13) { // Haku - Arcane Umbra Fan, Not added to total stats, but displayed
		document.getElementById("subweaponInt").innerHTML = subweaponJobStat + subweaponAllStat;
		document.getElementById("subweaponLuk").innerHTML = subweaponJobStat + subweaponAllStat;
	} else if (subWeaponIndex == 17) { // Sweetwater Katara
		cStr += subweaponAllStat; cDex += subweaponAllStat; cInt += subweaponJobStat + subweaponAllStat; cLuk += subweaponJobStat + subweaponAllStat;
		hp += subweaponHp; mp += subweaponMp; att += subweaponAtt; mAtt += subweaponMAtt;
		document.getElementById("subweaponDex").innerHTML = subweaponJobStat + subweaponAllStat;
		document.getElementById("subweaponLuk").innerHTML = subweaponJobStat + subweaponAllStat;
	} else if (subWeaponIndex == 18) { // Deimos Thief Shield, +10 Luk
		cStr += subweaponAllStat; cDex += subweaponAllStat; cInt += subweaponJobStat + subweaponAllStat; cLuk += subweaponJobStat + subweaponAllStat + 10;
		hp += subweaponHp; mp += subweaponMp; att += subweaponAtt; mAtt += subweaponMAtt;
		document.getElementById("subweaponDex").innerHTML = subweaponJobStat + subweaponAllStat;
		document.getElementById("subweaponLuk").innerHTML = subweaponJobStat + subweaponAllStat + 10;
	} else if (subWeaponIndex == 20 || subWeaponIndex == 21 || subWeaponIndex == 22 || subWeaponIndex == 23) { // Zero (Lapis), calculated
		let starForceSelected = document.getElementById("weaponStarForce").value;
		document.getElementById("subweaponStarForce").value = starForceSelected;
		let subweaponOutput = getItemStats(stats.itemLv, starForceSelected, "weapon", stats.str, 0, stats.hp, stats.mp, stats.att, stats.mAtt);
		subweaponJobStat = parseInt(subweaponOutput.jobStat);
		subweaponAllStat = parseInt(subweaponOutput.allStat);
		subweaponHp = parseInt(subweaponOutput.hp);
		subweaponMp = parseInt(subweaponOutput.mp);
		subweaponAtt = parseInt(subweaponOutput.att);
		subweaponMAtt = parseInt(subweaponOutput.mAtt);
		document.getElementById("subweaponStr").innerHTML = subweaponJobStat + subweaponAllStat;
		document.getElementById("subweaponDex").innerHTML = subweaponJobStat + subweaponAllStat;
	} else if (charClass != "none" && selectedSubWeapon != "none") { // other cases, obtain values from object
		cStr += stats.str; cDex += stats.dex; cInt += stats._int; cLuk += stats.luk;
		hp += stats.hp; mp += stats.mp; att += stats.att; mAtt += stats.mAtt;
		document.getElementById("subweaponStr").innerHTML = stats.str;
		document.getElementById("subweaponDex").innerHTML = stats.dex;
		document.getElementById("subweaponInt").innerHTML = stats._int;
		document.getElementById("subweaponLuk").innerHTML = stats.luk;
		document.getElementById("subweaponHp").innerHTML = stats.hp;
		document.getElementById("subweaponMp").innerHTML = stats.mp;
		document.getElementById("subweaponAtt").innerHTML = stats.att;
		document.getElementById("subweaponMAtt").innerHTML = stats.mAtt;
	}
	document.getElementById("subweaponHp").innerHTML = subweaponHp;
	document.getElementById("subweaponMp").innerHTML = subweaponMp;
	document.getElementById("subweaponAtt").innerHTML = subweaponAtt;
	document.getElementById("subweaponMAtt").innerHTML = subweaponMAtt;
	let subweaponEquipImage = document.getElementById("subweaponImage2");
	let subWeaponData = classData[charClass].secondary[selectedSubWeapon];
	if (subWeaponData && subWeaponData.subWeaponImage !== undefined) {
		subweaponEquipImage.src = subWeaponData.subWeaponImage;
	}
	if (selectedSubWeapon == "ruinForceShield") {
		finalDamage += 10;
	}
	bossDmg += parseInt(subweaponBoss);
	ied.push(parseInt(subweaponIed));
}

function updateEquipmentData() {
	let equipment = ["ring1", "ring2", "ring3", "ring4", "pocket", "pendant1", "pendant2", "belt", "face", "eye", "ear",
	"badge", "medal", "heart", "hat", "top", "bottom", "shoe", "shoulder", "glove", "cape", "emblem"];
	equipment.forEach((element) => {
		let elementStr = document.getElementById(element + "Str");
		let elementDex = document.getElementById(element + "Dex");
		let elementInt = document.getElementById(element + "Int");
		let elementLuk = document.getElementById(element + "Luk");
		let elementHp = document.getElementById(element + "Hp");
		let elementMp = document.getElementById(element + "Mp");
		let elementAtt = document.getElementById(element + "Att");
		let elementMAtt = document.getElementById(element + "MAtt");
		let elementBoss = document.getElementById(element + "Boss");
		let elementIed = document.getElementById(element + "Ied");
		switch(primaryStat) {
			case "str":
			case "dex":
				cStr += elementStr.innerHTML = parseInt(eval(element + "JobStat")) + parseInt(eval(element + "AllStat"));
				cDex += elementDex.innerHTML = parseInt(eval(element + "JobStat")) + parseInt(eval(element + "AllStat"));
				cInt += elementInt.innerHTML = parseInt(eval(element + "AllStat"));
				cLuk += elementLuk.innerHTML = parseInt(eval(element + "AllStat"));
				break;
			case "int":
				cStr += elementStr.innerHTML = parseInt(eval(element + "AllStat"));
				cDex += elementDex.innerHTML = parseInt(eval(element + "AllStat"));
				cInt += elementInt.innerHTML = parseInt(eval(element + "JobStat")) + parseInt(eval(element + "AllStat"));
				cLuk += elementLuk.innerHTML = parseInt(eval(element + "JobStat")) + parseInt(eval(element + "AllStat"));
				break;
			case "luk":
				cStr += elementStr.innerHTML = parseInt(eval(element + "AllStat"));
				cDex += elementDex.innerHTML = parseInt(eval(element + "JobStat")) + parseInt(eval(element + "AllStat"));
				cInt += elementInt.innerHTML = parseInt(eval(element + "AllStat"));
				cLuk += elementLuk.innerHTML = parseInt(eval(element + "JobStat")) + parseInt(eval(element + "AllStat"));
				break;
			default:
				break;
		}
		hp += elementHp.innerHTML = parseInt(eval(element + "Hp"));
		mp += elementMp.innerHTML = parseInt(eval(element + "Mp"));
		att += elementAtt.innerHTML = parseInt(eval(element + "Att"));
		mAtt += elementMAtt.innerHTML = parseInt(eval(element + "MAtt"));
		bossDmg += parseInt(eval(element + "Boss"));
		ied.push(parseInt(eval(element + "Ied")));
	});
	// Additional item specific modifiers
	let selectedPocket = document.getElementById("selectPocket").value;
	if (selectedPocket == "cursedSpellbook") {
		switch (primaryStat) {
			case "str":
				cStr += document.getElementById("pocketStr").innerHTML = pocketAllStat + 10;
				break;
			case "dex":
				cDex += document.getElementById("pocketDex").innerHTML = pocketAllStat + 10;
				break;
			case "int":
				cInt += document.getElementById("pocketInt").innerHTML = pocketAllStat + 10;
				break;
			case "luk":
				cLuk += document.getElementById("pocketLuk").innerHTML = pocketAllStat + 10;
				break;
			default:
				break;
		}
	}
	let selectedGlove = document.getElementById("selectGlove").value;
	if (selectedGlove == "tyrantGloves") {
		if (classType == "magician") {
			document.getElementById("gloveHp").innerHTML = gloveHp;
			document.getElementById("gloveMp").innerHTML = (gloveMp += 300);
			mp += 300;
		} else {
			document.getElementById("gloveHp").innerHTML = (gloveHp += 300);
			document.getElementById("gloveMp").innerHTML = gloveMp;
			hp += 300;
		}
	}
	let cselectedEmblem = document.getElementById("selectEmblem").value;
	if (charClass == "demonAvenger" && cselectedEmblem == "classEmblem") {
		hp += 500;
		document.getElementById("emblemHp").innerHTML = emblemHp + 500;
	} else if (classType == "warrior" && cselectedEmblem == "mitrasRage") {
		hp += 700;
		document.getElementById("emblemHp").innerHTML = emblemHp + 700;
	} else {
		document.getElementById("emblemHp").innerHTML = emblemHp;
	}
	let selectedPendant1 = document.getElementById("selectPendant1").value;
	let selectedPendant2 = document.getElementById("selectPendant2").value;
	if (selectedPendant1 == "daybreakPendant" || selectedPendant2 == "daybreakPendant") {
		percentHp += 5;
	}
	if (selectedPendant1 == "dominatorPendant" || selectedPendant2 == "dominatorPendant") {
		percentHp += 10;
		percentMp += 10;
	}
	if (selectedPendant1 == "sourceOfSuffering" || selectedPendant2 == "sourceOfSuffering") {
		percentHp += 5;
	}
}

function editEquipmentImages() {
	let selectedHat = document.getElementById("selectHat").value;
    let hatEquipImage = document.getElementById("hatImage2");
	let selectedTop = document.getElementById("selectTop").value;
    let topEquipImage = document.getElementById("topImage2");
	let selectedBottom = document.getElementById("selectBottom").value;
    let bottomEquipImage = document.getElementById("bottomImage2");
	let selectedPocket = document.getElementById("selectPocket").value;
    let pocketEquipImage = document.getElementById("pocketImage2");
	if (armorImages[classType]) {
        if (selectedHat != "none") {
			hatEquipImage.src = armorImages[classType][selectedHat] || "";
		}
        if (selectedTop != "none") {
			topEquipImage.src = armorImages[classType][selectedTop] || "";
		}
        if (selectedBottom != "none") {
			bottomEquipImage.src = armorImages[classType][selectedBottom] || "";
		}
		if (selectedPocket != "none" && selectedPocket == "cursedSpellbook") {
			if (classType == "pirate" && primaryStat == "str") {
				pocketEquipImage.src = armorImages["warrior"][selectedPocket] || "";
			} else if (classType == "pirate" && primaryStat == "dex") {
				pocketEquipImage.src = armorImages["bowman"][selectedPocket] || "";
			} else {
				pocketEquipImage.src = armorImages[classType][selectedPocket] || "";
			}
		}
    }
};

function getSetEffects() {
    for (var selector in setEffects) {
        var selectedEquipment = document.getElementById(selector).value;
		if(setEffects[selector][selectedEquipment] != undefined) {
			window[setEffects[selector][selectedEquipment]]++;
		}
    }
	if (genesisWeapon >= 1) {
		if (rootAbyssSet >= 3) {
		rootAbyssSet += 1;
		}
		if (absolabSet >= 3) {
			absolabSet += 1;
		}
		if (arcaneSet >= 3) {
			arcaneSet += 1;
		}
		if (eternalSet >= 3) {
			eternalSet += 1;
		}
	}
};

function getSetStats() {
	let setsToGet = ['pitchedSet', 'rootAbyssSet', 'absolabSet', 'arcaneSet', 'eternalSet', 'golluxSet', 'dawnSet', 'bossSet', 'monsterParkSet'];
	for (var set of setsToGet) {
		let stats = setEffectStats[set][eval(set)];
		if (set == 'rootAbyssSet') {
			stats = setEffectStats[set][primaryStat][eval(set)];
		}
		cStr += stats[0],
		cDex += stats[1];
		cInt += stats[2];
		cLuk += stats[3];
		hp += stats[4];
		mp += stats[5];
		percentHp += stats[6];
		percentMp += stats[7];
		att += stats[8];
		mAtt += stats[9];
		bossDmg += stats[10];
		ied.push(stats[11]);
		ied.push(stats[12]);
		critDmg += stats[13];
	}
}

function getEquipmentPotentials() {
	var ids = ['facePot1', 'facePot2', 'facePot3', 'eyePot1', 'eyePot2', 'eyePot3', 'earPot1', 'earPot2', 'earPot3',
    'beltPot1', 'beltPot2', 'beltPot3', 'glovePot1', 'glovePot2', 'glovePot3', 'capePot1', 'capePot2', 'capePot3',
    'shoePot1', 'shoePot2', 'shoePot3', 'shoulderPot1', 'shoulderPot2', 'shoulderPot3', 'badgePot1', 'badgePot2', 'badgePot3',
    'ring1Pot1', 'ring1Pot2', 'ring1Pot3', 'ring2Pot1', 'ring2Pot2', 'ring2Pot3', 'ring3Pot1', 'ring3Pot2', 'ring3Pot3',
    'ring4Pot1', 'ring4Pot2', 'ring4Pot3', 'pendant1Pot1', 'pendant1Pot2', 'pendant1Pot3', 'pendant2Pot1', 'pendant2Pot2', 'pendant2Pot3',
    'hatPot1', 'hatPot2', 'hatPot3', 'topPot1', 'topPot2', 'topPot3', 'bottomPot1', 'bottomPot2', 'bottomPot3',
	'heartPot1', 'heartPot2', 'heartPot3', 'emblemPot1', 'emblemPot2', 'emblemPot3', 'medalPot1', 'medalPot2', 'medalPot3',
	'subweaponPot1', 'subweaponPot2', 'subweaponPot3', 'weaponPot1', 'weaponPot2', 'weaponPot3', 'ring1Level', 'ring2Level', 'ring3Level', 'ring4Level'];
	
	ids.forEach(function (id) {
		var selectedPotential = document.getElementById(id).value;
		var ringLevel = 0;
		switch (selectedPotential) {
			case "13%Str":
				percentStr += 13;
				break;
			case "12%Str":
				percentStr += 12;
				break;
			case "10%Str":
				percentStr += 10;
				break;
			case "9%Str":
				percentStr += 9;
				break;
			case "7%Str":
				percentStr += 7;
				break;
			case "6%Str":
				percentStr += 6;
				break;
			case "13%Dex":
				percentDex += 13;
				break;
			case "12%Dex":
				percentDex += 12;
				break;
			case "10%Dex":
				percentDex += 10;
				break;
			case "9%Dex":
				percentDex += 9;
				break;
			case "7%Dex":
				percentDex += 7;
				break;
			case "6%Dex":
				percentDex += 6;
				break;
			case "13%Int":
				percentInt += 13;
				break;
			case "12%Int":
				percentInt += 12;
				break;
			case "10%Int":
				percentInt += 10;
				break;
			case "9%Int":
				percentInt += 9;
				break;
			case "7%Int":
				percentInt += 7;
				break;
			case "6%Int":
				percentInt += 6;
				break;
			case "13%Luk":
				percentLuk += 13;
				break;
			case "12%Luk":
				percentLuk += 12;
				break;
			case "10%Luk":
				percentLuk += 10;
				break;
			case "9%Luk":
				percentLuk += 9;
				break;
			case "7%Luk":
				percentLuk += 7;
				break;
			case "6%Luk":
				percentLuk += 6;
				break;
			case "10%All":
				percentAllStat += 10;
				break;
			case "9%All":
				percentAllStat += 9;
				break;
			case "7%All":
				percentAllStat += 7;
				break;
			case "6%All":
				percentAllStat += 6;
				break;
			case "4%All":
				percentAllStat += 4;
				break;
			case "3%All":
				percentAllStat += 3;
				break;
			case "8%CritDmg":
				critDmg += 8;
				break;
			case "2sec":
				cdReductionSec += 2;
				break;
			case "1sec":
				cdReductionSec += 1;
				break;
			case "13%Att":
				percentAtt += 13;
				break;
			case "12%Att":
				percentAtt += 12;
				break;
			case "10%Att":
				percentAtt += 10;
				break;
			case "9%Att":
				percentAtt += 9;
				break;
			case "7%Att":
				percentAtt += 7;
				break;
			case "6%Att":
				percentAtt += 6;
				break;
			case "4%Att":
				percentAtt += 4;
				break;
			case "3%Att":
				percentAtt += 3;
				break;
			case "13%MagAtt":
				percentMagAtt += 13;
				break;
			case "12%MagAtt":
				percentMagAtt += 12;
				break;
			case "10%MagAtt":
				percentMagAtt += 10;
				break;
			case "9%MagAtt":
				percentMagAtt += 9;
				break;
			case "7%MagAtt":
				percentMagAtt += 7;
				break;
			case "6%MagAtt":
				percentMagAtt += 6;
				break;
			case "4%MagAtt":
				percentMagAtt += 4;
				break;
			case "3%MagAtt":
				percentMagAtt += 3;
				break;
			case "40%Ied":
				ied.push(40);
				break;
			case "35%Ied":
				ied.push(35);
				break;
			case "30%Ied":
				ied.push(30);
				break;
			case "15%Ied":
				ied.push(15);
				break;
			case "40%Boss":
				bossDmg += 40;
				break;
			case "35%Boss":
				bossDmg += 35;
				break;
			case "30%Boss":
				bossDmg += 30;
				break;
			case "15%Boss":
				bossDmg += 15;
				break;
			case "lv1":
				ringLevel = 1;
				break;
			case "lv2":
				ringLevel = 2;
				break;
			case "lv3":
				ringLevel = 3;
				break;
			case "lv4":
				ringLevel = 4;
				break;
			case "lv5":
				ringLevel = 5;
				break;
			default:
				break;
		}
		if (ringLevel > ozRingLv) {
			ozRingLv = ringLevel;
		}
	});
}

function getAdditionalStats() {
	percentStr += parseInt(document.getElementById("addStr").value);
	percentDex += parseInt(document.getElementById("addDex").value);
	percentInt += parseInt(document.getElementById("addInt").value);
	percentLuk += parseInt(document.getElementById("addLuk").value);
	percentAllStat += parseInt(document.getElementById("addAllStat").value);
	cStr += parseInt(document.getElementById("addFlatStr").value);
	cDex += parseInt(document.getElementById("addFlatDex").value);
	cInt += parseInt(document.getElementById("addFlatInt").value);
	cLuk += parseInt(document.getElementById("addFlatLuk").value);
	percentHp += parseInt(document.getElementById("addHp%").value);
	percentMp += parseInt(document.getElementById("addMp%").value);
	hp += parseInt(document.getElementById("addHp").value);
	mp += parseInt(document.getElementById("addMp").value);
	critRate += parseInt(document.getElementById("addCritRate").value);
	critDmg += parseInt(document.getElementById("addCritDam").value);
	ied.push(parseInt(document.getElementById("addIed").value));
	bossDmg += parseInt(document.getElementById("addBoss").value);
	dmg += parseInt(document.getElementById("addDam").value);
	monsterDmg += parseInt(document.getElementById("addMonDam").value);
	percentAtt += parseInt(document.getElementById("addAtt").value);
	percentMagAtt += parseInt(document.getElementById("addMAtt").value);
	att += parseInt(document.getElementById("addFlatAtt").value);
	mAtt += parseInt(document.getElementById("legionMagAtt").value);
	cdReductionSec += parseInt(document.getElementById("addCooldown").value);
}

function getSymbolStats() {
	var arcaneSymbols = ['vjSymbol', 'chuchuSymbol', 'lachSymbol', 'arcanaSymbol', 'morassSymbol', 'esferaSymbol'];
	var sacredSymbols = ['cerniumSymbol', 'arcusSymbol', 'odiumSymbol', 'shangSymbol', 'arteriaSymbol', 'carcionSymbol'];
	arcaneSymbols.forEach(function (id) {
		var selectedArcaneSymbol = document.getElementById(id).value;
		if (selectedArcaneSymbol >= 1) {
			if (charClass == "xenon") {
				finalStr += ((selectedArcaneSymbol - 1) * 48) + 144;
				finalDex += ((selectedArcaneSymbol - 1) * 48) + 144;
				finalLuk += ((selectedArcaneSymbol - 1) * 48) + 144;
			} else if (charClass == "demonAvenger") {
				finalHp += ((selectedArcaneSymbol - 1) * 2100) + 6300;
			} else {
				if (primaryStat == "str") {
					finalStr += ((selectedArcaneSymbol - 1) * 100) + 300;
				} else if (primaryStat == "dex") {
					finalDex += ((selectedArcaneSymbol - 1) * 100) + 300;
				} else if (primaryStat == "int") {
					finalInt += ((selectedArcaneSymbol - 1) * 100) + 300;
				} else {
					finalLuk += ((selectedArcaneSymbol - 1) * 100) + 300;
				}
			}
			arcaneForce += ((selectedArcaneSymbol - 1) * 10) + 30;
		}
	});
	sacredSymbols.forEach(function (id) {
		var selectedSacredSymbol = document.getElementById(id).value;
		if (selectedSacredSymbol >= 1) {
			if (charClass == "xenon") {
				finalStr += ((selectedSacredSymbol - 1) * 96) + 240;
				finalDex += ((selectedSacredSymbol - 1) * 96) + 240;
				finalLuk += ((selectedSacredSymbol - 1) * 96) + 240;
			} else if (charClass == "demonAvenger") {
				finalHp += ((selectedSacredSymbol - 1) * 4200) + 10500;
			} else {
				if (primaryStat == "str") {
					finalStr += ((selectedSacredSymbol - 1) * 100) + 300;
				} else if (primaryStat == "dex") {
					finalDex += ((selectedSacredSymbol - 1) * 100) + 300;
				} else if (primaryStat == "int") {
					finalInt += ((selectedSacredSymbol - 1) * 100) + 300;
				} else {
					finalLuk += ((selectedSacredSymbol - 1) * 100) + 300;
				}
			}
			sacredForce += ((selectedSacredSymbol - 1) * 10) + 10;
		}
	});
}

function updateStatsTable() {
	let totalStr = Math.floor((cStr * (1 + (percentStr + percentAllStat) / 100)) + finalStr);
	let totalDex = Math.floor((cDex * (1 + (percentDex + percentAllStat) / 100)) + finalDex);
	let totalInt = Math.floor((cInt * (1 + (percentInt + percentAllStat) / 100)) + finalInt);
	let totalLuk = Math.floor((cLuk * (1 + (percentLuk + percentAllStat) / 100)) + finalLuk);
	document.getElementById("neutralStr").placeholder = totalStr;
	document.getElementById("neutralDex").placeholder = totalDex;
	document.getElementById("neutralInt").placeholder = totalInt;
	document.getElementById("neutralLuk").placeholder = totalLuk;
	document.getElementById("neutralAtt").placeholder = Math.floor(att * (1 + percentAtt / 100));
	document.getElementById("neutralMAtt").placeholder = Math.floor(mAtt * (1 + percentMagAtt / 100));
	document.getElementById("neutralAF").placeholder = arcaneForce;
	document.getElementById("neutralSF").placeholder = sacredForce;
	document.getElementById("neutralCritRate").placeholder = critRate;
	document.getElementById("neutralCritDamage").placeholder = critDmg;
	document.getElementById("neutralDmg").placeholder = dmg;
	document.getElementById("neutralBossDmg").placeholder = bossDmg;
	document.getElementById("neutralMonDmg").placeholder = monsterDmg;
	let ignoreDefenseValue = 100;
	for (var source of ied) {
		ignoreDefenseValue *= (1 - source / 100);
	}
	ignoreDefenseValue = 100 - ignoreDefenseValue;
	document.getElementById("neutralIED").placeholder = ignoreDefenseValue;
	document.getElementById("neutralFD").placeholder = finalDamage;
	document.getElementById("neutralBuffDuration").placeholder = buffDuration;
	if (weaponAttackSpeed > 10) {
		weaponAttackSpeed = 10;
	}
	document.getElementById("neutralAttSpeed").placeholder = weaponAttackSpeed;
	let statValue = totalStr * 4 + totalDex;
	if (tripleScaling == true) {
		statValue = totalLuk * 4 + totalDex + totalStr;
	} else if (primaryStat == "int") {
		statValue = totalInt * 4 + totalLuk;
	} else if (primaryStat == "luk") {
		statValue = totalLuk * 4 + totalDex;
	}
	let totalAttack = att * (1 + percentAtt / 100);
	let totalMagicAttack = mAtt * (1 + (percentMagAtt / 100));
	let upperActualDamageRange = weaponMultiplier * statValue * (1 + totalAttack / 100);
	let lowerActualDamageRange = upperActualDamageRange * 70 / 100; //70 base weapon mastery
	let upperShownDamageRange = Math.floor(upperActualDamageRange * (1 + dmg / 100) * (1 + finalDamage / 100));
	let lowerShownDamageRange = Math.floor(1 + lowerActualDamageRange * (1 + dmg / 100) * (1 + finalDamage / 100));
	document.getElementById("neutralRange").placeholder = lowerShownDamageRange + " - " + upperShownDamageRange;
}

function applyCooldownReduction(inputCD, resettable) {
	//get new cooldown after percent reduction
	let newCD = inputCD * (1 - cdReductionPercent / 100);
	let cdReductionMillis = cdReductionSec * 1000;
	if (newCD - cdReductionMillis > 10000) {
		return newCD - cdReductionMillis;
	} else {
		//if cooldown minus 10000 is > 0, find safe reduction
		if (newCD - 10000 > 0) {
			let safeReduction = newCd - 10000;
			newCD -= safeReduction;
			//get milliseconds to convert to percent reduction
			let millisPercent = cdReductionMillis - safeReduction;
			//convert reduction at rate of 1000 ms to 5% reduction
			let percentageReduction = 1 - ((millisPercent) * 0.00005);
			newCD *= percentageReduction;
		} else { //if cooldown minus 10000 is < 0, apply only percentage reduction	
			let percentageReduction = 1 - ((cdReductionMillis) * 0.00005);
			newCD *= percentageReduction;
		}
	}
	if (newCD < 5000) {
		return 5000;
	}
	return Math.floor(newCD);
}

function applyAttackSpeed(inputDelay) {
	var multiplier = 1;
	if (weaponAttackSpeed > 10) {
		multiplier = Math.floor(100 * 10 / 16);
	} else {
		multiplier = Math.floor(100 * (20 - weaponAttackSpeed) / 16);
	}
	return Math.floor(inputDelay * (multiplier / 100));
}