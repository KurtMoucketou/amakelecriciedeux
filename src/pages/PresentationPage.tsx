import { Award, Shield, Users, Target, Lightbulb, Heart } from 'lucide-react';

function PresentationPage() {
  const values = [
    {
      icon: Shield,
      title: 'Sécurité',
      description: 'La sécurité est notre priorité absolue. Nous respectons scrupuleusement les normes en vigueur.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque projet, avec un souci constant de la qualité.',
    },
    {
      icon: Users,
      title: 'Écoute',
      description: 'Nous sommes à l\'écoute de vos besoins pour vous proposer des solutions adaptées.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Nous intégrons les dernières technologies pour des solutions modernes et efficaces.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              À propos de
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                AMAK Électricité
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Votre partenaire de confiance pour tous vos projets électriques depuis plus de 15 ans
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Notre histoire
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Fondée il y a plus de 15 ans, AMAK Électricité est née de la passion de professionnels
                  expérimentés pour l'excellence dans le domaine électrique. Notre entreprise s'est
                  développée grâce à la confiance de nos clients et à notre engagement constant envers
                  la qualité.
                </p>
                <p>
                  Au fil des années, nous avons accompagné des centaines de particuliers et d'entreprises
                  dans leurs projets électriques, de la simple installation à la rénovation complète,
                  en passant par l'intégration de solutions d'énergies renouvelables.
                </p>
                <p>
                  Aujourd'hui, AMAK Électricité est reconnue pour son expertise technique, sa réactivité
                  et son approche personnalisée. Nous continuons d'évoluer pour répondre aux défis
                  énergétiques de demain.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/8961157/pexels-photo-8961157.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Équipe AMAK Électricité"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Nos valeurs
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-2"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5691606/pexels-photo-5691606.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Expertise technique"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Notre expertise
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Certifications professionnelles
                    </h3>
                    <p className="text-slate-600">
                      Notre équipe est certifiée et régulièrement formée aux dernières normes et technologies.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Approche personnalisée
                    </h3>
                    <p className="text-slate-600">
                      Chaque projet est unique. Nous analysons vos besoins pour vous proposer la solution la plus adaptée.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Heart className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Satisfaction client
                    </h3>
                    <p className="text-slate-600">
                      Votre satisfaction est notre priorité. Nous assurons un suivi de qualité de A à Z.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-xl font-semibold mb-2">Années d'expérience</div>
              <p className="text-blue-100">
                Une expertise reconnue dans tous les domaines de l'électricité
              </p>
            </div>

            <div className="p-8">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-xl font-semibold mb-2">Clients satisfaits</div>
              <p className="text-blue-100">
                Des particuliers et entreprises qui nous font confiance
              </p>
            </div>

            <div className="p-8">
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-xl font-semibold mb-2">Projets réalisés</div>
              <p className="text-blue-100">
                Des installations de qualité partout en Île-de-France
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Notre engagement
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Chez AMAK Électricité, nous nous engageons à fournir des services d'excellence,
            dans le respect des normes de sécurité et de l'environnement. Notre objectif est
            de vous accompagner dans vos projets avec professionnalisme, transparence et réactivité.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Que vous soyez un particulier ou un professionnel, nous mettons notre expertise
            à votre service pour réaliser vos projets électriques dans les meilleures conditions.
          </p>
        </div>
      </section>
    </div>
  );
}

export default PresentationPage;
