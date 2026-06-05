import { useState, useEffect, useCallback } from 'react';
import api from '../lib/api';

export default function useExperience() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchExperiences = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get('/experience');
      setExperiences(response.data);
    } catch (err) {
      setError(err.response?.data?.error || err.message || 'Failed to fetch experiences');
    } finally {
      setLoading(false);
    }
  }, []);

  const createExperience = async (data) => {
    setError(null);
    try {
      const response = await api.post('/experience', data);
      setExperiences((prev) => [...prev, response.data]);
      return response.data;
    } catch (err) {
      const errMsg = err.response?.data?.error || err.message || 'Failed to create experience';
      setError(errMsg);
      throw new Error(errMsg);
    }
  };

  const updateExperience = async (id, data) => {
    setError(null);
    try {
      const response = await api.put(`/experience/${id}`, data);
      setExperiences((prev) =>
        prev.map((item) => (item.id === id ? response.data : item))
      );
      return response.data;
    } catch (err) {
      const errMsg = err.response?.data?.error || err.message || 'Failed to update experience';
      setError(errMsg);
      throw new Error(errMsg);
    }
  };

  const deleteExperience = async (id) => {
    setError(null);
    try {
      await api.delete(`/experience/${id}`);
      setExperiences((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      const errMsg = err.response?.data?.error || err.message || 'Failed to delete experience';
      setError(errMsg);
      throw new Error(errMsg);
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, [fetchExperiences]);

  return {
    experiences,
    loading,
    error,
    refetch: fetchExperiences,
    createExperience,
    updateExperience,
    deleteExperience,
  };
}
