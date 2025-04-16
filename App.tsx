import profilePic from './assets/profile.jpeg';
import { Menu, User, Mail, Phone, MapPin, Award, Briefcase, Book, Linkedin, GraduationCap, Code, Leaf } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-slate-800 shadow-lg z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-white">My Portfolio</h1>
            <button className="text-white md:hidden">
              <Menu />
            </button>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
              <a href="#education" className="text-gray-300 hover:text-white transition">Education</a>
              <a href="#certifications" className="text-gray-300 hover:text-white transition">Certifications</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pt-24 pb-12">
        {/* Hero Section */}
        <section className="text-center py-20">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-blue-500">
            <img 
              src={profilePic} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Deepika Gullipalli</h1>
          <p className="text-xl text-gray-400">Computer Science Engineering Student</p>
        </section>

        {/* (Rest of your content remains unchanged) */}
        {/* About, Education, Certifications, Projects, Skills, Experience, Contact, Footer */}
      </main>

      <footer className="bg-slate-900 py-6">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2024 Deepika Gullipalli. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
