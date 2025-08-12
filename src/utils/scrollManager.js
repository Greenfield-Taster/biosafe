// utils/scrollManager.js
class ScrollManager {
  constructor() {
    this.isScrollBlocked = false;
    this.scrollPosition = 0;
  }

  // Блокировка прокрутки
  blockScroll() {
    if (this.isScrollBlocked) return;
    
    // Сохраняем текущую позицию прокрутки
    this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    // Блокируем прокрутку
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${this.scrollPosition}px`;
    document.body.style.width = '100%';
    document.body.classList.add('scroll-blocked');
    
    this.isScrollBlocked = true;
  }

  // Разблокировка прокрутки
  unblockScroll() {
    if (!this.isScrollBlocked) return;
    
    // Удаляем класс и возвращаем стили
    document.body.classList.remove('scroll-blocked');
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    
    // Возвращаем позицию прокрутки
    window.scrollTo(0, this.scrollPosition);
    
    this.isScrollBlocked = false;
  }

  // Прокрутка в начало страницы
  scrollToTop(smooth = true) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: smooth ? 'smooth' : 'instant'
    });
  }

  // Проверка, заблокирована ли прокрутка
  isBlocked() {
    return this.isScrollBlocked;
  }
}

// Создаем singleton экземпляр
const scrollManager = new ScrollManager();

export default scrollManager;
