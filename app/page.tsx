export default function Home() {
  return (
    <div className="global-container bg-gray-900 p-6 min-h-screen">
      {/* Barre latérale */}
      <nav className="navbar bg-gray-800/70 backdrop-blur-md shadow-lg rounded-2xl w-[300px] h-[calc(100vh-50px)] fixed">
        <h3 className="text-2xl p-4 font-kanit text-gray-300">Mon Portfolio</h3>
        <ul className="navbar-container flex flex-col justify-center">
          <li className="cursor-pointer flex items-center rounded-xl bg-gray-700/50 m-2 p-4 text-gray-300 font-kodchasan hover:bg-gray-600 transition">
            <i className="w-5 text-blue-400 mr-2">🏠</i> Accueil
          </li>
          <li className="cursor-pointer flex items-center rounded-xl bg-gray-700/50 m-2 p-4 text-gray-300 font-kodchasan hover:bg-gray-600 transition">
            <i className="w-5 text-blue-400 mr-2">📜</i> À propos
          </li>
          <li className="cursor-pointer flex items-center rounded-xl bg-gray-700/50 m-2 p-4 text-gray-300 font-kodchasan hover:bg-gray-600 transition">
            <i className="w-5 text-blue-400 mr-2">💼</i> Projets
          </li>
          <li className="cursor-pointer flex items-center rounded-xl bg-gray-700/50 m-2 p-4 text-gray-300 font-kodchasan hover:bg-gray-600 transition">
            <i className="w-5 text-blue-400 mr-2">📧</i> Contact
          </li>
        </ul>
      </nav>

      {/* Contenu principal */}
      <main className="ml-[325px]">
        <header className="topbar flex justify-between items-center mx-4 text-gray-300 font-kanit">
          <h2 className="text-xl">Bienvenue sur mon Portfolio</h2>
          <a id="loginlogoutbutton" href="#" className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-6 rounded-lg font-kodchasan shadow-md transition">
            Connexion
          </a>
        </header>

        <section className="flex flex-col items-center justify-center h-[80vh]">
          <h1 className="text-5xl font-kanit text-gray-100">
            Salut, je suis <span className="text-blue-400">[Ton Nom]</span>
          </h1>
          <p className="text-lg font-kodchasan text-gray-400 mt-4">Développeur Web & Designer Passionné</p>
          <button className="mt-6 bg-blue-500 hover:bg-blue-400 text-white py-3 px-8 rounded-lg font-kodchasan shadow-lg transition-transform transform hover:scale-105">
            Voir mes projets
          </button>
        </section>
      </main>
    </div>
  );
}
