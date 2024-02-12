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

type Contact = {
  id: number;
};

type Exhibition = {
  id: number;
  title: string;
  status: string;
  location: string;
  image: string
}

type Blog = {
  id: number;
  title: string;
  image: string
  description: string;
}