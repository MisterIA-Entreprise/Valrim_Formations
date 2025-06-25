import React, { useState } from 'react';

const ProgrammesFormation = () => {
  const [activeTabs, setActiveTabs] = useState({ main: 'accueil', sub: null });
  
  const categories = {
    'accueil': {
      title: 'Accueil',
      programs: {}
    },
    'agences-immobilières': {
      title: 'Agences Immobilières',
      programs: {
        'gpt-immo': 'Négociateurs Immobiliers et Commerciaux en construction',
        'gpt-loca-compta': "Gestion et comptabilité locative",
        'gpt-copro': 'Gestion et comptabilité copropriétés',
        'gpt-accueil': 'Hotesse d\'accueil',
        'commerciaux-location': 'Commerciaux Location',
        'direction-agence': 'Direction des agences'
      }
    },
    'promotion-immobilières': {
      title: 'Promotion Immobilière',
      programs: {
        'gpt-promo-mo': "Montage et prospection"
      }
    },
    'bailleur-social': {
      title: 'Bailleur Social',
      programs: {
        'gpt-patrimoine': 'Gestion de patrimoine et de contentieux',
        'logement-contentieux': 'Demande de logement, vie du bail et contentieux',
        'montage-administratif': 'Administratif montage',
        'sav-travaux': 'SAV, TMA et conducteur de travaux',
        'dessin-metre': 'Dessin & métré',
        'commerciaux-vefa': 'Commerciaux VEFA, ventes en plan',
      }
    },
    'service-support': {
      title: 'Service support',
      programs: {
        'rh': 'RH',
        'informatique': 'Informatique'
      }
    },
    'direction-comex': {
      title: 'Direction COMEX',
      programs: {
        'direction-comex-program': "Direction COMEX"
      }
    }
  };
  
  const programDetails = {
    'gpt-loca-compta': { participants: 26, days: 2 },
    'gpt-accueil': { participants: 9, days: 1 },
    'commerciaux-location': { participants: 15, days: 1 },
    'gpt-copro': { participants: 33, days: 2 },
    'gpt-immo': { participants: 23, days: 2 },
    'direction-agence': { participants: 7, days: 1 },
    'gpt-promo-mo': { participants: 19, days: 2 },
    'sav-travaux': { participants: 8, days: 1 },
    'dessin-metre': { participants: 2, days: 1 },
    'montage-administratif': { participants: 22, days: 2 },
    'logement-contentieux': { participants: 10, days: 1 },
    'gpt-patrimoine': { participants: 9, days: 1 },
    'informatique': { participants: 3, days: 1 },
    'rh': { participants: 3, days: 1 },
    'direction-comex-program': { participants: 6, days: 0.5 },
    'commerciaux-vefa': { participants: 14, days: 1 },
  };
  
  const handleMainTabClick = (mainTabKey) => {
    const newMainTab = categories[mainTabKey];
    const firstSubTab = Object.keys(newMainTab.programs)[0];
    setActiveTabs({ main: mainTabKey, sub: firstSubTab || null });
  };

  const handleSubTabClick = (subTabKey) => {
    setActiveTabs(prev => ({ ...prev, sub: subTabKey }));
  };
  
  // Rendu de la navigation par onglets
  const renderTabs = () => (
    <div className="flex justify-center mb-6">
      <nav className="bg-white px-4 py-2 rounded-full shadow-md overflow-x-auto">
        <ul className="flex space-x-2">
          {Object.entries(categories).map(([key, { title }]) => (
            <li key={key}>
            <button 
                onClick={() => handleMainTabClick(key)}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${activeTabs.main === key ? 'bg-blue-700 text-white' : 'text-gray-700 hover:bg-blue-50'}`}
            >
                {title}
            </button>
          </li>
          ))}
        </ul>
      </nav>
    </div>
  );

  const renderSubTabs = () => {
    if (activeTabs.main === 'accueil') {
      return null;
    }

    const mainCategory = categories[activeTabs.main];
    if (!mainCategory || Object.keys(mainCategory.programs).length === 0) {
      return null;
    }

    return (
      <div className="flex justify-center mb-6">
        <nav className="bg-gray-200 px-3 py-1.5 rounded-full shadow-inner overflow-x-auto">
          <ul className="flex space-x-1">
            {Object.entries(mainCategory.programs).map(([key, title]) => (
              <li key={key}>
            <button 
                  onClick={() => handleSubTabClick(key)}
                  className={`px-3 py-1 text-sm rounded-full whitespace-nowrap ${activeTabs.sub === key ? 'bg-white text-blue-700 shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
            >
                  {title}
            </button>
          </li>
            ))}
        </ul>
      </nav>
    </div>
  );
  };
  
  // Fonction pour obtenir le bon nombre de groupes en fonction du nom de session
  const getGroupCount = (programName) => {
    const groupCounts = {
      "GPT'Immo": 2,
      "GPT'Gestion": 2,
      "GPT'Location": 2,
      "GPT'Compta": 1,
      "GPT'Accueil": 1,
      "GPT'Projet": 2,
      "GPT'Promo": 2,
      "GPT'Patrimoine": 1,
      "GPT'Support": 2
    };
    return groupCounts[programName] || 2;
  };

  // Fonction pour obtenir le bon nom de session à afficher
  const getSessionName = (programName) => {
    const sessionNames = {
      "GPT'Immo": "Commerciaux des Agences Immobilières",
      "GPT'Gestion": "Syndics - Gestion de copropriété",
      "GPT'Location": "Gestion locative",
      "GPT'Compta": "Comptabilité",
      "GPT'Accueil": "Personnel d'accueil",
      "GPT'Projet": "Montage d'opérations",
      "GPT'Promo": "Promotion immobilière - Commerciaux",
      "GPT'Patrimoine": "Chargés de patrimoine",
      "GPT'Support": "Holding (fonctions support)"
    };
    return sessionNames[programName] || subtitle;
  };
  
  // Rendu de l'onglet Accueil
  const renderAccueil = () => {
    // Calculs pour le tableau de synthèse
    const allPrograms = Object.values(categories).flatMap(category => 
      Object.keys(category.programs)
    );
    
    let totalDays = 0;
    let totalParticipants = 0;
    let totalGroups = 0;

    Object.entries(programDetails).forEach(([key, details]) => {
      if (allPrograms.includes(key)) {
        totalDays += details.days;
        totalParticipants += details.participants;
        totalGroups += Math.ceil(details.participants / 15) || 1;
      }
    });

    const averageGroupSize = totalGroups > 0 ? (totalParticipants / totalGroups).toFixed(1) : 0;

    return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Bienvenue dans nos programmes de formation IA</h2>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 mb-6 rounded-r-lg" role="alert">
        <p className="font-bold">Note importante</p>
        <p>Nous nous sommes basés sur nos précédentes expériences et sur les retours de nos clients dans l'immobilier pour concevoir ces programmes. Si vos équipes ont des besoins spécifiques, nous adapterons le contenu en conséquence.</p>
      </div>
      
      <div className="mt-8 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-700">
        <h4 className="font-semibold text-blue-800">À propos de nos programmes de formation</h4>
        <p className="text-gray-700 mt-2">
          Tous nos programmes de formation sont conçus avec une approche pratique et opérationnelle, centrée sur des cas d'usage réels du secteur immobilier. Nos formateurs, experts à la fois en IA et en immobilier, adaptent le contenu aux spécificités de chaque métier et aux outils utilisés au quotidien par vos équipes.
        </p>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Récapitulatif des sessions</h3>
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 uppercase">
              <tr>
                <th className="py-3 px-6">Nom de la session</th>
                <th className="py-3 px-6 text-center">Nombre de groupes</th>
                <th className="py-3 px-6">Nombre de personnes</th>
                <th className="py-3 px-6">Typologie de métier</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {Object.values(categories)
                  .flatMap(category => Object.entries(category.programs).map(([programKey, programTitle]) => ({
                    programKey,
                    programTitle,
                    categoryKey: Object.keys(categories).find(key => categories[key] === category)
                  })))
                  .map(({ programKey, programTitle, categoryKey }) => {
                    const details = programDetails[programKey];
                    if (!details) return null;
                    const groupCount = Math.ceil(details.participants / 15) || 1;
                    // Mapping typologie
                    let typologie = '';
                    switch (categoryKey) {
                      case 'agences-immobilières':
                        typologie = 'Agence';
                        break;
                      case 'bailleur-social':
                        typologie = 'Bailleur';
                        break;
                      case 'promotion-immobilières':
                        typologie = 'Promotion';
                        break;
                      case 'service-support':
                        typologie = 'Service support';
                        break;
                      case 'direction-comex':
                        typologie = 'COMEX';
                        break;
                      default:
                        typologie = '';
                    }
                    // Correction pour commerciaux-vefa : afficher le bon nom
                    let displayTitle = programTitle;
                    if (programKey === 'commerciaux-vefa') {
                      displayTitle = 'Commerciaux VEFA, ventes en plan';
                    }
                    return (
                      <tr key={programKey} className="hover:bg-gray-50">
                        <td className="py-4 px-6 font-medium">{displayTitle}</td>
                        <td className="py-4 px-6 text-center font-bold">{groupCount}</td>
                        <td className="py-4 px-6">{details.participants} personnes</td>
                        <td className="py-4 px-6">{typologie}</td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Synthèse du programme</h3>
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 uppercase">
                <tr>
                  <th className="py-3 px-6">Indicateur</th>
                  <th className="py-3 px-6 text-center">Valeur</th>
              </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium">Nombre total de journées de formation</td>
                  <td className="py-4 px-6 text-center font-bold">{totalDays}</td>
              </tr>
              <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium">Nombre total de groupes</td>
                  <td className="py-4 px-6 text-center font-bold">{totalGroups}</td>
              </tr>
              <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium">Taille moyenne des groupes</td>
                  <td className="py-4 px-6 text-center font-bold">{averageGroupSize} personnes</td>
              </tr>
              <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium">Nombre total de participants</td>
                  <td className="py-4 px-6 text-center font-bold">{totalParticipants}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  };
  
  const commonIntroSession = {
    title: "Introduction à l'IA (9h00 - 10h30)",
    items: [
      "Introduction : Découvrez comment vous pouvez transformer votre pratique professionnelle en immobilier grâce à l'intégration de l'IA générative",
      "Les différents modèles d'IA générative : Découvrez quelles sont les différentes capacités des modèles, les outils généralistes vs spécifiques et les technologies sur lesquelles ils reposent pour assister dans vos tâches quotidiennes.",
      "Atelier de prompting sur ChatGPT: Initiation à la création de prompts efficaces pour obtenir les meilleures réponses de ChatGPT"
    ]
  };

  // Données pour GPT'Immo
  const gptImmoData = {
    name: "GPT'Agence",
    subtitle: "Négociateurs Immobilier + Commerciaux Maison Individuelle",
    sections: [
      commonIntroSession,
      {
        title: "Initiation au prompting dans le cadre de l'équipe Négociateurs & Commerciaux (10h30 - 12h30)",
        items: [
          "Initiation aux techniques de prompting avancées pour obtenir des résultats précis et pertinents dans votre domaine",
          "Mise en pratique : Générer un compromis ou une promesse de vente pré-remplie",
          "Mise en pratique : Rédiger un courrier de relance pour documents manquants",
          "Mise en pratique : Rédiger une synthèse de suivi d'un parcours client en construction"
        ]
      },
      {
        title: "Valoriser son offre et son argumentaire de vente avec l'IA (14h00 – 16h00)",
        items: [
          "Focus sur la création d'argumentaires commerciaux et de visuels",
          "Mise en pratique : Créer un argumentaire personnalisé pour un bien en portefeuille",
          "Mise en pratique : Créer une fiche de présentation du bien personnalisée pour le client à remettre lors de la visite",
          "Mise en pratique : Mettre en avant les atouts d'un projet de construction."
        ]
      },
      {
        title: "Qualifier un client et accompagner son projet avec l'IA (16h00 – 17h30)",
        items: [
          "Prompt : négociation d'objections sur le prix (vendeur / constructeur)",
          "Mise en pratique : Créer un script d'entretien de découverte structuré",
          "Mise en pratique : Identifier les besoins et signaux faibles d'un prospect par rapport à vos offres",
          "Mise en pratique : Semi-automatiser la rédaction de mails récapitulatifs après un premier RDV client"
        ]
      }
    ],
  };

  // Données pour Direction Agence
  const directionAgenceData = {
    name: "GPT'Agence",
    subtitle: "Direction",
    sections: [
      commonIntroSession,
      {
        title: "Initiation au prompting dans le cadre de l'équipe Direction d'Agence (10h30 - 12h30)",
        items: [
          "Initiation aux techniques de prompting avancées pour obtenir des résultats précis et pertinents dans votre domaine",
          "Mise en pratique : Préparer un discours pour une inauguration ou un événement",
          "Mise en pratique : Répondre à un avis client délicat",
          "Mise en pratique : Rédiger une newsletter interne pour motiver les équipes"
        ]
      },
      {
        title: "Aider à l'encadrement et animation des équipes (14h00 – 16h00)",
        items: [
          "Focus sur la fonction canevas et la génération de documents",
          "Mise en pratique : Rédiger un compte-rendu de réunion d'agence",
          "Mise en pratique : Simuler des entretiens de recadrage ou d'objectifs",
          "Mise en pratique : Préparer un plan d'onboarding pour un nouveau collaborateur"
        ]
      },
      {
        title: "L'IA pour le suivi de la performance et le pilotage de l'activité (16h00 – 17h30)",
        items: [
          "Focus sur les fonctions d'analyse de document et de création de visuels interactifs",
          "Mise en pratique : Rédiger une note de cadrage pour une action commerciale",
          "Mise en pratique : Générer un reporting hebdomadaire synthétique",
          "Mise en pratique : Analyser les freins à la location ou la vente sur un secteur"
        ]
      }
    ],
  };

  const ProgramInfo = ({ programKey, title }) => {
    const details = programDetails[programKey];
    if (!details) return null;

    return (
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">{title}</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-gray-700">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.122-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.122-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="font-semibold">{details.participants} participants</span>
        </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-semibold">{details.days === 0.5 ? "1 demi-journée" : `${details.days} ${details.days > 1 ? 'journées' : 'journée'}`}</span>
        </div>
          </div>
        </div>
      </div>
    );
  }

  // Fonction réutilisable pour créer un contenu de programme avec des listes à puces
  const createProgrammeWithBullets = (programKey, programName, subtitle, sections, skills) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="space-y-6">
        {sections.map((section, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span>{index + 1}</span>
              </div>
              <div>
                <h4 className="font-semibold">{section.title}</h4>
                <ul className="space-y-1 list-disc list-inside ml-4 text-gray-700 mt-2">
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Rendu de l'onglet GPT'Immo
  const renderGPTImmo = () => {
    const programKey = 'gpt-immo';
    return (
      <div>
        <ProgramInfo programKey={programKey} title={categories['agences-immobilières'].programs[programKey]} />
        {createProgrammeWithBullets(
          programKey,
    gptImmoData.name,
    gptImmoData.subtitle,
    gptImmoData.sections,
    gptImmoData.skills
        )}
      </div>
  );
  }
  
  // Données pour GPT'Gestion
  const gptGestionData = {
    name: "GPT'Gestion",
    subtitle: "Syndics et Gestion de copropriété",
    sections: [
      commonIntroSession,
      {
        title: "Initiation au prompting dans le cadre de l'équipe Syndics & Gestion (10h30 - 12h30)",
        items: [
          "Initiation aux techniques de prompting avancées pour obtenir des résultats précis et pertinents dans votre domaine",
          "Utilisation de ChatGPT pour générer des rappels de règles de vie en copropriété et des circulaires informatives, en montrant comment automatiser ces communications pour gagner du temps.",
          "Démonstration de la façon dont l'IA peut aider à rédiger des emails professionnels et personnalisés pour les copropriétaires, les bailleurs et les locataires, en répondant efficacement à leurs demandes.",
          "Utilisation de l'IA pour analyser des documents comme les rapports de copropriété (RCP), les baux, et autres documents juridiques, afin d'extraire des informations clés rapidement."
        ]
      },
      {
        title: "Assemblée générale et conseil syndical (11h30 - 12h30)",
        items: [
          "Montrer comment l'IA peut aider à préparer les documents nécessaires pour les assemblées générales, comme les ordres du jour et les dossiers de présentation.",
          "Illustration de l'utilisation de l'IA pour prendre des notes durant les réunions et fournir des réponses instantanées aux questions posées par les copropriétaires, améliorant l'interactivité et l'efficacité des réunions.",
          "Apprentissage de la création automatisée de comptes-rendus détaillés post-réunion, facilitant le suivi et la documentation."
        ]
      },
      {
        title: "Suivi travaux et gestion des visites (14h - 16h)",
        items: [
          "Utilisation de l'IA pour analyser et comparer des devis de travaux, et pour rédiger des comptes-rendus de suivi de chantier.",
          "Mise en œuvre de l'IA pour planifier et gérer les visites des locataires, optimiser les calendriers et collecter automatiquement les impressions et les retours des visiteurs."
        ]
      },
      {
        title: "Prospection commerciale pour le syndic et la gestion (16h – 17h30)",
        items: [
          "Exploration des méthodes d'identification de nouveaux prospects pour le syndic de copropriété et la gestion locative via des analyses de données et des outils prédictifs.",
          "Techniques d'utilisation de l'IA pour convertir les prospects en clients, en personnalisant les propositions et en optimisant les stratégies de communication."
        ]
      }
    ],
    skills: [
      "Formation d'une journée complète (7h)",
      "Exemples et cas pratiques spécifiques à la gestion immobilière",
      "Support de formation fourni aux participants",
      "Accès à une communauté d'entraide post-formation"
    ]
  };

  // Rendu de l'onglet GPT'Gestion
  const renderGPTGestion = () => {
    const programKey = 'gpt-gestion';
    return (
      <div>
        <ProgramInfo programKey={programKey} title={categories['agences-immobilières'].programs[programKey]} />
        {createProgrammeWithBullets(
          programKey,
    gptGestionData.name,
    gptGestionData.subtitle,
    gptGestionData.sections,
    gptGestionData.skills
        )}
      </div>
    );
  }
  
  // Données pour SAV et Travaux
  const savTravauxData = {
    name: "SAV & Travaux",
    subtitle: "Service Après-Vente et Gestion des Travaux",
    sections: [
      commonIntroSession,
      {
        title: "Initiation au prompting dans le cadre de l'équipe SAV & Travaux (10h30 - 12h30)",
        items: [
          "Initiation aux techniques de prompting avancées pour obtenir des résultats précis et pertinents dans votre domaine",
          "Mise en pratique : Rédaction d'un courrier de réponse à une réclamation SAV",
          "Mise en pratique : Création d'un rapport de visite technique",
          "Mise en pratique : Générer un compte-rendu d'intervention ou de réunion de chantier"
        ]
      },
      {
        title: "IA et Travaux – Suivi, analyse et coordination (14h00 - 16h00)",
        items: [
          "Focus sur la génération de tableaux visuels, interactifs et partageables",
          "Mise en pratique : Élaboration d'un planning simplifié d'opération avec l'IA.",
          "Mise en pratique : Créer un tableau de suivi d'avancement seulement avec l'IA",
          "Mise en pratique :Vérifier, compléter ou améliorer une demande de devis"
        ]
      },
      {
        title: "IA et SAV / TMA – Relation locataire et personnalisation des travaux (16h00 – 17h30)",
        items: [
          "Cartographie des besoins : demandes, vie du bail, contentieux.",
          "Mise en pratique : Rédiger un courrier de validation ou de refus de TMA rapidement",
          "Mise en pratique : Générer une fiche synthétique TMA à transmettre à l'entreprise à partir des retours d'un choix client",
          "Mise en pratique : Rédiger des réponses personnalisées à des réclamations après livraison (problème d'équipement)"
        ]
      }
    ],
  };
  
  // Données pour GPT'Location
  const gptLocationData = {
    name: "GPT'Location",
    subtitle: "Gestion Locative",
    sections: [
      commonIntroSession,
      {
        title: "Initiation au prompting dans le cadre de l'équipe Gestion Locative (10h30 - 12h30)",
        items: [
          "Initiation aux techniques de prompting avancées pour obtenir des résultats précis et pertinents dans votre domaine",
          "Apprendre à écrire des e-mails à des locataires, propriétaires, prestataires, ou institutions à partir d'un brief vocal ou de texte afin de gagner du temps",
          "Créer ces mails avec un ton professionnel adapté à votre destinataire",
          "Créer un robot GPT pour semi-automatiser ce processus"
        ]
      },
      {
        title: "Implémenter l'IA de la rédaction du bail à l'état des lieux de sortie (13h30 – 15h00)",
        items: [
          "Utiliser l'IA pour rédiger des documents plus rapidement : baux de location, mandats de gestion, actes de caution, états des lieux",
          "Mise en pratique : comment s'assurer de créer des documents conformes à l'aide de ChatGPT"
        ]
      },
      {
        title: "Vérifier, contrôler et fiabiliser avec l'IA dans la gestion locative (15h15 – 16h30)",
        items: [
          "Automatiser la vérification d'un dossier locataire à l'aide de ChatGPT",
          "Vérifier la cohérence des états des lieux d'entrée et de sortie",
          "Vérifier les clauses et trouver des pistes d'amélioration d'un bail locatif",
          "Extraire automatiquement des informations depuis un dossier de candidat locataire"
        ]
      },
      {
        title: "Implémenter l'IA de la veille d'informations à l'organisation des archives numériques (16h30 – 17h30)",
        items: [
          "Automatiser la veille juridique",
          "Apprendre à générer des comptes-rendus à partir de plusieurs documents",
          "Générer des suivis d'interventions techniques",
          "Aider à l'organisation des fichiers internes"
        ]
      }
    ],
    skills: [
      "Implémenter concrètement l'IA dans ses pratiques de gestion locative",
      "Fiabiliser et accélérer la rédaction des documents réglementaires et contractuels",
      "Communiquer plus efficacement avec les parties prenantes",
      "Exploiter l'IA pour sécuriser l'analyse de dossiers, baux, et états des lieux",
      "Savoir structurer une veille ou un suivi en s'appuyant sur des outils IA"
    ]
  };

  // Données pour GPT'Compta
  const gptComptaData = {
    name: "GPT'Compta",
    subtitle: "Syndic & Comptabilité",
    sections: [
      commonIntroSession,
      {
        title: "Initiation au prompting dans le cadre de l'équipe Syndic & Comptabilité (10h30 - 12h30)",
        items: [
          "Initiation aux techniques de prompting avancées pour obtenir des résultats précis et pertinents dans votre domaine",
          "Générer des rappels de règles de vie en copropriété et des circulaires informatives à partir d'un brief vocal ou de texte afin de gagner du temps",
          "Apprendre comment l'IA peut rédiger des mails personnalisés et pertinents en fonction des différentes agences du groupe Valrim",
          "Créer un robot GPT en fonction de vos besoins pour quasi automatiser le processus"
        ]
      },
      {
        title: "Automatiser la génération de documents administratifs (13h30 – 15h00)",
        items: [
          "Apprendre comment l'IA peut générer des relevés de gestion bailleur à partir d'un ancien document",
          "Automatiser la création de quittances de loyer via un robot GPT",
          "Générer un ordre du jour d'AG clair à partir d'historiques et de nouveaux éléments fournis",
          "Créer automatiquement des Ordres de Service (ODS) à partir du PV"
        ]
      },
      {
        title: "Analyser et vérifier les documents comptables avec l'IA (15h15 – 16h30)",
        items: [
          "Diagnostiquer des litiges en fonction des règles internes",
          "Analyser des contrats de prestataires, de factures fournisseurs et vérifier les clauses, les montants, les durées",
          "Vérifier la cohérence des montants sur les relevés de gestion locative, relevés de charges",
          "Comprendre comment l'IA peut comparer l'indexation de base sur un bail et établir une comparaison avec les informations remplies sur ICS"
        ]
      },
      {
        title: "Optimiser la gestion quotidienne et les situations d'urgence (16h30 – 17h30)",
        items: [
          "Utiliser l'IA pour gérer les urgences techniques",
          "Comprendre comment l'IA peut automatiser les relances assureurs, travaux, échéanciers",
          "Former des collaborateurs aux logiciels techniques et créer des supports de formation personnalisés",
          "Utiliser l'IA pour faciliter la préparation et animation des AG, et proposer des pistes d'amélioration"
        ]
      }
    ],
    skills: [
      "Maîtriser les bases de l'IA générative appliquée aux métiers du syndic et de la comptabilité",
      "Automatiser la création de documents administratifs et comptables",
      "Optimiser les communications avec les copropriétaires et prestataires",
      "Analyser efficacement les documents contractuels et financiers",
      "Gagner en efficacité dans la gestion des urgences et des suivis",
      "Préparer et animer les assemblées générales avec l'aide de l'IA",
      "Former les équipes aux logiciels techniques grâce à l'IA"
    ]
  };

  // Données pour GPT'Support
  const gptSupportData = {
    name: "GPT'Support",
    subtitle: "Formation IA transverse pour métier support",
    sections: [
      commonIntroSession,
      {
        title: "Initiation au prompting dans le cadre de vos fonctions (10h30 - 12h30)",
        items: [
          "Initiation aux techniques de prompting avancées pour obtenir des résultats précis et pertinents dans votre domaine",
          "Mise en pratique : Rédiger des mails professionnels adaptés à différents contextes (confirmation de rendez-vous, relance, demande d'information)",
          "Mise en pratique : Créer des comptes-rendus de réunions à partir de notes prises rapidement",
          "Mise en pratique : Préparer des ordres du jour pour les réunions récurrentes en se basant sur les précédents"
        ]
      },
      {
        title: "Utiliser l'IA pour votre veille professionnelle (14h00 - 16h00)",
        items: [
          "Focus sur l'utilisation de l'IA pour la veille professionnelle",
          "Mise en pratique : Mettre en place une veille automatisée sur les évolutions technologiques, réglementaires et concurrentielles pertinentes pour votre domaine",
          "Mise en pratique : Générer des synthèses personnalisées des informations collectées, adaptées à différents niveaux de compréhension",
          "Mise en pratique : Créer des tableaux de bord de veille avec des indicateurs clés et des alertes sur les changements importants"
        ]
      },
      {
        title: "Structurer et fiabiliser sa réflexion avec l'IA (16h00 - 17h30)",
        items: [
          "Focus sur les fonctions de brainstorming de l'IA",
          "Se faire challenger par l'IA sur une décision à prendre (ex. : \"Quels angles n'ai-je pas envisagés ?\")",
          "Mise en pratique : Utiliser l'IA comme outil d'aide à la prise de recul : identification de risques, angles morts, contradictions.",
          "Mise en pratique : Poser une problématique stratégique à l'IA et enrichir sa réflexion métier"
        ]
      }
    ],
    skills: [
      "Maîtriser les techniques de prompting avancées pour les fonctions supports.",
      "Automatiser la rédaction de communications professionnelles (mails, comptes-rendus).",
      "Mettre en place une veille professionnelle automatisée et personnalisée avec l'IA.",
      "Utiliser l'IA comme un outil stratégique pour la prise de décision et l'identification des risques.",
      "Enrichir sa réflexion métier grâce au brainstorming assisté par l'IA."
    ]
  };

  // Données pour GPT'Accueil
  const gptAccueilData = {
    name: "GPT'Accueil",
    subtitle: "Personnel d'Accueil Agences",
    sections: [
      commonIntroSession,
      {
        title: "Initiation au prompting dans le cadre de l'équipe Accueil (10h30 - 12h30)",
        items: [
          "Initiation aux techniques de prompting avancées pour obtenir des résultats précis et pertinents dans votre domaine",
          "Mise en pratique : Générer un email de confirmation de rendez-vous",
          "Mise en pratique : Préparer une fiche de visite personnalisée",
          "Mise en pratique : Rédiger une réponse de premier niveau à une réclamation locataire"
        ]
      },
      {
        title: "L'IA pour l'accueil et l'orientation client (14h00 – 16h00)",
        items: [
          "Focus sur l'IA pour aider à l'accueil en agence",
          "Mise en pratique : Faciliter l'identification du besoin d'un client en agence",
          "Mise en pratique : Assister l'accueil téléphonique avec des outils IA spécialisés",
          "Mise en pratique : Fournir des explications simples sur des démarches administratives aux locataires"
        ]
      },
      {
        title: "L'IA pour aider aux processus administratifs (16h00 – 17h30)",
        items: [
          "Focus sur la fonction bibliothèque et analyse de documents",
          "Mise en pratique : Aider à constituer un dossier de location",
          "Mise en pratique : Faciliter la transmission d'un document type",
          " Mise en pratique : Créer un robot d'onboarding pour les bonnes pratiques de l'accueil"
        ]
      }
    ],
  };

  // Données pour GPT'Patrimoine
  const gptPatrimoineData = {
    name: "GPT'Patrimoine",
    subtitle: "Gestion du Patrimoine Immobilier",
    sections: [
      commonIntroSession,
      {
        title: "Initiation au prompting dans le cadre de l'équipe Patrimoine (10h30 - 12h30)",
        items: [
          "Initiation aux techniques de prompting avancées pour obtenir des résultats précis et pertinents dans votre domaine",
          "Mise en pratique : Rédiger des courriers de relance d'assurance",
          "Mise en pratique : Compléter des fiches de lot avec l'IA",
          "Mise en pratique : Mise en pratique : Rédiger un rapport annuel de gestion d'un groupe de résidences"
        ]
      },
      {
        title: "Analyser et suivre les événements pertinents du patrimoine immobilier (14h00 – 16h00)",
        items: [
          "Focus sur l'analyse et le monitoring de données",
          "Mise en pratique : Obtenir une cartographie visuel des incidents techniques d'un batiment",
          "Mise en pratique : Analyser et suivre les consommations avec l'IA",
          "Mise en pratique : Obtenir un suivi de la performance des prestataires et de la réglementation environnementale"
        ]
      },
      {
        title: "Gestion technique du patrimoine et des interventions (16h00 – 17h30)",
        items: [
          "Détection obligatoire des incohérences avec la réglementation environnementale",
          "Mise en pratique : Élaborer un plan de travaux d'entretien sur plusieurs résidences avec l'IA",
          "Mise en pratique : Prioriser les interventions sur un patrimoine dégradé avec l'IA",
          "Mise en pratique : Générer un plan de tournée d'inspection de résidences"
        ]
      }
    ],
  };

  // Données pour GPT'Projet
  const gptProjetData = {
    name: "GPT'Projet",
    subtitle: "Chefs de Projet et Maîtrise d'Ouvrage",
    sections: [
      commonIntroSession,
      {
        title: "Initiation au prompting dans le cadre de l'équipe Chefs de Projet & MOA (10h30 - 12h30)",
        items: [
          "Initiation aux techniques de prompting avancées pour obtenir des résultats précis et pertinents dans votre domaine",
          "Digitalisation et enrichissement automatique de la base de contacts → Extraction et organisation de données issues de cartes de visite",
          "Extraction intelligente pour fiches projets → Résumé de documents techniques en tableaux clairs ou fiches exploitables",
          "Structuration et organisation intelligente des données projets pour faciliter leur exploitation"
        ]
      },
      {
        title: "Analyser et vérifier la conformité des projets (13h30 – 15h00)",
        items: [
          "Vérification de conformité réglementaire → Confrontation automatique des documents (notice, plan guide…) aux règles des PLU, OAP, etc.",
          "Extraction intelligente depuis des études de faisabilité → Identification directe des éléments clés (logements, ambitions, contraintes) dans des documents longs",
          "Comparaison de bilans d'aménagement avec plans de masse → Vérification de la cohérence entre les données financières et la réalité opérationnelle projetée"
        ]
      },
      {
        title: "Créer des supports de communication et de pilotage efficaces (15h15 – 16h30)",
        items: [
          "Compilation multi-source et création de supports de réunion → Fusion de sources variées en une présentation claire pour réunions internes ou externes",
          "Structuration de rapports et tableaux de bord de pilotage → Génération de rapports ou dashboards mensuels à partir de données projets",
          "Rédaction automatisée de comptes-rendus et emails → Création de livrables rédactionnels à partir de notes (vocales ou écrites), adaptés à différents interlocuteurs"
        ]
      },
      {
        title: "Développer l'intelligence stratégique des projets (16h30 – 17h30)",
        items: [
          "Recherche ciblée d'informations de contexte pour vos projets → Identification d'initiatives ou projets similaires dans un périmètre ou une thématique précise",
          "Brainstorming stratégique assisté par IA → Exploration de solutions innovantes à partir de contraintes projet, benchmark, et données croisées",
          "Anticipation des risques et opportunités projet grâce à l'analyse IA des données historiques et contextuelles"
        ]
      }
    ],
    skills: [
      "Maîtriser les bases de l'IA générative appliquée à la gestion de projets immobiliers",
      "Automatiser l'extraction et l'organisation de données complexes",
      "Vérifier efficacement la conformité réglementaire des projets",
      "Créer rapidement des supports de communication et de pilotage professionnels",
      "Rédiger automatiquement des comptes-rendus adaptés aux différents interlocuteurs",
      "Développer des approches stratégiques innovantes grâce à l'IA",
      "Optimiser la coordination entre les différentes parties prenantes du projet"
    ]
  };

  // Données pour Commerciaux Location
  const commerciauxLocationData = {
    name: "GPT'Location",
    subtitle: "Commerciaux Location Agences",
    sections: [
      commonIntroSession,
      {
        title: "Initiation au prompting dans le cadre de l'équipe Commerciaux Location (10h30 - 12h30)",
        items: [
          "Initiation aux techniques de prompting avancées pour obtenir des résultats précis et pertinents dans votre domaine",
          "Mise en pratique : Rédiger une annonce immobilière percutante",
          "Mise en pratique : Créer un mail type pour envoi de documents locatifs",
          "Mise en pratique : Créer une FAQ sur les démarches locatives à suivre"
        ]
      },
      {
        title: "L'IA pour prospecter et qualifier des locataires (14h00 – 16h00)",
        items: [
          "Focus sur la fonction canevas et l'analyse de documents",
          "Mise en pratique : Qualifier un candidat locataire avec l'IA",
          "Mise en pratique : Proposer une sélection personnalisée de biens",
          "Mise en pratique : Préparer une relance commerciale post-visite"
        ]
      },
      {
        title: "Faciliter l'organisation et la réalisation de visites locatives (16h00 – 17h30)",
        items: [
          "Focus sur la préparation de visites locatives",
          "Mise en pratique : Planifier automatiquement une tournée de visites efficace",
          "Mise en pratique : Préparer un argumentaire de visite personnalisé",
          "Mise en pratique : Préparer des réponses aux questions et objections des clients en visite"
        ]
      }
    ],
  };

  // Données pour GPT'Promoteur
  const gptPromoteurData = {
    name: "GPT'Promoteur",
    subtitle: "Prospection Foncier & Montage d'Opérations",
    sections: [
      commonIntroSession,
      {
        title: "Initiation au prompting dans le cadre de l'équipe Prospection & Montage (10h30 - 12h30)",
        items: [
          "Initiation aux techniques de prompting avancées pour obtenir des résultats précis et pertinents dans votre domaine",
          "Mise en pratique : Créer des tableaux de suivi des échéances administratives et des documents à fournir",
          "Mise en pratique : Créer des courriers / lettres de prospection hyper personnalisée",
          "Mise en pratique : Rédiger des notes de synthèse à partir de documents administratifs (permis, autorisations, etc.)"
        ]
      },
      {
        title: "L'IA pour vos processus administratifs et l'analyse de zones (14h00 – 16h00)",
        items: [
          "Focus sur la recherche d'informations et l'IA dans les processus administratifs",
          "Mise en pratique : Obtenir une étude de marché d'une zone précise avec des données sourcées",
          "Mise en pratique : Vérifier la complétude d'un dossier en fonction de la phase du projet et de l'appel d'offre initial, et ajouter des points de vigilance et d'amélioration potentiel",
          "Mise en pratique : Proposer et rédiger des notes justificatives pour les modifications de projet, et synthétiser les échanges avec les services instructeurs"
        ]
      },
      {
        title: "Structurer un dossier de montage et standardiser les mails de prospection (16h00 – 17h30)",
        items: [
          "Focus sur la fonction canevas et l'analyse de documents par l'IA",
          "Mise en pratique : A partir d'un précédent dossier, du contexte d'un projet, créer un sommaire clair et structuré conforme au groupe Valrim pour un dossier",
          "Mise en pratique : Rédiger des résumés exécutifs, un document de réponse aux questions fréquentes, des plannings et diagrammes de coûts avec l'IA, pour faciliter la transmission d'informations.",
          "Mise en pratique : Créer des robots capables de rédiger des lettres d'intérêt, lettre d'intention d'achat etc hyper-personnalisée"
        ]
      },
    ],
  };

  // Données pour Logement & Contentieux
  const logementContentieuxData = {
    name: "GPT'Bailleur",
    subtitle: "Demande de logement ▸ Vie du bail ▸ Contentieux",
    sections: [
      commonIntroSession,
      {
        title: "Initiation au prompting dans le cadre de l'équipe Logement & Contentieux (10h30 - 12h30)",
        items: [
          "Initiation aux techniques de prompting avancées pour obtenir des résultats précis et pertinents dans votre domaine",
          "Mise en pratique : Semi-automatiser la rédaction d'un courrier de réponse à une demande de logement",
          "Mise en pratique : Réponse personnalisée à une demande d'information par rapport à vos procédures",
          "Mise en pratique : Génération d'une attestation de dépôt ou de renouvellement de demande à partir des informations du demandeur"
        ]
      },
      {
        title: "Cas d'usage liés à la gestion locative (14h00 – 16h00)",
        items: [
          "Focus sur les cas d'usage liés au suivi administratif et la relation locataire",
          "Mise en pratique : Rédaction d'un avenant au bail avec l'IA (ex : changement de co-titulaire)",
          "Mise en pratique : Génération d'un courrier de réponse à une réclamation locative personnalisé avec l'IA (nuisances, travaux…)",
          "Mise en pratique : Création d'un document de synthèse du parcours résidentiel à partir des élements d'un dossier locataire"
        ]
      },
      {
        title: "Cas d'usage liés à la gestion de contentieux (16h00 – 17h30)",
        items: [
          "Focus sur les cas d'usage liés à la gestion de litiges locatifs",
          "Mise en pratique : Semi-automatiser la rédaction d'une lettre de relance pour impayé",
          "Mise en pratique : Faciliter la préparation d'un dossier pour le service juridique ou huissier",
          "Mise en pratique : Créer un script d'appel téléphonique pour une relance amiable"
        ]
      },
    ],
  };

  // Données pour GPT'Copro
  const gptCoproData = {
    name: "GPT'Copro",
    subtitle: "Gestionnaires, Assistant·es & Comptables de Copropriété",
    sections: [
      commonIntroSession,
      {
        title: "Initiation au prompting dans le cadre de l'équipe Copropriété (10h30 - 12h30)",
        items: [
          "Initiation aux techniques de prompting avancées pour obtenir des résultats précis et pertinents dans votre domaine",
          "Mise en pratique : Rédiger une convocation d'AG avec ordre du jour personnalisé",
          "Mise en pratique : Préparer un procès-verbal d'AG à partir de notes",
          "Mise en pratique : Émettre un appel de fonds conforme après AG"
        ]
      },
      {
        title: "L'IA pour le traitement des incidents et la gestion des prestataires (14h00 – 16h00)",
        items: [
          "Focus sur la création de robots IA pour des tâches spécifiques",
          "Mise en pratique : Créer un robot capable de créer des modèles de mail conformes à vos exigences pour signaler une panne dans les parties communes",
          "Mise en pratique : Structurer un plan d'action pour la remise en état d'un bien",
          "Mise en pratique : Vérifier l'imputation comptable d'une dépense exceptionnelle"
        ]
      },
      {
        title: "L'IA dans le suivi et la relation avec les copropriétés (16h00 – 17h30)",
        items: [
          "Focus sur l'analyse de corpus documentaire",
          "Mise en pratique : Rédiger une réponse à une réclamation sur des charges",
          "Mise en pratique : Générer une note d'information à diffuser à tous les copropriétaires",
          "Mise en pratique : Expliquer un décompte individuel en langage clair"
        ]
      }
    ],
  };

  // Données pour GPT'Gestion Locative
  const gptGestionLocativeData = {
    name: "GPT'Gestion Locative",
    subtitle: "Chargé·es, Comptables & Responsables",
    sections: [
      commonIntroSession,
      {
        title: "Initiation au prompting dans le cadre de l'équipe Gestion Locative (10h30 - 12h30)",
        items: [
          "Initiation aux techniques de prompting avancées pour obtenir des résultats précis et pertinents dans votre domaine",
          "Mise en pratique : Générer une lettre type de préavis propriétaire",
          "Mise en pratique : Rédiger un courrier de régularisation de charges",
          "Mise en pratique : Éditer une attestation de loyer à la demande"
        ]
      },
      {
        title: "L'IA pour le traitement des incidents et la gestion technique (14h00 – 16h00)",
        items: [
          "Focus sur la création de robots IA pour des tâches spécifiques",
          "Mise en pratique : Suivre l'imputation correcte de factures multi-biens",
          "Mise en pratique : Structurer un plan d'action pour la remise en état d'un bien",
          "Mise en pratique : Créer un modèle de message pour relancer un artisan"
        ]
      },
      {
        title: "L'IA dans le suivi des dossiers et la relation locataire (16h00 – 17h30)",
        items: [
          "Focus sur l'analyse de corpus documentaire",
          "Aider à la vérification de la conformité d'un dossier de location",
          "Mise en pratique : Générer une explication pédagogique d'un appel de fonds",
          "Mise en pratique : Préparer une synthèse de gestion pour un propriétaire"
        ]
      }
    ],
  };

  // Données pour GPT'CODIR
  const gptCodirData = {
    name: "GPT'CODIR",
    subtitle: "Formation IA pour le Comité de Direction",
    sections: [
      {
        ...commonIntroSession,
        title: "Introduction à l'IA (9h00 - 10h30)",
      },
      {
        title: "Apprendre à manager à l'ère de l'IA - Coaching collectif (10h30 - 12h00)",
        items: [
          "Discussion : Comment l'IA peut transformer les processus décisionnels et améliorer la prise de décision collective",
          "Discussion : Les nouvelles compétences managériales à développer pour tirer parti de l'IA dans son équipe",
          "Discussion : Les enjeux éthiques et les bonnes pratiques pour intégrer l'IA dans les processus de management"
        ]
      }
    ],
  };

  const loremIpsumData = {
    name: "Programme factice",
    subtitle: "Contenu de formation factice",
    sections: [
      {
        title: "Session 1 – Introduction (09h00 – 10h30)",
        items: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ]
      },
      {
        title: "Session 2 – Ateliers pratiques (10h30 – 12h30)",
        items: [
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ]
      },
      {
        title: "Session 3 – Cas d'usage (14h00 – 16h00)",
        items: [
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
          "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
        ]
      }
    ],
    skills: [
      "Maîtrise du Lorem Ipsum",
      "Compétences en Dolor Sit Amet",
      "Expertise en Consectetur Adipiscing",
      "Certification en Eiusmod Tempor"
    ]
  };

  // Données pour Dessin & Métré
  const dessinMetreData = {
    name: "Dessin & Métré",
    subtitle: "Dessin technique et relevé de surfaces",
    sections: [
      commonIntroSession,
      {
        title: "Initiation au prompting dans le cadre de l'équipe Dessin & Métré (10h30 - 12h30)",
        items: [
          "Initiation aux techniques de prompting avancées pour obtenir des résultats précis et pertinents dans votre domaine",
          "Mise en pratique : Rédaction d'un descriptif de lot assisté par l'IA",
          "Mise en pratique : Rédiger des emails de transmission de métrés à l'aide de l'IA",
          "Mise en pratique : Création d'une fiche projet synthétique à partir d'une note vocale"
        ]
      },
      {
        title: "L'IA comme support aux métrés et pour la vérification technique (14h00 – 16h00)",
        items: [
          "Focus sur l'analyse de documents et d'images par l'IA'.",
          "Mise en pratique : Relecture d'un tableau de métrés pour détection d'anomalies",
          "Mise en pratique : Estimation rapide des surfaces à partir d'un descriptif",
          "Mise en pratique : Gagner du temos dans la préparation d'un DPGF"
        ]
      },
      {
        title: "Assistance à la conception et à l'organisation (16h00 – 17h30)",
        items: [
          "Focus sur a fonction canevas et l'optimisation avec l'IA",
          "Mise en pratique : Vérification des contraintes PMR depuis une image de plan et des détails techniques",
          "Mise en pratique : Proposition de variantes d'agencement en fonction du cloisonnement et de la lumière naturelle d'un logement",
          "Mise en pratique : Génération d'un planning prévisionnel simplifié des phases d'un projet de réhabilitation"
        ]
      }
    ],
  };

  // Données pour Commerciaux VEFA / Ventes en plan
  const commerciauxVefaData = {
    name: "Commerciaux VEFA / Ventes en plan",
    subtitle: "Vente en l'état futur d'achèvement (VEFA) et ventes sur plan",
    sections: [
      commonIntroSession,
      {
        title: "Initiation au prompting dans le cadre de l'équipe commerciale (10h30 - 12h30)",
        items: [
          "Initiation aux techniques de prompting avancées pour obtenir des résultats précis et pertinents dans votre domaine",
          "Mise en pratique : Rédaction d'un mail de relance client après une visite",
          "Mise en pratique : Rédaction d'un courrier de réservation regroupant les modalités automatiquement grâce à l'IA",
          "Mise en pratique : Créer une fiche argumentaire commerciale hyper personnalisée pour un programme spécifique"
        ]
      },
      {
        title: "L'IA comme outil de valorisation des programmes (14h00 – 16h00)",
        items: [
          "Focus sur des techniques de prompting avancé pour obtenir des argumentaires commerciaux optimisés'.",
          "Mise en pratique : Elaborer plusieurs descriptions commerciales d'un programmes en fonction de la cible et de la plateforme avec l'IA",
          "Mise en pratique : Créer une synthèse des typologies disponibles pour une agence ou partenaire investisseurs",
          "Mise en pratique : Rédiger un argumentaire localisé mettant en avant l'environnement et les lieux d'intérêt proche d'une adresse"
        ]
      },
      {
        title: "L'IA dans la relation client et le suivi commercial (16h00 – 17h30)",
        items: [
          "Focus sur la fonction canevas et génération de documents",
          "Mise en pratique : Générer un planning d'accompagnement client à partir de son profil et sa pertinence par rapport à vos critères",
          "Mise en pratique : Créer un script d'appel pour prise de contact avec un prospect en fonction de son contexte",
          "Mise en pratique : Semi-automatiser la rédaction d'un mail récapitulatif après rendez-vous commercial"
        ]
      }
    ],
  };

  // Programme RH
  const rhData = {
    name: "RH",
    subtitle: "Ressources Humaines et gestion du personnel",
    sections: [
      commonIntroSession,
      {
        title: "Initiation au prompting dans le cadre de l'équipe RH (10h30 - 12h30)",
        items: [
          "Initiation aux techniques de prompting avancées pour obtenir des résultats précis et pertinents dans votre domaine",
          "Mise en pratique : Rédaction de mails génériques avec l'IA (ex. convocation à un entretien)",
          "Mise en pratique : Création d'un modèle de fiche de poste à partir d'une note vocale",
          "Mise en pratique : Obtenir un premier screening des candidats avec l'IA en fonction de critères personnalisés"
        ]
      },
      {
        title: "L'IA pour les communications internes et gestion du personnel (14h00 – 16h00)",
        items: [
          "Focus sur la fonction vocale des outils IA",
          "Mise en pratique : Rédiger des annonces pour diffusion interne avec le mode vocal des outils IA",
          "Mise en pratique : Créer un robot RH à destination des collaborateurs pour répondre à toutes les questions courantes",
          "Mise en pratique : Créer des synthèses d'entretiens (embauche, annuels), à partir d'une note vocale"
        ]
      },
      {
        title: "Organiser et améliorer des processus RH grâce à l'IA (16h00 – 17h30)",
        items: [
          "Focus sur la création de robots dédiés à des tâches spécifiques",
          "Mise en pratique : Créer un robot pour l'onboarding des collaborateurs avec tous les documents relatifs à l'entreprise",
          "Mise en pratique : S'aider de l'IA pour rédiger facilement une nouvelle procédure interne",
          "Mise en pratique : Préparer un questionnaire de satisfaction collaborateurs avec l'IA"
        ]
      }
    ],
    skills: [
      "Automatiser la rédaction de documents RH",
      "Optimiser la gestion administrative du personnel",
      "Améliorer la communication interne RH",
      "Mettre en place des actions QVT avec l'IA"
    ]
  };

  // Programme Informatique
  const informatiqueData = {
    name: "Informatique",
    subtitle: "Support et gestion des systèmes d'information",
    sections: [
      commonIntroSession,
      {
        title: "Initiation au prompting dans le cadre de l'équipe informatique (10h30 - 12h30)",
        items: [
          "Initiation aux techniques de prompting avancées pour obtenir des résultats précis et pertinents dans votre domaine",
          "Mise en pratique : Rédiger un message de maintenance préventive à partir d'une note vocale",
          "Mise en pratique : Créer un guide utilisateur vulgarisé pour une procédure interne",
          "Mise en pratique : Structurer un rapport d'incident avec l'IA à partir d'une note vocale"
        ]
      },
      {
        title: "L'IA pour assister le support technique et semi-automatiser certaines réponses (14h00 – 16h00)",
        items: [
          "Focus sur les robots IA et les fonctions d'analyse des outils IA",
          "Mise en pratique : Créer un robot pour semi-automatiser la génération de réponses types pour tickets récurrents",
          "Mise en pratique : S'aider de ChatGPT pour obtenir une analyse et des pistes de diagnostic d'un problème technique",
          "Mise en pratique : Vérifier la conformité d'une politique (mot de passe, RGPD) par rapport à la norme"
        ]
      },
      {
        title: "L'IA pour l'organisation interne (16h00 – 17h30)",
        items: [
          "Focus sur l'IA pour optimiser les processus internes",
          "Mise en pratique : À partir d'une liste d'incidents, générer un tableau visuel et partageable de suivi des incidents IT",
          "Mise en pratique : Rédiger des alertes de sécurité interne à partir d'une note vocale",
          "Mise en pratique : Planifier le déploiement d'un logiciel à partir d'un calendrier et d'un périmètre cible"
        ]
      }
    ],
    skills: [
      "Automatiser la gestion des incidents informatiques",
      "Optimiser la communication technique avec les utilisateurs",
      "Renforcer la cybersécurité grâce à l'IA",
      "Créer et maintenir une documentation technique efficace"
    ]
  };

  // Programme Montage Administratif
  const montageAdministratifData = {
    name: "Montage Administratif",
    subtitle: "Gestion des dossiers et procédures administratives",
    sections: [
      commonIntroSession,
      {
        title: "Initiation au prompting (10h30 - 12h30)",
        items: [
          "Initiation aux techniques de prompting avancées pour obtenir des résultats précis et pertinents dans votre domaine",
          "Mise en pratique : Apprendre à rédiger des notes professionnelles avec l'IA",
          "Mise en pratique : Transformer des notes manuscrites en comptes-rendus",
          "Mise en pratique : Utiliser l'IA pour relire et améliorer des documents"
        ]
      },
      {
        title: "Des cas d'usage avancés sur la gestion de mails (14h00 – 16h00)",
        items: [
          "Focus sur l'IA dans la gestion de vos mails du quotidien",
          "Mise en pratique : Apprendre à rédiger un mail professionnel avec l'IA",
          "Mise en pratique : Créer un robot capable de générer automatiquement des réponses à vos mails type",
          "Mise en pratique : Maitriser les fonctionnalitées vocales des outils IA afin de gagner en efficacité dans la rédaction"
        ]
      },
      {
        title: "L'IA pour les processus administratifs (16h00 – 17h30)",
        items: [
          "Focus sur les manières de gagner en productivité et en efficacité avec l'IA",
          "Mise en pratique : Utiliser l'IA pour créer une synthèse de plusieurs documents dispersés",
          "Mise en pratique : Vulgariser ou formuler un terme technique ou un besoin à l'aide de l'IA",
          "Mise en pratique : Analyser, extraire des informations précises depuis des documents complexes et des corpus documentaires"
        ]
      }
    ],
  };

  // Notes pour certains programmes (affichées au-dessus du contenu)
  const savTravauxNote = (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 mb-6 rounded-r-lg" role="alert">
      <p className="font-bold">Note importante</p>
      <p>Conformément à vos retours, nous avons adapté le programme avec une approche plus généraliste le matin, suivie d'une mise en application concrète l'après-midi à travers des cas d'usage métier ciblés.</p>
    </div>
  );

  const logementContentieuxNote = (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 mb-6 rounded-r-lg" role="alert">
      <p className="font-bold">Note importante</p>
      <p>Suite à vos retours, le programme a été structuré en deux temps : un premier temps le matin dédié aux demandes de logement, puis un second temps l'après-midi axé sur la vie du bail (gestion locative et contentieux).</p>
    </div>
  );

  const commerciauxVefaNote = (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 mb-6 rounded-r-lg" role="alert">
      <p className="font-bold">Note importante</p>
      <p>Conformément à vos observations, cette formation a été spécifiquement réorientée pour des profils commerciaux VEFA, focalisés sur la vente de produits finis. Elle peut par ailleurs être proposée en format demi-journée si souhaité.</p>
    </div>
  );

  const montageAdministratifNote = (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 mb-6 rounded-r-lg" role="alert">
      <p className="font-bold">Note importante</p>
      <p>En réponse à vos retours, nous avons intégré les métiers de comptabilité générale, services généraux, mission sociale et assistance à la direction dans une formation à visée transverse, incluant notamment du prompting et des cas d'usage de rédaction de mails.</p>
    </div>
  );

  // Modification du programMapping
  const programMapping = {
    'accueil': { render: renderAccueil },
    'commerciaux-location': { name: "Commerciaux Location", render: () => {
      const programKey = 'commerciaux-location';
      return (
        <div>
          <ProgramInfo programKey={programKey} title={categories['agences-immobilières'].programs[programKey]} />
          {createProgrammeWithBullets(
            programKey,
            commerciauxLocationData.name,
            commerciauxLocationData.subtitle,
            commerciauxLocationData.sections,
            commerciauxLocationData.skills
          )}
        </div>
      )
    }},
    'gpt-immo': { name: "GPT'Immo", render: renderGPTImmo },
    'gpt-gestion': { name: "GPT'Gestion", render: renderGPTGestion },
    'gpt-copro': { name: "GPT'Copro", render: () => {
      const programKey = 'gpt-copro';
      return (
        <div>
          <ProgramInfo programKey={programKey} title={categories['agences-immobilières'].programs[programKey]} />
          {createProgrammeWithBullets(
            programKey,
            gptCoproData.name,
            gptCoproData.subtitle,
            gptCoproData.sections,
            gptCoproData.skills
          )}
        </div>
      )
    }},
    'direction-agence': { name: "GPT'Agence - Direction", render: () => {
      const programKey = 'direction-agence';
      return (
        <div>
          <ProgramInfo programKey={programKey} title={categories['agences-immobilières'].programs[programKey]} />
          {createProgrammeWithBullets(
            programKey,
            directionAgenceData.name,
            directionAgenceData.subtitle,
            directionAgenceData.sections,
            directionAgenceData.skills
          )}
        </div>
      );
    }},
    'logement-contentieux': { name: "Logement & Contentieux", render: () => {
      const programKey = 'logement-contentieux';
      return (
        <div>
          <ProgramInfo programKey={programKey} title={categories['bailleur-social'].programs[programKey]} />
          {logementContentieuxNote}
          {createProgrammeWithBullets(
            programKey,
            logementContentieuxData.name,
            logementContentieuxData.subtitle,
            logementContentieuxData.sections,
            logementContentieuxData.skills
          )}
        </div>
      )
    }},
    'sav-travaux': { name: "SAV & Travaux", render: () => {
      const programKey = 'sav-travaux';
      return (
        <div>
          <ProgramInfo programKey={programKey} title={categories['bailleur-social'].programs[programKey]} />
          {savTravauxNote}
          {createProgrammeWithBullets(
            programKey,
            savTravauxData.name,
            savTravauxData.subtitle,
            savTravauxData.sections,
            savTravauxData.skills
          )}
        </div>
      )
    }},
    'gpt-compta': { name: "GPT'Compta", render: () => {
      const programKey = 'gpt-compta';
      return (
        <div>
          <ProgramInfo programKey={programKey} title={categories['agences-immobilières'].programs[programKey]} />
          {createProgrammeWithBullets(
            programKey,
      gptComptaData.name,
      gptComptaData.subtitle,
      gptComptaData.sections,
      gptComptaData.skills
          )}
        </div>
      )
    }},
    'gpt-promo-mo': { name: "Prospection & Marketing", render: () => (
      <div>
        <ProgramInfo programKey="gpt-promo-mo" title="Formation : Prospection & Marketing" />
        {createProgrammeWithBullets(
          'gpt-promo-mo',
          "GPT'Promo",
          "Prospection & Marketing",
          gptPromoteurData.sections,
          gptPromoteurData.skills
        )}
      </div>
    )},
    'gpt-mo': { name: "GPT'Projet", render: () => {
      const programKey = 'gpt-mo';
      return (
        <div>
          <ProgramInfo programKey={programKey} title={categories['promotion-immobilières'].programs[programKey]} />
          {createProgrammeWithBullets(
            programKey,
      gptProjetData.name,
      gptProjetData.subtitle,
      gptProjetData.sections,
      gptProjetData.skills
          )}
        </div>
      )
    }},
    'gpt-patrimoine': { name: "GPT'Patrimoine", render: () => {
      const programKey = 'gpt-patrimoine';
      return (
        <div>
          <ProgramInfo programKey={programKey} title={categories['bailleur-social'].programs[programKey]} />
          {createProgrammeWithBullets(
            programKey,
      gptPatrimoineData.name,
      gptPatrimoineData.subtitle,
      gptPatrimoineData.sections,
      gptPatrimoineData.skills
          )}
        </div>
      )
    }},
    'gpt-location': { name: "GPT'Location", render: () => {
      const programKey = 'gpt-location';
      return (
        <div>
          <ProgramInfo programKey={programKey} title={categories['agences-immobilières'].programs[programKey]} />
          {createProgrammeWithBullets(
            programKey,
      gptLocationData.name,
      gptLocationData.subtitle,
      gptLocationData.sections,
      gptLocationData.skills
          )}
        </div>
      )
    }},
    'gpt-support': { name: "GPT'Support", render: () => {
      const programKey = 'gpt-support';
      return (
        <div>
          <ProgramInfo programKey={programKey} title={categories['service-support'].programs[programKey]} />
          {createProgrammeWithBullets(
            programKey,
      gptSupportData.name,
      gptSupportData.subtitle,
      gptSupportData.sections,
      gptSupportData.skills
          )}
        </div>
      )
    }},
    'gpt-accueil': { name: "GPT'Accueil", render: () => {
      const programKey = 'gpt-accueil';
      return (
        <div>
          <ProgramInfo programKey={programKey} title={categories['agences-immobilières'].programs[programKey]} />
          {createProgrammeWithBullets(
            programKey,
      gptAccueilData.name,
      gptAccueilData.subtitle,
      gptAccueilData.sections,
      gptAccueilData.skills
          )}
        </div>
      )
    }},
    'gpt-loca-compta': { name: "GPT'Gestion Locative", render: () => {
      const programKey = 'gpt-loca-compta';
      return (
        <div>
          <ProgramInfo programKey={programKey} title={categories['agences-immobilières'].programs[programKey]} />
          {createProgrammeWithBullets(
            programKey,
            gptGestionLocativeData.name,
            gptGestionLocativeData.subtitle,
            gptGestionLocativeData.sections,
            gptGestionLocativeData.skills
          )}
        </div>
      );
    }},
    'direction-comex-program': { name: "GPT'CODIR", render: () => {
      const programKey = 'direction-comex-program';
      return (
        <div>
          <ProgramInfo programKey={programKey} title={categories['direction-comex'].programs[programKey]} />
          {createProgrammeWithBullets(
            programKey,
            gptCodirData.name,
            gptCodirData.subtitle,
            gptCodirData.sections,
            gptCodirData.skills
          )}
        </div>
      );
    }},
    'gpt-promo-mo': { name: "Prospection & Marketing", render: () => (
      <div>
        <ProgramInfo programKey="gpt-promo-mo" title="Formation : Prospection & Marketing" />
        {createProgrammeWithBullets(
          'gpt-promo-mo',
          "GPT'Promo",
          "Prospection & Marketing",
          gptPromoteurData.sections,
          gptPromoteurData.skills
        )}
      </div>
    )},
    'dessin-metre': { name: "Dessin & Métré", render: () => {
      const programKey = 'dessin-metre';
      return (
        <div>
          <ProgramInfo programKey={programKey} title={categories['bailleur-social'].programs[programKey]} />
          {createProgrammeWithBullets(
            programKey,
            dessinMetreData.name,
            dessinMetreData.subtitle,
            dessinMetreData.sections,
            dessinMetreData.skills
          )}
        </div>
      );
    }},
    'commerciaux-vefa': { name: "Commerciaux VEFA / Ventes en plan", render: () => {
      const programKey = 'commerciaux-vefa';
      return (
        <div>
          <ProgramInfo programKey={programKey} title={categories['bailleur-social'].programs[programKey]} />
          {commerciauxVefaNote}
          {createProgrammeWithBullets(
            programKey,
            commerciauxVefaData.name,
            commerciauxVefaData.subtitle,
            commerciauxVefaData.sections,
            commerciauxVefaData.skills
          )}
        </div>
      );
    }},
    'rh': { name: "RH", render: () => {
      const programKey = 'rh';
      return (
        <div>
          <ProgramInfo programKey={programKey} title={categories['service-support'].programs[programKey]} />
          {createProgrammeWithBullets(
            programKey,
            rhData.name,
            rhData.subtitle,
            rhData.sections,
            rhData.skills
          )}
        </div>
      );
    }},
    'informatique': { name: "Informatique", render: () => {
      const programKey = 'informatique';
      return (
        <div>
          <ProgramInfo programKey={programKey} title={categories['service-support'].programs[programKey]} />
          {createProgrammeWithBullets(
            programKey,
            informatiqueData.name,
            informatiqueData.subtitle,
            informatiqueData.sections,
            informatiqueData.skills
          )}
        </div>
      );
    }},
    'montage-administratif': { name: "Montage Administratif", render: () => {
      const programKey = 'montage-administratif';
      return (
        <div>
          <ProgramInfo programKey={programKey} title={categories['bailleur-social'].programs[programKey]} />
          {montageAdministratifNote}
          {createProgrammeWithBullets(
            programKey,
            montageAdministratifData.name,
            montageAdministratifData.subtitle,
            montageAdministratifData.sections,
            montageAdministratifData.skills
          )}
        </div>
      );
    }},
  };

  const renderContent = () => {
    if (activeTabs.main === 'accueil') {
      return renderAccueil();
    }
    if (activeTabs.sub && programMapping[activeTabs.sub]) {
      return programMapping[activeTabs.sub].render();
    }
    
    const mainCategory = categories[activeTabs.main];
    const programKey = activeTabs.sub;
    
    // Pour les sous-onglets sans contenu (RH, Informatique, etc.)
    if (programKey) {
        const title = mainCategory.programs[programKey];
        return (
          <div>
            <ProgramInfo programKey={programKey} title={`Formation : ${title}`} />
            {createProgrammeWithBullets(
              programKey,
              loremIpsumData.name,
              loremIpsumData.subtitle,
              loremIpsumData.sections,
              loremIpsumData.skills
            )}
          </div>
        );
    }
    
    // Pour les onglets principaux qui ont des sous-onglets mais aucun n'est encore sélectionné
    if (mainCategory && Object.keys(mainCategory.programs).length > 0) {
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-6">Veuillez sélectionner un programme</h2>
            <p>Choisissez un programme dans les sous-onglets pour voir son contenu.</p>
          </div>
        );
    }

    // Pour les onglets principaux sans aucun sous-onglet (ex: Direction COMEX)
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">
          {mainCategory.title}
        </h2>
        <p>Aucun programme de formation n'est disponible pour le moment dans cette catégorie.</p>
      </div>
    );
  };

  // Rendu du composant principal
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700">Mister IA</h1>
          <div className="text-gray-700">
            <p className="font-semibold">Programmes de formation</p>
            <p>Groupe VALRIM</p>
          </div>
        </header>
        
        {renderTabs()}
        {renderSubTabs()}
        
        {renderContent()}
        
        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2025 Mister IA - Programmes de formation pour le Groupe VALRIM</p>
        </footer>
      </div>
    </div>
  );
};

export default ProgrammesFormation;
