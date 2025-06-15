import { motion } from "framer-motion";
import { Project } from "../src/type"; 


interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project || !project.details) return null;

  const { details } = project;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
      />
  <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl bg-white p-8 shadow-xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
          aria-label="Fermer modal"
        >
          ×
        </button>

        <div className="flex items-center gap-4 mb-6">
          <img
            src={project.logo}
            alt={project.title}
            className="w-20 h-20 object-contain"
          />
          <div>
            <h2 className="text-3xl font-bold">{project.title}</h2>
            <p className="text-indigo-600 font-semibold">
              {project.company} – {project.date}
            </p>
          </div>
        </div>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Présentation</h3>
          <p className="whitespace-pre-line">{details.presentation}</p>
        </section>

        {details.functionalities && (
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Fonctionnalités principales</h3>
            <ul className="list-disc list-inside space-y-1">
              {details.functionalities.map((f: string, i: number) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </section>
        )}

        {details.architecture && (
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Architecture du projet</h3>
            <ul className="list-disc list-inside space-y-1">
              {details.architecture.map((a: string, i: number) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </section>
        )}

        {details.technologies && (
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Technologies utilisées</h3>
            <ul className="list-disc list-inside space-y-1">
              {details.technologies.map((t: string, i: number) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </section>
        )}

        {details.video && (
          <section className="mb-8">
  <h3 className="text-xl font-semibold mb-4 text-center">🎥 Vidéo de présentation</h3>
  <div className="w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg aspect-w-16 aspect-h-9">
   <iframe
                src={details.video}
               width="100%"
  height="360"
  frameBorder="0"
  allow="autoplay; fullscreen; picture-in-picture"
  allowFullScreen
  title="Présentation vidéo du projet"
/>
  </div>
</section>

          
        )}
        {details.screenshots && details.screenshots.length > 0 && (
  <section className="mb-8">
    <h3 className="text-xl font-semibold mb-4 text-center">🖼️ Captures d'écran</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {details.screenshots.map((src: string, index: number) => (
        <img
          key={index}
          src={src}
          alt={`Capture ${index + 1}`}
          className="w-full rounded-lg shadow-md object-cover hover:scale-105 transition-transform duration-300"
        />
      ))}
    </div>
  </section>
)}

      </motion.div>
      </div>
    </>
  );
}
