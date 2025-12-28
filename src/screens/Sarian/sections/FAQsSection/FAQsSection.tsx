import { ChevronDownIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const FAQsSection = (): JSX.Element => {
  const { t, language } = useLanguage();

  const faqItems = [
    {
      id: "item-1",
      question: t('faq.q1'),
      answer: t('faq.a1'),
    },
    {
      id: "item-2",
      question: t('faq.q2'),
      answer: t('faq.a2'),
    },
    {
      id: "item-3",
      question: t('faq.q3'),
      answer: t('faq.a3'),
    },
    {
      id: "item-4",
      question: t('faq.q4'),
      answer: t('faq.a4'),
    },
    {
      id: "item-5",
      question: t('faq.q5'),
      answer: t('faq.a5'),
    },
    {
      id: "item-6",
      question: t('faq.q6'),
      answer: t('faq.a6'),
    },
    {
      id: "item-7",
      question: t('faq.q7'),
      answer: t('faq.a7'),
    },
    {
      id: "item-8",
      question: t('faq.q8'),
      answer: t('faq.a8'),
    },
    {
      id: "item-9",
      question: t('faq.q9'),
      answer: t('faq.a9'),
    },
    {
      id: "item-10",
      question: t('faq.q10'),
      answer: t('faq.a10'),
    },
  ];

  return (
    <section className="w-full py-10 md:py-12 lg:py-16 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {faqItems.map((item, index) => (
          <div
            key={item.id}
            className="translate-y-[-1rem] animate-fade-in opacity-0"
            style={
              { "--animation-delay": `${index * 100}ms` } as React.CSSProperties
            }
          >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value={item.id}
                className="border border-solid border-[#c7c7c7] rounded-[15px] overflow-hidden bg-white"
              >
                <AccordionTrigger className={`flex items-center justify-between px-3 md:px-6 lg:px-8 py-3 md:py-5 lg:py-6 hover:no-underline [&[data-state=open]>svg]:rotate-180 ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
                  <div className={`flex items-center gap-3 md:gap-4 lg:gap-[33px] w-full ${language === 'ar' ? 'flex-row' : 'flex-row-reverse'}`}>
                    <span className={`[font-family: Georgia, 'Times New Roman', Times, serif] font-normal text-black text-base md:text-lg lg:text-xl tracking-[0] leading-normal whitespace-normal w-full ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                      {item.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className={`px-3 md:px-6 lg:px-8 pb-3 md:pb-5 lg:pb-6 text-sm md:text-base lg:text-lg ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
};
