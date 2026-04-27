/* eslint-disable react-hooks/exhaustive-deps */
import InputText from "./Input-Text";
import SearchIcon from "../assets/icons/search.svg?react";
import React from "react";
import { debounce } from "../helpers/utils";
import usePhotos from "../contexts/photos/hooks/use-photos";

export default function PhotosSearch() {
  const [inputValue, setInputValue] = React.useState("");
  const {filters} = usePhotos()

  const debauncedSetValue = React.useCallback(
    debounce((value: string) => {
      filters.setQ(value)
    }, 300),
    [filters.setQ],
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
