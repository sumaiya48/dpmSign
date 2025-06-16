import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const faqData = [
  {
    category: "General Questions",
    questions: [
      {
        question: "What industries or client do you cater to?",
        answer: "We serve a diverse range of clients, including corporate organizations, educational institutions, government bodies, small businesses, and individuals looking for high-quality signage or customized gifts."
      },
      {
        question: "Why choose Dhaka Plastic & Metal?",
        answer: "We stand out due to our: - Commitment to quality and craftsmanship. - Fully customizable products. - Reliable delivery and customer service. - Competitive pricing."
      },
      {
        question: "Do you have a physical store?",
        answer: "Yes, we operate offline & online both to serve customers efficiently across Bangladesh."
      },
      {
        question: "How can I stay updated about new product and offers?",
        answer: "Subscribe to our newsletter at the bottom of the page or follow us on social media for regular updates."
      }
    ]
  },
  {
    category: "Products & Customization",
    questions: [
      {
        question: "Are there limitations on customization?",
        answer: "Most products are fully customizable. However, certain materials or designs may have technical or feasibility constraints. Our team will inform you during the design approval process."
      },
      {
        question: "Can I request a sample before placing a bulk order?",
        answer: "Yes, we offer samples for certain products. Sample costs and delivery charges may apply."
      },
      {
        question: "How do I know my design will look right on product?",
        answer: "We share a digital proof/mockup for approval before production begins to ensure your satisfaction."
      },
      {
        question: "Do you offer environmentally-friendly materials?",
        answer: "Yes, we have options for sustainable and eco-friendly materials, particularly for corporate gifts and signage."
      },
      {
        question: "Can I reorder the same design later?",
        answer: "Absolutely. We retain your approved design files for up to one year to simplify reorders."
      }
    ]
  },
  {
    category: "Ordering & Payment",
    questions: [
      {
        question: "Is there a minimum order quantity?",
        answer: "Yes, certain products like award plaques and keychains have a minimum order requirement. Details are mentioned on the respective product pages."
      },
      {
        question: "How do I calculate  the cost for customized products?",
        answer: "Use the price estimator on our product pages. Enter your specifications (size, material, quantity) to get an estimated cost. Final pricing will be confirmed during order review."
      },
      {
        question: "Are there hidden charges?",
        answer: "No, all costs, including customization and delivery, are transparently communicated before finalizing the order."
      },
      {
        question: "Can i pay in installments for bulk orders?",
        answer: "Payment plans may be available for large corporate orders. Contact our sales team to discuss options."
      }
    ]
  },
  {
    category: "Delivery & Shipping",
    questions: [
      {
        question: "What areas do you deliver to?",
        answer: "We deliver across Bangladesh, including rural and remote locations. For detailed delivery zones, contact us."
      },
      {
        question: "Can I schedule delivery for a specific date?",
        answer: "Yes, scheduled delivery is available for certain products. Mention your preferred date during checkout or while placing your order."
      },
      {
        question: "What happens if my item is delayed?",
        answer: "In rare cases of delays, our team will keep you updated and prioritize resolution. Compensation may apply if the delay is significant and not caused by external factors."
      },
      {
        question: "How are my products packaged for delivery?",
        answer: "Products are securely packaged using protective materials to ensure they arrive in perfect condition."
      }
    ]
  },
  {
    category: "Exchange & Replacement Policy",
    questions: [
      {
        question: "How long does it take to process an exchange?",
        answer: "Once approved, exchanges are typically processed within 7-10 business days, depending on the product."
      },
      {
        question: "What if the replacement product also has issues?",
        answer: "We conduct thorough quality checks before shipping replacements. In rare cases of repeated issues, contact our support team for immediate resolution."
      },
      {
        question: "Can I exchange a product for a different design or material?",
        answer: "Exchanges are only applicable for the same product type. Design or material changes will be considered a new order."
      }
    ]
  },
  {
    category: "Campus Ambassador & Business Partner Programs",
    questions: [
      {
        question: "How can I track sales generated through my referral code as a Campus Ambassador?",
        answer: "After signing up, you’ll have access to a personal dashboard to track sales, commissions, and performance analytics."
      },
      {
        question: "Are there performance bonuses for Campus Ambassadors?",
        answer: "Yes, top-performing ambassadors may receive additional bonuses based on monthly or quarterly targets."
      },
      {
        question: "What support do you provide to business partners?",
        answer: "Business partners receive promotional materials, exclusive pricing, and dedicated account management support."
      }
    ]
  },
  {
    category: "Technical Support",
    questions: [
      {
        question: "Can I edit my new details after placing it?",
        answer: "Editing is allowed within 12 hours of placing the order. Contact our support team to make changes."
      },
      {
        question: "How do I reset my account password?",
        answer: "Click on 'Forgot Password' on the login page and follow the steps to reset your password."
      },
      {
        question: "What should I do if I experience a payment failure?",
        answer: "Check your payment details and try again. If the issue persists, contact us immediately at info@dpmsign.com or +8801958253962."
      }
    ]
  },
  {
    category: "Contact Us",
    questions: [
      {
        question: "How quickly can I expect a response to my query?",
        answer: "Our customer support team typically responds within 24 hours during business hours."
      },
      {
        question: "Do you offer live chat support?",
        answer: "Yes, live chat is available on our website during business hours for instant assistance."
      }
    ]
  }
];


function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded mb-2">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full px-4 py-2 font-semibold bg-gray-100 text-left"
      >
        {question}
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {open && (
        <div className="px-4 py-2 text-sm bg-white border-t">
          {answer}
        </div>
      )}
    </div>
  );
}

function FAQSection() {
  return (
    <div className="w-11/12 mx-auto py-10">
      <h1 className="text-2xl font-bold text-center mb-8">Welcome to Our FAQ Page</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {faqData.map((section, idx) => (
          <div key={idx}>
            <h2 className="text-blue-600 font-bold mb-2 border-b pb-1">{section.category}</h2>
            {section.questions.map((item, i) => (
              <AccordionItem key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
        ))}
      </div>
      <p className="text-sm text-center mt-6">
        Can't find the answer you're looking for?{" "}
      </p>
      
       <div className="flex justify-center my-2">
         <Link to='/contact'><button className="btn btn-primary ">Contact Us</button></Link>
       </div>
    </div>
  );
}

export default FAQSection;
