"use client";

import Nav from '@/components/Nav';
import React, { useState } from 'react';

export default function Online() {

  const [activeVideoUrl, setActiveVideoUrl] = useState(null);

  const mainLesson = {
    speaker: "Марина Спивак",
    title: "Как безопасно работать в зоне носослезной борозды канюлей?",
    price: "500 грн",
    videoUrl: "https://www.youtube.com/embed/BbF9h5PCaH4"
  };

  const otherLessons = [
    {
      id: 1,
      title: "Актуальна ли мезотерапия в коррекции шеи, декольте, кистей рук и какие существуют альтернативы?",
      videoUrl: "https://www.youtube.com/embed/BbF9h5PCaH4"
    },
    {
      id: 2,
      title: "Актуальна ли мезотерапия в коррекции шеи, декольте, кистей рук и какие существуют альтернативы?",
      videoUrl: "https://www.youtube.com/embed/BbF9h5PCaH4"
    },
    {
      id: 3,
      title: "Актуальна ли мезотерапия в коррекции шеи, декольте, кистей рук и какие существуют альтернативы?",
      videoUrl: "https://www.youtube.com/embed/BbF9h5PCaH4"
    }
  ];

  const handleBuy = (title) => {
    alert(`Вы переходите к оплате курса: "${title}"`);
  };

  return (
    <div>
      <Nav />
      <div className="video-lessons-page">
        <section className="main-lesson-section">
          <h2 className="section-main-title">ВИДЕО-УРОК</h2>

          <div className="main-lesson-layout">
            <div className="main-lesson-info">
              <span className="lesson-speaker">Спикер: {mainLesson.speaker}</span>
              <h1 className="main-lesson-title">{mainLesson.title}</h1>
              <p className="lesson-price">Стоимость: {mainLesson.price}</p>
              <button
                className="btn-green-buy"
                onClick={() => handleBuy(mainLesson.title)}
              >
                Купить
              </button>
            </div>

            <div
              className="video-preview-card main-video"
              onClick={() => setActiveVideoUrl(mainLesson.videoUrl)}
            >
              <div className="video-overlay-dark">
                <div className="play-button-circle">
                  <span className="play-triangle">▶</span>
                </div>
                <span className="play-text">Смотреть трейлер</span>
              </div>
            </div>
          </div>
        </section>

        <section className="other-lessons-section">
          <h3 className="other-lessons-title">Другие видео-уроки</h3>

          <div className="other-lessons-grid">
            {otherLessons.map((lesson) => (
              <div key={lesson.id} className="other-lesson-item">

                <div
                  className="video-preview-card mini-video"
                  onClick={() => setActiveVideoUrl(lesson.videoUrl)}
                >
                  <div className="video-overlay-dark">
                    <div className="play-button-circle mini">
                      <span className="play-triangle">▶</span>
                    </div>
                    <span className="play-text">Смотреть трейлер</span>
                  </div>
                </div>

                <p className="other-lesson-desc">{lesson.title}</p>
                <button
                  className="btn-green-buy mini-btn"
                  onClick={() => handleBuy(lesson.title)}
                >
                  Купить
                </button>

              </div>
            ))}
          </div>
        </section>

        {activeVideoUrl && (
          <div className="video-modal-overlay" onClick={() => setActiveVideoUrl(null)}>
            <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-modal-btn" onClick={() => setActiveVideoUrl(null)}>×</button>
              <div className="iframe-responsive-wrapper">
                <iframe
                  src={activeVideoUrl}
                  title="Video Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}