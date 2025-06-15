import waelImg from "../assets/wael.jpg";
import { motion } from "framer-motion";
import ourbatimaLogo from "../assets/ourbatima-logo.png";
import lcf from "../assets/lcf.png";
import cap1 from "../assets/screenshot1.png";
import cap2 from "../assets/screenshot2.png";
import cap3 from "../assets/screenshot3.png";
import cap4 from "../assets/screenshot4.png";
import cap5 from "../assets/screenshot5.png";
import cap6 from "../assets/screenshot6.png";
import cap7 from "../assets/screenshot7.png";
import cap8 from "../assets/screenshot8.png";
import cinetix1 from "../assets/capcine1.png";
import cinetix2 from "../assets/capcine2.png";
import cinetix3 from "../assets/capcine3.png";
import cinetix4 from "../assets/capcine4.png";
import cinetix5 from "../assets/capcine5.png";

import imgSec from "../assets/imgsecurity.png";
import smartc from "../assets/smartc.png";
import { ProjectModal } from "../ProjectModal";
import { Project } from "../type"; 


import finc from "../assets/finconnect.png";

import bonotemLogo from "../assets/bonotem-logo.png";
import cinetixLogo from "../assets/cinetix-logo.png";
import cert1 from "../assets/cert-js-html-css.png";
import cert2 from "../assets/cert-cpp.png";
import cert3 from "../assets/cert-java.png";
import certNASA from "../assets/galactic-cert.png";

import { useState } from "react";

