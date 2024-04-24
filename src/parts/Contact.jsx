import "../assets/style/style.css";

export const Contact = () => {
  const mail = require("../assets/images/svg/bx-envelope.svg").default;
  const instagram = require("../assets/images/svg/bxl-instagram.svg").default;
  const facebook = require("../assets/images/svg/bxl-facebook.svg").default;
  const tiktok = require("../assets/images/svg/bxl-tiktok.svg").default;

  return (
    <footer>
      <section className="flex items-center bg-[#B0A695]" id="contact">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="max-ch rounded-full border bg-white p-32">
              <h3 className="mb-4 text-3xl font-semibold text-center font-caveat">Contact Us</h3>
              <div className="mb-4 flex gap-8">
                <ol className="flex flex-col gap-4 items-center">
                  <li className="flex gap-2">
                    <a href="##" className="flex gap-2">
                      {" "}
                      <img src={mail} alt="mail" /> coffee@thecoffeehouse.com
                    </a>
                  </li>
                  <li className="flex gap-2">
                    <a href="##" className="flex gap-2">
                      <img src={facebook} alt="facebook" />
                      @thecoffeehouse
                    </a>
                  </li>
                  <li className="flex gap-2">
                    <a href="##" className="flex gap-2">
                      <img src={instagram} alt="instagram" />
                      @thecoffeehouse
                    </a>
                  </li>
                  <li className="flex gap-2">
                    <a href="##" className="flex gap-2">
                      <img src={tiktok} alt="tiktok" />
                      @thecoffeehouse
                    </a>
                  </li>
                  <li className="flex gap-2">
                    ©{new Date().getFullYear()} All right reserved{" "}
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
