import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">🏛️</span>
              </div>
              <span className="text-xl font-bold">GovBuddy</span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering Indian citizens to discover and access government schemes that match their profile and needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                📘
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                🐦
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                💼
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/form" className="text-gray-300 hover:text-white transition-colors">Find Schemes</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Accessibility</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 GovBuddy. All rights reserved. | Developed for the citizens of India
          </p>
        </div>
      </div>
    </footer>
  );
}
