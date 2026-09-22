import type { Metadata } from 'next';
import { LegalPage, LegalSection } from '@/components/LegalPage';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms governing your use of the DeliCook website.',
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="These terms govern your use of the DeliCook website. By browsing this site, you agree to them."
    >
      <LegalSection heading="Use of this website">
        <p>
          This website is provided for information about DeliCook and its products. You
          agree to use it lawfully and not in any way that could damage the site or
          restrict anyone else&apos;s use of it.
        </p>
      </LegalSection>

      <LegalSection heading="Product information">
        <p>
          We take care to describe our products accurately, including ingredients,
          preparation and storage guidance. Packaging and recipes may change from time to
          time, so always read the label on the pack you receive.
        </p>
      </LegalSection>

      <LegalSection heading="Intellectual property">
        <p>
          The content on this site — text, imagery, logos and recipes — belongs to
          DeliCook unless stated otherwise, and may not be reproduced without permission.
        </p>
      </LegalSection>

      <LegalSection heading="Limitation of liability">
        <p>
          We work to keep the information here accurate and current, but provide it
          without warranty. DeliCook is not liable for any loss arising from reliance on
          the content of this site.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Questions about these terms can be sent to{' '}
          <a href={`mailto:${site.email}`} className="text-brand-red underline">
            {site.email}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
