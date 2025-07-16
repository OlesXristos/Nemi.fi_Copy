import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl z-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Terms of Service</h2>

      <p className="mb-6">
        Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the
        Nemi platform operated by Nemi ("us", "we", or "our").
      </p>
      <div className="space-y-6 text-sm md:text-base">
        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-3">1. Acceptance of Terms</h3>
          <p>
            By accessing or using our platform, you agree to be bound by these Terms. If you
            disagree with any part of the terms, then you may not access our platform.
          </p>
        </section>
        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-3">2. Use of the Platform</h3>
          <p>
            You agree to use our platform only for lawful purposes and in accordance with these
            Terms. You are responsible for ensuring that your use of the platform complies with
            applicable laws and regulations.
          </p>
        </section>
        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-3">3. Privacy Policy</h3>
          <p>
            Your use of our platform is also governed by our Privacy Policy, which is incorporated
            into these Terms by reference.
          </p>
        </section>
        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-3">4. Intellectual Property</h3>
          <p>
            The platform and its original content, features, and functionality are owned by Nemi and
            are protected by international copyright, trademark, patent, trade secret, and other
            intellectual property or proprietary rights laws.
          </p>
        </section>
        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-3">5. Limitation of Liability</h3>
          <p>
            In no event shall Nemi, nor its directors, employees, partners, agents, suppliers, or
            affiliates, be liable for any indirect, incidental, special, consequential or punitive
            damages, including without limitation, loss of profits, data, use, goodwill, or other
            intangible losses, resulting from your access to or use of or inability to access or use
            the platform.
          </p>
        </section>
        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-3">6. Changes to Terms</h3>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any
            time. We will provide notice of any significant changes to these Terms.
          </p>
        </section>
        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-3">7. Contact Us</h3>
          <p className="mb-3">
            If you have any questions about these Terms, please contact us at{' '}
            <Link
              className="text-purple-500 hover:text-purple-400 underline"
              href="mailto:morning@nemi.fi">
              morning@nemi.fi
            </Link>
          </p>
          <p className="mb-6"> Last updated: 06.05.2025</p>
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

export default page;
