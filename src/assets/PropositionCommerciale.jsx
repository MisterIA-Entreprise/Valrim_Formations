import React, { useState } from 'react';
import { FileText, Users, Clock, Mail, Check, Calendar, ExternalLink, Building, Briefcase } from 'lucide-react';

const PropositionCommerciale = ({ onNavigateToFormations }) => {
  const [activePage, setActivePage] = useState('qui-sommes-nous');
  
  // Rendu du menu de navigation
  const renderNav = () => (
    <div className="flex justify-center mb-6">
      <nav className="bg-white px-4 py-2 rounded-full shadow-md">
        <ul className="flex space-x-2">
          <li>
            <button 
              onClick={() => setActivePage('qui-sommes-nous')}
              className={`px-4 py-2 rounded-full ${activePage === 'qui-sommes-nous' ? 'bg-blue-700 text-white' : 'text-gray-700 hover:bg-blue-50'}`}
            >
              Qui sommes-nous
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActivePage('besoin')}
              className={`px-4 py-2 rounded-full ${activePage === 'besoin' ? 'bg-blue-700 text-white' : 'text-gray-700 hover:bg-blue-50'}`}
            >
              Votre besoin
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActivePage('solution')}
              className={`px-4 py-2 rounded-full ${activePage === 'solution' ? 'bg-blue-700 text-white' : 'text-gray-700 hover:bg-blue-50'}`}
            >
              Notre solution
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActivePage('programmes')}
              className={`px-4 py-2 rounded-full ${activePage === 'programmes' ? 'bg-blue-700 text-white' : 'text-gray-700 hover:bg-blue-50'}`}
            >
              Nos programmes
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActivePage('offre')}
              className={`px-4 py-2 rounded-full ${activePage === 'offre' ? 'bg-blue-700 text-white' : 'text-gray-700 hover:bg-blue-50'}`}
            >
              Proposition commerciale
            </button>
          </li>
          <li>
            <button 
              onClick={onNavigateToFormations}
              className="px-4 py-2 rounded-full text-gray-700 hover:bg-blue-50"
            >
              Contenu des formations
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );

  // Rendu de la page "Qui sommes-nous"
  const renderQuiSommesNous = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Qui sommes-nous</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Mister IA, leader sur l'IA Générative en France</h3>
        <p className="text-gray-700 mb-4">
          Mister IA (fondée en 2023 par Vincent et Martin Pavanello) est une entreprise française spécialisée dans le conseil et la formation aux outils d'intelligence artificielle générative.
        </p>
        <p className="text-gray-700 mb-6">
          En moins de deux ans, Mister IA s'est imposée comme un acteur de référence dans l'acculturation, la transformation et la mise en œuvre concrète de l'IA dans les organisations privées et publiques.
        </p>
        
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Quelques chiffres clés</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg shadow text-center">
            <p className="text-3xl font-bold text-blue-700 mb-2">450</p>
            <p className="text-gray-700">entreprises accompagnées</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg shadow text-center">
            <p className="text-3xl font-bold text-blue-700 mb-2">15 000</p>
            <p className="text-gray-700">professionnels formés</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg shadow text-center">
            <p className="text-3xl font-bold text-blue-700 mb-2">75</p>
            <p className="text-gray-700">collaborateurs en France</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-6">
          2 métiers : la formation opérationnelle et le conseil stratégique en IA
        </p>
        
        <div className="flex justify-center mb-6">
          <a 
            href="https://www.mister-ia.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg shadow transition-colors duration-200"
          >
            En savoir plus sur notre site <ExternalLink className="ml-2" size={16} />
          </a>
        </div>
      </div>
    </div>
  );

  // Rendu de la page "Votre besoin"
  const renderBesoin = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Votre besoin</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Plan de formation global du Groupe VALRIM</h3>
        <p className="text-gray-700 mb-6">
          Le Groupe VALRIM souhaite former l'ensemble de ses collaborateurs à l'utilisation de l'IA, avec des formations spécifiques adaptées à chaque métier de l'immobilier. Suite à notre analyse, nous avons identifié 9 groupes métiers principaux et 5 groupes satellites à intégrer, pour un total d'environ 220 personnes à former.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <Building className="text-blue-700 mr-2 mt-1" size={20} />
              <div>
                <h4 className="font-semibold">9 groupes métiers principaux</h4>
                <p className="text-gray-700">Environ 150 collaborateurs répartis entre les métiers de la transaction, gestion locative, syndic, comptabilité, promotion immobilière et fonctions support.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <Briefcase className="text-blue-700 mr-2 mt-1" size={20} />
              <div>
                <h4 className="font-semibold">5 groupes satellites</h4>
                <p className="text-gray-700">Des équipes spécifiques comme les prospecteurs fonciers, chargés de réclamation, service demande de logements, personnel d'accueil et profils techniques.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Détail des sessions à organiser</h3>
        
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span>1</span>
              </div>
              <div>
                <h4 className="font-semibold">Session "Commerciaux des Agences Immobilières"</h4>
                <p className="text-gray-700 mb-1">32 personnes (16 transactionnaires + 16 commerciaux location)</p>
                <p className="text-gray-700 mb-1">Format : 2 sessions</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span>2</span>
              </div>
              <div>
                <h4 className="font-semibold">Session "Syndics - Gestion de copropriété"</h4>
                <p className="text-gray-700 mb-1">26 personnes (18 gestionnaires + 8 assistantes)</p>
                <p className="text-gray-700 mb-1">Format : 2 sessions</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span>3</span>
              </div>
              <div>
                <h4 className="font-semibold">Session "Gestion locative"</h4>
                <p className="text-gray-700 mb-1">21 personnes (13 en gestion locative + 4 de Habitat Dauphinois + 4 du Service demande de logements)</p>
                <p className="text-gray-700 mb-1">Format : 2 sessions</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span>4</span>
              </div>
              <div>
                <h4 className="font-semibold">Session "Comptabilité"</h4>
                <p className="text-gray-700 mb-1">13 personnes (comptables syndic + gestion locative)</p>
                <p className="text-gray-700 mb-1">Format : 1 session</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span>5</span>
              </div>
              <div>
                <h4 className="font-semibold">Session "Personnel d'accueil (agences immobilières)"</h4>
                <p className="text-gray-700 mb-1">10 personnes environ</p>
                <p className="text-gray-700 mb-1">Option : Création d'un groupe ad hoc selon les effectifs</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span>6</span>
              </div>
              <div>
                <h4 className="font-semibold">Session "Montage d'opérations – Promotion / Bailleur / Aménagement"</h4>
                <p className="text-gray-700 mb-1">20 personnes (chefs de projets / chargés d'opérations)</p>
                <p className="text-gray-700 mb-1">Structures concernées : Immobilière Valrim, Habitat Dauphinois, Valrim Aménagement</p>
                <p className="text-gray-700 mb-1">Format : 2 sessions</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span>7</span>
              </div>
              <div>
                <h4 className="font-semibold">Session "Promotion immobilière - Commerciaux"</h4>
                <p className="text-gray-700 mb-1">18 personnes (12 commerciaux promotion + 1 commercial bailleur social + 1 commercial + 4 commerciaux maison individuelle)</p>
                <p className="text-gray-700 mb-1">Format : 2 sessions</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span>8</span>
              </div>
              <div>
                <h4 className="font-semibold">Session "Chargés de patrimoine – Habitat Dauphinois"</h4>
                <p className="text-gray-700 mb-1">~10 personnes (chargés de secteur, gestion du patrimoine bâti)</p>
                <p className="text-gray-700 mb-1">Format : 1 session</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span>9</span>
              </div>
              <div>
                <h4 className="font-semibold">Sessions "Holding (fonctions support)"</h4>
                <p className="text-gray-700 mb-1">18 personnes (fonctions support, RH, informatique, direction)</p>
                <p className="text-gray-700 mb-1">Format : 2 sessions dont un programme spécifique pour les dirigeants/direction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Rendu de la page "Nos programmes de formation"
  const renderProgrammes = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">Nos programmes de formation</h2>
        
        <div className="mb-8">
          <p className="text-gray-700 mb-6">
            Pour répondre aux besoins du Groupe VALRIM, nous avons conçu une offre de formation complète et adaptée à votre organisation :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
              <p className="text-3xl font-bold text-blue-700 mb-2">9</p>
              <p className="text-gray-700">programmes de formation spécialisés</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
              <p className="text-3xl font-bold text-blue-700 mb-2">15</p>
              <p className="text-gray-700">sessions planifiées</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
              <p className="text-3xl font-bold text-blue-700 mb-2">220</p>
              <p className="text-gray-700">collaborateurs à former</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Une offre complète pour tous vos métiers</h3>
            <p className="text-gray-700">
              Nous avons développé des programmes de formation adaptés à chaque métier du Groupe VALRIM, 
              permettant à tous vos collaborateurs de bénéficier d'une formation spécifique à leurs besoins 
              et à leurs outils quotidiens.
            </p>
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={onNavigateToFormations}
              className="flex items-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg shadow transition-colors duration-200 text-lg"
            >
              Découvrir nos programmes de formation détaillés
            </button>
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
  };

  // Rendu de la page "Notre solution"
  const renderSolution = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Notre solution</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Une approche sur mesure pour le Groupe VALRIM</h3>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span>1</span>
              </div>
              <div>
                <h4 className="font-semibold">Sessions de formation adaptées à chaque métier</h4>
                <p className="text-gray-700 mb-2">Nous concevons des programmes spécifiques pour chaque groupe métier identifié, avec des cas pratiques directement applicables à leur quotidien professionnel :</p>
                <ul className="space-y-1 list-disc list-inside ml-4 text-gray-700">
                  <li>Cas d'usage IA spécifiques à chaque métier</li>
                  <li>Création de prompts adaptés aux problématiques métier</li>
                  <li>Assistants IA personnalisés pour chaque profil</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span>2</span>
              </div>
              <div>
                <h4 className="font-semibold">Format des sessions optimisé</h4>
                <p className="text-gray-700 mb-2">Chaque session de formation combine :</p>
                <ul className="space-y-1 list-disc list-inside ml-4 text-gray-700">
                  <li>Introduction aux concepts clés de l'IA générative</li>
                  <li>Prise en main des outils (ChatGPT, Claude, Gemini)</li>
                  <li>Ateliers pratiques avec cas réels</li>
                  <li>Création d'assistants et de prompts personnalisés</li>
                  <li>Partage de bonnes pratiques spécifiques à chaque métier</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span>3</span>
              </div>
              <div>
                <h4 className="font-semibold">Programmes sur mesure - Exemples de contenus</h4>
                <p className="text-gray-700 mb-2">Pour chaque session, nous élaborerons un programme détaillé. Voici quelques exemples de cas d'usage que nous pourrons aborder :</p>
                
                <div className="mt-2 space-y-2">
                  <div className="bg-blue-50 p-3 rounded">
                    <h5 className="font-semibold text-blue-700">Session "Commerciaux des Agences Immobilières"</h5>
                    <p className="text-gray-700 italic text-sm">[Mettre le programme détaillé ici]</p>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded">
                    <h5 className="font-semibold text-blue-700">Session "Syndics - Gestion de copropriété"</h5>
                    <p className="text-gray-700 italic text-sm">[Mettre le programme détaillé ici]</p>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded">
                    <h5 className="font-semibold text-blue-700">Session "Montage d'opérations"</h5>
                    <p className="text-gray-700 italic text-sm">[Mettre le programme détaillé ici]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Avantages de notre approche</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-blue-700">Expertise sectorielle</h4>
            <p className="text-gray-700">Notre expérience avec les grands acteurs de l'immobilier garantit des formations ancrées dans les réalités opérationnelles de vos métiers.</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-blue-700">Approche pratique</h4>
            <p className="text-gray-700">Nos formations mettent l'accent sur la création d'outils IA immédiatement utilisables, maximisant ainsi le retour sur investissement.</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-blue-700">Homogénéité du déploiement</h4>
            <p className="text-gray-700">Un cadre commun adapté aux spécificités de chaque métier pour garantir une adoption cohérente à l'échelle du groupe.</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Rendu de la page "La proposition commerciale"
  const renderOffre = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Notre proposition commerciale</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Offre de formations pour le Groupe VALRIM</h3>
        
        <div className="overflow-hidden rounded-lg border border-gray-200 mb-6">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sessions</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre de groupes</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tarif unitaire HT</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Montant HT</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Commerciaux des Agences Immobilières</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 000 €</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4 000 €</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Syndics - Gestion de copropriété</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 000 €</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4 000 €</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Gestion locative</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 000 €</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4 000 €</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Comptabilité</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 000 €</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 000 €</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Personnel d'accueil</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 000 €</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 000 €</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Montage d'opérations</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 000 €</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4 000 €</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Promotion immobilière - Commerciaux</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 000 €</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4 000 €</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Chargés de patrimoine</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 000 €</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 000 €</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Holding (fonctions support)</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 000 €</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4 000 €</td>
              </tr>
            </tbody>
            <tfoot className="bg-gray-50">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" colSpan="2">Total (15 sessions)</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">30 000 €</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-800" colSpan="2">Tarif remisé (au lieu de 2 500 € par session)</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-800">Économie de 7 500 €</td>
              </tr>
            </tfoot>
          </table>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-700 mb-6">
          <h4 className="font-semibold text-blue-800">Offre spéciale Groupe VALRIM</h4>
          <p className="text-gray-700 mt-1">Tarif préférentiel de 2 000 € HT par session au lieu de 2 500 € HT, soit une économie globale de 7 500 € HT sur l'ensemble du programme.</p>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-700 mb-6">
          <h4 className="font-semibold text-blue-800">Note sur le financement</h4>
          <p className="text-gray-700 mt-1">Nos formations sont éligibles à plusieurs dispositifs de financement :</p>
          <ul className="mt-2 space-y-1 list-disc list-inside ml-4 text-gray-700">
            <li>Prise en charge possible par votre OPCO à hauteur de 30 à 50% du coût</li>
            <li>Possibilité de financement FNE Formation jusqu'à 70% du coût</li>
            <li>Éligibilité au dispositif FSE+ (Fonds Social Européen) couvrant 50% des coûts pédagogiques pour les formations liées à la transition numérique</li>
          </ul>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Modalités d'organisation</h3>
        
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span>1</span>
              </div>
              <div>
                <h4 className="font-semibold">Création des programmes</h4>
                <p className="text-gray-700">Nous élaborerons des programmes spécifiques pour chaque catégorie de métier, que nous vous soumettrons pour validation.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span>2</span>
              </div>
              <div>
                <h4 className="font-semibold">Planification</h4>
                <p className="text-gray-700">Les sessions peuvent être programmées selon vos disponibilités, avec possibilité d'étaler le programme sur plusieurs mois.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span>3</span>
              </div>
              <div>
                <h4 className="font-semibold">Logistique</h4>
                <p className="text-gray-700">Les formations peuvent se tenir dans vos locaux ou dans les nôtres selon vos préférences.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span>4</span>
              </div>
              <div>
                <h4 className="font-semibold">Suivi et évaluation</h4>
                <p className="text-gray-700">Chaque session fera l'objet d'une évaluation et d'un suivi pour mesurer la satisfaction et l'impact sur les pratiques professionnelles.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-8">
        <button 
          onClick={onNavigateToFormations}
          className="flex items-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg shadow transition-colors duration-200 text-lg"
        >
          Découvrir nos programmes de formation détaillés
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div className="text-gray-700">
            <p className="font-semibold">Proposition commerciale</p>
            <p>Groupe VALRIM</p>
          </div>
        </header>
        
        {renderNav()}
        
        {activePage === 'qui-sommes-nous' && renderQuiSommesNous()}
        {activePage === 'besoin' && renderBesoin()}
        {activePage === 'solution' && renderSolution()}
        {activePage === 'programmes' && renderProgrammes()}
        {activePage === 'offre' && renderOffre()}
        
        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2025 Mister IA - Proposition personnalisée pour le Groupe VALRIM</p>
        </footer>
      </div>
    </div>
  );
};

export default PropositionCommerciale;
