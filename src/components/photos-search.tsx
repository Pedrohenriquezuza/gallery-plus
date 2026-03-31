/* eslint-disable react-hooks/exhaustive-deps */
import InputText from "./Input-Text";
import SearchIcon from "../assets/icons/search.svg?react";
import React from "react";
import { debounce } from "../helpers/utils";

export default function PhotosSearch() {
  const [inputValue, setInputValue] = React.useState("");

  const debauncedSetValue = React.useCallback(
    debounce((value: string) => {
      console.log("Valor com debounce", value);
    }, 300),
    [],
  );

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    setInputValue(value);
    debauncedSetValue(value);
  }

  return (
    <InputText
      value={inputValue}
      icon={SearchIcon}
      placeholder="Buscar Fotos"
      className="flex-1"
      onChange={handleInputChange}
    />
  );
}
