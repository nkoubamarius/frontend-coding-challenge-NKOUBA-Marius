import React from "react";
import { OptionContainer, OptionH4 } from "./OptionElements";

const Option = ({ Icon, title, color, number, days, owner }) => {
  return (
    <OptionContainer>
      {Icon && <Icon style={{ color: color }} />}

      {title ? (
        <OptionH4>
          {title}: {number}
        </OptionH4>
      ) : (
        <OptionH4>
          Submitted {days} days ago by {owner}
        </OptionH4>
      )}
    </OptionContainer>
  );
};

export default Option;
