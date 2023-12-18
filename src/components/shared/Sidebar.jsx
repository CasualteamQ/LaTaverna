import React from "react";
import {
  RiHome6Line,
  RiShoppingBag2Line,
  RiPieChartLine,
  RiMailLine,
  RiNotification3Line,
  RiSettings4Line,
  RiLogoutCircleRLine,
} from "react-icons/ri";

const Sidebar = (props) => {
  const { showMenu } = props;

  return (
    <div
      className={`bg-[#ecf4f3ff] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${
        showMenu ? "left-0" : "-left-full"
      }`}
    >
      <div>
        <ul className="pl-4">
          <li>
            <img src="logo1.png" />
          </li>
          <li className="bg-[#ecf4f3ff] p-4 rounded-tl-xl rounded-bl-xl">
            <a
              href="#"
              className="bg-[#fd0034ff] p-4 flex justify-center rounded-xl text-[#252525]"
            >
              <RiHome6Line className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#ecf4f3ff] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#fd0034ff] p-4 flex justify-center rounded-xl text-[#252525] group-hover:text-white transition-colors"
            >
              <RiShoppingBag2Line className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#ecf4f3ff] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#fd0034ff] p-4 flex justify-center rounded-xl text-[#252525] group-hover:text-white transition-colors"
            >
              <RiPieChartLine className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#ecf4f3ff] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#fd0034ff] p-4 flex justify-center rounded-xl text-[#252525] group-hover:text-white transition-colors"
            >
              <RiMailLine className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#ecf4f3ff] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#fd0034ff] p-4 flex justify-center rounded-xl text-[#252525] group-hover:text-white transition-colors"
            >
              <RiNotification3Line className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#ecf4f3ff] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#fd0034ff] p-4 flex justify-center rounded-xl text-[#252525] group-hover:text-white transition-colors"
            >
              <RiSettings4Line className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li className="hover:bg-[#ccc] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ccc] p-4 flex justify-center rounded-xl text-[#fff] group-hover:text-[#fd0034ff] transition-colors"
            >
              <RiLogoutCircleRLine className="text-2xl text-[#fd0034ff]" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
