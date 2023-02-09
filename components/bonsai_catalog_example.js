import React, { useState } from "react";

const bonsaiList = [
  {
    id: 1,
    name: "Fukien Tea",
    species: "Carmona microphylla",
    image: "bonsai_1.jpg",
    height: 20,
    width: 15,
    priceInArs: 2500,
    priceInUSD: 35
  },
  {
    id: 2,
    name: "Japanese Maple",
    species: "Acer palmatum",
    image: "bonsai_2.jpg",
    height: 25,
    width: 18,
    priceInArs: 3000,
    priceInUSD: 42
  },
  {
    id: 3,
    name: "Black Pine",
    species: "Pinus thunbergii",
    image: "bonsai_3.jpg",
    height: 30,
    width: 20,
    priceInArs: 3500,
    priceInUSD: 50
  }
];

function BonsaiCatalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBonsai, setFilteredBonsai] = useState(bonsaiList);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
    setFilteredBonsai(
      bonsaiList.filter(bonsai =>
        bonsai.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearch} />
      <ul>
        {filteredBonsai.map(bonsai => (
          <li key={bonsai.id}>
            <img src={`/images/${bonsai.image}`} alt={bonsai.name} />
            <h3>{bonsai.name}</h3>
            <p>Especie: {bonsai.species}</p>
            <p>Altura: {bonsai.height} cm</p>
            <p>Ancho: {bonsai.width} cm</p>
            {bonsai.priceInArs && (
              <p>Precio en ARS: {bonsai.priceInArs}</p>
            )}
            {bonsai.priceInUSD && (
              <p>Precio en USD: {bonsai.priceInUSD}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BonsaiCatalog;
