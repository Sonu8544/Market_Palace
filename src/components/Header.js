import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartImg, logoDark } from "../assets/index";

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  return (
    <div className="w-full h-20 bg-white font-titleFont border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img className="w-28" src={logoDark} alt="logoDark" />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex item-center gap-8">
            <Link to="/">
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Home
              </li>
            </Link>
            <Link to="/comingsoon">
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Pages
              </li>
            </Link>
            <Link to="/comingsoon">
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
              </li>
            </Link>
            <Link to="/comingsoon">
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element

              </li>
            </Link>
            <Link to="/comingsoon">
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
              </li>
            </Link>
          </ul>
          <Link to="/cart">
            <div className="relative">
              <img className="w-6" src={cartImg} alt="cartImg" />
              <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold font-titleFont">
                {productData.length}
              </span>
            </div>
          </Link>

          <Link to="/login">
            <img
              className="w-8 h-8 rounded-full"
              src={
                userInfo
                  ? userInfo.image
                  : "https://t4.ftcdn.net/jpg/05/89/93/27/360_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.jpg"
              }
              alt="userLogo"
            />
          </Link>

          {userInfo && (
            <p className="text-base font-titleFont font-semibold underline underline-offset-2">
              {userInfo.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
