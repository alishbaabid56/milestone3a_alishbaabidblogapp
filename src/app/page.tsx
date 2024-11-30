"use client"


import Navbar from "../components/Navbar";
import PostList from "./PostList/page";
import Reviews from "./review";
import Footer from "@/components/Footer";

import { useState } from "react";

export default function Home() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  return (
    <div>
      <Navbar />
      <PostList/>
      <Reviews/>
      <Footer />
     
      </div>
   
  );
}