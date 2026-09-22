import type { ReactNode } from 'react';

type Tone = 'white' | 'grey' | 'cream';

const tones: Record<Tone, string> = {
  white: 'bg-white',
  grey: 'bg-surface-grey',
  cream: 'bg-surface-cream',
};

export function Section({
  children,
  tone = 'white',
  className = '',
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <section className={`${tones[tone]} py-16 sm:py-20 ${className}`}>
      <div className="shell">{children}</div>
    </section>
  );
}
