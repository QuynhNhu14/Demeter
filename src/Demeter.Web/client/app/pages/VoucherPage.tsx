import { Container, Flex, Text, Image, Title} from "@mantine/core";
import * as stylex from "@stylexjs/stylex";
import logo from "../../assets/logo.png";

interface VoucherType {
    id: string;
    code: string;
    description: string;
    discount: number;
    startDate: string;
    endDate: string;
    active: boolean;
    usageLimit: number;
  }
  
const VoucherList: VoucherType[] = [
{
    id: '1',
    code: 'VOUCHER001',
    description: 'This voucher is only for new customers. Đơn tối thiểu 20k, dùng 2 lần /ngày',
    discount: 20,
    startDate:  '2024-03-15',
    endDate: '2024-03-30',
    active: true,
    usageLimit: 50,
},
{
    id: '2',
    code: 'VOUCHER002',
    description: 'This voucher is only for new customers',
    discount: 30,
    startDate: '2024-03-15',
    endDate: '2024-03-30',
    active: true,
    usageLimit: 100,
},
{
    id: '3',
    code: 'VOUCHER003',
    description: 'This voucher is only for new customers',
    discount: 15,
    startDate: '2024-03-15',
    endDate: '2024-03-30',
    active: true,
    usageLimit: 20,
},
{
    id: '4',
    code: 'VOUCHER004',
    description: 'This voucher is only for new customers',
    discount: 15,
    startDate: '2024-03-15',
    endDate: '2024-03-30',
    active: true,
    usageLimit: 20,
},
{
    id: '5',
    code: 'VOUCHER005',
    description: 'This voucher is only for new customers',
    discount: 15,
    startDate: '2024-03-15',
    endDate: '2024-03-30',
    active: true,
    usageLimit: 20,
},
{
    id: '6',
    code: 'VOUCHER006',
    description: 'This voucher is only for new customers',
    discount: 15,
    startDate: '2024-03-15',
    endDate: '2024-03-30',
    active: true,
    usageLimit: 20,
},
{
    id: '7',
    code: 'VOUCHER007',
    description: 'This voucher is only for new customers',
    discount: 15,
    startDate: '2024-03-15',
    endDate: '2024-03-30',
    active: true,
    usageLimit: 20,
},
{
    id: '8',
    code: 'VOUCHER008',
    description: 'This voucher is only for new customers. This voucher is only for new customers. This voucher is only for new customers. This voucher is only for new customers. This voucher is only for new customers',
    discount: 15,
    startDate: '2024-03-15',
    endDate: '2024-03-30',
    active: true,
    usageLimit: 20,
},
]
export const VoucherPage: React.FC = () => {
  return (
    <Flex {...stylex.props(styles.container)} direction="column" gap="lg">
        <Container align="center" >
            <Image src={logo} alt="logo" h={180} w="auto" fit="contain" mb={10}/>
            <Title>Phiếu giảm giá </Title> 
        </Container>
        <Flex
            wrap="wrap"
            gap="md"
            justify="space-between"
        >
            {VoucherList.map((voucher) => (
                <Flex direction="column" gap={4}  {...stylex.props(styles.box)}>
                    <Flex justify='space-between'>
                        <Text fw={700} c="#009f7f">
                            {voucher.code}
                        </Text>
                        <Flex align="center" gap={4}>
                            <Text fw={500} >Giảm {voucher.discount}%</Text>
                            <Text size="sm"> - Tối đa đ{voucher.usageLimit}k </Text>
                        </Flex>
                    </Flex>
                    <Flex direction="column">
                    <Text size="sm">{voucher.description}</Text>
                    <Text c="red" size="sm">
                        Hạn: {new Date(voucher.startDate).toLocaleDateString('en-GB')} - {new Date(voucher.endDate).toLocaleDateString('en-GB')}
                    </Text>
                    </Flex>
                </Flex>
            ))}
        </Flex>
    </Flex> 
  );
};
const styles = stylex.create({
    item: {
      display: "flex",
      padding: "10px",
      border: "1px solid #e7e7e7",
      width: "400px",
      height: "100px",
      backgroundColor: "#fff",
      ':hover': {
        cursor: "pointer",
        backgroundColor: "#f3f4f6",
      },
    },
    container: {
      padding: "50px 140px",
    },
    box: {
        backgroundColor: '#ffffff',
        width: '45%',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        padding: '20px 30px',
        borderRadius: '5px',
        marginBottom: '20px',
        border: '1px solid #e5e7eb',
        boxShadow: '0px 3px 0px 0px rgb(30, 174, 152)',
        cursor: 'pointer',
    },
  });