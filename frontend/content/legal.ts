export type LegalParagraph = { type: "paragraph"; text: string };
export type LegalList = {
  type: "list";
  intro?: string;
  items: string[];
};
export type LegalNote = { type: "note"; text: string };

export type LegalBlock = LegalParagraph | LegalList | LegalNote;

export type LegalSection = {
  id: string;
  title: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  slug: "medical-disclaimer" | "privacy-policy" | "terms";
  title: string;
  eyebrow: string;
  intro: string;
  effectiveDate: string;
  sections: LegalSection[];
};

export const LEGAL_CONTACT = {
  organization: "Rooted Wellness",
  email: "rootedsoftness@gmail.com",
  phone: "+2349131578001",
} as const;

const EFFECTIVE_DATE = "May 14, 2026";

export const medicalDisclaimerContent: LegalDocument = {
  slug: "medical-disclaimer",
  title: "Medical Disclaimer",
  eyebrow: "Wellness boundary",
  intro:
    'Welcome to Rooted Wellness ("Rooted," "we," "our," or "us"). Please read this Medical Disclaimer carefully before using our website, digital products, programs, content, services, or wellness resources. By accessing or using Rooted Wellness, you acknowledge and agree to the terms outlined below.',
  effectiveDate: EFFECTIVE_DATE,
  sections: [
    {
      id: "educational-purposes",
      title: "1. Educational and informational purposes only",
      blocks: [
        {
          type: "list",
          intro: "All content provided by Rooted Wellness is intended solely for:",
          items: [
            "educational purposes",
            "informational purposes",
            "personal wellness support",
            "self-development and lifestyle guidance",
          ],
        },
        {
          type: "list",
          intro: "Our content may include topics related to:",
          items: [
            "nervous system regulation",
            "emotional well-being",
            "mindfulness",
            "EFT (Emotional Freedom Techniques)",
            "somatic practices",
            "stress management",
            "relaxation techniques",
            "wellness education",
          ],
        },
        {
          type: "paragraph",
          text: "Nothing on this website or within our products should be interpreted as medical advice, diagnosis, treatment, or healthcare services.",
        },
      ],
    },
    {
      id: "not-medical-advice",
      title: "2. Not medical or mental health advice",
      blocks: [
        {
          type: "paragraph",
          text: "Rooted Wellness is not a medical, psychological, psychiatric, or therapeutic provider.",
        },
        {
          type: "list",
          intro: "We do not:",
          items: [
            "diagnose medical conditions",
            "prescribe medications or treatment",
            "provide psychotherapy or counseling",
            "replace licensed healthcare professionals",
          ],
        },
        {
          type: "paragraph",
          text: "Any information shared through Rooted Wellness should not be used as a substitute for professional medical, mental health, or therapeutic care.",
        },
        {
          type: "list",
          intro: "Always seek guidance from a qualified healthcare professional regarding:",
          items: [
            "medical concerns",
            "mental health conditions",
            "emotional distress",
            "medications",
            "treatment decisions",
          ],
        },
        {
          type: "paragraph",
          text: "Never disregard professional medical advice because of information obtained from Rooted Wellness.",
        },
      ],
    },
    {
      id: "no-relationship",
      title: "3. No professional-client relationship",
      blocks: [
        {
          type: "list",
          intro: "Using Rooted Wellness does not establish:",
          items: [
            "a doctor-patient relationship",
            "a therapist-client relationship",
            "a counselor-client relationship",
            "a healthcare provider relationship",
          ],
        },
        {
          type: "paragraph",
          text: "Participation in our content, courses, programs, or digital resources does not create any professional therapeutic relationship.",
        },
      ],
    },
    {
      id: "personal-responsibility",
      title: "4. Personal responsibility",
      blocks: [
        {
          type: "list",
          intro: "You acknowledge that:",
          items: [
            "participation in wellness practices is voluntary",
            "you are responsible for your own physical, emotional, and mental well-being",
            "you use all information and practices at your own discretion and risk",
          ],
        },
        {
          type: "paragraph",
          text: "You are solely responsible for how you interpret and apply the information provided through Rooted Wellness.",
        },
      ],
    },
    {
      id: "wellness-practices",
      title: "5. Wellness and somatic practices",
      blocks: [
        {
          type: "paragraph",
          text: "Certain wellness practices shared by Rooted Wellness, including breathwork, EFT tapping, mindfulness exercises, somatic practices, relaxation exercises, movement practices, and nervous system regulation techniques, may evoke emotional or physical responses.",
        },
        {
          type: "paragraph",
          text: "Please proceed gently and discontinue any practice that causes discomfort or distress.",
        },
        {
          type: "list",
          intro: "If you have any of the following, consult an appropriate healthcare professional before participating in wellness practices:",
          items: [
            "a medical condition",
            "a mental health condition",
            "trauma-related concerns",
            "neurological conditions",
            "pregnancy-related concerns",
          ],
        },
      ],
    },
    {
      id: "no-guarantees",
      title: "6. No guaranteed results",
      blocks: [
        {
          type: "list",
          intro: "Rooted Wellness does not guarantee:",
          items: [
            "healing outcomes",
            "emotional transformation",
            "symptom reduction",
            "wellness improvements",
            "financial or lifestyle outcomes",
          ],
        },
        {
          type: "paragraph",
          text: "Results vary based on individual circumstances, consistency, health conditions, environment, and other personal factors.",
        },
      ],
    },
    {
      id: "emergencies",
      title: "7. Emergency situations",
      blocks: [
        {
          type: "paragraph",
          text: "Rooted Wellness is not an emergency service.",
        },
        {
          type: "list",
          intro: "If you are experiencing any of the following, please contact emergency services or a licensed healthcare provider immediately:",
          items: [
            "a medical emergency",
            "severe emotional distress",
            "thoughts of self-harm",
            "a psychiatric crisis",
          ],
        },
      ],
    },
    {
      id: "ai-personalization",
      title: "8. AI and personalized wellness features",
      blocks: [
        {
          type: "paragraph",
          text: "Rooted Wellness may use AI-assisted tools or personalization technologies to enhance user experience and educational recommendations.",
        },
        {
          type: "list",
          intro: "These tools:",
          items: [
            "do not provide medical diagnoses",
            "are not substitutes for licensed healthcare professionals",
            "should not be relied upon for medical decision-making",
          ],
        },
      ],
    },
    {
      id: "liability",
      title: "9. Limitation of liability",
      blocks: [
        {
          type: "list",
          intro: "To the fullest extent permitted by law, Rooted Wellness is not liable for:",
          items: [
            "injuries",
            "losses",
            "damages",
            "emotional distress",
            "adverse outcomes arising from the use or misuse of our content, products, services, or wellness practices",
          ],
        },
        {
          type: "paragraph",
          text: "Your use of Rooted Wellness is entirely voluntary and at your own risk.",
        },
      ],
    },
    {
      id: "contact",
      title: "10. Contact information",
      blocks: [
        {
          type: "paragraph",
          text: "If you have questions regarding this Medical Disclaimer, please contact us using the details in the contact card below.",
        },
      ],
    },
  ],
};

