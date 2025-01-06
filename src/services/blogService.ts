const API_URL = 'https://ananddigitaldatabase.vercel.app/data.json';

export const fetchBlogPosts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    const data = await response.json();
    console.log("coming data"+data);
    return Array.isArray(data) ? data : [data];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};
