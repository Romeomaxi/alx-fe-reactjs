import React from 'react';
import { useQuery } from '@tanstack/react-query';

// Fetch function to get posts
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

function PostsComponent() {
  // React Query hook with additional options
  const { data, isLoading, isError, error, refetch } = useQuery(['posts'], fetchPosts, {
    // React Query options
    cacheTime: 1000 * 60 * 5, // Cache data for 5 minutes (default: 5 minutes)
    staleTime: 1000 * 60,     // Data remains fresh for 1 minute
    refetchOnWindowFocus: true, // Refetch on window focus (default: true)
    keepPreviousData: true,   // Keep showing previous data while fetching new data
  });

  // Loading state
  if (isLoading) return <p>Loading...</p>;

  // Error handling
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
