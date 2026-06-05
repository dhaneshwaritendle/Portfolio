import { useState, useEffect, useCallback } from 'react';
import api from '../lib/api';

console.log("useSkills hook loaded");

export default function useSkills() {
  console.log("fetching skills...");
  console.log(api.defaults.baseURL + '/skills');

  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

const fetchSkills = useCallback(async () => {
  console.log("fetchSkills called");

  setLoading(true);
  setError(null);
  try {
    console.log("Making API request...");
    const response = await api.get('/skills');

    console.log("Response received:", response);
    console.log("Response data:", response.data);

    setSkills(response.data);
  } catch (err) {
    console.error("API Error:", err);
    setError(
      err.response?.data?.error ||
      err.message ||
      'Failed to fetch skills'
    );
  } finally {
    setLoading(false);
  }
}, []);


  useEffect(() => {
    fetchSkills();
  }, [fetchSkills]);

  return {
    skills,
    loading,
    error,
    refetch: fetchSkills,
  };
}

