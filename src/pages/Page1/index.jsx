import React from "react";

import { Img, Text } from "components";
import Header from "components/Header";

const Page1 = () => {
  return (
    <>
      <div className="bg-blue_gray-700 flex flex-col items-center justify-start mx-auto md:px-10 sm:px-5 px-[267px] w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1333px] mx-auto md:px-5 w-full">
          <Header className="font-arial overflow-x-auto w-full" />
          <Text
            className="mt-[66px] sm:text-[29px] md:text-[31px] text-[33px] text-gray-900"
            size="txtInterSemiBold33"
          >
            Регистрация
          </Text>
          <div className="flex flex-col font-arial gap-2.5 items-center justify-start mt-[35px] w-[26%] md:w-full">
            <Text
              className="border-2 border-gray-900 border-solid pl-[17px] sm:pr-5 pr-[35px] py-[13px] rounded-sm sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 tracking-[-0.75px]"
              size="txtArialMT25"
            >
              Логин...
            </Text>
            <Text
              className="border-2 border-gray-900 border-solid pb-[11px] pl-[17px] sm:pr-5 pr-[35px] pt-[15px] rounded-sm sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 tracking-[-0.75px]"
              size="txtArialMT25"
            >
              Пароль...
            </Text>
            <Text
              className="border-2 border-gray-900 border-solid pb-[11px] pl-[17px] sm:pr-5 pr-[35px] pt-[15px] rounded-sm sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 tracking-[-0.75px]"
              size="txtArialMT25"
            >
              Повтор пароля...
            </Text>
            <Text
              className="bg-gray-400 border-2 border-gray-900 border-solid h-14 justify-center sm:px-5 px-[35px] py-[13px] rounded-sm sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 tracking-[-0.75px] w-[346px]"
              size="txtArialMT25"
            >
              Зарегистрироваться
            </Text>
            <div className="bg-red-A100 border-2 border-gray-900 border-solid flex flex-col items-start justify-start p-[17px] rounded-sm w-full">
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 tracking-[-0.75px]"
                size="txtArialMT25"
              >
                <>
                  Ошибка: неверно
                  <br />
                  заполнено поле Пароль
                </>
              </Text>
            </div>
          </div>
          <div className="font-arial mt-[608px] overflow-x-auto w-full">
            <div className="h-[164px] sm:h-[166px] md:h-[206px] relative w-full">
              <div className="bg-white-A700 border-[3px] border-gray-500 border-solid h-[166px] m-auto rotate-[-180deg] shadow-bs1 w-full"></div>
              <div className="absolute flex md:flex-col flex-row md:gap-10 h-max inset-[0] items-center justify-between m-auto w-[93%]">
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                  size="txtArialBoldMT25"
                >
                  <>
                    Блог веб-разработчика
                    <br />
                    web@developer.ru
                  </>
                </Text>
                <div className="flex flex-col gap-1.5 items-start justify-start">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                    size="txtArialBoldMT25"
                  >
                    31 декабря
                  </Text>
                  <Text
                    className="bg-gray-600 h-[73px] justify-center ml-0.5 md:ml-[0] pb-5 pt-[23px] sm:px-5 px-[35px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 w-[350px]"
                    size="txtArialBoldMT25"
                  >
                    Погода
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
