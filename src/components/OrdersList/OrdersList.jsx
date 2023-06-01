import { Box } from "../Box/Box";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import {
  BoxDescription,
  BoxEmail,
  BoxText,
  BoxTitle,
  List,
  ListItem,
  SpanInner,
  TextInner,
  Title,
} from "./OrderList.styled";

export const OrdersList = ({ data }) => {
  //console.log(data);
  return (
    <Box>
      {" "}
      <Title>Orders history</Title>
      <Accordion>
        {data.map((item) => (
          <AccordionItem key={item._id}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <BoxTitle>
                  <BoxEmail>Email: {item.user.email}</BoxEmail>
                  <BoxText>Name: {item.user.name}</BoxText>
                  <BoxDescription>Total price: {item.total}</BoxDescription>
                </BoxTitle>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <List>
                {item.order.map((i, idx) => (
                  <ListItem key={idx}>
                    {/* <label>Ordered:</label> */}
                    <TextInner>
                      Dish: <SpanInner>{i.name}</SpanInner>
                    </TextInner>
                    <TextInner>
                      Total: <SpanInner>{i.qwantity * i.price}</SpanInner>
                    </TextInner>
                  </ListItem>
                ))}
              </List>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};
