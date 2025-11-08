import { Calendar, Clock, ArrowRight } from 'lucide-react';

function NewsPage() {
  const news = [
    {
      title: 'Nouvelle réglementation RE2020 : ce qui change pour votre logement',
      excerpt: 'La réglementation environnementale 2020 impose de nouvelles normes pour les constructions neuves. Découvrez les impacts sur vos projets électriques.',
      date: '15 Mars 2024',
      readTime: '5 min',
      category: 'Réglementation',
      image: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Les avantages des bornes de recharge à domicile',
      excerpt: 'Avec l\'essor des véhicules électriques, installer une borne de recharge chez soi devient un investissement judicieux. Voici pourquoi.',
      date: '8 Mars 2024',
      readTime: '4 min',
      category: 'Électro-mobilité',
      image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Énergie solaire : est-ce rentable en 2024 ?',
      excerpt: 'Face à la hausse des prix de l\'électricité, les panneaux solaires représentent une solution d\'avenir. Analyse des coûts et de la rentabilité.',
      date: '1 Mars 2024',
      readTime: '6 min',
      category: 'Énergies renouvelables',
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Domotique : modernisez votre installation électrique',
      excerpt: 'La domotique permet de contrôler votre installation électrique à distance. Découvrez les possibilités pour votre maison.',
      date: '22 Février 2024',
      readTime: '5 min',
      category: 'Innovation',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Sécurité électrique : les points de contrôle essentiels',
      excerpt: 'Un contrôle régulier de votre installation électrique est crucial pour votre sécurité. Voici les points à vérifier absolument.',
      date: '15 Février 2024',
      readTime: '4 min',
      category: 'Sécurité',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Pompes à chaleur : le chauffage de demain',
      excerpt: 'Les pompes à chaleur s\'imposent comme la solution de chauffage écologique et économique. Tout ce qu\'il faut savoir.',
      date: '8 Février 2024',
      readTime: '6 min',
      category: 'Énergies renouvelables',
      image: 'https://images.pexels.com/photos/8961157/pexels-photo-8961157.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const categories = ['Tout', 'Réglementation', 'Électro-mobilité', 'Énergies renouvelables', 'Innovation', 'Sécurité'];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Actualités &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Conseils
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Restez informé des dernières nouveautés et tendances du secteur électrique
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-slate-200 sticky top-32 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full font-medium transition-all hover:bg-blue-600 hover:text-white bg-slate-100 text-slate-700"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2 group/btn">
                    Lire l'article
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Restez informé
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Inscrivez-vous à notre newsletter pour recevoir nos derniers articles et conseils
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-4 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-xl whitespace-nowrap">
              S'inscrire
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsPage;
