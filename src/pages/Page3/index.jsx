import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Img, List, Text } from 'components'
import Header from 'components/Header'

const Page3 = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="bg-blue_gray-700 flex flex-col font-arial items-center justify-start mx-auto md:px-10 sm:px-5 px-[267px] w-full">
        <div className="bg-white-A700 flex flex-col justify-start max-w-[1333px] mx-auto md:px-5 w-full">
          <Header className="overflow-x-auto w-full" />
          <div className="font-commissioner md:h-[411px] h-[525px] md:ml-[0] ml-[110px] mt-[39px] relative w-[88%] md:w-full">
            <div className="absolute bg-gray-600 border-2 border-gray-900 border-solid h-[206px] left-[0] rounded-sm top-[2%] w-[33%]"></div>
            <div className="absolute flex flex-col gap-3 items-start justify-start right-[1%] top-[0] w-[64%]">
              <Text
                className="sm:text-[33px] md:text-[39px] text-[43px] text-gray-900_01"
                size="txtCommissionerSemiBold43"
              >
                Статья о веб-технологии
              </Text>
              <div className="flex flex-row font-arial sm:gap-10 items-start justify-between ml-0.5 md:ml-[0] w-full">
                <div className="flex flex-row gap-2.5 items-center justify-start mb-[5px]">
                  <Img
                    className="h-[29px]"
                    src="images/img_calendar.svg"
                    alt="calendar"
                  />
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                    size="txtArialMT25"
                  >
                    2053-12-31
                  </Text>
                </div>
                <Img
                  className="h-[26px] mt-[9px]"
                  src="images/img_thumbsup_black_900.svg"
                  alt="thumbsup"
                />
              </div>
            </div>
            <div className="absolute bottom-[0] flex flex-col font-arial gap-6 inset-x-[0] items-center justify-start mx-auto w-full">
              <div className="md:h-[116px] h-[146px] relative w-[98%] md:w-full">
                <Text
                  className="absolute right-[0] md:text-2xl sm:text-[22px] text-[26px] text-gray-900 top-[0] tracking-[-0.78px] w-[64%] sm:w-full"
                  size="txtArialMT26"
                >
                  Повседневная практика показывает, что начало повседневной
                  работы по формированию позиции позволяет выполнять важные
                  задания по разработке модели развития. Идейные соображения
                  высшего порядка, а также начало повседневной{' '}
                </Text>
                <Text
                  className="absolute bottom-[0] left-[0] md:text-2xl sm:text-[22px] text-[26px] text-gray-900 tracking-[-0.78px]"
                  size="txtArialMT26"
                >
                  работы по формированию позиции играет важную роль в
                  формировании новых предложений.
                </Text>
              </div>
              <Text
                className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900 tracking-[-0.78px] w-full"
                size="txtArialMT26"
              >
                Разнообразный и богатый опыт реализация намеченных плановых
                заданий влечет за собой процесс внедрения и модернизации модели
                развития. Значимость этих проблем настолько очевидна, что
                постоянный количественный рост и сфера нашей активности
                позволяет оценить значение позиций, занимаемых участниками в
                отношении поставленных задач. Задача организации, в особенности
                же реализация намеченных плановых заданий влечет за собой
                процесс внедрения и модернизации системы обучения кадров
                соответствует насущным потребностям. Не следует, однако
                забывать, что начало повседневной работы по формированию
                позициипозволяет оценить значение соотвествующей условий
                активизации.{' '}
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-arial md:gap-5 items-start justify-center md:ml-[0] ml-[298px] mt-6 w-[58%] md:w-full">
            <div className="border-[3px] border-blue_gray-400 border-solid flex flex-col items-start justify-start p-3 rounded-sm">
              <Text
                className="mb-[109px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 tracking-[-0.75px]"
                size="txtArialMT25"
              >
                Комментарий...
              </Text>
            </div>
            <Img
              className="h-6 ml-0.5 md:ml-[0] md:mt-0 mt-[15px]"
              src="images/img_save.svg"
              alt="save"
            />
          </div>
          <List
            className="flex flex-col font-arial gap-[18px] items-center md:ml-[0] ml-[298px] mt-[18px] w-[58%]"
            orientation="vertical"
          >
            <div className="flex md:flex-col flex-row gap-2 items-start justify-between w-full">
              <div className="border-2 border-gray-900 border-solid flex flex-col items-center justify-start p-[7px] rounded-sm">
                <div className="flex flex-col gap-[13px] items-start justify-start w-[99%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <Img
                      className="h-[25px] md:mt-0 my-0.5 w-[25px]"
                      src="images/img_lock_black_900.svg"
                      alt="groupTwentyFive"
                    />
                    <Text
                      className="md:ml-[0] ml-[5px] md:mt-0 mt-1 sm:text-[17px] md:text-[19px] text-[21px] text-gray-900 tracking-[-0.63px]"
                      size="txtArialMT21"
                    >
                      vasilly
                    </Text>
                    <Img
                      className="h-[23px] md:ml-[0] ml-[448px]"
                      src="images/img_calendar.svg"
                      alt="calendar"
                    />
                    <Text
                      className="ml-1.5 md:ml-[0] md:mt-0 mt-[3px] text-[19px] text-gray-900"
                      size="txtArialMT19"
                    >
                      2053-12-31
                    </Text>
                    <Text
                      className="ml-2 md:ml-[0] md:mt-0 mt-[3px] text-[19px] text-gray-900"
                      size="txtArialMT19"
                    >
                      13:54
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[5px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 tracking-[-0.75px]"
                    size="txtArialMT25"
                  >
                    Хорошая статья, оставлю комментарий к ней
                  </Text>
                </div>
              </div>
              <Img
                className="h-[25px] md:mt-0 mt-[9px]"
                src="images/img_thumbsup.svg"
                alt="thumbsup"
              />
            </div>
            <div className="flex md:flex-col flex-row gap-2 items-start justify-between w-full">
              <div className="border-2 border-gray-900 border-solid flex flex-col items-center justify-start p-[7px] rounded-sm">
                <div className="flex flex-col gap-[13px] items-start justify-start w-[99%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <Img
                      className="h-[25px] md:mt-0 my-0.5 w-[25px]"
                      src="images/img_lock_black_900.svg"
                      alt="groupTwentyFive"
                    />
                    <Text
                      className="md:ml-[0] ml-[5px] md:mt-0 mt-1 sm:text-[17px] md:text-[19px] text-[21px] text-gray-900 tracking-[-0.63px]"
                      size="txtArialMT21"
                    >
                      vasilly
                    </Text>
                    <Img
                      className="h-[23px] md:ml-[0] ml-[448px]"
                      src="images/img_calendar.svg"
                      alt="calendar"
                    />
                    <Text
                      className="ml-1.5 md:ml-[0] md:mt-0 mt-[3px] text-[19px] text-gray-900"
                      size="txtArialMT19"
                    >
                      2053-12-31
                    </Text>
                    <Text
                      className="ml-2 md:ml-[0] md:mt-0 mt-[3px] text-[19px] text-gray-900"
                      size="txtArialMT19"
                    >
                      13:54
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[5px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 tracking-[-0.75px]"
                    size="txtArialMT25"
                  >
                    Хорошая статья, оставлю комментарий к ней
                  </Text>
                </div>
              </div>
              <Img
                className="h-[25px] md:mt-0 mt-[9px]"
                src="images/img_thumbsup.svg"
                alt="thumbsup"
              />
            </div>
            <div className="flex md:flex-col flex-row gap-2 items-start justify-between w-full">
              <div className="border-2 border-gray-900 border-solid flex flex-col items-center justify-start p-[7px] rounded-sm">
                <div className="flex flex-col gap-[13px] items-start justify-start w-[99%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <Img
                      className="h-[25px] md:mt-0 my-0.5 w-[25px]"
                      src="images/img_lock_black_900.svg"
                      alt="groupTwentyFive"
                    />
                    <Text
                      className="md:ml-[0] ml-[5px] md:mt-0 mt-1 sm:text-[17px] md:text-[19px] text-[21px] text-gray-900 tracking-[-0.63px]"
                      size="txtArialMT21"
                    >
                      vasilly
                    </Text>
                    <Img
                      className="h-[23px] md:ml-[0] ml-[448px]"
                      src="images/img_calendar.svg"
                      alt="calendar"
                    />
                    <Text
                      className="ml-1.5 md:ml-[0] md:mt-0 mt-[3px] text-[19px] text-gray-900"
                      size="txtArialMT19"
                    >
                      2053-12-31
                    </Text>
                    <Text
                      className="ml-2 md:ml-[0] md:mt-0 mt-[3px] text-[19px] text-gray-900"
                      size="txtArialMT19"
                    >
                      13:54
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[5px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 tracking-[-0.75px]"
                    size="txtArialMT25"
                  >
                    Хорошая статья, оставлю комментарий к ней
                  </Text>
                </div>
              </div>
              <Img
                className="h-[25px] md:mt-0 mt-[9px]"
                src="images/img_thumbsup.svg"
                alt="thumbsup"
              />
            </div>
          </List>
          <div className="font-arial sm:h-[182px] h-[185px] md:h-[306px] mt-[18px] relative w-full">
            <div className="absolute flex md:flex-col flex-row gap-2 inset-x-[0] items-start justify-center mx-auto top-[0] w-[58%]">
              <div className="border-2 border-gray-900 border-solid flex flex-col items-center justify-start p-[7px] rounded-sm w-[97%] md:w-full">
                <div className="flex flex-col gap-[13px] items-start justify-start w-[99%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <Img
                      className="h-[25px] md:mt-0 my-0.5 w-[25px]"
                      src="images/img_lock_black_900.svg"
                      alt="groupTwentyFive"
                    />
                    <Text
                      className="md:ml-[0] ml-[5px] md:mt-0 mt-1 sm:text-[17px] md:text-[19px] text-[21px] text-gray-900 tracking-[-0.63px]"
                      size="txtArialMT21"
                    >
                      vasilly
                    </Text>
                    <Img
                      className="h-[23px] md:ml-[0] ml-[448px]"
                      src="images/img_calendar.svg"
                      alt="calendar_One"
                    />
                    <Text
                      className="ml-1.5 md:ml-[0] md:mt-0 mt-[3px] text-[19px] text-gray-900"
                      size="txtArialMT19"
                    >
                      2053-12-31
                    </Text>
                    <Text
                      className="ml-2 md:ml-[0] md:mt-0 mt-[3px] text-[19px] text-gray-900"
                      size="txtArialMT19"
                    >
                      13:54
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[5px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 tracking-[-0.75px]"
                    size="txtArialMT25"
                  >
                    Хорошая статья, оставлю комментарий к ней
                  </Text>
                </div>
              </div>
              <Img
                className="h-[25px] md:mt-0 mt-[9px]"
                src="images/img_thumbsup.svg"
                alt="thumbsup_One"
              />
            </div>
            <div className="absolute bottom-[0] inset-x-[0] mx-auto overflow-x-auto w-full">
              <div className="h-[164px] sm:h-[166px] md:h-[206px] relative w-full">
                <div className="bg-white-A700 border-[3px] border-gray-500 border-solid h-[166px] m-auto rotate-[-180deg] shadow-bs1 w-full"></div>
                <div className="absolute flex md:flex-col flex-row md:gap-10 h-max inset-[0] items-center justify-between m-auto w-[93%]">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] cursor-pointer text-gray-900"
                    size="txtArialBoldMT25"
                    onClick={() => navigate('/')}
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
      </div>
    </>
  )
}

export default Page3
