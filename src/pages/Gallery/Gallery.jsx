
import './Gallery.css';
import img1 from '../../Assets/Images/img1.png'
import img2 from '../../Assets/Images/img2.png'
import img3 from '../../Assets/Images/img3.png'
import img4 from '../../Assets/Images/img4.png'
import img5 from '../../Assets/Images/img5.png'
import img6 from '../../Assets/Images/img6.png'
import img7 from '../../Assets/Images/img7.png'
import img8 from '../../Assets/Images/img8.png'
import img9 from '../../Assets/Images/img9.png'
import img10 from '../../Assets/Images/img10.png'
import img11 from '../../Assets/Images/img11.png'
import img12 from '../../Assets/Images/img12.png'
import img13 from '../../Assets/Images/img13.png'
import img14 from '../../Assets/Images/img14.png'
import img15 from '../../Assets/Images/img15.png'
import img16 from '../../Assets/Images/img16.png'
import img17 from '../../Assets/Images/img17.png'
import img18 from '../../Assets/Images/img18.png'
import img19 from '../../Assets/Images/img19.png'
import img20 from '../../Assets/Images/img20.png'
import img21 from '../../Assets/Images/img21.png'
import img22 from '../../Assets/Images/img22.png'
import img23 from '../../Assets/Images/img23.png'
import img24 from '../../Assets/Images/img24.png'
import img25 from '../../Assets/Images/img25.png'
import img26 from '../../Assets/Images/img26.png'
import img27 from '../../Assets/Images/img27.png'
import img28 from '../../Assets/Images/img28.png'
import img29 from '../../Assets/Images/img29.png'
import img30 from '../../Assets/Images/img30.png'
import img31 from '../../Assets/Images/img31.png'
import img32 from '../../Assets/Images/img32.png'
import logo from '../../Assets/Logo/logo.png'



const imagePaths = [
    img1,img2,img3,img4,img5,img6,img7,
    img8,img9,img10,img11,img12,img13,img14,
    img15,img16,img17,img18,img19,
    img20,img21,img22,img23,img24,img25,
    img26,img27,img28,img29,img30,img31,img32
    
  ];

const Gallery = () => {
  

  return (
    <div className="gallery-container">
      <header className="gallery-header">
      <img src={logo} alt="logo" className="logo-image" />
        <h1>Navbar</h1>
      </header>
      <h1>Check our recent work:</h1>
      <p>Heart and save to show your nail artist next time!</p>
      <div className="image-grid">
        {imagePaths.map((imagePath, index) => (
          <div key={index} className="image-item">
            <img src={imagePath} alt={`Nail design ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="call-to-action">
        <p>Express Yourself with Unique Nails</p>
        <button>Book</button>
        <button>Learn More</button>
      </div>
      <h1 className="footer">Footer</h1>
    </div>
  );
};

export default Gallery;
