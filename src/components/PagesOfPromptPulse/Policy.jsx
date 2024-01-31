// Policies.js

import React from "react";

const Policy = () => {
  const h2Class = "text-2xl text-purple-700 font-bold tracking-widest ";
  const h3Class = "text-xl text-purple-800 font-bold tracking-widest ";
  const pClass = "";
  return (
    <div className="flex  flex-col justify-center items-center text-base tracking-widest font-semibold  bg-gray-950  text-[#6B7280] min-h-screen w-full  ">
      <h1 className="text-5xl font-bold mb-10 mt-5 text-white tracking-widest text-">
        Privacy Policy for Prompt Pulse🔏
      </h1>
      <div className="flex flex-col gap-4  min-h-[80vh] px-7 w-[95%] py-10 rounded-md mb-10">
        <p>
          This Privacy Policy describes how Prompt Pulse collects, uses, and
          shares your personal information when you visit or make a
          purchase,sell from our website .
        </p>
        <div>
          <h2 className="text-white text-2xl">Information We Collect:</h2>
          <p className="mt-2">
            Account Information: When you create an account, we collect your
            name, email address, and password.
          </p>
          <p>
            Payment Information: If you make a purchase, we collect your payment
            information (including credit card number, expiration date, and
            CVV). We do not store your full credit card details ourselves.
            Instead, we use a secure payment processor to store and process this
            information.
          </p>
          <p>
            Tracking Technologies: We use cookies and other tracking
            technologies to improve your browsing experience and personalize our
            services. You can disable cookies in your browser settings, but this
            may affect the functionality of the Site.
          </p>
        </div>
        <div>
          <h2 className="text-white text-2xl">How We Use Your Information:</h2>
          <ul className=" flex flex-col  list-disc">
            <li>
              To fulfill your orders, including processing your payments and
              downloading your purchases.
            </li>
            <li>
              To send you important information about your orders, such as order
              confirmations.
            </li>
            <li>
              To communicate with you about promotions, new products, and other
              news and information we think you might find interesting.{" "}
            </li>
            <li>
              To personalize your experience on the Site. To improve the Site
              and our services.{" "}
            </li>
            <li>To comply with applicable laws and regulations.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-2xl">Sharing Your Information:</h2>
          <div className="flex flex-col gap-2">
            <p>
              We share your personal information with third-party service
              providers who help us operate the Site and fulfill your orders.
              These service providers are obligated to keep your information
              confidential and may not use it for any other purpose than
              providing services to us.
            </p>
            <p>
              {" "}
              We may also disclose your personal information if required by law,
              such as in response to a subpoena or court order.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-white text-2xl">Your Choices:</h2>
          <p>
            You have the right to access your personal information, access,
            update or delete your prompt. You can do this by logging into your
            account or by contacting us. You can also opt out of receiving
            marketing communications from us by clicking the "unsubscribe" link
            in any of our emails.
          </p>
        </div>
        <div>
          <h2 className="text-white text-2xl">Data Security:</h2>
          <p>
            We take the security of your personal information very seriously. We
            use a variety of security measures to protect your information from
            unauthorized access, disclosure, alteration, or destruction. These
            measures include using secure servers, encrypting your data, and
            regularly reviewing our security practices.
          </p>
        </div>
        <div>
          <h2 className="text-white text-2xl">
            Changes to this Privacy Policy:
          </h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on the Site.
            You are advised to review this Privacy Policy periodically for any
            changes.
          </p>
        </div>
        <div>
          <h2 className="text-white text-2xl">Contact Us:</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          <p className="flex gap-2">
            <span className=" text-red-400">By email:</span>{" "}
            info@promptpulse.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Policy;
