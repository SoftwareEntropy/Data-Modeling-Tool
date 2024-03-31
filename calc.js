/* base stats */
var charLevel; var charClass; var classType; var primaryStat; var cStr; var cDex; var cInt; var cLuk; var att; var mAtt; var hp; var mp; var arcaneForce; var sacredForce;
var finalStr; var finalDex; var finalInt; var finalLuk; var finalHp;
/* multipliers */
var percentStr = []; var percentDex = []; var percentInt = []; var percentLuk = []; var percentAllStat = []; var percentHp = []; var percentMp = [];
var critRate = []; var critDmg = []; var bossDmg = []; var dmg = []; var monsterDmg = []; var ied = []; var abnormalStatusDmg = [];
var percentAtt = []; var percentMagAtt = []; var finalDamage = [];
/* special stats */
var attSpeedBonus = []; var cdSkipChance = []; var cdSkipSec = []; var cdReduction = []; var incPassive = []; var buffDuration = []; var elementalIgnore = [];
var weaponAttackSpeed; /* use old cal  avg(6), slow(8) */ var weaponMultiplier; var lapisMultiplier = 1.49; var lapisSpd = 8; var lazuliMultiplier = 1.34; var lazuliSpd = 6;
/* trackers */
var hasTermsAndConditions = false;
var genesisWeapon = 0; var pitchedSet = 0; var rootAbyssSet = 0; var absolabSet = 0; var arcaneSet = 0; var eternalSet = 0; var golluxSet = 0; var dawnSet = 0;
var bossSet = 0; var monsterParkSet = 0;

aggregate();

var test = document.getElementById("selectRing4");
test.addEventListener("change", aggregate);

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
    element.addEventListener('change', aggregate);
});

function aggregate() {
	clearValues();
	getSpecification();
	getAttributeAllocation();
	getInnerAbilitySelections();
	getTraitsBonuses();
	getHyperStatAllocation();
	getLinkSkillSelections();
	getFamiliarPotentialSelections();
	getFamiliarBadgeSelections();
	getLegionBoardSelections();
	getLegionMemberSelections();
	getEquipmentSelections();
	
	
	updateWeaponData();
	updateSubWeaponData();
	
	
	fillEquipmentStats();
	editEquipmentImages();
	getSetEffects();
}

function clearValues() {
	/* base stats */
	charLevel = 0; charClass = "none"; classType = "none"; primaryStat = "none";
	cStr = 0; cDex = 0; cInt = 0; cLuk = 0; att = 0; mAtt = 0; hp = 0; mp = 0; arcaneForce = 0; sacredForce = 0;
	finalStr  = 0; finalDex = 0; finalInt = 0; finalLuk = 0; finalHp = 0;
	/* multipliers */
	percentStr = []; percentDex = []; percentInt = []; percentLuk = []; percentAllStat = []; percentHp = []; percentMp = [];
	critRate = []; critDmg = []; bossDmg = []; dmg = []; monsterDmg = []; ied = []; abnormalStatusDmg = [];
	percentAtt = []; percentMagAtt = []; finalDamage = [];
	/* special stats */
	attSpeedBonus = []; cdSkipChance = []; cdSkipSec = []; cdReduction = []; incPassive = []; buffDuration = []; elementalIgnore = [];
	weaponAttackSpeed = 0; weaponMultiplier = 0; lapisMultiplier = 1.49; lapisSpd = 8; lazuliMultiplier = 1.34; lazuliSpd = 6;
	/* trackers */
	hasTermsAndConditions = false;
	genesisWeapon = 0; pitchedSet = 0; rootAbyssSet = 0; absolabSet = 0; arcaneSet = 0; eternalSet = 0; golluxSet = 0; dawnSet = 0;
	bossSet = 0; monsterParkSet = 0;
}

function getSpecification() {
	/* get class name, selected level */
	charClass = document.getElementById("selectClass").value;
	charLevel = parseInt(document.getElementById("level").value);
	designatePrimaryStat(charClass);
}

function designatePrimaryStat(selection) {
	switch (selection) {
		case "adele": /* str/dex */
		case "aran": /* str/dex */
		case "ark": /* str/dex */
		case "blaster": /* str/dex */
		case "buccaneer": /* str/dex */
		case "cannoneer": /* str/dex */
		case "darkKnight": /* str/dex */
		case "dawnWarrior": /* str/dex */
		case "demonSlayer": /* str/dex */
		case "hayato": /* str/dex */
		case "hero": /* str/dex */
		case "kaiser": /* str/dex */
		case "mihile": /* str/dex */
		case "paladin": /* str/dex */
		case "shade": /* str/dex */
		case "thunderBreaker": /* str/dex */
		case "zero": /* str/dex */
			/* Special case: hp scaling, uses warrior equip with str mainstat */
		case "demonAvenger": /* HP/str */
		case "unselected":
			primaryStat = "str";
			break;
		case "angelicBuster": /* dex/str */
		case "bowmaster": /* dex/str */
		case "corsair": /* dex/str */
		case "kain": /* dex/str */
		case "marksman": /* dex/str */
		case "mechanic": /* dex/str */
		case "mercedes": /* dex/str */
		case "pathfinder": /* dex/str */
		case "wildHunter": /* dex/str */
		case "windArcher": /* dex/str */
			primaryStat = "dex";
			break;
		case "archMageIceLightning": /* int/luk */
		case "archMageFirePoison": /* int/luk */
		case "battleMage": /* int/luk */
		case "beastTamer": /* int/luk */
		case "bishop": /* int/luk */
		case "blazeWizard": /* int/luk */
		case "evan": /* int/luk */
		case "illium": /* int/luk */
		case "kanna": /* int/luk */
		case "kinesis": /* int/luk */
		case "lara": /* int/luk */
		case "luminous": /* int/luk */
			primaryStat = "int";
			break;
			/* Double stat scaling */
		case "hoyoung": /* luk/dex */
		case "khali": /* luk/dex */
		case "nightLord": /* luk/dex */
		case "nightWalker": /* luk/dex */
		case "phantom": /* luk/dex */	
			/* Triple stat scaling */
		case "cadena": /* luk/dex/str */
		case "dualBlade": /* luk/dex/str */
		case "shadower": /* luk/dex/str */
			/* Special case: Triple primary scaling, luk mainstat assume thief equipment */	
		case "xenon": /* Luk/Str/Dex */
			primaryStat = "luk";
			break;
		default:
			primaryStat = "str";
			break;
	}
}

