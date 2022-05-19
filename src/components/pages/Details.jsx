import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const DetailsPage = () => {
  const { state } = useLocation();
  const { animal } = state;

  return (
    <>
      <header>
        <Navbar title={animal.name} back />
        <img className="header-img" src={animal.img} alt={animal.name} />
      </header>
      <main>
        <ul className="facts">
          <li>
            <span className="factName">English name</span>
            <small className="factProp">{animal.name}</small>
          </li>
          <li>
            <span className="factName">Latin name</span>
            <small className="factProp">{animal.sciName}</small>
          </li>
          <li>
            <span className="factName">animal class</span>
            <small className="factProp">{animal.group}</small>
          </li>
          <li>
            <span className="factName">Active time</span>
            <small className="factProp">{animal.active}</small>
          </li>
          <li>
            <span className="factName">Maximum length</span>
            <span className="factProp">{`${animal.maxLength}m`}</span>
          </li>
          <li>
            <span className="factName">Min length</span>
            <span className="factProp">{`${animal.minLength}m`}</span>
          </li>
          <li>
            <span className="factName">Maximum Weight</span>
            <span className="factProp">{`${animal.manLength}`}</span>
          </li>
          <li>
            <span className="factName">Minimum weight</span>
            <span className="factProp">{`${animal.minLength}`}</span>
          </li>
          <li>
            <span className="factName">Habitat</span>
            <small className="factProp">{`${animal.habitat}`}</small>
          </li>
          <li>
            <span className="factName">Diet</span>
            <small className="factProp diet" title={animal.diet}>{animal.diet}</small>
          </li>
          <li>
            <span className="factName">Lifespan</span>
            <small className="factProp">{`${animal.lifespan} years`}</small>
          </li>
          <li>
            <span className="factName">Location</span>
            <small className="factProp">{animal.geo}</small>
          </li>
        </ul>
      </main>
    </>
  );
};

export default DetailsPage;
