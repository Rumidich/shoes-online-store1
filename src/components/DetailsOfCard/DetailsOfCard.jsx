import { Typography } from "antd";
import Paragraph from "antd/lib/skeleton/Paragraph";
import Title from "antd/lib/skeleton/Title";

import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { shoesContext } from "../../contexts/shoesContext";

const DetailsOfCard = () => {
  const { oneShoe, getOneShoe } = useContext(shoesContext);
  const { id } = useParams();
  console.log(oneShoe);
  useEffect(() => {
    getOneShoe(id);
  }, []);
  return (
    <Typography>
      <Title>Introduction</Title>
      <Paragraph>
        In the process of internal desktop applications development, many
        different design specs and implementations would be involved, which
        might cause designers and developers difficulties and duplication and
        reduce the efficiency of development.
      </Paragraph>
      uniform the user interface specs for internal background projects, lower
      the unnecessary cost of design differences and implementation and liberate
      the resources of design and front-end development
    </Typography>
  );
};

export default DetailsOfCard;
