import React from "react";
import { FaRegStar } from "react-icons/fa";
import Contact from "./contactUs";
import profile from "../assets/Ellipse 38.png";
import { FaStar } from "react-icons/fa6";
import { MdOutlineStarBorder } from "react-icons/md";
import "./Blog.css";

const Blog = () => {
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

  return (
    <div className="blog-cont">
      <div className="blog">
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
  );
};

export default Blog;
