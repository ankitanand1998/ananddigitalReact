import { Blog } from '../types/blog';

const API_URL = 'https://script.google.com/macros/s/AKfycbyTeFAgDzL3ry8LbQm4IJC-CbZgz1gZ5XZ2dhB7r9tRZChj87_hnijS3b_AULLwoQ7r8w/exec';

export async function getAllBlogs(): Promise<Blog[]> {
  try {
    const response = await fetch(API_URL);
    
    // Check if the response is ok (status in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json();

   

    // Assuming the API returns an array of blogs
    return data as Blog[];
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return []; // Return an empty array in case of error
  }
}

export async function getBlogById(id: string): Promise<Blog | undefined> {
  const blogs = await getAllBlogs();
  return blogs.find(blog => blog.id === id);
}