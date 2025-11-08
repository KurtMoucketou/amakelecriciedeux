import { useState, useEffect } from 'react';
import { ArrowRight, Zap, Battery, Car, Wrench, Shield, Award, Users, ChevronLeft, ChevronRight } from 'lucide-react';

type PageType = 'home' | 'presentation' | 'services' | 'news' | 'portfolio' | 'contact';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
}

function HomePage({ onNavigate }: HomePageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Votre expert en',
      highlight: 'solutions électriques',
      subtitle: 'Installation, maintenance et énergies renouvelables pour particuliers et professionnels.',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1600',
      badge: 'Électricien professionnel à Paris',
    },
    {
      title: 'Énergies renouvelables',
      highlight: 'pour votre avenir',
      subtitle: 'Panneaux solaires, pompes à chaleur et solutions écologiques adaptées à vos besoins.',
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1600',
      badge: 'Solutions écologiques',
    },
    {
      title: 'Électro-mobilité',
      highlight: 'du futur',
      subtitle: 'Installation de bornes de recharge pour véhicules électriques à domicile et en entreprise.',
      image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=1600',
      badge: 'Bornes de recharge',
    },
    {
      title: 'Service professionnel',
      highlight: '24h/24 et 7j/7',
      subtitle: 'Interventions rapides et efficaces pour tous vos besoins en électricité.',
      image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1600',
      badge: 'Service d\'urgence',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const services = [
    {
      icon: Zap,
      title: 'Installation électrique',
      description: 'Solutions complètes pour vos installations électriques résidentielles et commerciales.',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Battery,
      title: 'Énergies renouvelables',
      description: 'Panneaux solaires, pompes à chaleur et solutions écologiques pour votre habitation.',
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Car,
      title: 'Électro-mobilité',
      description: 'Installation de bornes de recharge pour véhicules électriques à domicile et en entreprise.',
      image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Wrench,
      title: 'Maintenance',
      description: 'Maintenance préventive et corrective de vos installations électriques.',
      image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Clients satisfaits' },
    { icon: Award, value: '15 ans', label: 'D\'expérience' },
    { icon: Shield, value: '100%', label: 'Certifié' },
    { icon: Zap, value: '1000+', label: 'Projets réalisés' },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="max-w-3xl">
                <div className="inline-block px-4 py-2 bg-blue-600/30 backdrop-blur-sm rounded-full border border-blue-400/40 mb-6 animate-fade-in">
                  <span className="text-sm font-medium text-blue-200">{slide.badge}</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white animate-slide-up">
                  {slide.title}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    {slide.highlight}
                  </span>
                </h1>

                <p className="text-xl text-slate-200 mb-8 leading-relaxed animate-slide-up-delay">
                  {slide.subtitle}
                </p>

                <div className="flex flex-wrap gap-4 animate-fade-in-delay">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2"
                  >
                    Demander un devis gratuit
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => onNavigate('services')}
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20 flex items-center gap-2"
                  >
                    Découvrir nos services
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all z-10 group"
          aria-label="Slide précédent"
        >
          <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all z-10 group"
          aria-label="Slide suivant"
        >
          <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Aller au slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl hover:bg-slate-50 transition-all hover:scale-105 group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-600 transition-colors">
                    <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Nos services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Des solutions complètes et sur mesure pour tous vos besoins en électricité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-3">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <button
                      onClick={() => onNavigate('services')}
                      className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2 group/btn"
                    >
                      En savoir plus
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pourquoi choisir AMAK Électricité ?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Expertise, fiabilité et innovation pour tous vos projets électriques
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-xl font-semibold mb-2">Années d'expérience</div>
              <p className="text-blue-100">Une expertise reconnue dans le domaine électrique</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-xl font-semibold mb-2">Certifié et assuré</div>
              <p className="text-blue-100">Conformité et sécurité garanties sur tous nos travaux</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-xl font-semibold mb-2">Service disponible</div>
              <p className="text-blue-100">Intervention rapide pour vos urgences électriques</p>
            </div>
          </div>

          <div className="mt-12">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center gap-2"
            >
              Contactez-nous maintenant
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Un engagement qualité
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                AMAK Électricité s'engage à fournir des services de haute qualité, en respectant les normes
                les plus strictes en matière de sécurité et de performance. Notre équipe de professionnels
                qualifiés met son expertise au service de vos projets.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Interventions rapides</div>
                    <div className="text-slate-600">Réactivité garantie pour tous vos besoins</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Devis transparent</div>
                    <div className="text-slate-600">Prix clairs et détaillés sans surprises</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Garantie travaux</div>
                    <div className="text-slate-600">Tous nos travaux sont garantis</div>
                  </div>
                </li>
              </ul>
              <button
                onClick={() => onNavigate('presentation')}
                className="mt-8 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                En savoir plus sur nous
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Électricien professionnel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-8 rounded-xl shadow-xl">
                <div className="text-4xl font-bold">500+</div>
                <div className="text-lg">Projets réalisés</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
