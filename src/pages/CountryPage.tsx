import { useParams } from "react-router-dom";
import { selectCountryPageData } from "../app/features/countrySlice";
import { useAppSelector } from "../app/hooks";

export const CountryPage = () => {
  const { country } = useParams();
  const selectedCountry = useAppSelector((state) =>
    selectCountryPageData(state, country as string)
  );

  console.log(selectedCountry);

  return <div>Country</div>;
};
