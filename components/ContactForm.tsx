'use client';

import { useState, type FormEvent } from 'react';
import { site } from '@/data/site';

type Status = 'idle' | 'submitted';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // TODO: wire to a real endpoint. This is a static export, so it cannot
    // handle a POST itself — add a Cloudflare Worker (or a service such as
    // Web3Forms) and submit to it here.
    setStatus('submitted');
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 sm:p-7" noValidate={false}>
      <h2 className="text-[18px] font-bold">Send Us a Message</h2>

      <div className="mt-5 space-y-4">
        <div>
          <label htmlFor="name" className="field-label">
            Full Name <span className="text-brand-coral">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Enter your full name"
            className="field"
          />
        </div>

        <div>
          <label htmlFor="email" className="field-label">
            Email Address <span className="text-brand-coral">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Enter your email address"
            className="field"
          />
        </div>

        <div>
          <label htmlFor="mobile" className="field-label">
            Mobile Number
          </label>
          <div className="flex">
            <span className="flex items-center rounded-l-lg border border-r-0 border-line bg-surface-grey px-3 text-[14px] text-ink-muted">
              +91
            </span>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              inputMode="numeric"
              pattern="[0-9]{10}"
              autoComplete="tel-national"
              placeholder="Enter 10-digit number"
              className="field rounded-l-none"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="field-label">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="What is this regarding?"
            className="field"
          />
        </div>

        <div>
          <label htmlFor="message" className="field-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Type your message here..."
            className="field resize-y"
          />
        </div>
      </div>

      <button type="submit" className="btn-gradient mt-6 w-full">
        Send Message
      </button>

      <p aria-live="polite" className="mt-3 min-h-[20px] text-center text-[13px]">
        {status === 'submitted' && (
          <span className="text-ink-muted">
            Thanks — form handling isn&apos;t connected yet. Please email us at{' '}
            <a href={`mailto:${site.email}`} className="text-brand-red underline">
              {site.email}
            </a>
            .
          </span>
        )}
      </p>
    </form>
  );
}
