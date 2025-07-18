import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-primary">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing and using OmniDexC's services, you accept and agree to be bound by the terms and 
                provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Services Provided</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Web and App Development</li>
                <li>UI/UX Design Services</li>
                <li>Video Editing and Production</li>
                <li>Social Media Consulting and Management</li>
                <li>Branding Solutions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                Payment terms will be specified in individual project agreements. Generally, we require a 50% upfront 
                payment before project commencement and the remaining 50% upon project completion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                Upon full payment, all intellectual property rights for custom work will be transferred to the client, 
                except for any pre-existing materials or third-party components.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                OmniDexC shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
                arising from the use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Information</h2>
              <p className="text-muted-foreground">
                For questions regarding these Terms of Service, please contact us at legal@omnidexc.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;