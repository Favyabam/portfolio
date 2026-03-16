import fav from "./fav.png";
import email from "./email.png";
import X from "./X.png";
import Whatsapp from "./Whatsapp.png";

import Chow from "./Chownownow.jpg"
import suits1 from "./Davinci suits -1.jpg"
import suits2 from "./Davinci suits-2.jpg"
import flower1 from "./Flowerstore-1.jpg"
import flower2 from "./Flowerstore-2.jpg"
import todo from "./Todo.jpg"
import weather from "./weather.jpg"

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
    weather,
    todo,
};

export const works =[
    {
    id: 1,
    title: "Chownownow",
    description:
      "An E-commerce site created for sale of fastfood fully responsive",
    tech: ["React", "Tailwind CSS"],
    link: "https://chow-now-now.vercel.app",
    images: [Chow],
  },
  
  {
    id: 2,
    title: "Hotel Reservation ",
    description:
      "Hotel reservation and booking made easy with Davinci. Booking done from the comfort of your home.",
    tech: ["React", "Tailwind CSS"],
    link: "https://da-vinci-suite.vercel.app",
    images: [suits1, suits2],
  },

  {
    id: 3,
    title:"Flower store",
    description: "E-commerce store used for the sale of bueatiful flowers that can be used for home decor or sent to impress someone",
    tech: ["React", "Tailwind CSS"],
    link: "https://styl-flowers.vercel.app/",
    images: [flower1, flower2],
  },

  {
    id: 4,
    title: "To-do List",
    description: "Keep good tabs with all your day-to-day activities without missing anything with this",
    tech: ["React", "Tailwind CSS"],
    link: "https://todo-application-f9m28iko9-favyabams-projects.vercel.app/",
    images: [todo],
  },

  {
    id: 5,
    title: "Weather App",
    description: "weather on the go. Check any city anywhere in the world and get an accurate state of the weather at that place to keep you safe",
    tech: ["React", "Tailwind CSS"],
    link: "https://weather-two-alpha-50.vercel.app/",
    images: [weather],
  },
]

