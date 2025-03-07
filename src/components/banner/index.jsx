import React from "react"

// img
import banner1 from "../../assets/img/banner.png"

const Banner = () => {
    return (
        <section className="py-[20px]">
            <div className="container2">
                <h1 className="font-medium text-[40px] text-center leading-[120%] text-[#222834] max-[650px]:text-[20px]">
                    <span className="text-[#06f]">Чем отличается Hydro</span>{" "}
                    <br /> от заводского охлаждения?
                </h1>

                <div className="pt-[40px] max-[410px]:px-[10px] px-[30px] my-[30px] banner rounded-2xl grid grid-cols-3 gap-0px max-[1080px]:grid-cols-1 max-[1080px]:py-[30px]">
                    <div className="flex flex-col justify-between items-center gap-[0px] text-center max-[1080px]:hidden">
                        <p className="font-normal text-[24px] leading-[120%] text-center text-white">
                            Система водяного охлаждения Antminer Hydro
                        </p>

                        <img src={banner1} alt="" />
                    </div>

                    <div className="hidden justify-between items-center gap-[20px] py-[20px] max-[1080px]:flex">
                        <div className="flex flex-col justify-between items-center gap-[0px] text-center">
                            <p className="font-normal text-[14px] leading-[120%] text-center text-white">
                                Система водяного охлаждения Antminer Hydro
                            </p>

                            <img src={banner1} alt="" className="h-[140px]" />
                        </div>

                        <div className="flex flex-col justify-between items-center gap-[0px] text-center">
                            <p className="font-normal text-[14px] leading-[120%] text-center text-white">
                                Система водяного охлаждения Antminer Hydro
                            </p>

                            <img src={banner1} alt="" className="h-[140px]" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-[30px] w-full">
                        <div className="flex flex-col gap-[10px] w-full max-[410px]:text-[12px]">
                            <div className="flex justify-between items-center gap-[7px]">
                                <div className="h-[40px] flex-1 flex justify-center items-center font-medium bg-white text-[#06f] rounded-xl">
                                    130 Тн
                                </div>

                                <div className="backdrop-blur-[30px] bg-[rgba(63,71,92,0.1)] h-[40px] flex-[2] flex justify-center items-center font-medium text-[#fff] rounded-xl">
                                    Разгон
                                </div>

                                <div className="h-[40px] flex-1 flex justify-center items-center font-medium bg-white text-[#222834] rounded-xl">
                                    110 Тн
                                </div>
                            </div>

                            <div className="flex justify-between items-center gap-[7px]">
                                <div className="h-[40px] flex-1 flex justify-center items-center font-medium bg-white text-[#06f] rounded-xl">
                                    40 дб
                                </div>

                                <div className="backdrop-blur-[30px] bg-[rgba(63,71,92,0.1)] h-[40px] flex-[2] flex justify-center items-center font-medium text-[#fff] rounded-xl">
                                    Безсушмный
                                </div>

                                <div className="h-[40px] flex-1 flex justify-center items-center font-medium bg-white text-[#222834] rounded-xl">
                                    90 дб
                                </div>
                            </div>

                            <div className="flex justify-between items-center gap-[7px]">
                                <div className="h-[40px] flex-1 flex justify-center items-center font-medium bg-white text-[#06f] rounded-xl">
                                    Да
                                </div>

                                <div className="backdrop-blur-[30px] bg-[rgba(63,71,92,0.1)] h-[40px] flex-[2] flex justify-center items-center font-medium text-[#fff] rounded-xl">
                                    Отопление
                                </div>

                                <div className="h-[40px] flex-1 flex justify-center items-center font-medium bg-white text-[#222834] rounded-xl">
                                    Нет
                                </div>
                            </div>

                            <div className="flex justify-between items-center gap-[7px]">
                                <div className="h-[40px] flex-1 flex justify-center items-center font-medium bg-white text-[#06f] rounded-xl">
                                    Да
                                </div>

                                <div className="backdrop-blur-[30px] bg-[rgba(63,71,92,0.1)] h-[40px] flex-[2] flex justify-center items-center font-medium text-[#fff] rounded-xl">
                                    Домашний майнинг
                                </div>

                                <div className="h-[40px] flex-1 flex justify-center items-center font-medium bg-white text-[#222834] rounded-xl">
                                    Нет
                                </div>
                            </div>
                        </div>

                        <button className="btn p-[10px_30px] rounded-lg cursor-pointer max-[480px]:w-full">
                            Заказать консультацию
                        </button>
                    </div>

                    <div className="flex flex-col justify-between items-center gap-[0px] text-center max-[1080px]:hidden">
                        <p className="font-normal text-[24px] leading-[120%] text-center text-white">
                            Стандартное заводское воздушное охлаждение
                        </p>

                        <img src={banner1} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
