import { useState } from "react";

export const useModalRoom = () => {
  const [isShownRoom, setIsShownRoom] = useState<boolean>(false);
  const toggleRoom = () => setIsShownRoom(!isShownRoom);
  return {
    isShownRoom,
    toggleRoom,
  };
};