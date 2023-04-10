/**
 * This practice is based on Aamir youtube channel tutorial.
 * 
 * react-ant-design video seris.
 * 
 * TODO add URL here
*/


import { DashboardOutlined, HomeOutlined, PoweroffOutlined, ProfileOutlined, UnorderedListOutlined } from "@ant-design/icons/lib/icons";
import { Menu } from "antd";
import 'antd/dist/reset.css';
import React from "react";
import { Navigate } from "react-router-dom";

export default function SideMenu() {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <Menu
                onClick={({ key }) => {
                    if (key == "signout") {
                        // TODO
                    } else {
                        navigate(key);
                    }
                }}
                items={[
                    { label: "Home", key: "/", icon: <HomeOutlined /> },
                    { label: "Dashboard", key: "/dashboard", icon: <DashboardOutlined /> },
                    { label: "Users List", key: "/usersList", icon: <UnorderedListOutlined /> },
                    { label: "Profile", key: "/profile", icon: <ProfileOutlined /> },
                    { label: "Signout", icon: <PoweroffOutlined />, danger: true }
                ]}
            >
            </Menu>
        </div>
    )
}


function Content() {
    return <div>
        Content
    </div>
}
