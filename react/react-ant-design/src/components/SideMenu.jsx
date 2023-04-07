import { Menu } from "antd";
import 'antd/dist/reset.css';
import React from "react";


export default function SideMenu() {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <Menu
                items={[
                    { label: "Home" },
                    { label: "Dashboard" },
                    { label: "Users List" },
                    { label: "Profile" },
                    { label: "Signout" }
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
