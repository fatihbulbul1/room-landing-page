import { useState } from "react";
import img1 from "./images/desktop-image-hero-1.jpg";
import img2 from "./images/desktop-image-hero-2.jpg";
import img3 from "./images/desktop-image-hero-3.jpg";
import imgfooter1 from "./images/image-about-dark.jpg";
import imgfooter2 from "./images/image-about-light.jpg";
function App() {
  const items = [
    {
      img: img1,
      h1: "Discover innovative ways to decorate",
      p: `We provide unmatched quality, comfort, and style for property owners across the country. 
      Our experts combine form and function in bringing your vision to life. Create a room in your 
      own style with our collection and make your property a reflection of you and what you love.`,
    },
    {
      img: img2,
      h1: "We are available all across the globe",
      p: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
      Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
      store locator. Any questions? Don't hesitate to contact us today.`,
    },
    {
      img: img3,
      h1: "Manufactured with the best materials",
      p: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
      to ensure that every product is made as perfect and as consistent as possible. With three decades of 
      experience in this industry, we understand what customers want for their home and office.`,
    },
  ];
  const [turn, setTurn] = useState(0);
  const handleNavigate = (num: number) => {
    let newIndex = turn + num;
    if (newIndex === 3) newIndex = 0;
    else if (newIndex === -1) newIndex = 2;
    setTurn(newIndex);
  };
  return (
    <div style={{ width: "100% !important" }} className="App h-100v">
      <div
        style={{ width: "100% !important" }}
        className="main-container flex flex-col w-full"
      >
        <div
          style={{ width: "100%", height: "650px" }}
          className="flex main-header relative"
        >
          <nav className="absolute top-10 left-12">
            <div className="text-white flex items-center justify-center gap-10">
              <img className="logo mr-6" src="../images/logo.svg" alt="" />
              <p className="font-semibold">home</p>
              <p className="font-semibold">shop</p>
              <p className="font-semibold">about</p>
              <p className="font-semibold">contact</p>
            </div>
          </nav>
          <img style={{ height: "650px" }} src={items[turn].img} alt="" />
          <div
            style={{ width: "100%" }}
            className="flex justify-center relative items-center"
          >
            <div className="text-container flex flex-col gap-5">
              <h1 className="text-5xl font-extrabold max-w-md">
                {items[turn].h1}
              </h1>
              <p className="text-gray-400 max-w-md">{items[turn].p}</p>
              <div className="flex gap-3 items-center shop-now">
                <p
                  style={{ letterSpacing: "0.5em" }}
                  className=" text-black uppercase"
                >
                  Shop now
                </p>
                <svg
                  style={{ height: "50px" }}
                  aria-hidden="true"
                  fill="none"
                  stroke="black"
                  stroke-width="0.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="nav-btns absolute left-0 bottom-0 flex">
                <div
                  onClick={() => handleNavigate(-1)}
                  className="left-btn p-3 bg-black"
                >
                  <svg
                    aria-hidden="true"
                    fill="none"
                    stroke="white"
                    stroke-width="0.6"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <div
                  onClick={() => handleNavigate(1)}
                  className="right-btn p-3 bg-black"
                >
                  <svg
                    aria-hidden="true"
                    fill="none"
                    stroke="white"
                    stroke-width="0.6"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-footer flex">
          <img style={{ height: "277px" }} src={imgfooter1} alt="" />
          <div
            style={{ flex: 1 }}
            className="about-div flex flex-col justify-center"
          >
            <div className="about-container mx-auto flex flex-col gap-5">
              <h1
                style={{ letterSpacing: "0.2em" }}
                className="text-2xl uppercase font-bold"
              >
                About our furniture
              </h1>
              <p className="text-gray-500 max-w-lg">
                Our multifunctional collection blends design and function to
                suit your individual taste. Make each room unique, or pick a
                cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from
                traditional to contemporary styles or anything in between.
                Product specialists are available to help you create your dream
                space.
              </p>
            </div>
          </div>
          <img src={imgfooter2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
