import style from "./imgSlide.module.css";

export const ImgSlide = ({ imgUrl }) => {
  return (
    <li className={style.slide__item}>
      <img src={imgUrl} alt="Imagen cabalgata" className={style.slide__img} />
    </li>
  );
};
