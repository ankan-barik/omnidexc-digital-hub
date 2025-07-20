import { ArrowLeft, FileText, CheckCircle, DollarSign, Copyright, AlertTriangle, Mail, Globe, Code, Video, Palette, TrendingUp, Smartphone, Settings, Users, Shield } from "lucide-react";
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const TermsOfService = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    // Set a flag in sessionStorage to skip loading screen
    sessionStorage.setItem('skipLoadingScreen', 'true');
    // Then navigate back
    navigate('/', { replace: true });
    // Scroll to footer after navigation
    setTimeout(() => {
      const footer = document.querySelector('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Multiple methods to ensure page starts from top
  useEffect(() => {
    // Method 1: Immediate scroll to top
    window.scrollTo(0, 0);
    
    // Method 2: Force scroll to top with smooth behavior
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    
    // Method 3: Set document scroll position
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Method 4: Additional timeout to ensure scroll
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-emerald-600 shadow-lg border-b border-emerald-700">
        <div className="container mx-auto px-6 py-4">
          <button 
            onClick={handleBackClick}
            className="inline-flex items-center space-x-3 text-white hover:text-emerald-200 transition-all duration-300 hover:scale-105"
          >
            
            <span className="font-medium">👈 Back</span>
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-6 shadow-2xl">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Legal terms and conditions for using OmniDexC's professional services
            </p>
            <div className="mt-6 text-sm text-emerald-700 bg-emerald-100 rounded-full px-6 py-2 inline-block">
              Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>

          {/* Services Overview */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 border border-gray-200">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center flex items-center justify-center">
              <Globe className="mr-4 h-8 w-8 text-emerald-600" />
              Our Professional Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                <Code className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Web & App Development</h3>
                <p className="text-gray-600 text-sm">Custom websites, web applications, and mobile apps</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200">
                <Settings className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">UI/UX Design</h3>
                <p className="text-gray-600 text-sm">User interface and experience design services</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
                <Video className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Video Production</h3>
                <p className="text-gray-600 text-sm">Video editing and multimedia production</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200">
                <TrendingUp className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Social Media</h3>
                <p className="text-gray-600 text-sm">Consulting, management, and marketing</p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl border border-pink-200">
                <Palette className="w-10 h-10 text-pink-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Branding Solutions</h3>
                <p className="text-gray-600 text-sm">Logo design and brand identity development</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-2xl border border-cyan-200">
                <Smartphone className="w-10 h-10 text-cyan-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Mobile Apps</h3>
                <p className="text-gray-600 text-sm">Android and iOS application development</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {/* Acceptance of Terms */}
            <section className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <CheckCircle className="w-8 h-8 text-emerald-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">Acceptance of Terms</h2>
              </div>
              <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                <p className="text-gray-700 leading-relaxed text-lg">
                  By accessing and using <span className="font-semibold text-emerald-700">OmniDexC's</span> services, you accept and agree to be bound by the terms and 
                  provisions of this agreement. If you do not agree to these terms, please do not use our services.
                </p>
              </div>
            </section>

            {/* Services Provided */}
            <section className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">Services Provided</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">Digital Development</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Web and App Development</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>UI/UX Design Services</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Mobile Application Development</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                  <h3 className="text-xl font-semibold text-purple-700 mb-4">Creative Services</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span>Video Editing and Production</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span>Social Media Consulting and Management</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span>Branding Solutions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Payment Terms */}
            <section className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <DollarSign className="w-8 h-8 text-yellow-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">Payment Terms</h2>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-700 mb-4">Standard Payment Structure</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center border border-yellow-200">
                          <span className="text-yellow-600 font-bold">50%</span>
                        </div>
                        <div>
                          <p className="text-yellow-700 font-medium">Upfront Payment</p>
                          <p className="text-gray-600 text-sm">Required before project commencement</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center border border-yellow-200">
                          <span className="text-yellow-600 font-bold">50%</span>
                        </div>
                        <div>
                          <p className="text-yellow-700 font-medium">Final Payment</p>
                          <p className="text-gray-600 text-sm">Upon project completion and delivery</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-700 mb-4">Payment Details</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Payment terms will be specified in individual project agreements. We accept various payment methods 
                      and provide detailed invoices for all transactions. Late payment fees may apply as outlined in 
                      project contracts.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Intellectual Property */}
              <section className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <div className="flex items-center mb-6">
                  <Copyright className="w-8 h-8 text-orange-600 mr-4" />
                  <h2 className="text-2xl font-bold text-gray-800">Intellectual Property</h2>
                </div>
                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                  <p className="text-gray-700 leading-relaxed">
                    Upon full payment, all intellectual property rights for custom work will be transferred to the client, 
                    except for any pre-existing materials, frameworks, or third-party components that remain under their 
                    respective licenses.
                  </p>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <div className="flex items-center mb-6">
                  <AlertTriangle className="w-8 h-8 text-red-600 mr-4" />
                  <h2 className="text-2xl font-bold text-gray-800">Limitation of Liability</h2>
                </div>
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <p className="text-gray-700 leading-relaxed">
                    OmniDexC shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
                    arising from the use of our services. Our liability is limited to the total amount paid for services.
                  </p>
                </div>
              </section>
            </div>

            {/* Project Terms & Conditions */}
            <section className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-cyan-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">Project Terms & Conditions</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-200">
                  <h3 className="text-xl font-semibold text-cyan-700 mb-4">Client Responsibilities</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2"></div>
                      <span>Provide clear project requirements and specifications</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2"></div>
                      <span>Supply necessary content, assets, and materials</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2"></div>
                      <span>Respond to communications within agreed timeframes</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2"></div>
                      <span>Make payments according to agreed schedule</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-teal-50 rounded-xl p-6 border border-teal-200">
                  <h3 className="text-xl font-semibold text-teal-700 mb-4">OmniDexC Commitments</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                      <span>Deliver high-quality work within agreed timelines</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                      <span>Maintain professional communication throughout</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                      <span>Protect client confidentiality and data</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                      <span>Provide post-project support as agreed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cancellation & Refund Policy */}
            <section className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-purple-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">Cancellation & Refund Policy</h2>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-purple-700 mb-3">Before Project Start</h3>
                    <p className="text-gray-700 text-sm">
                      Full refund available if project is cancelled before work begins and no resources have been allocated.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-700 mb-3">During Project</h3>
                    <p className="text-gray-700 text-sm">
                      Partial refund based on work completed. Client retains rights to all delivered work up to cancellation point.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-700 mb-3">After Completion</h3>
                    <p className="text-gray-700 text-sm">
                      No refunds available after project delivery and final approval. Support and maintenance as per agreement.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <Mail className="mr-4 h-8 w-8" />
                Legal & Support Contact
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Questions About These Terms?</h3>
                  <p className="text-emerald-100 mb-6 leading-relaxed">
                    For questions regarding these Terms of Service, project agreements, or legal matters, please contact our team.
                  </p>
                  <div className="space-y-4">
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-emerald-200" />
                      <div>
                        <p className="text-white font-medium">Business Inquiries</p>
                        <p className="text-emerald-100 text-sm">business.omnidexc@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-6">Project Support</h3>
                  <p className="text-emerald-100 mb-6 leading-relaxed">
                    For project-related questions, timeline discussions, or technical support, reach out to our development team.
                  </p>
                  <div className="bg-white/10 rounded-xl p-6 border border-emerald-300">
                    <p className="text-emerald-100 mb-2">
                      <strong>Response Time:</strong> 24-48 hours
                    </p>
                    <p className="text-emerald-100 mb-2">
                      <strong>Business Hours:</strong> Monday - Saturday, 9:00 AM - 7:00 PM EST
                    </p>
                    <p className="text-emerald-100">
                      <strong>Emergency Support:</strong> Available for critical issues
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="text-center py-8 bg-gray-50 rounded-2xl border border-gray-200">
              <p className="text-gray-600 text-lg mb-4">
                <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
              <p className="text-gray-600 leading-relaxed">
                By engaging with OmniDexC services, you acknowledge that you have read, understood, 
                and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;