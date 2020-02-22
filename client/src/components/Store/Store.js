import React, { Fragment, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import './Store.css';
import pic1 from '../../img/Bulk Muscle.png';
import pic2 from '../../img/Dymatize Super Mass Gainer.png';
import pic3 from '../../img/Extreme MASS.png';
import pic4 from '../../img/MusclePharm Combat XL Mass Gainer.png';
import pic5 from '../../img/Advance Anabolic - Massive Gainer.png';
import pic6 from '../../img/NPL Elite Gainer.png';
import pic7 from '../../img/Original MASS Gainer Protein.png';
import pic8 from '../../img/Under Armour Drive Shoes.png';
import pic9 from '../../img/Under Armour Running Shoes.png';
import pic10 from '../../img/Asics Gel Resolution.png';
import pic11 from '../../img/Nike Air.png';
import pic12 from '../../img/Nike Athletic Shoes.png';
import pic13 from '../../img/Nike Training Shoes.png';
import pic14 from '../../img/Nike Metcon Black-Volt.png';
import Navbar from '../Navbar/Navbar';
import MobileNav from '../Mobile/MobileNav';
import MediaQuery from 'react-responsive';
import { getUpdates } from '../../actions/updateAction';
// Redux
import { connect } from 'react-redux';

const Store = ({ getUpdates }) => {
  useEffect(() => {
    getUpdates();
  }, []);
  useEffect(() => {
    getUpdates();
  });
  const storeImages = [
    { src: pic1, alt: 'BPI - BULK MUSCLE' },
    { src: pic2, alt: 'Dymatize Super Mass' },
    { src: pic3, alt: 'Extreme MASS' },
    { src: pic4, alt: 'MusclePharm Combat XL Mass' },
    { src: pic5, alt: 'Advance Anabolic - Massive' },
    { src: pic6, alt: 'NPL Elite Gainer' },
    { src: pic7, alt: 'Original MASS Gainer Protein' }
  ];
  const storeImages1 = [
    { src: pic8, alt: 'Under Armour Drive Shoes' },
    { src: pic9, alt: 'Asics Gel Resolution' },
    { src: pic10, alt: 'Asics Gel Resolution' },
    { src: pic11, alt: 'Nike Air' },
    { src: pic12, alt: 'Nike Athletic Shoes' },
    { src: pic13, alt: 'Nike Training Shoes' },
    { src: pic14, alt: 'Nike Metcon Black - Volt' }
  ];

  return (
    <Fragment>
      <MediaQuery maxDeviceWidth={1024}>
        <MobileNav />
        <MobileStore storeImages={storeImages} storeImages1={storeImages1} />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1280}>
        <div className='Store'>
          <Navbar />
          <BoxStore storeImages={storeImages} storeImages1={storeImages1} />
        </div>
      </MediaQuery>
    </Fragment>
  );
};

const BoxStore = ({ storeImages, storeImages1 }) => (
  <div className='boxStore'>
    <div className='Inside_BoxStore'>
      <p className='font-weight-light'>חנות</p>
      <div className='Flex-content '>
        <Carousel>
          {storeImages.map((item, index) => (
            <Carousel.Item key={index}>
              <img className='d-block w-100' src={item.src} alt={item.alt} />
              <Carousel.Caption>
                <Badge pill variant='dark'>
                  {item.alt}
                </Badge>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <Carousel>
          {storeImages1.map((item, index) => (
            <Carousel.Item key={index}>
              <img className='d-block w-100' src={item.src} alt={item.alt} />
              <Carousel.Caption>
                <Badge pill variant='dark'>
                  {item.alt}
                </Badge>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  </div>
);
const MobileStore = ({ storeImages, storeImages1 }) => (
  <div className='Mobile'>
    <div className='MobileStore'>
      <main className='main'>
        <BoxStore storeImages={storeImages} storeImages1={storeImages1} />
      </main>
    </div>
  </div>
);
const mapStateToProps = state => ({
  get_updates: state.updatesReducer.get_updates
});
export default connect(mapStateToProps, { getUpdates })(Store);
