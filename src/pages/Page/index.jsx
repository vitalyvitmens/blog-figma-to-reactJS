import React from "react";

import { Button, Img, List, Text } from "components";

const Page = () => {
  return (
    <>
      <div className="bg-blue_gray-700 flex flex-col font-arial items-center justify-start mx-auto md:px-10 sm:px-5 px-[267px] w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1333px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="border-[3px] border-gray-500 border-solid flex flex-col items-center justify-start p-[23px] sm:px-5 shadow-bs w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mb-4 w-[98%] md:w-full">
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
                    <Img
                      className="h-[26px]"
                      src="images/img_user.svg"
                      alt="user"
                    />
                  </div>
                  <div className="flex flex-row gap-[23px] items-start justify-end w-[83%] md:w-full">
                    <Img
                      className="h-[38px]"
                      src="images/img_file.svg"
                      alt="file"
                    />
                    <Img
                      className="h-[34px] w-[35px]"
                      src="images/img_lock.svg"
                      alt="lock"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-col items-end justify-end mt-[43px] p-3 rounded-sm w-[34%] md:w-full">
              <Img
                className="h-7 mr-0.5 w-7"
                src="images/img_rewind.svg"
                alt="rewind"
              />
            </div>
            <div className="md:gap-5 gap-[51px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] mt-[49px] w-[93%]">
              <div className="md:h-[296px] h-[297px] relative w-full">
                <div className="bg-gray-600 border-2 border-gray-900 border-solid h-[206px] mx-auto rounded-sm w-full"></div>
                <div className="absolute border-2 border-gray-900 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[13px] rounded-sm w-full">
                  <div className="flex flex-col gap-3 items-start justify-start mb-[5px] mt-[195px] w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                      size="txtArialBoldMT25"
                    >
                      Новость о веб-технологии
                    </Text>
                    <div className="flex flex-row items-start justify-start ml-0.5 md:ml-[0] w-full">
                      <Img
                        className="h-7"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                      <Text
                        className="ml-2 sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                        size="txtArialMT25"
                      >
                        2053-12-31
                      </Text>
                      <Img
                        className="h-[25px] ml-[124px] mt-[3px]"
                        src="images/img_qrcode.svg"
                        alt="qrcode"
                      />
                      <Text
                        className="ml-1 sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                        size="txtArialMT25"
                      >
                        25
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:h-[296px] h-[297px] relative w-full">
                <div className="bg-gray-600 border-2 border-gray-900 border-solid h-[206px] mx-auto rounded-sm w-full"></div>
                <div className="absolute border-2 border-gray-900 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[13px] rounded-sm w-full">
                  <div className="flex flex-col gap-3 items-start justify-start mb-[5px] mt-[195px] w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                      size="txtArialBoldMT25"
                    >
                      Новость о веб-технологии
                    </Text>
                    <div className="flex flex-row items-start justify-start ml-0.5 md:ml-[0] w-full">
                      <Img
                        className="h-7"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                      <Text
                        className="ml-2 sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                        size="txtArialMT25"
                      >
                        2053-12-31
                      </Text>
                      <Img
                        className="h-[25px] ml-[124px] mt-[3px]"
                        src="images/img_qrcode.svg"
                        alt="qrcode"
                      />
                      <Text
                        className="ml-1 sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                        size="txtArialMT25"
                      >
                        25
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:h-[296px] h-[297px] relative w-full">
                <div className="bg-gray-600 border-2 border-gray-900 border-solid h-[206px] mx-auto rounded-sm w-full"></div>
                <div className="absolute border-2 border-gray-900 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[13px] rounded-sm w-full">
                  <div className="flex flex-col gap-3 items-start justify-start mb-[5px] mt-[195px] w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                      size="txtArialBoldMT25"
                    >
                      Новость о веб-технологии
                    </Text>
                    <div className="flex flex-row items-start justify-start ml-0.5 md:ml-[0] w-full">
                      <Img
                        className="h-7"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                      <Text
                        className="ml-2 sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                        size="txtArialMT25"
                      >
                        2053-12-31
                      </Text>
                      <Img
                        className="h-[25px] ml-[124px] mt-[3px]"
                        src="images/img_qrcode.svg"
                        alt="qrcode"
                      />
                      <Text
                        className="ml-1 sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                        size="txtArialMT25"
                      >
                        25
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:h-[296px] h-[297px] relative w-full">
                <div className="bg-gray-600 border-2 border-gray-900 border-solid h-[206px] mx-auto rounded-sm w-full"></div>
                <div className="absolute border-2 border-gray-900 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[13px] rounded-sm w-full">
                  <div className="flex flex-col gap-3 items-start justify-start mb-[5px] mt-[195px] w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                      size="txtArialBoldMT25"
                    >
                      Новость о веб-технологии
                    </Text>
                    <div className="flex flex-row items-start justify-start ml-0.5 md:ml-[0] w-full">
                      <Img
                        className="h-7"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                      <Text
                        className="ml-2 sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                        size="txtArialMT25"
                      >
                        2053-12-31
                      </Text>
                      <Img
                        className="h-[25px] ml-[124px] mt-[3px]"
                        src="images/img_qrcode.svg"
                        alt="qrcode"
                      />
                      <Text
                        className="ml-1 sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                        size="txtArialMT25"
                      >
                        25
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:h-[296px] h-[297px] relative w-full">
                <div className="bg-gray-600 border-2 border-gray-900 border-solid h-[206px] mx-auto rounded-sm w-full"></div>
                <div className="absolute border-2 border-gray-900 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[13px] rounded-sm w-full">
                  <div className="flex flex-col gap-3 items-start justify-start mb-[5px] mt-[195px] w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                      size="txtArialBoldMT25"
                    >
                      Новость о веб-технологии
                    </Text>
                    <div className="flex flex-row items-start justify-start ml-0.5 md:ml-[0] w-full">
                      <Img
                        className="h-7"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                      <Text
                        className="ml-2 sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                        size="txtArialMT25"
                      >
                        2053-12-31
                      </Text>
                      <Img
                        className="h-[25px] ml-[124px] mt-[3px]"
                        src="images/img_qrcode.svg"
                        alt="qrcode"
                      />
                      <Text
                        className="ml-1 sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                        size="txtArialMT25"
                      >
                        25
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:h-[296px] h-[297px] relative w-full">
                <div className="bg-gray-600 border-2 border-gray-900 border-solid h-[206px] mx-auto rounded-sm w-full"></div>
                <div className="absolute border-2 border-gray-900 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[13px] rounded-sm w-full">
                  <div className="flex flex-col gap-3 items-start justify-start mb-[5px] mt-[195px] w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                      size="txtArialBoldMT25"
                    >
                      Новость о веб-технологии
                    </Text>
                    <div className="flex flex-row items-start justify-start ml-0.5 md:ml-[0] w-full">
                      <Img
                        className="h-7"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                      <Text
                        className="ml-2 sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                        size="txtArialMT25"
                      >
                        2053-12-31
                      </Text>
                      <Img
                        className="h-[25px] ml-[124px] mt-[3px]"
                        src="images/img_qrcode.svg"
                        alt="qrcode"
                      />
                      <Text
                        className="ml-1 sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                        size="txtArialMT25"
                      >
                        25
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:h-[1040px] h-[435px] md:h-[693px] mt-[50px] relative w-full">
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-[93%]">
                <List
                  className="sm:flex-col flex-row gap-[51px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="md:h-[296px] h-[297px] sm:ml-[0] relative w-full">
                    <div className="bg-gray-600 border-2 border-gray-900 border-solid h-[206px] mx-auto rounded-sm w-full"></div>
                    <div className="absolute border-2 border-gray-900 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[13px] rounded-sm w-full">
                      <div className="flex flex-col gap-3 items-start justify-start mb-[5px] mt-[195px] w-full">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                          size="txtArialBoldMT25"
                        >
                          Новость о веб-технологии
                        </Text>
                        <div className="flex flex-row items-start justify-start ml-0.5 md:ml-[0] w-full">
                          <Img
                            className="h-7"
                            src="images/img_calendar.svg"
                            alt="calendar"
                          />
                          <Text
                            className="ml-2 sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtArialMT25"
                          >
                            2053-12-31
                          </Text>
                          <Img
                            className="h-[25px] ml-[124px] mt-[3px]"
                            src="images/img_qrcode.svg"
                            alt="qrcode"
                          />
                          <Text
                            className="ml-1 sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtArialMT25"
                          >
                            25
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:h-[296px] h-[297px] sm:ml-[0] relative w-full">
                    <div className="bg-gray-600 border-2 border-gray-900 border-solid h-[206px] mx-auto rounded-sm w-full"></div>
                    <div className="absolute border-2 border-gray-900 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[13px] rounded-sm w-full">
                      <div className="flex flex-col gap-3 items-start justify-start mb-[5px] mt-[195px] w-full">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                          size="txtArialBoldMT25"
                        >
                          Новость о веб-технологии
                        </Text>
                        <div className="flex flex-row items-start justify-start ml-0.5 md:ml-[0] w-full">
                          <Img
                            className="h-7"
                            src="images/img_calendar.svg"
                            alt="calendar"
                          />
                          <Text
                            className="ml-2 sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtArialMT25"
                          >
                            2053-12-31
                          </Text>
                          <Img
                            className="h-[25px] ml-[124px] mt-[3px]"
                            src="images/img_qrcode.svg"
                            alt="qrcode"
                          />
                          <Text
                            className="ml-1 sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtArialMT25"
                          >
                            25
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:h-[296px] h-[297px] sm:ml-[0] relative w-full">
                    <div className="bg-gray-600 border-2 border-gray-900 border-solid h-[206px] mx-auto rounded-sm w-full"></div>
                    <div className="absolute border-2 border-gray-900 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[13px] rounded-sm w-full">
                      <div className="flex flex-col gap-3 items-start justify-start mb-[5px] mt-[195px] w-full">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                          size="txtArialBoldMT25"
                        >
                          Новость о веб-технологии
                        </Text>
                        <div className="flex flex-row items-start justify-start ml-0.5 md:ml-[0] w-full">
                          <Img
                            className="h-7"
                            src="images/img_calendar.svg"
                            alt="calendar"
                          />
                          <Text
                            className="ml-2 sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtArialMT25"
                          >
                            2053-12-31
                          </Text>
                          <Img
                            className="h-[25px] ml-[124px] mt-[3px]"
                            src="images/img_qrcode.svg"
                            alt="qrcode"
                          />
                          <Text
                            className="ml-1 sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtArialMT25"
                          >
                            25
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="absolute bottom-[0] inset-x-[0] mx-auto overflow-x-auto w-full">
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
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[350px] ml-0.5 md:ml-[0] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                        size="sm"
                      >
                        Погода
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
