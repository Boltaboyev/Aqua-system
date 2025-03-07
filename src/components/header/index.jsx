import React from "react"

// img
import logo from "../../assets/img/logo.png"

// icons
import telegram from "../../assets/icons/telegram.svg"
import tel from "../../assets/icons/tel.svg"
import {FiPhoneCall} from "react-icons/fi"
import {HiOutlineMenu} from "react-icons/hi"

const Header = () => {
    return (
        <header className="py-[5px]">
            <nav className="container2 flex justify-between items-center gap-[20px]">
                <nav className="flex justify-start items-center gap-[55px]">
                    <img src={logo} alt="logo" className="w-[120px]" />
                    <ul className="flex justify-between items-center gap-[30px] max-[635px]:hidden">
                        <li className="font-medium text-[14px] leading-[143%] text-[#222834] cursor-pointer hover:text-blue-700">
                            Выбрать набор
                        </li>
                        <li className="font-medium text-[14px] leading-[143%] text-[#222834] cursor-pointer hover:text-blue-700">
                            Комплектующие
                        </li>
                        <li className="font-medium text-[14px] leading-[143%] text-[#222834] cursor-pointer hover:text-blue-700">
                            О нас
                        </li>
                    </ul>
                </nav>

                <nav className="flex justify-end items-center gap-[30px] max-[1075px]:gap-[10px]">
                    <nav className="flex flex-col gap-0 max-[1075px]:hidden">
                        <p className="font-medium text-[12px] leading-[143%] text-[rgba(34,40,52,0.6)]">
                            Связаться с нами:
                        </p>
                        <a
                            href="tel:+380680113942"
                            className="font-bold text-[14px] leading-[125%] text-[#222834]">
                            +38 (068) 011 39 42
                        </a>
                    </nav>

                    <button className="btn font-medium text-[14px] max-[1075px]:hidden h-[38px] px-[20px] rounded-md">
                        Заказать звонок
                    </button>

                    <nav className="flex justify-between *:cursor-pointer items-center gap-[10px] bg-[#eaedf2] px-[10px] h-[38px] rounded-md max-[1075px]:hidden">
                        <img src={telegram} alt="" />
                        <img src={tel} alt="" />
                    </nav>

                    <button className="btn font-medium hidden max-[1075px]:flex justify-center items-center h-[38px] w-[38px] rounded-md">
                        <FiPhoneCall />
                    </button>

                    <button className="bg-[#eaedf2] font-medium hidden max-[635px]:flex justify-center items-center h-[38px] w-[38px] rounded-md">
                        <HiOutlineMenu />
                    </button>

                    <nav className="flex justify-center *:cursor-pointer items-center bg-[#eaedf2] px-[10px] h-[38px] rounded-md max-[635px]:hidden">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/640px-Flag_of_Russia.svg.png"
                            alt=""
                            className="h-[15px] w-[20px]"
                        />
                    </nav>
                </nav>
            </nav>
        </header>
    )
}

export default Header
