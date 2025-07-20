import { ArrowLeft, Shield, Eye, Lock, Users, Mail, Phone, Globe, Palette, Video, Code, Smartphone, Settings, Image, TrendingUp } from "lucide-react";
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const PrivacyPolicy = () => {
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
      <header className="bg-purple-600 shadow-lg border-b border-purple-700">
        <div className="container mx-auto px-6 py-4">
          <button 
            onClick={handleBackClick}
            className="inline-flex items-center space-x-3 text-white hover:text-purple-200 transition-all duration-300 hover:scale-105"
          >
            
            <span className="font-medium">👈 Back </span>
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-6 shadow-2xl">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Your privacy is our priority. Learn how OmniDexC protects and uses your information.
            </p>
            <div className="mt-6 text-sm text-purple-700 bg-purple-100 rounded-full px-6 py-2 inline-block">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>

          {/* Services Overview */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 border border-gray-200">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center flex items-center justify-center">
              <Globe className="mr-4 h-8 w-8 text-purple-600" />
              Our Comprehensive Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
                <Code className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Web & App Development</h3>
                  <p className="text-sm text-gray-600">Custom digital solutions & mobile apps</p>
                </div>
              </div>
              <div className="flex items-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
                <Video className="h-10 w-10 text-purple-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Video Editing</h3>
                  <p className="text-sm text-gray-600">Professional video production</p>
                </div>
              </div>
              <div className="flex items-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200">
                <Palette className="h-10 w-10 text-green-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Branding & Design</h3>
                  <p className="text-sm text-gray-600">Complete brand identity solutions</p>
                </div>
              </div>
              <div className="flex items-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border border-orange-200">
                <TrendingUp className="h-10 w-10 text-orange-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Social Media Marketing</h3>
                  <p className="text-sm text-gray-600">Digital marketing strategies</p>
                </div>
              </div>
              <div className="flex items-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl border border-pink-200">
                <Image className="h-10 w-10 text-pink-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">UI/UX Design</h3>
                  <p className="text-sm text-gray-600">User experience optimization</p>
                </div>
              </div>
              <div className="flex items-center p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl border border-cyan-200">
                <Smartphone className="h-10 w-10 text-cyan-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Mobile Applications</h3>
                  <p className="text-sm text-gray-600">iOS & Android app development</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {/* Information Collection */}
            <section className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center">
                <Eye className="mr-4 h-8 w-8 text-blue-600" />
                Information We Collect
              </h2>
              <div className="space-y-8">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">Personal Information</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    When you engage with OmniDexC's services, we collect information that you provide directly to us:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">Name and contact information</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">Email address and phone number</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">Project requirements and specifications</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">Business information and preferences</span>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                  <h3 className="text-xl font-semibold text-purple-700 mb-4">Project-Related Information</h3>
                  <p className="text-gray-700 leading-relaxed">
                    For our web development, app development, video editing, and branding services, we may collect 
                    project assets, design preferences, brand guidelines, creative materials, and any content you share with us 
                    for project completion.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center">
                <Users className="mr-4 h-8 w-8 text-green-600" />
                How We Use Your Information
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center border border-green-200 flex-shrink-0">
                      <span className="text-green-600 font-bold text-lg">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-700 text-lg">Service Delivery</h3>
                      <p className="text-gray-700 leading-relaxed">Provide and customize our web development, app development, video editing, and branding services</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center border border-green-200 flex-shrink-0">
                      <span className="text-green-600 font-bold text-lg">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-700 text-lg">Project Communication</h3>
                      <p className="text-gray-700 leading-relaxed">Keep you updated on project progress, milestones, and deliverables</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center border border-green-200 flex-shrink-0">
                      <span className="text-green-600 font-bold text-lg">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-700 text-lg">Service Improvement</h3>
                      <p className="text-gray-700 leading-relaxed">Analyze and improve our services based on your feedback and usage patterns</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center border border-green-200 flex-shrink-0">
                      <span className="text-green-600 font-bold text-lg">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-700 text-lg">Legal Compliance</h3>
                      <p className="text-gray-700 leading-relaxed">Meet legal obligations and protect our legitimate business interests</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Information Sharing */}
            <section className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center">
                <Lock className="mr-4 h-8 w-8 text-purple-600" />
                Information Sharing & Protection
              </h2>
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-8 mb-8 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-4 text-xl">Our Commitment to You</h3>
                <p className="text-gray-800 text-lg leading-relaxed">
                  <strong className="text-purple-700">We do not sell, trade, or rent your personal information to third parties.</strong> Your data is treated with the highest level of confidentiality and is only shared in the limited circumstances outlined below.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                  <Settings className="w-8 h-8 text-purple-600 mb-4" />
                  <h4 className="font-semibold text-purple-700 mb-2">Service Partners</h4>
                  <p className="text-gray-700 text-sm">Trusted third-party tools and platforms necessary for project delivery (hosting, analytics, etc.)</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                  <Shield className="w-8 h-8 text-purple-600 mb-4" />
                  <h4 className="font-semibold text-purple-700 mb-2">Legal Requirements</h4>
                  <p className="text-gray-700 text-sm">When required by law, regulation, or legal process</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                  <Users className="w-8 h-8 text-purple-600 mb-4" />
                  <h4 className="font-semibold text-purple-700 mb-2">With Your Consent</h4>
                  <p className="text-gray-700 text-sm">Any other sharing will only occur with your explicit permission</p>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center">
                <Shield className="mr-4 h-8 w-8 text-red-600" />
                Data Security & Retention
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-xl font-semibold text-red-700 mb-6">Security Measures</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">Industry-standard encryption</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">Secure data transmission protocols</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">Regular security audits and updates</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">Access controls and monitoring</span>
                    </div>
                  </div>
                </div>
                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-xl font-semibold text-orange-700 mb-6">Data Retention</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We retain your information only as long as necessary to provide services, comply with legal obligations, 
                    and maintain business records.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Project files and communications are typically retained for 2 years after project completion, 
                    unless otherwise requested.
                  </p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">Your Rights & Choices</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                    <Eye className="w-8 h-8 text-blue-600 mb-3" />
                    <h3 className="font-semibold text-blue-700 text-lg">Access & Portability</h3>
                    <p className="text-gray-700">Request access to your personal information and receive it in a portable format</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                    <Settings className="w-8 h-8 text-green-600 mb-3" />
                    <h3 className="font-semibold text-green-700 text-lg">Correction & Updates</h3>
                    <p className="text-gray-700">Update or correct your personal information at any time</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                    <Lock className="w-8 h-8 text-purple-600 mb-3" />
                    <h3 className="font-semibold text-purple-700 text-lg">Data Deletion</h3>
                    <p className="text-gray-700">Request deletion of your personal information (subject to legal requirements)</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl border border-pink-200">
                    <Mail className="w-8 h-8 text-pink-600 mb-3" />
                    <h3 className="font-semibold text-pink-700 text-lg">Communication Preferences</h3>
                    <p className="text-gray-700">Opt out of marketing communications while maintaining service communications</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Cookies & Tracking */}
            <section className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center">
                <Globe className="mr-4 h-8 w-8 text-indigo-600" />
                Cookies & Tracking
              </h2>
              <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Remember your preferences and settings</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Analyze website traffic and performance</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Provide personalized content and recommendations</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Improve our services and user experience</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <Mail className="mr-4 h-8 w-8" />
                Contact Us
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Privacy Questions?</h3>
                  <p className="text-purple-100 mb-6 leading-relaxed">
                    We're committed to transparency and are here to address any concerns about your privacy and data protection.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-purple-200 flex-shrink-0" />
                      <span className="text-purple-100">business.omnidexc@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-purple-200 flex-shrink-0" />
                      <span className="text-purple-100">+91 9122372108</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-6">Response Time</h3>
                  <p className="text-purple-100 mb-6 leading-relaxed">
                    We aim to respond to all privacy-related inquiries within 48 hours during business days.
                  </p>
                  <div className="bg-white/10 rounded-xl p-6 border border-purple-300">
                    <p className="text-purple-100">
                      <strong>Business Hours:</strong><br />
                      Monday - Saturday: 9:00 AM - 7:00 PM EST
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer Note */}
            <div className="text-center py-8 bg-gray-50 rounded-2xl border border-gray-200">
              <p className="text-gray-600 leading-relaxed">
                This privacy policy may be updated from time to time. We will notify you of any material changes 
                by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;