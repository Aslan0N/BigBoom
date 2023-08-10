import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { GlobeType } from "../Types/Type";

export const Util = () => {
  const {dataLocal} = useContext(GlobalContext) as GlobeType
  if (dataLocal) return true;
  else return false;
};