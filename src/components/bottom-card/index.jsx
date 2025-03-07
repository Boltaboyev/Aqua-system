import React from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"

// icons
import card1 from "../../assets/icons/bottom-card/1.svg"
import card2 from "../../assets/icons/bottom-card/2.svg"
import card3 from "../../assets/icons/bottom-card/3.svg"

const BottomCard = () => {
    const cards = [
        {
            img: card1,
            title: "В квартирах",
            text: "В домашний условиях можно было размещать асики , но потолок размещения упирался в выделение шума и тепла асиком в помещение. Что бы создать звукоизоляцию необходимо ",
        },
        {
            img: card2,
            title: "Для дачи или дома",
            text: "В домашний условиях можно было размещать асики , но потолок размещения упирался в выделение шума и тепла асиком в помещение. Что бы создать звукоизоляцию необходимо ",
        },
        {
            img: card3,
            title: "Для предприятий",
            text: "В домашний условиях можно было размещать асики , но потолок размещения упирался в выделение шума и тепла асиком в помещение. Что бы создать звукоизоляцию необходимо ",
        },
    ]

    return (
        <section className="py-[20px]">
            <div className="container2">
                <h1 className="font-medium text-[40px] text-center leading-[120%] text-[#222834] max-[650px]:text-[20px] mb-6">
                    Где применяют систему <br />
                    <span className="text-[#06f]">AquaSystem Hydro?</span>
                </h1>

                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    loop
                    autoplay={{delay: 3000, disableOnInteraction: false}}
                    breakpoints={{
                        768: {slidesPerView: 2},
                        1024: {slidesPerView: 3},
                    }}
                    className="py-[20px]">
                    {cards.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col gap-[10px] p-[20px] rounded-xl bg-[#222834]">
                                <img
                                    src={card.img}
                                    alt=""
                                    className="h-[40px] w-[40px] mb-5"
                                />
                                <h1 className="font-medium text-[22px] leading-[114%] text-white">
                                    {card.title}
                                </h1>
                                <p className="font-normal text-[14px] leading-[139%] text-white">
                                    {card.text}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default BottomCard
