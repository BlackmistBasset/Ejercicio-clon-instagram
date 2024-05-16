import "./perfil.css";

export const Perfil = ({ type, seen, userName, profilePic }) => {
  return (
    <>
      <div
        className={`perfil__contenedor ${type}`}
        onClick={() => console.log("Click")}
      >
        <div
          className="perfil__img__contenedor"
          style={{
            borderColor: seen ? "gray" : "violet",
            borderWidth: "4px",
            borderStyle: "solid",
          }}
        >
          <img src={profilePic} alt="" className="perfil__img" />
        </div>
        <p className="perfil__nombre_usuario">{userName}</p>
      </div>
    </>
  );
};
