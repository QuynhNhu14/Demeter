import { IconStarFilled } from "@tabler/icons-react";
import { Flex, Badge, rem  } from "@mantine/core";
// import "./Rating.css";
import * as stylex from "@stylexjs/stylex";

type RatingProps = {
  rate: number | undefined
    // ratingStar: number[];
    // ratingNumber: number;
};

export const Rating: React.FC<RatingProps> = (props) => {
  const {
    rate: rate,
  } = props;
  return (
    <Flex className="Rating">
      <Flex {...stylex.props(styles.total)} direction="column" justify="center" align="center">
        <Badge
          size="xl"
          color="#009f7f"
          style={{
            fontSize: "25px",
            padding: "10px 15px",
            borderRadius: "30px",
          }}
        >
          {rate} <IconStarFilled />
        </Badge>
        <span style={{ fontSize: "16px", opacity: "0.6", paddingTop: "10px" }}>
          2 đánh giá
        </span>
      </Flex>
      <Flex
        {...stylex.props(styles.star)}
        direction="column"
        justify="center"
        align="flex-start"
      >
        {rate} <IconStarFilled style={{ width: rem(14), height: rem(14) }}/>
        {/* {ratingStar.map((star, index) => {
          const percent = (star / ratingNumber) * 100;
          return (
            <Flex {...stylex.props(styles.detail)} justify="center" align="center" gap="md">
              <Flex
                align="center"
                gap="3px"
                style={{
                  fontWeight: "bold",
                  marginRight: "10px",
                  opacity: "0.9",
                }}
              >
                {5 - index} <IconStarFilled style={{ width: rem(14), height: rem(14) }}/>
              </Flex>
              <Progress
                size="sm"
                value={percent}
                color="#009f7f"
                style={{ marginBottom: "0px", width: "200px" }}
              />
              <span>{ratingStar[index]}</span>
            </Flex>
          );
        })} */}
      </Flex>
    </Flex>
  );
};

const styles = stylex.create({
  total: {
    paddingRight: "50px",
    borderRight: "1px solid #e7e7e7",
  
  },
  star: {
    width: "300px",
    paddingLeft: "50px",
  },
  detail: {
    width: "100%",
    marginBottom: "5px",
  },
});