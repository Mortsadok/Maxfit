import React, { Component } from "react";
import homeimg from "../../img/homeimg.jpg";
import brushstorke from "../../components/Home/brushstorke.png";
import pinkbrush from "../../components/Home/pinkbrush.png";
import pic1 from "../../components/Home/pic1.jpg";
import pic2 from "../../components/Home/pic2.jpg";
import pic3 from "../../components/Home/pic3.jpg";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Box />

        <div className="Center">
          <p>
            <div className="Bigtxt">
              <img className="Brush" src={brushstorke} alt="Brush" />
              .One Life. Live it well
            </div>
          </p>

          <h2>
            אנחנו בקבוצת מקס - פיט מאמינים שפעילות מהנה יותר, היא גם יעילה יותר
            ותורמת לחיים מאושרים יותר.
          </h2>
        </div>
        <Boxflex />

        <p>
          <div className="Bigtxt">
            <div className="Center">
              <img className="pBrush" src={pinkbrush} alt="Brush" />
              על איכות חיים לא מתפשרים!
            </div>
          </div>
        </p>

        <div className="Center">
          <h2>
            האידיאולוגיה העיקרית בה דוגלת הקבוצה, מלבד כמובן קיום וקידום של אורח
            חיים בריא, תזונה נכונה, פעילות ספורטיבית ושגרה פעילה ומהנה, היא
            עשייה של כל זאת בסטנדרטים גבוהים ובלתי מתפשרים של איכות – מרמת הציוד
            הטכני, דרך רמת המאמנים האישיים המקצועיים בשלל התחומים ועד למגוון רחב
            של פעילויות, סדנאות וחוגים שאנו מציעים לחברי המועדון שלנו.
          </h2>
        </div>
      </div>
    );
  }
}

const Box = () => (
  <div className="Box-flex">
    <div className="box">
      <img className="img-main" src={homeimg} alt="HomeImage" />
    </div>
  </div>
);

const Boxflex = () => (
  <div className="flex-container">
    <div className="marg5">
      <img className="img-main" src={pic1} alt="Flex1" />
    </div>
    <div className="marg5">
      <img className="img-main" src={pic2} alt="Flex2" />
    </div>
    <div className="marg5">
      <img className="img-main" src={pic3} alt="Flex3" />
    </div>
  </div>
);

export default Home;