const experiences : Project[]  = [
  {
    logo: ourbatimaLogo,
    title: "OurBatima",
    company: "Expérience Académique",
    date: "Février 2025 – Mai 2025",
    description:
      "API Symfony avec héritage Doctrine, JavaFX pour la gestion des équipes, messagerie temps réel, visioconférence.",
  details: {
      presentation: `OUR BATIMA est une application JavaFX Desktop développée dans le cadre du projet PIDEV 3A à Esprit School of Engineering (Année universitaire 2024-2025).
Elle permet la gestion intelligente des projets de construction, en facilitant la coordination entre les différents acteurs (clients, artisans, constructeurs, gestionnaires, etc.).

Cette version de l'application est un client JavaFX qui communique avec une base de données MySQL via JDBC, sans passer par une API HTTP.`,

      functionalities: [
        "Authentification & inscription des utilisateurs",
        "Gestion des utilisateurs (CRUD pour clients, artisans, etc.)",
        "Gestion des Equipe (Drag and drop)",
        "Suivi des projets, étapes, tâches",
        "Planification des interventions",
        "Rapports, visites & terrain",
        "Gestion du stock et des matériaux",
        "Gestion financière (contrats, paiements)",
        "Interface graphique moderne et responsive avec JavaFX",
      ],

      architecture: [
        "src/main/java/io/ourbatima/controller (Contrôleurs UI)",
        "src/main/java/io/ourbatima/dao (Accès DB via JDBC)",
        "src/main/java/io/ourbatima/model (Entités métier)",
        "src/main/java/io/ourbatima/util (Utilitaires DB, validation)",
        "src/main/resources/fxml (Interfaces graphiques)",
        "src/main/resources/img (Images, logos)",
        "src/main/resources/style (Feuilles de styles CSS)",
      ],

      technologies: [
        "JavaFX 18",
        "Gradle",
        "JDBC avec MySQL",
        "IntelliJ IDEA",
        "MySQL 8+",
      ],

      video: "https://player.vimeo.com/video/1089055324?h=0db36b06d5",
    },
  
    },
  {
    logo: cinetixLogo,
    title: "CineTix",
    company: "Expérience Académique",
    date: "Janvier 2025 – Février 2025",
    description:
      "App mobile FlutterFlow pour la réservation d'événements, messagerie, notifications et réunions en ligne.",
   details: {
    presentation: `CineTix est une application mobile cross-platform développée avec FlutterFlow dans le cadre d’un projet académique. Elle permet aux utilisateurs de consulter les films à l’affiche, réserver des billets, explorer des événements spéciaux, et communiquer en temps réel.

L'application intègre une séparation claire des rôles entre les utilisateurs classiques (clients) et les administrateurs, chacun disposant d’une interface adaptée. L’ensemble des interactions importantes génère des notifications en temps réel, et un système de messagerie interne permet aux membres de l’équipe de collaborer efficacement.`,

    functionalities: [
      "Navigation dans les films et les événements cinéma",
      "Réservation de billets avec visualisation 3D de la salle",
      "Sélection des places selon les zones (VIP, Standard, etc.)",
      "Ajout de favoris, likes, et commentaires sur les événements",
      "Interface dédiée pour utilisateurs et administrateurs",
      "Messagerie en temps réel intégrée (via Gemini API)",
      "Notifications instantanées pour les changements majeurs",
      "Réunions en ligne intégrées à l'application",
    ],

    technologies: [
      "FlutterFlow",
      "Firebase Auth",
      "Firebase Firestore",
      "Firebase Cloud Messaging",
      "Gemini API (chat temps réel)",
      "GitHub",
    ],

    screenshots: [
      cinetix1,
      cinetix2,
      cinetix3,
      cinetix4,
      cinetix5,

    ],
  },
},
  {
    logo: bonotemLogo,
    title: "Bonotem",
    company: "Ste-Sitem",
    date: "Février 2024 – Mai 2024",
    description:
      "Gestion des ressources, planning, finances et visualisation par graphiques sous Laravel + React.",
  details: {
      presentation: `Bonotem – Système de gestion des ressources et de la finance pour restaurateurs.
Ce projet a été réalisé dans le cadre d’une expérience académique entre février 2024 et mai 2024. Il propose une plateforme complète de gestion des ressources, de gestion des ventes et d’analyse financière destinée aux Restaurateurs et aux Managers.`,

      functionalities: [
        "Authentification et gestion des offres",
        "Accès basé sur les rôles : Restaurateurs et Managers",
        "Création, modification et suppression des ventes",
        "Gestion des ressources et planification opérationnelle (Marchandise, Produit, Catégorie, etc.)",
        "Gestion financière et analytique avec indicateurs clés",
        "Visualisation graphique et analyses des données financières",
      ],

      technologies: [
        "Frontend : React + Redux",
        "Backend : Laravel",
      ],

      screenshots: [
        cap1,
        cap2,
        cap3,
        cap4,
        cap5,
        cap7,
        cap8,
        cap6,
      ],
    },
  
    },
     {
    logo: finc,
    title: "FinConnect",
    company: "FinConnect Financial Solution SARL",
    date: "Juillet 2023 – Septembre 2023",
    description:
      "Système de tickets (CRUD) et authentification (login, logout, vérif email) avec Spring Boot et Angular.",
  details: {
    presentation: `FinConnect est une plateforme web de gestion des tickets destinée aux entreprises souhaitant organiser leur support client. Elle inclut des modules d’authentification et de traitement des demandes.`,
    functionalities: [
      "Ajout, édition et suppression de tickets",
      "Gestion de l’historique des demandes",
      "Authentification sécurisée : login, logout, vérification d’email",
    ],
    technologies: [
      "Frontend : Angular",
      "Backend : Spring Boot",
      "Base de données : XAMPP (MySQL)",
    ],
  },
},
  {
    logo: smartc,
    title: "Smart C Web",
    company: "Optima Junior Entreprise",
    date: "Janvier 2023 – Juin 2023",
    description:
      "Gestion produits, clients et fournisseurs avec Angular & JHipster, commandes et mises à jour en temps réel.",
  details: {
    presentation: `Smart C Web est une application de gestion commerciale pour les produits, les clients et les fournisseurs. Elle vise à digitaliser les flux de commande dans un environnement B2B.`,
    functionalities: [
      "Ajout, affichage, modification et suppression de produits",
      "Gestion de clients avec possibilité de passer commande",
      "Gestion des fournisseurs et suivi des demandes",
    ],
    technologies: [
      "Angular",
      "JHipster",
    ],
  },
},
  {
    logo: lcf,
    title: "Site Lcf",
    company: "Optima Junior Entreprise",
    date: "Novembre 2022 – Janvier 2023",
    description:
      "Maintenance front du site Lcf sous WordPress : corrections de bugs, onglets et ajustements UI.",
  details: {
    presentation: `Projet de maintenance évolutive du site Web de LCF. L’objectif était d’assurer une meilleure expérience utilisateur en corrigeant les bugs et en ajustant l’interface.`,
    functionalities: [
      "Correction de bugs fonctionnels",
      "Réactivation et gestion des onglets suspendus",
      "Refonte partielle de l’interface utilisateur",
    ],
    technologies: [
      "WordPress (niveau intermédiaire)",
    ],
  },
},
  {
    logo: imgSec,
    title: "Img-Security",
    company: "Ste-Sitem",
    date: "Juillet 2022 – Septembre 2022",
    description:
      "Système d’authentification et gestion client via Laravel Jetstream, Flutter et MySQL .",
  details: {
presentation: `Img-Security est une solution complète de gestion des demandes de clients, conçue pour fonctionner à la fois sur le web et sur mobile.
Elle permet aux utilisateurs de créer, modifier ou annuler des demandes via une interface simple et sécurisée. Le système est équipé d’une authentification robuste intégrée avec Laravel Jetstream côté web, et Flutter pour la version mobile.`,
      functionalities: [
      "Système d’authentification complet : login, logout, vérification de l’e-mail, mot de passe oublié",
      "Ajout, modification ou annulation d’une demande client",
      "Interfaces web et mobile synchronisées via base de données partagée",
      "Sécurité des comptes grâce à Laravel Jetstream (2FA, gestion des sessions, etc.)",
      "Design responsive sur la version web",
    ],

    technologies: [
      "Laravel Jetstream (Web front + back)",
      "Flutter (Application mobile)",
      "MySQL",
      "Blade, TailwindCSS",
      "Dart",
      "GitHub",
    ],

  },
},
];

