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

  // Rendu de l'onglet GPT'Immo
  const renderGPTImmo = () => createProgrammeWithBullets(
    gptImmoData.name,
    gptImmoData.subtitle,
    gptImmoData.sections,
    gptImmoData.skills,
    sessionInfos.immo
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
  
  // Fonction réutilisable pour créer un contenu de programme avec des listes à puces
  const createProgrammeWithBullets = (programName, subtitle, sections, skills) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Programme "{programName}" - {subtitle}</h2>
      
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

  // Données pour Lorem Ipsum
  const loremIpsumTemplateData = {
    subtitle: "Lorem Ipsum",
    sections: [
      {
        title: "Section 1",
        items: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        ]
      },
      {
        title: "Section 2",
        items: [
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
          "Excepteur sint occaecat cupidatat non proident.",
          "Sunt in culpa qui officia deserunt mollit anim id est laborum."
        ]
      }
    ],
    skills: [
      "Skill 1",
      "Skill 2",
      "Skill 3",
      "Skill 4"
    ]
  };
  
  // Fonction pour déterminer quel contenu afficher en fonction de l'onglet actif
  const renderContent = () => {
    switch (activeTab) {
      case 'accueil':
        return renderAccueil();
      case 'gpt-immo':
        return renderGPTImmo();
      case 'gpt-gestion':
        return renderGPTGestion();
      // Ajoutez d'autres cas pour les onglets supplémentaires
      default:
        return <div>Contenu en cours de développement</div>;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {renderTabs()}
      {renderContent()}
    </div>
  );
};

export default ProgrammesFormation;
