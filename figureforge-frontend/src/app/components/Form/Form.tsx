"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Form = () => {
  const router = useRouter();

  const [input, setInput] = useState({
    name: "",
    origin: "",
    brand: "",
    price: 0,
    width: 0,
    diameter: 0,
    height: 0,
    description: "",
    pictures: [
      "https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/909787/steppenwolf-deluxe-version_dc-comics_gallery_618dd0735db75.jpg",
      "https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/909787/steppenwolf-deluxe-version_dc-comics_gallery_618dd073baaa7.jpg",
      "https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/909787/steppenwolf-deluxe-version_dc-comics_gallery_618dd07426125.jpg",
      "https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/909787/steppenwolf-deluxe-version_dc-comics_gallery_618dd0747e1ff.jpg",
      "https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/909787/steppenwolf-deluxe-version_dc-comics_gallery_618dd075e6260.jpg",
    ],
  });

  const inputForm = (el) => {
    const { name, value } = el.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const submitHandler = async (e, input) => {
    try {
      e.preventDefault();

      console.log(input);

      const data = await axios({
        method: "post",
        url: "http://localhost:8080/api/toys/create",
        data: input,
      });
      router.push(`/shop/${data.data.id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="content">
      <h1>Add ActionFigure</h1>
      <form onSubmit={(e) => submitHandler(e, input)} className="text-black">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={inputForm}
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-purple"
        />
        <br />
        <label>Origin:</label>
        <input
          type="text"
          name="origin"
          onChange={inputForm}
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-purple"
        />{" "}
        <br />
        <label>Brand:</label>
        <input
          type="text"
          name="brand"
          onChange={inputForm}
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-purple"
        />{" "}
        <br />
        <label>Price:</label>
        <input
          type="number"
          name="price"
          onChange={inputForm}
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-purple"
        />{" "}
        <br />
        <label>Width:</label>
        <input
          type="number"
          name="width"
          onChange={inputForm}
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-purple"
        />{" "}
        <br />
        <label>Diameter:</label>
        <input
          type="number"
          name="diameter"
          onChange={inputForm}
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-purple"
        />{" "}
        <br />
        <label>Height:</label>
        <input
          type="number"
          name="height"
          onChange={inputForm}
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-purple"
        />{" "}
        <br />
        <label>Description:</label>
        <input
          type="text"
          name="description"
          onChange={inputForm}
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-purple"
        />
        <br />
        <label>pictures:</label>
        <input
          type="text"
          name="pictures"
          onChange={inputForm}
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-purple"
        />{" "}
        <br />
        <div className="w-full h-20 bg-purple flex flex-row justify-between px-4">
          <button onClick={() => router.push("/")} className="button">
            <span>Cancel</span>
          </button>
          <button type="submit" value="submit" className="button submit">
            <span>Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
