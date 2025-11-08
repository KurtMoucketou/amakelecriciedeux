import { MapPin, Calendar, Tag } from 'lucide-react';

function PortfolioPage() {
  const projects = [
    {
      title: 'Rénovation électrique complète - Maison individuelle',
      location: 'Paris 16ème',
      date: 'Janvier 2024',
      category: 'Résidentiel',
      description: 'Mise aux normes complète d\'une maison de 200m² avec installation domotique et éclairage LED.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Rénovation', 'Domotique', 'LED'],
    },
    {
      title: 'Installation photovoltaïque 9 kWc',
      location: 'Versailles',
      date: 'Décembre 2023',
      category: 'Énergies renouvelables',
      description: 'Installation de 24 panneaux solaires avec onduleur et système de monitoring.',
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Solaire', 'Photovoltaïque', 'Autoconsommation'],
    },
    {
      title: 'Bornes de recharge - Résidence collective',
      location: 'Boulogne-Billancourt',
      date: 'Novembre 2023',
      category: 'Électro-mobilité',
      description: 'Installation de 12 bornes de recharge intelligentes dans un parking résidentiel.',
      image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Borne de recharge', 'Résidentiel', 'Parking'],
    },
    {
      title: 'Installation électrique - Bureaux',
      location: 'La Défense',
      date: 'Octobre 2023',
      category: 'Professionnel',
      description: 'Câblage complet de 500m² de bureaux avec éclairage connecté et système de contrôle d\'accès.',
      image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Bureaux', 'Éclairage', 'Contrôle d\'accès'],
    },
    {
      title: 'Pompe à chaleur air-eau',
      location: 'Saint-Germain-en-Laye',
      date: 'Septembre 2023',
      category: 'Énergies renouvelables',
      description: 'Installation d\'une pompe à chaleur 16 kW avec plancher chauffant et eau chaude sanitaire.',
      image: 'https://images.pexels.com/photos/8961157/pexels-photo-8961157.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['PAC', 'Chauffage', 'Écologique'],
    },
    {
      title: 'Mise en sécurité - Immeuble ancien',
      location: 'Paris 11ème',
      date: 'Août 2023',
      category: 'Rénovation',
      description: 'Mise aux normes de l\'installation électrique d\'un immeuble de 6 étages.',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Mise aux normes', 'Sécurité', 'Immeuble'],
    },
    {
      title: 'Éclairage extérieur - Villa',
      location: 'Neuilly-sur-Seine',
      date: 'Juillet 2023',
      category: 'Résidentiel',
      description: 'Installation d\'un système d\'éclairage extérieur avec détection de mouvement et programmation.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Éclairage extérieur', 'Sécurité', 'Automatisation'],
    },
    {
      title: 'Installation complète - Commerce',
      location: 'Saint-Denis',
      date: 'Juin 2023',
      category: 'Professionnel',
      description: 'Électrification complète d\'une boutique de 150m² avec éclairage commercial et vidéosurveillance.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Commerce', 'Éclairage', 'Vidéosurveillance'],
    },
    {
      title: 'Borne de recharge privée',
      location: 'Sèvres',
      date: 'Mai 2023',
      category: 'Électro-mobilité',
      description: 'Installation d\'une wallbox 22 kW avec gestion intelligente de la charge.',
      image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Wallbox', 'Charge rapide', 'Intelligent'],
    },
  ];

  const categories = ['Tous', 'Résidentiel', 'Professionnel', 'Énergies renouvelables', 'Électro-mobilité', 'Rénovation'];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nos
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Réalisations
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Découvrez quelques-uns de nos projets réalisés avec succès
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
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar className="w-4 h-4" />
                      <span>{project.date}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-slate-600">Projets réalisés</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-slate-600">Clients satisfaits</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-slate-600">Années d'expérience</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-slate-600">Conformité</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Votre projet est unique
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105">
            Demander un devis gratuit
          </button>
        </div>
      </section>
    </div>
  );
}

export default PortfolioPage;
