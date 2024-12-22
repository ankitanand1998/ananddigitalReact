import { Blog } from '../types/blog';

const API_URL = 'https://api.example.com'; // Replace with your actual API URL

export async function getAllBlogs(): Promise<Blog[]> {
  // Simulated API call - replace with actual API endpoint
  return [
    {
      id: 1,
      title: "Understanding React Hooks",
      canonicalUrl:"ananddigitalblog.com1",
      category: "Technology",
      content: "React Hooks are a powerful feature that allows you to use state and other React features in functional components...",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      author: {
        name: "John Doe",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
      },
      excerpt: "Learn how to effectively use React Hooks in your applications..."
    },
    {
      id: 2,
      title: "Global Climate Change Impact",
      canonicalUrl:"ananddigitalblog.com2",
      category: "Environment",
      content: "Climate change continues to affect our planet in unprecedented ways...",
      image: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51",
      author: {
        name: "Jane Smith",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
      },
      excerpt: "Exploring the latest environmental challenges and solutions..."
    },
    {
      id: 3,
      title: "Cryptocurrency Market Analysis",
      canonicalUrl:"ananddigitalblog.com3",
      category: "Business & Economy",
      content: "The cryptocurrency market has shown significant volatility in recent months...",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d",
      author: {
        name: "Alex Johnson",
        avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12"
      },
      excerpt: "An in-depth look at the current state of cryptocurrency markets..."
    },
    {
      id: 4,
      title: "Election Reform Debate",
      canonicalUrl:"ananddigitalblog.com",
      category: "Politics",
      content: "Recent discussions about election reform have sparked nationwide debate...",
      image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c",
      author: {
        name: "Sarah Williams",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
      },
      excerpt: "Examining the ongoing debate around election reform..."
    }
  ];
}

export async function getBlogById(id: number): Promise<Blog | undefined> {
  const blogs = await getAllBlogs();
  return blogs.find(blog => blog.id === id);
}