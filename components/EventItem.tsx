import { NextComponentType, NextPageContext } from "next";
import { Event } from "../types/Event";
import { BsFillCartFill } from "react-icons/bs";

type EventItemProps = {
  event: Event;
};

const EventItem: NextComponentType<NextPageContext, {}, EventItemProps> = ({
  event,
}) => {
  return (
    <div className="flex px-4 py-5 font-medium">
      <div className="flex flex-[2] items-center">
        <div className="mr-2 text-xl">
          <BsFillCartFill />
        </div>

        <div className="text-lg font-semibold">Sale</div>
      </div>

      <div className="flex flex-[2] items-center">
        <img
          src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
          alt="eth"
          className="mr-2 h-5"
        />
        <div className="text-lg">{event.price}</div>
      </div>

      <div className="flex-[3] text-[#2081e2]">{event.from}</div>
      <div className="flex-[3] text-[#2081e2]">{event.to}</div>
      <div className="flex-[2] text-[#2081e2]">{event.date}</div>
    </div>
  );
};

export default EventItem;
