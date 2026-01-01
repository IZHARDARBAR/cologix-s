import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#0f172a] min-h-screen text-white pt-40 pb-20 px-6 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 border-b border-white/10 pb-8">
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-[#f27c22]">
            Privacy Policy for Cologixs
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            At Cologixs, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website, 
            products, and services.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-gray-300">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-[#f27c22]">1.</span> Information We Collect
            </h2>
            <div className="pl-8 space-y-3">
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-white">Personal Information:</strong> Name, email address, phone number, and other contact details.</li>
                <li><strong className="text-white">Technical Data:</strong> IP address, browser type, device information, and usage data.</li>
                <li><strong className="text-white">Transactional Information:</strong> Payment details and purchase history (if applicable).</li>
                <li><strong className="text-white">Cookies and Tracking Technologies:</strong> To enhance user experience and analyze website traffic.</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-[#f27c22]">2.</span> How We Use Your Information
            </h2>
            <div className="pl-8 space-y-3">
              <p>We use the collected data for:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Providing and improving our services.</li>
                <li>Processing transactions and responding to inquiries.</li>
                <li>Enhancing website functionality and user experience.</li>
                <li>Sending important updates, promotions, and service-related notifications.</li>
                <li>Ensuring security and preventing fraud.</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-[#f27c22]">3.</span> Data Sharing and Security
            </h2>
            <div className="pl-8 space-y-3">
              <p>We do not sell or rent your personal data to third parties.</p>
              <p>Your information may be shared with trusted service providers for operational purposes (e.g., payment processing, hosting services).</p>
              <p>We implement strict security measures to protect your data from unauthorized access, breaches, or misuse.</p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-[#f27c22]">4.</span> Cookies and Tracking Technologies
            </h2>
            <p className="pl-8">
              We use cookies to personalize content, analyze trends, and improve our services. You can manage cookie preferences through your browser settings.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-[#f27c22]">5.</span> Your Rights and Choices
            </h2>
            <div className="pl-8 space-y-3">
              <p>You have the right to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Access, update, or delete your personal data.</li>
                <li>Opt-out of marketing communications at any time.</li>
                <li>Request data portability or restriction of processing where applicable.</li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-[#f27c22]">6.</span> Third-Party Links
            </h2>
            <p className="pl-8">
              Our website may contain links to external sites. We are not responsible for their privacy practices and recommend reviewing their policies before sharing personal data.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-[#f27c22]">7.</span> Updates to This Privacy Policy
            </h2>
            <p className="pl-8">
              We may update this policy periodically. Any significant changes will be communicated through our website or other channels.
            </p>
          </section>

          {/* Section 8 */}
          <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-[#f27c22]">8.</span> Contact Us
            </h2>
            <div className="pl-8">
              <p className="mb-4">For questions or concerns about this Privacy Policy, please contact us at:</p>
              <p className="text-xl font-bold text-[#f27c22]">Cologixs</p>
              <p className="mt-2 text-sm text-gray-400 italic">
                By using our services, you agree to the terms outlined in this Privacy Policy.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;