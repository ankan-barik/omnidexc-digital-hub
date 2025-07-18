import { ArrowLeft, Shield, AlertTriangle, Info, FileText, Users, Globe } from 'lucide-react';
import { useEffect } from 'react';

const Disclaimer = () => {
  const handleBackClick = () => {
    window.history.back();
  };

  // Force scroll to top when component loads
  useEffect(() => {
    // Reset scroll position immediately
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.scrollTo(0, 0);
    
    // Force scroll after a brief delay to ensure DOM is ready
    const timer = setTimeout(() => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      window.scrollTo(0, 0);
    }, 1);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 shadow-lg border-b border-blue-700">
        <div className="container mx-auto px-6 py-4">
          <button 
            onClick={handleBackClick}
            className="inline-flex items-center space-x-3 text-white hover:text-blue-200 transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-2xl">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Disclaimer
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Important legal information regarding the use of OmniDexC services and website
            </p>
          </div>

          {/* Services Overview */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Our Digital Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                <Globe className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Web Development</h3>
                <p className="text-gray-600 text-sm">Custom websites & web applications</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200">
                <FileText className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">UI/UX Design</h3>
                <p className="text-gray-600 text-sm">User interface & experience design</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
                <Users className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Social Media</h3>
                <p className="text-gray-600 text-sm">Marketing & consultancy services</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200">
                <AlertTriangle className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Video Editing</h3>
                <p className="text-gray-600 text-sm">Professional video production</p>
              </div>
            </div>
          </div>

          {/* Disclaimer Sections */}
          <div className="grid gap-8">
            {/* General Information */}
            <section className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <Info className="w-8 h-8 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-800">General Information</h2>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <p className="text-gray-700 leading-relaxed">
                  The information contained in this website is for general information purposes only. 
                  The information is provided by <span className="font-semibold text-blue-600">OmniDexC</span> and while we endeavor to keep the information 
                  up to date and correct, we make no representations or warranties of any kind, express 
                  or implied, about the completeness, accuracy, reliability, suitability or availability 
                  with respect to the website or the information, products, services, or related graphics 
                  contained on the website for any purpose.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-orange-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-800">Limitation of Liability</h2>
              </div>
              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <p className="text-gray-700 leading-relaxed">
                  Any reliance you place on such information is therefore strictly at your own risk. 
                  In no event will we be liable for any loss or damage including without limitation, 
                  indirect or consequential loss or damage, or any loss or damage whatsoever arising 
                  from loss of data or profits arising out of, or in connection with, the use of this website.
                </p>
              </div>
            </section>

            {/* External Links */}
            <section className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 text-green-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-800">External Links</h2>
              </div>
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <p className="text-gray-700 leading-relaxed">
                  Through this website you are able to link to other websites which are not under the 
                  control of OmniDexC. We have no control over the nature, content and availability of 
                  those sites. The inclusion of any links does not necessarily imply a recommendation 
                  or endorse the views expressed within them.
                </p>
              </div>
            </section>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Website Availability */}
              <section className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <div className="flex items-center mb-6">
                  <Shield className="w-8 h-8 text-purple-600 mr-4" />
                  <h2 className="text-xl font-bold text-gray-800">Website Availability</h2>
                </div>
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                  <p className="text-gray-700 leading-relaxed">
                    Every effort is made to keep the website up and running smoothly. However, OmniDexC 
                    takes no responsibility for, and will not be liable for, the website being temporarily 
                    unavailable due to technical issues beyond our control.
                  </p>
                </div>
              </section>

              {/* Professional Advice */}
              <section className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <div className="flex items-center mb-6">
                  <Users className="w-8 h-8 text-pink-600 mr-4" />
                  <h2 className="text-xl font-bold text-gray-800">Professional Advice</h2>
                </div>
                <div className="bg-pink-50 rounded-xl p-6 border border-pink-200">
                  <p className="text-gray-700 leading-relaxed">
                    The content on this website is not intended to be a substitute for professional advice. 
                    You should seek professional advice before acting or relying on any of the content on 
                    this website.
                  </p>
                </div>
              </section>
            </div>

            {/* Changes to Disclaimer */}
            <section className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <FileText className="w-8 h-8 text-cyan-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-800">Changes to Disclaimer</h2>
              </div>
              <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-200">
                <p className="text-gray-700 leading-relaxed">
                  OmniDexC reserves the right to modify this disclaimer at any time. Changes will be 
                  posted on this page with an updated revision date. Your continued use of the website 
                  after any changes constitutes acceptance of the new disclaimer.
                </p>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
            <div className="text-center">
              <p className="text-lg text-white mb-4">
                <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
              <p className="text-blue-100">
                For questions about this disclaimer, contact us at{' '}
                <a href="mailto:business.omnidexc@gmail.com" className="text-white hover:text-blue-200 underline">
                  business.omnidexc@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Disclaimer;