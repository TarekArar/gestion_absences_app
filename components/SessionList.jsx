import React from "react";
// import { View, Text } from 'react-native'
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
} from "native-base";
import SessionCard from "./SessionCard";

const sessions = [
  {
    module: "Anad",
    groupe: "SIT03",
    time: "10:30 am",
  },
  {
    module: "Anad",
    groupe: "SIT03",
    time: "10:30 am",
  },
  {
    module: "Anad",
    groupe: "SIT03",
    time: "10:30 am",
  },
  {
    module: "Anad",
    groupe: "SIT03",
    time: "10:30 am",
  },
  {
    module: "Anad",
    groupe: "SIT03",
    time: "10:30 am",
  },
  {
    module: "Anad",
    groupe: "SIT03",
    time: "10:30 am",
  },
  {
    module: "Anad",
    groupe: "SIT03",
    time: "10:30 am",
  },
  {
    module: "Anad",
    groupe: "SIT03",
    time: "10:30 am",
  },
  {
    module: "Anad",
    groupe: "SIT03",
    time: "10:30 am",
  },
  {
    module: "Anad",
    groupe: "SIT03",
    time: "10:30 am",
  },
];

export default function SessionList() {
  return (
    <Container>
      <Header />
      <Content>
        <List>
          {sessions.map((session) => (
            <SessionCard {...session} />
          ))}
        </List>
      </Content>
    </Container>
  );
}
