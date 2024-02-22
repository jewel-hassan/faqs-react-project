import React, { useState } from "react";
import { faqsdata } from "./Data";
import Faq from "./Faq";

const Faqs = () => {
  const [faqs, setFaqs] = useState(faqsdata);

  return (
   <div>
     <h2>Faqs</h2>
    <div className="flex-container">
      
      {
        faqs.map((faq)=> <Faq key={faq.id} {...faq}/>)
      }
    </div>
   </div>
  );
};

export default Faqs;
