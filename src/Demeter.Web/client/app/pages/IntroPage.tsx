import {Image, ThemeIcon, Text, Title, Card, Container, SimpleGrid, Button, Box} from '@mantine/core';
import { IconGauge, IconCookie, IconUser, IconMessage2, IconLock } from '@tabler/icons-react';
import logo from '../../assets/logo.png';

import { useNavigate } from "react-router-dom";

//feature
export const MOCKDATA = [
  {
    icon: IconGauge,
    title: 'Giao hàng tận nơi',
    description:
      'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
  },
  {
    icon: IconUser,
    title: 'Thực phẩm tươi, sạch và an toàn',
    description:
      'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
  },
  {
    icon: IconCookie,
    title: 'Phối hợp với các bên thứ ba uy tín',
    description:
      'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
  },
  {
    icon: IconLock,
    title: 'Bảo mật và an toàn',
    description:
      'Although it still can’t fly, its jumping power is outstanding, in Alola the mushrooms on Paras don’t grow up quite right',
  },
  {
    icon: IconMessage2,
    title: 'Chăm sóc khách hàng 24/7',
    description:
      'Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail',
  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}


export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <Card shadow="lg" padding="lg" radius="md" p="md" >
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon width={30} height={30} stroke={2} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </Card>
  );
}

export function IntroPage() {
  const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);
  const navigate = useNavigate();

  return (   
    <Box py="xl"> 
      <Container align="center" mb={20}>
        <Image
            radius="md" 
            src={logo}
            h={180}
            w="auto"
            fit="contain"
            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
          />
      </Container>

      <Container align="center">
        <Title>Chào mừng bạn đến với DEMETER</Title>
      </Container>

       <Container align="center">
          <Text size="xl" c="dimmed">
          Sàn thương mại điện tử nông sản Việt Nam
          </Text>
      </Container>
      <Container align="center">
        <Button
          variant="gradient"
          size="lg"
          radius="md"
          mt="20"
          onClick={() => navigate("/home")}
        >
          Bắt đầu
        </Button>
      </Container>
      <Container align="center" mt={20}>
          <Text size="xl" fw ="700" >
          Hãy cùng chúng tôi trải nghiệm sự khác biệt!
          </Text>
      </Container>
        <SimpleGrid
            ml={80}
            mr={50}
            mt={50}
            mb={50}
            cols={{ base: 1, sm: 2, md: 3, lg:4, xl:5}}
            spacing={{ base: 'xl', md: 50 }}
            verticalSpacing={{ base: 'xl', md: 50 }}
          >
          {features}
        </SimpleGrid>
    </Box>
    
  );
}
