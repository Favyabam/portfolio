import fav from "./fav.png";
import email from "./email.png";
import X from "./X.png";
import Whatsapp from "./Whatsapp.png";

import Chow from "./Chownownow.jpg"
import suits1 from "./Davinci suits -1.jpg"
import suits2 from "./Davinci suits-2.jpg"
import flower1 from "./Flowerstore-1.jpg"
import flower2 from "./Flowerstore-2.jpg"

export const assets = {
    fav,
    email,
    X,
    Whatsapp,
    Chow,
    suits1,
    suits2,
    flower1,
    flower2,
};

export const works =[
    {
    id: 1,
    title: "Chownownow",
    description:
      "An E-commerce site created for sale of fastfood fully responsive",
    tech: ["React", "Tailwind"],
    link: "https://chow-now-now.vercel.app",
    images: [Chow],
  },
  
  {
    id: 2,
    title: "Hotel Reservation ",
    description:
      "Hotel reservation and booking made easy with Davinci. Booking done from the comfort of your home.",
    tech: ["React", "Tailwind"],
    link: "https://da-vinci-suite.vercel.app",
    images: [suits1, suits2],
  },
]

