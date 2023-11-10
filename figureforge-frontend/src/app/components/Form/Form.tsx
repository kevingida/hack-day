"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Banner from "../Banner/Banner";

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
    <div className="w-full flex flex-col justify-center items-center">
      <Banner name="Add ActionFigure" />
      <div className="max-w-2xl my-10">
        <form onSubmit={(e) => submitHandler(e, input)} className="">
          <label>Name:</label>
          <input
            required
            type="text"
            name="name"
            onChange={inputForm}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-purple mb-4 mt-2"
          />
          <br className="mb-4 mt-2" />
          <label className="mt-5">Origin:</label>
          <input
            required
            type="text"
            name="origin"
            onChange={inputForm}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-purple mb-4 mt-2"
          />{" "}
          <br />
          <label>Brand:</label>
          <input
            required
            type="text"
            name="brand"
            onChange={inputForm}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-purple mb-4 mt-2"
          />{" "}
          <br />
          <label>Price:</label>
          <input
            required
            type="number"
            name="price"
            onChange={inputForm}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-purple mb-4 mt-2"
          />{" "}
          <br />
          <label>Width:</label>
          <input
            required
            type="number"
            name="width"
            onChange={inputForm}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-purple mb-4 mt-2"
          />{" "}
          <br />
          <label>Diameter:</label>
          <input
            required
            type="number"
            name="diameter"
            onChange={inputForm}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-purple mb-4 mt-2"
          />{" "}
          <br />
          <label>Height:</label>
          <input
            required
            type="number"
            name="height"
            onChange={inputForm}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-purple mb-4 mt-2"
          />{" "}
          <br />
          <label>Description:</label>
          <input
            required
            type="text"
            name="description"
            onChange={inputForm}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-purple mb-4 mt-2"
          />
          <br />
          <label>pictures:</label>
          <input
            required
            type="text"
            name="pictures"
            onChange={inputForm}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-purple mb-4 mt-2"
          />{" "}
          <br />
          <div className="w-full h-20 flex flex-row justify-between px-4 pt-10">
            <button
              onClick={() => router.push("/")}
              className=" max-h-8 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center transition ease-in-out delay-350 hover:bg-midnight hover:transition-all"
            >
              <span>Cancel</span>
            </button>
            <button
              type="submit"
              value="submit"
              className=" max-h-8 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white bg-purple font-bold items-center justify-center transition ease-in-out delay-350 hover:bg-midnight hover:transition-all"
            >
              <span>Submit</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
