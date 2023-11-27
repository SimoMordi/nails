
import './KidsServices.css';
import kids from '../../../Assets/Images/img21.png'

const KidsServices = () => {
  const kidsServices = [
    { name: "Classic Manicure", price: "$15" },
    { name: "Classic Manicure with Gel Polish", price: "$25" },
    { name: "Classic Pedicure", price: "$25" },
    { name: "Classic Pedicure with Gel Polish", price: "$35" },
    { name: "Color Change nails/toes", price: "$15" },
    { name: "Gel Polish Color Change nails/toes", price: "$30" }
  ];

  return (
    <div className="kids-services-container">
      <h2>Kids Services</h2>

      <div className='kids-and-Image'>
        <ul className="kids-services-list">
          {kidsServices.map((service, index) => (
            <li key={index} className="kids-service-item">
              <span className="service-name">{service.name}</span>
              <span className="service-price">{service.price}</span>
            </li>
          ))}
        </ul>
        <img src={kids} alt="kidsImage" className='kidsImage' />
      </div>

    </div>
  );
};

export default KidsServices;
