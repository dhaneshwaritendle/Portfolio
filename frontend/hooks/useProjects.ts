import { useState, useEffect, useCallback } from 'react';
import api from '../lib/api';

export default function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProjects = useCallback(async () => {
    console.log("fetchProjects called");
    setLoading(true);
    setError(null);
    try {
      const response = await api.get('/projects');

      console.log("response received:" , response);
      console.log("Response data ", response.data);
      setProjects(response.data);
    } catch (err) {
      setError(err.response?.data?.error || err.message || 'Failed to fetch projects');
    } finally {
      setLoading(false);
    }
  }, []);
  
  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return {
    projects,
    loading,
    error,
    refetch: fetchProjects,
  };
}