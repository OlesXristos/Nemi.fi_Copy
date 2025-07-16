import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl z-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h2>
      <div className="space-y-6 text-sm md:text-base">
        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-3">1. Introduction</h3>
          <p>
            Welcome to NEMI. We respect your privacy and are committed to protecting your personal
            data. This privacy policy will inform you about how we look after your personal data
            when you visit our website and tell you about your privacy rights and how the law
            protects you.
          </p>
        </section>
        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-3">2. Data We Collect</h3>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which
            we have grouped together as follows:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Identity Data: includes username or similar identifier</li>
            <li>Contact Data: includes email address</li>
            <li>
              Technical Data: includes internet protocol (IP) address, browser type and version,
              time zone setting and location, browser plug-in types and versions, operating system
              and platform and other technology on the devices you use to access this website
            </li>
            <li>Usage Data: includes information about how you use our website and services</li>
          </ul>
        </section>
        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-3">3. How We Use Your Data</h3>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will
            use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To register you as a new user</li>
            <li>To provide and manage your account</li>
            <li>To manage our relationship with you</li>
            <li>To administer and protect our business and this website</li>
            <li>To deliver relevant website content to you</li>
            <li>
              To use data analytics to improve our website, products/services, marketing, customer
              relationships, and experiences
            </li>
          </ul>
        </section>
        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-3">4. Security</h3>
          <p>
            We have put in place appropriate security measures to prevent your personal data from
            being accidentally lost, used, or accessed in an unauthorized way, altered, or
            disclosed. In addition, we limit access to your personal data to those employees,
            agents, contractors, and other third parties who have a business need to know.
          </p>
        </section>
        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-3">5. Your Legal Rights</h3>
          <p>
            Under certain circumstances, you have rights under data protection laws in relation to
            your personal data, including the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request access to your personal data</li>
            <li>Request correction of your personal data</li>
            <li>Request erasure of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
            <li>Request transfer of your personal data</li>
            <li>Right to withdraw consent</li>
          </ul>
        </section>
        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-3">6. Contact Us</h3>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please
            contact us at{' '}
            <Link
              className="text-purple-500 hover:text-purple-400 underline"
              href="mailto:morning@nemi.fi">
              morning@nemi.fi
            </Link>
          </p>
        </section>
        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            7. Changes to This Privacy Policy
          </h3>
          <p className="mb-3">
            We may update this privacy policy from time to time. The updated version will be
            indicated by an updated "Last updated" date and the updated version will be effective as
            soon as it is accessible.
          </p>
          <p> Last updated: 06.05.2025</p>
        </section>
        <Link
          href="/"
          className="justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-8 rounded-md px-3 has-[>svg]:px-2.5 group flex items-center gap-2 hover:gap-3 transition-all">
          <ArrowLeft />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
