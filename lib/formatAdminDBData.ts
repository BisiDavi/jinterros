import countries from "@/json/countries.json";

export default function formatAdminDBData(data: string) {
  if (data) {
    const dataArray: any = Object.values(data);
    return JSON.parse(dataArray[0]);
  }
  return null;
}

export function filterCountries(countryCode: string) {
  return countries.filter((item) => item.Iso2 === countryCode)[0].name;
}
