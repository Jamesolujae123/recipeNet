import React from "react";
import "./SubmitRecipe.css";
import { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "@orrisroot/react-html-parser";
import axios from "axios";

const AddRecipe = () => {
  const [fname, setFname] = useState("");
  const [fdesc, setFdesc] = useState("");
  const [ingr, setIngr] = useState("");
  const [steps, setSteps] = useState("");
  const [img, setImg] = useState("");

  const handleN = (e) => {
    setFname(e.target.value);
  };

  const handleD = (e) => {
    setFdesc(e.target.value);
  };

  const handleImg = (e) => {
    console.log(e.target.files);
    console.log(e);
    setImg(e.target.files[0]);
  };

  const handleI = (e, editor) => {
    setIngr(editor.getData());
  };

  const handleP = (e, editor) => {
    setSteps(editor.getData());
  };

  const handleSub = (e) => {
    e.preventDefault();

    console.log(
      `Foodname: ${fname}, Description: ${fdesc}, ingredients: ${ingr}, Preparation: ${steps}`
    );

    const formData = new FormData();
    formData.append("image", img);
    // axios.post('url', formData).then((res) => {
    //   console.log(res)
    // })
  };

  return (
    <div className="add-cont">
      <div className="intro-2">
        <div className="abt">
          <span className="acc-3">Add a Recipe</span>
          <p className="tng">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
        </div>
      </div>
      <form onSubmit={handleSub} className="fom">
        <div className="title-contt">
          <div className="food-imgr">
            <input className="" type="file" name="file" onChange={handleImg} />
            <label htmlFor="">Add an image</label>
          </div>
          <div className="til">
            <div className="tt">
              <label className="tingss" htmlFor="">
                Recipe Title
              </label>
              <input onChange={handleN} className="r-name" type="text" />
            </div>
          </div>
          <div className="dd">
            <label className="tingss" htmlFor="">
              Description
            </label>
            <textarea
              cols="30"
              rows="5"
              onChange={handleD}
              className="d-name"
              type="text"
            ></textarea>
          </div>
        </div>

        <div className="tpp">
          <div className="food-n">
            <div className="op">
              <p className="tingss">Ingredients</p>
              <CKEditor
                className=""
                editor={ClassicEditor}
                onChange={(e, editor) => {
                  handleI(e, editor);
                }}
              />
            </div>
            <div className="">
              <div className="ingr-container">{ReactHtmlParser(ingr)}</div>
            </div>
          </div>
        </div>

        <div className="food-prep">
          <div className="pp-cc">
            <div>
              <p className="tingss">Preparation</p>
              <CKEditor
                editor={ClassicEditor}
                onChange={(e, editor) => {
                  handleP(e, editor);
                }}
              />
            </div>
            <div>
              <div className="bap">
                <div className="ingr-container">{ReactHtmlParser(steps)}</div>
              </div>
            </div>
          </div>
        </div>

        <button className="sb">Submit</button>
      </form>
    </div>
  );
};

export default AddRecipe;
