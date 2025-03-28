import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronRight, Briefcase, GraduationCap, Phone, Twitter } from 'lucide-react';
import myProfile from "./assets/profile.jpg"; // Adjust the filename if needed

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-12 justify-between">
          <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[#4c6ef5]/30 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-0.5">
            <img
              src={myProfile}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="space-y-6 text-left max-w-2xl">
            <div className="space-y-2">
              <h2 className="text-4xl font-normal">Hi, I'm</h2>
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                Adhithya
                <br />
                Krishnan
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-400 mt-4">
                Data Analyst
              </h2>
            </div>
            <p className="text-lg text-gray-300">
              Hello! I'm a passionate Data Analyst who loves turning raw data into meaningful stories. With a strong foundation in data science and a keen eye for detail, I specialize in uncovering insights that drive business decisions. My journey in data analysis has taught me that every dataset has a story to tell, and I'm here to help tell that story through powerful visualizations and actionable insights.
            </p>
            <div className="flex space-x-6 pt-4">
              <a href="https://github.com/Adhithyakrishnan" className="hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/adhithyakrishnan" className="hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:adhithyakrishnanmp@gmail.com" className="hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
              <a href="https://x.com/AdhithyaKr37557" className="hover:text-blue-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="tel:7558877060" className="hover:text-blue-400 transition-colors">
                <Phone size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Analysis Approach Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-8">My Analysis Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1a1a1a] p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">1. Data Collection & Cleaning</h3>
            <p className="text-gray-300">
              I begin by gathering data from various sources and meticulously clean it to ensure accuracy. This involves handling missing values, removing duplicates, and standardizing formats to create a reliable foundation for analysis.
            </p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">2. Exploratory Analysis</h3>
            <p className="text-gray-300">
              Using Python and SQL, I dive deep into the data to identify patterns, trends, and correlations. This phase helps in forming initial hypotheses and understanding the story behind the numbers.
            </p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">3. Visualization & Reporting</h3>
            <p className="text-gray-300">
              I transform complex data into clear, compelling visualizations using Power BI and other tools. These visuals help stakeholders quickly grasp key insights and make informed decisions.
            </p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">4. Insights & Recommendations</h3>
            <p className="text-gray-300">
              Finally, I translate analytical findings into actionable recommendations, helping businesses optimize their operations and achieve their goals through data-driven strategies.
            </p>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12">Experience</h2>
        <div className="space-y-8">
          <div className="bg-[#1a1a1a] p-8 rounded-xl">
            <div className="flex items-start gap-4">
              <Briefcase className="text-blue-400 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold">Data Analyst Intern</h3>
                <p className="text-gray-400">Psyinx Technologies</p>
                <p className="text-gray-500 text-sm">December 2022 - May 2023</p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>• Analyzed complex datasets using Python and SQL</li>
                  <li>• Created data visualizations and reports using Power BI</li>
                  <li>• Developed and maintained data analysis pipelines</li>
                  <li>• Collaborated with teams to deliver data-driven insights</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1a1a1a] p-6 rounded-xl hover:bg-[#252525] transition-all">
            <div className="h-12 mb-4 flex items-center">
              <img 
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-logo-square.png"
                alt="Coursera"
                className="h-full object-contain"
              />
              
            </div>
            <h3 className="text-xl font-semibold mb-4">Data Visualization with Tableau</h3>
            <a 
              href="https://www.coursera.org/account/accomplishments/specialization/6Z7FLZVEGSHF"
              className="inline-flex items-center text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate <ExternalLink size={16} className="ml-1" />
            </a>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-xl hover:bg-[#252525] transition-all">
            <div className="h-12 mb-4 flex items-center">
              <img 
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-logo-square.png"
                alt="Coursera"
                className="h-full object-contain"
              />
              
            </div>
            <h3 className="text-xl font-semibold mb-4">R Programming</h3>
            <a 
              href="https://www.coursera.org/account/accomplishments/verify/N5NBEFHAM4QR"
              className="inline-flex items-center text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate <ExternalLink size={16} className="ml-1" />
            </a>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-xl hover:bg-[#252525] transition-all">
            <div className="h-12 mb-4">
              <img 
                src="https://www.ibm.com/brand/experience-guides/developer/b1db1ae501d522a1a4b49613fe07c9f1/01_8-bar-positive.svg"
                alt="IBM"
                className="h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">IBM Cloud Essentials</h3>
            <a 
              href="https://courses.edx.org/certificates/ee347b210da643d7bea8a2cad77768be"
              className="inline-flex items-center text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate <ExternalLink size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="group bg-[#1a1a1a] p-6 rounded-xl hover:bg-[#252525] transition-all">
            <div className="aspect-video rounded-lg overflow-hidden mb-6">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                alt="Sales Insights Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sales Insights Dashboard</h3>
            <p className="text-gray-400 mb-4">
              Developed a comprehensive Power BI dashboard for sales analysis and insights,
              enabling data-driven decision making and business intelligence.
            </p>
            <a 
              href="https://github.com/Adhithyakrishnan/Sales-Insights-Dashboard-Power-BI"
              className="inline-flex items-center text-blue-400 hover:text-blue-300"
            >
              View Project <ChevronRight size={16} className="ml-1" />
            </a>
          </div>

          {/* Project 2 */}
          <div className="group bg-[#1a1a1a] p-6 rounded-xl hover:bg-[#252525] transition-all">
            <div className="aspect-video rounded-lg overflow-hidden mb-6">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
                alt="Hospitality Analytics Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Hospitality Analytics Dashboard</h3>
            <p className="text-gray-400 mb-4">
              Created an interactive analytics dashboard for the hospitality sector,
              providing insights into key performance metrics and trends.
            </p>
            <a 
              href="https://github.com/Adhithyakrishnan/Hospitality-Analytics-Dashboard"
              className="inline-flex items-center text-blue-400 hover:text-blue-300"
            >
              View Project <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12">Skills & Tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Python", "SQL", "Power BI", "Data Analysis",
            "Data Visualization", "ETL", "Machine Learning",
            "Microsoft Excel"
          ].map((skill) => (
            <div key={skill} className="bg-[#1a1a1a] p-4 rounded-lg text-center hover:bg-[#252525] transition-all">
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12">Education</h2>
        <div className="bg-[#1a1a1a] p-8 rounded-xl">
          <div className="flex items-start gap-4">
            <GraduationCap className="text-blue-400 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-semibold">CSE Specialization in Data Science</h3>
              <p className="text-gray-400">Lovely Professional University</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <p className="text-center text-gray-400">
            © 2024 Adhithya Krishnan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
