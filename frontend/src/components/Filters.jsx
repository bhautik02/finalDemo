import { NavLink } from "react-router-dom";
import { TbBeach } from "react-icons/tb";
import { GiCampingTent, GiFamilyHouse } from "react-icons/gi";
import { FaChessRook, FaTree } from "react-icons/fa";
import { MdOutlineApartment, MdOutlineCabin, MdPool } from "react-icons/md";

const Filters = () => {
  return (
    <div className="flex mt-8 mx-10  gap-14 justify-between">
      <NavLink>
        <div className="flex justify-center">
          <TbBeach className="w-8 h-8" />
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
          <TbBeach className="w-8 h-8" />
        </div>
        Beach
      </NavLink>
      <NavLink>
        <div className="flex justify-center">
          <TbBeach className="w-8 h-8" />
        </div>
        Beach
      </NavLink>
      <NavLink>
        <div className="flex justify-center">
          <TbBeach className="w-8 h-8" />
        </div>
        Beach
      </NavLink>
      <NavLink>
        <div className="flex justify-center">
          <TbBeach className="w-8 h-8" />
        </div>
        Beach
      </NavLink>
      <NavLink>
        <div className="flex justify-center">
          <TbBeach className="w-8 h-8" />
        </div>
        Beach
      </NavLink>
      <NavLink>
        <div className="flex justify-center">
          <TbBeach className="w-8 h-8" />
        </div>
        Beach
      </NavLink>
    </div>
  );
};

export default Filters;
