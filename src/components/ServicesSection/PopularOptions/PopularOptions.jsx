
import './PopularOptions.css'; // Make sure to create and style this CSS file

// Data for most requested services
const mostRequestedServices = [
  { name: "Classic Manicure with Gel Polish", price: "$40" },
  { name: "Detox Volcano Pedicure", price: "$65" },
  { name: "Jelly Treatment Pedicure", price: "$55" }
];

// Data for combination deals
const combinationDeals = [
  { name: "Classic Manicure and Pedicure", price: "$60" },
  { name: "Deluxe Manicure and Deluxe Volcano", price: "$95" }
];

const PopularOptions = () => {
  return (
    <section className="popular-options">
      <h2 className='Popular'>Popular Options</h2>
      <div className='most-and-deals'>
        <div className="most-requested">
          <h3>Most Requested</h3>
          <ul>
            {mostRequestedServices.map((service, index) => (
              <li key={index} className="service-item">
                {service.name} <span className="service-price">{service.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="combination-deals">
          <h3>Combination Deals</h3>
          <ul>
            {combinationDeals.map((deal, index) => (
              <li key={index} className="deal-item">
                {deal.name} <span className="deal-price">{deal.price}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default PopularOptions;
