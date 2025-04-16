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
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Deepika Gullipalli</h1>
          <p className="text-xl text-gray-400">Computer Science Engineering Student</p>
        </section>

        {/* About Section */}
        <section id="about" className="py-12">
          <h2 className="text-2xl font-bold text-white mb-6">Career Objective</h2>
          <div className="bg-slate-800 rounded-lg p-6">
            <p className="text-gray-300 leading-relaxed">
              Seeking an internship in accounting to apply academic knowledge, enhance technical and organizational
              skills, and gain hands-on experience in a dynamic environment. Eager to collaborate with experienced
              professionals to further develop expertise in accounting practices, strengthen teamwork abilities, and
              contribute effectively to organizational goals.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-12">
          <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="flex items-center mb-2">
                <GraduationCap className="text-blue-500 mr-2" />
                <h3 className="text-white font-semibold">Bachelor of Technology in Computer Science Engineering</h3>
              </div>
              <p className="text-gray-400">MVGR COLLEGE OF ENGINEERING, Vizianagaram</p>
              <p className="text-gray-400">Nov'22 – May'26</p>
              <p className="text-gray-400">CGPA: 8.14</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="flex items-center mb-2">
                <Book className="text-blue-500 mr-2" />
                <h3 className="text-white font-semibold">Intermediate, M.P.C</h3>
              </div>
              <p className="text-gray-400">Sri Chaitanya Junior College, Visakhapatnam</p>
              <p className="text-gray-400">Apr'22</p>
              <p className="text-gray-400">Marks: 928/1000</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="flex items-center mb-2">
                <Book className="text-blue-500 mr-2" />
                <h3 className="text-white font-semibold">General</h3>
              </div>
              <p className="text-gray-400">Suresh High School, Parvathipuram</p>
              <p className="text-gray-400">May'20</p>
              <p className="text-gray-400">Marks: 600/600</p>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-12">
          <h2 className="text-2xl font-bold text-white mb-6">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Award className="text-blue-500 mr-2" />
                <h3 className="text-white font-semibold">Cisco Networking Academy Certifications</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Introduction to Networks (CCNAv7)</li>
                <li>• IT Essentials: PC Hardware and Software</li>
                <li>• Introduction to Cybersecurity</li>
                <li>• Cybersecurity Essentials</li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Award className="text-blue-500 mr-2" />
                <h3 className="text-white font-semibold">IIIT Sri City Certification</h3>
              </div>
              <p className="text-gray-300">Certificate in IoT Applications, Intelligent and Autonomous Systems, and Digital Twins – 64%</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12">
          <h2 className="text-2xl font-bold text-white mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Smart Street Light Control System</h3>
              <p className="text-gray-300">
                This project aims to develop an IoT-enabled, energy-efficient street light control system using sensors (PIR,
                LDR) and microcontrollers (Arduino/Raspberry Pi). It features motion-based adaptive lighting and real-time
                monitoring via a web interface, achieving a 30% reduction in energy consumption while enhancing safety
                and reliability.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">FarmEase: Tomato Leaf Disease Detection</h3>
              <p className="text-gray-300">
                A machine learning-based system for detecting diseases in tomato plants through leaf analysis and providing
                appropriate pesticide recommendations. The system helps farmers identify plant diseases early and take
                preventive measures.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12">
          <h2 className="text-2xl font-bold text-white mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Programming & Tools</h3>
              <p className="text-gray-300">C, C++, Java, Python</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Web Development</h3>
              <p className="text-gray-300">Frontend Design (HTML/CSS/JS)</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Interpersonal Skills</h3>
              <p className="text-gray-300">Communication skills, Time Management, Adaptability, Team Work</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12">
          <h2 className="text-2xl font-bold text-white mb-6">Experience</h2>
          <div className="bg-slate-800 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Briefcase className="text-blue-500 mr-2" />
              <h3 className="text-xl font-semibold text-white">Salesforce Intern</h3>
            </div>
            <p className="text-gray-400 mb-4">Dec'24</p>
            <ul className="text-gray-300 space-y-2">
              <li>• Gaining hands-on experience in Salesforce development using Apex programming language</li>
              <li>• Designing, developing, and deploying scalable and efficient solutions on the Salesforce platform</li>
              <li>• Learning about CRM customization, automation, and platform integration techniques</li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12">
          <h2 className="text-2xl font-bold text-white mb-6">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-lg p-6 flex items-center">
              <Mail className="text-blue-500 mr-4" />
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-gray-400">gullipallideepika15@gmail.com</p>
              </div>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 flex items-center">
              <Phone className="text-blue-500 mr-4" />
              <div>
                <h3 className="text-white font-semibold">Phone</h3>
                <p className="text-gray-400">+91-9398517421</p>
              </div>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 flex items-center">
              <Linkedin className="text-blue-500 mr-4" />
              <div>
                <h3 className="text-white font-semibold">LinkedIn</h3>
                <a href="https://linkedin.com/in/gullipalli-deepika" className="text-gray-400 hover:text-blue-500 transition">https://www.linkedin.com/in/gullipalli-deepika</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 py-6">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2024 Deepika Gullipalli. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;