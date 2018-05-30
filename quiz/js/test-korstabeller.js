var quizJSON = {
	"info": {
		"name":    "Korstabeller",
		"main":    "<p>Testa dina kunskaper i korstabeller.</p>",
		"results": "<h5>Bra jobbat!</h5><p>Att testa sina kunskaper ökar inlärningen väsentligt. Fortsätt med det!</p>",
		"level1":  "Expert",
		"level2":  "Medel",
		"level3":  "Medel",
		"level4":  "Nybörjare",
		"level5":  "Nybörjare"
	},
	"questions": [
		{
			"q": "Hur många variabler har en korstabell minst?",
			"a": [
				{"option": "1", "correct": false},
				{"option": "2", "correct": true},
				{"option": "3", "correct": false},
				{"option": "4", "correct": false},

			],
			"correct": "<p><span>Rätt!</span> Som namnet antyder (kors-) krävs minst två variabler.</p>",
			"incorrect": "<p><span>Fel!</span> En korstabell kräver minst två variabler.</p>"
		},
		{
			"q": "Vilket påstående är korrekt?",
			"a": [
				{"option": "Chi-square-test kan inte genomföras på asymmetriska korstabeller.", "correct": false},
				{"option": "Procentandelar summeras likadant i kolumner och på rader.", "correct": false},
				{"option": "I en korstabell kan man konstanthålla en variabel.", "correct": true},
				{"option": "Sambandsmåttet Phi kan bara användas på korstabeller som är större än 5 x 5 (kolumner x rader).", "correct": false}
			],
			"correct": "<p><span>Rätt!</span> Tre variabler i en korstabell är inga problem.</p>",
			"incorrect": "<p><span>Fel!</span> Korstabeller kan användas för att konstanthålla en tredje variabel.</p>"
		},
		{
			"q": "Var rekommenderas det att man lägger den oberoende variabeln i en korstabell?",
			"a": [
				{"option": "I kolumnen.", "correct": true},
				{"option": "På raden.", "correct": false}
			],
			"correct": "<p><span>Rätt!</span> Tumregeln är oberoende variabel i kolumnen.</p>",
			"incorrect": "<p><span>Fel!</span> Man bör lägga den oberoende variabeln i kolumnen och summera med kolumnprocent.</p>"
		},
		{
			"q": "Vilket statistiskt test använder man vanligen för korstabeller?",
			"a": [
				{"option": "T-test", "correct": false},
				{"option": "Chi-square", "correct": true},
				{"option": "Cramers V", "correct": false}
			],
			"correct": "<p><span>Rätt!</span> Korstabeller använder vanligen Pearsons Chi-square.</p>",
			"incorrect": "<p><span>Fel!</span> Chi-square är rätt svar. T-test används för medelvärden och Cramers V är ett sambandsmått.</p>"
		},
		{
			"q": "Vilken skalnivå bör man inte ha i en korstabell?",
			"a": [
				{"option": "Nominal.", "correct": false},
				{"option": "Intervall.", "correct": true},
				{"option": "Ordinal.", "correct": false}
			],
			"correct": "<p><span>Rätt!</span> Nominal- och ordinalnivå är lämpligast i korstabeller.</p>",
			"incorrect": "<p><span>Fel!</span> Nominal- och ordinalnivå är lämpligast i korstabeller. Det finns andra användningsområden för intevallskalor.</p>"
		}
	]
};