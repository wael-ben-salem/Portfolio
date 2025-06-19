import { motion } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import waelImg from "../assets/wael.jpg";
import ourbatimaLogo from "../assets/ourbatima-logo.png";
import lcf from "../assets/lcf.png";
import cap1 from "../assets/screenshot1.png";
import cap2 from "../assets/screenshot2.png";
import CountUp from './CountUp';

import cap3 from "../assets/screenshot3.png";
import cap4 from "../assets/screenshot4.png";
import cap5 from "../assets/screenshot5.png";
import { Typewriter } from 'react-simple-typewriter'
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
import cvwael from "../assets/CV_BEN_SALEM_WAEL .pdf";
import { Project } from "../type";
import finc from "../assets/finconnect.png";
import bonotemLogo from "../assets/bonotem-logo.png";
import cinetixLogo from "../assets/cinetix-logo.png";
import cert1 from "../assets/cert-js-html-css.png";
import cert2 from "../assets/cert-cpp.png";
import cert3 from "../assets/cert-java.png";
import certNASA from "../assets/galactic-cert.png";
import emailjs from 'emailjs-com';

// Translations
const translations = {
  fr: {
    accueil: "Accueil",
    projetsVedette:"Projets Vedette",
    education: "Éducation",
    experiences: "Expériences",
    competences: "Compétences",
    certifications: "Certifications",
    contact: "Contact",
    welcomeTitle: "Wael Ben Salem",
    welcomeSubtitle: "Étudiant ingénieur informatique à ESPRIT",
    welcomeText: "J’aime transformer les idées en solutions concrètes, relever des défis en équipe et apprendre à chaque étape. Pour moi, un projet n’est pas qu’un livrable : c’est une aventure, une occasion de grandir et d’avoir un impact. Curieux, engagé et résolument tourné vers l’action, je crois que l’innovation naît là où la passion rencontre la rigueur.",
    viewProjects: "Voir mes projets",
    contactMe: "Me contacter",
    academicExperience: "Expérience Académique",
    professionalExperience: "Expérience Professionnelle",
    technicalSkills: "Compétences Techniques",
    softSkills: "Soft Skills",
    languages: "Maîtrise des Langues",
    nativeLanguage: "Langue maternelle",
    downloadCV: "Télécharger mon CV",
    sendMessage: "Envoyer le message",
    sending: "Envoi en cours...",
    messageSent: "Message envoyé avec succès!",
    firstName: "Prénom",
    lastName: "Nom",
    email: "Email",
    subject: "Objet",
    message: "Message",
    sendTo: "Envoyer à",
    requiredField: "Ce champ est requis",
    invalidEmail: "Email invalide",
    location: "Tunis, Tunisie",
    phone: "+216 53 075 040",
    copyright: "Portfolio © {{year}} – Tous droits réservés"
  },
  en: {
    accueil: "Home",
    projetsVedette: "Featured Projects",
    education: "Education",
    experiences: "Experiences",
    competences: "Skills",
    certifications: "Certifications",
    contact: "Contact",
    welcomeTitle: "Wael Ben Salem",
    welcomeSubtitle: "Computer engineering student at ESPRIT",
    welcomeText: "I enjoy turning ideas into concrete solutions, tackling challenges as a team and learning at every step. For me, a project isn't just a deliverable: it's an adventure, an opportunity to grow and make an impact. Curious, committed and decidedly action-oriented, I believe innovation is born where passion meets rigor.",
    viewProjects: "View my projects",
    contactMe: "Contact me",
    academicExperience: "Academic Experience",
    professionalExperience: "Professional Experience",
    technicalSkills: "Technical Skills",
    softSkills: "Soft Skills",
    languages: "Language Proficiency",
    nativeLanguage: "Native language",
    downloadCV: "Download my CV",
    sendMessage: "Send message",
    sending: "Sending...",
    messageSent: "Message sent successfully!",
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    sendTo: "Send to",
    requiredField: "This field is required",
    invalidEmail: "Invalid email",
    location: "Tunis, Tunisia",
    phone: "+216 53 075 040",
    copyright: "Portfolio © {{year}} – All rights reserved"
  }
};

