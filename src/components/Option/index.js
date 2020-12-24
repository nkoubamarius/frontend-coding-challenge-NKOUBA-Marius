import React from "react";
import { DateDiv, OptionContainer, OptionH4, Owner } from "./OptionElements";
import * as timeago from "timeago.js";

const Option = ({ Icon, title, color, number, created_at, owner, border }) => {
  return (
    <OptionContainer style={{ border: `3px solid ${color}` }}>
      {Icon && <Icon style={{ color: color }} />}

      {title ? (
        <OptionH4>
          {title}: {number}
        </OptionH4>
      ) : (
        <OptionH4>
          Submitted&nbsp;
          <DateDiv>
            {timeago.format(new Date(created_at).toLocaleDateString())}
          </DateDiv>
          &nbsp; by&nbsp;
          <Owner>{owner}</Owner>
        </OptionH4>
      )}
    </OptionContainer>
  );
};

export default Option;
