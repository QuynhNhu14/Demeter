import { useState } from "react";

import { Button, Flex, Table, Tabs, Textarea, Text, rem, TextInput, PasswordInput   } from "@mantine/core";
import { useForm } from '@mantine/form';

import { Product } from "./ProductCart";
import { IconCoin, IconCreditCard, IconWallet, IconEye } from '@tabler/icons-react';
import * as stylex from "@stylexjs/stylex";

type OrderFormProps = {
    totaldata: {
        TOTAL: number;
        amount: number;
        totalamount: number;
        totalship: number;
        voucherDiscount: number;
    },
    selectedProducts: Product[],

}

interface DataType {
    item: {name: string, price:number, img: string};
    quantity: number;
    total: number;
  }

export const OrderForm: React.FC<OrderFormProps> = ({totaldata, selectedProducts}) => {
  const [selectedProduct, setSelectedProduct] = useState<number>(0);
  const [value, setValue] = useState<number>(1);

  const formCard = useForm({
    mode: 'uncontrolled',
    initialValues: {
        cardNumber: '',
        expiration: '',
        cardName: '',
        cvvCode: ''
    },
    validate: {
    },
  });

  const formEWallet = useForm({
    mode: 'uncontrolled',
    initialValues: {
        walletCode: '',
        password: '',
    },
    validate: {
    },
  });

  const iconStyle = { width: rem(14), height: rem(14) };

  const OrderInfo = {
    id: Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,
    account: {id: 1, phone: '0123456789', address: 'Ký Túc Xá ĐHQG Khu A, khu phố 6, phường Linh Trung, tp Thủ Đức, Hồ Chí Minh'},
  }

    const rows = selectedProducts.map((item) => (
        <Table.Tr key={item.name}>
          <Table.Td>
                <Flex alignItems='center' gap={1}>
                    <img src={item.image} alt='product image' {...stylex.props(styles.productImg)}/>
                    <Flex direction="column">
                        <Text c="dimmed">{item.name}</Text>
                        <Text c="#009f7f" fw={500}>{item.newPrice} VNĐ</Text>
                    </Flex>
                </Flex>
          </Table.Td>
          <Table.Td>{item.quantity}</Table.Td>
          <Table.Td>
            <Flex justifyContent="center" sx={{margin: 'auto'}}><Text fw={500}>{item.newPrice*item.quantity} VNĐ</Text></Flex>
          </Table.Td>
        </Table.Tr>
    ));
    const handleFormCardSubmit = (values: any) => {
        console.log('Submitted values:', values);
    };
    const handleFormEWalletSubmit = (values: any) => {
        console.log('Submitted values:', values);
    };

  const renderTabContent = (key: string | number) => {
      switch (key) {
        case '1':
          return <p>Thanh toán bằng tiền mặt khi nhận hàng</p>;
        case '2':
          return (
            <form onSubmit={formCard.onSubmit((values) => handleFormCardSubmit(values))}>
                <Flex direction="column" gap="md" p='15px 0'>
                    <Flex gap="md">
                        <TextInput
                            withAsterisk
                            label="Số thẻ"
                            {...formCard.getInputProps('cardNumber')} />
                        <TextInput
                            withAsterisk
                            label="Ngày hết hiệu lực"
                            {...formCard.getInputProps('expiration')} />
                    </Flex>
                    <Flex gap="md">
                        <TextInput
                            withAsterisk
                            label="Tên trên thẻ"
                            {...formCard.getInputProps('cardName')} />
                        <TextInput
                            withAsterisk
                            label="CVV"
                            {...formCard.getInputProps('cvvCode')}/>
                    </Flex>
                </Flex>
                <Button type="submit" color="#009F7F">Submit</Button>
          </form>
          );
        case '3':
          return (
            <form onSubmit={formEWallet.onSubmit((values) => handleFormEWalletSubmit(values))}>
                <Flex direction="column" gap="md" {...stylex.props(styles.eWalletContainer)}>
                    <TextInput
                        withAsterisk
                        label="Số ví điện tử"
                        {...formEWallet.getInputProps('walletCode')} />
                    <PasswordInput 
                        withAsterisk
                        label="Mật khẩu"
                        {...formEWallet.getInputProps('password')} />
                </Flex>
                    <Button type="submit" color="#009F7F">Submit</Button>
          </form>
          );
        default:
          return null;
      }
    };

    // Lấy ngày hôm nay
    const today = new Date();

    // Thêm 1 ngày
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + 1);

    return (
        <Flex gap="lg" direction="column" p={20}>
            <Flex justify="space-between">
                <Text fw={700} size="lg">Chi tiết đơn đặt hàng - {OrderInfo.id}</Text>
                <Flex align="center" gap={8} {...stylex.props(styles.textColor)}><IconEye  /> Chi tiết</Flex>
            </Flex>
            <Flex {...stylex.props(styles.infoSection)}>
                <Flex direction="column" gap={4} justify="center" {...stylex.props(styles.address)}>
                    <Text fw={500}>Số điện thoại nhận hàng</Text>
                    <Text c="dimmed">{OrderInfo.account.phone}</Text>
                    <Text fw={500}>Địa chỉ giao hàng</Text>
                    <Text c="dimmed">{OrderInfo.account.address}</Text>
                </Flex>
                <Flex direction="column" gap={4} justify="center" {...stylex.props(styles.price)}>
                    <Flex justify='space-between'>
                        <Text c="dimmed">Giá đơn hàng</Text>
                        <Text c="dimmed">{totaldata.totalamount} VNĐ</Text>
                    </Flex>
                    <Flex justify='space-between'>
                        <Text c="dimmed">Giảm giá</Text>
                        <Text c="dimmed">- {totaldata.voucherDiscount} VNĐ</Text>
                    </Flex>
                    <Flex justify='space-between'>
                        <Text c="dimmed">Phí giao hàng</Text>
                        <Text c="dimmed">{totaldata.totalship} VNĐ</Text>
                    </Flex>
                    <Flex justify='space-between'>
                        <Text fw={700}>Tổng cộng</Text>
                        <Text fw={700}>{totaldata.TOTAL} VNĐ</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex>
                <Text fw={500} size="md">Dự kiến giao - &nbsp; </Text>
                <Text fw={500} c='#009F7F'>{futureDate.toLocaleDateString('en-GB')}</Text>
            </Flex>
            <Table>
                <Table.Thead>
                    <Table.Tr>
                    <Table.Th>Sản phẩm</Table.Th>
                    <Table.Th>Số lượng</Table.Th>
                    <Table.Th>Giá</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
            <div>
                <Text fw={700}> Vui lòng chọn phương thức thanh toán </Text>
                <div {...stylex.props(styles.paymentContainer)}>
                    <Tabs defaultValue="gallery">
                        <Tabs.List>
                            <Tabs.Tab value="COD" leftSection={<IconCoin style={iconStyle} />}>
                            COD
                            </Tabs.Tab>
                            <Tabs.Tab value="creditCard" leftSection={<IconCreditCard style={iconStyle} />}>
                            Thẻ tín dụng
                            </Tabs.Tab>
                            <Tabs.Tab value="e-wallet" leftSection={<IconWallet style={iconStyle} />}>
                            Ví điện tử
                            </Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="COD">
                            {renderTabContent('1')}
                        </Tabs.Panel>
                        <Tabs.Panel value="creditCard">
                            {renderTabContent('2')}
                        </Tabs.Panel>
                        <Tabs.Panel value="e-wallet">
                            {renderTabContent('3')}
                        </Tabs.Panel>
                    </Tabs>
                </div>
            </div>
            <div>
                <Text fw={700}> Ghi chú </Text>
                <Textarea rows={3} p="10px 13px" m="10px 0 10px 0"/>
            </div>
            <Flex justify='flex-end'>
                <Button size="md" color="#009F7F">
                <Text fw={500}>ĐẶT HÀNG</Text>
                </Button>
            </Flex> 
        </Flex>
    );
}


const styles = stylex.create({
    productImg: {
        width: '50px', 
        height: '50px',
    },
    eWalletContainer: {
        padding: '15px 0', 
        width: '40%',
    },
    textColor: {
        color: '#009f7f',
    },
    infoSection: {
        borderBottom: '1px solid #e7e7e7',
    },
    address: {
        flex: '5', 
        borderRight: '1px solid #e7e7e7', 
        padding: '0 20px 20px 0',
    },
    price: {
        flex: '4', 
        padding: '0 0 20px 20px',
    },
    paymentContainer:{
        padding: '10px 13px', 
        margin: '10px 0 10px 0',
    },
  });
