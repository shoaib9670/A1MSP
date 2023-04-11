import React, { useState } from "react";
import "./Testimonial.css";

const testimonialData = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO, ABC Inc.",
    image: "testimonial-1.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt ante et ante vestibulum, ut venenatis nisl auctor. Integer eget congue mi. Sed non mi ullamcorper, finibus elit eu, ultrices mi. Duis id mi sit amet risus pharetra pretium.",
  },
  {
    id: 2,
    name: "Jane Doe",
    title: "CTO, XYZ Inc.",
    image: "testimonial-2.jpg",
    quote:
      "Sed molestie, lorem vel dapibus pharetra, turpis purus lobortis mauris, sit amet tincidunt nibh nibh sit amet nibh. Nunc congue id augue vitae vestibulum. Sed nec scelerisque lorem. Donec maximus dolor ac semper eleifend.",
  },
];

const auditData = [
  {
    id: 1,
    title: "Audit 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Audit 2",
    description:
      "Duis tincidunt ante et ante vestibulum, ut venenatis nisl auctor.",
  },
  {
    id: 3,
    title: "Audit 3",
    description:
      "Sed molestie, lorem vel dapibus pharetra, turpis purus lobortis mauris.",
  },
];

const Testimonial = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeAudit, setActiveAudit] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial(
      activeTestimonial === testimonialData.length - 1
        ? 0
        : activeTestimonial + 1
    );
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      activeTestimonial === 0
        ? testimonialData.length - 1
        : activeTestimonial - 1
    );
  };

  const nextAudit = () => {
    setActiveAudit(activeAudit === auditData.length - 1 ? 0 : activeAudit + 1);
  };

  const prevAudit = () => {
    setActiveAudit(activeAudit === 0 ? auditData.length - 1 : activeAudit - 1);
  };

  return (
    <div className="testimonial-wrapper">
      <div className="testimonial-carousel">
        {testimonialData.map((testimonial, index) => (
          <div
            className={`testimonial-item ${
              index === activeTestimonial ? "active" : ""
            }`}
            key={testimonial.id}
          >
            <img src={testimonial.image} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.title}</p>
            <q>{testimonial.quote}</q>
          </div>
        ))}
        <button className="carousel-prev" onClick={prevTestimonial}>
          &#8249;
        </button>
        <button className="carousel-next" onClick={nextTestimonial}>
          &#8250;
        </button>
      </div>
      <div className="audit-carousel">
        {auditData.map((audit, index) => (
          <div
            className={`audit-item ${index === activeAudit ? "active" : ""}`}
            key={audit.id}
          >
            <h3>{audit.title}</h3>
            <p>{audit.description}</p>
          </div>
        ))}
        <button className="carousel-prev" onClick={prevAudit}>
          &#8249;
        </button>
        <button className="carousel-next" onClick={nextAudit}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
