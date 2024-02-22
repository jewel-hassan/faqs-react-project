import React, { useState } from "react";

const Faq = ({ id, title, description }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="box">
      <h2>{title}</h2>

      <button onClick={()=> setToggle(!toggle)}>{toggle?"-":"+"}</button>
      <div>
       {
        toggle&& <p>{description}</p>
       }
      </div>
    </div>
  );
};

export default Faq;
