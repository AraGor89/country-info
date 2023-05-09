import { useEffect, useState } from "react";
import { IData } from "../../types";
import { formatResponseData } from "../../utils";
import { getAllCountries } from "../../api/country";

const useMain = () => {
  const [search, setSearch] = useState("");
  const [sortingField, setSortingField] = useState<string>("");
  const [countries, setCountries] = useState<IData[] | []>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const handleDeleteCountry = (name: string) => {
    const newCountries = countries.filter((item) => item?.country !== name);
    setCountries(newCountries);
  };

  const handleRegionChange = (value: string | null) => {
    const country = value?.toLowerCase() || "";
    setSelectedCountry(country);
  };

  const handleSortChange = (value: string | null) => {
    const field = value?.toLowerCase() || "";
    setSortingField(field);
  };

  // TODO: handle with a delay (debounce function)
  const handleInput = (name: string) => {
    const value = !search.length ? name.trim() : name;
    setSearch(value);
  };

  useEffect(() => {
    (async () => {
      const response = await getAllCountries();
      const formattedData = formatResponseData(response?.slice(0, 40));
      setCountries((prevData) => formattedData);
    })();
  }, []);

  const finalData = [...countries]
    .sort(
      (a: IData, b: IData) =>
        +a[sortingField as keyof IData] - +b[sortingField as keyof IData]
    )
    .filter((item) => {
      return (
        item?.region?.toLowerCase()?.includes(selectedCountry?.toLowerCase()) &&
        item?.country?.toLowerCase()?.includes(search?.toLowerCase())
      );
    });

  return {
    search,
    finalData,
    sortingField,
    handleInput,
    handleSortChange,
    handleRegionChange,
    handleDeleteCountry,
  };
};

export default useMain;
