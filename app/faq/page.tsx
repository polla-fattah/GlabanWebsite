'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import CTABand from '@/components/CTABand';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs } from '@/lib/data/faqs';

export default function FaqPage() {
  return (
    <div>
      <Header />
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
      />

      <section className="max-w-[1280px] mx-auto py-16 px-8 pb-24">
        <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-navy/10 py-2">
              <AccordionTrigger className="text-left font-semibold text-base text-textDark hover:no-underline py-4">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-[14.5px] text-textBody leading-[1.65] pt-1 pb-4">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <CTABand heading="Still have questions?" buttonLabel="Contact Us" />
      <Footer />
    </div>
  );
}