function getAttributeAllocation() {
	/* get allocated attribute points */
	cStr = parseInt(document.getElementById("strAP").value) + 4;
	cDex = parseInt(document.getElementById("dexAP").value) + 4;
	cInt = parseInt(document.getElementById("intAP").value) + 4;
	cLuk = parseInt(document.getElementById("lukAP").value) + 4;
	hp = parseInt(document.getElementById("hpAP").value);
	mp = parseInt(document.getElementById("mpAP").value);
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
			attSpeedBonus.push(1);
			break;
		case "wepAtt":
			att += 30;
			break;
		case "magAtt":
			mAtt += 30;
			break;
		case "crit":
			critRate.push(30);
			break;
		case "hp":
			percentHp.push(20);
			break;
		case "boss":
			bossDmg.push(20);
			break;
		case "norm":
			monsterDmg.push(10);
			break;
		case "abn":
			abnormalStatusDmg.push(10);
			break;
		case "cdSkip":
			cdSkipChance.push(20);
			break;
		case "passive+1":
			incPassive.push(1);
			break;
		case "buff":
			buffDuration.push(50);
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
				critRate.push(20);
				break;
			case "hp":
				percentHp.push(10);
				break;
			case "boss":
				bossDmg.push(10);
				break;
			case "norm":
				monsterDmg.push(8);
				break;
			case "abn":
				abnormalStatusDmg.push(8);
				break;
			case "cdSkip":
				cdSkipChance.push(8);
				break;
			case "buff":
				buffDuration.push(38);
				break;
			default:
				/* omit drop rate, meso increase */
				break;
		}
	});
}

function getTraitsBonuses() {
	/* traits bonuses */
	var empathyLv = parseInt(document.getElementById("empathy").value);
	empathyLv = Math.floor(empathyLv / 10);
	buffDuration.push(empathyLv);
	mp += ((empathyLv * 2) * 100);
	var ambitionLv = parseInt(document.getElementById("ambition").value);
	ambitionLv = Math.floor(ambitionLv / 5);
	ied.push(ambitionLv * .5);
	var insightLv = parseInt(document.getElementById("insight").value);
	insightLv = Math.floor(insightLv / 10);
	elementalIgnore.push(insightLv * .5);
	var willpowerLv = parseInt(document.getElementById("willpower").value);
	willpowerLv = Math.floor(willpowerLv / 5);
	hp += (willpowerLv * 100);
	/* skip willpower +5 def, +1 abnormal status resist per 5 levels*/
}

function getHyperStatAllocation() {
	/* hyper stat bonuses */
	var hyperStr = parseInt(document.getElementById("strHS").value);
	finalStr += (hyperStr * 30);
	var hyperDex = parseInt(document.getElementById("dexHS").value);
	finalDex += (hyperDex * 30);
	var hyperInt = parseInt(document.getElementById("intHS").value);
	finalInt += (hyperInt * 30);
	var hyperLuk = parseInt(document.getElementById("lukHS").value);
	finalLuk += (hyperLuk * 30);
	var hyperHp = parseInt(document.getElementById("hpHS").value);
	percentHp.push(hyperHp * 2);
	var hyperMp = parseInt(document.getElementById("mpHS").value);
	percentMp.push(hyperMp * 2);
	var hyperCritRate = parseInt(document.getElementById("critRateHS").value);
	if (hyperCritRate <= 5) {
		critRate.push(hyperCritRate);
	} else {
		hyperCritRate = hyperCritRate - 5;
		critRate.push(5 + (hyperCritRate * 2));
	}
	var hyperCritDamage = parseInt(document.getElementById("critDamageHS").value);
	critDmg.push(hyperCritDamage);
	var hyperIgnoreDef = parseInt(document.getElementById("iedHS").value);
	ied.push(hyperIgnoreDef * 3);
	var hyperBossDamage = parseInt(document.getElementById("bossHS").value);
	if (hyperBossDamage <= 5) {
		bossDmg.push(hyperBossDamage * 3);
	} else {
		hyperBossDamage = hyperBossDamage - 5;
		hyperBossDamage.push((5 * 3) + (hyperBossDamage * 4));
	}
	var hyperMonsterDamage = parseInt(document.getElementById("normMonDamHS").value);
	if (hyperMonsterDamage <= 5) {
		monsterDmg.push(hyperMonsterDamage * 3);
	} else {
		hyperMonsterDamage = hyperMonsterDamage - 5;
		monsterDmg.push((5 * 3) + (hyperMonsterDamage * 4));
	}
	var hyperDamage = parseInt(document.getElementById("damHS").value);
	dmg.push(hyperDamage * 3);
	var hyperAttack = parseInt(document.getElementById("attHS").value);
	att += (hyperAttack * 3);
	mAtt += (hyperAttack * 3);
	var hyperArcaneForce = parseInt(document.getElementById("arcaneForceHS").value);
	if (hyperArcaneForce <= 10) {
		arcaneForce += (hyperArcaneForce * 5);
	} else {
		hyperArcaneForce = hyperArcaneForce - 10;
		arcaneForce += ((10 * 5) + (hyperArcaneForce * 10));
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
				dmg.push(9);
				ied.push(9);
			};
			if (id == 'linkAdventurersCuriosity') {
				critRate.push(10);
			};
			if (id == 'linkThiefsCunning') {
				dmg.push(9);
			};
			if (id == 'linkPhantomInstinct') {
				cStr += 70;
			};
			if (id == 'linkLightWash') {
				ied.push(20);
			};
			if (id == 'linkWildRage') {
				dmg.push(15);
			};
			if (id == 'linkFuryUnleashed') {
				bossDmg.push(20);
			};
			if (id == 'linkHybridLogic') {
				percentAllStat.push(10);
			};
			if (id == 'linkTermsAndConditions') {
				hasTermsAndConditions = true;
			};
			if (id == 'linkUnfairAdvantage') {
				dmg.push(12);
			};
			if (id == 'linkIronWill') {
				percentHp.push(20);
			};
			if (id == 'linkTimeToPrepare') {
				dmg.push(8.5); /* 17% for 20 of 40 seconds, use average */
			};
			if (id == 'linkKeenEdge') {
				att += 15; mAtt += 15;
			};
			if (id == 'linkElementalism') {
				dmg.push(10);
			};
			if (id == 'linkSolus') {
				dmg.push(16);
			};
			if (id == 'linkTideOfBattle') {
				dmg.push(12);
			};
			if (id == 'linkNobleFire') {
				bossDmg.push(4);
				dmg.push(8); /* +2 up to 8 for each party member */
			};
			if (id == 'linkInnateGift') {
				dmg.push(5);
			};
			if (id == 'linkBravado') {
				dmg.push(10);
			};
			if (id == 'linknaturesFriend') {
				dmg.push(5);
				monsterDmg.push(11); /* conditional normal monster dmg +11% */
			};
			if (id == 'linkFocusSpirit') {
				bossDmg.push(10);
				critRate.push(10);
				percentHp.push(5);
				percentMp.push(5);
			};
			if (id == 'linkJudgment') {
				critDmg.push(4);
			};
			if (id == 'linkRhinnesBlessing') {
				ied.push(10);
			};
		};
	});
}

