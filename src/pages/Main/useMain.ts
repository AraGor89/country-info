import { useEffect, useState } from "react";
import { EDropType, IData } from "../../types";
import { formatResponseData } from "../../utils";
import { getAllCountries } from "../../api/country";

const useMain = () => {
  const [search, setSearch] = useState("");
  const [sortingField, setSortingField] = useState<string>("");
  const [countries, setCountries] = useState<IData[] | []>([]);
  const [countriesCopy, setCountriesCopy] = useState<IData[] | []>([]);

  const handleDeleteCountry = (name: string) => {
    const newCountries = countries.filter((item) => item?.country !== name);
    setCountries(newCountries);
  };

  const handleDropDowns = (value: string | null, type: EDropType) => {
    if (!value && type === EDropType.regions) {
      // NOTE: when user clicks on 'x' can be used as reset.
      // setCountries(countriesCopy);
      return;
    }

    if (type === EDropType.regions) {
      const newCountries = countriesCopy.filter(
        (item) => item?.region === value
      );
      setCountries(newCountries);
    }

    if (type === EDropType.sortBy) {
      const field = value?.toLowerCase() || "";
      setSortingField(field);
    }
  };

  // TODO: handle with a delay (debounce function)
  const handleInput = (name: string) => {
    setSearch(name);
  };

  useEffect(() => {
    (async () => {
      const response = await getAllCountries();
      const formattedData = formatResponseData(response?.slice(0, 40));
      setCountries((prevData) => formattedData);
      setCountriesCopy((prevData) => formattedData);
    })();
  }, []);

  const finalData = [...countries]
    .sort(
      (a: IData, b: IData) =>
        +a[sortingField as keyof IData] - +b[sortingField as keyof IData]
    )
    .filter((item) =>
      item?.country?.toLowerCase()?.includes(search?.toLowerCase())
    );

  return {
    search,
    finalData,
    sortingField,
    handleInput,
    handleDropDowns,
    handleDeleteCountry,
  };
};

export default useMain;
