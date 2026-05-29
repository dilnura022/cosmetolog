
import Nav from '@/components/Nav'
import Image from 'next/image'
import React from 'react'

function Hero() {

    return (
        <div>

            <Nav />

            <div className='hero'>

                <div className='theme'>

                    <b>Бесплатный вебинар</b>

                    <h1>ПРОФЕССИЯ КОСМЕТОЛОГ</h1>

                    <p>
                        Приглашаем на бесплатный вебинар для профессиональных
                        косметологов и интересующихся этой профессией
                    </p>

                    <div className='class'>
                        <button className='bt'>Зарегистрироваться</button>
                        <button className='bn'>Узнать подробнее</button>
                    </div>

                </div>

                <div className='imag'>
                    <Image
                        src="/doctor.png"
                        alt='doctor'
                        width={681}
                        height={556}
                        className='pic'
                    />
                </div>

            </div>

            <div className='stats'>

                <div className="stat-box">
                    <h1>4000+</h1>

                    <p>
                        Сертификатов <br />
                        мы выдали
                    </p>
                </div>

                <div className="stat-box">
                    <h1>3500+</h1>

                    <p>
                        Моделей <br />
                        в нашей базе
                    </p>
                </div>

                <div className="stat-box">
                    <h1>1500+</h1>

                    <p>
                        Специалистов <br />
                        мы обучили
                    </p>
                </div>

                <div className="stat-box">
                    <h1>5500+</h1>

                    <p>
                        Довольных <br />
                        клиентов
                    </p>
                </div>

            </div>

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

            <div className='valmari'>

                <div className='valPic'>
                    <Image
                        src='/Rectangle 111.png'
                        alt='111'
                        width={580}
                        height={650}
                    />
                </div>

                <div className='valText'>

                    <h2 className='GREEN'>VALMARI</h2>

                    <h2 className='h2'>
                        ВЕДУЩИЙ УЧЕБНЫЙ ЦЕНТР
                        ЭСТЕТИЧЕСКОЙ КОСМЕТОЛОГИИ
                    </h2>

                    <p>
                        Описание может быть любое.
                        <br /><br />

                        Ведущий учебный центр эстетической косметологии.
                        <br /><br />

                        Более 5 лет мы проводим сертифицированные курсы
                        профессионального образования в области косметологии
                        и индустрии красоты, здоровья и молодости
                    </p>

                </div>

            </div>

            <div className='model'>

                <div className='leftText'>

                    <h1>ВЕДЕМ НАБОР МОДЕЛЕЙ</h1>
                    <p>
                        Мы предлагаем свои услуги для моделей.
                        <br /><br />

                        Выберите процедуру или несколько процедур
                        и наш менеджер проконсультирует вас и назовет
                        ближайшую дату, когда вы сможете получить
                        эту процедуру.
                    </p>

                    <button>Стать моделью</button>

                </div>

                <div className='rightPic'>
                    <Image
                        src="/Rectangle 108.png"
                        alt='pic'
                        width={498}
                        height={459}
                    />
                </div>

            </div>

            <div className='cosmetolog'>

                <div className='master-class'>

                    <h1>Мастер-классы</h1>

                    <span>
                        Мероприятия для повышения квалификации косметологов
                    </span>

                </div>

                <div className='coachs'>

                    <div className='coach1'>

                        <Image
                            src="/Rectangle 2.png"
                            alt='img'
                            width={520}
                            height={223}
                        />

                        <div className='info'>

                            <div className='infoT'>

                                <p className='infoP'>
                                    3 ноября, 10:00-12:00
                                </p>

                                <b className='infoB'>
                                    10 возможностей неодимового лазера.
                                    Лазерный пилинг, удаление тату/татуажа
                                </b>

                                <p className='infoPP'>
                                    Тренер: Юлия Щукина
                                </p>

                            </div>

                            <div className='rightButton'>

                                <div className='one'>
                                    2000 грн
                                </div>

                                <div className='two'>

                                    <Image
                                        src="/icon.svg"
                                        alt='icon'
                                        width={24}
                                        height={24}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className='coach2'>

                        <Image
                            src="/img.png"
                            alt='img'
                            width={520}
                            height={223}
                        />

                        <div className='info'>
                            <div className='infoT'>

                                <p className='infoP'>
                                    20 ноября, 12:00-17:00
                                </p>

                                <b className='infoB'>
                                    Профессия косметолог.
                                    Семинар для новичков и профессионалов
                                </b>

                                <p className='infoPP'>
                                    Спикеры:
                                    Марина Спивак,
                                    Алина Ядчишина,
                                    Елена Белогурова,
                                    Юлия Щукина
                                </p>

                            </div>

                            <div className='rightButton'>

                                <div className='one'>
                                    Бесплатно
                                </div>

                                <div className='two'>
                                    <Image
                                        src="/icon.svg"
                                        alt='icon'
                                        width={24}
                                        height={24}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


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


            <div className='sale'>
                <h1>Специальные предложения</h1>

                <div className='flex'>
                    <Image
                        src="/sale1.png"
                        alt='pic'
                        width={380}
                        height={380} />

                    <Image
                        src="/sale2.png"
                        alt='pic'
                        width={380}
                        height={380} />

                    <Image
                        src="/sale3.png"
                        alt='pic'
                        width={380}
                        height={380} />
                </div>
            </div>

        </div>
    )
}

export default Hero