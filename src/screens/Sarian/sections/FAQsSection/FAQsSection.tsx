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
  ];

  return (
    <section className="w-full py-8 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
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
                <AccordionTrigger className={`flex items-center justify-between px-4 md:px-8 py-4 md:py-8 hover:no-underline [&[data-state=open]>svg]:rotate-180 ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
                  <div className={`flex items-center gap-4 md:gap-[33px] w-full ${language === 'ar' ? 'flex-row' : 'flex-row-reverse'}`}>
                    <span className={`[font-family:'Inter',Helvetica] font-normal text-black text-lg md:text-3xl tracking-[0] leading-normal whitespace-normal w-full ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                      {item.question}
                    </span>
                    <ChevronDownIcon className="w-8 h-8 md:w-[49px] md:h-[49px] shrink-0 transition-transform duration-200 text-gray-500" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className={`px-4 md:px-8 pb-4 md:pb-8 text-base md:text-xl ${language === 'ar' ? 'text-right' : 'text-left'}`}>
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
