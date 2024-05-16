import { Splide, SplideSlide } from "@splidejs/react-splide";

import { Perfil } from "../perfil/Perfil";

import perfilPlaceholder from "../../assets/michiPerfil.jpg";
import "@splidejs/react-splide/css";
import "./carrousel.css";

export const Carrousel = () => {
  return (
    <Splide
      aria-label="Carrousel de historias"
      options={{
        rewind: false,
        width: 640,
        gap: "1rem",
        pagination: false,
        perPage: 6,
        perMove: 1,
      }}
    >
      <SplideSlide>
        <Perfil
          type="historia"
          seen={false}
          userName="Pepito"
          profilePic={perfilPlaceholder}
        />
      </SplideSlide>
      <SplideSlide>
        <Perfil
          type="historia"
          seen={false}
          userName="Paco"
          profilePic={perfilPlaceholder}
        />
      </SplideSlide>

      <SplideSlide>
        <Perfil
          type="historia"
          seen={false}
          userName="Pepito"
          profilePic={perfilPlaceholder}
        />
      </SplideSlide>
      <SplideSlide>
        <Perfil
          type="historia"
          seen={false}
          userName="Paco"
          profilePic={perfilPlaceholder}
        />
      </SplideSlide>
      <SplideSlide>
        <Perfil
          type="historia"
          seen={true}
          userName="Alfonso"
          profilePic={perfilPlaceholder}
        />
      </SplideSlide>

      <SplideSlide>
        <Perfil
          type="historia"
          seen={true}
          userName="Manuel"
          profilePic={perfilPlaceholder}
        />
      </SplideSlide>

      <SplideSlide>
        <Perfil
          type="historia"
          seen={true}
          userName="Alfonso"
          profilePic={perfilPlaceholder}
        />
      </SplideSlide>

      <SplideSlide>
        <Perfil
          type="historia"
          seen={true}
          userName="Manuel"
          profilePic={perfilPlaceholder}
        />
      </SplideSlide>
    </Splide>
  );
};
