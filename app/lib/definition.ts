type LoginData = {
  email: string;
  password: string;
  callbackUrl: string;
};

type Collection = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type Blog = {
  id: number;
  title: string;
  image: string;
  description: string;
};

// type Event = {
//   id: number;
//   title: string;
//   image: string;
//   description: string;
//   location: string;
//   opening_datetime: Date;
//   closing_datetime: Date;
// };
