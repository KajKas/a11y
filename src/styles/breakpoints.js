import { useMediaQuery } from 'react-responsive';

export const useIsDesktop = () => {
  return useMediaQuery({
    query: `(min-width: 1200px)`,
  });
};

export const useIsMobile = () => {
  return useMediaQuery({
    query: `(max-width: 767px)`,
  });
};

export const useIsTablet = () => {
  return useMediaQuery({
    query: `(max-width: 1499px) and (min-width: 768}px)`,
  });
};
