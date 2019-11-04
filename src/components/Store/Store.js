import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import "./Store.css";
import pic1 from "../../img/Bulk Muscle.png";
import pic2 from "../../img/Dymatize Super Mass Gainer.png";
import pic3 from "../../img/Extreme MASS.png";
import pic4 from "../../img/MusclePharm Combat XL Mass Gainer.png";

class Store extends Component {
  render() {
    return (
      <div className="Store">
        <BoxStore />
      </div>
    );
  }
}

const BoxStore = props => (
  <div className="boxStore">
    <div className="Inside_BoxStore">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={pic1} alt="First slide" />
          <Carousel.Caption>
            <Badge pill variant="dark">
              BPI - BULK MUSCLE
            </Badge>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={pic2} alt="Third slide" />
          <Carousel.Caption>
            <Badge pill variant="dark">
              Dymatize Super Mass Gainer
            </Badge>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={pic3} alt="Third slide" />

          <Carousel.Caption>
            <Badge pill variant="dark">
              Extreme MASS
            </Badge>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={pic4} alt="Third slide" />

          <Carousel.Caption>
            <Badge pill variant="dark">
              MusclePharm Combat XL Mass
            </Badge>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={pic1} alt="First slide" />
          <Carousel.Caption>
            <Badge pill variant="dark">
              BPI - BULK Muscle
            </Badge>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={pic2} alt="Third slide" />
          <Carousel.Caption>
            <Badge pill variant="dark">
              Dymatize Super Mass Gainer
            </Badge>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={pic3} alt="Third slide" />

          <Carousel.Caption>
            <Badge pill variant="dark">
              Extreme MASS
            </Badge>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={pic4} alt="Third slide" />

          <Carousel.Caption>
            <Badge pill variant="dark">
              MusclePharm Combat XL Mass
            </Badge>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  </div>
);

export default Store;
