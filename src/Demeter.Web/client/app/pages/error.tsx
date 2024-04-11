import { Container, Title, Group, Button, Text } from "@mantine/core";
import { Illustration503 } from "../components/Error/Illutration503";
import { Illustration404 } from "../components/Error/Illutration404";
import { Illustration403 } from "../components/Error/Illutration403";
import { IconListLetters } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

type ErrorDisplay = {
  title: string;
  des: string;
  display: React.ReactNode;
};



const ErrorDefinition = ["403", "404", "500", "503"] as const;
type ErrorCode = typeof ErrorDefinition[number];

const error: Record<ErrorCode, ErrorDisplay> = {
  "500": {
    title: "500",
    des: "Có lỗi xảy ra trong quá trình xuất bộ",
    display: <Illustration503></Illustration503>,
  },
  "503": {
    title: "All of our servers are busy",
    des: "We cannot handle your request right now, please wait for a couple of minutes and refresh the page. Our team is already working on this issue.",
    display: <Illustration503></Illustration503>,
  },
  "403": {
    title: "403",
    des: "Có lỗi xảy ra trong quá trình xuất bộ",
    display: <Illustration403></Illustration403>,
  },
  "404": {
    title: "Nothing to see here",
    des: "Page you are trying to open does not exist. You may have mistyped the address, or the page has been moved to another URL. If you think this is an error contact support.",
    display: <Illustration404></Illustration404>,
  },
};

type ErrorProps = {
    variant: ErrorCode;
  };

export default function ErrorPage({ variant }: ErrorProps) {
    const navigate = useNavigate();
  return <>
  <Container>
        <div>
          {error[variant].display}
          <div>
            <Title>{error[variant].title}</Title>
            <Text>{error[variant].des }</Text>
            <Group justify="center">
              <Button size="md" variant="white" onClick={() => navigate("/home")}>
                Take me back to homepage
              </Button>
            </Group>
          </div>
        </div>
      </Container>
    </>;
}