export const privacyPolicyContent: LegalDocument = {
  slug: "privacy-policy",
  title: "Privacy Policy",
  eyebrow: "Your data, handled with care",
  intro:
    'Welcome to Rooted Wellness ("Rooted," "we," "our," or "us"). Your privacy matters deeply to us. This Privacy Policy explains how we collect, use, protect, and manage your information when you interact with our website, digital products, quizzes, newsletters, wellness content, and related services. By using our services, you agree to the practices described in this Privacy Policy.',
  effectiveDate: EFFECTIVE_DATE,
  sections: [
    {
      id: "information-we-collect",
      title: "1. Information we collect",
      blocks: [
        {
          type: "paragraph",
          text: "We may collect personal and non-personal information from you when you interact with Rooted Wellness.",
        },
        {
          type: "list",
          intro: "Personal information may include:",
          items: [
            "full name",
            "email address",
            "billing and payment information",
            "account information",
            "information voluntarily submitted through forms, quizzes, surveys, journals, or communications",
          ],
        },
        {
          type: "list",
          intro: "Wellness and preference information you may voluntarily provide:",
          items: [
            "nervous system or wellness-related responses",
            "lifestyle preferences",
            "reflection or journaling responses",
            "product or content interests",
          ],
        },
        {
          type: "paragraph",
          text: "This information is used solely to personalize your experience and improve our services.",
        },
        {
          type: "list",
          intro: "Technical information we may automatically collect:",
          items: [
            "IP address",
            "browser type",
            "device information",
            "website activity",
            "cookies and analytics data",
          ],
        },
      ],
    },
    {
      id: "how-we-use",
      title: "2. How we use your information",
      blocks: [
        {
          type: "list",
          intro: "We use your information to:",
          items: [
            "deliver products, programs, and digital resources",
            "personalize your wellness experience",
            "improve website functionality and user experience",
            "respond to inquiries and provide customer support",
            "send newsletters, updates, and promotional communications",
            "analyze trends and platform performance",
            "maintain the security and integrity of our services",
          ],
        },
        {
          type: "paragraph",
          text: "We only collect information reasonably necessary to operate and improve Rooted Wellness.",
        },
      ],
    },
    {
      id: "cookies",
      title: "3. Cookies and analytics",
      blocks: [
        {
          type: "list",
          intro: "Rooted Wellness may use cookies, pixels, and similar technologies to:",
          items: [
            "improve website performance",
            "understand user behavior and engagement",
            "personalize content and offerings",
            "support marketing and advertising efforts",
          ],
        },
        {
          type: "list",
          intro: "We may use analytics and marketing tools provided by trusted third-party services, including but not limited to:",
          items: [
            "Google Analytics",
            "Pinterest Analytics",
            "Meta and Facebook Pixel",
            "email marketing platforms",
          ],
        },
        {
          type: "paragraph",
          text: "You may disable cookies through your browser settings, though some features of the website may not function properly.",
        },
      ],
    },
    {
      id: "third-party",
      title: "4. Third-party services",
      blocks: [
        {
          type: "list",
          intro: "We may use trusted third-party platforms and providers to support our services, including:",
          items: [
            "payment processors",
            "website hosting providers",
            "email marketing services",
            "digital product delivery platforms",
            "analytics providers",
          ],
        },
        {
          type: "paragraph",
          text: "These providers only receive access to information necessary to perform their services and are expected to maintain appropriate security and confidentiality practices.",
        },
        {
          type: "paragraph",
          text: "We are not responsible for the privacy practices of external websites or third-party services linked through our platform.",
        },
      ],
    },
    {
      id: "payment-information",
      title: "5. Payment information",
      blocks: [
        {
          type: "paragraph",
          text: "Payments may be processed through secure third-party payment providers. Rooted Wellness does not store full payment card information on our servers.",
        },
        {
          type: "paragraph",
          text: "Please review the privacy policies of any payment processors you use when making purchases through our platform.",
        },
      ],
    },
    {
      id: "data-protection",
      title: "6. Data protection and security",
      blocks: [
        {
          type: "paragraph",
          text: "We implement reasonable administrative, technical, and organizational safeguards designed to protect your information from unauthorized access, misuse, loss, or disclosure.",
        },
        {
          type: "paragraph",
          text: "While we strive to protect your information, no method of internet transmission or electronic storage can be guaranteed to be completely secure.",
        },
      ],
    },
    {
      id: "your-rights",
      title: "7. Your rights and choices",
      blocks: [
        {
          type: "list",
          intro: "Depending on your location and applicable laws, you may have the right to:",
          items: [
            "access the personal information we hold about you",
            "request correction of inaccurate information",
            "request deletion of your information",
            "withdraw consent from marketing communications",
            "request a copy of your stored data",
          ],
        },
        {
          type: "paragraph",
          text: "You may unsubscribe from marketing emails at any time using the unsubscribe link included in our emails.",
        },
        {
          type: "paragraph",
          text: "To make a privacy-related request, please contact us using the information below.",
        },
      ],
    },
    {
      id: "wellness-disclaimer",
      title: "8. Wellness disclaimer",
      blocks: [
        {
          type: "paragraph",
          text: "Rooted Wellness provides educational wellness content, nervous system regulation resources, EFT tools, mindfulness practices, and emotional wellbeing support.",
        },
        {
          type: "paragraph",
          text: "Our content is not intended to diagnose, treat, cure, or prevent any medical or mental health condition and should not replace professional medical, psychological, or therapeutic care.",
        },
        {
          type: "paragraph",
          text: "Please consult a qualified healthcare professional regarding any medical or mental health concerns.",
        },
      ],
    },
    {
      id: "ai-personalization",
      title: "9. AI and personalization",
      blocks: [
        {
          type: "paragraph",
          text: "As Rooted Wellness evolves, we may use AI-assisted tools and personalization technologies to improve user experience, educational recommendations, and wellness support.",
        },
        {
          type: "paragraph",
          text: "Any personalization features are intended to enhance user experience and not to provide medical advice or clinical treatment.",
        },
      ],
    },
    {
      id: "childrens-privacy",
      title: "10. Children's privacy",
      blocks: [
        {
          type: "paragraph",
          text: "Rooted Wellness is not intended for children under the age of 13. We do not knowingly collect personal information from minors.",
        },
        {
          type: "paragraph",
          text: "If we become aware that information from a child has been collected without verified parental consent, we will take steps to delete that information promptly.",
        },
      ],
    },
    {
      id: "international",
      title: "11. International users",
      blocks: [
        {
          type: "paragraph",
          text: "By using our services, you understand that your information may be transferred to and processed in countries where privacy laws may differ from those in your location.",
        },
        {
          type: "paragraph",
          text: "We take reasonable measures to ensure your information remains protected.",
        },
      ],
    },
    {
      id: "changes",
      title: "12. Changes to this Privacy Policy",
      blocks: [
        {
          type: "paragraph",
          text: "We may update this Privacy Policy periodically to reflect operational, legal, or regulatory changes.",
        },
        {
          type: "paragraph",
          text: 'Updated versions will be posted on this page with a revised "Effective Date."',
        },
        {
          type: "paragraph",
          text: "Continued use of our services after changes become effective constitutes acceptance of the updated policy.",
        },
      ],
    },
    {
      id: "contact",
      title: "13. Contact us",
      blocks: [
        {
          type: "paragraph",
          text: "If you have questions, concerns, or privacy-related requests, please contact us using the details in the contact card below.",
        },
      ],
    },
  ],
};

