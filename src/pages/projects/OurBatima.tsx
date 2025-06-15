import logo from '../../assets/bonotem-logo.png';



export default function OurBatima() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <img src={logo} alt="OurBatima" className="w-24 mb-4" />
      <h2 className="text-3xl font-bold">OurBatima</h2>
      <p className="mt-2 text-gray-700">
        OUR BATIMA est une application web développée dans le cadre du projet PIDEV 3A à Esprit. Elle simplifie la
        gestion des projets de construction en Tunisie, de la planification à la livraison finale.
      </p>
      <ul className="mt-4 list-disc ml-6 text-gray-700">
        <li>Gestion des utilisateurs : clients, artisans, constructeurs, gestionnaires</li>
        <li>Suivi de projet, tâches, étapes, visites et rapports</li>
        <li>Réclamations, paiements, contrats, stock et matériaux</li>
      </ul>
      <p className="mt-4 font-semibold">Tech Stack : Symfony 6.4, PHP 8.3, Twig, MySQL</p>
      <a
        href="https://github.com/lmahdy/OurBatima"
        target="_blank"
        className="text-blue-600 underline mt-4 inline-block"
      >
        Voir sur GitHub
      </a>
    </div>
  );
}