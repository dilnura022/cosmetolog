"use client";

import React from 'react';
import Image from 'next/image';
import Nav from '@/components/Nav';


export default function SpecialOffers() {

    const offersData = [
        {
            id: 1,
            imageSrc: "/first.png",
            title: "Выгодная комбинация",
            text1: "При покупке препаратов ТМ \"Blum Gel\" + ботулотоксин типа А = 1 флакон препарата ТМ \"Blum Gel\" в подарок.",
            text2: "Акция действует до 08 июля, поспешите воспользоваться выгодным предложением!",
            text3: "Чтобы узнать условия акции оставляйте заявку или звоните по номеру 0(800)-50-86-22"
        },
        {
            id: 2,
            imageSrc: "/seond.png",
            title: "Вебинар в подарок",
            text1: "При покупке 2х вебинаров на выбор.",
            text2: "Акция действует до 08 июля, поспешите воспользоваться выгодным предложением!",
            text3: "Чтобы узнать условия акции оставляйте заявку или звоните по номеру 0(800)-50-86-22"
        },
        {
            id: 3,
            imageSrc: "/third.png",
            title: "Выгодная комбинация",
            text1: "При покупке 2х флаконов БТА = 1 филлер на выбор в подарок.",
            text2: "Акция действует до 08 июля, поспешите воспользоваться выгодным предложением!",
            text3: "Чтобы узнать условия акции оставляйте заявку или звоните по номеру 0(800)-50-86-22"
        },
          {
            id: 4,
            imageSrc: "/seond.png",
            title: "Выгодная комбинация",
            text1: "При покупке 2х флаконов БТА = 1 филлер на выбор в подарок.",
            text2: "Акция действует до 08 июля, поспешите воспользоваться выгодным предложением!",
            text3: "Чтобы узнать условия акции оставляйте заявку или звоните по номеру 0(800)-50-86-22"
        },
          {
            id: 5,
            imageSrc: "/third.png",
            title: "Выгодная комбинация",
            text1: "При покупке 2х флаконов БТА = 1 филлер на выбор в подарок.",
            text2: "Акция действует до 08 июля, поспешите воспользоваться выгодным предложением!",
            text3: "Чтобы узнать условия акции оставляйте заявку или звоните по номеру 0(800)-50-86-22"
        }
    ];

    const handleApply = (id) => {
        console.log(`Aksiya id: ${id} bo'yicha ariza qoldirildi.`);
        alert("Ваша заявка принята!");
    };

    return (
        <div>
            <Nav/>
            <section className="offers-container">
                <h2 className="offers-title">Специальные предложения</h2>

                <div className="offers-list">
                    {offersData.map((offer) => (
                        <div key={offer.id} className="offer-item">

                            
                            <div className="offer-image-wrapper">
                                <Image
                                    src={offer.imageSrc}
                                    alt={offer.title}
                                    width={380}
                                    height={380}
                                    className="offer-img"
                                />
                            </div>

                
                            <div className="offer-info">
                                <h3 className="offer-heading">{offer.title}</h3>
                                <p className="offer-text">{offer.text1}</p>
                                <p className="offer-text"><strong>{offer.text2}</strong></p>
                                <p className="offer-text">{offer.text3}</p>

                                <button
                                    className="offer-button"
                                    onClick={() => handleApply(offer.id)}
                                >
                                    Оставить заявку
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}