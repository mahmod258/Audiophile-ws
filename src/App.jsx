import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext, useState } from "react";
import Home from "./components/Home/Home";
import ProductsPgs from "./components/ProductsPgs/ProductsPgs";
import Nav from "./components/Shared/Nav/Nav";
import Footer from "./components/Shared/Footer/Footer";
import Info from "./components/Shared/Info/Info";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/Conetxt/Cart";
import { ContextFilter } from "./components/Conetxt/Filter";
import Checkout from "./components/Checkout/Checkout";

// #######headphones#######
import headphone1 from "./assets/shared/desktop/image-xx99-mark-two-headphones.jpg";
import headphone2 from "./assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import headphone3 from "./assets/shared/desktop/image-xx59-headphones.jpg";
import smHeadphone1 from "./assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import smHeadphone2 from "./assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import smHeadphone3 from "./assets/product-xx59-headphones/tablet/image-category-page-preview.jpg";
import tbHeadphone1 from "./assets/product-xx99-mark-two-headphones/tablet/image-product.jpg";
import tbHeadphone2 from "./assets/product-xx99-mark-one-headphones/tablet/image-product.jpg";
import tbHeadphone3 from "./assets/product-xx59-headphones/tablet/image-product.jpg";
import imgsHp11 from "../../audiophile-ws/src/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import imgsHp12 from "../../audiophile-ws/src/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import imgsHp13 from "../../audiophile-ws/src/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";
import imgsHp21 from "./assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg";
import imgsHp22 from "./assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg";
import imgsHp23 from "./assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg";
import imgsHp31 from "./assets/product-xx59-headphones/desktop/image-gallery-1.jpg";
import imgsHp32 from "./assets/product-xx59-headphones/desktop/image-gallery-2.jpg";
import imgsHp33 from "./assets/product-xx59-headphones/desktop/image-gallery-3.jpg";
// #######speakers#######
import speaker1 from "./assets/shared/desktop/image-zx9-speaker.jpg";
import speaker2 from "./assets/shared/desktop/image-zx7-speaker.jpg";
import smSpeaker1 from "./assets/product-zx9-speaker/tablet/image-category-page-preview.jpg";
import smSpeaker2 from "./assets/product-zx7-speaker/tablet/image-category-page-preview.jpg";
import tbSpeaker1 from "./assets/product-zx7-speaker/tablet/image-product.jpg";
import tbSpeaker2 from "./assets/product-zx9-speaker/tablet/image-product.jpg";
import imgsSp11 from "./assets/product-zx9-speaker/desktop/image-gallery-1.jpg";
import imgsSp12 from "./assets/product-zx9-speaker/desktop/image-gallery-2.jpg";
import imgsSp13 from "./assets/product-zx9-speaker/desktop/image-gallery-3.jpg";
import imgsSp21 from "./assets/product-zx7-speaker/desktop/image-gallery-1.jpg";
import imgsSp22 from "./assets/product-zx7-speaker/desktop/image-gallery-2.jpg";
import imgsSp23 from "./assets/product-zx7-speaker/desktop/image-gallery-3.jpg";
// #######earphones#######
import earphone1 from "./assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import smEarphone1 from "./assets/product-yx1-earphones/tablet/image-category-page-preview.jpg";
import tbEarphone1 from "./assets/product-yx1-earphones/tablet/image-product.jpg";
import imgsEp11 from "./assets/product-yx1-earphones/desktop/image-gallery-1.jpg";
import imgsEp12 from "./assets/product-yx1-earphones/desktop/image-gallery-2.jpg";
import imgsEp13 from "./assets/product-yx1-earphones/desktop/image-gallery-3.jpg";
// #######border#######
function App() {
  const products = [
    [
      {
        id: 0,
        name: "XX99 MARK II HEADPHONES",
        smName: "XX99 MARK II",
        title: (
          <h1 className="fw-bold title">
            <span>XX99 MARK II</span>
            <span>HEADPHONES</span>
          </h1>
        ),
        new: true,
        img: headphone1,
        tbImg: tbHeadphone1,
        smImg: smHeadphone1,
        imgs: [imgsHp11, imgsHp12, imgsHp13],
        flexDirection: "row",
        path: "/Audiophile-ws/headphones/XX99-MARK-II-HEADPHONES",
        pragraph:
          "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
        worth: "$2,999",
        featurs: [
          "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
          "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
        ],
        inTheBox: [
          "1xHeadphone Unit",
          "2xReplacement Earcups",
          "1xUser Manual",
          "1x3.5mm 5m Audio Cable",
          "1xTravel Bag",
        ],
      },
      {
        id: 1,
        name: "XX99 MARK I HEADPHONES",
        smName: "XX99 MARK I",
        title: (
          <h1 className="fw-bold title">
            <span>XX99 MARK I</span>
            <span>HEADPHONES</span>
          </h1>
        ),

        new: false,
        img: headphone2,
        tbImg: tbHeadphone2,
        smImg: smHeadphone2,
        imgs: [imgsHp21, imgsHp22, imgsHp23],
        flexDirection: "row-reverse",
        path: "/Audiophile-ws/headphones/XX99-MARK-I-HEADPHONES",
        pragraph:
          "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
        worth: "$1,750",
        featurs: [
          "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.",
          "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
        ],
        inTheBox: [
          "1xHeadphone Unit",
          "2xReplacement Earcups",
          "1xUser Manual",
          "1x3.5mm 5m Audio Cable",
        ],
      },
      {
        id: 2,
        name: "XX59 Headphones",
        smName: "XX59",
        title: (
          <h1 className="fw-bold title">
            <span>XX59</span>
            <span>HEADPHONES</span>
          </h1>
        ),

        new: false,
        img: headphone3,
        tbImg: tbHeadphone3,
        smImg: smHeadphone3,
        imgs: [imgsHp31, imgsHp32, imgsHp33],
        flexDirection: "row",
        path: "/Audiophile-ws/headphones/XX59-Headphones",
        pragraph:
          "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
        worth: "$ 899",
        featurs: [
          "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
          "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
        ],
        inTheBox: [
          "1xHeadphone Unit",
          "2xReplacement Earcups",
          "1xUser Manual",
          "1x3.5mm 5m Audio Cable",
        ],
      },
    ],
    [
      {
        id: 3,
        name: "ZX9 SPEAKER",
        smName: "ZX9",
        title: (
          <h1 className="fw-bold title">
            <span>ZX9</span>
            <span>SPEAKER</span>
          </h1>
        ),

        new: true,
        img: speaker1,
        tbImg: tbSpeaker1,
        smImg: smSpeaker1,
        imgs: [imgsSp11, imgsSp12, imgsSp13],
        flexDirection: "row",
        path: "/Audiophile-ws/speakers/ZX9-SPEAKER",
        pragraph:
          "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
        worth: "$ 4,500",
        featurs: [
          "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
          "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
        ],
        inTheBox: [
          "2xSpeaker Unit",
          "2xSpeaker Cloth Panel",
          "1xUser Manual",
          "1x3.5mm 10m Audio Cable",
          "1x10m Optical Cable",
        ],
      },
      {
        id: 4,
        name: "ZX7 SPEAKER",
        smName: null,
        title: (
          <h1 className="fw-bold title">
            <span>ZX7</span>
            <span>SPEAKER</span>
          </h1>
        ),
        new: false,
        img: speaker2,
        tbImg: tbSpeaker2,
        smImg: smSpeaker2,
        imgs: [imgsSp21, imgsSp22, imgsSp23],
        flexDirection: "row-reverse",
        path: "/Audiophile-ws/speakers/ZX7-SPEAKER",
        pragraph:
          "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
        worth: "$ 3,500",
        featurs: [
          "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.",
          "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
        ],
        inTheBox: [
          "2xSpeaker Unit",
          "2xSpeaker Cloth Panel",
          "1xUser Manual",
          "1x3.5mm 7.5m Audio Cable",
          "1x7.5m Optical Cable",
        ],
      },
    ],
    [
      {
        id: 5,
        name: "YX1 WIRELESS EARPHONES",
        smName: "YX1",
        title: (
          <h1 className="fw-bold title">
            <span>YX1 WIRELESS</span>
            <span>EARPHONES</span>
          </h1>
        ),
        new: true,
        img: earphone1,
        tbImg: tbSpeaker2,
        smImg: smEarphone1,
        imgs: [imgsEp11, imgsEp12, imgsEp13],
        flexDirection: "row",
        path: "/Audiophile-ws/earphones/YX1-WIRELESS-EARPHONES",
        pragraph:
          "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
        worth: "$ 599",
        featurs: [
          "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.",
          "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
        ],
        inTheBox: [
          "2xEarphone Unit",
          "6xMulti-size Earplugs",
          "1xUser Manual",
          "1xUSB-C Charging Cable",
          "1xTravel Pouch",
        ],
      },
    ],
  ];
  const [filter] = useContext(ContextFilter);
  console.log(filter);
  return (
    <main
      style={{
        height: filter[0],
        overflow: filter[1],
      }}
    >
      <Cart>
        <Router>
          <Routes>
            <Route path="/Audiophile-ws" element={<Home />} />
            {products.map((group, i) => {
              let name = group[0].name
                .split(" ")
                [group[0].name.split(" ").length - 1].toLowerCase();
              return (
                <Route
                  key={i}
                  path={"/Audiophile-ws/" + name}
                  element={<ProductsPgs product={products[i]} obj={products} />}
                />
              );
            })}
            {products.map((group) => {
              return group.map((pro, i) => {
                return (
                  <Route
                    key={Math.random()}
                    path={pro.path}
                    element={
                      <ProductDetails product={pro} products={products} />
                    }
                  />
                );
              });
            })}
            <Route path="/Audiophile-ws/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </Router>
      </Cart>
    </main>
  );
}

export default App;
