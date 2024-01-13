import { Button, Col, Flex, Input, Row } from "antd";
import Navbar from "../../components/Navbar/Navbar";
import { CustomerNavbar } from "../../components/CustomerNavbar/CustomerNavbar";
import "./Profile.css";
import shopBanner from "../../../assets/shopBanner.png";
import { ProductList } from "../../components/ProductList/ProductList";
import { Route, Routes } from "react-router-dom";
import { CustomerInfo } from "./CustomerInfo";
import UserAdmin from "../../components/CustomerNavbar/UserNavbar";
import { OrderDetail } from "../../components/OrderDetail/OrderDetail";

export const Orders: React.FC<{shopId?: string}> = () => {
    return(
        <div className="OrdersPage">
            <Flex>
                <Flex style={{flex: '3'}}>
                    <UserAdmin /> 
                </Flex>
                <Flex gap="large" style={{flex: '10', padding: '24px 24px 0 0'}}>
                    <Flex style={{flex: '3', backgroundColor: '#fff'}}>
                        <span>Đơn hàng của tôi</span>
                    </Flex>
                    <Flex vertical style={{flex: '6', backgroundColor: '#fff'}}>
                        <OrderDetail orderId={1} />
                    </Flex>
                </Flex>
            </Flex>
        </div>
    )
}