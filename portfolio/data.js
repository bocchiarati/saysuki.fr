const LISTE_GENERALES = [
    {
        nom: "Réaliser des applications",
        description: "Programmation et conception objet, pattern usuels, modélisation, analyse des besoins, test unitaire et validation.",
        note: 10,
        retour: "Durant mon stage, j'ai réalisé une application web complète en Symfony..."
    },
    {
        nom: "Optimiser des applications",
        description: "Algorithmes itératifs et récursifs, structures de données classiques, coût et complexité, outils mathématiques.",
        note: 7,
        retour: "Pendant la réalisation du projet, j’ai dû réfléchir à certaines structures de données..."
    },
    {
        nom: "Administrer les applications",
        description: "Administration système de base, configuration, protocoles et services en réseau.",
        note: 5,
        retour: "J’ai effectué la configuration du serveur pour la mise en production..."
    },
    {
        nom: "Gérer des données",
        description: "Modélisation des données, programmation SQL, transactions.",
        note: 6,
        retour: "J’ai conçu la base de données de l’application avec Doctrine..."
    },
    {
        nom: "Conduire un développement",
        description: "Besoins client, travailler en projet, agilité.",
        note: 8,
        retour: "J’ai conduit le projet en autonomie, en échangeant régulièrement avec mon tuteur..."
    },
    {
        nom: "Collaborer",
        description: "Communication professionnelle en français, en anglais, travailler en équipe, partager des documents et du code.",
        note: 7,
        retour: "Même si j’étais en autonomie sur le projet, j’ai régulièrement communiqué avec l’équipe..."
    }
];

const LISTE_SPECIFIQUE = [
    {
        nom: "Connaître l’architecture d’une application web distribuée",
        description: "Notion de service et d’API, protocoles support aux échanges.",
        note: 8,
        retour: "J’ai appris à concevoir une application en suivant une architecture modulaire..."
    },
    {
        nom: "Développer des composants côté serveur",
        description: "Bonnes pratiques, outils et langages adaptés.",
        note: 9,
        retour: "Le développement backend avec Symfony m’a permis de mettre en œuvre des composants robustes..."
    },
    {
        nom: "Développer des composants côté client",
        description: "Pratiques, outils et langages adaptés, contexte d’usage.",
        note: 7,
        retour: "J’ai intégré un calendrier dynamique côté client, améliorant l’expérience utilisateur..."
    },
    {
        nom: "Mettre en œuvre des systèmes à base de services et micro-services",
        description: "Architecture moderne pour services distribués.",
        note: 6,
        retour: "Bien que le projet ne soit pas entièrement micro-services, j’ai compris l’importance de modulariser..."
    },
    {
        nom: "Travailler avec des outils de collaboration et processus de développement",
        description: "Gestion de code, environnement de développement, tests.",
        note: 8,
        retour: "J’ai utilisé Git pour versionner mon code et documenté mon travail..."
    },
    {
        nom: "Analyser et mettre en œuvre besoins et contraintes non fonctionnels",
        description: "Sécurité, performance, législation, ergonomie.",
        note: 7,
        retour: "J’ai pris en compte la sécurité des données et la facilité d’utilisation..."
    }
];

const LISTE_TECHNIQUE = [
    {
        nom: "Intégration web et interfaces",
        description: "HTML5, CSS3, frameworks CSS, preprocessors.",
        note: 8,
        retour: "J’ai travaillé sur l’intégration du front-end en utilisant Tailwind CSS..."
    },
    {
        nom: "Développement frontend",
        description: "JavaScript, DOM, programmation asynchrone, frameworks.",
        note: 7,
        retour: "L’intégration de fonctionnalités dynamiques avec JavaScript a amélioré l’interactivité..."
    },
    {
        nom: "Développement mobile",
        description: "Applications hybrides et natives (Cordova, Ionic, Flutter).",
        note: 4,
        retour: "Ce projet ne portait pas sur le mobile, mais j’ai pris conscience des différences techniques..."
    },
    {
        nom: "Développement backend",
        description: "Architecture MVC, routage, ORM, sécurité, frameworks PHP/Node.js.",
        note: 9,
        retour: "Symfony m’a permis de mettre en œuvre une architecture MVC complète..."
    },
    {
        nom: "Services web",
        description: "APIs REST, formats XML/JSON, GraphQL.",
        note: 7,
        retour: "J’ai utilisé des échanges de données au format JSON entre le client et le serveur..."
    },
    {
        nom: "Gestion de données",
        description: "SQL, ORM, NoSQL.",
        note: 7,
        retour: "La gestion des données relationnelles avec Doctrine et SQL a été au cœur du projet..."
    },
    {
        nom: "Gestion du code",
        description: "Git, documentation, linter, code analysis.",
        note: 8,
        retour: "Le versioning via Git et la documentation rigoureuse ont été des pratiques que j’ai intégrées..."
    },
    {
        nom: "Gestion de projets",
        description: "Analyse des besoins, conception, gestion classique et agile, tests unitaires et d’intégration.",
        note: 8,
        retour: "J’ai conduit le projet en suivant une démarche agile, avec des échanges réguliers..."
    },
    {
        nom: "Administration et déploiement",
        description: "Virtualisation, Docker, administration HTTP/HTTPS, déploiement cloud.",
        note: 6,
        retour: "J’ai participé à la mise en production en configurant un serveur sécurisé..."
    }
];
