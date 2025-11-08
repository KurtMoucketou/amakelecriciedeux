import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contactez
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Nous
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Une question ? Un projet ? Notre équipe est à votre écoute
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Envoyez-nous un message
              </h2>
              <p className="text-slate-600 mb-8">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-slate-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-slate-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  >
                    <option>Demande de devis</option>
                    <option>Installation électrique</option>
                    <option>Énergies renouvelables</option>
                    <option>Électro-mobilité</option>
                    <option>Maintenance</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                    placeholder="Décrivez votre projet ou votre demande..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Envoyer le message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Informations de contact
                </h2>
                <p className="text-slate-600 mb-8">
                  N'hésitez pas à nous contacter par téléphone, email ou à passer nous voir à nos bureaux.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Phone className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Téléphone</h3>
                    <a href="tel:+33123456789" className="text-blue-600 hover:text-blue-700">
                      +33 1 23 45 67 89
                    </a>
                    <p className="text-sm text-slate-600 mt-1">Lun - Ven : 8h - 18h</p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Mail className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <a href="mailto:contact@amak-electricite.com" className="text-blue-600 hover:text-blue-700">
                      contact@amak-electricite.com
                    </a>
                    <p className="text-sm text-slate-600 mt-1">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <MapPin className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Adresse</h3>
                    <p className="text-slate-600">
                      123 Avenue de la République<br />
                      75011 Paris, France
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Clock className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Horaires</h3>
                    <div className="text-slate-600 space-y-1">
                      <p>Lundi - Vendredi : 8h - 18h</p>
                      <p>Samedi : 9h - 13h</p>
                      <p>Dimanche : Fermé</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Urgence ?</h3>
                <p className="mb-6">
                  Pour les interventions urgentes, contactez-nous directement par téléphone.
                  Un technicien est disponible 24h/24 et 7j/7.
                </p>
                <a
                  href="tel:+33123456789"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Appeler maintenant
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Notre zone d'intervention
            </h2>
            <p className="text-xl text-slate-600">
              Nous intervenons dans toute l'Île-de-France
            </p>
          </div>

          <div className="bg-slate-200 rounded-2xl overflow-hidden h-96 flex items-center justify-center">
            <div className="text-center text-slate-600">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <p className="text-lg font-semibold">Carte de la zone d'intervention</p>
              <p className="text-sm">Paris et Île-de-France</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-white rounded-lg">
              <div className="font-semibold text-slate-900">Paris</div>
              <div className="text-sm text-slate-600">Tous arrondissements</div>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <div className="font-semibold text-slate-900">Hauts-de-Seine (92)</div>
              <div className="text-sm text-slate-600">Intervention rapide</div>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <div className="font-semibold text-slate-900">Val-de-Marne (94)</div>
              <div className="text-sm text-slate-600">Service complet</div>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <div className="font-semibold text-slate-900">Seine-Saint-Denis (93)</div>
              <div className="text-sm text-slate-600">Disponible 7j/7</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
