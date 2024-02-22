const classDetails = {
    nerdyScholar: {
        bonuses: {
            intelligence: 2,
        },
        negatives: {
            charisma: -1,
        },
        skills: {
            bookworm: "+2 bonus to Intelligence-based skill checks.",
            researcher: "Can spend extra time studying to gain advantage on Knowledge-based skill checks."
        },
        description: "Nerdy Scholars are intellectual powerhouses, known for their sharp minds and insatiable thirst for knowledge.",
        details: "While Nerdy Scholars excel in academic pursuits, they may struggle in social situations due to social awkwardness and overthinking."
    },
    athleticJock: {
        bonuses: {
            strength: 2,
        },
        negatives: {
            charisma: -1,
        },
        skills: {
            athleticProwess: "+2 bonus to Strength-based skill checks.",
            teamPlayer: "Can provide inspiration to teammates during group activities, granting them advantage on skill checks."
        },
        description: "Athletic Jocks are physical powerhouses, dominating sports fields and leading their teams to victory.",
        details: "While Athletic Jocks excel in physical activities and team sports, they may struggle with short temper and overconfidence."
    },
    gothicArtist: {
        bonuses: {
            wisdom: 2,
        },
        negatives: {
            charisma: -1,
        },
        skills: {
            creativeExpression: "+2 bonus to Wisdom-based skill checks related to artistic endeavors.",
            mysticAura: "Can intimidate others with their dark and mysterious demeanor, granting advantage on Intimidation checks."
        },
        description: "Gothic Artists are creative souls, expressing themselves through their unique artistic vision and mystic aura.",
        details: "While Gothic Artists thrive in artistic endeavors and mystic pursuits, they may struggle with isolationism and emotional turmoil."
    },
    preppyCheerleader: {
        bonuses: {
            charisma: 2,
        },
        negatives: {
            wisdom: -1,
        },
        skills: {
            charismaticLeader: "+2 bonus to Charisma-based skill checks when leading or motivating others.",
            teamSpirit: "Can inspire allies with pep talks, granting them advantage on saving throws against fear."
        },
        description: "Preppy Cheerleaders are charismatic leaders, spreading positivity and team spirit wherever they go.",
        details: "While Preppy Cheerleaders shine as natural leaders and motivators, they may struggle with entitled attitudes and peer pressure."
    },
    classClown: {
        bonuses: {
            charisma: 2,
        },
        negatives: {
            wisdom: -1,
        },
        skills: {
            naturalEntertainer: "+2 bonus to Charisma-based skill checks related to comedic performances or social interactions.",
            quickWit: "Can use humor to defuse tense situations, granting advantage on Persuasion checks."
        },
        description: "Class Clowns are masters of humor, using their quick wit and natural charm to entertain and diffuse tension.",
        details: "While Class Clowns thrive as entertainers and social butterflies, they may struggle with attention-seeking behavior and disruptive tendencies."
    },
    rebelOutsider: {
        bonuses: {
            wisdom: 2,
        },
        negatives: {
            charisma: -1,
        },
        skills: {
            independentThinker: "+2 bonus to Wisdom-based skill checks when making unconventional decisions.",
            resistanceToAuthority: "Can resist attempts to manipulate or coerce them, granting advantage on saving throws against charm effects from authority figures."
        },
        description: "Rebel Outsiders are nonconformists, challenging authority and forging their own path with independence and resilience.",
        details: "While Rebel Outsiders excel as independent thinkers and resilient individuals, they may struggle with alienation and risk-taking tendencies."
    },
    overachievingStudentCouncilPresident: {
        bonuses: {
            charisma: 2,
        },
        negatives: {
            wisdom: -1,
        },
        skills: {
            naturalLeader: "+2 bonus to Charisma-based skill checks when organizing or leading group activities.",
            efficientPlanner: "Can strategize and delegate tasks effectively, granting advantage on Intelligence-based skill checks related to planning."
        },
        description: "Overachieving Student Council Presidents are natural leaders, guiding their peers with charisma and efficiency.",
        details: "While Overachieving Student Council Presidents excel in leadership and planning, they may struggle with perfectionism and burnout."
    }
};

function updateClass() {
    const selectedClass = document.getElementById("class").value;

    // Update ability scores based on selected class
    const bonuses = classDetails[selectedClass].bonuses;
    const negatives = classDetails[selectedClass].negatives;
    updateAbilityScores(bonuses, negatives);

    // Update skills based on selected class
    updateSkills(selectedClass);

    // Update class description and details
    updateClassDetails(selectedClass);
}

function updateSkills(selectedClass) {
    const skills = classDetails[selectedClass].skills;
    const skillsContainer = document.getElementById("skills");
    skillsContainer.innerHTML = "<h3>Skills</h3>";

    for (const skill in skills) {
        if (skills.hasOwnProperty(skill)) {
            const skillDescription = skills[skill];
            const skillElement = document.createElement("p");
            skillElement.textContent = `${skill}: ${skillDescription}`;
            skillsContainer.appendChild(skillElement);
        }
    }
}

function updateAbilityScores(bonuses, negatives) {
    // Update ability score fields in the form
    const abilityFields = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];
    abilityFields.forEach(field => {
        const inputElement = document.getElementById(field);
        const baseValue = parseInt(inputElement.value);
        const bonus = bonuses[field] || 0;
        const negative = negatives[field] || 0;
        inputElement.value = baseValue + bonus + negative;
    });
}

function updateClassDetails(selectedClass) {
    const description = classDetails[selectedClass].description;
    const details = classDetails[selectedClass].details;
    document.getElementById("classDescription").textContent = description;
    document.getElementById("classDetails").textContent = details;
}

function levelUp() {
    const selectedLevel = parseInt(document.getElementById("level").value);
    const abilityFields = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];

    // Increment two ability scores by 1 for each level
    for (let i = 0; i < selectedLevel; i++) {
        const randomIndex1 = Math.floor(Math.random() * abilityFields.length);
        let randomIndex2 = Math.floor(Math.random() * abilityFields.length);
        // Ensure randomIndex2 is different from randomIndex1
        while (randomIndex2 === randomIndex1) {
            randomIndex2 = Math.floor(Math.random() * abilityFields.length);
        }
        document.getElementById(abilityFields[randomIndex1]).value = parseInt(document.getElementById(abilityFields[randomIndex1]).value) + 1;
        document.getElementById(abilityFields[randomIndex2]).value = parseInt(document.getElementById(abilityFields[randomIndex2]).value) + 1;
    }
}
