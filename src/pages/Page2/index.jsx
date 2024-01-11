import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, ReactTable, Text } from "components";
import Header from "components/Header";

const Page2 = () => {
  const tableData = React.useRef([
    {
      twentyFour: "vasilly",
      twentyFive: "13:54",
      twentySix: "images/img_thumbsup.svg",
    },
    {
      twentyFour: "vasilly",
      twentyFive: "13:54",
      twentySix: "images/img_thumbsup.svg",
    },
    {
      twentyFour: "vasilly",
      twentyFive: "13:54",
      twentySix: "images/img_thumbsup.svg",
    },
    {
      twentyFour: "vasilly",
      twentyFive: "13:54",
      twentySix: "images/img_thumbsup.svg",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("twentyFour", {
        cell: (info) => (
          <Text
            className="pb-4 sm:pl-5 pl-[22px] pt-6 sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 tracking-[-0.75px]"
            size="txtArialMT25"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[222px] pb-0.5 pl-4 sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 tracking-[-0.75px]"
            size="txtArialMT25"
          >
            Логин
          </Text>
        ),
      }),
      tableColumnHelper.accessor("twentyFive", {
        cell: (info) => (
          <div className="flex flex-row gap-[17px] items-start justify-start p-0.5">
            <Text
              className="mb-4 mt-[19px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 tracking-[-0.75px]"
              size="txtArialMT25"
            >
              2053-12-31
            </Text>
            <Text
              className="mb-4 mt-[19px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 tracking-[-0.75px]"
              size="txtArialMT25"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[288px] pt-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 tracking-[-0.75px]"
            size="txtArialMT25"
          >
            Дата регистрации
          </Text>
        ),
      }),
      tableColumnHelper.accessor("twentySix", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-between pl-0.5 py-0.5">
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[159px] my-3.5"
              rightIcon={
                <div className="mt-2 mb-2.5 ml-[3px] bg-gray-900 rounded-[1px]">
                  <Img
                    className="rounded-[1px]"
                    src="images/img_favorite.svg"
                    alt="favorite"
                  />
                </div>
              }
              shape="round"
              color="gray_900"
              variant="outline"
            >
              <div className="leading-[normal] md:text-[23px] sm:text-[21px] text-[25px] text-left tracking-[-0.75px]">
                Модератор
              </div>
            </Button>
            <Img
              className="h-[23px] w-[22px]"
              src="images/img_reply.svg"
              alt="reply"
            />
            <Img className="h-[25px]" alt="thumbsup" src={info?.getValue()} />
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[248px] pb-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 tracking-[-0.75px]"
            size="txtArialMT25"
          >
            Роль
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-blue_gray-700 flex flex-col items-center justify-start mx-auto md:px-10 sm:px-5 px-[267px] w-full">
        <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[1333px] mx-auto md:px-5 w-full">
          <Header className="font-arial overflow-x-auto w-full" />
          <Text
            className="md:ml-[0] ml-[549px] mt-[60px] sm:text-[29px] md:text-[31px] text-[33px] text-gray-900"
            size="txtInterSemiBold33"
          >
            Пользователи
          </Text>
          <div className="overflow-auto font-arial md:ml-[0] ml-[323px] mt-[29px] w-[57%]">
            <ReactTable
              columns={tableColumns}
              data={tableData.current}
              rowClass={""}
              headerClass=""
            />
          </div>
          <div className="font-arial mt-[684px] overflow-x-auto w-full">
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

export default Page2;
