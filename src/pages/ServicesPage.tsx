import { Zap, Battery, Car, Wrench, Home, Building2, Check } from 'lucide-react';

function ServicesPage() {
  const services = [
    {
      icon: Zap,
      title: 'Installation électrique',
      description: 'Nous réalisons toutes vos installations électriques, de la conception à la mise en service.',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Installation complète résidentielle',
        'Tableaux électriques',
        'Mise aux normes NF C 15-100',
        'Éclairage intérieur et extérieur',
        'Prises et circuits spécialisés',
        'Domotique et automatisation',
      ],
    },
    {
      icon: Battery,
      title: 'Énergies renouvelables',
      description: 'Adoptez les énergies vertes avec nos solutions solaires et pompes à chaleur.',
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Panneaux solaires photovoltaïques',
        'Pompes à chaleur air-air et air-eau',
        'Chauffe-eau solaire',
        'Systèmes de stockage d\'énergie',
        'Étude de rentabilité',
        'Accompagnement aides et subventions',
      ],
    },
    {
      icon: Car,
      title: 'Électro-mobilité',
      description: 'Installation de bornes de recharge pour véhicules électriques à domicile et en entreprise.',
      image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Bornes de recharge résidentielles',
        'Bornes commerciales et industrielles',
        'Wallbox intelligentes',
        'Gestion de charge',
        'Installation sécurisée',
        'Conseil et dimensionnement',
      ],
    },
    {
      icon: Wrench,
      title: 'Maintenance électrique',
      description: 'Maintenance préventive et corrective de vos installations pour garantir leur bon fonctionnement.',
      image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Maintenance préventive',
        'Dépannage d\'urgence 24/7',
        'Diagnostic électrique',
        'Réparation et remplacement',
        'Contrôle périodique',
        'Contrat d\'entretien',
      ],
    },
    {
      icon: Home,
      title: 'Rénovation résidentielle',
      description: 'Rénovation complète de vos installations électriques pour votre habitation.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Diagnostic de l\'existant',
        'Mise en sécurité',
        'Rénovation complète',
        'Modernisation des équipements',
        'Optimisation énergétique',
        'Garantie décennale',
      ],
    },
    {
      icon: Building2,
      title: 'Solutions professionnelles',
      description: 'Installations et services électriques adaptés aux besoins des professionnels.',
      image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Installations tertiaires',
        'Électricité industrielle',
        'Éclairage commercial',
        'Contrôle d\'accès',
        'Vidéosurveillance',
        'Maintenance en entreprise',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nos
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Services
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Des solutions complètes et sur mesure pour tous vos besoins en électricité
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                            <Check className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Besoin d'un devis personnalisé ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contactez-nous pour obtenir un devis gratuit et sans engagement pour votre projet
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105">
            Demander un devis gratuit
          </button>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Notre processus
            </h2>
            <p className="text-xl text-slate-600">
              Une méthode éprouvée pour la réussite de vos projets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Contact</h3>
              <p className="text-slate-600">
                Vous nous contactez pour nous exposer votre projet
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Étude</h3>
              <p className="text-slate-600">
                Nous analysons vos besoins et établissons un devis détaillé
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Réalisation</h3>
              <p className="text-slate-600">
                Notre équipe intervient pour réaliser les travaux
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Suivi</h3>
              <p className="text-slate-600">
                Nous assurons le suivi et la maintenance de votre installation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
