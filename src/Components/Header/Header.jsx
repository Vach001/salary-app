import React from "react";
import { Card, Row, Text } from "@nextui-org/react";

export default function Header() {
  return (
    <>
      <Card css={{ $$cardColor: "$colors$primaryLight" }}>
        <Card.Body>
          <Row justify="center" align="center">
            <Text h1 color="white" css={{m: "$15sl"}} align="center">
              ԱՇԽԱՏԱՎԱՐՁԻ ՀԱՇՎԻՉ ԲՈԼՈՐԻ ՀԱՄԱՐ
            </Text>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
