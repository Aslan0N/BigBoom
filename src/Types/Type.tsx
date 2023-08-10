export type Prop = {
  id: number;
  image?: string;
  desc?: string;
  price: number;
  explanation?: string;
};

export type NewProp = {
  myProp: Prop;
};

export type Title = {
  title: string;
};
export type MainProp = {
  title: string;
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
};


export type EndType = {
  prod:Prop;
  inWishlist: (id: string) => boolean;
  removeWishlistItem: (id: string) => void;
  // addWishlistItem: (item: Item) => void
}