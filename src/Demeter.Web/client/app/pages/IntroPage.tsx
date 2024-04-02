// import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, rem } from '@mantine/core';
// import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons-react';

// const features = [
//   {
//     icon: IconReceiptOff,
//     title: 'Free and open source',
//     description: 'All packages are published under MIT license, you can use Mantine in any project',
//   },
//   {
//     icon: IconFileCode,
//     title: 'TypeScript based',
//     description: 'Build type safe applications, all components and hooks export types',
//   },
//   {
//     icon: IconCircleDotted,
//     title: 'No annoying focus ring',
//     description:
//       'With new :focus-visible selector focus ring will appear only when user navigates with keyboard',
//   },
//   {
//     icon: IconFlame,
//     title: 'Flexible',
//     description:
//       'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
//   },
// ];

// export function IntroPage() {
//   const items = features.map((feature) => (
//     <div key={feature.title}>
//       <ThemeIcon
//         size={44}
//         radius="md"
//         variant="gradient"
//         gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
//       >
//         <feature.icon style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
//       </ThemeIcon>
//       <Text fz="lg" mt="sm" fw={500}>
//         {feature.title}
//       </Text>
//       <Text c="dimmed" fz="sm">
//         {feature.description}
//       </Text>
//     </div>
//   ));

//   return (
//     <div>
//       <Grid gutter={80}>
//         <Grid.Col span={{ base: 12, md: 5 }}>
//           <Title order={2}>
//             A fully featured React components library for your next project
//           </Title>
//           <Text c="dimmed">
//             Build fully functional accessible web applications faster than ever – Mantine includes
//             more than 120 customizable components and hooks to cover you in any situation
//           </Text>


//         </Grid.Col>
//         <Grid.Col span={{ base: 12, md: 7 }}>
//           <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
//             {items}
//           </SimpleGrid>
//         </Grid.Col>
//       </Grid>
//     </div>
//   );
// }

import {Image, ThemeIcon, Text, Title, Container, SimpleGrid, rem, Button} from '@mantine/core';
import { IconGauge, IconCookie, IconUser, IconMessage2, IconLock } from '@tabler/icons-react';
import logo from '../../../assets/logo.png';
import { Footer } from '../components/Footer/Footer';

export const MOCKDATA = [
  {
    icon: IconGauge,
    title: 'Extreme performance',
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
    title: 'Bên thứ ba uy tín',
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
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}

export function IntroPage() {
  const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

  return (   
    <div> 
      <Container mt={20} align="center" mb={20}>
        <Image
            radius="md" 
            src="./assets/logo.png" 
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
          gradient={{ deg: 133, from: 'green', to: 'cyan' }}
          size="lg"
          radius="md"
          mt="20"
        >
          Bắt đầu
        </Button>
      </Container>
      <Container align="center">
          <Text size="xl" >
          Hãy cùng chúng tôi trải nghiệm sự khác biệt!
          </Text>
      </Container>
      <Container>
        <SimpleGrid
            mt={50}
            cols={{ base: 1, sm: 2, md: 3 }}
            spacing={{ base: 'xl', md: 50 }}
            verticalSpacing={{ base: 'xl', md: 50 }}
          >
          {features}
          </SimpleGrid>
      </Container>
      
      <Footer/>
    </div>
    
  );
}