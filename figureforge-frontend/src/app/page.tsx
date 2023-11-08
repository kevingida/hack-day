"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState<String>();

  const fetchbackend = async () => {
    const response = await axios.get("http://localhost:8080/api/toys");
    const data = response.data;
    setData(data);
  };

  useEffect(() => {
    fetchbackend();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button></button>
      {data ? <h1>{data}</h1> : <h1>Empty</h1>}
    </main>
  );
}
