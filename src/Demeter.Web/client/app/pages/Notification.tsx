import { Table, Group, Text, ActionIcon, rem, Box, Flex, Pagination, Stack, Button } from '@mantine/core';
import {
  IconTrash,
  IconReceipt,
} from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

const data = [
  {
    day: '28/04/2024',
    des: 'Đơn hàng 906524241 đã được bàn giao đến đối tác vận chuyển TED. Đơn hàng sẽ được giao trước 23:59 ngày 28/04/2023. Quý khách vui lòng giữ liên lạc qua điện thoại.',
    link: '/',
  },
  {
    day: '27/04/2024',
    des: 'Đơn hàng 906524241 đã được bàn giao đến đối tác vận chuyển TED. Đơn hàng sẽ được giao trước 23:59 ngày 28/04/2023. Quý khách vui lòng giữ liên lạc qua điện thoại.',
    link: '/home',
  },
  {
    day: '26/04/2024',
    des: 'Đơn hàng 906524241 đã được bàn giao đến đối tác vận chuyển TED. Đơn hàng sẽ được giao trước 23:59 ngày 28/04/2023. Quý khách vui lòng giữ liên lạc qua điện thoại.',
    link: '/',
  },
  {
    day: '25/04/2024',
    des: 'Đơn hàng 906524241 đã được bàn giao đến đối tác vận chuyển TED. Đơn hàng sẽ được giao trước 23:59 ngày 28/04/2023. Quý khách vui lòng giữ liên lạc qua điện thoại.',
    link: '/',
  },
];

export function Notification() {

  const rows = data.map((item) => (
    <Table.Tr key={item.day}>
      <Table.Td>
        <Text fz="sm">{item.day}</Text>
      </Table.Td>

      <Table.Td>
        <Flex gap="sm">
          <IconReceipt size={40} color='green' />
          <div>
            <Text span fz="sm" fw={500}>
              {item.des} <Text fz="sm" fw={500} component="a" c="blue" target="_self" href={item.link} >Xem chi tiết</Text>
            </Text>
            
          </div>
        </Flex>
      </Table.Td>
      <Table.Td>
      <Button variant="transparent" fz="sm" fw={500} >Đánh dấu đã đọc</Button>
      </Table.Td>
      <Table.Td>
        <Group gap={0} justify="flex-end">
          <ActionIcon variant="subtle" color="gray">
            <IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Stack p={"xl"} align={"center"}>
        <Box>
            Thông báo của tôi
            <Table.ScrollContainer minWidth={800}>
                <Table verticalSpacing="md">
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>
            </Table.ScrollContainer>
        </Box>
        <Pagination total={10} radius="md" />
    </Stack>
    
  );
}