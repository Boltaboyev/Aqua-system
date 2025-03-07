import React, {useRef} from "react"

// swiper
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import {Swiper, SwiperSlide} from "swiper/react"
import {Pagination, Autoplay} from "swiper/modules"

// img
import img1 from "../../assets/img/swiper.png"
import img2 from "../../assets/img/swiper.png"
import img3 from "../../assets/img/swiper.png"

// icons
import card1 from "../../assets/icons/showcase/1.svg"
import card2 from "../../assets/icons/showcase/2.svg"
import card3 from "../../assets/icons/showcase/3.svg"

const Showcase = () => {
    const swiperRef = useRef(null)

    return (
        <section className="py-[20px]">
            <div className="container2">
                <Swiper
                    ref={swiperRef}
                    modules={[Pagination, Autoplay]}
                    autoplay={{delay: 4000, disableOnInteraction: false}}
                    pagination={{clickable: true}}
                    loop
                    className="w-full h-[500px] rounded-lg max-[750px]:h-100">
                    {[img1, img2, img3].map((img, index) => (
                        <SwiperSlide
                            key={index}
                            style={{
                                backgroundImage: `url(${img})`,
                            }}
                            className="bg-cover max-[750px]:bg-right bg-no-repeat w-full h-full overflow-hidden rounded-lg p-[50px] !flex !flex-col !gap-[15px] !justify-center !items-start max-[750px]:!items-center max-[750px]:!justify-start max-[750px]:text-center">
                            <div className="hidden max-[750px]:block absolute inset-0 bg-gradient-to-b from-[#000000] to-transparent"></div>
                            <p className="font-normal text-[17px] leading-[159%] text-[#fff]  relative z-10">
                                AquaSystem
                            </p>
                            <h1 className="font-medium text-[44px] leading-[120%] text-[#fff] relative max-[575px]:text-[35px] max-[380px]:text-[28px] max-[360px]:text-[25px] max-[350px]:text-[25px]">
                                Система водяного{" "}
                                <br className="max-[350px]:hidden" /> охлаждения{" "}
                                <br className="max-[350px]:hidden" />
                                <span className="text-[#06f]">
                                    для Antminer
                                </span>
                            </h1>

                            <div className="grid grid-cols-4 gap-[15px] w-[60%] mt-3 max-[1125px]:hidden">
                                <div className="flex flex-col gap-[10px] p-[10px] rounded-md bg-[#ffffff10] backdrop-blur-[8px]">
                                    <img
                                        src={card1}
                                        alt=""
                                        className="w-[25px] h-[25px]"
                                    />
                                    <p className="font-normal text-[14px] leading-[136%] text-white">
                                        Снижение <br /> температур <br />{" "}
                                        ASIC-майнера
                                    </p>
                                </div>

                                <div className="flex flex-col gap-[10px] p-[10px] rounded-md bg-[#ffffff10] backdrop-blur-[8px]">
                                    <img
                                        src={card2}
                                        alt=""
                                        className="w-[25px] h-[25px]"
                                    />
                                    <p className="font-normal text-[14px] leading-[136%] text-white">
                                        Снижение <br /> температур <br />{" "}
                                        ASIC-майнера
                                    </p>
                                </div>

                                <div className="flex flex-col gap-[10px] p-[10px] rounded-md bg-[#ffffff10] backdrop-blur-[8px] ">
                                    <img
                                        src={card3}
                                        alt=""
                                        className="w-[25px] h-[25px]"
                                    />
                                    <p className="font-normal text-[14px] leading-[136%] text-white">
                                        Снижение <br /> температур <br />{" "}
                                        ASIC-майнера
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="grid-cols-2 gap-[15px] mt-3 hidden max-[1125px]:grid">
                    <div className="flex flex-col gap-[10px] p-[10px] rounded-md bg-[#06f]">
                        <img src={card1} alt="" className="w-[25px] h-[25px]" />
                        <p className="font-normal text-[14px] leading-[136%] text-white">
                            Снижение температур ASIC-майнера
                        </p>
                    </div>

                    <div className="flex flex-col gap-[10px] p-[10px] rounded-md bg-[#06f]">
                        <img src={card2} alt="" className="w-[25px] h-[25px]" />
                        <p className="font-normal text-[14px] leading-[136%] text-white">
                            Снижение температур ASIC-майнера
                        </p>
                    </div>

                    <div className="flex flex-col gap-[10px] p-[10px] rounded-md bg-[#06f]">
                        <img src={card3} alt="" className="w-[25px] h-[25px]" />
                        <p className="font-normal text-[14px] leading-[136%] text-white">
                            Снижение температур ASIC-майнера
                        </p>
                    </div>

                    <div className="flex flex-col gap-[10px] p-[10px] rounded-md bg-[#06f]">
                        <img src={card1} alt="" className="w-[25px] h-[25px]" />
                        <p className="font-normal text-[14px] leading-[136%] text-white">
                            Снижение температур ASIC-майнера
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Showcase
