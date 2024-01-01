import { Box, Flex, Spacer } from "@chakra-ui/react";
import {
  TopNav,
  Banner,
  EmployeeContainer,
  MonthlyStats,
  Graph,
  DailySales,
  TopStats,
} from "./index";
import { TopStatsInterface } from "../utils/interfaces";
const MainContainer = () => {
  const topProducts: TopStatsInterface[] = [
    {
      item: "Product 1",
      value: "56%",
    },
    {
      item: "Product 2",
      value: "26%",
    },
    {
      item: "Product 3",
      value: "12%",
    },
    {
      item: "Others",
      value: "5%",
    },
  ];
  const topServices: TopStatsInterface[] = [
    {
      item: "Service 1",
      value: "56%",
    },
    {
      item: "Service 2",
      value: "26%",
    },
    {
      item: "Service 3",
      value: "12%",
    },
    {
      item: "Others",
      value: "5%",
    },
  ];
  return (
    <Box h="100%" w="calc(100% - 3em)">
      <Flex flexDir="column" alignItems="flex-start" h="100%" w="100%">
        <TopNav />
        <Banner />
        <Flex mt="0.5rem" pt="0" p="0.5rem" h="calc(100% - 6rem)" w="100%">
          <Flex flexDir="column" h="100%" w="69%">
            <EmployeeContainer />
            <Spacer />
            <MonthlyStats
              title="Monthly Revenue"
              description="Previous month vs current month"
              data="Php 100,000"
              change="25%"
              changeType={true}
              changeTypeValue="increase"
            />
            <Spacer />
            <MonthlyStats
              title="Employee Count"
              description="Previous month vs current month"
              data="120 from 104"
              change="15%"
              changeType={true}
              changeTypeValue="increase"
            />
            <Spacer />
            <MonthlyStats
              title="Employee Expenses"
              description="Previous month vs current month"
              data="Php 75,000"
              change="15%"
              changeType={false}
              changeTypeValue="increase"
            />
            <Spacer />
            <Graph />
          </Flex>
          <Spacer />
          <Flex flexDir="column" h="100%" w="29%">
            <DailySales />
            <Spacer />
            <TopStats prop={topProducts} />
            <Spacer />
            <TopStats prop={topServices} />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default MainContainer;
