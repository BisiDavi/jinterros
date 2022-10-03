import { filterCountries } from "@/lib/formatAdminDBData";

export default function PaypalDetails({ details }: any) {
  return (
    <div className="w-full mb-8 order-1 lg:order-2  shadow-lg w-full p-8 border">
      <h3 className="font-bold text-xl">Delivery Details</h3>
      <h4>
        Name: {details.firstName} {details.lastName}
      </h4>
      <h4>Email: {details.email}</h4>
      <h4>Address: {details.address1}</h4>
      <h4>Phone Number: {details.phoneNumber}</h4>
      <h4>City: {details.city}</h4>
      <h4>State: {details.state}</h4>
      <h4>Zip: {details.zip}</h4>
      <h4>Country: {filterCountries(details.country)}</h4>
    </div>
  );
}