type Language = keyof typeof translations;
const experiences: Project[] = [
  {
    logo: ourbatimaLogo,
    title: "OurBatima",
    company: "Expérience Académique",
    date: "Février 2025 – Mai 2025",
    description: "API Symfony avec héritage Doctrine, JavaFX pour la gestion des équipes, messagerie temps réel, visioconférence.",
    en_description: "Symfony API with Doctrine inheritance, JavaFX for team management, real-time messaging, video conferencing.",
    tags: ["JavaFX", "Symfony", "MySQL", "Doctrine"],
    details: {
      presentation: `OUR BATIMA est une application JavaFX Desktop développée dans le cadre du projet PIDEV 3A à Esprit School of Engineering (Année universitaire 2024-2025).
Elle permet la gestion intelligente des projets de construction, en facilitant la coordination entre les différents acteurs (clients, artisans, constructeurs, gestionnaires, etc.).`,
      en_presentation: `OUR BATIMA is a JavaFX Desktop application developed as part of the PIDEV 3A project at Esprit School of Engineering (Academic year 2024-2025).
It enables smart management of construction projects by facilitating coordination between different stakeholders (clients, craftsmen, builders, managers, etc.).`,
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
      en_functionalities: [
        "User authentication & registration",
        "User management (CRUD for clients, craftsmen, etc.)",
        "Team management (Drag and drop)",
        "Project, step and task tracking",
        "Intervention planning",
        "Reports, visits & field work",
        "Stock and materials management",
        "Financial management (contracts, payments)",
        "Modern and responsive graphical interface with JavaFX",
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
    description: "App mobile FlutterFlow pour la réservation d'événements, messagerie, notifications et réunions en ligne.",
    en_description: "FlutterFlow mobile app for event booking, messaging, notifications and online meetings.",
    tags: ["Flutter", "Firebase", "Gemini API", "Mobile"],
    details: {
      presentation: `CineTix est une application mobile cross-platform développée avec FlutterFlow dans le cadre d'un projet académique. Elle permet aux utilisateurs de consulter les films à l'affiche, réserver des billets, explorer des événements spéciaux, et communiquer en temps réel.`,
      en_presentation: `CineTix is a cross-platform mobile application developed with FlutterFlow as part of an academic project. It allows users to browse current movies, book tickets, explore special events, and communicate in real time.`,
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
      en_functionalities: [
        "Browse movies and cinema events",
        "Ticket booking with 3D hall visualization",
        "Seat selection by zones (VIP, Standard, etc.)",
        "Add favorites, likes, and comments on events",
        "Dedicated interface for users and administrators",
        "Integrated real-time messaging (via Gemini API)",
        "Instant notifications for major changes",
        "Online meetings integrated into the application",
      ],
      technologies: [
        "FlutterFlow",
        "Firebase Auth",
        "Firebase Firestore",
        "Firebase Cloud Messaging",
        "Gemini API (chat temps réel)",
        "GitHub",
      ],
      screenshots: [cinetix1, cinetix2, cinetix3, cinetix4, cinetix5],
    },
  },
  {
    logo: bonotemLogo,
    title: "Bonotem",
    company: "Ste-Sitem",
    date: "Février 2024 – Mai 2024",
    description: "Gestion des ressources, planning, finances et visualisation par graphiques sous Laravel + React.",
    en_description: "Resource management, scheduling, finances and chart visualization with Laravel + React.",
    tags: ["Laravel", "React", "Redux", "Dashboard"],
    details: {
      presentation: `Bonotem – Système de gestion des ressources et de la finance pour restaurateurs.`,
      en_presentation: `Bonotem - Resource and finance management system for restaurateurs.`,
      functionalities: [
        "Authentification et gestion des offres",
        "Accès basé sur les rôles : Restaurateurs et Managers",
        "Création, modification et suppression des ventes",
        "Gestion des ressources et planification opérationnelle",
        "Gestion financière et analytique avec indicateurs clés",
        "Visualisation graphique et analyses des données financières",
      ],
      en_functionalities: [
        "Authentication and offer management",
        "Role-based access: Restaurateurs and Managers",
        "Create, modify and delete sales",
        "Resource management and operational planning",
        "Financial and analytical management with key indicators",
        "Graphic visualization and financial data analysis",
      ],
      technologies: ["Frontend : React + Redux", "Backend : Laravel"],
      screenshots: [cap1, cap2, cap3, cap4, cap5, cap7, cap8, cap6],
    },
  },
  {
    logo: finc,
    title: "FinConnect",
    company: "FinConnect Financial Solution SARL",
    date: "Juillet 2023 – Septembre 2023",
    description: "Système de tickets (CRUD) et authentification (login, logout, vérif email) avec Spring Boot et Angular.",
    en_description: "Ticket system (CRUD) and authentication (login, logout, email verification) with Spring Boot and Angular.",
    tags: ["Angular", "Spring Boot", "MySQL"],
    details: {
      presentation: `FinConnect est une plateforme web de gestion des tickets destinée aux entreprises souhaitant organiser leur support client.`,
      en_presentation: `FinConnect is a web-based ticket management platform for companies wanting to organize their customer support.`,
      functionalities: [
        "Ajout, édition et suppression de tickets",
        "Gestion de l'historique des demandes",
        "Authentification sécurisée : login, logout, vérification d'email",
      ],
      en_functionalities: [
        "Add, edit and delete tickets",
        "Request history management",
        "Secure authentication: login, logout, email verification",
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
    description: "Gestion produits, clients et fournisseurs avec Angular & JHipster, commandes et mises à jour en temps réel.",
    en_description: "Product, customer and supplier management with Angular & JHipster, real-time orders and updates.",
    tags: ["Angular", "JHipster", "B2B"],
    details: {
      presentation: `Smart C Web est une application de gestion commerciale pour les produits, les clients et les fournisseurs.`,
      en_presentation: `Smart C Web is a commercial management application for products, customers and suppliers.`,
      functionalities: [
        "Ajout, affichage, modification et suppression de produits",
        "Gestion de clients avec possibilité de passer commande",
        "Gestion des fournisseurs et suivi des demandes",
      ],
      en_functionalities: [
        "Add, display, modify and delete products",
        "Customer management with order placement",
        "Supplier management and request tracking",
      ],
      technologies: ["Angular", "JHipster"],
    },
  },
  {
    logo: lcf,
    title: "Site Lcf",
    company: "Optima Junior Entreprise",
    date: "Novembre 2022 – Janvier 2023",
    description: "Maintenance front du site Lcf sous WordPress : corrections de bugs, onglets et ajustements UI.",
    en_description: "Frontend maintenance of Lcf website on WordPress: bug fixes, tabs and UI adjustments.",
    tags: ["WordPress", "Maintenance", "UI/UX"],
    details: {
      presentation: `Projet de maintenance évolutive du site Web de LCF. L'objectif était d'assurer une meilleure expérience utilisateur.`,
      en_presentation: `Progressive maintenance project for LCF website. The goal was to ensure a better user experience.`,
      functionalities: [
        "Correction de bugs fonctionnels",
        "Réactivation et gestion des onglets suspendus",
        "Refonte partielle de l'interface utilisateur",
      ],
      en_functionalities: [
        "Functional bug fixes",
        "Reactivation and management of suspended tabs",
        "Partial user interface redesign",
      ],
      technologies: ["WordPress (niveau intermédiaire)"],
    },
  },
  {
    logo: imgSec,
    title: "Img-Security",
    company: "Ste-Sitem",
    date: "Juillet 2022 – Septembre 2022",
    description: "Système d'authentification et gestion client via Laravel Jetstream, Flutter et MySQL.",
    en_description: "Authentication system and customer management via Laravel Jetstream, Flutter and MySQL.",
    tags: ["Laravel", "Flutter", "Jetstream"],
    details: {
      presentation: `Img-Security est une solution complète de gestion des demandes de clients, conçue pour fonctionner à la fois sur le web et sur mobile.`,
      en_presentation: `Img-Security is a complete customer request management solution, designed to work both on web and mobile.`,
      functionalities: [
        "Système d'authentification complet",
        "Ajout, modification ou annulation d'une demande client",
        "Interfaces web et mobile synchronisées via base de données partagée",
        "Sécurité des comptes grâce à Laravel Jetstream",
        "Design responsive sur la version web",
      ],
      en_functionalities: [
        "Complete authentication system",
        "Add, modify or cancel a customer request",
        "Web and mobile interfaces synchronized via shared database",
        "Account security with Laravel Jetstream",
        "Responsive design on web version",
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

// Certifications data with translations
const certifications = [
  {
    image: cert1,
    title: "Programming Foundations with JavaScript, HTML and CSS",
    fr_title: "Fondamentaux de la programmation avec JavaScript, HTML et CSS",
    description: "Duke University - Introduction to web development fundamentals.",
    fr_description: "Duke University - Introduction aux fondamentaux du web.",
  },
  {
    image: cert2,
    title: "Introduction to Programming (in C++)",
    fr_title: "Initiation à la programmation (en C++)",
    description: "École Polytechnique Fédérale de Lausanne",
    fr_description: "École Polytechnique Fédérale de Lausanne",
  },
  {
    image: cert3,
    title: "Introduction to Programming (in Java) [in progress]",
    fr_title: "Initiation à la programmation (en Java) [en cours]",
    description: "École Polytechnique Fédérale de Lausanne",
    fr_description: "École Polytechnique Fédérale de Lausanne",
  },
  {
    image: certNASA,
    title: '"Galactic Problem Solver" Certification - NASA',
    fr_title: 'Certification "Galactic Problem Solver" - NASA',
    description: "NASA International Space Apps Challenge",
    fr_description: "NASA International Space Apps Challenge",
  },
];
const ITEMS_PER_PAGE = 3;
const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Java", level: 75 },
  { name: "Symfony", level: 70 },
  { name: "Angular", level: 75 },
  { name: "Spring Boot", level: 70 },
  { name: "Flutter", level: 65 },
  { name: "Laravel", level: 70 },
  { name: "Firebase", level: 75 },
  { name: "MySQL", level: 80 },
  { name: "Git", level: 85 },
];
export default function Home() {
  const [selectedProject, setSelectedProject] = useState<typeof experiences[0] | null>(null);
  const [projPage, setProjPage] = useState(0);
  const [certPage, setCertPage] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("accueil");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    recipient: 'waelbensale02@gmail.com'
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [language, setLanguage] = useState<Language>('fr');
  
  const sectionsRef = useRef<{[key: string]: HTMLElement | null}>({});
  const t = translations[language];

  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    
    // Détecter la langue du navigateur
    const browserLang = navigator.language.split('-')[0] as Language;
    if (translations[browserLang]) {
      setLanguage(browserLang);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      
      const scrollPosition = window.scrollY + 200;
      Object.entries(sectionsRef.current).forEach(([id, element]) => {
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const registerSectionRef = (id: string, element: HTMLElement | null) => {
    if (element) {
      sectionsRef.current[id] = element;
    }
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = t.requiredField;
    if (!formData.lastName.trim()) newErrors.lastName = t.requiredField;
    if (!formData.email.trim()) {
      newErrors.email = t.requiredField;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = t.invalidEmail;
    }
    if (!formData.subject.trim()) newErrors.subject = t.requiredField;
    if (!formData.message.trim()) newErrors.message = t.requiredField;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSending(true);
    
    try {
      await emailjs.send(
        'service_zpb8if4',
        'template_tennhzt',
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          to_email: formData.recipient,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email
        },
        'ijXzh3paGsLk3jXAq'
      );
      
      setIsSent(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
        recipient: 'waelbensale02@gmail.com'
      });
      
      setTimeout(() => setIsSent(false), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred while sending the message');
    } finally {
      setIsSending(false);
    }
  };

  const totalProjPages = Math.ceil(experiences.length / ITEMS_PER_PAGE);
  const totalCertPages = Math.ceil(certifications.length / ITEMS_PER_PAGE);

  const paginate = (page: number, max: number) => {
    if (max <= 0) return 0;
    return (page < 0 ? max - 1 : page >= max ? 0 : page) % max;
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#6366f1" },
            move: {
              enable: true,
              speed: 1,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 60,
            },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } },
          },
        }}
        className="fixed inset-0 -z-10"
      />

      <div 
        className="fixed top-0 left-0 h-1 bg-indigo-600 z-50" 
        style={{ width: `${scrollProgress}%` }}
      />

      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-40 border-b border-gray-200 dark:border-gray-800"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <motion.div 
                whileHover={{ rotate: 5 }}
                className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
              >
                Wael Ben Salem
              </motion.div>
            </div>
            
<div className="hidden md:flex items-center space-x-7.6s">
              {['accueil', 'education', 'experiences', 'competences', 'certifications','projetsVedette', 'contact'].map((section) => (
                <motion.a
                  key={section}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === section 
                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30' 
                      : 'text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'
                  }`}
                  onClick={() => scrollToSection(section)}
                >
                  {t[section as keyof typeof t]}
                </motion.a>
              ))}
            </div>
            
            <div className="flex items-center">
              <button
                onClick={() => changeLanguage(language === 'fr' ? 'en' : 'fr')}
                className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle language"
              >
                {language === 'fr' ? 'FR' : 'EN'}
              </button>
              
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ml-2"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
              
              <button 
                className="ml-4 md:hidden text-gray-700 dark:text-gray-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['accueil', 'education', 'experiences', 'competences', 'certifications','projetsVedette', 'contact'].map((section) => (
                <a
                  key={section}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === section 
                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30' 
                      : 'text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'
                  }`}
                  onClick={() => scrollToSection(section)}
                >
                  {t[section as keyof typeof t]}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="p-4 md:p-8 max-w-6xl mx-auto font-sans mt-20 dark:bg-gray-900 dark:text-gray-100"
      >
        {/* Section Accueil */}
       <section 
  id="accueil" 
  ref={(el) => registerSectionRef("accueil", el)}
  className="min-h-screen flex flex-col justify-center mb-20 relative overflow-hidden"
>
  <div className="relative z-10">
    <div className="flex flex-col md:flex-row items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
        }}
        className="relative"
      >
        {/* Animation de halo autour de la photo */}
        <div className="absolute inset-0 rounded-full bg-indigo-500 animate-ping opacity-20"></div>
        <div className="absolute inset-0 rounded-full bg-indigo-500 opacity-10"></div>
        
        <img
          src={waelImg}
          alt="Wael Ben Salem"
          className="w-48 h-48 md:w-56 md:h-56 rounded-full shadow-xl md:mr-12 cursor-pointer hover:shadow-2xl transition-all duration-300 border-4 border-white dark:border-gray-800 z-10 relative"
        />
      </motion.div>

      <div className="text-center md:text-left mt-10 md:mt-0 max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          {t.welcomeTitle}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-xl text-gray-700 dark:text-gray-300 font-medium"
        >
          {t.welcomeSubtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 min-h-[120px]"
        >
          <Typewriter
            words={[t.welcomeText]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={30}
            deleteSpeed={0}
            delaySpeed={1000}
            onType={() => {}}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
        >
          <motion.a
            whileHover={{ 
              scale: 1.05,
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            href="#experiences"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md transition-all"
          >
            {t.viewProjects}
          </motion.a>
          
          <motion.a
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-6 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-lg shadow-md hover:bg-indigo-50 transition-all dark:bg-gray-800 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-gray-700"
          >
            {t.contactMe}
          </motion.a>
        </motion.div>
      </div>
    </div>
  </div>

  {/* Animation de vagues dynamiques */}
  <div className="absolute -bottom-20 left-0 w-full overflow-hidden h-20 z-0">
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="relative block w-full h-full"
    >
      <path
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
        opacity=".25"
        className="fill-indigo-100 dark:fill-indigo-900"
      ></path>
      <path
        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
        opacity=".5"
        className="fill-indigo-100 dark:fill-indigo-900"
      ></path>
      <path
        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
        className="fill-indigo-100 dark:fill-indigo-900"
      ></path>
    </svg>
  </div>
  
  {/* Animation de particules interactives personnalisées */}
  <div className="absolute inset-0 z-0">
    <Particles
      id="home-particles"
      init={particlesInit}
      options={{
        fullScreen: false,
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: {
                enable: true,
                force: 60,
                smooth: 10
              }
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#6366f1",
          },
          links: {
            color: "#818cf8",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: {
              min: 0.1,
              max: 0.5
            },
            animation: {
              enable: true,
              speed: 1,
              sync: false
            }
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
            animation: {
              enable: true,
              speed: 4,
              minimumValue: 0.1,
              sync: false
            }
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  </div>
</section>

        {/* Éducation */}
        <section 
          id="education" 
          ref={(el) => registerSectionRef("education", el)}
          className="mb-20 pt-20"
        >
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold mb-8 border-b-2 border-indigo-500 inline-block"
          >
            {t.education}
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                period: "2024",
                title: language === 'fr' ? "3ème année cycle ingénieur" : "3rd year engineering cycle",
                institution: "ESPRIT",
                description: language === 'fr' 
                  ? "Spécialisation en génie logiciel et développement d'applications."
                  : "Specialization in software engineering and application development."
              },
              {
                period: "2021 – 2023",
                title: language === 'fr' ? "Licence en Mathématiques-Informatique" : "Bachelor's degree in Mathematics-Computer Science",
                institution: "FST",
                description: language === 'fr' 
                  ? "Formation fondamentale en mathématiques appliquées et informatique."
                  : "Fundamental training in applied mathematics and computer science."
              },
              {
                period: "2015 – 2021",
                title: language === 'fr' ? "Baccalauréat Mathématique" : "Mathematical Baccalaureate",
                institution: language === 'fr' ? "Lycée Sadiki – Tunis" : "Sadiki High School – Tunis",
                description: language === 'fr' 
                  ? "Diplôme obtenu avec mention très bien."
                  : "Diploma obtained with honors."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
              >
                <div className="text-indigo-600 dark:text-indigo-400 font-bold text-sm mb-2">
                  {item.period}
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <div className="text-gray-700 dark:text-gray-300 font-medium mb-3">
                  {item.institution}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
        
{/* Section "Mes Passions" avec animations 3D */}
<section 
  id="passions" 
  ref={(el) => registerSectionRef("passions", el)}
  className="mb-20 pt-20"
>
  <motion.h3
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="text-3xl font-extrabold mb-8 border-b-2 border-indigo-500 inline-block"
  >
    {language === 'fr' ? 'Mes Passions' : 'My Passions'}
  </motion.h3>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      {
        icon: "💻",
        title: language === 'fr' ? "Développement Créatif" : "Creative Development",
        description: language === 'fr' 
          ? "Création de solutions innovantes qui résolvent des problèmes réels avec une esthétique moderne."
          : "Building innovative solutions that solve real problems with modern aesthetics."
      },
      {
        icon: "🚀",
        title: language === 'fr' ? "Innovation Technologique" : "Tech Innovation",
        description: language === 'fr' 
          ? "Exploration des dernières technologies et tendances pour créer des expériences futuristes."
          : "Exploring cutting-edge technologies and trends to create futuristic experiences."
      },
      {
        icon: "🎨",
        title: language === 'fr' ? "Design d'Interface" : "UI/UX Design",
        description: language === 'fr' 
          ? "Conception d'interfaces intuitives qui offrent une expérience utilisateur exceptionnelle."
          : "Designing intuitive interfaces that provide exceptional user experiences."
      }
    ].map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40, rotateY: -30 }}
        whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ delay: index * 0.2, duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all transform perspective-1000 preserve-3d hover:-translate-y-2"
      >
        <div className="text-5xl mb-4">{item.icon}</div>
        <h4 className="text-xl font-bold mb-3">{item.title}</h4>
        <p className="text-gray-600 dark:text-gray-400">
          {item.description}
        </p>
        <div className="absolute inset-0 rounded-2xl border-2 border-indigo-500 opacity-0 hover:opacity-100 transition-opacity pointer-events-none"></div>
      </motion.div>
    ))}
  </div>
</section>


{/* Section Projets en Vedette */}
<section 
  id="projetsVedette" 
  ref={(el) => registerSectionRef("featured", el)}
  className="mb-20 pt-20"
>
  <motion.h3
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="text-3xl font-extrabold mb-8 border-b-2 border-indigo-500 inline-block"
  >
    {language === 'fr' ? 'Projets en Vedette' : 'Featured Projects'}
  </motion.h3>
  
<section 
  id="stats" 
  ref={(el) => registerSectionRef("stats", el)}
  className="mb-20 pt-20"
>
  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 shadow-xl">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { 
          value: experiences.length, 
          label: language === 'fr' ? "Projets" : "Projects",
          icon: "🚀"
        },
        { 
          value: skills.length, 
          label: language === 'fr' ? "Compétences" : "Skills",
          icon: "💻"
        },
        { 
          value: certifications.length, 
          label: language === 'fr' ? "Certifications" : "Certifications",
          icon: "🏆"
        },
        { 
          value: 3, 
          label: language === 'fr' ? "Langues" : "Languages",
          icon: "🌐"
        }
      ].map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center bg-white/10 backdrop-blur-sm p-4 rounded-xl"
        >
          <div className="text-3xl mb-2">{stat.icon}</div>
          <div className="text-4xl md:text-5xl font-bold text-white mb-2">
            <CountUp end={stat.value} duration={2} />+
          </div>
          <div className="text-indigo-200 font-medium">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
    {experiences.slice(0, 2).map((project, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2, duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
      >
        <div className="relative h-64 overflow-hidden">
          {project.details.screenshots ? (
            <img
              src={project.details.screenshots[0]}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          ) : (
            <div className="bg-gray-200 dark:bg-gray-700 w-full h-full flex items-center justify-center">
              <span className="text-5xl">📁</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
            <div>
              <h4 className="text-2xl font-bold text-white">{project.title}</h4>
              <p className="text-indigo-200 mt-1">
                {project.company} • {project.date}
              </p>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {language === 'fr' ? project.description : project.en_description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags?.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors flex items-center justify-center"
            onClick={() => setSelectedProject(project)}
          >
            {language === 'fr' ? 'Voir les détails' : 'View Details'}
          </motion.button>
        </div>
      </motion.div>
    ))}
  </div>
</section>

        {/* Compétences */}
        <section 
          id="competences" 
          ref={(el) => registerSectionRef("competences", el)}
          className="mb-20 pt-20"
        >
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold mb-8 border-b-2 border-indigo-500 inline-block"
          >
            {t.competences}
          </motion.h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
                {t.technicalSkills}
              </h4>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-3">
                 {skills.map((skill, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
        whileInView={{ 
          opacity: 1, 
          scale: 1, 
          rotateY: 0,
          transition: { 
            delay: index * 0.1, 
            type: "spring", 
            stiffness: 200 
          }
        }}
        whileHover={{
          y: -10,
          rotateZ: 5,
          scale: 1.1,
          boxShadow: "0 20px 25px -5px rgba(99, 102, 241, 0.3)"
        }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all transform preserve-3d"
      >
        <div className="text-4xl mb-3">💻</div>
        <h4 className="font-bold text-gray-800 dark:text-white">{skill.name}</h4>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-3">
          <motion.div 
            className="bg-indigo-600 h-2 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {skill.level}%
        </div>
      </motion.div>
    ))}
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
                  {t.softSkills}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    language === 'fr' ? 'Travail d\'équipe' : 'Teamwork',
                    language === 'fr' ? 'Résolution de problèmes' : 'Problem solving',
                    language === 'fr' ? 'Communication' : 'Communication',
                    language === 'fr' ? 'Gestion du temps' : 'Time management',
                    language === 'fr' ? 'Adaptabilité' : 'Adaptability',
                    language === 'fr' ? 'Créativité' : 'Creativity'
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 rounded-lg p-4 text-center font-medium"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
                  {t.languages}
                </h4>
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="flex items-center">
                      <span className="w-8 h-8 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900 rounded-full mr-3">
                        🇹🇳
                      </span>
                      <span className="font-medium text-gray-700 dark:text-gray-300 flex-grow">
                        {language === 'fr' ? 'Arabe' : 'Arabic'}
                      </span>
                      <span className="text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded-full">
                        {t.nativeLanguage}
                      </span>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="flex items-center">
                      <span className="w-8 h-8 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900 rounded-full mr-3">
                        🇫🇷
                      </span>
                      <span className="font-medium text-gray-700 dark:text-gray-300 flex-grow">
                        {language === 'fr' ? 'Français' : 'French'}
                      </span>
                      <span className="text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded-full">
                        DELF B2
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-2">
                      <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="flex items-center">
                      <span className="w-8 h-8 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900 rounded-full mr-3">
                        🇬🇧
                      </span>
                      <span className="font-medium text-gray-700 dark:text-gray-300 flex-grow">
                        {language === 'fr' ? 'Anglais' : 'English'}
                      </span>
                      <span className="text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded-full">
                        AMIDEAST 4B
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-2">
                      <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border-l-4 border-indigo-500 mt-4"
                  >
                    <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                      {language === 'fr' 
                        ? "J'ai perfectionné mes compétences linguistiques avec un diplôme DELF B2 en français et j'ai terminé mes études en anglais (niveau 4B AMIDEAST). Cette maîtrise multilingue me permet de collaborer efficacement dans des environnements internationaux."
                        : "I have perfected my language skills with a DELF B2 diploma in French and completed my studies in English (AMIDEAST level 4B). This multilingual proficiency allows me to collaborate effectively in international environments."}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expériences avec pagination */}
        <section 
  id="experiences" 
  ref={(el) => registerSectionRef("experiences", el)}
  className="mb-20 pt-20"
>
  <motion.h3
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="text-3xl font-extrabold mb-6 border-b-2 border-indigo-500 inline-block"
  >
    {language === 'fr' ? 'Expériences Académiques & Professionnelles' : 'Academic & Professional Experiences'}
  </motion.h3>

  <div className="relative">
    <button
      aria-label={language === 'fr' ? 'Page précédente projets' : 'Previous projects page'}
      onClick={() => setProjPage((p) => paginate(p - 1, totalProjPages))}
      className="w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center text-xl shadow-md transition absolute left-0 top-1/2 -translate-y-1/2 z-10"
    >
      ←
    </button>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-full overflow-x-auto px-4 md:px-12">
      {experiences
        .slice(projPage * ITEMS_PER_PAGE, (projPage + 1) * ITEMS_PER_PAGE)
        .map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, rotateY: -15 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            whileHover={{
              y: -10,
              rotateY: 5,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            transition={{
              delay: i * 0.15,
              type: "spring",
              stiffness: 300,
            }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-left hover:shadow-2xl transition-all duration-300 min-w-[280px] group transform-style-3d preserve-3d"
          >
            <div className="relative overflow-hidden rounded-lg mb-4 transform translate-z-10">
              <img
                src={exp.logo}
                alt={exp.title}
                className="w-16 h-16 object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h4 className="text-xl font-semibold transform translate-z-10">{exp.title}</h4>
            <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium transform translate-z-10">
              {language === 'fr' ? exp.company : exp.company.replace('Expérience Académique', 'Academic Experience')} – {exp.date}
            </p>
            <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed transform translate-z-10">
              {language === 'fr' ? exp.description : exp.en_description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4 transform translate-z-10">
              {exp.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline flex items-center transform translate-z-10"
              onClick={() => setSelectedProject(exp)}
            >
              {language === 'fr' ? 'Explorer →' : 'Explore →'}
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="ml-1"
              >
                🚀
              </motion.span>
            </motion.button>
          </motion.div>
        ))}
    </div>

    <button
      aria-label={language === 'fr' ? 'Page suivante projets' : 'Next projects page'}
      onClick={() => setProjPage((p) => paginate(p + 1, totalProjPages))}
      className="w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center text-xl shadow-md transition absolute right-0 top-1/2 -translate-y-1/2 z-10"
    >
      →
    </button>
  </div>
  <div className="flex justify-between items-center mt-6">
    <div className="text-gray-700 dark:text-gray-300 font-semibold">
      {projPage + 1} / {totalProjPages}
    </div>
  </div>
</section>

        {/* Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            language={language}
          />
        )} 

        {/* Certifications avec pagination */}
     <section 
  id="certifications" 
  ref={(el) => registerSectionRef("certifications", el)}
  className="mb-20 pt-20"
>
  <motion.h3
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="text-3xl font-extrabold mb-8 border-b-2 border-indigo-500 inline-block"
  >
    {t.certifications}
  </motion.h3>

  <div className="relative">
    <button
      aria-label={language === 'fr' ? 'Page précédente certifications' : 'Previous certifications page'}
      onClick={() => setCertPage((p) => paginate(p - 1, totalCertPages))}
      className="w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center text-xl shadow-md transition absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex"
    >
      ←
    </button>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 md:px-12 overflow-hidden">
      {certifications
        .slice(certPage * ITEMS_PER_PAGE, (certPage + 1) * ITEMS_PER_PAGE)
        .map((cert, i) => {
          const delay = i * 0.1;
          const yOffset = Math.sin(delay * Math.PI) * 20;
          
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: yOffset,
                transition: { 
                  delay: delay,
                  type: "spring", 
                  stiffness: 100 
                }
              }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)",
                rotateZ: Math.sin(delay) * 2
              }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 min-w-[280px] group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative h-40 w-full overflow-hidden rounded-lg mb-4">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain rounded"
                />
              </div>
              <h4 className="text-xl font-semibold">
                {language === 'fr' ? cert.fr_title || cert.title : cert.title}
              </h4>
              <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                {language === 'fr' ? cert.fr_description || cert.description : cert.description}
              </p>
              
              {/* Badge animé */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: delay + 0.2 }}
                className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold"
              >
                {language === 'fr' ? 'ACQUIS' : 'EARNED'}
              </motion.div>
            </motion.div>
          );
        })}
    </div>

    <button
      aria-label={language === 'fr' ? 'Page suivante certifications' : 'Next certifications page'}
      onClick={() => setCertPage((p) => paginate(p + 1, totalCertPages))}
      className="w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center text-xl shadow-md transition absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex"
    >
      →
    </button>
  </div>

  <div className="flex justify-between items-center mt-6">
    <div className="text-gray-700 dark:text-gray-300 font-semibold">
      {certPage + 1} / {totalCertPages}
    </div>
    
    <div className="flex md:hidden space-x-2">
      <button
        aria-label={language === 'fr' ? 'Page précédente certifications' : 'Previous certifications page'}
        onClick={() => setCertPage((p) => paginate(p - 1, totalCertPages))}
        className="w-8 h-8 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center shadow-md transition"
      >
        ←
      </button>
      <button
        aria-label={language === 'fr' ? 'Page suivante certifications' : 'Next certifications page'}
        onClick={() => setCertPage((p) => paginate(p + 1, totalCertPages))}
        className="w-8 h-8 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center shadow-md transition"
      >
        →
      </button>
    </div>
  </div>
</section>

        {/* Section Contact */}
        <section 
  id="contact" 
  ref={(el) => registerSectionRef("contact", el)}
  className="mb-20 pt-20"
>
  <motion.h3
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="text-3xl font-extrabold mb-8 border-b-2 border-indigo-500 inline-block"
  >
    {t.contact}
  </motion.h3>
  
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 relative overflow-hidden">
    {/* Effet de néon */}
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-600/5 pointer-events-none"></div>
    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-xl blur-lg opacity-70 animate-pulse-slow pointer-events-none"></div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div>
                <h4 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
                  {language === 'fr' ? 'Coordonnées' : 'Contact details'}
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">waelbensale02@gmail.com</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">wael.bensalem@esprit.tn</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{language === 'fr' ? 'Téléphone' : 'Phone'}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{t.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{language === 'fr' ? 'Localisation' : 'Location'}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{t.location}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
                    {language === 'fr' ? 'Réseaux sociaux' : 'Social networks'}
                  </h4>
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ y: -3 }}
                      href="https://github.com/wael-ben-salem"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github text-2xl"></i>
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -3 }}
                      href="https://www.linkedin.com/in/wael-ben-salem-299060237/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 transition"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin text-2xl"></i>
                    </motion.a>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
                    {language === 'fr' ? 'Mon CV' : 'My CV'}
                  </h4>
                  <motion.a
                    href={cvwael}
                    download="CV_BEN_SALEM_WAEL.pdf"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    {t.downloadCV}
                  </motion.a>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
                  {language === 'fr' ? 'Envoyez un message' : 'Send a message'}
                </h4>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {t.firstName} *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                        placeholder={t.firstName}
                      />
                      {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {t.lastName} *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                        placeholder={t.lastName}
                      />
                      {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t.email} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                      placeholder={t.email}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t.subject} *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                      placeholder={t.subject}
                    />
                    {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="recipient" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t.sendTo} *
                    </label>
                    <select
                      id="recipient"
                      name="recipient"
                      value={formData.recipient}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="waelbensale02@gmail.com">waelbensale02@gmail.com</option>
                      <option value="wael.bensalem@esprit.tn">wael.bensalem@esprit.tn</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t.message} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                      placeholder={language === 'fr' 
                        ? `Bonjour Wael,\n\n[Votre message ici...]\n\nCordialement,\n[Votre nom]`
                        : `Hello Wael,\n\n[Your message here...]\n\nBest regards,\n[Your name]`}
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                  </div>
                  
                  {isSent && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-green-100 text-green-700 rounded-lg text-sm"
                    >
                      {t.messageSent}
                    </motion.div>
                  )}
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSending}
                    className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md transition-colors flex items-center justify-center"
                  >
                    {isSending ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t.sending}
                      </>
                    ) : (
                      t.sendMessage
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Bouton retour en haut */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollProgress > 10 ? 1 : 0 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg transition-all"
            aria-label={language === 'fr' ? 'Retour en haut' : 'Back to top'}
          >
            ↑
          </motion.button>
        </motion.div>

        {/* Footer */}
       <motion.footer
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="bg-gradient-to-r from-indigo-900 to-purple-900 border-t border-indigo-700 py-12 mt-20 relative overflow-hidden"
>
  {/* Animation de vagues */}
  <div className="absolute inset-0 overflow-hidden opacity-10">
    <svg 
      viewBox="0 0 1200 120" 
      className="absolute bottom-0 left-0 w-full h-auto"
    >
      <path 
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
        fill="#ffffff"
      ></path>
    </svg>
  </div>
  
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
    <div className="text-center md:text-left">
      <h4 className="text-xl font-bold text-white">
        Wael Ben Salem
      </h4>
      <p className="text-indigo-200 mt-1 text-sm">
        {t.copyright.replace('{{year}}', new Date().getFullYear().toString())}
      </p>
    </div>

    <nav className="flex flex-wrap justify-center gap-4 text-indigo-200 font-medium">
              <a
                href="#education"
                className="hover:underline transition hover:text-indigo-800 dark:hover:text-indigo-300"
              >
                {t.education}
              </a>
              <a
                href="#experiences"
                className="hover:underline transition hover:text-indigo-800 dark:hover:text-indigo-300"
              >
                {t.experiences}
              </a>
              <a
                href="#certifications"
                className="hover:underline transition hover:text-indigo-800 dark:hover:text-indigo-300"
              >
                {t.certifications}
              </a>
              <a
                href="#contact"
                className="hover:underline transition hover:text-indigo-800 dark:hover:text-indigo-300"
              >
                {t.contact}
              </a>
            </nav>

            <div className="flex gap-4">
              <motion.a
                whileHover={{ y: -3 }}
                href="https://github.com/wael-ben-salem"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition"
                aria-label="GitHub"
              >
                <i className="fab fa-github text-2xl"></i>
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.linkedin.com/in/wael-ben-salem-299060237/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 transition"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </motion.a>
            </div>

          </div>
          <Particles
    id="footer-particles"
    init={particlesInit}
    options={{
      fullScreen: false,
      background: {
        color: {
          value: "transparent",
        },
      },
      particles: {
        color: {
          value: "#a5b4fc",
        },
        links: {
          enable: true,
          color: "#c7d2fe",
          distance: 100,
          opacity: 0.2
        },
        move: {
          enable: true,
          speed: 0.5
        },
        number: {
          value: 30
        },
        opacity: {
          value: 0.3
        },
        size: {
          value: 2
        }
      }
    }}
    className="absolute inset-0 -z-10"
  />
        </motion.footer>
      </motion.div>
    </>
  );
}