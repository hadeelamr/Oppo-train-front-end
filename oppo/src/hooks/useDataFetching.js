import { useState, useEffect } from 'react';
import { MOCK_TRIPS, MOCK_EVENTS } from '../data/mockData';

export const useDataFetching = (dataType) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usingMockData, setUsingMockData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const endpoint = dataType === 'trips' ? '/api/trips' : '/api/events';
        
      
        throw new Error('No backend available - using mock data');
        
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const serverData = await response.json();
        setData(serverData);
        setUsingMockData(false);
        
      } catch (err) {
        console.warn(`Failed to fetch ${dataType} from server:`, err.message);
        console.log(`Falling back to mock data for ${dataType}`);
        
       
        const mockData = dataType === 'trips' ? MOCK_TRIPS : MOCK_EVENTS;
        setData(mockData);
        setUsingMockData(true);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dataType]);

  return { data, loading, error, usingMockData };
};
