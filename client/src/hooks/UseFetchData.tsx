import { api } from '@/api/api';
import { UrlFetchInterFace } from '@/interfaces/url-fetch.interface';
import axios from 'axios';
import { useEffect, useState } from 'react';

// interface UseFetchDataProps {
//   baseUrl: string;
// }

const UseFetchData = ({ baseUrl }: UrlFetchInterFace) => {
  const [data, setData] = useState<Array<any>>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${api}/${baseUrl}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [baseUrl]);

  return { data, fetchData };
};

export default UseFetchData;
