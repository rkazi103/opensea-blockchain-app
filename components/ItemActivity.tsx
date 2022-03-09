import { NextComponentType } from "next";
import { useState } from "react";
import { CgArrowsExchangeV } from "react-icons/cg";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { events } from "../lib/events";
import EventItem from "./EventItem";

const style = {
  wrapper: `w-full mt-8 border border-[#151b22] rounded-xl bg-[#303339] overflow-hidden`,
  title: `bg-[#262b2f] px-6 py-4 flex items-center`,
  titleLeft: `flex-1 flex items-center text-xl font-bold`,
  titleIcon: `text-3xl mr-2`,
  titleRight: `text-xl`,
  filter: `flex items-center border border-[#151b22] mx-4 my-6 px-3 py-4 rounded-xl bg-[#363840]`,
  filterTitle: `flex-1`,
  tableHeader: `flex w-full bg-[#262b2f] border-y border-[#151b22] mt-8 px-4 py-1`,
  eventItem: `flex px-4`,
  ethLogo: `h-5 mr-2`,
  accent: `text-[#2081e2]`,
};

const ItemActivity: NextComponentType = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="mt-8 w-full cursor-pointer overflow-hidden rounded-xl border border-[#151b22] bg-[#303339]">
      <div
        className="flex items-center bg-[#262b2f] px-6 py-4"
        onClick={() => setToggle(!toggle)}
      >
        <div className="flex flex-1 items-center text-xl font-bold">
          <span className="mr-2 text-3xl">
            <CgArrowsExchangeV />
          </span>
          Item Activity
        </div>

        <div className="text-xl">
          {toggle ? <AiOutlineUp /> : <AiOutlineDown />}
        </div>
      </div>

      {toggle && (
        <div>
          <div className="mx-4 my-6 flex items-center rounded-xl border border-[#151b22] bg-[#363840] px-3 py-4">
            <div className="flex-1">Filter</div>
            <div>
              {" "}
              <AiOutlineDown />{" "}
            </div>
          </div>

          <div className="mt-8 flex w-full border-y border-[#151b22] bg-[#262b2f] px-4 py-1">
            <div className="flex-[2]">Event</div>
            <div className="flex-[2]">Price</div>
            <div className="flex-[3]">From</div>
            <div className="flex-[3]">To</div>
            <div className="flex-[2]">Date</div>
          </div>

          {events.map((event, id) => (
            <EventItem key={id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemActivity;
