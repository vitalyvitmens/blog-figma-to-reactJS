import React from "react";

import { Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-[166px] sm:h-auto object-cover w-full"
          src="images/img_rectangle6_166x1356.png"
          alt="rectangleSix"
        />
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mb-10 md:ml-[0] ml-[54px] mr-[23px] md:mt-0 mt-6 w-[95%] md:w-full">
          <Img
            className="h-[85px] md:mt-0 mt-[11px]"
            src="images/img_group5.svg"
            alt="groupFive"
          />
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[17px]">
            <Text
              className="md:text-5xl text-[68px] text-gray-900"
              size="txtArialBoldMT68"
            >
              Блог
            </Text>
            <Text
              className="md:ml-[0] ml-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
              size="txtArialBoldMT25"
            >
              веб-разработчика
            </Text>
          </div>
          <Text
            className="italic md:ml-[0] ml-[196px] md:mt-0 mt-3.5 sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
            size="txtArialItalicMT25"
          >
            <>
              Веб-технологии
              <br />
              Написание кода
              <br />
              Разбор ошибок
            </>
          </Text>
          <Img
            className="h-[25px] md:ml-[0] ml-[361px] md:mt-0 mt-[70px]"
            src="images/img_refresh.svg"
            alt="refresh"
          />
          <div className="flex flex-col gap-[25px] items-end justify-start md:ml-[0] ml-[5px] md:mt-0 mt-2 w-[9%] md:w-full">
            <div className="flex flex-row gap-2 items-start justify-between w-full">
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 tracking-[-0.75px]"
                size="txtArialBoldMT25"
              >
                vasilly
              </Text>
              <Img className="h-[26px]" src="images/img_user.svg" alt="user" />
            </div>
            <div className="flex flex-row gap-[23px] items-start justify-end w-[83%] md:w-full">
              <Img className="h-[38px]" src="images/img_file.svg" alt="file" />
              <Img
                className="h-[34px] w-[35px]"
                src="images/img_lock.svg"
                alt="lock"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
