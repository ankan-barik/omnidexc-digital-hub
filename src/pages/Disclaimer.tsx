import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <Link 
            to="/"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Disclaimer</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">General Information</h2>
              <p>
                The information contained in this website is for general information purposes only. 
                The information is provided by OmniDexC and while we endeavor to keep the information 
                up to date and correct, we make no representations or warranties of any kind, express 
                or implied, about the completeness, accuracy, reliability, suitability or availability 
                with respect to the website or the information, products, services, or related graphics 
                contained on the website for any purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
              <p>
                Any reliance you place on such information is therefore strictly at your own risk. 
                In no event will we be liable for any loss or damage including without limitation, 
                indirect or consequential loss or damage, or any loss or damage whatsoever arising 
                from loss of data or profits arising out of, or in connection with, the use of this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">External Links</h2>
              <p>
                Through this website you are able to link to other websites which are not under the 
                control of OmniDexC. We have no control over the nature, content and availability of 
                those sites. The inclusion of any links does not necessarily imply a recommendation 
                or endorse the views expressed within them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Website Availability</h2>
              <p>
                Every effort is made to keep the website up and running smoothly. However, OmniDexC 
                takes no responsibility for, and will not be liable for, the website being temporarily 
                unavailable due to technical issues beyond our control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Professional Advice</h2>
              <p>
                The content on this website is not intended to be a substitute for professional advice. 
                You should seek professional advice before acting or relying on any of the content on 
                this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to Disclaimer</h2>
              <p>
                OmniDexC reserves the right to modify this disclaimer at any time. Changes will be 
                posted on this page with an updated revision date. Your continued use of the website 
                after any changes constitutes acceptance of the new disclaimer.
              </p>
            </section>

            <div className="mt-12 p-6 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                If you have any questions about this disclaimer, please contact us at business.omnidexc@gmail.com
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Disclaimer;