const certifications = [
  {
    image: cert1,
    title: "Programming Foundations with JavaScript, HTML and CSS",
    description: "Duke University - Introduction aux fondamentaux du web.",
  },
  {
    image: cert2,
    title: "Initiation à la programmation (en C++)",
    description: "École Polytechnique Fédérale de Lausanne",
  },
  {
    image: cert3,
    title: "Initiation à la programmation (en Java) [en cours]",
    description: "École Polytechnique Fédérale de Lausanne",
  },
  {
    image: certNASA,
    title: 'Certification "Galactic Problem Solver" - NASA',
    description: "NASA International Space Apps Challenge ",
  },
];

const ITEMS_PER_PAGE = 3;

export default function Home() {
    const [selectedProject, setSelectedProject] = useState<typeof experiences[0] | null>(null);

  const [projPage, setProjPage] = useState(0);
  const [certPage, setCertPage] = useState(0);

  const totalProjPages = Math.ceil(experiences.length / ITEMS_PER_PAGE);
  const totalCertPages = Math.ceil(certifications.length / ITEMS_PER_PAGE);

  const paginate = (page: number, max: number) => {
    if (page < 0) return max - 1;
    if (page >= max) return 0;
    return page;
  };

  // Composant pagination avec flèches intégrées dans la ligne des cards
  function PaginationCards({
    page,
    setPage,
    totalPages,
  }: {
    page: number;
    setPage: (page: number) => void;
    totalPages: number;
  }) {
    return (
      <>
        <div className="flex items-center justify-center md:justify-start gap-4 mb-6 relative max-w-full">
          <button
            aria-label="Page précédente"
            onClick={() => setPage(p => paginate(p - 1, totalPages))}
            className="w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center text-xl shadow-md transition"
            style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)" }}
          >
            ←
          </button>
          {/* Spacer flex-grow pour laisser les cartes centrées */}
          <div className="flex flex-1 justify-center gap-8 max-w-full overflow-x-auto px-12">
            {/* Les cards seront rendues en dehors */}
          </div>
          <button
            aria-label="Page suivante"
            onClick={() => setPage(p => paginate(p + 1, totalPages))}
            className="w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center text-xl shadow-md transition"
            style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)" }}
          >
            →
          </button>
        </div>
        <div className="text-center text-gray-700 font-semibold mb-12">
          Page {page + 1} / {totalPages}
        </div>
      </>
    );
  }

  // Pour intégrer les cartes entre les flèches, on ajuste le code ainsi :
  // On affiche les flèches "position: absolute" à gauche/droite, puis on affiche les cartes au centre

  return (
    <div className="p-8 max-w-6xl mx-auto font-sans">
      {/* Profil */}
      <div className="flex flex-col md:flex-row items-center mb-16">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={waelImg}
          alt="Wael Ben Salem"
          className="w-40 h-40 rounded-full shadow-xl md:mr-8"
        />
        <div className="text-center md:text-left mt-6 md:mt-0 max-w-xl">
          <h2 className="text-4xl font-bold">Wael Ben Salem</h2>
          <p className="mt-2 text-lg text-gray-700 font-medium">
            Étudiant ingénieur informatique à ESPRIT
          </p>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            Passionné par le développement web et mobile, j’ai réalisé plusieurs
            projets académiques couvrant les technologies modernes comme React,
            Laravel, Symfony, Flutter, Angular, SpringBoot et Firebase.
          </p>
        </div>
      </div>
      {/* Éducation */}
      <section id="education" className="mb-20">
        <h3 className="text-3xl font-extrabold mb-6 border-b-2 border-indigo-500 inline-block">
          Éducation
        </h3>
        <ul className="list-disc pl-8 space-y-3 text-gray-700 text-lg max-w-xl">
          <li>2024 – 3eme année cycle ingénieur / ESPRIT</li>
          <li>2021 – 2023 Licence en Mathématiques-Informatique / FST</li>
          <li>2015 – 2021 Baccalauréat Mathématique / Lycée Sadiki – Tunis</li>
        </ul>
      </section>

      {/* Expériences avec pagination */}
      <section id="experiences" className="mb-20">
        <h3 className="text-3xl font-extrabold mb-6 border-b-2 border-indigo-500 inline-block">
          Expériences Académiques & Professionnelles
        </h3>

        <div className="relative">
          {/* Flèches gauche/droite avec position absolute */}
          <button
            aria-label="Page précédente projets"
            onClick={() => setProjPage((p) => paginate(p - 1, totalProjPages))}
            className="w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center text-xl shadow-md transition absolute left-0 top-1/2 -translate-y-1/2 z-10"
          >
            ←
          </button>

          <div className="grid md:grid-cols-3 gap-8 max-w-full overflow-x-auto px-12">
            {experiences
              .slice(projPage * ITEMS_PER_PAGE, (projPage + 1) * ITEMS_PER_PAGE)
              .map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-white rounded-xl shadow-lg p-6 text-left hover:shadow-2xl transition-shadow duration-300 min-w-[280px]"
                >
                  <img
                    src={exp.logo}
                    alt={exp.title}
                    className="w-16 h-16 mb-4 object-contain"
                  />
                  <h4 className="text-xl font-semibold">{exp.title}</h4>
                  <p className="text-sm text-indigo-600 font-medium">
                    {exp.company} – {exp.date}
                  </p>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                  <button
                  className="text-indigo-600 font-semibold hover:underline"
                  onClick={() => setSelectedProject(exp)}
                >
                  Lire plus →
                </button>
                </motion.div>
              ))}
          </div>

          <button
            aria-label="Page suivante projets"
            onClick={() => setProjPage((p) => paginate(p + 1, totalProjPages))}
            className="w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center text-xl shadow-md transition absolute right-0 top-1/2 -translate-y-1/2 z-10"
          >
            →
          </button>
        </div>

        <div className="text-center text-gray-700 font-semibold mt-6">
        {projPage + 1} / {totalProjPages}
        </div>
      </section>

       {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      

      {/* Certifications avec pagination */}
      <section id="certifications"  className="mb-20">
        <h3 className="text-3xl font-extrabold mb-6 border-b-2 border-indigo-500 inline-block">
          Certifications
        </h3>

        <div className="relative">
          <button
            aria-label="Page précédente certifications"
            onClick={() => setCertPage((p) => paginate(p - 1, totalCertPages))}
            className="w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center text-xl shadow-md transition absolute left-0 top-1/2 -translate-y-1/2 z-10"
          >
            ←
          </button>

          <div className="grid md:grid-cols-3 gap-8 max-w-full overflow-x-auto px-12">
            {certifications
              .slice(certPage * ITEMS_PER_PAGE, (certPage + 1) * ITEMS_PER_PAGE)
              .map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300 min-w-[280px]"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-40 object-cover rounded mb-4 mx-auto"
                  />
                  <h4 className="text-xl font-semibold">{cert.title}</h4>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                    {cert.description}
                  </p>
                </motion.div>
              ))}
          </div>

          <button
            aria-label="Page suivante certifications"
            onClick={() => setCertPage((p) => paginate(p + 1, totalCertPages))}
            className="w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center text-xl shadow-md transition absolute right-0 top-1/2 -translate-y-1/2 z-10"
          >
            →
          </button>
        </div>

        <div className="text-center text-gray-700 font-semibold mt-6">
           {certPage + 1} / {totalCertPages}
        </div>
      </section>
      <motion.footer
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="bg-gray-100 border-t border-gray-200 py-10 mt-12"
>
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
    <div className="text-center md:text-left">
      <h4 className="text-xl font-bold text-gray-800">Wael Ben Salem</h4>
      <p className="text-gray-600 mt-1 text-sm">
        Portfolio © {new Date().getFullYear()} – Tous droits réservés
      </p>
    </div>

    <nav className="flex gap-6 text-indigo-600 font-medium">
      <a href="#education" className="hover:underline transition">Éducation</a>
      <a href="#experiences" className="hover:underline transition">Expériences</a>
      <a href="#certifications" className="hover:underline transition">Certifications</a>
    </nav>

    <div className="flex gap-4 text-gray-500">
      <a
        href="https://github.com/wael-ben-salem" 
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-800 transition"
        aria-label="GitHub"
      >
        <i className="fab fa-github text-2xl"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/wael-ben-salem-299060237/" 
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-700 transition"
        aria-label="LinkedIn"
      >
        <i className="fab fa-linkedin text-2xl"></i>
      </a>
    </div>
  </div>
</motion.footer>

    </div>
  );
}