function getFamiliarPotentialSelections() {
	/* percent stat */
	var famPercStr = parseInt(document.getElementById("famStr").value);
	percentStr.push(famPercStr);
	var famPercDex = parseInt(document.getElementById("famDex").value);
	percentDex.push(famPercDex);
	var famPercInt = parseInt(document.getElementById("famInt").value);
	percentInt.push(famPercInt);
	var famPercLuk = parseInt(document.getElementById("famLuk").value);
	percentLuk.push(famPercLuk);
	var famPercAll = parseInt(document.getElementById("famStat").value);
	percentAllStat.push(famPercAll);
	/* flat stat (affected by potentials) */
	var famStr = parseInt(document.getElementById("famFlatStr").value);
	cStr += famStr;
	var famDex = parseInt(document.getElementById("famFlatDex").value);
	cDex += famDex;
	var famInt = parseInt(document.getElementById("famFlatInt").value);
	cInt += famInt;
	var famLuk = parseInt(document.getElementById("famFlatLuk").value);
	cLuk += famFlatLuk;
	var famFlatAtt = parseInt(document.getElementById("famFlatAtt").value);
	att += famAtt;
	var famFlatMagAtt = parseInt(document.getElementById("famFlatMAtt").value);
	mAtt += famMagAtt;
	/* other percent multipliers */
	var famCritRate = parseInt(document.getElementById("famCritRate").value);
	critRate.push(famCritRate);
	var famCritDmg = parseInt(document.getElementById("famCritDam").value);
	critDmg.push(famCritDmg);
	var famIed = parseInt(document.getElementById("famIed").value);
	ied.push(famIed);
	var famBossDmg = parseInt(document.getElementById("famBoss").value);
	bossDmg.push(famBossDmg);
	var famDmg = parseInt(document.getElementById("famDam").value);
	dmg.push(famDmg);
	var famAtt = parseInt(document.getElementById("famAtt").value);
	percentAtt.push(famAtt);
	var famMagAtt = parseInt(document.getElementById("famMAtt").value);
	percentMagAtt.push(famMagAtt);
}

function getFamiliarBadgeSelections(){
	var badgeStr = parseInt(document.getElementById("famBadgeStr").value);
	cStr += badgeStr;
	var badgeDex = parseInt(document.getElementById("famBadgeDex").value);
	cDex += badgeDex;
	var badgeInt = parseInt(document.getElementById("famBadgeInt").value);
	cInt += badgeInt;
	var badgeLuk = parseInt(document.getElementById("famBadgeLuk").value);
	cLuk += badgeLuk;
	var badgeAllStat = parseInt(document.getElementById("famBadgeStat").value);
	percentAllStat.push(badgeAllStat);
	var badgeFlatStats = parseInt(document.getElementById("famBadgeFlatStat").value);
	cStr += badgeFlatStats;
	cDex += badgeFlatStats;
	cInt += badgeFlatStats;
	cLuk += badgeFlatStats;
	var badgePercHp = parseInt(document.getElementById("famBadgehp%").value);
	percentHp.push(badgePercHp);
	var badgeHp = parseInt(document.getElementById("famBadgeHp").value);
	hp += badgeHp;
	var badgeMp = parseInt(document.getElementById("famBadgeMp").value);
	mp += badgeMp;
	var badgeCritRate = parseInt(document.getElementById("famBadgeCrit%").value);
	critRate.push(badgeCritRate);
	var badgeIgnoreDef = parseInt(document.getElementById("famBadgeIed").value);
	ied.push(badgeIgnoreDef);
	var badgePercDmg = parseInt(document.getElementById("famBadgeDam").value);
	dmg.push(badgePercDmg);
	var badgePercAtt = parseInt(document.getElementById("famBadgeAtt%").value);
	percentAtt.push(badgePercAtt);
	var badgeAtt = parseInt(document.getElementById("famBadgeAtt").value);
	att += badgeAtt;
	var badgePercMagAtt = parseInt(document.getElementById("famBadgeMAtt%").value);
	percentMagAtt.push(badgePercMagAtt);
	var badgeMagAtt = parseInt(document.getElementById("famBadgeMAtt").value);
	mAtt += badgeMagAtt;
}

function getLegionBoardSelections() {
	var legionStr = parseInt(document.getElementById("legionStr").value);
	cStr += (legionStr * 5);
	var legionDex = parseInt(document.getElementById("legionDex").value);
	cDex += (legionDex * 5);
	var legionInt = parseInt(document.getElementById("legionInt").value);
	cInt += (legionInt * 5);
	var legionLuk = parseInt(document.getElementById("legionLuk").value);
	cLuk += (legionLuk * 5);
	var legionHp = parseInt(document.getElementById("legionHp").value);
	hp += (legionHp * 250);
	var legionMp = parseInt(document.getElementById("legionMp").value);
	mp += (legionMp * 250);
	var legionCritRate = parseInt(document.getElementById("legionCritRate").value);
	critRate.push(legionCritRate * 1);
	var legionCritDam = parseInt(document.getElementById("legionCritDam").value);
	critDmg.push(legionCritDam * 0.5);
	var legionIed = parseInt(document.getElementById("legionIed").value);
	ied.push(legionIed * 1);
	var legionBoss = parseInt(document.getElementById("legionBoss").value);
	bossDmg.push(legionBoss * 1);
	var legionNormMonDam = parseInt(document.getElementById("legionNormMonDam").value);
	monsterDmg.push(legionNormMonDam * 1);
	var legionBuffDuration = parseInt(document.getElementById("legionBuffDuration").value);
	buffDuration.push(legionBuffDuration * 1);
	var legionAtt = parseInt(document.getElementById("legionAtt").value);
	att += legionAtt;
	var legionMagAtt = parseInt(document.getElementById("legionMagAtt").value);
	mAtt += legionMagAtt;
	//omit abnormal status, exp bonus
	//var legionAbnormal = parseInt(document.getElementById("legionAbnormal").value);
	//var legionExp = parseInt(document.getElementById("legionExp").value);
}

function getLegionMemberSelections() {
	var memberStr = parseInt(document.getElementById("memberStr").value);
	finalStr += memberStr;
	var memberDex = parseInt(document.getElementById("memberDex").value);
	finalDex += memberDex;
	var memberInt = parseInt(document.getElementById("memberInt").value);
	finalInt += memberInt;
	var memberLuk = parseInt(document.getElementById("memberLuk").value);
	finalLuk += memberLuk;
	var memberPercHp = parseInt(document.getElementById("memberHp%").value);
	percentHp.push(memberPercHp);
	var memberHp = parseInt(document.getElementById("memberHp").value);
	finalHp += memberHp;
	var memberPercMp = parseInt(document.getElementById("memberMp%").value);
	percentMp.push(memberPercMp);
	var memberCritRate = parseInt(document.getElementById("memberCritRate").value);
	critRate.push(memberCritRate);
	var memberCritDamage = parseInt(document.getElementById("memberCritDamage").value);
	critDmg.push(memberCritDamage);
	var memberIgnoreDefense = parseInt(document.getElementById("memberIgnoreDefense").value);
	ied.push(memberIgnoreDefense);
	var memberBossDamage = parseInt(document.getElementById("memberBossDamage").value);
	bossDmg.push(memberBossDamage);
	var memberBuffDuration = parseInt(document.getElementById("memberBuffDuration").value);
	buffDuration.push(memberBuffDuration);
	var memberDamageChance = parseInt(document.getElementById("memberDamageChance").value);
	dmg.push(memberDamageChance / 5); /* use average, 20% chance to trigger 4|8|12|14|20 / 5 */
	var memberCooldown = parseInt(document.getElementById("memberCooldown").value);
	cdReduction.push(memberCooldown);
	/*var memberSummonDuration = parseInt(document.getElementById("memberSummonDuration").value);*/
}

