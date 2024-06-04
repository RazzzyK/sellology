import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div>
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">Privacy Policy</h1>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-600">
              Welcome to [Your Company Name]! This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [yourwebsite.com], use our services, or interact with us in any other way.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">2. Information We Collect</h2>
            <p className="text-gray-600">
              We may collect personal information that you voluntarily provide to us when you register on the website, make a purchase, subscribe to our newsletter, or otherwise contact us. This information may include your name, email address, phone number, and payment information.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">3. Use of Your Information</h2>
            <p className="text-gray-600">
              We use the information we collect in various ways, including to:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Provide, operate, and maintain our website and services</li>
              <li>Improve, personalize, and expand our website and services</li>
              <li>Understand and analyze how you use our website and services</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
              <li>Process your transactions and manage your orders</li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">4. Disclosure of Your Information</h2>
            <p className="text-gray-600">
              We may share the information we collect about you in the following situations:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>With our business partners, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work</li>
              <li>With third parties to whom you consent to us sharing your information for marketing purposes</li>
              <li>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of [Your Company Name], our customers, or others</li>
              <li>In connection with a merger, sale, or other transfer of all or part of our business or assets</li>
              <li>To comply with legal obligations, such as in response to a subpoena or similar legal process</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">5. Security of Your Information</h2>
            <p className="text-gray-600">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">6. Your Data Protection Rights</h2>
            <p className="text-gray-600">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>The right to access – You have the right to request copies of your personal data.</li>
              <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
              <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
              <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
              <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
              <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">7. Changes to This Privacy Policy</h2>
            <p className="text-gray-600">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">8. Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at: privacy@[yourcompany.com].
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
