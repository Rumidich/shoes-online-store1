import {
  AppstoreOutlined,
  AudioOutlined,
  HeartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, Space, Input, Affix } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const { Search } = Input;

const onSearch = value => console.log(value);
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const items = [
  {
    label: (
      <Link to="/">
        {
          <>
            <img
              style={{ width: "60px", height: "42px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbjhxh-t3buPKbILG69VLpoTuR-61Ra_kv5sZoZaLlIqrDOVZveM4fb6bj5sQV4DHz8EA&usqp=CAU"
            />
          </>
        }
      </Link>
    ),
    key: "logo",
  },

  {
    label: <Link to="/store">Men</Link>,
    key: "SubMenu",
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
    ],
  },
  {
    label: "Women",
    key: "SubMenu1",
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
    ],
  },
  {
    label: "Kids",
    key: "SubMenu2",
    children: [
      {
        type: "group",
        label: "Jordan",
        children: [
          {
            label: "Jordan",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
    ],
  },
  {
    label: (
      <div>
        <Space direction="vertical">
          <Search
            selectable={false}
            style={{ margin: "5px 0px" }}
            placeholder="input search text"
            enterButton="Search"
            size="large"
            suffix={suffix}
            onSearch={onSearch}
          />
        </Space>
      </div>
    ),
    key: "log",
  },
];

const Navbar = () => {
  const [current, setCurrent] = useState("mail");

  const onClick = e => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const [container, setContainer] = useState(null);
  return (
    <>
      <div className="scrollable-container" ref={setContainer}>
        <div className="background">
          <Affix target={() => window}>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={["mail"]}
              style={{
                // position: "sticky",
                display: "flex",
                justifyContent: "flex-end",
              }}>
              <Menu.Item>
                <UserOutlined />
              </Menu.Item>
              <Menu.Item
                key="shop"
                icon={<HeartOutlined style={{}} />}></Menu.Item>
              <Menu.Item icon={<ShoppingOutlined style={{}} />}></Menu.Item>
            </Menu>
          </Affix>
        </div>
      </div>
      <Menu
        style={{ display: "flex", justifyContent: "space-around" }}
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}></Menu>
    </>
  );
};

export default Navbar;