function getEquipmentSelections() {
	// Get equipment stats, apply conditionals if applicable.
	// Weapons, secondaries applied seperately in other function
	/* Rings, universal */
	var ringTotalStats = ring1JobStat + ring1AllStat + ring2JobStat + ring2AllStat + ring3JobStat + ring3AllStat + ring4JobStat + ring4AllStat;
	var ringTotalHp = ring1Hp + ring2Hp + ring3Hp + ring4Hp;
	var ringTotalMp = ring1Mp + ring2Mp + ring3Mp + ring4Mp;
	var ringTotalAtt = ring1Att + ring2Att + ring3Att + ring4Att;
	var ringTotalMagAtt = ring1MAtt + ring2MAtt + ring3MAtt + ring4MAtt;
	cStr += ringTotalStats; cDex += ringTotalStats; cInt += ringTotalStats; cLuk += ringTotalStats;
	hp += ringTotalHp; mp += ringTotalMp; att += ringTotalAtt; mAtt += ringTotalMagAtt;
	/* Pocket, universal */
	hp += pocketHp; mp += pocketMp; att += pocketAtt; mAtt += pocketMAtt;
	var selectedPocket = document.getElementById("selectPocket").value;
	if (selectedPocket == "cursedSpellbook") {
		// special case: additional 10 main stat on book
		switch (primaryStat) {
			case "str":
				cStr += 10;
				break;
			case "dex":
				cDex += 10;
				break;
			case "int":
				cInt += 10;
				break;
			case "luk":
				cLuk += 10;
				break;
			default:
				break;
		}
		cStr += pocketAllStat; cDex += pocketAllStat; cInt += pocketAllStat; cLuk += pocketAllStat;
	} else {
		var pocketTotalStats = pocketJobStat + pocketAllStat;
		cStr += pocketTotalStats; cDex += pocketTotalStats; cInt += pocketTotalStats; cLuk += pocketTotalStats;
	}
	/* Pendants, universal */
	var pendantTotalStats = pendant1JobStat + pendant1AllStat + pendant2JobStat + pendant2AllStat;
	cStr += pendantTotalStats; cDex += pendantTotalStats; cInt += pendantTotalStats; cLuk += pendantTotalStats;
	hp += (pendant1Hp + pendant2Hp); mp += pendant1Mp + pendant2Mp; att += pendant1Att + pendant2Att; mAtt = pendant1MAtt + pendant2MAtt
		/* Additional Item specific bonuses */
	var selectedPendant1 = document.getElementById("selectPendant1").value;
	var selectedPendant2 = document.getElementById("selectPendant2").value;
	if (selectedPendant1 == "daybreakPendant" || selectedPendant2 == "daybreakPendant") {
		percentHp.push(5);
	}
	if (selectedPendant1 == "dominatorPendant" || selectedPendant2 == "dominatorPendant") {
		percentHp.push(10);
		percentMp.push(10);
	}
	if (selectedPendant1 == "sourceOfSuffering" || selectedPendant2 == "sourceOfSuffering") {
		percentHp.push(5);
	}
	/* Belt, universal */
	var beltTotalStats = beltJobStat + beltAllStat;
	cStr += beltTotalStats; cDex += beltTotalStats; cInt += beltTotalStats; cLuk += beltTotalStats;
	hp += beltHp; mp += beltMp; att += beltAtt, mAtt += beltMAtt;
	/* Face accessory, universal */
	var faceTotalStats = faceJobStat + faceAllStat;
	cStr += faceTotalStats; cDex += faceTotalStats; cInt += faceTotalStats; cLuk += faceTotalStats;
	hp += faceHp; mp += faceMp; att += faceAtt; mAtt += faceMAtt;
	/* Eye accessory, universal */
	var eyeTotalStats = eyeJobStat + eyeAllStat;
	cStr += eyeTotalStats; cDex += eyeTotalStats; cInt += eyeTotalStats; cLuk += eyeTotalStats;
	hp += eyeHp; mp += eyeMp; att += eyeAtt; mAtt += eyeMAtt;
	/* Ear accessory, universal */
	var earTotalStats = earJobStat + earAllStat;
	cStr += eyeTotalStats; cDex += eyeTotalStats; cInt += eyeTotalStats; cLuk += eyeTotalStats;
	hp += earHp; mp += earMp; att += earAtt; mAtt += earMAtt;
	/* Badge, universal */
	var badgeTotalStats = badgeJobStat + badgeAllStat;
	cStr += badgeTotalStats; cDex += badgeTotalStats; cInt += badgeTotalStats; cLuk += badgeTotalStats;
	hp += badgeHp; mp += badgeMp; att += badgeAtt; mAtt += badgeMAtt;
	/* Medal, universal */
	var medalTotalStats = medalJobStat + medalAllStat;
	cStr += medalTotalStats; cDex += medalTotalStats; cInt += medalTotalStats; cLuk += medalTotalStats;
	hp += medalHp; mp += medalMp; att += medalAtt; mAtt += medalMAtt;
	/* Heart, universal */
	var heartTotalStats = heartJobStat + heartAllStat;
	cStr += heartTotalStats; cDex += heartTotalStats; cInt += heartTotalStats; cLuk += heartTotalStats;
	hp += heartHp; mp += heartMp; att += heartAtt; mAtt += heartMAtt;
	
	/* Hat, Top, Bottom, Shoes, Shoulder, Gloves, Emblem, Cape [+ weapon, + subweapon on seperate function] class specific */
	var classTotalJobStat = hatJobStat + topJobStat + bottomJobStat + shoeJobStat + shoulderJobStat + gloveJobStat + capeJobStat + emblemJobStat;
	var classTotalAllStat = hatAllStat + topAllStat + bottomAllStat + shoeAllStat + shoulderAllStat + gloveAllStat + capeAllStat + emblemAllStat;
	var classTotalHp = hatHp + topHp + bottomHp + shoeHp + shoulderHp + gloveHp + capeHp + emblemHp;
	var classTotalMp = hatMp + topMp + bottomMp + shoeMp + shoulderMp + gloveMp + capeMp + emblemMp;
	var classTotalAtt = hatAtt + topAtt + bottomAtt + shoeAtt + shoulderAtt + gloveAtt + capeAtt + emblemAtt;
	var classTotalMagAtt = hatMAtt + topMAtt + bottomMAtt + shoeMAtt + shoulderMAtt + gloveMAtt + capeMAtt + emblemMAtt;
	var selectedGlove = document.getElementById("selectGlove").value;
	if (selectedGlove == "tyrantGloves" && classType == "magician") {
		classTotalMp += 300;
	} else {
		classTotalHp += 300;
	}
	cStr += classTotalAllStat; cDex += classTotalAllStat; cInt += classTotalAllStat; cLuk += classTotalAllStat;
	hp += classTotalHp; mp += classTotalMp; att += classTotalAtt; mAtt += classTotalMagAtt;
	switch(primaryStat) {
		case "str":
			cStr += classTotalJobStat; cDex += classTotalJobStat;
			break;
		case "dex":
			cDex += classTotalJobStat; cStr += classTotalJobStat;
			break;
		case "int":
			cInt += classTotalJobStat; cLuk += classTotalJobStat;
			break;
		case "luk":
			cLuk += classTotalJobStat; cDex += classTotalJobStat;
			break;
		default:
			break;
	}
	var cselectedEmblem = document.getElementById("selectEmblem").value;
	if (charClass == "demonAvenger" && cselectedEmblem == "classEmblem") {
		hp += 500;
	}
	if (classType == "warrior" && cselectedEmblem == "mitrasRage") {
		hp += 700;
	}
}

