function calcStat(base,iv,ev,level,nature){

return Math.floor(((2*base+iv+ev/4)*level)/100+5)*nature

}

function calcHP(base,iv,ev,level){

return Math.floor(((2*base+iv+ev/4)*level)/100+level+10)

}

function damage(attacker,defender,move){

let atk=attacker.atk
let def=defender.def

let power=move.power

return Math.floor(((2*50/5+2)*power*atk/def)/50+2)

}

module.exports={calcStat,calcHP,damage}
