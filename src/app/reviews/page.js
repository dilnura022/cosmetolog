import React, { useState } from 'react';

export default function ReviewsSection() {
    const [reviewsList, setReviewsList] = useState([
        {
            id: 1,
            author: "Ирина Бубличенко",
            date: "09.11.2025",
            text: "Вчера была на карбокситерапии первый раз. Сомневалась в эффективности процедуры и очень зря! Цвет лица выровнялся и кожа подтянулась..."
        },
        {
            id: 2,
            author: "Ирина Бубличенко",
            date: "07.09.2026",
            text: "Вчера была на карбокситерапии первый раз. Сомневалась в эффективности процедуры и очень зря! Цвет лица выровнялся и кожа подтянулась..."
        },
        {
            id: 3,
            author: "Ирина Бубличенко",
            date: "15.09.2026",
            text: "Вчера была на карбокситерапии первый раз. Сомневалась в эффективности процедуры и очень зря! Цвет лица выровнялся и кожа подтянулась..."
        }
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [reviewText, setReviewText] = useState('');

    const closeModal = () => {
        setIsModalOpen(false);
        setName('');
        setPhone('');
        setReviewText('');
    };

    const handleSubmitReview = (e) => {
        e.preventDefault();

        if (!name.trim() || !reviewText.trim()) return;

        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        const formattedDate = `${day}.${month}.${year}`;

        const newReview = {
            id: Date.now(),
            author: name,
            date: formattedDate,
            text: reviewText
        };

        setReviewsList([newReview, ...reviewsList]);

        setIsModalOpen(false);
        setIsSuccessModalOpen(true);
    };

    return (
        <section className="reviews-section">
            <h2 className="reviews-main-title">Отзывы</h2>

            <div className="reviews-card-container">
                <div className="reviews-scroll-area">
                    {reviewsList.map((review) => (
                        <div key={review.id} className="review-single-row">
                            <div className="review-meta-box">
                                <h4 className="review-author-name">{review.author}</h4>
                                <span className="review-date-label">{review.date}</span>
                            </div>
                            <div className="review-text-content">
                                <p>{review.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="review-action-wrapper">
                    <button className="review-submit-btn" onClick={() => setIsModalOpen(true)}>
                        Оставить отзыв
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={closeModal}>&times;</button>
                        <h3 className="modal-title">Оставить отзыв</h3>
                        <form onSubmit={handleSubmitReview} className="modal-form">
                            <input
                                type="text"
                                placeholder="Ваше имя"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="modal-input"
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Ваш номер телефона"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="modal-input"
                            />
                            <textarea
                                placeholder="Текст отзыва"
                                value={reviewText}
                                onChange={(e) => setReviewText(e.target.value)}
                                className="modal-textarea"
                                rows="5"
                                required
                            ></textarea>
                            <button type="submit" className="modal-submit-btn">Отправить отзыв</button>
                        </form>
                    </div>
                </div>
            )}

            {isSuccessModalOpen && (
                <div className="modal-overlay" onClick={() => setIsSuccessModalOpen(false)}>
                    <div className="modal-content success-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={() => setIsSuccessModalOpen(false)}>
                            &times;
                        </button>

                        <h2 className="success-title">Спасибо за заявку!</h2>
                        <p className="success-text">
                            Наш менеджер свяжется с вами, <br />
                            а пока посетите нашу страницу в Instagram, <br />
                            вас ждут самые выгодные акции!
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
}