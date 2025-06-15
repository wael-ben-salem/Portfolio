import logo from '../../assets/bonotem-logo.png';

export default function Bonotem() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <img src={logo} alt="Bonotem" className="w-24 mb-4" />
      <h2 className="text-3xl font-bold">Bonotem</h2>
      <p className="mt-2 text-gray-700">
        Bonotem est une plateforme de gestion des ressources et de la finance dédiée aux restaurateurs. Développée en
        Laravel & React.
      </p>
      <ul className="mt-4 list-disc ml-6 text-gray-700">
        <li>Suivi des ventes, dépenses, pertes et bénéfices</li>
        <li>Visualisation des indicateurs financiers avec graphiques</li>
        <li>Modules pour produits, ingrédients, menu, personnel, fournisseurs</li>
      </ul>
      <p className="mt-4 font-semibold">Tech Stack : Laravel, React + Redux</p>
    </div>
  );
}