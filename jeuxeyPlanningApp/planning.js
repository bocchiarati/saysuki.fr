// planning.js
document.getElementById("generate").addEventListener("click", function () {
    const person1 = document.getElementById("person1").value.trim();
    const person2 = document.getElementById("person2").value.trim();
    const person3 = document.getElementById("person3").value.trim();
    const person4 = document.getElementById("person4").value.trim();
    const person5 = document.getElementById("person5").value.trim();
    const person6 = document.getElementById("person6").value.trim();

    if (!person1 || !person2 || !person3 || !person4 || !person5 || !person6) {
        alert("Veuillez remplir tous les prénoms avant de générer le planning !");
        return;
    }

    const persons = [person1, person2, person3, person4, person5];
    const fixedPerson = person6;

    const tasksService1 = {
        "Grande Section": 1,
        "Petite section / Moyenne Section": 2,
        "CP / CE1": 1,
    };

    const tasksService2 = {
        "Cycle 3": 2,
    };

    const planningContainer = document.getElementById("planning");
    planningContainer.innerHTML = "";

    const semaineDebut = parseInt(document.getElementById("semaineDebut").value.trim(), 10);
    const anneeDebut = parseInt(document.getElementById("anneeDebut").value.trim(), 10);
    const semaineFin = parseInt(document.getElementById("semaineFin").value.trim(), 10);
    const anneeFin = parseInt(document.getElementById("anneeFin").value.trim(), 10);

    if (
        isNaN(semaineDebut) || isNaN(semaineFin) ||
        isNaN(anneeDebut) || isNaN(anneeFin) ||
        anneeFin < anneeDebut ||
        (anneeFin === anneeDebut && semaineFin < semaineDebut)
    ) {
        alert("Veuillez vérifier que les années et semaines sont valides.");
        return;
    }

    // Gestion des vacances
    const vacances = [
        {
            nom: "Toussaint",
            startWeek: parseInt(document.getElementById("semaineDebutToussain").value.trim(), 10),
            startYear: parseInt(document.getElementById("anneeDebutToussain").value.trim(), 10),
            endWeek: parseInt(document.getElementById("semaineFinToussain").value.trim(), 10),
            endYear: parseInt(document.getElementById("anneeFinToussain").value.trim(), 10),
        },
        {
            nom: "Noël",
            startWeek: parseInt(document.getElementById("semaineDebutNoel").value.trim(), 10),
            startYear: parseInt(document.getElementById("anneeDebutNoel").value.trim(), 10),
            endWeek: parseInt(document.getElementById("semaineFinNoel").value.trim(), 10),
            endYear: parseInt(document.getElementById("anneeFinNoel").value.trim(), 10),
        },
        {
            nom: "Hiver",
            startWeek: parseInt(document.getElementById("semaineDebutHiver").value.trim(), 10),
            startYear: parseInt(document.getElementById("anneeDebutHiver").value.trim(), 10),
            endWeek: parseInt(document.getElementById("semaineFinHiver").value.trim(), 10),
            endYear: parseInt(document.getElementById("anneeFinHiver").value.trim(), 10),
        },
        {
            nom: "Pâque",
            startWeek: parseInt(document.getElementById("semaineDebutPaque").value.trim(), 10),
            startYear: parseInt(document.getElementById("anneeDebutPaque").value.trim(), 10),
            endWeek: parseInt(document.getElementById("semaineFinPaque").value.trim(), 10),
            endYear: parseInt(document.getElementById("anneeFinPaque").value.trim(), 10),
        },
    ];

    function isInVacances(week, year) {
        return vacances.some(v => {
            const start = v.startYear * 100 + v.startWeek;
            const end = v.endYear * 100 + v.endWeek;
            const current = year * 100 + week;
            if (start <= end) return current >= start && current <= end;
            else return current >= start || current <= end; // Cas vacances sur 2 années
        });
    }

    function getWeeksInYear(year) {
        const d = new Date(year, 11, 31);
        const week = getWeekNumber(d)[1];
        return week === 1 ? 52 : week;
    }

    function getWeekNumber(d) {
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        const dayNum = d.getUTCDay() || 7;
        d.setUTCDate(d.getUTCDate() + 4 - dayNum);
        const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        const weekNum = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
        return [d.getUTCFullYear(), weekNum];
    }

    function generateWeekPairs(startWeek, startYear, endWeek, endYear) {
        const result = [];
        let currentWeek = startWeek;
        let currentYear = startYear;

        while (currentYear < endYear || (currentYear === endYear && currentWeek <= endWeek)) {
            const week1 = currentWeek;
            let week2 = currentWeek + 1;
            let nextWeek = currentWeek + 2;
            let nextYear = currentYear;

            const maxWeeks = getWeeksInYear(currentYear);

            if (week2 > maxWeeks) {
                week2 = 1;
                nextWeek = 2;
                nextYear++;
            }

            if (currentYear > endYear || (currentYear === endYear && week1 > endWeek)) {
                break;
            }

            // Vérifier si les 2 semaines sont dans les vacances
            if (!isInVacances(week1, currentYear) && !isInVacances(week2, nextYear)) {
                result.push(`Semaine ${week1} & ${week2}`);
            }

            currentWeek = nextWeek;
            if (currentWeek > maxWeeks) {
                currentWeek = 1;
                currentYear++;
            } else if (week2 === 1) {
                currentYear++;
            }
        }

        return result;
    }

    const semaines = generateWeekPairs(semaineDebut, anneeDebut, semaineFin, anneeFin);
    const planning = {};

    const assignationCounts = {};
    persons.forEach(p => assignationCounts[p] = 0);

    const lastAssignments = {};
    persons.forEach(p => lastAssignments[p] = null);

    const previousPairs = {}; // Stocke les duos par tâche et semaine

    semaines.forEach((semaine, i) => {
        let remainingPersons = [...persons];
        const planningSemaine = {
            service1: {},
            service2: {},
        };

        // Grande Section → Personne fixe
        planningSemaine.service1["Grande Section"] = [fixedPerson];

        function getLeastUsedPersons(count, taskName) {
            let sorted = [...remainingPersons].sort((a, b) => assignationCounts[a] - assignationCounts[b]);
            sorted = sorted.sort(() => Math.random() - 0.5);

            const selected = [];

            for (let j = 0; j < sorted.length && selected.length < count; j++) {
                const p = sorted[j];
                if (lastAssignments[p] === taskName) continue;

                if (count === 2 && i >= 1) {
                    const lastWeeks = [semaines[i - 1]];
                    if (i >= 2) lastWeeks.push(semaines[i - 2]);

                    let duoUsed = false;
                    lastWeeks.forEach(week => {
                        const pairs = previousPairs[week]?.[taskName] || [];
                        pairs.forEach(pair => {
                            if (pair.includes(p) && selected.some(s => pair.includes(s))) duoUsed = true;
                        });
                    });
                    if (duoUsed) continue;
                }

                selected.push(p);
            }

            while (selected.length < count && sorted.length > 0) {
                const p = sorted.shift();
                if (!selected.includes(p)) selected.push(p);
            }

            selected.forEach(p => {
                assignationCounts[p]++;
                lastAssignments[p] = taskName;
                remainingPersons = remainingPersons.filter(x => x !== p);
            });

            if (count === 2) {
                if (!previousPairs[semaines[i]]) previousPairs[semaines[i]] = {};
                if (!previousPairs[semaines[i]][taskName]) previousPairs[semaines[i]][taskName] = [];
                previousPairs[semaines[i]][taskName].push([...selected]);
            }

            return selected;
        }

        // Service 1
        for (const task in tasksService1) {
            if (task !== "Grande Section") {
                planningSemaine.service1[task] = getLeastUsedPersons(tasksService1[task], task);
            }
        }

        // Service 2
        for (const task in tasksService2) {
            planningSemaine.service2[task] = getLeastUsedPersons(tasksService2[task], task);
        }

        planning[semaine] = planningSemaine;
    });

    // Affichage
    for (const semaine in planning) {
        const div = document.createElement("div");
        div.classList.add("semaine");
        div.innerHTML = `<h3>${semaine}</h3>`;

        ["service1", "service2"].forEach(service => {
            const serviceDiv = document.createElement("div");
            serviceDiv.innerHTML = `<h4>${service}</h4>`;
            for (const task in planning[semaine][service]) {
                serviceDiv.innerHTML += `<p>${task}: ${planning[semaine][service][task].join(", ")}</p>`;
            }
            div.appendChild(serviceDiv);
        });

        planningContainer.appendChild(div);
    }
});
