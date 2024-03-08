import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/style/style.css";
import { ReviewBox } from "../components/ReviewBox";

export const Reviews = () => {
  const profile_pic1 = require("../assets/images/review-pic/review-profile-pic1.jpg");
  const profile_pic2 = require("../assets/images/review-pic/review-profile-pic2.jpg");
  const profile_pic3 = require("../assets/images/review-pic/review-profile-pic3.jpg");
  const profile_pic4 = require("../assets/images/review-pic/review-profile-pic4.jpg");
  const profile_pic5 = require("../assets/images/review-pic/review-profile-pic5.jpg");

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="flex items-center" id="reviews">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <div className="slider">
            <Slider {...settings}>
              <ReviewBox
                photo={profile_pic1}
                name="May"
                rate="★★★★★ - excellent"
                review="The salted beef bagel and coffee here are fantastic! Definitely recommend trying it.
                The staff is kind and helpful in deciding whats good! They even let you taste their various cakes as well."
              />
              <ReviewBox
                photo={profile_pic2}
                name="Lee"
                rate="★★★★★ - excellent"
                review="My sister and I had coffee and a cookie. Service was amazing, the owners were really friendly (it made our day). They have a great variety of coffee and we can’t wait to try other things and their famous honey cake."
              />
              <ReviewBox
                photo={profile_pic3}
                name="Katrin"
                rate="★★★★★ - excellent"
                review="It’s the first time I visited them in person I’ve only ordered through Uber eats before. Well it didn’t disappoint. Everything was perfect."
              />
              <ReviewBox
                photo={profile_pic4}
                name="Matthew"
                rate="★★★★★ - excellent"
                review="Gorgeous little cafe with downstairs seating (perfect for winter months) as well as an outdoor terrace. These guys know how to make good coffee. I'll definitely be going back :)"
              />
              <ReviewBox
                photo={profile_pic5}
                name="Alex"
                rate="★★★★★ - excellent"
                review="Just the nicest experience grabbing a hot drink here after getting caught in the rain - the staff were beyond friendly and couldn't be more accommodating. Really nice vibe and they clearly take a lot of pride in their food, drink and service. Will def be back!"
              />
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
