import React, { useState } from 'react';

const ProgrammesFormation = () => {
  const [activeTab, setActiveTab] = useState('accueil');
  
  // Rendu de la navigation par onglets
  const renderTabs = () => (
    <div className="flex justify-center mb-6">
      <nav className="bg-white px-4 py-2 rounded-full shadow-md overflow-x-auto">
        <ul className="flex space-x-2">
          <li>
            <button 
              onClick={() => setActiveTab('accueil')}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${activeTab === 'accueil' ? 'bg-blue-700 text-white' : 'text-gray-700 hover:bg-blue-50'}`}
            >
              Accueil
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveTab('gpt-immo')}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${activeTab === 'gpt-immo' ? 'bg-blue-700 text-white' : 'text-gray-700 hover:bg-blue-50'}`}
            >
              GPT'Immo
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveTab('gpt-gestion')}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${activeTab === 'gpt-gestion' ? 'bg-blue-700 text-white' : 'text-gray-700 hover:bg-blue-50'}`}
            >
              GPT'Gestion
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveTab('gpt-compta')}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${activeTab === 'gpt-compta' ? 'bg-blue-700 text-white' : 'text-gray-700 hover:bg-blue-50'}`}
            >
              GPT'Compta
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveTab('gpt-promo')}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${activeTab === 'gpt-promo' ? 'bg-blue-700 text-white' : 'text-gray-700 hover:bg-blue-50'}`}
            >
              GPT'Promo
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveTab('gpt-mo')}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${activeTab === 'gpt-mo' ? 'bg-blue-700 text-white' : 'text-gray-700 hover:bg-blue-50'}`}
            >
              GPT'Projet
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveTab('gpt-patrimoine')}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${activeTab === 'gpt-patrimoine' ? 'bg-blue-700 text-white' : 'text-gray-700 hover:bg-blue-50'}`}
            >
              GPT'Patrimoine
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveTab('gpt-location')}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${activeTab === 'gpt-location' ? 'bg-blue-700 text-white' : 'text-gray-700 hover:bg-blue-50'}`}
            >
              GPT'Location
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveTab('gpt-support')}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${activeTab === 'gpt-support' ? 'bg-blue-700 text-white' : 'text-gray-700 hover:bg-blue-50'}`}
            >
              GPT'Support
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveTab('gpt-accueil')}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${activeTab === 'gpt-accueil' ? 'bg-blue-700 text-white' : 'text-gray-700 hover:bg-blue-50'}`}
            >
              GPT'Accueil
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
  
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
  const renderAccueil = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Bienvenue dans nos programmes de formation IA</h2>
      
      <div className="bg-blue-50 p-6 rounded-lg mb-8 border-l-4 border-blue-700">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Comment utiliser cette interface</h3>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
              <span>1</span>
            </div>
            <p className="text-gray-700">
              <span className="font-semibold">Choisissez un programme</span> en cliquant sur un des onglets bleus en haut de la page.
            </p>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
              <span>2</span>
            </div>
            <p className="text-gray-700">
              <span className="font-semibold">Consultez le contenu</span> qui s'affichera automatiquement ci-dessous.
            </p>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
              <span>3</span>
            </div>
            <p className="text-gray-700">
              <span className="font-semibold">Revenez à cette page</span> à tout moment en cliquant sur l'onglet "Accueil".
            </p>
          </div>
        </div>
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
                <th className="py-3 px-6">SESSION</th>
                <th className="py-3 px-6 text-center">NOMBRE DE GROUPES</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 font-medium">Commerciaux des Agences Immobilières</td>
                <td className="py-4 px-6 text-center font-bold">2</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 font-medium">Syndics - Gestion de copropriété</td>
                <td className="py-4 px-6 text-center font-bold">2</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 font-medium">Gestion locative</td>
                <td className="py-4 px-6 text-center font-bold">2</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 font-medium">Comptabilité</td>
                <td className="py-4 px-6 text-center font-bold">1</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 font-medium">Personnel d'accueil</td>
                <td className="py-4 px-6 text-center font-bold">1</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 font-medium">Montage d'opérations</td>
                <td className="py-4 px-6 text-center font-bold">2</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 font-medium">Promotion immobilière - Commerciaux</td>
                <td className="py-4 px-6 text-center font-bold">2</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 font-medium">Chargés de patrimoine</td>
                <td className="py-4 px-6 text-center font-bold">1</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 font-medium">Holding (fonctions support)</td>
                <td className="py-4 px-6 text-center font-bold">2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  
  // Données pour GPT'Immo
  const gptImmoData = {
    name: "GPT'Immo",
    subtitle: "Commerciaux des Agences Immobilières",
    sections: [
      {
        title: "Introduction à l'IA (9h à 10h30)",
        items: [
          "Introduction à la formation GPT'Immo: Découvrez comment GPT'Immo peut transformer votre pratique professionnelle en immobilier grâce à l'intégration de l'IA et de ChatGPT",
          "Introduction à l'IA et à ChatGPT: Apprenez ce qu'est l'IA, en particulier ChatGPT, et comment elle peut être utilisée pour générer du texte, analyser des informations et assister dans des tâches quotidiennes",
          "Initiation au prompting avec ChatGPT: Initiation à la création de prompts efficaces pour obtenir les meilleures réponses de ChatGPT"
        ]
      },
      {
        title: "Implémenter l'IA de la prospection à la signature du mandat (10h30 à 12h30)",
        items: [
          "Prospection brute avec IA: Utilisation de ChatGPT pour créer des scripts de démarchage téléphonique ou des messages de prospection ciblés, en vue de maximiser les réponses positives",
          "Prospection par visibilité physique et digitale avec IA: Démonstration de la création de contenu publicitaire, comme des flyers et des annonces en ligne, optimisés par IA",
          "Préparation avec IA avant le R1: Utilisation de ChatGPT pour préparer des informations personnalisées sur les clients avant les réunions",
          "Utilisation de ChatGPT pendant le R1: Démonstration de l'utilisation de ChatGPT en direct pour fournir des informations supplémentaires pendant les visites",
          "Rapport de visite avec IA pendant le R1: Apprenez à utiliser ChatGPT pour rédiger un compte-rendu de visite détaillé"
        ]
      },
      {
        title: "Implémenter l'IA de la mise en visibilité du bien jusqu'au compromis (14h à 15h30)",
        items: [
          "Création d'annonces immobilières optimales avec IA: Formation sur l'utilisation de l'IA pour rédiger des descriptions attractives et optimisées pour les moteurs de recherche",
          "Visibilité des annonces sur les réseaux sociaux avec IA: Apprenez à programmer des campagnes sur les réseaux sociaux, où l'IA aide à cibler et engager efficacement des publics spécifiques",
          "Gestion des visites avec IA: Voir comment l'IA peut aider à organiser les calendriers de visites, envoyer des rappels automatisés aux clients, et recueillir leurs feedbacks"
        ]
      },
      {
        title: "Consolider la relation client avec l'IA (15h30 à 17h30)",
        items: [
          "Suivi contractuel des transactions avec IA: Démonstration de l'utilisation de ChatGPT pour automatiser la gestion des documents contractuels et des échéances",
          "Optimisation des prospects avec IA: Utilisation de l'IA pour analyser le comportement des clients et prédire les prospects les plus susceptibles de conclure une vente",
          "Animation des réseaux sociaux avec IA: Formation sur la gestion des plateformes sociales avec l'aide de l'IA pour créer du contenu régulier et engageant"
        ]
      }
    ],
    skills: [
      "Comprendre les principes de l'IA et de ChatGPT",
      "Formuler des demandes précises à ChatGPT",
      "Rédiger des annonces immobilières attractives",
      "Optimiser la communication avec les clients",
      "Améliorer la visibilité en ligne des annonces",
      "Gérer efficacement les visites de propriétés",
      "Créer et gérer du contenu sur les réseaux sociaux",
      "Automatiser les tâches administratives répétitives",
      "Développer des stratégies de prospection basées sur les données"
    ]
  };

  // Fonction réutilisable pour créer un contenu de programme avec des listes à puces
  const createProgrammeWithBullets = (programName, subtitle, sections, skills) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Programme "{programName}" - {subtitle}</h2>
      
      <div className="mb-8 overflow-hidden rounded-lg border border-gray-200">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 uppercase">
            <tr>
              <th className="py-3 px-6 text-center">SESSION</th>
              <th className="py-3 px-6 text-center">NOMBRE DE GROUPES</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="py-4 px-6 font-medium">{getSessionName(programName)}</td>
              <td className="py-4 px-6 text-center font-bold text-xl">{getGroupCount(programName)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
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
        
        <div className="mt-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-700">
          <h4 className="font-semibold text-blue-800 text-center">Points forts de la formation</h4>
          <div className="flex justify-center mt-2">
            <div className="grid grid-cols-2 gap-x-12 gap-y-2 max-w-3xl">
              {skills.map((skill, index) => (
                skills.length % 2 !== 0 && index === skills.length - 1 ? (
                  <div key={index} className="flex items-start col-span-2 justify-center">
                    <div className="text-blue-700 mr-2">•</div>
                    <div>{skill}</div>
                  </div>
                ) : (
                  <div key={index} className="flex items-start">
                    <div className="text-blue-700 mr-2">•</div>
                    <div>{skill}</div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Rendu de l'onglet GPT'Immo
  const renderGPTImmo = () => createProgrammeWithBullets(
    gptImmoData.name,
    gptImmoData.subtitle,
    gptImmoData.sections,
    gptImmoData.skills
  );
  
  // Données pour GPT'Gestion
  const gptGestionData = {
    name: "GPT'Gestion",
    subtitle: "Syndics et Gestion de copropriété",
    sections: [
      {
        title: "Introduction (9h00 - 10h30)",
        items: [
          "Présentation des objectifs de la formation et des bénéfices de l'intégration de l'IA dans la gestion de copropriétés et locative.",
          "Explication de ce qu'est l'IA, son fonctionnement général, et présentation de ChatGPT, en insistant sur ses applications potentielles dans la gestion immobilière.",
          "Apprentissage de la formulation de questions et de commandes pour obtenir des réponses précises de ChatGPT, avec des exemples comme la rédaction d'emails automatiques ou la création de documents standards."
        ]
      },
      {
        title: "Implémenter l'IA dans la relation client (10h30 – 11h30)",
        items: [
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
  const renderGPTGestion = () => createProgrammeWithBullets(
    gptGestionData.name,
    gptGestionData.subtitle,
    gptGestionData.sections,
    gptGestionData.skills
  );
  
  // Données pour Lorem Ipsum
  const loremIpsumTemplateData = {
    subtitle: "Lorem Ipsum",
    sections: [
      {
        title: "Lorem ipsum dolor sit amet (9h à 10h30)",
        items: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur.",
          "Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl.",
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        ]
      },
      {
        title: "Vestibulum ante ipsum primis (10h30 à 12h30)",
        items: [
          "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
          "Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
          "Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit."
        ]
      },
      {
        title: "Curabitur non nulla sit amet (14h à 15h30)",
        items: [
          "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
          "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et.",
          "Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec."
        ]
      },
      {
        title: "Nulla porttitor accumsan tincidunt (15h30 à 17h30)",
        items: [
          "Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
          "Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada.",
          "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec sollicitudin molestie malesuada."
        ]
      }
    ],
    skills: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
      "Ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
      "Quis nostrud exercitation ullamco",
      "Laboris nisi ut aliquip ex ea commodo",
      "Duis aute irure dolor in reprehenderit"
    ]
  };
  
  // Données pour GPT'Location
  const gptLocationData = {
    name: "GPT'Location",
    subtitle: "Gestion Locative",
    sections: [
      {
        title: "Introduction à l'IA & découverte de ChatGPT (9h00 – 10h30)",
        items: [
          "Pourquoi l'IA transforme les métiers de l'immobilier",
          "Panorama des outils à impact dans la gestion locative de biens immobiliers",
          "Mise en pratique : apprendre à prompter afin de fiabiliser les réponses de GPT et gagner du temps"
        ]
      },
      {
        title: "Implémenter l'IA dans sa communication afin de gagner du temps (10h45 – 12h15)",
        items: [
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
      {
        title: "Introduction à l'IA & découverte de ChatGPT (9h00 – 10h30)",
        items: [
          "Présentation des objectifs de la formation et des bénéfices de l'intégration de l'IA dans la gestion de syndics et la comptabilité",
          "Explication de ce qu'est l'IA, son fonctionnement général, et présentation de ChatGPT, en insistant sur ses applications potentielles dans la gestion syndic et le service comptable",
          "Apprendre les fondamentaux du prompting afin de fiabiliser et de qualifier les réponses des modèles d'intelligence artificielle et gagner du temps"
        ]
      },
      {
        title: "Optimiser les communications et circulaires avec l'IA (10h45 – 12h15)",
        items: [
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
    subtitle: "Fonctions Supports – Valrim",
    sections: [
      {
        title: "Introduction à l'IA & posture du responsable support face aux outils IA (9h00 – 10h30)",
        items: [
          "Pourquoi et comment l'IA transforme les fonctions supports stratégiques",
          "Panorama des outils à impact pour les métiers transverses (ChatGPT, Claude, Perplexity, Gamma)",
          "Savoir formuler une demande IA claire, contextualisée, testable",
          "Atelier : réécriture d'une demande type pour obtenir des résultats fiables et actionnables"
        ]
      },
      {
        title: "Communiquer, expliquer, convaincre avec l'aide de l'IA (10h45 – 12h15)",
        items: [
          "Générer des mails ou notes à destination de : collaborateurs, partenaires, directions ou institutionnels",
          "Adapter un même contenu pour différents publics (exécutif, terrain, expert)",
          "Créer rapidement une communication RH / juridique / marketing interne ou externe",
          "Atelier : produire une version RH, une version finance ou juridique à partir d'un brief commun"
        ]
      },
      {
        title: "Produire des documents et présentations à valeur ajoutée (13h30 – 15h00)",
        items: [
          "Générer une note synthétique à partir d'un brief oral ou d'un document complexe",
          "Construire une présentation ou fiche projet à soumettre à la direction",
          "Réutiliser intelligemment ses documents existants pour créer de nouveaux livrables (ex : trame contrat RH → offre de partenariat)",
          "Atelier : transformer un document brut en livrable structuré pour une réunion d'équipe ou un CODIR"
        ]
      },
      {
        title: "Structurer et fiabiliser sa réflexion avec l'IA (15h15 – 16h30)",
        items: [
          "Se faire challenger par l'IA sur une décision à prendre (ex. : \"Quels angles n'ai-je pas envisagés ?\")",
          "Générer plusieurs scénarios ou options à partir d'un même point de départ",
          "Utiliser l'IA comme outil d'aide à la prise de recul : identification de risques, angles morts, contradictions",
          "Atelier : poser une problématique stratégique à l'IA et enrichir sa réflexion métier"
        ]
      },
      {
        title: "Concevoir des supports ou ressources utiles pour ses équipes (16h30 – 17h30)",
        items: [
          "Rédiger des guides clairs à partir de notes ou mails épars",
          "Préparer des fiches pratiques à usage interne : process, checklists, FAQ",
          "Transformer un document de fond en version simplifiée ou pédagogique",
          "Atelier : créer un livrable à destination de son équipe (fiche de process, mini-guide, mail-type enrichi)"
        ]
      }
    ],
    skills: [
      "Formuler des demandes IA adaptées à son rôle de responsable support",
      "Communiquer plus efficacement avec tous types d'interlocuteurs internes ou externes",
      "Synthétiser et transformer des documents métiers avec rapidité et clarté",
      "Utiliser l'IA pour enrichir sa posture de réflexion et de prise de décision",
      "Produire des contenus utiles, clairs et partagés pour améliorer le fonctionnement de son pôle"
    ]
  };

  // Données pour GPT'Accueil
  const gptAccueilData = {
    name: "GPT'Accueil",
    subtitle: "Personnel d'Accueil",
    sections: [
      {
        title: "Introduction à l'IA & découverte de ChatGPT (9h00 – 10h30)",
        items: [
          "Présentation des objectifs de la formation et des bénéfices de l'intégration de l'IA dans les missions du personnel d'accueil",
          "Explication de ce qu'est l'IA, son fonctionnement général, et présentation de ChatGPT, en insistant sur ses applications potentielles pour le personnel d'accueil",
          "Apprendre les fondamentaux du prompting afin de fiabiliser et de qualifier les réponses des modèles d'intelligence artificielle et gagner du temps"
        ]
      },
      {
        title: "Implémenter l'IA pour faciliter ses communications (10h45 – 12h15)",
        items: [
          "Utiliser l'IA pour préformater des accusés de réception, mise en attente, redirection",
          "Générer mails de confirmation de rendez-vous, de consignes, pièces manquantes avec simplement une note vocale ou textuelle",
          "Apprendre comment automatiser le processus de création de mails pour gagner du temps"
        ]
      },
      {
        title: "Accélérer le traitement des documents et informations (13h30 – 15h00)",
        items: [
          "Obtenir les informations d'un locataire depuis son bail locatif ou ses quittances de loyer afin de lui transmettre",
          "Utiliser l'IA pour classifier les documents reçus pour savoir s'il faut les imprimer, mettre sous pli, transférer",
          "Extraire automatiquement les informations nécessaires au remplissage d'une fiche de contact papier"
        ]
      },
      {
        title: "Optimiser la gestion des appels et le suivi des informations (15h15 – 17h30)",
        items: [
          "Obtenir des compte-rendus téléphoniques grâce à l'IA",
          "Répertorier et classifier les informations obtenues pour éviter les oublis",
          "Apprendre comment obtenir un robot GPT capable de recenser toutes les informations et documents reçus"
        ]
      }
    ],
    skills: [
      "Maîtriser les bases de l'IA générative appliquée aux missions d'accueil",
      "Automatiser la rédaction d'emails et communications courantes",
      "Traiter efficacement les documents entrants et sortants",
      "Extraire et classifier rapidement des informations importantes",
      "Optimiser la gestion des appels téléphoniques",
      "Créer des comptes-rendus précis et structurés",
      "Mettre en place des processus automatisés pour gagner du temps"
    ]
  };

  // Données pour GPT'Patrimoine
  const gptPatrimoineData = {
    name: "GPT'Patrimoine",
    subtitle: "Gestion du Patrimoine Immobilier",
    sections: [
      {
        title: "Introduction à l'IA & découverte de ChatGPT (9h00 – 10h30)",
        items: [
          "Présentation des objectifs de la formation et des bénéfices de l'intégration de l'IA dans la gestion du patrimoine immobilier",
          "Explication de ce qu'est l'IA, son fonctionnement général, et présentation de ChatGPT, en insistant sur ses applications potentielles pour les gestionnaires de patrimoine",
          "Apprendre les fondamentaux du prompting afin de fiabiliser et de qualifier les réponses des modèles d'intelligence artificielle et gagner du temps"
        ]
      },
      {
        title: "Optimiser la gestion technique et la communication (10h45 – 12h15)",
        items: [
          "Génération de fiches d'intervention et de rapports d'intervention à partir d'un simple vocal",
          "Comment l'IA peut aider à réaliser un plan d'entretien à partir de données techniques",
          "Créer des notes aux locataires depuis un simple vocal"
        ]
      },
      {
        title: "Analyser et prioriser les interventions de maintenance (13h30 – 15h00)",
        items: [
          "Comment l'IA peut analyser les incidents pour prioriser les actions de maintenance",
          "Analyse des doléances locataires et détection rapide des problèmes récurrents",
          "Analyse contextuelle et priorisation des interventions en fonction du degré d'urgence"
        ]
      },
      {
        title: "Contrôler la conformité et la sécurité du patrimoine (15h15 – 16h30)",
        items: [
          "Détection obligatoire des incohérences avec la réglementation environnementale",
          "IA contrôle les contrats de maintenance pour évaluer le respect des délais et la qualité",
          "L'IA vérifie périodiquement les équipements de sécurité en suivant les échéances de maintenance, conformité, remplacement"
        ]
      },
      {
        title: "Automatiser les tâches administratives et la veille (16h30 – 17h30)",
        items: [
          "Faciliter la mise à jour des données du patrimoine",
          "Faciliter la saisie des heures des collaborateurs",
          "Veille automatique sur des variables externes (énergie)"
        ]
      }
    ],
    skills: [
      "Maîtriser les bases de l'IA générative appliquée à la gestion de patrimoine immobilier",
      "Automatiser la création des rapports d'intervention et plans d'entretien",
      "Optimiser l'analyse et la priorisation des interventions de maintenance",
      "Renforcer le contrôle de la conformité réglementaire et la sécurité",
      "Simplifier les tâches administratives quotidiennes",
      "Améliorer la communication avec les locataires",
      "Mettre en place une veille efficace sur les variables externes"
    ]
  };

  // Données pour GPT'Projet
  const gptProjetData = {
    name: "GPT'Projet",
    subtitle: "Chefs de Projet et Maîtrise d'Ouvrage",
    sections: [
      {
        title: "Introduction à l'IA & découverte de ChatGPT (9h00 – 10h30)",
        items: [
          "Présentation des objectifs de la formation et des bénéfices de l'intégration de l'IA dans la gestion de projets immobiliers",
          "Explication de ce qu'est l'IA, son fonctionnement général, et présentation de ChatGPT, en insistant sur ses applications potentielles pour les chefs de projet et la maîtrise d'ouvrage",
          "Apprendre les fondamentaux du prompting afin de fiabiliser et de qualifier les réponses des modèles d'intelligence artificielle et gagner du temps"
        ]
      },
      {
        title: "Optimiser la gestion des données et documents projet (10h45 – 12h15)",
        items: [
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

  // Données pour GPT'Promo
  const gptPromoData = {
    name: "GPT'Promo",
    subtitle: "Commerciaux et Marketing Immobilier",
    sections: [
      {
        title: "Introduction à l'IA & découverte de ChatGPT (9h00 – 10h30)",
        items: [
          "Présentation des objectifs de la formation et des bénéfices de l'intégration de l'IA dans la commercialisation immobilière",
          "Explication de ce qu'est l'IA, son fonctionnement général, et présentation de ChatGPT, en insistant sur ses applications potentielles pour les équipes commerciales et marketing",
          "Apprendre les fondamentaux du prompting afin de fiabiliser et de qualifier les réponses des modèles d'intelligence artificielle et gagner du temps"
        ]
      },
      {
        title: "Prospection & Préparation des RDV (10h45 – 12h15)",
        items: [
          "Personnaliser des messages de relance email ou SMS automatiquement selon le profil et l'historique du prospect",
          "Créer un assistant IA pour répondre instantanément aux questions des prospects sur les programmes Valrim, même en dehors des heures d'ouverture",
          "Obtenir une étude de marché locale et concurrentielle en quelques secondes grâce à l'IA pour appuyer le discours commercial",
          "Préparer un rendez-vous client avec l'IA en générant une fiche synthétique des besoins, objections passées et préférences du contact"
        ]
      },
      {
        title: "Production de supports et contenus commerciaux (13h30 – 15h00)",
        items: [
          "Adapter automatiquement une annonce immobilière selon le profil du prospect (investisseur, primo-accédant, retraité) pour booster l'engagement",
          "Générer des visuels de marketing immobilier (infographies, localisation, attractivité) à partir de simples prompts pour gagner du temps en conception",
          "Automatiser la création d'une présentation PowerPoint pour une réunion client à partir d'un simple brief programme",
          "Créer un tutoriel ou un mode opératoire clair à partir d'une simple description orale pour outiller les équipes commerciales"
        ]
      },
      {
        title: "Accompagnement en direct & Réactivité sur le terrain (15h15 – 16h30)",
        items: [
          "Interroger l'IA en direct pendant un RDV pour fournir des réponses immédiates sur les prix du marché ou les délais de livraison",
          "Traduire rapidement une plaquette programme ou un mail pour un prospect étranger sans passer par un prestataire",
          "Gérer les objections ou les questions techniques avec l'aide d'un assistant IA alimenté par des bases internes ou des comparateurs",
          "Générer un post LinkedIn professionnel en lien avec un lancement de programme ou une opération commerciale locale"
        ]
      },
      {
        title: "Suivi post-visite & reporting (16h30 – 17h30)",
        items: [
          "Rédiger automatiquement un compte-rendu structuré après une visite client à partir de notes vocales ou points saisis à la volée",
          "Intégrer directement le compte-rendu dans le CRM ou le partager avec l'équipe projet sans perte d'informations",
          "Générer un tableau synthétique des interactions par client pour mieux organiser le relance planning",
          "Consolider les retours clients d'un programme en une synthèse IA pour identifier les points forts/faibles perçus"
        ]
      }
    ],
    skills: [
      "Maîtriser les bases de l'IA générative appliquée à la commercialisation immobilière",
      "Automatiser et personnaliser la prospection et le suivi client",
      "Produire rapidement des supports marketing et commerciaux de qualité",
      "Améliorer la réactivité et la pertinence face aux clients sur le terrain",
      "Optimiser le reporting et l'analyse des interactions clients",
      "Créer des assistants IA adaptés aux spécificités des programmes immobiliers",
      "Générer des contenus engageants pour différents profils d'acheteurs potentiels"
    ]
  };

  // Modification du programMapping pour utiliser les données GPT'Promo
  const programMapping = {
    'accueil': { render: renderAccueil },
    'gpt-immo': { name: "GPT'Immo", render: renderGPTImmo },
    'gpt-gestion': { name: "GPT'Gestion", render: renderGPTGestion },
    'gpt-compta': { name: "GPT'Compta", render: () => createProgrammeWithBullets(
      gptComptaData.name,
      gptComptaData.subtitle,
      gptComptaData.sections,
      gptComptaData.skills
    )},
    'gpt-promo': { name: "GPT'Promo", render: () => createProgrammeWithBullets(
      gptPromoData.name,
      gptPromoData.subtitle,
      gptPromoData.sections,
      gptPromoData.skills
    )},
    'gpt-mo': { name: "GPT'Projet", render: () => createProgrammeWithBullets(
      gptProjetData.name,
      gptProjetData.subtitle,
      gptProjetData.sections,
      gptProjetData.skills
    )},
    'gpt-patrimoine': { name: "GPT'Patrimoine", render: () => createProgrammeWithBullets(
      gptPatrimoineData.name,
      gptPatrimoineData.subtitle,
      gptPatrimoineData.sections,
      gptPatrimoineData.skills
    )},
    'gpt-location': { name: "GPT'Location", render: () => createProgrammeWithBullets(
      gptLocationData.name,
      gptLocationData.subtitle,
      gptLocationData.sections,
      gptLocationData.skills
    )},
    'gpt-support': { name: "GPT'Support", render: () => createProgrammeWithBullets(
      gptSupportData.name,
      gptSupportData.subtitle,
      gptSupportData.sections,
      gptSupportData.skills
    )},
    'gpt-accueil': { name: "GPT'Accueil", render: () => createProgrammeWithBullets(
      gptAccueilData.name,
      gptAccueilData.subtitle,
      gptAccueilData.sections,
      gptAccueilData.skills
    )}
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
        
        {programMapping[activeTab].render()}
        
        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2025 Mister IA - Programmes de formation pour le Groupe VALRIM</p>
        </footer>
      </div>
    </div>
  );
};

export default ProgrammesFormation;