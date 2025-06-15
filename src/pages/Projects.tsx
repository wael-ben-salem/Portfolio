import { Link } from "react-router-dom";
import ourbatimaLogo from "../assets/ourbatima-logo.png";
import bonotemLogo from "../assets/bonotem-logo.png";
import cinetixLogo from "../assets/cinetix-logo.png";

const projects = [
  {
    title: "OurBatima",
    logo: ourbatimaLogo,
    description: "API Symfony + JavaFX pour la gestion d’équipes et back-office avancé.",
    link: "/projects/ourbatima",
  },
  {
    title: "Bonotem",
    logo: bonotemLogo,
    description: "Plateforme de gestion financière et logistique pour la restauration.",
    link: "/projects/bonotem",
  },
  {
    title: "CineTix",
    logo: cinetixLogo,
    description: "Application mobile FlutterFlow pour les événements cinématographiques.",
    link: "/projects/cinetix",
  },
];

export default function Projects() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Mes Projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.title} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
            <img src={project.logo} alt={project.title} className="h-16 mx-auto" />
            <h3 className="text-xl font-bold mt-2 text-center">{project.title}</h3>
            <p className="text-center text-gray-600 mt-2">{project.description}</p>
            <div className="text-center mt-4">
              <Link to={project.link} className="text-blue-600 hover:underline">
                Lire plus d'information
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
