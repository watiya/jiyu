import { List, ListItem } from "flowbite-react";

import CardBox from "src/components/shared/CardBox";

const HorizontalListTypo = () => {
  return (
    <div>
      <CardBox>
        <h4 className="text-lg font-semibold">Horizontal list</h4>
        <List horizontal>
          <ListItem>About</ListItem>
          <ListItem>Premium</ListItem>
          <ListItem>Campaigns</ListItem>
          <ListItem>Blog</ListItem>
          <ListItem>Affiliate Program</ListItem>
          <ListItem>FAQs</ListItem>
          <ListItem>Contact</ListItem>
        </List>
      </CardBox>
    </div>
  );
};

export default HorizontalListTypo;
