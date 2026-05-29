"use client"
import Nav from '@/components/Nav'
import Image from 'next/image'
import React, { useState } from 'react'

function Curs() {
    const [isDayTwoOpen, setIsDayTwoOpen] = useState(false);


    const dayOneTheory = [
        "Виды токсинов на рынке. Преимущества и особенности",
        "Показания, противопоказания применения для разных возрастастов, в зависимости от особенностей строения лица",
        "Показания к применению БТА в зависимости от анатомических и физиологических особенностей",
        "Анатомия лица по зонам. Геометрия точек и дозы для безопасного введения БТА",
        "Созависимость возраста и доз",
        "Техники разведения на разные виды токсинов",
        "Все виды осложнений и методы их коррекции",
        "Условия хранения БТА"
    ];

    const dayOnePractice = [
        "Геометрия точек",
        "Техники разведения БТА",
        "Постановка руки",
        "Самостоятельные инъекции под чутким руководством тренера"
    ];



    const learningPoints = [
        {
            title: "Минимум препарата максимум результата",
            text: "Вы научитесь делать эстетически красивые результаты, а не лица под копирку"
        },
        {
            title: 'Тренер гарантировано "поставит вашу руку"',
            text: "Вы будете колоть самостоятельно уже на курсе"
        },
        {
            title: "Узнаете, как работать с любыми ТМ ботулотоксина",
            text: "Мы объясним, за что отвечает каждый показатель на упаковке и по какому принципу выбирать препарат"
        },
        {
            title: "Вы отработаете практику на моделях",
            text: "В нашей базе более 3500 моделей с реальными проблемами и пожеланиями"
        }
    ];

    const achievements = [
        "врач дерматовенеролог",
        "соосновательница центра эстетической косметологии ValMari",
        "ведущий специалист косметолог-инъекционист",
        "главный тренер учебного центра ValMari",
        "более 10 лет опыта работы врачом-инъекционистом",
        "более 8-ми лет опыта работы тренером",
        "в 2016 году вошла в пятерку лучших косметологов Украины"
    ];


    return (
        <div>
            <Nav />
            <div className='infoDoc'>

                <div className='start-curs'>

                    <span>Старт курса: 10 января</span>
                    <h1>Ботулинотерапия для косметологов</h1>
                    <div className='class'>
                        <button className='bt'>Зарегистрироваться</button>
                        <button className='bn'>Узнать подробнее</button>
                    </div>

                </div>

                <div>

                    <Image
                        src="/doc.png"
                        alt='doc'
                        width={590}
                        height={588}
                        className='doc' />

                </div>


            </div>


            <div className='message'>
                <span>Процедура ботулинотерапия - это инъекционная методика для устранения и профилактики морщин.
                    Также, процедура помогает бороться с
                    опущением уголков рта
                    , потерей четкости овала лица
                    , гипергидрозом. <br /><br /><br />

                    На курсе вы научитесь тщательно подбирать препарат, а также отработаете на практике техники введения и безопасные разметки точек для разных анатомических типов лица.
                    Вы будете эффективно и беопасно применять навыки в работе со своими клиентами. <br /><br /><br />

                    Курс по ботулинотерапии необходим, чтобы вы были увереныв своих знаниях и приносили желаемый результат своим клиентам.
                </span>
            </div>


            <div className="course-container">
                <h2 className="course-title">Программа курса</h2>

                <div className="day-card">
                    <div className="day-header">
                        <div className="day-number">1 ДЕНЬ</div>
                        <div className="day-content">
                            <div className="theme-title">
                                <strong>Тема:</strong> Коррекция ботулотоксином типа А (БТА) верхней и средней трети лица
                            </div>

                            <div className="section-title">Теория</div>
                            <ul className="course-list">
                                {dayOneTheory.map((item, index) => (
                                    <li key={index} className="course-list-item">
                                        <span className="item-number">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="section-title">Практика</div>
                            <ul className="course-list">
                                {dayOnePractice.map((item, index) => (
                                    <li key={index} className="course-list-item">
                                        <span className="item-number">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="day-card">
                    <div
                        className="accordion-header"
                        onClick={() => setIsDayTwoOpen(!isDayTwoOpen)}
                    >
                        <div className="day-header" style={{ width: '100%', marginBottom: 0 }}>
                            <div className="day-number">2 ДЕНЬ</div>
                            <div className="theme-title" style={{ marginBottom: 0, paddingRight: '20px' }}>
                                <strong>Тема:</strong> Коррекция нижней трети лица, особенности лечения гипергидроза, понятие техники мезоботокса
                            </div>
                        </div>
                        <button className="toggle-button">
                            {isDayTwoOpen ? '−' : '+'}
                        </button>
                    </div>

                    {isDayTwoOpen && (
                        <div className="day-content" style={{ marginTop: '20px', paddingLeft: '120px' }}>
                            <div className="section-title">Теория / Практика</div>
                            <p className="course-list-item" style={{ color: '#999' }}>
                                Дополнительная программа второго дня...
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <section className="benefits-container">
                <h2 className="benefits-title">Чему вы научитесь на курсе</h2>

                <div className="benefits-grid">
                    {learningPoints.map((point, index) => (
                        <div key={index} className="benefit-card">
                            <h3 className="benefit-card-title">{point.title}</h3>
                            <p className="benefit-card-text">{point.text}</p>
                        </div>
                    ))}
                </div>
            </section>


            <section className="trainer-container">
                <div className="trainer-wrapper">


                    <div className="trainer-image-box">
                        <Image
                            src="/foto.png"
                            alt="Марина Спивак - Тренер"
                            width={350}
                            height={350}
                            className="trainer-img"
                        />
                    </div>


                    <div className="trainer-info">
                        <span className="trainer-subtitle">Тренер</span>
                        <h2 className="trainer-name">Марина Спивак</h2>

                        <ul className="trainer-list">
                            {achievements.map((item, index) => (
                                <li key={index} className="trainer-list-item">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>


            <section className='other'>

                <div className='curs'>

                    <h1>Курсы обучения</h1>

                    <div className='cards'>

                        <div className='card'>

                            <h3>
                                Канюльные <br />
                                техники
                            </h3>

                            <div className='off'>Оффлайн</div>

                            <b className='bold'>1 - 4 мая</b>

                            <div className='df'>

                                <div className='forText'>
                                    Краткое описание
                                    <br />
                                    Что-то о курсе
                                    <br />
                                    Пару фактов
                                    <br />
                                    Краткое описание
                                </div>

                                <div className='forFace'>
                                    <Image
                                        src='/image.svg'
                                        alt='img'
                                        width={135}
                                        height={159}
                                    />
                                </div>

                            </div>

                            <p className='pText'>
                                Свободно 2 из 15 мест
                            </p>

                            <button className='bbt'>
                                Зарегистрироваться
                            </button>

                            <button className='btt'>
                                Подробнее
                            </button>

                        </div>

                        <div className='card2'>

                            <h3>
                                Мезотерапия <br />
                                и биоревителизация
                            </h3>

                            <div className='on'>Онлайн</div>

                            <b className='bold'>15 - 20 мая</b>

                            <div className='df'>
                                <div className='forText'>
                                    Краткое описание
                                    <br />
                                    Что-то о курсе
                                    <br />
                                    Пару фактов
                                    <br />
                                    Краткое описание
                                </div>

                                <div className='forFace'>
                                    <Image
                                        src='/image.svg'
                                        alt='img'
                                        width={135}
                                        height={159}
                                    />
                                </div>

                            </div>

                            <p className='pText'>
                                Свободно 2 из 15 мест
                            </p>

                            <button className='bbtt'>
                                Зарегистрироваться
                            </button>

                            <button className='bttb'>
                                Подробнее
                            </button>

                        </div>

                        <div className='card3'>

                            <h3>
                                Мезотерапия <br />
                                и биоревителизация
                            </h3>

                            <div className='master'>
                                Мастер класс
                            </div>

                            <b className='bold'>15 - 20 мая</b>

                            <div className='df'>

                                <div className='forText'>
                                    Краткое описание
                                    <br />
                                    Что-то о курсе
                                    <br />
                                    Пару фактов
                                    <br />
                                    Краткое описание
                                </div>

                                <div className='forFace'>
                                    <Image
                                        src='/image 2.svg'
                                        alt='img'
                                        width={135}
                                        height={159}
                                    />
                                </div>

                            </div>

                            <p className='pText'>
                                Свободно 2 из 15 мест
                            </p>

                            <button className='ttt'>
                                Зарегистрироваться
                            </button>

                            <button className='bbb'>
                                Подробнее
                            </button>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    )
}

export default Curs