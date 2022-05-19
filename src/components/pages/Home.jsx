/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import AnimalCard from '../animalCard/animalCard';
import './Home.css';
import { getAnimal } from '../../redux/animals/animal';

const HomePage = () => {
  const navigate = useNavigate();
  const animalArray = useSelector((state) => state.animal.animalArray);
  const [animal, setAnimal] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!animalArray.length) dispatch(getAnimal());
    setAnimal(animalArray);
  }, [animalArray]);

  const handleSearch = (event) => {
    event.preventDefault();
    let val = event.target.value;
    if (val.length > 0) {val = val.toLowercase();
      const searchRes = animalArray.filter((arr) => arr.name.toLowercase().includes(val));
      setAnimal(searchRes);
    } else {
      setAnimal(animalArray);
    }
  };
  console.log(animalArray);
  return (
    <>
      <header className="header">
        <Navbar title="Respect For Wildlife" />
        <img className="home-img" src="images/Pearl.png" alt="Img" />
        <div className="image-cover" />
      </header>
      <div className="search-sec">
        <input className="input" type="text" palceholder="Search Animal..." onChange={handleSearch} />
      </div>
      <main className="main">
        {animal.map((animal) => (
          <AnimalCard
            key={animal.id}
            name={animal.name}
            img={animal.img}
            weight={animal.maxWeight}
            pos={animal.pos}
            onClick={() => {
              navigate('/details', { state: { animal } });
            }}
          />
        ))}
      </main>
    </>
  );
};

export default HomePage;
