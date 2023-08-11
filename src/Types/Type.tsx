export type Prop = {
  id: number | any;
  image?: string;
  desc?: string;
  price: number;
  explanation?: string;
};

export type NewProp = {
  myProp: Prop | Prop;
};

export type GlobeType = {
  data: Prop[];
  filterData: (value: string) => void;
  categories: Array<string>;
  setData: React.Dispatch<React.SetStateAction<Prop[]>>;
  AllData: Prop[];
  myMap: Prop[];
  filterCat: (val: string) => void;
  searchFilter: (val: string) => void;
  rows: number;
  setRows: React.Dispatch<React.SetStateAction<number>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  user: {
    userName: string;
    password: string;
  };
  setUser: React.Dispatch<
    React.SetStateAction<{
      userName: string;
      password: string;
    }>
  >;
  dataLocal: any;
  darkMode: any;
   setDarkMode:React.Dispatch<any>
};

export type EndType = {
  prod: Prop;
  inWishlist: (id: string) => boolean;
  removeWishlistItem: (id: string) => void;
  addWishlistItem: (item: NewProp) => void;
};

export type BlogType = {
  id: string,
  title: string,
  date: string,
  admin: string,
  content: string,
  image: string,
}
