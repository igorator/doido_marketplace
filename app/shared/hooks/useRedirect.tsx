import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const useRedirect = (to: string) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to);
  }, [navigate]);
};
