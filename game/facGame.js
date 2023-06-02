//Stories
let stories = [
	story1 {
		"status": "available"
	},
	story2 {
		"status": "locked"
	}
];


//Player Stats
let player = {
	"name": "you",
	stats{
		"funds": 0,
		"health": 0
	}
};

//World Stats
world {
	"name": "world",
	stats{
		"oppression": 0,
		"capitalism": 0
	}
};

//Choice Function

function choose(name, aWho, aStat, aAmt, prob, bWho, wStat, wAmt, lStat, lAmt) {
	//Initialise Strings
		//Not too fussed about all this noise right now
		let rX = "You chose to...";
		let rN = name;
		let rA = aWho.name + ": ";
		let rR = "It "
		let rB = bWho.name + ": ";
	
	//Guaranteed Outcome
		aWho.stats[aStat] += aAmt;
		rA += (aStat + aAmt);
	
	//Gamble Chance
		let seed = (Math.random() * 100) + 1;
			
	//Gamble Outcome
		if (seed > prob) {
			rR += " succeeded!";
			bWho.stats[wStat] += wAmt;
			rB += (wStat + " " + wAmt);
		} else {
			rR += " failed!";
			bWho.stats[lStat] += lAmt;
			rB += (lStat + " " + lAmt);
		}

	//Return Results
		//don't really know if join works the same way as in ink yet so I'll deal with this later
		return join("\n", rX, rN, rA, rR, rB)
}

choose("Fund a Revolution", "player", "capital", -1, 50, "world", "oppression", -1, "capitalism", +1);
//if this works it should decrease the player's wealth and then either reduce oppression or increase capitalism depending on the action's success

//Maybe combine with JS object. 
	//Call function with choose(id), pass choices[X] as parameter. 
	//Init vars with (e.g.) let rN = id.name;

//Choices: Object Model
	//Prop of stories.storyX?
choices [
	choice1: {
		"name": "Fund a Revolution"
		"aWho": "player",
		"aStat": "capital",
		"aAmt": -1,
		"prob": 50,
		"bWho": "world",
		"wStat": "capital",
		"wAmt": -1,
		"lStat": "capital",
		"lAmt": +1
	},
	choice2: {/*etc*/}
];

/* 
Notes 
	pStats impact
		cProb
		cAva)
	winState is
		pStats
		wStats
*/