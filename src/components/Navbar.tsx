import cvFile from "../assets/CV_BEN_SALEM_WAEL .pdf";


export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 z-50 shadow flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <a href="#home" className="hover:text-indigo-400 duration-200">
          Wael Ben Salem
        </a>
      </h1>
      <div className="space-x-6">
        <a href="#education" className="hover:text-indigo-400 duration-200">Educations</a>
        <a href="#certifications" className="hover:text-indigo-400 duration-200">Certifications</a>
        <a href="#experiences" className="hover:text-indigo-400 duration-200">Expériences</a>
        <a href="mailto:waelbensalem02@gmail.com" className="hover:text-indigo-400 duration-200">Contact</a>

       <a
  href={cvFile} download
  className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-md text-sm"
>

  Télécharger CV
</a>

      </div>
    </nav>
  );
}
