import React from 'react';

const TermsOfService = () => {
  return (
    <div>
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">Terms of Service</h1>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-600">
              Welcome to [Your Company Name]! These Terms of Service ("Terms", "Terms of Service") govern your use of our website located at [yourwebsite.com] (together or individually "Service") operated by [Your Company Name].
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">2. Accounts</h2>
            <p className="text-gray-600">
              When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">3. Termination</h2>
            <p className="text-gray-600">
              We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">4. Governing Law</h2>
            <p className="text-gray-600">
              These Terms shall be governed and construed in accordance with the laws of [Your Country], without regard to its conflict of law provisions.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">5. Changes to the Service</h2>
            <p className="text-gray-600">
              We reserve the right to withdraw or amend our Service, and any service or material we provide via the Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Service is unavailable at any time or for any period.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">6. Amendments to Terms</h2>
            <p className="text-gray-600">
              We may amend Terms at any time by posting the amended terms on this site. It is your responsibility to review these Terms periodically.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">7. Acknowledgement</h2>
            <p className="text-gray-600">
              By using service or other services provided by us, you acknowledge that you have read these terms of service and agree to be bound by them.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">8. Contact Us</h2>
            <p className="text-gray-600">
              Please send your feedback, comments, requests for technical support by email: support@[yourcompany.com].
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