export const termsContent: LegalDocument = {
  slug: "terms",
  title: "Terms and Conditions",
  eyebrow: "Clear, honest, mutual",
  intro:
    'Welcome to Rooted Wellness ("Rooted," "we," "us," or "our"). These Terms and Conditions govern your use of our website, digital products, services, programs, quizzes, content, and any related offerings. By accessing or using Rooted Wellness, you agree to be bound by these Terms. If you do not agree, please do not use our services.',
  effectiveDate: EFFECTIVE_DATE,
  sections: [
    {
      id: "overview",
      title: "1. Overview of services",
      blocks: [
        {
          type: "list",
          intro: "Rooted Wellness provides educational and informational content focused on:",
          items: [
            "nervous system regulation",
            "emotional well-being",
            "mindfulness and somatic practices",
            "EFT (Emotional Freedom Techniques)",
            "lifestyle and self-regulation tools",
            "digital wellness products and resources",
          ],
        },
        {
          type: "paragraph",
          text: "Our content is designed for educational and personal development purposes only.",
        },
      ],
    },
    {
      id: "no-medical-advice",
      title: "2. No medical or therapeutic advice",
      blocks: [
        {
          type: "paragraph",
          text: "All content provided by Rooted Wellness is strictly educational and informational.",
        },
        {
          type: "list",
          intro: "We do not provide:",
          items: [
            "medical advice",
            "psychological diagnosis",
            "mental health treatment",
            "therapy or clinical care",
          ],
        },
        {
          type: "paragraph",
          text: "Rooted Wellness is not a substitute for professional medical, psychological, or psychiatric services.",
        },
        {
          type: "paragraph",
          text: "If you are experiencing physical or mental health concerns, please consult a qualified healthcare professional.",
        },
      ],
    },
    {
      id: "use-of-website",
      title: "3. Use of our website and content",
      blocks: [
        {
          type: "paragraph",
          text: "You agree to use Rooted Wellness only for lawful purposes and in a way that does not harm, disrupt, or misuse our services.",
        },
        {
          type: "list",
          intro: "You may not:",
          items: [
            "copy, reproduce, or redistribute our content without permission",
            "resell or exploit our digital products without authorization",
            "attempt to hack, damage, or interfere with our platform",
            "misuse content for harmful, illegal, or misleading purposes",
          ],
        },
        {
          type: "paragraph",
          text: "All content is protected by intellectual property laws.",
        },
      ],
    },
    {
      id: "digital-products",
      title: "4. Digital products and services",
      blocks: [
        {
          type: "list",
          intro: "All digital products, including guides, EFT scripts, courses, quizzes, and downloadable materials, are:",
          items: [
            "for personal use only",
            "non-transferable",
            "non-refundable unless otherwise stated",
          ],
        },
        {
          type: "paragraph",
          text: "You may not share, resell, or distribute purchased materials without written consent.",
        },
      ],
    },
    {
      id: "payments",
      title: "5. Payments",
      blocks: [
        {
          type: "paragraph",
          text: "Payments for products and services are processed through secure third-party payment providers.",
        },
        {
          type: "list",
          intro: "By purchasing, you agree to:",
          items: [
            "provide accurate billing information",
            "authorize payment for selected products or services",
            "comply with any pricing and payment terms stated at checkout",
          ],
        },
        {
          type: "paragraph",
          text: "We reserve the right to modify pricing at any time.",
        },
      ],
    },
    {
      id: "refunds",
      title: "6. Refund policy",
      blocks: [
        {
          type: "paragraph",
          text: "Due to the digital nature of our products, all sales are generally final.",
        },
        {
          type: "paragraph",
          text: "Refunds may only be granted in exceptional circumstances at our sole discretion.",
        },
        {
          type: "paragraph",
          text: "If a refund policy is specified on a specific product page, that policy will take precedence.",
        },
      ],
    },
    {
      id: "intellectual-property",
      title: "7. Intellectual property",
      blocks: [
        {
          type: "list",
          intro: "All content on Rooted Wellness, including but not limited to:",
          items: [
            "text",
            "branding",
            "graphics",
            "programs",
            "frameworks",
            "digital downloads",
            "website design",
          ],
        },
        {
          type: "paragraph",
          text: "...is the intellectual property of Rooted Wellness unless otherwise stated.",
        },
        {
          type: "paragraph",
          text: "You may not copy, reproduce, or distribute any content without explicit written permission.",
        },
      ],
    },
    {
      id: "accounts",
      title: "8. User accounts and access",
      blocks: [
        {
          type: "list",
          intro: "If you create an account or access gated content:",
          items: [
            "you are responsible for maintaining the confidentiality of your login details",
            "you are responsible for all activity under your account",
            "we reserve the right to suspend or terminate access if misuse is detected",
          ],
        },
      ],
    },
    {
      id: "third-party",
      title: "9. Third-party services",
      blocks: [
        {
          type: "list",
          intro: "Rooted Wellness may use third-party platforms for:",
          items: [
            "payments",
            "email communication",
            "analytics",
            "content delivery",
          ],
        },
        {
          type: "paragraph",
          text: "We are not responsible for the policies, practices, or actions of third-party providers.",
        },
      ],
    },
    {
      id: "liability",
      title: "10. Limitation of liability",
      blocks: [
        {
          type: "list",
          intro: "To the fullest extent permitted by law, Rooted Wellness is not liable for:",
          items: [
            "any direct or indirect damages arising from use of our services",
            "emotional, psychological, or physical outcomes from using our content",
            "reliance on educational materials provided",
          ],
        },
        {
          type: "paragraph",
          text: "You agree that you use all content at your own discretion and responsibility.",
        },
      ],
    },
    {
      id: "no-guarantees",
      title: "11. No guarantees",
      blocks: [
        {
          type: "list",
          intro: "We do not guarantee:",
          items: [
            "specific emotional, financial, or physical outcomes",
            "healing or transformation results",
            "success from using our content or programs",
          ],
        },
        {
          type: "paragraph",
          text: "Results depend on individual application, consistency, and personal circumstances.",
        },
      ],
    },
    {
      id: "privacy",
      title: "12. Privacy",
      blocks: [
        {
          type: "paragraph",
          text: "Your use of Rooted Wellness is also governed by our Privacy Policy. Please review it to understand how we collect and use your information.",
        },
      ],
    },
    {
      id: "changes",
      title: "13. Changes to these Terms",
      blocks: [
        {
          type: "paragraph",
          text: "We may update these Terms at any time. Updates will be posted on this page with a revised effective date.",
        },
        {
          type: "paragraph",
          text: "Continued use of our services means you accept any updated Terms.",
        },
      ],
    },
    {
      id: "governing-law",
      title: "14. Governing law",
      blocks: [
        {
          type: "paragraph",
          text: "These Terms are governed by the applicable laws of your operating jurisdiction, unless otherwise stated.",
        },
      ],
    },
    {
      id: "contact",
      title: "15. Contact information",
      blocks: [
        {
          type: "paragraph",
          text: "If you have questions about these Terms, please contact us using the details in the contact card below.",
        },
      ],
    },
  ],
};

export const LEGAL_DOCUMENTS: Record<LegalDocument["slug"], LegalDocument> = {
  "medical-disclaimer": medicalDisclaimerContent,
  "privacy-policy": privacyPolicyContent,
  terms: termsContent,
};
