import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import HomePage from './pages/HomePage';
import PresentationPage from './pages/PresentationPage';
import ServicesPage from './pages/ServicesPage';
import NewsPage from './pages/NewsPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

type PageType = 'home' | 'presentation' | 'services' | 'news' | 'portfolio' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const navigation = [
    { name: 'Accueil', id: 'home' as PageType },
    { name: 'Présentation', id: 'presentation' as PageType },
    { name: 'Services', id: 'services' as PageType, hasDropdown: true },
    { name: 'Actualités', id: 'news' as PageType },
    { name: 'Portfolio', id: 'portfolio' as PageType },
    { name: 'Contacts', id: 'contact' as PageType },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'presentation':
        return <PresentationPage />;
      case 'services':
        return <ServicesPage />;
      case 'news':
        return <NewsPage />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed w-full top-0 z-50 bg-white shadow-sm">
        <div className="bg-slate-900 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-between items-center text-sm gap-2">
              <div className="flex items-center gap-4">
                <a href="tel:+33123456789" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="hidden sm:inline">+33 1 23 45 67 89</span>
                </a>
                <a href="mailto:contact@amak-electricite.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span className="hidden sm:inline">contact@amak-electricite.com</span>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-xs sm:text-sm">Paris, Île-de-France</span>
              </div>
            </div>
          </div>
        </div>

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <button
                onClick={() => setCurrentPage('home')}
                className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors"
              >
              <img className="w-12" src="/images/Logo_AMAK1.png" title="Logo Amak éléctricité" />
                AMAK Électricité
              </button>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <div key={item.id} className="relative">
                  {item.hasDropdown ? (
                    <div
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <button
                        onClick={() => setCurrentPage(item.id)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-1 ${
                          currentPage === item.id
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                        }`}
                      >
                        {item.name}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-lg py-2 border border-slate-200">
                          <button
                            onClick={() => { setCurrentPage('services'); setServicesDropdownOpen(false); }}
                            className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            Installation électrique
                          </button>
                          <button
                            onClick={() => { setCurrentPage('services'); setServicesDropdownOpen(false); }}
                            className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            Énergies renouvelables
                          </button>
                          <button
                            onClick={() => { setCurrentPage('services'); setServicesDropdownOpen(false); }}
                            className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            Électro-mobilité
                          </button>
                          <button
                            onClick={() => { setCurrentPage('services'); setServicesDropdownOpen(false); }}
                            className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            Maintenance
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => setCurrentPage(item.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        currentPage === item.id
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                      }`}
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={() => setCurrentPage('contact')}
                className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
              >
                Obtenir un devis
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-blue-600"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 font-medium transition-colors ${
                    currentPage === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => {
                  setCurrentPage('contact');
                  setMobileMenuOpen(false);
                }}
                className="w-full mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
              >
                Obtenir un devis
              </button>
            </div>
          )}
        </nav>
      </header>

      <main className="pt-32">
        {renderPage()}
      </main>

      <footer className="bg-slate-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AMAK Électricité</h3>
              <p className="text-slate-400 text-sm">
                Votre partenaire de confiance pour tous vos travaux d'électricité et d'énergies renouvelables.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                {navigation.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setCurrentPage(item.id)}
                      className="hover:text-white transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="hover:text-white transition-colors cursor-pointer">Installation électrique</li>
                <li className="hover:text-white transition-colors cursor-pointer">Énergies renouvelables</li>
                <li className="hover:text-white transition-colors cursor-pointer">Électro-mobilité</li>
                <li className="hover:text-white transition-colors cursor-pointer">Maintenance</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                  <a href="tel:+33123456789" className="hover:text-white transition-colors">
                    +33 1 23 45 67 89
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                  <a href="mailto:contact@amak-electricite.com" className="hover:text-white transition-colors">
                    contact@amak-electricite.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Paris, Île-de-France</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>&copy; {new Date().getFullYear()} AMAK Électricité. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
