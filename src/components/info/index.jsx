import React from "react"

// img
import img from "../../assets/img/about.png"

const Info = () => {
    return (
        <section className="py-[20px]">
            <div className="container2 grid grid-cols-2 gap-[20px] items-center max-[860px]:grid-cols-1">
                <div className="flex flex-col gap-[20px]">
                    <h1 className="font-medium text-[40px] text-[#222834] leading-[120%] max-[480px]:text-[30px]">
                        Что такое система водяного охлаждения{" "}
                        <span className="text-[#06f]">AquaSystem?</span>
                    </h1>

                    <p className="font-medium text-[16px] leading-[121%] text-[#222834] max-[480px]:text-[13px]">
                        Разрабокта компании AquaSystems - модификации
                        стандартного охлаждения асик майнеров 19 15 и 11 серий ,
                        что заменяет шумные куллера асиков и стандартный
                        радиатор на водоблоки.
                    </p>

                    <div className="hidden justify-center items-center max-[860px]:flex">
                        <img
                            src={img}
                            alt=""
                            className="h-[480px] max-[970px]:h-[300px] max-[380px]:h-[200px]"
                        />
                    </div>

                    <div className="flex justify-start items-center gap-[25px] p-[20px] px-[30px] rounded-2xl bg-[#eaedf2]">
                        <span className="h-[10px] w-[10px] rounded-full bg-[#06f] shadow-[0_0_15px_5px] shadow-blue-500"></span>

                        <p className="font-medium flex-1/12 text-[16px] leading-[131%] text-[#222834] max-[480px]:text-[14px]">
                            Модификация снижает выделение шума практически на
                            100-150%.
                        </p>
                    </div>

                    <div className="flex justify-start items-center gap-[25px] p-[20px] px-[30px] rounded-2xl bg-[#eaedf2]">
                        <span className="inline-block h-[10px] w-[10px] rounded-full bg-[#06f] shadow-[0_0_15px_5px] shadow-blue-500"></span>

                        <p className="font-medium flex-1/12 text-[16px] leading-[131%] text-[#222834] max-[480px]:text-[14px]">
                            Уровень шума снижается до уровня домашнего Пк и
                            позволяет установить{" "}
                            <span className="max-[480px]:hidden">
                                асик майнер у Вас дома либо в любом другом
                                помещение с возможностью отапливать и экономить
                                на этом.
                            </span>
                        </p>
                    </div>
                </div>

                <div className="flex justify-center items-center max-[860px]:hidden">
                    <img
                        src={img}
                        alt=""
                        className="h-[480px] max-[970px]:h-[300px]"
                    />
                </div>
            </div>
        </section>
    )
}

export default Info
