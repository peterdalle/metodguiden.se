var quizJSON = {
	"info": {
		"name":    "Deskriptiv statistik",
		"main":    "<p>Testa dina kunskaper i grundläggande deskriptiv statistik.</p>",
		"results": "<h5>Bra jobbat!</h5><p>Att testa sina kunskaper ökar inlärningen väsentligt. Fortsätt med det!</p>",
		"level1":  "Expert",
		"level2":  "Medel",
		"level3":  "Medel",
		"level4":  "Nybörjare",
		"level5":  "Nybörjare"
	},
	"questions": [
		{
			"q": "Vad gör ett centralmått?",
			"a": [
				{"option": "Visar mittpunkten hos en konstant.", "correct": false},
				{"option": "Visar mittpunkten hos en variabels värden.", "correct": true},
				{"option": "Visar central (viktig) statistik om en variabel.", "correct": false}
			],
			"correct": "<p><span>Rätt!</span> Centralmått (som typvärde, medelvärde och median) visar den centrala tendensen hos en variabel.</p>",
			"incorrect": "<p><span>Rätt!</span> Centralmått (som typvärde, medelvärde och median) visar den centrala tendensen hos en variabel.</p>",
		},
		{
			"q": "Vilka påståenden är korrekta? Du kan välja flera.",
			"a": [
				{"option": "Pearsons r är ett linjärt sambandsmått.", "correct": true},
				{"option": "P-värdet är en form av spridningsmått.", "correct": false},
				{"option": "Varians är ett spridningsmått och standardavvikelse är ett sambandsmått.", "correct": false},
				{"option": "Det är inga problem att ta medelvärdet på en intervallskala.", "correct": true},
				{"option": "Nominalskala har högre skalnivå än ordinalskala.", "correct": false}
			],
			"correct": "<p><span>Rätt!</span> Bra jobbat.</p>",
			"incorrect": "<p><span>Fel!</span> Du behöver läsa på mer om olika typer av mått och skalnivåer.</p>"
		},
		{
			"q": "Medelvärdet är...",
			"a": [
				{"option": "Det mittersta värdet.", "correct": false},
				{"option": "Det statistiska eller aritmetiska genomsnittet.", "correct": true},
				{"option": "Det värde som förekommer flest gånger.", "correct": false},
				{"option": "Det bästa sättet att representera en datamängd.", "correct": false}
			],
			"correct": "<p><span>Rätt!</span> Bra jobbat.</p>",
			"incorrect": "<p><span>Fel!</span> Det är genomsnittet. Man adderar alla värden och dividerar med antalet.</p>"
		},
		{
			"q": "Vad är medianen på följande datamängd: [1 2 2 4 4 5]",
			"a": [
				{"option": "2", "correct": false},
				{"option": "3", "correct": true},
				{"option": "4", "correct": false}
			],
			"correct": "<p><span>Rätt!</span> Medianen är 3. Man tar de två mittersta värdena (eftersom antalet är ojämnt) och dividerar med 2.</p>",
			"incorrect": "<p><span>Fel!</span> Medianen är det mittersta värdet. När det är jämnt antal värden adderar man de två mittersta värdena (2 + 4 = 6) och tar medelvärdet (6 / 2 = 3).</p>"
		},
		{
			"q": "Standardavvikelsen räknas ut genom att ta roten ur variansen.",
			"a": [
				{"option": "Sant.", "correct": true},
				{"option": "Falskt.", "correct": false}
			],
			"correct": "<p><span>Rätt!</span> Standardavvikelsen är ett standardiserat mått på avvikelsen från medelvärdet. Varians är ostandardiserat.</p>",
			"incorrect": "<p><span>Fel!</span> Standardavvikelsen är ett standardiserat mått på avvikelsen från medelvärdet och räknas ut genom att ta roten ur variansen.</p>"
		}
	]
};