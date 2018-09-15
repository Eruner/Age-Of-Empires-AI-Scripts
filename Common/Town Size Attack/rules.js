function makeRule(actualSize, nextSize, extraCondition){
	var rule = '(defrule\n';
	rule += '\t(strategic-number sn-maximum-town-size == ' + actualSize + ')\n';
	rule += '\t(not (enemy-buildings-in-town))\n';
	if(extraCondition){
		rule += '\t' + extraCondition + '\n';
	}
	rule += '=>\n';
	rule += '\t(set-strategic-number sn-maximum-town-size ' + nextSize + ')\n';
	rule += ')\n';
	return rule;
}
function makeLastRule(finalSize, extraCondition){
	var rule = '(defrule\n';
	rule += '\t(strategic-number sn-maximum-town-size == ' + finalSize + ')\n';
	rule += '\t(not (enemy-buildings-in-town))\n';
	if(extraCondition){
		rule += '\t' + extraCondition + '\n';
	}
	rule += '=>\n';
	rule += '\t(attack-now)\n';
	rule += ')\n';
	return rule;
}
function makeAllRules(startSize, endSize, triggerCondition){
	var allRules = '';
	for(var i = endSize; i > startSize; i--){
		allRules += makeRule(i - 1, i, triggerCondition);
	}
	allRules += makeLastRule(endSize, triggerCondition);
	return allRules;
}
function generateRules(){
	var startSize = +document.getElementById('startSize').value,
		endSize = +document.getElementById('endSize').value,
		conditions = document.getElementById('conditions').value,
		output = document.getElementById('output'),
		allRules = makeAllRules(startSize, endSize, conditions);
	output.value = allRules;
}
document.getElementById('rules-btn').addEventListener('click', generateRules);