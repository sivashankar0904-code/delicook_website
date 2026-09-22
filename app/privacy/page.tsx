import type { Metadata } from 'next';
import { LegalPage, LegalSection } from '@/components/LegalPage';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How DeliCook handles the information you share with us.',
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains what information we collect when you contact us, and how we handle it."
    >
      <LegalSection heading="What we collect">
        <p>
          If you send us a message through our contact form or by email, we receive the
          details you choose to share — typically your name, email address, phone number
          and the contents of your message.
        </p>
      </LegalSection>

      <LegalSection heading="How we use it">
        <p>
          We use your details solely to respond to your enquiry and, where relevant, to
          follow up about it. We do not sell your information or share it for marketing
          purposes.
        </p>
      </LegalSection>

      <LegalSection heading="Retention">
        <p>
          We keep enquiry correspondence only as long as needed to deal with it and to
          meet any record-keeping obligations.
        </p>
      </LegalSection>

      <LegalSection heading="Your rights">
        <p>
          You may ask us what information we hold about you, and request that we correct
          or delete it. Write to{' '}
          <a href={`mailto:${site.email}`} className="text-brand-red underline">
            {site.email}
          </a>{' '}
          and we will respond.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
