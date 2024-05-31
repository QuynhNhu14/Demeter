import { Table, Group, Text, ActionIcon, Box, Flex, Pagination, Stack, Button, Modal, Title } from '@mantine/core';
import {
  IconTrash,
  IconReceipt,
} from '@tabler/icons-react';
import { useState } from 'react';
import ProductForm from '../admin/components/Form/FormAddProduct';
import * as stylex from '@stylexjs/stylex';

const generateData = (count: number) => {
  const data = [];
  for (let i = 0; i <= count; i++) {
    data.push({
      day: `28/04/2024`,
      des: `Đơn hàng ${906524241 + i} đã được bàn giao đến đối tác vận chuyển TED. Đơn hàng sẽ được giao trước 23:59 ngày 28/04/2023. Quý khách vui lòng giữ liên lạc qua điện thoại.`,
      link: `/`,
    });
  }
  return data;
};

const dataSource = generateData(50);

export function Notification() {
  const [currentPage, setCurrentPage] = useState(1);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;

  const handleEditClick = () => {
    setEditModalVisible(true);
  };

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const data = dataSource.slice(startIndex, endIndex);

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
            <IconTrash width={30} height={30} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Stack p={"xl"} align={"center"}>
        <Box>
            <Title>Thông báo của tôi</Title>
            <Table.ScrollContainer minWidth={800}>
                <Table verticalSpacing="md">
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>
            </Table.ScrollContainer>
        </Box>
        <Flex justify="center">
          <Pagination
            type="primary"
            current={currentPage}
            total={dataSource.length/pageSize}
            pageSize={pageSize}
            onChange={handleChangePage}
            showSizeChanger={false}
            {...stylex.props(styles.pagination)}
          />
            <Modal 
              centered size="xl"
              opened={editModalVisible}  
              onClose={() => setEditModalVisible(false)} 
              zIndex={1001}
              >
                <ProductForm />
            </Modal>
        </Flex>
    </Stack>
    
  );
}

const styles = stylex.create({
  pagination: {
    margin: "16px", 
    textAlign: "right",
  }
});