import React from "react";
import Jollof from "../assets/Jollof-d.jpg";
import Fishroll from "../assets/Fishroll-d.jpg";
import Meatpie from "../assets/Meatpie-d.jpg";
import "./Recipe.css";
import { FaStar } from "react-icons/fa6";
import { MdOutlineStarBorder } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import cocktail from "../assets/cocktail-s.jpg";
import eggs from "../assets/eggs-s.jpg";
import salad from "../assets/salad-s.jpg";
import pizza from "../assets/pizza-s.jpg";
import egg from "../assets/eggs-i.jpg";
import cocao from "../assets/cocao-i.jpg";
import plates from "../assets/plates-i.jpg";
import steak from "../assets/steak-i.jpg";
import { FaInstagram } from "react-icons/fa";
import { useState, useEffect } from "react";
import profile from "../assets/Ellipse 38.png";
import { FaRegStar } from "react-icons/fa";

const Recipe = () => {
  const [search, setSearch] = useState("");

  const foodd = [
    {
      image: Meatpie,
      name: "Meat pie",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quidem quibusdam adipisci a architecto blanditiis illum",
      ingredients:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quidem quibusdam adipisci a architecto blanditiis illum",
      method:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quidem quibusdam adipisci a architecto blanditiis illum",
    },
  ];

  const Blog = [
    {
      image: { profile },
      Autor: "Jane Doe",
      date: "15, June, 2017",
      Content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque earum natus rem saepe facere repudiandae magnam, libero dignissimos autem vitae eligendi sapiente magni velit id excepturi perferendis? Dolorem, fugit voluptatum.",
    },
    {
      image: { profile },
      Autor: "Jason brooks",
      date: "13, June, 2015",
      Content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque earum natus rem saepe facere repudiandae magnam, libero dignissimos autem vitae eligendi sapiente magni velit id excepturi perferendis? Dolorem, fugit voluptatum.",
    },
    {
      image: { profile },
      Autor: "Brooks bekky",
      date: "23, Feb, 2019",
      Content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque earum natus rem saepe facere repudiandae magnam, libero dignissimos autem vitae eligendi sapiente magni velit id excepturi perferendis? Dolorem, fugit voluptatum.",
    },
    {
      image: { profile },
      Autor: "Jackson miller",
      date: "19, August, 2012",
      Content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque earum natus rem saepe facere repudiandae magnam, libero dignissimos autem vitae eligendi sapiente magni velit id excepturi perferendis? Dolorem, fugit voluptatum.",
    },
    {
      image: { profile },
      Autor: "Broke Nigga",
      date: "13, June, 2022",
      Content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque earum natus rem saepe facere repudiandae magnam, libero dignissimos autem vitae eligendi sapiente magni velit id excepturi perferendis? Dolorem, fugit voluptatum.",
    },
    {
      image: { profile },
      Autor: "Jack dillen",
      date: "12, April, 2011",
      Content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque earum natus rem saepe facere repudiandae magnam, libero dignissimos autem vitae eligendi sapiente magni velit id excepturi perferendis? Dolorem, fugit voluptatum.",
    },
    {
      image: { profile },
      Autor: "Gabriel Hezues",
      date: "05, Nov, 2013",
      Content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque earum natus rem saepe facere repudiandae magnam, libero dignissimos autem vitae eligendi sapiente magni velit id excepturi perferendis? Dolorem, fugit voluptatum.",
    },
    {
      image: { profile },
      Autor: "John Doe",
      date: "09, Dec, 2010",
      Content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque earum natus rem saepe facere repudiandae magnam, libero dignissimos autem vitae eligendi sapiente magni velit id excepturi perferendis? Dolorem, fugit voluptatum.",
    },
    {
      image: { profile },
      Autor: "Barry allen",
      date: "25, Jan, 2021",
      Content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque earum natus rem saepe facere repudiandae magnam, libero dignissimos autem vitae eligendi sapiente magni velit id excepturi perferendis? Dolorem, fugit voluptatum.",
    },
    {
      image: { profile },
      Autor: "Mick miller",
      date: "28, July, 2018",
      Content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque earum natus rem saepe facere repudiandae magnam, libero dignissimos autem vitae eligendi sapiente magni velit id excepturi perferendis? Dolorem, fugit voluptatum.",
    },
  ];

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <div className="details">
      <div className="d-cont">
        <div className="wrapper">
          <img className="meat" src={Meatpie} alt="" />
        </div>
        {foodd.map((food) => (
          <div className="d-det" key={food}>
            <div className="ini">
              <div className="bars"></div>
              <div className="bap-name">
                <p>{food.name}</p>
                <span className="d-stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <MdOutlineStarBorder />
                </span>
              </div>
            </div>
            <div className="inin">
              <div className="d-content">
                <p className="contttt">{food.content}</p>
              </div>
              <div className="d-ingre">
                <p className="ig">Ingredients</p>
                <p className="inggg">{food.ingredients}</p>
              </div>
              <div className="d-method">
                <p className="pp">Preparation</p>
                <p className="methhh">{food.method}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="blog-r">
          <div className="blog-hd">
            <span className="star">
              <FaRegStar />
            </span>
            <span className="hd-text">Reviews & Rating</span>
          </div>
          <div className="blog-g">
            {Blog.map((blob) => (
              <div className="blo" key={blob}>
                <div>
                  <img src={profile} alt="" />
                </div>
                <div className="blo-cont">
                  <div className="auth-cont">
                    <div>
                      <span className="auth">{blob.Autor}</span>
                    </div>{" "}
                    <div>
                      <span className="date">
                        Date: <span className="d">{blob.date}</span>
                      </span>
                    </div>
                  </div>
                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <MdOutlineStarBorder />
                  </div>
                  <div className="b-cont">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem similique maiores voluptate eligendi consequuntur
                    vitae,
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed">
        <div>
          <form className="top-ting" onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              className="wh-s"
              type="search"
              placeholder="Keywords"
            />
            <p className="wh">All Categories</p>
            <button className="sr">Search Now</button>
          </form>
        </div>
        <div className="catege">
          <div className="cataeg-1">
            <div>
              <div className="side-img">
                <img className="cataeg-img" src={cocktail} alt="" />
              </div>
              <div>
                <p className="categ-pi">Cocktails</p>
              </div>
            </div>
            <div>
              <div className="side-img">
                <img className="cataeg-img" src={eggs} alt="" />
              </div>
              <div>
                <p className="categ-pi">eggs</p>
              </div>
            </div>
          </div>
          <div className="cataeg-1">
            <div>
              <div className="side-img">
                <img className="cataeg-img" src={salad} alt="" />
              </div>
              <div>
                <p className="categ-pi">salad</p>
              </div>
            </div>
            <div>
              <div className="side-img">
                <img className="cataeg-img" src={pizza} alt="" />
              </div>
              <div>
                <p className="categ-pi">pizza</p>
              </div>
            </div>
          </div>
        </div>
        <div className="insta">
          <div>
            <p className="inst">
              {" "}
              <FaInstagram className="inst-pic" /> Instagram
            </p>
          </div>

          <div className="inta-c">
            <div>
              <img className="int" src={cocao} alt="" />
            </div>
            <div>
              <img className="int" src={egg} alt="" />
            </div>
          </div>
          <div className="inta-c">
            <div>
              <img className="int" src={plates} alt="" />
            </div>
            <div>
              <img className="int" src={steak} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
