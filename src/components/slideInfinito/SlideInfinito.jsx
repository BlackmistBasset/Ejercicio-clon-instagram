import { ImgSlide } from "../imgSlide/ImgSlide";

import cabalgata1 from "../../assets/cabalgata1.jpg";
import cabalgata2 from "../../assets/cabalgata2.jpg";
import cabalgata3 from "../../assets/cabalgata3.jpg";
import cabalgata4 from "../../assets/cabalgata4.jpg";
import cabalgata5 from "../../assets/cabalgata5.jpg";
import cabalgata6 from "../../assets/cabalgata6.jpg";

import style from "./slideInfinito.module.css";
import style2 from "./test2.module.css";

export const SlideInfinito = () => {
  return (
    <div className={`${style.container}`}>
      <ul className={`${style.list} list1`}>
        <ImgSlide imgUrl={cabalgata1} />
        <ImgSlide imgUrl={cabalgata2} />
        <ImgSlide imgUrl={cabalgata3} />
        <ImgSlide imgUrl={cabalgata4} />
        <ImgSlide imgUrl={cabalgata5} />
        <ImgSlide imgUrl={cabalgata6} />
      </ul>

      <ul className={`${style.list} list2`}>
        <ImgSlide imgUrl={cabalgata1} />
        <ImgSlide imgUrl={cabalgata2} />
        <ImgSlide imgUrl={cabalgata3} />
        <ImgSlide imgUrl={cabalgata4} />
        <ImgSlide imgUrl={cabalgata5} />
        <ImgSlide imgUrl={cabalgata6} />
      </ul>
    </div>
  );
};
