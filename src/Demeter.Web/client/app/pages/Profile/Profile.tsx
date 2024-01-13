import { Col, Flex, Row } from "antd";
import Navbar from "../../components/Navbar/Navbar";
import { CustomerNavbar } from "../../components/CustomerNavbar/CustomerNavbar";
import "./Profile.css";
import shopBanner from "../../../assets/shopBanner.png";
import { ProductList } from "../../components/ProductList/ProductList";
import { Route, Routes } from "react-router-dom";
import { CustomerInfo } from "./CustomerInfo";
import UserAdmin from "../../components/CustomerNavbar/UserNavbar";

export const Profile: React.FC<{shopId?: string}> = () => {
    return(
        <div className="ProfilePage">
            <Flex>
                <Flex style={{flex: '3'}}>
                    <UserAdmin /> 
                </Flex>
                <Flex className="Profile" vertical gap="large" style={{flex: '10', padding: '24px 24px 0 0'}}>
                    <CustomerInfo />
                </Flex>
            </Flex>
        </div>
    )
}