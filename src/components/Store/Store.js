import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import "./Store.css";
import pic1 from "../../img/Bulk Muscle.png";
import pic2 from "../../img/Dymatize Super Mass Gainer.png";
import pic3 from "../../img/Extreme MASS.png";
import pic4 from "../../img/MusclePharm Combat XL Mass Gainer.png";
import pic5 from "../../img/Advance Anabolic - Massive Gainer.png";
import pic6 from "../../img/NPL Elite Gainer.png";
import pic7 from "../../img/Original MASS Gainer Protein.png";
import pic8 from "../../img/Under Armour Drive Shoes.png";
import pic9 from "../../img/Under Armour Running Shoes.png";
import pic10 from "../../img/Asics Gel Resolution.png";
import pic11 from "../../img/Nike Air.png";
import pic12 from "../../img/Nike Athletic Shoes.png";
import pic13 from "../../img/Nike Training Shoes.png";
import pic14 from "../../img/Nike Metcon Black-Volt.png";

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
          <img className="d-block w-100" src={pic1} alt="BPI - BULK MUSCLE" />
          <Carousel.Caption>
            <Badge pill variant="dark">
              BPI - BULK MUSCLE
            </Badge>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={pic2} alt="Dymatize Super Mass" />
          <Carousel.Caption>
            <Badge pill variant="dark">
              Dymatize Super Mass
            </Badge>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={pic3} alt="Extreme MASS" />
          <Carousel.Caption>
            <Badge pill variant="dark">
              Extreme MASS
            </Badge>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic4}
            alt="MusclePharm Combat XL Mass"
          />
          <Carousel.Caption>
            <Badge pill variant="dark">
              MusclePharm Combat XL Mass
            </Badge>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic5}
            alt="Advance Anabolic - Massive"
          />
          <Carousel.Caption>
            <Badge pill variant="dark">
              Advance Anabolic - Massive
            </Badge>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={pic6} alt="NPL Elite Gainer" />
          <Carousel.Caption>
            <Badge pill variant="dark">
              NPL Elite Gainer
            </Badge>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic7}
            alt="Original MASS Gainer Protein"
          />
          <Carousel.Caption>
            <Badge pill variant="dark">
              Original MASS Gainer Protein
            </Badge>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic8}
            alt="Under Armour Drive Shoes"
          />
          <Carousel.Caption>
            <Badge pill variant="dark">
              Under Armour Drive Shoes
            </Badge>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic9}
            alt="Under Armour Running Shoes"
          />
          <Carousel.Caption>
            <Badge pill variant="dark">
              Under Armour Running Shoes
            </Badge>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic10}
            alt="Asics Gel Resolution"
          />
          <Carousel.Caption>
            <Badge pill variant="dark">
              Asics Gel Resolution
            </Badge>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={pic11} alt="Nike Air" />
          <Carousel.Caption>
            <Badge pill variant="dark">
              Nike Air
            </Badge>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic12}
            alt="Nike Athletic Shoes"
          />
          <Carousel.Caption>
            <Badge pill variant="dark">
              Nike Athletic Shoes
            </Badge>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic13}
            alt="Nike Training Shoes"
          />
          <Carousel.Caption>
            <Badge pill variant="dark">
              Nike Training Shoes
            </Badge>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic14}
            alt="Nike Metcon Black-Volt"
          />
          <Carousel.Caption>
            <Badge pill variant="dark">
              Nike Metcon Black - Volt
            </Badge>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  </div>
);

export default Store;
