import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Infocard from "../components/Infocard";



export const dateTostring = (un: any) => {
  const dt = new Date(parseInt(un));
  return dt.toLocaleString();
};

function search() {
  
  const Router = useRouter();
  const { location, startDate, endDate, noOfGuests } = Router.query;

  const searchResults = [
        {"img":"https://res.cloudinary.com/dkqxnquga/image/upload/v1672252069/Untitled-design-8_x5zcfd.jpg","location":"Private room in center of London","title":"Stay at this spacious Edwardian House","description":"1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine","star":4.73,"price":"£30 / night","total":"£117 total","long":-0.0022275,"lat":51.5421655},
        {"img":"https://res.cloudinary.com/dkqxnquga/image/upload/v1672252060/e2e2bf3d-cb57-4ef0-9076-1571500da682_jnqmo3.webp","location":"Private room in center of London","title":"Independant luxury studio apartment","description":"2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen","star":4.3,"price":"£40 / night","total":"£157 total","long":-0.095091,"lat":51.48695},
        {"img":"https://res.cloudinary.com/dkqxnquga/image/upload/v1672252060/fit_zuiu6v.jpg","location":"Private room in center of London","title":"London Studio Apartments","description":"4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine","star":3.8,"price":"£35 / night","total":"£207 total","long":-0.135638,"lat":51.521916},
        {"img":"https://res.cloudinary.com/dkqxnquga/image/upload/v1672252060/airbnb-plus-london_mfnn9p.webp","location":"Private room in center of London","title":"30 mins to Oxford Street, Excel London","description":"1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine","star":4.1,"price":"£55 / night","total":"£320 total","long":-0.069961,"lat":51.472618},
        {"img":"https://res.cloudinary.com/dkqxnquga/image/upload/v1672252060/585029a0dd0895bc548b4b8b_u8sgvo.webp","location":"Private room in center of London","title":"Spacious Peaceful Modern Bedroom","description":"3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning","star":5.0,"price":"£60 / night","total":"£450 total","long":-0.08472,"lat":51.510794},
        {"img":"https://res.cloudinary.com/dkqxnquga/image/upload/v1672252060/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9_taari4.webp","location":"Private room in center of London","title":"The Blue Room In London","description":"2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine","star":4.23,"price":"£65 / night","total":"£480 total","long":-0.094116,"lat":51.51401},
        {"img":"https://res.cloudinary.com/dkqxnquga/image/upload/v1672252060/Airbnb-rental-tips_uiejev.webp","location":"Private room in center of London","title":"5 Star Luxury Apartment","description":"3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine","star":3.85,"price":"£90 / night","total":"£650 total","long":-0.109889,"lat":51.521245}
  ];

  return (
    <div className="bg-black">
      <Header
        placeholder={`${location} | ${dateTostring(startDate)}- ${dateTostring(
          endDate
        )} | ${noOfGuests} Guests`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-sm text-white">
            300+ stays - {dateTostring(startDate)}- {dateTostring(endDate)} -
            for {noOfGuests} guests{" "}
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6 text-white capitalize">
            Stays in {location}
          </h1>

          <div className="hidden sm:inline-flex mb-5 space-x-3 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button"> Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds </p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col pb-2">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <Infocard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>
      <div className="px-6">
        <Footer />
      </div>
    </div>
  );
}

export default search;

