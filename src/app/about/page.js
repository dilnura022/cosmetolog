"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Nav from '@/components/Nav';
import ReviewsSection from '../reviews/page';

function AboutUs() {
    const comfortData = [
        {
            id: 1,
            imageSrc: "/one.png",
            title: "Удобный формат обучения",
            desc1: "Мы стараемся для вас и делаем обучение еще комфортнее!",
            desc2: "У нас вы можете обучаться в формате оффлайн или выбирать онлайн формат обучения. Наши мастер-классы дублируются в двух форматах"
        },
        {
            id: 2,
            imageSrc: "/two.png",
            title: "Светлые аудитории",
            desc1: "Мы стараемся для вас и делаем обучение еще комфортнее!",
            desc2: "У нас вы можете обучаться в формате оффлайн или выбирать онлайн формат обучения. Наши мастер-классы дублируются в двух форматах"
        },
        {
            id: 3,
            imageSrc: "/three.png",
            title: "Обучение в маленьких группах",
            desc1: "Мы стараемся для вас и делаем обучение еще комфортнее!",
            desc2: "У нас вы можете обучаться в формате оффлайн или выбирать онлайн формат обучения. Наши мастер-классы дублируются в двух форматах"
        }
    ];

    const [selectedTrainer, setSelectedTrainer] = useState(null);

    const trainersData = [
        {
            id: 1,
            name: "Марина Спивак",
            role: "Главный тренер",
            imageSrc: "/von.png",
            details: [
                "врач дерматовенеролог",
                "соосновательница центра эстетической косметологии ValMari",
                "ведущий специалист косметолог-инъекционист",
                "главный тренер учебного центра ValMari",
                "более 10 лет опыта работы врачом-инъекционистом",
                "более 8-ми лет опыта работы тренером",
                "в 2016 году вошла в пятерку лучших косметологов Украины"
            ]
        },
        {
            id: 2,
            name: "Елена Белогурова",
            role: "Тренер",
            imageSrc: "/elene.png",
            details: [
                "специалист по инъекционным методикам",
                "практикующий косметолог с многолетним стажем",
                "эксперт в области контурной пластики и мезотерапии",
                "сертифицированный международный тренер"
            ]
        },
        {
            id: 3,
            name: "Алина Ядчишина",
            role: "Тренер",
            imageSrc: "/alina.png",
            details: [
                "практикующий врач-косметолог",
                "специалист по ботулинотерапии и аппаратным методикам",
                "тренер по инъекционной эстетической медицине",
                "автор индивидуальных программ омоложения"
            ]
        },
        {
            id: 4,
            name: "Юлия Щукина",
            role: "Руководитель сети клиник LAZERINI",
            imageSrc: "/yulia.png",
            details: [
                "руководитель и основатель сети клиник LAZERINI",
                "эксперт в области лазерных технологий и косметологии",
                "топ-менеджер в сфере красивого бизнеса",
                "консультант по развитию эстетических центров"
            ]
        }
    ];

    const closeModal = () => setSelectedTrainer(null);


    const [reviewsList, setReviewsList] = useState([
        {
            id: 1,
            author: "Ирина Бубличенко",
            date: "15.09.2020",
            text: "Вчера была на карбокситерапии первый раз. Сомневалась в эффективности процедуры и очень зря! Цвет лица выровнялся и кожа подтянулась, воспаления стали не такими заметными. Эффект был сразу после процедуры и я планирую пройти весь курс. Алиночка профессионал своего дела и отличный собеседник, всегда рекомендует самые эффективные процедуры."
        },
        {
            id: 2,
            author: "Ирина Бубличенко",
            date: "15.09.2020",
            text: "Вчера была на карбокситерапии первый раз. Сомневалась в эффективности процедуры и очень зря! Цвет лица выровнялся и кожа подтянулась, воспаления стали не такими заметными. Эффект был сразу после процедуры и я планирую пройти весь курс. Алиночка профессионал своего дела и отличный собеседник, всегда рекомендует самые эффективные процедуры."
        },
        {
            id: 3,
            author: "Ирина Бубличенко",
            date: "15.09.2020",
            text: "Вчера была на карбокситерапии первый раз. Сомневалась в эффективности процедуры и очень зря! Цвет лица выровнялся и кожа подтянулась, воспаления стали не такими заметными. Эффект был сразу после процедуры и я планирую пройти весь курс. Алиночка профессионал своего дела и отличный собеседник, всегда рекомендует самые эффективные процедуры."
        }
    ]);

    const handleLeaveReview = () => {
        const name = prompt("Введите ваше имя:");
        if (!name) return;

        const text = prompt("Введите ваш отзыв:");
        if (!text) return;

        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        const formattedDate = `${day}.${month}.${year}`;


        const newReview = {
            id: Date.now(),
            author: name,
            date: formattedDate,
            text: text
        };

        setReviewsList([newReview, ...reviewsList]);
    };

    return (
        <div>
            <Nav />

            <section className="about-container">

                <div className="about-wrapper">

                    <div className="about-content">
                        <h1 className="about-title">
                            Учебный центр <br />
                            эстетической <br />
                            косметологии ValMari
                        </h1>
                    </div>

                    <div className="about-image-wrapper">
                        <Image
                            src="/about.png"
                            alt="Учебный центр ValMari"
                            width={589}
                            height={452}
                            className="about-img"
                            priority
                        />
                    </div>

                </div>

                <div className="about-description">
                    <p className="about-desc-text">
                        Ведущий учебный центр эстетической косметологии. Более 5 лет мы
                        проводим сертифицированные курсы профессионального образования
                        в области косметологии и индустрии красоты.
                    </p>
                    <p className="about-desc-text">
                        В данный момент в Харькове нет аналогов нашего учебного центра
                        по уровню подготовки и разнообразию читаемых курсов.
                        Все выпускники нашего учебного центра востребованы в: институтах
                        омоложения и здоровья, Спа-центрах, салонах красоты, частных клиниках
                        и других организациях в сфере "красоты и здоровья".
                    </p>
                </div>
            </section>


            <section className="comfort-container">

                <h2 className="comfort-main-title">
                    Мы - это обучение с <span>комфортом</span>
                </h2>

                <div className="comfort-list">
                    {comfortData.map((item) => (
                        <div key={item.id} className="comfort-item">


                            <div className="comfort-image-wrapper">
                                <Image
                                    src={item.imageSrc}
                                    alt={item.title}
                                    width={480}
                                    height={320}
                                    className="comfort-img"
                                />
                            </div>


                            <div className="comfort-info">
                                <h3 className="comfort-heading">{item.title}</h3>
                                <div className="comfort-underline"></div>
                                <p className="comfort-text-bold">{item.desc1}</p>
                                <p className="comfort-text">{item.desc2}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </section>

            <div className='whyWe'>
                <h1>Почему мы</h1>

                <div className='three'>
                    <div className='certificate1'>
                        <span>Преподаватели</span>
                        <p>Наши преподаватели имеют многолетний опыт в сфере косметологии и совмещают преподовательскую деятельность с практической работой в салонах красоты и других специализированных центрах.</p>
                    </div>

                    <div className='certificate2'>
                        <span>Сертификаты</span>
                        <p>Наши преподаватели имеют многолетний опыт в сфере косметологии и совмещают преподовательскую деятельность с практической работой в салонах красоты и других специализированных центрах.</p>
                    </div>

                    <div className='certificate3'>
                        <span>Повышение квалификации</span>
                        <p>Ежегодно, больше 2000 косметологов повышают квалификацию и уровень профессионализма
                            в просторных кабинетах нашего центра.</p>
                    </div>


                </div>

            </div>

            <section className="trainers-section">
                <h2 className="trainers-main-title">Наши тренера</h2>

                <div className="trainers-grid">
                    {trainersData.map((trainer) => (
                        <div
                            key={trainer.id}
                            className="trainer-single-card"
                            onClick={() => setSelectedTrainer(trainer)}
                        >
                            <div className="trainer-card-image-box">
                                <Image
                                    src={trainer.imageSrc}
                                    alt={trainer.name}
                                    width={260}
                                    height={280}
                                    className="trainer-card-img"
                                />
                            </div>
                            <h3 className="trainer-card-name">{trainer.name}</h3>
                            <p className="trainer-card-role">{trainer.role}</p>
                        </div>
                    ))}
                </div>

                {selectedTrainer && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>

                            <button className="modal-close-btn" onClick={closeModal}>&times;</button>

                            <div className="modal-body-layout">

                                <div className="modal-image-wrapper">
                                    <Image
                                        src={selectedTrainer.imageSrc}
                                        alt={selectedTrainer.name}
                                        width={300}
                                        height={300}
                                        className="modal-trainer-img"
                                    />
                                </div>

                                <div className="modal-info-wrapper">
                                    <span className="modal-subtitle">{selectedTrainer.role}</span>
                                    <h2 className="modal-trainer-name">{selectedTrainer.name}</h2>

                                    <ul className="modal-details-list">
                                        {selectedTrainer.details.map((detail, index) => (
                                            <li key={index} className="modal-list-item">{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                )}
            </section>


            <ReviewsSection />


        </div>
    );
}

export default AboutUs;