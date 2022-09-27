export type cocktailItemType = {
  cocktailImage: string;
  title: string;
  date: string;
  ingredients: string;
  instructions: string;
  author: {
    name: string;
    email: string;
  };
};

export type productType = {
  productImage: string;
  description: string;
  country: string;
  alcoholVolume: string;
  size: string;
  price: number;
  title: string;
  type: string;
  date: string;
  author: {
    name: string;
    email: string;
  };
  authorName: string;
};
