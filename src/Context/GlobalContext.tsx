import { createContext, useEffect, useState } from "react";
import { GlobeType, Prop } from "../Types/Type";
import AllData from "../Data/AllData.json";

export const GlobalContext = createContext<GlobeType | null>(null);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<Prop[]>([]);

  const filterData = (value: string) => {
    setData(AllData.filter((item) => item.category === value));
  };

  const categories = ["DECOR", "KITCHEN", "LIVING ROOM", "SOFA"];

  useEffect(() => {
    filterData("DECOR");
  }, []);

  const [myMap, setMyMap] = useState<Prop[]>([]);

  // Filter Category
  const filterCat = (val: string) => {
    setMyMap(AllData.filter((data) => data.category === val));
  };

  useEffect(() => {
    filterCat("DECOR");
  }, []);

  //   Search Filter
  const searchFilter = (val: string) => {
    setMyMap(
      AllData.filter((item) => item.desc.toLocaleLowerCase().includes(val))
    );
  };

  // Rows
  const [rows, setRows] = useState<number>(1);

  // IsOpen
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // User
  const [user, setUser] = useState({
    userName:"",
    password:""
})

const dataLocal = JSON.parse(localStorage.getItem("User")as string) 
console.log(data);

// Change Mood
const [darkMode, setDarkMode] = useState<any>(JSON.parse(localStorage.getItem("DarkMode")as any ))
useEffect(()=>{
    localStorage.setItem("DarkMode", darkMode)
},[darkMode])

  return (
    <>
      <GlobalContext.Provider
        value={{
          data,
          filterData,
          categories,
          setData,
          AllData,
          myMap,
          filterCat,
          searchFilter,
          rows,
          setRows,
          isOpen,
          setIsOpen,
          user, 
          setUser,
          dataLocal,
          darkMode,
          setDarkMode
        }}
      >
        {children}
      </GlobalContext.Provider>
    </>
  );
};
