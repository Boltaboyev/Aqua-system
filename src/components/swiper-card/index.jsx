import React, {useRef} from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"

// img
import card from "../../assets/img/card.png"

// icons
import bitcoin from "../../assets/icons/bitcoin.svg"
import equi from "../../assets/icons/equi.svg"
import card1 from "../../assets/icons/card/card1.svg"
import card2 from "../../assets/icons/card/card2.svg"
import card3 from "../../assets/icons/card/card3.svg"
import {FaChevronRight, FaChevronLeft} from "react-icons/fa6"

const SwiperCard = () => {
    const swiperRef = useRef(null)

    const slideNext = () => {
        if (swiperRef.current) swiperRef.current.slideNext()
    }

    const slidePrev = () => {
        if (swiperRef.current) swiperRef.current.slidePrev()
    }

    return (
        <section className="py-[20px]">
            <div className="container2">
                <div className="pt-[20px] pb-[40px] flex justify-between items-end max-[675px]:flex-col max-[675px]:items-center max-[675px]:text-center max-[675px]:gap-[15px]">
                    <h1 className="font-medium text-[40px] leading-[120%] text-[#222834] max-[380px]:text-[30px]">
                        Готовые решения <br />{" "}
                        <span className="text-[#06f]">AquaSystem</span>
                    </h1>

                    <div className="flex justify-center items-center gap-[10px]">
                        <button className="rounded-[52px] flex justify-between cursor-pointer items-center gap-[10px] p-[3px_3px_3px_17px] border-2 border-[#222834] h-[50px] bg-[#222834]">
                            <p className="font-medium text-[16px] leading-[156%] text-white">
                                Bitcoin
                            </p>
                            <img src={bitcoin} alt="" />
                        </button>

                        <button className="rounded-[52px] flex justify-between cursor-pointer items-center gap-[10px] p-[3px_3px_3px_17px] h-[50px] bg-[#fff] border-2 border-[#222834]">
                            <p className="font-medium text-[16px] leading-[156%] text-[#222834]">
                                Equihash
                            </p>
                            <img src={equi} alt="" />
                        </button>
                    </div>
                </div>

                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    loop
                    autoplay={{delay: 3000, disableOnInteraction: false}}
                    breakpoints={{
                        640: {slidesPerView: 1},
                        768: {slidesPerView: 2},
                    }}
                    className="w-full"
                    onSwiper={(swiper) => (swiperRef.current = swiper)}>
                    {[1, 2, 3].map((item) => (
                        <SwiperSlide key={item}>
                            <div className="grid grid-cols-2 gap-[5px] p-[25px] rounded-2xl bg-[#222834] relative max-[1100px]:grid-cols-1">
                                <div className="hidden justify-center items-center max-[1100px]:flex h-[200px] max-[340px]:h-[130px]">
                                    <img
                                        src={card}
                                        alt=""
                                        className="h-full w-full object-contain"
                                    />
                                </div>

                                <div className="flex flex-col justify-between items-start gap-[35px]">
                                    <p className="font-medium text-[25px] leading-[125%] text-white max-[340px]:text-[16px]">
                                        Система охлаждения Antminer S19 hydro
                                    </p>

                                    <div className="flex flex-col gap-[10px]">
                                        <div className="flex justify-start items-center gap-[5px]">
                                            <img src={card1} alt="" />
                                            <p className="font-medium text-[14px] leading-[143%] text-white">
                                                Разгон: 112Th
                                            </p>
                                        </div>

                                        <div className="flex justify-start items-center gap-[5px]">
                                            <img src={card2} alt="" />
                                            <p className="font-medium text-[14px] leading-[143%] text-white">
                                                Отопление дома
                                            </p>
                                        </div>

                                        <div className="flex justify-start items-center gap-[5px]">
                                            <img src={card3} alt="" />
                                            <p className="font-medium text-[14px] leading-[143%] text-white">
                                                Снижение шума до уровня ПК
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex justify-start items-center gap-[15px]">
                                        <button className="btn p-[10px_30px] rounded-lg cursor-pointer">
                                            Подробнее
                                        </button>

                                        <p className="font-thin text-[22px] text-white max-[340px]:text-[16px]">
                                            от 800$
                                        </p>
                                    </div>
                                </div>

                                <div className="flex justify-center items-center max-[1100px]:hidden">
                                    <img
                                        src={card}
                                        alt=""
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex justify-center items-center gap-[10px] py-[20px]">
                    <button
                        onClick={slidePrev}
                        className="p-[5px_10px] rounded-lg border-2 border-[#d0d0db] cursor-pointer h-[40px] text-[#9b9ba7]">
                        <FaChevronLeft />
                    </button>

                    <button className="p-[5px_10px] rounded-lg border-2 border-[#d0d0db] cursor-pointer h-[40px] text-[#9b9ba7]">
                        Показать еще
                    </button>

                    <button
                        onClick={slideNext}
                        className="p-[5px_10px] rounded-lg border-2 border-[#d0d0db] cursor-pointer h-[40px] text-[#9b9ba7]">
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SwiperCard
