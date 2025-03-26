import {  useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import {db} from "../assets/data/db";

const Home = () => {
  const [query, setQuery] = useState("");
  const [Search, setSearch] = useState([]);

  const data = db.data;

  const handleSearch = () => {
    if (!query) {
      return 
    }
    const filteredData = data.filter((item) => item.MODELUNITFORFORMULA.toLowerCase().includes(query.toLowerCase()) || item.CODEUNIT.toLowerCase().includes(query.toLowerCase()));
    setSearch(filteredData);
  };

  return (
    <div>
    <div className="mx-2 mt-5 flex justify-center items-center">
      <input
        className="border-t-2 border-b-2 border-l-2 w-1/2 rounded-l-2xl pl-2"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        />
      <button className="hover:bg-red-400 cursor-pointer rounded-l-none py-1 px-3 text-sm bg-red-600 text-white font-semibold rounded-2xl" onClick={handleSearch}>Search</button>
    </div>
    {Search.length > 0 && (
          <div className="mx-2 mt-5 grid-cols-2 grid gap-2">
            {Search.map((item, index) => (
              <Link to={`/unit/${item.MODELUNITFORFORMULA}/${item.CODEUNIT}`} className="font-semibold border rounded-md p-1 bg-gray-200" key={index}>
                {item.CODEUNIT}
              </Link>
            ))}
          </div>
        )}
        
<div className="mx-2 mt-5 grid-cols-2 grid gap-2">
    <Button classname="bg-blue-500" color='blue' title='Fuel Truck' link='/unit/Fuel Truck'/>
    <Button color='red' title='Water Truck' link='/unit/Water Truck'/>
    <Button color='red' title='Multiflo' link='/unit/RF-420EXHVCC'/>
    <Button classname="bg-blue-500" color='blue' title='Genset' link='/unit/Genset'/>
    <Button classname="bg-blue-500" color='blue' title='Tower Lamp' link='/unit/Towerlamp'/>
    <Button color='red' title='Crane Truck' link='/unit/Crane Truck'/>
    <Button color='red' title='Tadano' link='/unit/GR-500EXL'/>
    <Button classname="bg-blue-500" color='blue' title='Forklift' link='/unit/Forklift'/>
    <Button classname="bg-blue-500" color='blue' title='Lube Truck' link='/unit/Lube Truck'/>
    <Button color='red' title='Compressor' link='/unit/Compressor'/>
    <Button color='red' title='Welding Machine' link='/unit/Welding Machine'/>
    <Button classname="bg-blue-500" color='blue' title='Tyre Handler' link='/unit/Tyre Handler'/>

    <Button classname='col-span-2 bg-blue-500' color='blue' title='Fire Truck' link='/unit/Fire Truck'/>
</div>
        </div>
  );
};

export default Home;
