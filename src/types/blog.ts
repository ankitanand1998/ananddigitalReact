export interface Blog {
  id: number;
  title: string;
  canonicalUrl:string;
  category: string;
  content: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  excerpt: string;
}