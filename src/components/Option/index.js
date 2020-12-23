import React from "react";
import { OptionContainer, OptionH4 } from "./OptionElements";

const Option = ({ Icon, title, color, number }) => {
  return (
    <OptionContainer>
      <Icon style={{ color: color }} />
      <OptionH4>
        {title}: {number}
      </OptionH4>
    </OptionContainer>
  );
};

export default Option;
