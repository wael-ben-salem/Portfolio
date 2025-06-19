import { motion, AnimatePresence } from "framer-motion";
import { Project } from "../src/type";
import { useEffect, useState } from "react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  language: 'fr' | 'en';
}

export function ProjectModal({ project, onClose, language }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState("presentation");
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (project) {
      setActiveTab("presentation");
      setCurrentScreenshotIndex(0);
    }
  }, [project]);

  // Effet pour le défilement automatique des captures d'écran
  useEffect(() => {
    if (!project || !project.details?.screenshots || !isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentScreenshotIndex(prev => 
        prev === (project.details!.screenshots!.length - 1) ? 0 : prev + 1
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, [project, isAutoPlaying]);

  if (!project || !project.details) return null;

  const { details } = project;

  // Traductions pour les onglets
  const tabLabels = {
    presentation: language === 'fr' ? "📝 Présentation" : "📝 Presentation",
    features: language === 'fr' ? "⚙️ Fonctionnalités" : "⚙️ Features",
    architecture: language === 'fr' ? "🏗️ Architecture" : "🏗️ Architecture",
    technologies: language === 'fr' ? "💻 Technologies" : "💻 Technologies",
    video: language === 'fr' ? "🎥 Vidéo" : "🎥 Video",
    screenshots: language === 'fr' ? "🖼️ Galerie" : "🖼️ Gallery"
  };

  const tabs = [
    { id: "presentation", label: tabLabels.presentation },
    { id: "features", label: tabLabels.features },
    ...(details.architecture ? [{ id: "architecture", label: tabLabels.architecture }] : []),
    { id: "technologies", label: tabLabels.technologies },
    ...(details.video ? [{ id: "video", label: tabLabels.video }] : []),
    ...(details.screenshots ? [{ id: "screenshots", label: tabLabels.screenshots }] : []),
  ];

  const handlePrevScreenshot = () => {
    setCurrentScreenshotIndex(prev => 
      prev === 0 ? (details.screenshots?.length || 1) - 1 : prev - 1
    );
    setIsAutoPlaying(false);
  };

  const handleNextScreenshot = () => {
    setCurrentScreenshotIndex(prev => 
      prev === (details.screenshots?.length || 1) - 1 ? 0 : prev + 1
    );
    setIsAutoPlaying(false);
  };

  // Fonction pour obtenir le contenu dans la langue appropriée
  const getTranslatedContent = (content: string | string[], enContent?: string | string[]) => {
    if (language === 'fr') return content;
    return enContent || content;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Overlay avec effet de flou */}
        <motion.div
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(4px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-70"
        />
        
        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ 
            type: "spring", 
            damping: 25,
            stiffness: 300
          }}
          className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl bg-white dark:bg-gray-800 shadow-xl z-50 border border-gray-200 dark:border-gray-700"
        >
          {/* Close button animé */}
          <motion.button
            whileHover={{ rotate: 90, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 shadow-md"
            aria-label={language === 'fr' ? "Fermer modal" : "Close modal"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>

          {/* Header avec effet de gradient */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-t-xl">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-3 shadow-lg"
              >
                <img
                  src={project.logo}
                  alt={project.title}
                  className="w-20 h-20 object-contain"
                />
              </motion.div>
              <div>
                <motion.h2 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-2xl md:text-3xl font-bold text-white"
                >
                  {project.title}
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-indigo-100 font-semibold mt-1"
                >
                  {language === 'fr' ? 
                    project.company : 
                    project.company.replace('Expérience Académique', 'Academic Experience')
                  } – {project.date}
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-3 flex flex-wrap gap-2"
                >
                  {project.tags?.map((tag, i) => (
                    <motion.span 
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 * i }}
                      className="px-3 py-1 text-xs bg-white/20 text-white rounded-full backdrop-blur-sm"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Navigation par onglets */}
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex overflow-x-auto px-6 -mb-px">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                      : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contenu des onglets */}
          <div className="p-6">
            {/* Présentation */}
            {activeTab === "presentation" && (
              <motion.section
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="sr-only">
                  {language === 'fr' ? "Présentation" : "Presentation"}
                </h3>
                <p className="whitespace-pre-line text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg leading-relaxed">
                  {getTranslatedContent(
                    details.presentation, 
                    (details as any).en_presentation
                  )}
                </p>
              </motion.section>
            )}

            {/* Fonctionnalités */}
            {activeTab === "features" && details.functionalities && (
              <motion.section
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="sr-only">
                  {language === 'fr' ? "Fonctionnalités principales" : "Main features"}
                </h3>
                <ul className="space-y-3">
                  {getTranslatedContent(
                    details.functionalities,
                    (details as any).en_functionalities
                  ).map((f: string, i: number) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <span className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-full p-1 mr-3 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">{f}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.section>
            )}

            {/* Architecture */}
            {activeTab === "architecture" && details.architecture && (
              <motion.section
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="sr-only">
                  {language === 'fr' ? "Architecture du projet" : "Project architecture"}
                </h3>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  {details.architecture.map((a: string, i: number) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start font-mono text-sm mb-2 last:mb-0"
                    >
                      <span className="text-gray-400 dark:text-gray-500 mr-3 mt-1">{i + 1}.</span>
                      <span className="text-gray-700 dark:text-gray-300">{a}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Technologies */}
            {activeTab === "technologies" && details.technologies && (
              <motion.section
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="sr-only">
                  {language === 'fr' ? "Technologies utilisées" : "Technologies used"}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {details.technologies.map((t: string, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.05, type: "spring" }}
                      whileHover={{ y: -3 }}
                      className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-lg font-medium flex items-center shadow-sm hover:shadow-md transition-all"
                    >
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                      {t}
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Vidéo */}
            {activeTab === "video" && details.video && (
              <motion.section
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-xl shadow-lg bg-gray-900"
              >
                <h3 className="sr-only">
                  {language === 'fr' ? "Vidéo de présentation" : "Presentation video"}
                </h3>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={details.video}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={language === 'fr' ? "Présentation vidéo du projet" : "Project video presentation"}
                    className="min-h-[300px]"
                  />
                </div>
              </motion.section>
            )}

            {/* Screenshots - Carrousel amélioré */}
            {activeTab === "screenshots" && details.screenshots && (
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="sr-only">
                  {language === 'fr' ? "Captures d'écran" : "Screenshots"}
                </h3>
                <div className="relative">
                  <div className="relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-700 aspect-video flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentScreenshotIndex}
                        src={details.screenshots[currentScreenshotIndex]}
                        alt={`${language === 'fr' ? 'Capture' : 'Screenshot'} ${currentScreenshotIndex + 1}`}
                        className="max-h-full max-w-full object-contain"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </AnimatePresence>
                    
                    {/* Navigation du carrousel */}
                    <button
                      onClick={handlePrevScreenshot}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-md flex items-center justify-center text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition-colors z-10"
                      aria-label={language === 'fr' ? "Image précédente" : "Previous image"}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button
                      onClick={handleNextScreenshot}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-md flex items-center justify-center text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition-colors z-10"
                      aria-label={language === 'fr' ? "Image suivante" : "Next image"}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>

                    {/* Indicateur de position */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                      {currentScreenshotIndex + 1} / {details.screenshots.length}
                    </div>

                    {/* Bouton de lecture automatique */}
                    <button
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
                      aria-label={isAutoPlaying ? 
                        (language === 'fr' ? "Désactiver le défilement automatique" : "Disable auto-scroll") : 
                        (language === 'fr' ? "Activer le défilement automatique" : "Enable auto-scroll")
                      }
                    >
                      {isAutoPlaying ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  </div>
                  
                  {/* Miniatures avec effet de zoom */}
                  <div className="mt-4 flex overflow-x-auto gap-2 pb-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
                    {details.screenshots.map((src: string, index: number) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setCurrentScreenshotIndex(index);
                          setIsAutoPlaying(false);
                        }}
                        className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                          currentScreenshotIndex === index
                            ? "border-indigo-500 scale-105"
                            : "border-transparent hover:border-gray-300 dark:hover:border-gray-600"
                        }`}
                        aria-label={`${language === 'fr' ? 'Afficher image' : 'Show image'} ${index + 1}`}
                      >
                        <img
                          src={src}
                          alt={`${language === 'fr' ? 'Miniature' : 'Thumbnail'} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.section>
            )}
          </div>

          {/* Footer du modal */}
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/30 border-t border-gray-200 dark:border-gray-700 rounded-b-xl flex justify-end">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onClose}
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
            >
              {language === 'fr' ? "Fermer" : "Close"}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}