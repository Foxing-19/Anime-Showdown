// data/characters.js
module.exports = {

// ===== DRAGON BALL (15) =====

Goku:{
types:["Fighting","Flying"],
baseStats:{hp:100,atk:125,def:95,spa:120,spd:95,spe:115},
ability:"UltraInstinct",
abilityEffect:{
onKO:(self)=>{
self.flags = self.flags || {};
if(!self.flags.ultraInstinctActive){
self.flags.ultraInstinctActive = true;
self.battle.log(`${self.name} awakened Ultra Instinct!`);
self.boosts = self.boosts || {};
self.boosts.spe = (self.boosts.spe||0) + 2;
self.boosts.spa = (self.boosts.spa||0) + 1;
}
}
}
},

Vegeta:{
types:["Fighting"],
baseStats:{hp:95,atk:120,def:90,spa:115,spd:90,spe:110},
ability:"SaiyanPride",
abilityEffect:{
onTurnStart:(self)=>{
if(self.hp === self.maxhp){
self.modifyStat("atk",1.2);
}
}
}
},

Gohan:{
types:["Fighting","Psychic"],
baseStats:{hp:95,atk:115,def:90,spa:120,spd:95,spe:100},
ability:"PotentialUnleashed"
},

Piccolo:{
types:["Fighting","Psychic"],
baseStats:{hp:100,atk:100,def:105,spa:110,spd:110,spe:80},
ability:"NamekianRegeneration"
},

Frieza:{
types:["Psychic","Ice"],
baseStats:{hp:95,atk:105,def:90,spa:125,spd:100,spe:115},
ability:"GoldenEvolution"
},

Cell:{
types:["Bug","Psychic"],
baseStats:{hp:100,atk:110,def:100,spa:115,spd:100,spe:105},
ability:"PerfectAdaptation"
},

MajinBuu:{
types:["Fairy"],
baseStats:{hp:120,atk:100,def:95,spa:105,spd:110,spe:70},
ability:"MajinRegeneration"
},

Beerus:{
types:["Psychic","Dark"],
baseStats:{hp:105,atk:115,def:95,spa:130,spd:110,spe:120},
ability:"GodOfDestruction"
},

Whis:{
types:["Psychic"],
baseStats:{hp:100,atk:90,def:100,spa:130,spd:120,spe:135},
ability:"AngelGuidance"
},

Broly:{
types:["Fighting"],
baseStats:{hp:110,atk:135,def:95,spa:95,spd:90,spe:95},
ability:"LegendaryRage"
},

Trunks:{
types:["Steel","Fighting"],
baseStats:{hp:95,atk:115,def:95,spa:95,spd:90,spe:105},
ability:"FutureResolve"
},

Android17:{
types:["Electric"],
baseStats:{hp:95,atk:105,def:100,spa:100,spd:105,spe:110},
ability:"InfiniteEnergy"
},

Android18:{
types:["Electric"],
baseStats:{hp:95,atk:100,def:100,spa:95,spd:100,spe:110},
ability:"PrecisionStriker"
},

Jiren:{
types:["Fighting"],
baseStats:{hp:110,atk:130,def:110,spa:110,spd:110,spe:100},
ability:"LimitBreaker"
},

Hit:{
types:["Dark"],
baseStats:{hp:95,atk:115,def:90,spa:105,spd:95,spe:120},
ability:"TimeSkip"
},

// ===== NARUTO (15) =====

Naruto:{
types:["Fighting"],
baseStats:{hp:105,atk:115,def:90,spa:100,spd:95,spe:110},
ability:"NineTails"
},

Sasuke:{
types:["Electric","Dark"],
baseStats:{hp:90,atk:110,def:85,spa:120,spd:90,spe:115},
ability:"Sharingan"
},

Sakura:{
types:["Fighting"],
baseStats:{hp:100,atk:110,def:95,spa:80,spd:95,spe:85},
ability:"MedicalNinjutsu"
},

Kakashi:{
types:["Electric"],
baseStats:{hp:95,atk:105,def:90,spa:110,spd:95,spe:110},
ability:"CopyNinja"
},

MightGuy:{
types:["Fighting"],
baseStats:{hp:95,atk:130,def:90,spa:70,spd:85,spe:120},
ability:"EightGates"
},

Itachi:{
types:["Dark","Psychic"],
baseStats:{hp:90,atk:105,def:85,spa:125,spd:100,spe:110},
ability:"MangekyoSharingan"
},

Madara:{
types:["Dark"],
baseStats:{hp:105,atk:120,def:100,spa:125,spd:100,spe:105},
ability:"Rinnegan"
},

Obito:{
types:["Dark","Ghost"],
baseStats:{hp:100,atk:110,def:90,spa:110,spd:95,spe:105},
ability:"Kamui"
},

Nagato:{
types:["Psychic"],
baseStats:{hp:100,atk:95,def:95,spa:130,spd:110,spe:90},
ability:"SixPaths"
},

Gaara:{
types:["Ground"],
baseStats:{hp:100,atk:90,def:120,spa:95,spd:105,spe:80},
ability:"SandShield"
},

Minato:{
types:["Electric"],
baseStats:{hp:95,atk:110,def:90,spa:100,spd:90,spe:130},
ability:"FlyingRaijin"
},

Tsunade:{
types:["Fighting"],
baseStats:{hp:110,atk:115,def:100,spa:85,spd:95,spe:80},
ability:"Byakugo"
},

Orochimaru:{
types:["Poison"],
baseStats:{hp:100,atk:95,def:90,spa:120,spd:100,spe:95},
ability:"SnakeImmortality"
},

Shikamaru:{
types:["Dark"],
baseStats:{hp:95,atk:80,def:90,spa:100,spd:105,spe:85},
ability:"ShadowStrategy"
},

RockLee:{
types:["Fighting"],
baseStats:{hp:95,atk:120,def:90,spa:50,spd:80,spe:125},
ability:"TaijutsuMaster"
},

// ===== ONE PIECE (15) =====

Luffy:{
types:["Fighting"],
baseStats:{hp:105,atk:120,def:100,spa:80,spd:95,spe:110},
ability:"GearFifth"
},

Zoro:{
types:["Steel","Fighting"],
baseStats:{hp:100,atk:125,def:105,spa:70,spd:95,spe:95},
ability:"ThreeSwordStyle"
},

Sanji:{
types:["Fire","Fighting"],
baseStats:{hp:95,atk:110,def:90,spa:80,spd:90,spe:120},
ability:"IfritJambei"
},

Law:{
types:["Psychic"],
baseStats:{hp:95,atk:105,def:90,spa:110,spd:95,spe:105},
ability:"Room"
},

Ace:{
types:["Fire"],
baseStats:{hp:100,atk:115,def:90,spa:110,spd:95,spe:105},
ability:"FlameEmperor"
},

Shanks:{
types:["Dark"],
baseStats:{hp:105,atk:120,def:95,spa:90,spd:100,spe:105},
ability:"ConquerorHaki"
},

Mihawk:{
types:["Steel"],
baseStats:{hp:100,atk:130,def:100,spa:80,spd:95,spe:100},
ability:"WorldStrongestSwordsman"
},

Kaido:{
types:["Dragon"],
baseStats:{hp:120,atk:135,def:110,spa:100,spd:105,spe:90},
ability:"DragonEmperor"
},

Katakuri:{
types:["Psychic"],
baseStats:{hp:105,atk:110,def:95,spa:95,spd:95,spe:110},
ability:"FutureSight"
},

BoaHancock:{
types:["Fairy"],
baseStats:{hp:95,atk:100,def:90,spa:110,spd:100,spe:105},
ability:"LoveLoveFruit"
},

Kid:{
types:["Steel"],
baseStats:{hp:105,atk:120,def:100,spa:90,spd:90,spe:95},
ability:"Magnetism"
},

Killer:{
types:["Dark"],
baseStats:{hp:95,atk:115,def:90,spa:80,spd:85,spe:115},
ability:"SpinSlash"
},

Doflamingo:{
types:["Dark"],
baseStats:{hp:100,atk:110,def:95,spa:100,spd:90,spe:100},
ability:"StringMaster"
},

Crocodile:{
types:["Ground"],
baseStats:{hp:100,atk:105,def:95,spa:110,spd:95,spe:95},
ability:"SandLogia"
},

Sabo:{
types:["Fire","Fighting"],
baseStats:{hp:100,atk:115,def:95,spa:100,spd:95,spe:105},
ability:"DragonClaw"
},

// ===== BLEACH (15) =====

Ichigo:{types:["Ghost","Fighting"],baseStats:{hp:100,atk:120,def:95,spa:110,spd:90,spe:110},ability:"Bankai"},
Rukia:{types:["Ice","Ghost"],baseStats:{hp:90,atk:95,def:90,spa:110,spd:95,spe:105},ability:"IceBankai"},
Byakuya:{types:["Steel","Ghost"],baseStats:{hp:95,atk:105,def:95,spa:110,spd:100,spe:105},ability:"Senbonzakura"},
Kenpachi:{types:["Fighting"],baseStats:{hp:110,atk:130,def:100,spa:60,spd:85,spe:95},ability:"BattleManiac"},
Aizen:{types:["Psychic","Dark"],baseStats:{hp:100,atk:105,def:95,spa:130,spd:110,spe:100},ability:"KyokaSuigetsu"},
Toshiro:{types:["Ice"],baseStats:{hp:95,atk:95,def:95,spa:120,spd:100,spe:105},ability:"IceDragon"},
Renji:{types:["Fighting","Ghost"],baseStats:{hp:95,atk:110,def:95,spa:95,spd:90,spe:100},ability:"BaboonBankai"},
Yoruichi:{types:["Electric","Fighting"],baseStats:{hp:95,atk:110,def:90,spa:95,spd:95,spe:130},ability:"FlashGoddess"},
Urahara:{types:["Psychic"],baseStats:{hp:95,atk:95,def:95,spa:120,spd:110,spe:100},ability:"Strategist"},
Ulquiorra:{types:["Dark","Flying"],baseStats:{hp:100,atk:110,def:95,spa:120,spd:105,spe:105},ability:"SegundaEtapa"},
Grimmjow:{types:["Dark"],baseStats:{hp:100,atk:120,def:90,spa:100,spd:90,spe:110},ability:"Pantera"},
Gin:{types:["Dark"],baseStats:{hp:95,atk:110,def:90,spa:105,spd:95,spe:110},ability:"SnakeBlade"},
Yamamoto:{types:["Fire"],baseStats:{hp:110,atk:130,def:105,spa:120,spd:110,spe:90},ability:"ZankaNoTachi"},
Shunsui:{types:["Ghost"],baseStats:{hp:100,atk:105,def:95,spa:115,spd:110,spe:95},ability:"ShadowGames"},
Mayuri:{types:["Poison"],baseStats:{hp:95,atk:85,def:95,spa:120,spd:110,spe:90},ability:"ToxicScientist"},

// ===== JUJUTSU KAISEN (15) =====

Yuji:{types:["Fighting"],baseStats:{hp:100,atk:115,def:95,spa:80,spd:90,spe:110},ability:"BlackFlash"},
Megumi:{types:["Ghost"],baseStats:{hp:95,atk:95,def:90,spa:110,spd:95,spe:100},ability:"TenShadows"},
Nobara:{types:["Ghost"],baseStats:{hp:95,atk:105,def:90,spa:100,spd:95,spe:95},ability:"Resonance"},
Gojo:{types:["Psychic"],baseStats:{hp:95,atk:85,def:90,spa:135,spd:110,spe:120},ability:"SixEyes"},
Sukuna:{types:["Dark"],baseStats:{hp:110,atk:130,def:100,spa:120,spd:100,spe:110},ability:"MalevolentShrine"},
Yuta:{types:["Ghost"],baseStats:{hp:100,atk:110,def:95,spa:120,spd:100,spe:105},ability:"RikaBond"},
Geto:{types:["Dark"],baseStats:{hp:100,atk:100,def:95,spa:115,spd:100,spe:95},ability:"CurseCommander"},
Toji:{types:["Fighting"],baseStats:{hp:100,atk:125,def:95,spa:50,spd:90,spe:120},ability:"HeavenlyRestriction"},
Maki:{types:["Fighting"],baseStats:{hp:100,atk:120,def:100,spa:60,spd:90,spe:115},ability:"WeaponMaster"},
Todo:{types:["Fighting"],baseStats:{hp:105,atk:120,def:100,spa:70,spd:90,spe:100},ability:"BoogieWoogie"},
Mahito:{types:["Ghost"],baseStats:{hp:100,atk:95,def:90,spa:120,spd:105,spe:105},ability:"IdleTransfiguration"},
Jogo:{types:["Fire"],baseStats:{hp:95,atk:90,def:85,spa:130,spd:100,spe:105},ability:"VolcanicCurse"},
Hanami:{types:["Grass"],baseStats:{hp:110,atk:95,def:105,spa:110,spd:105,spe:80},ability:"NatureCurse"},
Naoya:{types:["Flying"],baseStats:{hp:95,atk:110,def:90,spa:90,spd:90,spe:125},ability:"ProjectionSorcery"},
Nanami:{types:["Fighting"],baseStats:{hp:100,atk:115,def:95,spa:80,spd:95,spe:95},ability:"RatioTechnique"}

};
