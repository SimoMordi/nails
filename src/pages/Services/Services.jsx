import './Services.css';
import PopularOptions from '../../components/ServicesSection/PopularOptions/PopularOptions';
import ManicureServices from '../../components/ServicesSection/ManicureServices/ManicureServices';
import PedicureServices from '../../components/ServicesSection/PedicureServices/PedicureServices';
import WaxingServices from '../../components/ServicesSection/WaxingServices/WaxingServices';
import KidsServices from '../../components/ServicesSection/KidsServices/KidsServices';

import hero from '../../Assets/Images/img14.png'
import hero2 from '../../Assets/Images/img6.png'


const Services = () => {
  return (
    <>
      <img src={hero} alt="heroImage" className='heroImage' />
      <div className="services-section">
        <PopularOptions />

        <div className='mani-and-pedi'>
        <ManicureServices />
        <PedicureServices />
        </div>
        <div className='call-to-action-item'>
        <img src={hero2} alt="heroImage2" className='heroImage2' />
        </div>
        <KidsServices />
        <WaxingServices />

      </div>

    </>

  );
};

export default Services;
