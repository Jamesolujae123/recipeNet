import React from "react";
import jollof from "../assets/Jollof.jpg";
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
import { useNavigate } from "react-router-dom";

const Prime = () => {
  const navigateTo = useNavigate();

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
    navigateTo(`/recipe-d/3`);
  };

  return (
    <div>
      <div className="intro">
        <div>
          <span className="acc">Get access to</span>
          <p className="acc">
            recipes for <em className="m-w">mouth watering</em> delicacies
          </p>
        </div>
        <div className="d-cont">
          {" "}
          <span className="acc-d">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            accusamus dolorem quam at
          </span>
        </div>

        <div className="info">
          <div className="info-highlighted">
            <p className="f-g-highlight">Fried Food</p>
            <p className="f-g-cont">Lorem ipsum dolor, sit amet consectetur</p>
          </div>
          <div className="info-n">
            {" "}
            <p className="f-genre">Baked Delicacies</p>
            <p className="f-g-cont">Lorem ipsum dolor, sit amet consectetur</p>
          </div>
          <div className="info-n">
            {" "}
            <p className="f-genre">Steamed Food</p>
            <p className="f-g-cont">Lorem ipsum dolor, sit amet consectetur</p>
          </div>
        </div>
      </div>

      <div className="categ">
        <div className="cate">
          <div className="img-c">
            <img className="cate-pic-fish" src={fish} alt="" />
          </div>
          <div className="t-cont">
            <p className="catae-title">Fish</p>
          </div>
        </div>
        <div className="cate">
          <div className="img-c">
            <img className="cate-pic" src={cocktail} alt="" />
          </div>
          <div className="t-cont">
            <p className="catae-title">Cocktails</p>
          </div>
        </div>
        <div className="cate">
          {" "}
          <div className="img-c">
            <img className="cate-pic" src={eggs} alt="" />
          </div>
          <div className="t-cont">
            <p className="catae-title">Eggs</p>
          </div>{" "}
        </div>
        <div className="cate">
          {" "}
          <div className="img-c">
            <img className="cate-pic" src={salad} alt="" />
          </div>
          <div className="t-cont">
            <p className="catae-title">Salads</p>
          </div>
        </div>
        <div className="cate">
          {" "}
          <div className="img-c">
            <img className="cate-pic" src={pizza} alt="" />
          </div>{" "}
          <div className="t-cont">
            <p className="catae-title">Pizza</p>
          </div>
        </div>
      </div>

      <div className="categ-r">
        <div className="cate">
          <div className="img-c">
            <img className="cate-pic-fish" src={fish} alt="" />
          </div>
          <div className="t-cont">
            <p className="catae-title">Fish</p>
          </div>
        </div>
        <div className="cate">
          <div className="img-c">
            <img className="cate-pic" src={cocktail} alt="" />
          </div>
          <div className="t-cont">
            <p className="catae-title">Cocktails</p>
          </div>
        </div>
        <div className="cate">
          {" "}
          <div className="img-c">
            <img className="cate-pic" src={eggs} alt="" />
          </div>
          <div className="t-cont">
            <p className="catae-title">Eggs</p>
          </div>{" "}
        </div>
        <div className="cate">
          {" "}
          <div className="img-c">
            <img className="cate-pic" src={salad} alt="" />
          </div>
          <div className="t-cont">
            <p className="catae-title">Salads</p>
          </div>
        </div>
        <div className="cate">
          {" "}
          <div className="img-c">
            <img className="cate-pic" src={pizza} alt="" />
          </div>{" "}
          <div className="t-cont">
            <p className="catae-title">Pizza</p>
          </div>
        </div>
      </div>

      <div className="slidding-div">
        <div className="cont">
          <div className="first">
            <div>
              <span className="rated">Top Rated Recipes</span>
              <span className="day"> of the day</span>
            </div>
            <p className="text">
              Sliding recipes are much more tasty as food than sliding images :D
            </p>
          </div>
          <div className="sec">
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

export default Prime;