function updateWeaponData() {
	let charData = classData[charClass];
	classType = charData.classType;
	weaponAttackSpeed = charData.weaponAttackSpeed;
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
	}
}

function updateSubWeaponData() {
	let charData = classData[charClass];
	let selectedSubWeapon = document.getElementById("selectSubweapon").value;
	let subWeapon = charData.secondary;
	if (charClass == "zero") { selectedSubWeapon = document.getElementById("selectWeapon").value; }; // if class = "zero", match weapon type
	let subWeaponIndex = subWeapon[selectedSubWeapon]?.subWeaponRefNum;
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
	} else if (charClass != "unselected" && selectedSubWeapon != "none") { // other cases, obtain values from object
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
		finalDamage.push(10);
	}
}

function fillEquipmentStats() {
	var equipment = ["ring1", "ring2", "ring3", "ring4", "pocket", "pendant1", "pendant2", "belt", "face", "eye", "ear", "badge", "medal", "heart",
		/* Primary stat dependent */ "hat", "top", "bottom", "shoe", "shoulder", "glove", "cape", "emblem"];
	equipment.forEach((element) => {
		var elementStr = document.getElementById(element + "Str");
		var elementDex = document.getElementById(element + "Dex");
		var elementInt = document.getElementById(element + "Int");
		var elementLuk = document.getElementById(element + "Luk");
		var elementHp = document.getElementById(element + "Hp");
		var elementMp = document.getElementById(element + "Mp");
		var elementAtt = document.getElementById(element + "Att");
		var elementMAtt = document.getElementById(element + "MAtt");
		switch(primaryStat) {
			case "str":
			case "dex":
				elementStr.innerHTML = parseInt(eval(element + "JobStat")) + parseInt(eval(element + "AllStat"));
				elementDex.innerHTML = parseInt(eval(element + "JobStat")) + parseInt(eval(element + "AllStat"));
				elementInt.innerHTML = elementLuk.innerHTML = parseInt(eval(element + "AllStat"));
				break;
			case "int":
				elementStr.innerHTML = elementDex.innerHTML = parseInt(eval(element + "AllStat"));
				elementInt.innerHTML = parseInt(eval(element + "JobStat")) + parseInt(eval(element + "AllStat"));
				elementLuk.innerHTML = parseInt(eval(element + "AllStat"));
				break;
			case "luk":
				elementStr.innerHTML = parseInt(eval(element + "JobStat"));
				elementDex.innerHTML = elementInt.innerHTML = parseInt(eval(element + "AllStat"));
				elementLuk.innerHTML = parseInt(eval(element + "AllStat")) + parseInt(eval(element + "AllStat"));
				break;
			default:
				break;
		}
		elementHp.innerHTML = parseInt(eval(element + "Hp"));
		elementMp.innerHTML = parseInt(eval(element + "Mp"));
		elementAtt.innerHTML = parseInt(eval(element + "Att"));
		elementMAtt.innerHTML = parseInt(eval(element + "MAtt"));
	});
	// Additional item specific modifiers
	var selectedPocket = document.getElementById("selectPocket").value;
	if (selectedPocket == "cursedSpellbook") {
		switch (primaryStat) {
			case "str":
				document.getElementById("pocketStr").innerHTML = pocketAllStat + 10;
				break;
			case "dex":
				document.getElementById("pocketDex").innerHTML = pocketAllStat + 10;
				break;
			case "int":
				document.getElementById("pocketInt").innerHTML = pocketAllStat + 10;
				break;
			case "luk":
				document.getElementById("pocketLuk").innerHTML = pocketAllStat + 10;
				break;
			default:
				break;
		}
	}
	var selectedGlove = document.getElementById("selectGlove").value;
	if (selectedGlove == "tyrantGloves") {
		if (classType == "magician") {
			document.getElementById("gloveHp").innerHTML = gloveHp;
			document.getElementById("gloveMp").innerHTML = (gloveMp += 300);
		} else {
			document.getElementById("gloveHp").innerHTML = (gloveHp += 300);
			document.getElementById("gloveMp").innerHTML = gloveMp;
		}
	}
	var cselectedEmblem = document.getElementById("selectEmblem").value;
	if (charClass == "demonAvenger" && cselectedEmblem == "classEmblem") {
		hp += 500;
		document.getElementById("emblemHp").innerHTML = emblemHp + 500;
	} else if (classType == "warrior" && cselectedEmblem == "mitrasRage") {
		hp += 700;
		document.getElementById("emblemHp").innerHTML = emblemHp + 700;
	} else {
		document.getElementById("emblemHp").innerHTML = emblemHp;
	}

}

