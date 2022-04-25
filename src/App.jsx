import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductsPgs from "./components/ProductsPgs/ProductsPgs";
import Nav from "./components/Shared/Nav/Nav";
import Footer from "./components/Shared/Footer/Footer";
import Info from "./components/Shared/Info/Info";
// #####################
import headphone1 from "./assets/shared/desktop/image-xx99-mark-two-headphones.jpg";
import headphone2 from "./assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import headphone3 from "./assets/shared/desktop/image-xx59-headphones.jpg";
import smHeadphone1 from "./assets/shared/mobile/image-xx99-mark-two-headphones.jpg";
import smHeadphone2 from "./assets/shared/mobile/image-xx99-mark-one-headphones.jpg";
import smHeadphone3 from "./assets/shared/mobile/image-xx59-headphones.jpg";

// #####################
import speaker1 from "./assets/shared/desktop/image-zx9-speaker.jpg";
import speaker2 from "./assets/shared/desktop/image-zx7-speaker.jpg";
import smSpeaker1 from "./assets/shared/mobile/image-zx9-speaker.jpg";
import smSpeaker2 from "./assets/shared/mobile/image-zx7-speaker.jpg";
// #####################
import earphone from "./assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import smEarphone from "./assets/product-yx1-earphones/mobile/image-category-page-preview.jpg";

function App() {
  const Products = {
    headphones: [
      {
        name: "XX99 MARK II HEADPHONES",
        new: true,
        img: headphone1,
        smImg: smHeadphone1,
        flexDirection: "row",
        pragraph:
          "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      },
      {
        name: "XX99 MARK I HEADPHONES",
        new: false,
        img: headphone2,
        smImg: smHeadphone2,
        flexDirection: "row-reverse",

        pragraph:
          "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      },
      {
        name: "XX59 Headphones",
        new: false,
        img: headphone3,
        smImg: smHeadphone3,
        flexDirection: "row",
        pragraph:
          "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
        worth: "$2,999",
        featurs: [
          "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
          "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
        ],
        inBox: [
          "Headphone Unit",
          "Replacement Earcups",
          "User Manual",
          "3.5mm 5m Audio Cable",
          "Travel Bag",
        ],
      },
    ],
    speakers: [
      {
        name: "ZX9 SPEAKER",
        new: true,
        img: speaker1,
        smImg: smSpeaker1,
        flexDirection: "row",
        pragraph:
          "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      },
      {
        name: "ZX7 SPEAKER",
        new: false,
        img: speaker2,
        smImg: smSpeaker2,
        flexDirection: "row-reverse",
        pragraph:
          "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      },
    ],
    earphones: [
      {
        name: "YX1 WIRELESS EARPHONES",
        new: true,
        img: earphone,
        smImg: smEarphone,
        flexDirection: "row",
        pragraph:
          "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      },
    ],
  };
  return (
    <main>
      <Router>
        <Nav />
        <Routes>
          <Route path="/Audiophile-ws" element={<Home />} />
          <Route
            path="/Audiophile-ws/headphones"
            element={<ProductsPgs products={Products.headphones} />}
          />
          <Route
            path="/Audiophile-ws/speakers"
            element={<ProductsPgs products={Products.speakers} />}
          />
          <Route
            path="/Audiophile-ws/earphones"
            element={<ProductsPgs products={Products.earphones} />}
          />
        </Routes>
        <Info />
        <Footer />
      </Router>
    </main>
  );
}

export default App;
