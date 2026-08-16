/**
 * NONAKTIF — FaqAccordion (akordeon pertanyaan yang sering diajukan).
 *
 * Hanya dipakai bila fitur `features.faq` dihidupkan. Seluruh isi
 * dikomentari; aktifkan kembali dengan menghapus komentar di bawah.
 */

/* ---------------------------------------------------------------------
"use client";

import { useState } from "react";
import { faqs } from "@/lib/faqs";
import SectionTitle from "@/components/section-title";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionTitle title="Pertanyaan yang Sering Diajukan" />
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div
                key={faq.question}
                className={`rounded-xl border bg-surface transition-colors ${
                  isOpen ? "border-primary" : "border-border"
                }`}
              >
                <button
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpen(isOpen ? null : index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <svg
                    className={`h-4 w-4 text-muted transition-transform ${
                      isOpen ? "rotate-45 text-primary" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
                <div
                  className={`grid transition-all ${
                    isOpen
                      ? "grid-rows-[1fr] pb-5"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 text-sm leading-relaxed text-muted">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
--------------------------------------------------------------------- */