import { useEffect, useRef, useState } from 'react';
import { Title, List, Button, Text, Section, Cell } from '@telegram-apps/telegram-ui';
import './Chapters.css';
import { Icon16Cancel } from '@vkontakte/icons';
import { useTranslation } from 'react-i18next';

// Import lesson modules
import * as LessonsEN from './lessonseng';
import * as LessonsRU from './Lessons';

export function Chapters({ onClose, index, language }) {
  const [isClosing, setIsClosing] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const startTouch = useRef(null);
  const lastLessonRef = useRef(null);

  const { t } = useTranslation();

  useEffect(() => {
    window.Telegram.WebApp.BackButton.show();
    window.Telegram.WebApp.BackButton.onClick(handleClose);

    const handleTouchStart = (e) => { startTouch.current = e.touches[0].clientY; };
    const handleTouchMove = (e) => {
      if (startTouch.current !== null) {
        const delta = e.touches[0].clientY - startTouch.current;
        if (delta < -50) setIsFullScreen(true);
      }
    };
    const handleTouchEnd = () => { startTouch.current = null; };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    const lastCompletedLesson = localStorage.getItem(`chapter_${index}_lastLesson`);
    if (lastLessonRef.current && lastCompletedLesson) {
      lastLessonRef.current.scrollIntoView();
    }

    return () => {
      window.Telegram.WebApp.BackButton.hide();
      window.Telegram.WebApp.BackButton.onClick(null);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [index]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  const handleFinishLesson = (lessonNumber) => {
    localStorage.setItem(`chapter_${index}_finished`, lessonNumber);
    handleClose();
  };

  const renderLessons = () => {
    const lessons = language === 'ru' ? LessonsRU : LessonsEN;
    const lessonList = {
      1: [lessons.Lesson1_1, lessons.Lesson1_2, lessons.Lesson1_3, lessons.Lesson1_4, lessons.Lesson1_5],
      2: [lessons.Lesson2_1, lessons.Lesson2_2, lessons.Lesson2_3, lessons.Lesson2_5, lessons.Lesson2_6],
      3: [lessons.Lesson3_1, lessons.Lesson3_2, lessons.Lesson3_3, lessons.Lesson3_5],
      4: [lessons.Lesson4_1, lessons.Lesson4_2, lessons.Lesson4_3, lessons.Lesson4_4, lessons.Lesson4_5, lessons.Lesson4_6],
      5: [lessons.Lesson5_1, lessons.Lesson5_2, lessons.Lesson5_3, lessons.Lesson5_4, lessons.Lesson5_5],
      6: [lessons.Lesson6_1, lessons.Lesson6_2, lessons.Lesson6_3, lessons.Lesson6_4],
      7: [lessons.Lesson7_1, lessons.Lesson7_2, lessons.Lesson7_3, lessons.Lesson7_4, lessons.Lesson7_5],
      8: [lessons.Lesson8_1, lessons.Lesson8_2, lessons.Lesson8_3, lessons.Lesson8_4],
      9: [lessons.Lesson9],
    };

    return (lessonList[index] || []).map((LessonComponent, i) => (
      <div key={i} ref={i === lessonList[index].length - 1 ? lastLessonRef : null}>
        <LessonComponent />
      </div>
    ));
  };

  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div
        className={`popup-menu ${isClosing ? 'popup-slide-out' : 'popup-slide-in'} ${isFullScreen ? 'popup-fullscreen' : ''}`}
        style={{ height: "100%" }}
        onClick={(e) => e.stopPropagation()}
      >
        {renderLessons()}
        <Button
          style={{ width: "100%", marginTop: 16, marginBottom: 16 }}
          onClick={handleFinishLesson}
        >
          {t('chapters1_finish')}
        </Button>
      </div>
    </div>
  );
}
