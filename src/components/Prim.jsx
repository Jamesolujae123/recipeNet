import React from "react";
import "./Prim.css";
import jollof from "../assets/Jollof.jpg";
import { useNavigate } from "react-router-dom";
import "./Prime.css";
import { TbGrillSpatula } from "react-icons/tb";
import FishRoll from "../assets/Fishroll.jpg";
import Meatpie from "../assets/Meatpie.jpg";
import background from "../assets/background.jpg";
import fish from "../assets/Fish.jpg";
import cocktail from "../assets/cocktail.jpg";
import eggs from "../assets/eggs.jpg";
import salad from "../assets/salad.jpg";
import pizza from "../assets/pizza.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Prim = ({ heading }) => {
  const NavigateTo = useNavigate();

  AOS.init({
    offset: 200,
    duration: 600,
    easing: "ease-in-sine",
    startEvent: "load",
    delay: 100,
  });

  const foods = [
    {
      image: jollof,
      Name: "Jollof rice",
      content: "Sweet Nigerian Jollof rice recipe",
      Author: "Mary Jane",
    },
    {
      image: FishRoll,
      Name: "Fish roll",
      content: "Sweet Nigerian Fishroll",
      Author: "Alex Wing",
    },
    {
      image: Meatpie,
      Name: "Meatpie",
      content: "Sweet Nigerian Meatpie",
      Author: "John Doe",
    },
  ];

  const handleCLick = () => {
    NavigateTo(`/recipe-d/3`);
  };

  return (
    <div>
      <div className="divo">
        <div className="cont">
          <div className="first">
            <div>
              <span className="rated">{heading}</span>
            </div>
            <p className="text">
              Sliding recipes are much more tasty as food than sliding images :D
            </p>
          </div>
          <div className="sec" data-aos="fade-right">
            {foods.map((food) => (
              <div onClick={handleCLick} key={food} className="food">
                <div className="food-d">
                  <div className="ting">
                    <p className="f-name">{food.Name}</p>
                    <div className="spatu">
                      {" "}
                      <span className="spatula">
                        <TbGrillSpatula />
                        <TbGrillSpatula />
                        <TbGrillSpatula />
                        <TbGrillSpatula />
                        <TbGrillSpatula className="fade" />
                      </span>
                    </div>
                  </div>
                  <div className="Auth">
                    <p className="Author">{food.Author}</p>
                  </div>
                </div>

                <div className="wrapper">
                  <img className="food-img" src={food.image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prim;
