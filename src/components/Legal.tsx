import { motion } from "motion/react";
import { Shield, Lock, FileText, ArrowLeft, Linkedin, Twitter, Github, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export function Legal() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.svg" alt="ImmunoSentry Logo" className="h-10 w-auto" referrerPolicy="no-referrer" />
            </Link>
            <Link 
              to="/" 
              className="text-sm font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-2 px-6 py-3 bg-indigo-50 rounded-2xl transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Platform
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-extrabold text-gray-900 mb-12">Legal Information</h1>

          {/* Privacy Policy */}
          <section id="privacy" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
            </div>
            <div className="prose prose-indigo max-w-none text-gray-600 space-y-4 text-sm leading-relaxed">
              <p className="font-bold text-gray-900">Last Updated: April 9, 2026</p>
              <p>
                At ImmunoSentry, we prioritize the security and privacy of clinical data. This Privacy Policy outlines how we handle information in our platform.
              </p>
              <h3 className="text-lg font-bold text-gray-900 mt-6">1. Data Collection</h3>
              <p>
                ImmunoSentry is designed as a "Privacy-First" platform. We do not store personally identifiable information (PII) of patients. All clinical data processed through our API or local deployment is anonymized at the source.
              </p>
              <h3 className="text-lg font-bold text-gray-900 mt-6">2. Use of Information</h3>
              <p>
                Information provided during assessments is used solely to generate predictive risk scores and mechanistic simulations. We do not sell or share individual assessment data with third parties.
              </p>
              <h3 className="text-lg font-bold text-gray-900 mt-6">3. Federated Learning</h3>
              <p>
                For enterprise partners, we utilize Federated Learning architectures. This means model training occurs on your infrastructure, and only encrypted model weights (never raw data) are transmitted to our central servers to improve global predictive accuracy.
              </p>
              <h3 className="text-lg font-bold text-gray-900 mt-6">4. Data Security</h3>
              <p>
                We implement industry-standard encryption (AES-256) for all data in transit and at rest. Our infrastructure is designed to align with HIPAA and GDPR requirements for healthcare data processing.
              </p>
            </div>
          </section>

          <hr className="border-gray-100 mb-20" />

          {/* Terms and Conditions */}
          <section id="terms" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Terms and Conditions</h2>
            </div>
            <div className="prose prose-indigo max-w-none text-gray-600 space-y-4 text-sm leading-relaxed">
              <p className="font-bold text-gray-900">Last Updated: April 9, 2026</p>
              <p>
                By using the ImmunoSentry platform, you agree to the following terms and conditions.
              </p>
              <h3 className="text-lg font-bold text-gray-900 mt-6">1. Research Use Only</h3>
              <p>
                ImmunoSentry is a predictive tool intended for pharmaceutical R&D and clinical research support. It is not a substitute for professional medical advice, diagnosis, or treatment.
              </p>
              <h3 className="text-lg font-bold text-gray-900 mt-6">2. Clinical Responsibility</h3>
              <p>
                All clinical decisions must be made by qualified medical professionals. ImmunoSentry SAS assumes no liability for clinical outcomes resulting from the use of our predictive scores.
              </p>
              <h3 className="text-lg font-bold text-gray-900 mt-6">3. Intellectual Property</h3>
              <p>
                The mechanistic simulation engine, predictive weights, and "Evidence Trace" methodology are the proprietary intellectual property of ImmunoSentry SAS. Unauthorized reverse engineering or reproduction is prohibited.
              </p>
              <h3 className="text-lg font-bold text-gray-900 mt-6">4. API Usage</h3>
              <p>
                Users of our Clinical API must adhere to rate limits and security protocols. Any attempt to bypass security measures or scrape proprietary model weights will result in immediate termination of access.
              </p>
            </div>
          </section>
        </motion.div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-3 opacity-50 mb-4">
              <img src="/logo.svg" alt="ImmunoSentry Logo" className="h-8 w-auto grayscale" referrerPolicy="no-referrer" />
            </div>
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/company/immunosentry" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/immunosentry" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="flex justify-center gap-4 text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-6">
            <span>GDPR Principles Applied</span>
            <span>•</span>
            <span>HIPAA-Aware Architecture</span>
          </div>
          <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">
            © 2026 ImmunoSentry SAS · All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
