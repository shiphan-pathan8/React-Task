import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Album {
  userId: number;
  id: number;
  title: string;
}

const DataFetcher: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/1/albums')
      .then(response => {
        setAlbums(response.data);
        setLoading(false);
      })
      .catch(_error => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Albums</h1>
        <ul className="list-disc list-inside">
          {albums.map(album => (
            <li key={album.id} className="mb-2">
              {album.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DataFetcher;
