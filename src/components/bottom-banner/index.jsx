import React from "react"

// img
import wave from "../../assets/img/wave.png"

const BottomBanner = () => {
    return (
        <section className="my-[20px]">
            <div className="container2 bg-[#06f] rounded-2xl flex justify-start items-center px-[30px] max-[480px]:px-[20px] relative overflow-hidden">
                <div className="flex flex-col gap-[20px] py-[35px] w-[50%] max-[950px]:w-full z-10 ">
                    <h1 className="font-normal text-[40px] text-white leading-[120%] max-[510px]:text-[30px] max-[400px]:text-[20px]">
                        Закажите лучшую систему для охладения Asic-майнера уже
                        сегодня!
                    </h1>

                    <p className="font-medium text-[14px] leading-[143%] text-white max-[400px]:font-normal max-[400px]:text-[12px]">
                        По согласованию с менеджером , вы сможете заказать любую
                        комплектность посавки. Либо выбрать уже из готовых на
                        сайте или после согласования с менеджером.
                    </p>

                    <div className="flex justify-start items-center gap-[10px] max-[510px]:flex-col max-[510px]:items-start">
                        <button className="p-[10px_20px] btn cursor-pointer rounded-lg !bg-[#222834] text-white">
                            Связаться в Telegram
                        </button>

                        <button className="p-[8px_18px] btn cursor-pointer rounded-lg border-2 text-white">
                            Связаться в Telegram
                        </button>
                    </div>
                </div>

                <img
                    src={wave}
                    alt=""
                    className="absolute right-[10%] max-[950px]:opacity-40"
                />
            </div>
        </section>
    )
}

export default BottomBanner
