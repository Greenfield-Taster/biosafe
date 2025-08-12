import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import scrollManager from '../utils/scrollManager';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Для главной страницы не прокручиваем, так как там своя логика анимации
    if (pathname !== '/') {
      scrollManager.scrollToTop(false); // Мгновенная прокрутка для лучшего UX
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
