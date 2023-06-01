import { Box } from "../../components/Box/Box";
import { HistoryBlock } from "../../components/HistoryBlock/HistoryBlock";

export const History = () => {
  return (
    <Box w="100%" border="1px solid black" textAlign="center">
      <h2>Here you can browse history of our orders</h2>
      {/* <p>Print your email here</p> */}
      <HistoryBlock />
    </Box>
  );
};
