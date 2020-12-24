import React from "react";
import { OptionContainer, OptionH4 } from "./OptionElements";
import * as timeago from "timeago.js";

const Option = ({ Icon, title, color, number, created_at, owner }) => {
  return (
    <OptionContainer>
      {Icon && <Icon style={{ color: color }} />}

      {title ? (
        <OptionH4>
          {title}: {number}
        </OptionH4>
      ) : (
        <OptionH4>
          Submitted&nbsp;
          {timeago.format(new Date(created_at).toLocaleDateString())}&nbsp;
          by&nbsp;
          {owner}
        </OptionH4>
      )}
    </OptionContainer>
  );
};

export default Option;
