
// Si vous utilisez des icônes comme Heroicons ou Lucide-React,
// vous pouvez les importer ici.
// Exemple : import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
          
          {/* Section 1 : Logo et Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">Faso Craie</h3>
            <p className="text-sm max-w-sm">
              Faso Craie s&apos;engage à offrir des solutions éducatives de qualité et à accompagner la réussite des élèves et enseignants au Burkina Faso.
            </p>
          </div>

          {/* Section 2 : Liens rapides */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Liens Utiles</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:text-white transition-colors duration-300">À propos</a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition-colors duration-300">Nos Services</a>
              </li>
              <li>
                <a href="/resources" className="hover:text-white transition-colors duration-300">Ressources</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Section 3 : Suivez-nous */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Réseaux Sociaux</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                {/* Icône Facebook */}
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                {/* Icône Twitter */}
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                {/* Icône Instagram */}
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
        </div>
        
        {/* Ligne de séparation et Copyright */}
        <hr className="my-8 border-gray-700" />
        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Faso Craie. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
