import React from "react";

const Info = ({ info }) => {
  if (Object.keys(info).length === 0) return null;

  const { strArtistThumb, strGenre, strBiographyES } = info;

  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-weight-bold">
        Informacion Artista
      </div>
      <div className="card-body">
        <img src={strArtistThumb} alt="Logo Artista" />
        <div className="card-text"> Género: {strGenre}</div>
        <h2 className="card-text">Biografia:</h2>
        <div className="card-text"> Género: {strBiographyES}</div>
      </div>
    </div>
  );
};

export default Info;
