import { Button, Col, Flex, Input, Row } from "antd";
import Navbar from "../../components/Navbar/Navbar";
import { CustomerNavbar } from "../../components/CustomerNavbar/CustomerNavbar";
import "./Profile.css";
import shopBanner from "../../../assets/shopBanner.png";
import { ProductList } from "../../components/ProductList/ProductList";
import { Route, Routes } from "react-router-dom";
import { CustomerInfo } from "./CustomerInfo";
import UserNavbar from "../../components/CustomerNavbar/UserNavbar";

export const ChangePassword: React.FC<{shopId?: string}> = () => {
    return(
        <div className="ChangePasswordPage">
            <Flex>
                <Flex style={{flex: '3'}}>
                    <UserNavbar /> 
                </Flex>
                <Flex vertical gap="large" style={{flex: '11', padding: '24px 24px 0 0'}}>
                    <Flex className="ChangePassword" vertical gap="small" style={{flex: '3'}} align="flex-end">
                        <Flex vertical gap="small" align="flex-start" style={{width: '100%'}}>
                            <span style={{opacity: '0.7'}}>Mật khẩu cũ</span>
                            <Input.Password/>
                        </Flex>
                        <Flex vertical gap="small" align="flex-start" style={{width: '100%'}}>
                            <span style={{opacity: '0.7'}}>Mật khẩu mới</span>
                            <Input.Password/>
                        </Flex>
                        <Flex vertical gap="small" align="flex-start" style={{width: '100%'}}>
                            <span style={{opacity: '0.7'}}>Xác nhận mật khẩu</span>
                            <Input.Password/>
                        </Flex>
                        <Button style={{width: '100px', backgroundColor: "#009f7f", color: '#fff'}}>Xác nhận</Button>
                    </Flex>
                </Flex>
            </Flex>
        </div>
    )
}