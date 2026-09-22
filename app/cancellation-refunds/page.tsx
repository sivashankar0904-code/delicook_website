import type { Metadata } from 'next';
import { LegalPage, LegalSection } from '@/components/LegalPage';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Cancellation & Refunds',
  description: 'DeliCook policy on order cancellations, replacements and refunds.',
};

export default function CancellationRefundsPage() {
  return (
    <LegalPage
      title="Cancellation & Refunds"
      intro="Our approach to cancellations, replacements and refunds for orders placed with DeliCook."
    >
      <LegalSection heading="Cancellations">
        <p>
          Orders can be cancelled before they are prepared and dispatched. Because our
          products are freshly made, we cannot cancel an order once preparation has
          begun.
        </p>
      </LegalSection>

      <LegalSection heading="Replacements">
        <p>
          If an item arrives damaged, incorrect or not in good condition, contact us
          within 24 hours of delivery with a photograph and your order details. We will
          arrange a replacement.
        </p>
      </LegalSection>

      <LegalSection heading="Refunds">
        <p>
          Where a replacement is not possible, we will issue a refund to the original
          payment method. Refunds are typically processed within 5–7 working days of
          being approved.
        </p>
      </LegalSection>

      <LegalSection heading="Getting in touch">
        <p>
          For any cancellation or refund query, email{' '}
          <a href={`mailto:${site.email}`} className="text-brand-red underline">
            {site.email}
          </a>{' '}
          or call{' '}
          <a
            href={`tel:${site.phone.replace(/\s/g, '')}`}
            className="text-brand-red underline"
          >
            {site.phone}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
