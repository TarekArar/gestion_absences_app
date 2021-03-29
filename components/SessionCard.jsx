import React from "react";
import { ListItem, Left, Body, Right, Thumbnail, Text } from "native-base";

export default function SessionCard({ module, groupe, time }) {
  return (
    <ListItem avatar>
      <Left>
        <Thumbnail source={{ uri: "Image URL" }} />
      </Left>
      <Body>
        <Text>{module}</Text>
        <Text note>{groupe}</Text>
      </Body>
      <Right>
        <Text note>{time}</Text>
      </Right>
    </ListItem>
  );
}
