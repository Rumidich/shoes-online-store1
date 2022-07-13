import React from "react";
import { useContext } from "react";
import { shoesContext } from "../../contexts/shoesContext";

import {
  DeleteOutlined,
  EditOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

const ShoeCard = ({ item }) => {
  const { deleteShoes } = useContext(shoesContext);
  const navigate = useNavigate();
  return (
    <Card
      style={{
        width: 300,
      }}
      cover={<img alt="example" src={item.image} />}
      actions={[
        <SettingOutlined
          key="setting"
          onClick={() => navigate("/details/:id")}
        />,
        <EditOutlined key="edit" onClick={() => navigate("/edit/:id")} />,
        <DeleteOutlined key="ellipsis" onClick={() => deleteShoes(item.id)} />,
      ]}>
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title={item.title}
        description={item.description}
      />
    </Card>
  );
};

export default ShoeCard;
