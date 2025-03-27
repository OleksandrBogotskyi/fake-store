import React, { useState, useEffect } from "react";
import AbstractDesign from "../assets/images/AbstractDesign.svg";
import { TbLogin2 } from "react-icons/tb";
import SearchBar from "./SearchBar";
import { useAppDispatch } from "../store/hooks";
import { fetchProducts } from "../store/products";
import { useDebounce } from "../hooks/useDebounce";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    dispatch(fetchProducts(debouncedQuery.trim() ? { title: debouncedQuery } : {}));
  }, [debouncedQuery, dispatch]);

  return (
    <header className="w-full text-white py-4 border-b border-white">
      <img
        className="absolute top-0 left-0 max-h-[78px] w-full h-full object-cover"
        src={AbstractDesign}
        alt="bg-header"
      />
      <div className="w-full flex items-center justify-between px-[8%] relative">
        <h1 className="text-4xl font-extrabold font-mono">FIVE Fake Shop</h1>
        <SearchBar value={query} onChange={setQuery} />
        <div className="flex items-center text-lg gap-6">
          <button className="flex items-center px-4 py-2 border border-white rounded-md">
            <TbLogin2 className="mr-2" />
            Login
          </button>
          <button className="px-4 py-2 border border-white rounded-md">🌙</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
