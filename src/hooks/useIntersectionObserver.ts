import { useEffect, useRef } from 'react';

export const useIntersectionObserver = (setPage: any, page: number) => {
  const observer = useRef(null);

  const handleIntersection = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const currentObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        handleIntersection();
      }
    });
    if (observer.current) {
      currentObserver.observe(observer.current);
    }
    return () => {
      currentObserver.disconnect();
    };
  }, [handleIntersection]);

  return { observer };
};
