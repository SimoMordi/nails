// Services.jsx
import React from 'react';

// Services data based on the provided screenshot
const servicesData = {
    mostRequested: [
      { name: "Classic Manicure with Gel Polish", price: "$40" },
      { name: "Deluxe Volcano Pedicure", price: "$50" },
      { name: "Jelly Treatment Pedicure", price: "$55" },
    ],
    combinationDeals: [
      { name: "Classic Manicure and Pedicure", price: "$50" },
      { name: "Deluxe Manicure and Deluxe Volcano Pedicure", price: "$70" },
    ],
    manicures: [
      { name: "The Classic", price: "$25" },
      { name: "Gel Polish add", price: "$15" },
      { name: "Nail Enhancement", price: "$3+" },
      { name: "Nail Design per Nail", price: "$5+" },
      { name: "Dip Powder Overlay", price: "$35+" },
      { name: "Extension with Dip", price: "$50+" },
      { name: "Ombre with Dip", price: "$55+" },
      // Additional services here
    ],
    pedicures: [
      { name: "The Classic", price: "$35" },
      { name: "Spa Pedicure", price: "$45" },
      { name: "Herbal Spa Pedicure", price: "$50" },
      { name: "Volcano Pedicure", price: "$55" },
      { name: "Jelly Treatment Pedicure", price: "$60" },
      // Additional services here
    ],
    // Add more categories if needed
  };
  
  // Component to render the list of services
  const ServiceList = ({ services }) => (
    <ul className="service-list">
      {services.map((service, index) => (
        <li key={index} className="service-item">
          {service.name} <span className="service-price">{service.price}</span>
        </li>
      ))}
    </ul>
  );
  
  // Component for each service category
  const ServiceCategory = ({ title, services }) => (
    <div className="service-category">
      <h3 className="service-title">{title}</h3>
      <ServiceList services={services} />
    </div>
  );
  
  // Main component to render all services
  const ServicesSection = () => (
    <section className="services-section">
      {Object.keys(servicesData).map((key, index) => (
        <ServiceCategory
          key={index}
          title={key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} // Convert camelCase to title
          services={servicesData[key]}
        />
      ))}
    </section>
  );
  
  export default ServicesSection;
  