import { NavLink } from "react-router-dom";
import { TbChefHat } from "react-icons/tb";
import { BiBuildingHouse } from "react-icons/bi";
import {
  GiCampingTent,
  GiFamilyHouse,
  GiFishingBoat,
  GiHabitatDome,
} from "react-icons/gi";
import {
  FaChessRook,
  FaTree,
  FaUmbrellaBeach,
  FaWarehouse,
} from "react-icons/fa";
import { MdOutlineApartment, MdOutlineCabin, MdPool } from "react-icons/md";

// const activeClassName = ({ isActive }) =>
//   isActive
//     ? "flex mt-8 mx-10  gap-10 justify-between "
//     : "flex mt-8 mx-10  gap-10 justify-between";

const Filters = () => {
  return (
    <div className="flex mt-8 mx-10  gap-10 justify-between text-gray-500">
      <NavLink>
        <div className="flex justify-center">
          <FaUmbrellaBeach className="w-8 h-8" />
        </div>
        Beach View
      </NavLink>
      <NavLink>
        <div className="flex justify-center">
          <MdPool className="w-8 h-8" />
        </div>
        Amazing Pool
      </NavLink>
      <NavLink>
        <div className="flex justify-center">
          <MdOutlineApartment className="w-8 h-8" />
        </div>
        Apartment
      </NavLink>
      <NavLink>
        <div className="flex justify-center">
          <GiCampingTent className="w-8 h-8" />
        </div>
        Camping Site
      </NavLink>
      <NavLink>
        <div className="flex justify-center">
          <MdOutlineCabin className="w-8 h-8" />
        </div>
        Cabin
      </NavLink>
      <NavLink>
        <div className="flex justify-center">
          <FaChessRook className="w-8 h-8" />
        </div>
        Historical Homes
      </NavLink>
      <NavLink>
        <div className="flex justify-center">
          <FaTree className="w-8 h-8" />
        </div>
        Tree House
      </NavLink>
      <NavLink>
        <div className="flex justify-center">
          <GiFamilyHouse className="w-8 h-8" />
        </div>
        Mansions
      </NavLink>
      <NavLink>
        <div className="flex justify-center">
          <FaWarehouse className="w-8 h-8" />
        </div>
        house With Parking
      </NavLink>
      <NavLink>
        <div className="flex justify-center">
          <GiHabitatDome className="w-8 h-8" />
        </div>
        Dome House
      </NavLink>
      <NavLink>
        <div className="flex justify-center">
          <GiFishingBoat className="w-8 h-8" />
        </div>
        Boat House
      </NavLink>
      <NavLink>
        <div className="flex justify-center">
          <BiBuildingHouse className="w-8 h-8" />
        </div>
        Highrise Tower
      </NavLink>
      <NavLink>
        <div className="flex justify-center">
          <TbChefHat className="w-8 h-8" />
        </div>
        Chef's Kitchen
      </NavLink>
      {/* <NavLink>
        <div className="flex justify-center">
          <TbBeach className="w-8 h-8" />
        </div>
        Beach
      </NavLink> */}
    </div>
  );
};

export default Filters;
