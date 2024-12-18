import axios from 'axios';

const API_URL = import.meta.env.WORDPRESS_API_URL;

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export const fetchPostBySlug = async (slug) => {
  try {
    const response = await axios.get(`${API_URL}/posts?slug=${slug}`);
    return response.data[0]; 
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    return null;
  }
};