function editEquipmentImages() {
	var selectedHat = document.getElementById("selectHat").value;
    var hatEquipImage = document.getElementById("hatImage2");
	var selectedTop = document.getElementById("selectTop").value;
    var topEquipImage = document.getElementById("topImage2");
	var selectedBottom = document.getElementById("selectBottom").value;
    var bottomEquipImage = document.getElementById("bottomImage2");
	var selectedPocket = document.getElementById("selectPocket").value;
    var pocketEquipImage = document.getElementById("pocketImage2");
	
	switch (classType) {
		case "warrior":
			switch (selectedHat) {
				case "rootAbyssHat":
					hatEquipImage.src = "images/warrior/01003797.img.info.icon._outlink.png";
					break;
				case "absolabHat":
					hatEquipImage.src = "images/warrior/01004422.img.info.icon._outlink.png";
					break;
				case "arcaneHat":
					hatEquipImage.src = "images/warrior/01004808.img.info.icon._outlink.png";
					break;
				case "eternalHat":
					hatEquipImage.src = "images/warrior/01005980.img.info.icon._outlink.png";
					break;
			}
			switch(selectedTop) {
				case "rootAbyssTop":
					topEquipImage.src = "images/warrior/01042254.img.info.icon._outlink.png";
					break;
				case "eternalTop":
					topEquipImage.src = "images/warrior/01042433.img.info.icon._outlink.png";
					break;
			}
			switch(selectedBottom) {
				case "rootAbyssBottom":
					bottomEquipImage.src = "images/warrior/01062165.img.info.icon._outlink.png";
					break;
				case "eternalBottom":
					bottomEquipImage.src = "images/warrior/01062285.img.info.icon._outlink.png";
					break;
			}
			switch(selectedPocket) {
				case "cursedSpellbook":
					pocketEquipImage.src = "images/warrior/01162080.img.info.icon._outlink.png";
					break;
			}
			break;
		case "bowman":
			switch (selectedHat) {
				case "rootAbyssHat":
					hatEquipImage.src = "images/bowman/01003799.img.info.icon._outlink.png";
					break;
				case "absolabHat":
					hatEquipImage.src = "images/bowman/01004424.img.info.icon._outlink.png";
					break;
				case "arcaneHat":
					hatEquipImage.src = "images/bowman/01004810.img.info.icon._outlink.png";
					break;
				case "eternalHat":
					hatEquipImage.src = "images/bowman/01005982.img.info.icon._outlink.png";
					break;
			}
			switch(selectedTop) {
				case "rootAbyssTop":
					topEquipImage.src = "images/bowman/01042256.img.info.icon._outlink.png";
					break;
				case "eternalTop":
					topEquipImage.src = "images/bowman/01042435.img.info.icon._outlink.png";
					break;
			}
			switch(selectedBottom) {
				case "rootAbyssBottom":
					bottomEquipImage.src = "images/bowman/01062167.img.info.icon._outlink.png";
					break;
				case "eternalBottom":
					bottomEquipImage.src = "images/bowman/01062287.img.info.icon._outlink.png";
					break;
			}
			switch(selectedPocket) {
				case "cursedSpellbook":
					pocketEquipImage.src = "images/bowman/01162082.img.info.icon._outlink.png";
					break;
			}
			break;
		case "magician":
			switch (selectedHat) {
				case "rootAbyssHat":
					hatEquipImage.src = "images/magician/01005303.img.info.icon._outlink.png";
					break;
				case "absolabHat":
					hatEquipImage.src = "images/magician/01004423.img.info.icon._outlink.png";
					break;
				case "arcaneHat":
					hatEquipImage.src = "images/magician/01004809.img.info.icon._outlink.png";
					break;
				case "eternalHat":
					hatEquipImage.src = "images/magician/01005981.img.info.icon._outlink.png";
					break;
			}
			switch(selectedTop) {
				case "rootAbyssTop":
					topEquipImage.src = "images/magician/01042393.img.info.icon._outlink.png";
					break;
				case "eternalTop":
					topEquipImage.src = "images/magician/01042434.img.info.icon._outlink.png";
					break;
			}
			switch(selectedBottom) {
				case "rootAbyssBottom":
					bottomEquipImage.src = "images/magician/01062259.img.info.icon._outlink.png";
					break;
				case "eternalBottom":
					bottomEquipImage.src = "images/magician/01062286.img.info.icon._outlink.png";
					break;
			}
			switch(selectedPocket) {
				case "cursedSpellbook":
					pocketEquipImage.src = "images/magician/sbinfo.icon._outlink.png";
					break;
			}
			break;
		case "pirate":
			switch (selectedHat) {
				case "rootAbyssHat":
					hatEquipImage.src = "images/pirate/01003801.img.info.icon._outlink.png";
					break;
				case "absolabHat":
					hatEquipImage.src = "images/pirate/01004426.img.info.icon._outlink.png";
					break;
				case "arcaneHat":
					hatEquipImage.src = "images/pirate/01004812.img.info.icon._outlink.png";
					break;
				case "eternalHat":
					hatEquipImage.src = "images/pirate/01005984.img.info.icon._outlink.png";
					break;
			}
			switch(selectedTop) {
				case "rootAbyssTop":
					topEquipImage.src = "images/pirate/01042258.img.info.icon._outlink.png";
					break;
				case "eternalTop":
					topEquipImage.src = "images/pirate/01042437.img.info.icon._outlink.png";
					break;
			}
			switch(selectedBottom) {
				case "rootAbyssBottom":
					bottomEquipImage.src = "images/pirate/01062169.img.info.icon._outlink.png";
					break;
				case "eternalBottom":
					bottomEquipImage.src = "images/pirate/01062289.img.info.icon._outlink.png";
					break;
			}
			switch(selectedPocket) {
				case "cursedSpellbook":
					if (primaryStat == "str") {
						pocketEquipImage.src = "images/warrior/01162080.img.info.icon._outlink.png";
					} else {
						pocketEquipImage.src = "images/bowman/01162082.img.info.icon._outlink.png";
					}
					break;
			}
			break;
		case "thief":
			switch (selectedHat) {
				case "rootAbyssHat":
					hatEquipImage.src = "images/thief/01003800.img.info.icon._outlink.png";
					break;
				case "absolabHat":
					hatEquipImage.src = "images/thief/01004425.img.info.icon._outlink.png";
					break;
				case "arcaneHat":
					hatEquipImage.src = "images/thief/01004811.img.info.icon._outlink.png";
					break;
				case "eternalHat":
					hatEquipImage.src = "images/thief/01005983.img.info.icon._outlink.png";
					break;
			}
			switch(selectedTop) {
				case "rootAbyssTop":
					topEquipImage.src = "images/thief/01042257.img.info.icon._outlink.png";
					break;
				case "eternalTop":
					topEquipImage.src = "images/thief/01042436.img.info.icon._outlink.png";
					break;
			}
			switch(selectedBottom) {
				case "rootAbyssBottom":
					bottomEquipImage.src = "images/thief/01062168.img.info.icon._outlink.png";
					break;
				case "eternalBottom":
					bottomEquipImage.src = "images/thief/01062288.img.info.icon._outlink.png";
					break;
			}
			switch(selectedPocket) {
				case "cursedSpellbook":
					pocketEquipImage.src = "images/thief/01162083.img.info.icon._outlink.png";
					break;
			}
			break;
		default:
			break;
	}
}

