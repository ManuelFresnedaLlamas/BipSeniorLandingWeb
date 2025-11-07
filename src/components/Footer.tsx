import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import logo from "figma:asset/98f17249d2de66f8cfd508a531e0ce0cf0e0eb05.png";

export function Footer() {
  const quickLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Servicios", href: "#services" },
    { name: "Nosotros", href: "#about" },
    { name: "Testimonios", href: "#testimonials" },
    { name: "Contacto", href: "#contact" }
  ];

  const services = [
    { name: "IA & Machine Learning", href: "#" },
    { name: "Migración a la Nube", href: "#" },
    { name: "Ciberseguridad", href: "#" },
    { name: "Business Intelligence", href: "#" },
    { name: "Desarrollo de Apps", href: "#" },
    { name: "Consultoría de Datos", href: "#" }
  ];

  const legalLinks = [
    { name: "Política de Privacidad", href: "#" },
    { name: "Términos de Servicio", href: "#" },
    { name: "Cookies", href: "#" },
    { name: "Aviso Legal", href: "#" }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="NeuroDigital 360" className="h-10 w-auto" />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transformamos empresas a través de soluciones tecnológicas innovadoras, 
              combinando expertise técnico con metodologías de vanguardia.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:contacto@neurodigital360.com" className="text-gray-300 hover:text-white transition-colors">
                  contacto@neurodigital360.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href="tel:+525512345678" className="text-gray-300 hover:text-white transition-colors">
                  +52 55 1234 5678
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">Ciudad de México, México</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Mantente Conectado</h3>
            <p className="text-gray-300 mb-4">
              Suscríbete a nuestro newsletter para recibir insights tecnológicos y noticias del sector.
            </p>
            
            <div className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-md transition-colors">
                  Suscribir
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-300 mb-4">Síguenos en redes sociales:</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 NeuroDigital 360. Todos los derechos reservados.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">
              NeuroDigital 360 - Impulsando la transformación digital con inteligencia y tecnología de vanguardia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}