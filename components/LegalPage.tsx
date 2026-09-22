import type { ReactNode } from 'react';
import { Breadcrumb } from './Breadcrumb';

/**
 * Shared shell for the three footer policy pages. The copy in each is a
 * placeholder — it needs review by whoever handles your legal text.
 */
export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <>
      <Breadcrumb current={title} />

      <section className="pb-16 pt-8">
        <div className="shell mx-auto max-w-3xl">
          <h1 className="text-[32px] font-extrabold tracking-tight sm:text-[38px]">
            {title}
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">{intro}</p>

          <div className="mt-10 space-y-8">{children}</div>

          <p className="mt-12 rounded-lg border border-line bg-surface-grey p-4 text-[12px] leading-relaxed text-ink-muted">
            This page is placeholder copy and has not been reviewed by a legal
            professional. Please replace it before the site goes live.
          </p>
        </div>
      </section>
    </>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-[17px] font-bold">{heading}</h2>
      <div className="mt-2.5 space-y-3 text-[14px] leading-relaxed text-ink-muted">
        {children}
      </div>
    </section>
  );
}