/* + add equipment specific bonuses */
function getSetEffects() {
	var selectedHeart = document.getElementById("selectHeart").value;
	switch(selectedHeart) {
        case "blackHeart":
			pitchedSet += 1;
            break;
    }
	var selectedMedal = document.getElementById("selectMedal").value;
	switch(selectedMedal) {
        case "sevenDayMonsterParker":
			ied.push(10);
            monsterParkSet += 1;
            break;
    }
	var selectedEmblem = document.getElementById("selectEmblem").value;
	switch(selectedEmblem) {
        case "mitrasRage":
            pitchedSet += 1;
            break;
    }
	var selectedWeapon = document.getElementById("selectWeapon").value;
	switch(selectedWeapon) {
        case "fafnirWeapon":
			rootAbyssSet += 1;
            break;
		case "absolabWeapon":
            absolabSet += 1;
            break;
		case "arcaneWeapon":
            arcaneSet += 1;
            break;
		case "genesisWeapon":
            genesisWeapon = 1;
            break;
    }
	var selectedFace = document.getElementById("selectFace").value;
	switch(selectedFace) {
        case "condensedPowerCrystal":
			bossSet += 1;
            break;
        case "twilightMark":
			dawnSet += 1;
            break;
        case "berserked":
			pitchedSet += 1;
            break;	
    }
	var selectedEye = document.getElementById("selectEye").value;
	switch(selectedEye) {
		case "aquaticLetterEyeAccessory":
            bossSet += 1;
            break;
        case "blackBeanMark":
            bossSet += 1;
            break;
		case "papulatusMark":
            bossSet += 1;
            break;
        case "magicEyepatch":
            pitchedSet += 1;
            break;
    }
	var selectedEar = document.getElementById("selectEar").value;
	switch(selectedEar) {
		case "superiorGolluxEarrings":
            golluxSet += 1;
            break;
		case "estellaEarrings":
            dawnSet += 1;
            break;
        case "commandingForceEarrings":
            pitchedSet += 1;
            break;
    }
	var selectedBelt = document.getElementById("selectBelt").value;
	switch(selectedBelt) {
        case "superiorGolluxBelt":
            golluxSet += 1;
            break;
		case "dreamyBelt":
            pitchedSet += 1;
            break;
    }
	var selectedGlove = document.getElementById("selectGlove").value;
	switch(selectedGlove) {
        case "absolabGloves":
            absolabSet += 1;
            break;
		case "arcaneGloves":
            arcaneSet += 1;
            break;
    }
	var selectedCape = document.getElementById("selectCape").value;
	switch(selectedCape) {
        case "absolabCape":
            absolabSet += 1;
            break;
		case "arcaneCape":
            arcaneSet += 1;
            break;
    }
	var selectedShoe = document.getElementById("selectShoe").value;
	switch(selectedShoe) {
        case "absolabShoe":
            absolabSet += 1;
            break;
		case "arcaneShoe":
            arcaneSet += 1;
            break;	
    }
	var selectedShoulder = document.getElementById("selectShoulder").value;
	switch(selectedShoulder) {
		case "absolabShoulder":
            absolabSet += 1;
            break;
        case "arcaneShoulder":
            arcaneSet += 1;
            break;
		case "eternalShoulder":
            eternalSet += 1;
            break;
    }
	var selectedBadge = document.getElementById("selectBadge").value;
	switch(selectedBadge) {
        case "crystalVentusBadge":
			bossSet += 1;
            break;
        case "sevenDaysBadge":
			ied.push(10);
			monsterParkSet += 1;
            break;
        case "genesisBadge":
			pitchedSet += 1;
            break;
    }
	var selectedRing1 = document.getElementById("selectRing1").value;
	var selectedRing2 = document.getElementById("selectRing2").value;
	var selectedRing3 = document.getElementById("selectRing3").value;
	var selectedRing4 = document.getElementById("selectRing4").value;
	switch(selectedRing1) {
		case "superiorGolluxRing":
            golluxSet += 1;
            break;
		case "dawnGuardianAngelRing":
            dawnSet += 1;
            break;
		case "endlessTerror":
            pitchedSet += 1;
            break;
    }
	switch(selectedRing2) {
		case "superiorGolluxRing":
            golluxSet += 1;
            break;
		case "dawnGuardianAngelRing":
            dawnSet += 1;
            break;
		case "endlessTerror":
            pitchedSet += 1;
            break;
    }
	switch(selectedRing3) {
		case "superiorGolluxRing":
            golluxSet += 1;
            break;
		case "dawnGuardianAngelRing":
            dawnSet += 1;
            break;
		case "endlessTerror":
            pitchedSet += 1;
            break;
    }
	switch(selectedRing4) {
		case "superiorGolluxRing":
            golluxSet += 1;
            break;
		case "dawnGuardianAngelRing":
            dawnSet += 1;
            break;
		case "endlessTerror":
            pitchedSet += 1;
            break;
    }
	var selectedPendant1 = document.getElementById("selectPendant1").value;
	var selectedPendant2 = document.getElementById("selectPendant2").value;
	switch(selectedPendant1) {
		case "daybreakPendant":
            dawnSet += 1;
            break;
        case "dominatorPendant":
            bossSet += 1;
            break;
		case "superiorGolluxPendant":
            golluxSet += 1;
            break;
		case "sourceOfSuffering":
            pitchedSet += 1;
            break;
    }
	switch(selectedPendant2) {
		case "daybreakPendant":
            dawnSet += 1;
            break;
        case "dominatorPendant":
            bossSet += 1;
            break;
		case "superiorGolluxPendant":
            golluxSet += 1;
            break;
		case "sourceOfSuffering":
            pitchedSet += 1;
            break;
    }
	var selectedPocket = document.getElementById("selectPocket").value;
	switch(selectedPocket) {
		case "pinkHolyCup":
            bossSet += 1;
            break;
        case "cursedSpellbook":
            pitchedSet += 1;
            break;
    }
	var selectedHat = document.getElementById("selectHat").value;
	switch(selectedHat) {
		case "rootAbyssHat":
            rootAbyssSet += 1;
            break;
        case "absolabHat":
            absolabSet += 1;
            break;
		case "arcaneHat":
            arcaneSet += 1;
            break;
		case "eternalHatHat":
            eternalSet += 1;
            break;	
    }
	var selectedTop = document.getElementById("selectTop").value;
	switch(selectedTop) {
		case "rootAbyssTop":
            rootAbyssSet += 1;
            break;
		case "eternalTop":
            eternalSet += 1;
            break;	
    }
	var selectedBottom = document.getElementById("selectBottom").value;
	switch(selectedBottom) {
		case "rootAbyssBottom":
			rootAbyssSet += 1;
            break;
		case "eternalBottom":
            eternalSet += 1;
            break;	
    }
	/* Lucky item */
	if (genesisWeapon >= 1 && rootAbyssSet >= 3) {
		rootAbyssSet += 1;
	}
	if (genesisWeapon >= 1 && absolabSet >= 3) {
		absolabSet += 1;
	}
	if (genesisWeapon >= 1 && arcaneSet >= 3) {
		arcaneSet += 1;
	}
	if (genesisWeapon >= 1 && eternalSet >= 3) {
		eternalSet += 1;
	}
	/* calculate */
	switch (pitchedSet) {
		case '2':
			cStr += 10; cDex += 10; cInt += 10; cLuk += 10; hp += 250; att += 10; mAtt += 10; bossDmg.push(10);
			break;
		case '3':
			cStr += 20; cDex += 20; cInt += 20; cLuk += 20; hp += 500; att += 20; mAtt += 20; bossDmg.push(10); ied.push(10);
			break;
		case '4':
			cStr += 35; cDex += 35; cInt += 35; cLuk += 35; hp += 875; att += 35; mAtt += 35; bossDmg.push(10); ied.push(10); critDmg.push(5);
			break;
		case '5':
			cStr += 50; cDex += 50; cInt += 50; cLuk += 50; hp += 1250; att += 50; mAtt += 50; bossDmg.push(20); ied.push(10); critDmg.push(5);
			break;
		case '6':
			cStr += 65; cDex += 65; cInt += 65; cLuk += 65; hp += 1625; att += 65; mAtt += 65; bossDmg.push(20); ied.push(10); ied.push(10); critDmg.push(5);
			break;
		case '7':
			cStr += 80; cDex += 80; cInt += 80; cLuk += 80; hp += 2000; att += 80; mAtt += 80; bossDmg.push(20); ied.push(10); ied.push(10); critDmg.push(10);
			break;
		case '8':
			cStr += 95; cDex += 95; cInt += 95; cLuk += 95; hp += 2375; att += 95; mAtt += 95; bossDmg.push(30); ied.push(10); ied.push(10); critDmg.push(10);
			break;
		case '9':
			cStr += 110; cDex += 110; cInt += 110; cLuk += 110; hp += 2750; att += 110; mAtt += 110; bossDmg.push(30); ied.push(10); ied.push(10); critDmg.push(15);
			break;
	}
	switch (rootAbyssSet) {
		case '2':
			switch(primaryStat) {
				case 'str':
				case 'dex':
					cStr += 20; cDex += 20; hp += 1000; mp += 1000;
					break;
				case 'int':
					cInt += 20; cLuk += 20; hp += 1000; mp += 1000;
					break;
				case 'luk':
					cLuk += 20; cDex += 20; hp += 1000; mp += 1000;
					break;
			}
			break;
		case '3':
			switch(primaryStat) {
				case 'str':
				case 'dex':
					cStr += 20; cDex += 20; hp += 1000; percentHp.push(10); mp += 1000; percentMp.push(10); att += 50;
					break;
				case 'int':
					cInt += 20; cLuk += 20; hp += 1000; percentHp.push(10); mp += 1000; percentMp.push(10); Matt += 50;
					break;
				case 'luk':
					cLuk += 20; cDex += 20; hp += 1000; percentHp.push(10); mp += 1000; percentMp.push(10); att += 50;
					break;
			}
			break;
		case '4':
			switch(primaryStat) {
				case 'str':
				case 'dex':
					cStr += 20; cDex += 20; hp += 1000; percentHp.push(10); mp += 1000; percentMp.push(10); att += 50; bossDmg.push(30);
					break;
				case 'int':
					cInt += 20; cLuk += 20; hp += 1000; percentHp.push(10); mp += 1000; percentMp.push(10); Matt += 50; bossDmg.push(30);
					break;
				case 'luk':
					cLuk += 20; cDex += 20; hp += 1000; percentHp.push(10); mp += 1000; percentMp.push(10); att += 50; bossDmg.push(30);
					break;
			}
			break;
	}
	switch (absolabSet) {
		case '2':
			hp += 1500; mp += 1500; att += 20; mAtt += 20; bossDmg.push(10);
			break;
		case '3':
			cStr += 30; cDex += 30; cInt += 30; cLuk += 30; hp += 1500; mp += 1500; att += 40; mAtt += 40; bossDmg.push(20);
			break;
		case '4':
			cStr += 30; cDex += 30; cInt += 30; cLuk += 30; hp += 1500; mp += 1500; att += 65; mAtt += 65; bossDmg.push(20); ied.push(10);
			break;
		case '5':
			cStr += 30; cDex += 30; cInt += 30; cLuk += 30; hp += 1500; mp += 1500; att += 95; mAtt += 95; bossDmg.push(30); ied.push(10);
			break;
		case '6':
			cStr += 30; cDex += 30; cInt += 30; cLuk += 30; hp += 1500; percentHp.push(20); mp += 1500; percentMp.push(20); att += 115; mAtt += 115; bossDmg.push(30); ied.push(10);
			break;
		case '7':
			cStr += 30; cDex += 30; cInt += 30; cLuk += 30; hp += 1500; percentHp.push(20); mp += 1500; percentMp.push(20); att += 135; mAtt += 135; bossDmg.push(30); ied.push(10); ied.push(10);
			break;
	}
	switch (arcaneSet) {
		case '2':
			att += 30; mAtt += 30; bossDmg.push(10);
			break;
		case '3':
			att += 60; mAtt += 60; bossDmg.push(10); ied.push(10);
			break;
		case '4':
			cStr += 50; cDex += 50; cInt += 50; cLuk += 50; att += 95; mAtt += 95; bossDmg.push(20); ied.push(10);
			break;
		case '5':
			cStr += 50; cDex += 50; cInt += 50; cLuk += 50; hp += 2000; mp += 2000; att += 135; mAtt += 135; bossDmg.push(30); ied.push(10);
			break;
		case '6':
			cStr += 50; cDex += 50; cInt += 50; cLuk += 50; hp += 2000; percentHp.push(30); mp += 2000; percentMp.push(30);
			att += 165; mAtt += 165; bossDmg.push(30); ied.push(10);
			break;
		case '7':
			cStr += 50; cDex += 50; cInt += 50; cLuk += 50; hp += 2000; percentHp.push(30); mp += 2000; percentMp.push(30);
			att += 195; mAtt += 195; bossDmg.push(30); ied.push(10); ied.push(10);
			break;
	}
	switch (eternalSet) {
		case '2':
			hp += 2500; mp += 2500; att += 40; mAtt += 40; bossDmg.push(10);
			break;
		case '3':
			cStr += 50; cDex += 50; cInt += 50; cLuk += 50; hp += 2500; mp += 2500; att += 80; mAtt += 80; bossDmg.push(20);
			break;
		case '4':
			cStr += 50; cDex += 50; cInt += 50; cLuk += 50; hp += 2500; percentHp.push(15); mp += 2500; percentMp.push(15);
			att += 120; mAtt += 120; bossDmg.push(30);
			break;
		case '5':
			cStr += 50; cDex += 50; cInt += 50; cLuk += 50; hp += 2500; percentHp.push(15); mp += 2500; percentMp.push(15);
			att += 160; mAtt += 160; bossDmg.push(30); ied.push(20);
			break;
	}
	switch (golluxSet) {
		case '2':
			cStr += 20; cDex += 20; cInt += 20; cLuk += 20; hp += 1500; mp += 1500;
			break;
		case '3':
			cStr += 20; cDex += 20; cInt += 20; cLuk += 20; hp += 1500; percentHp.push(13); mp += 1500; percentMp.push(13);
			att += 35; mAtt += 35;
			break;
		case '4':
			cStr += 20; cDex += 20; cInt += 20; cLuk += 20; hp += 1500; percentHp.push(13); mp += 1500; percentMp.push(13);
			att += 35; mAtt += 35; bossDmg.push(30); ied.push(30);
			break;
	}
	switch (dawnSet) {
		case '2':
			cStr += 10; cDex += 10; cInt += 10; cLuk += 10; att += 10; mAtt += 10; bossDmg.push(10);
			break;
		case '3':
			cStr += 20; cDex += 20; cInt += 20; cLuk += 20; hp += 500; att += 20; mAtt += 20; bossDmg.push(10);
			break;
		case '4':
			cStr += 30; cDex += 30; cInt += 30; cLuk += 30; hp += 750; att += 30; mAtt += 30; bossDmg.push(10); ied.push(10);
			break;
	}
	switch (bossSet) {
		case '3':
			cStr += 10; cDex += 10; cInt += 10; cLuk += 10; percentHp.push(5); percentMp.push(5); att += 5; mAtt += 5;
			break;
		case '5':
			cStr += 20; cDex += 20; cInt += 20; cLuk += 20; percentHp.push(10); percentMp.push(10); att += 10; mAtt += 10;
			break;
		case '7':
			cStr += 30; cDex += 30; cInt += 30; cLuk += 30; percentHp.push(10); percentMp.push(10); att += 20; mAtt += 20; ied.push(10);
			break;
		case '9':
			cStr += 45; cDex += 45; cInt += 45; cLuk += 45; percentHp.push(10); percentMp.push(10); att += 30; mAtt += 30; bossDmg.push(10); ied.push(10);
			break;
	}
	switch (monsterParkSet) {
		case '2':
			cStr += 7; cDex += 7; cInt += 7; cLuk += 7; att += 7; mAtt += 7; ied.push(10);
			break;
	}
}










