// import { useState } from "react";

import { useState } from "react";

// const countryList = [
//   {
//     name: "India",
//     city: ["delhi", "mumbai"],
//     value: "IN",
//   },
//   {
//     name: "Pakistan",
//     city: ["karachi", "lahore"],
//     value: "PK",
//   },
//   {
//     name: "Bangladesh",
//     city: ["dhaka", "gulbarg"],
//     value: "BG",
//   },
//   {
//     name: "USA",
//     city: ["LA", "NewYork"],
//     value: "US",
//   },
// ];
// function CountryCity() {
//   const [country, setCountry] = useState("IN");
//   // console.log(country);
//   return (
//     <div>
//       <select
//         name="country"
//         id="country"
//         onChange={(e) => setCountry(e.target.value)}
//       >
//         {countryList.map((country, i) => (
//           <option key={i} value={country.value}>
//             {country.name}
//           </option>
//         ))}
//       </select>
//       {country ? (
//         <select>
//           {country
//             ? countryList.map((item) =>
//                 item.value === country
//                   ? item.city.map((city, i) => (
//                       <option key={i} value={i}>
//                         {city}
//                       </option>
//                     ))
//                   : null
//               )
//             : null}
//         </select>
//       ) : null}
//     </div>
//   );
// }

// export default CountryCity;

// function CountryCity() {
//   const gamesArr = ["cricket", "football", "tenish", "volyball"];
//   const [isChecked, setIsChecked] = useState([]);
//   const [games, setGames] = useState(gamesArr);
//   function handelChange(e) {
//     if (isChecked.includes(e.target.value)) {
//       setIsChecked((isChecked) =>
//         isChecked.filter((item) => item !== e.target.value)
//       );
//     } else {
//       setIsChecked([...isChecked, e.target.value]);
//     }
//   }
//   function handelDelete(game) {
//     setGames((games) => games.filter((item) => item !== game));
//     // console.log("click by" + e.target.value);
//   }

//   return (
//     <div>
//       {games.map((game, i) => (
//         <div key={game} className="flex gap-4">
//           <input
//             type="checkbox"
//             id={i}
//             name="game"
//             value={game}
//             onChange={(e) => handelChange(e)}
//           />
//           <label htmlFor="games"> {game}</label>
//           {isChecked.includes(game) ? (
//             <button onClick={() => handelDelete(game)}>delete</button>
//           ) : null}
//         </div>
//       ))}
//       {/* <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
//       <label for="vehicle1"> I have a bike</label> */}
//     </div>
//   );
// }

// export default CountryCity;
function CountryCity() {
  const games = ["cricket", "football", "tenish", "volyball"];
  const dayType = ["weekday", "weekend"];
  const [game, setGame] = useState();
  const [day, setDay] = useState();
  return (
    <div className="flex flex-col gap-4 ">
      <div>
        Games:
        {games.map((game, i) => (
          <div key={i}>
            <input
              type="radio"
              name="game"
              value={game}
              onChange={(e) => setGame(e.target.value)}
            />
            <label htmlFor="game">{game}</label>
          </div>
        ))}
      </div>
      <div>
        Days:
        {dayType.map((day, i) => (
          <div key={i}>
            <input
              type="radio"
              name="days"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            />
            <label htmlFor="days">{day}</label>
          </div>
        ))}
      </div>
      <h1>{game && day ? `You can Play ${game} on ${day}` : null}</h1>
    </div>
  );
}

export default CountryCity;
