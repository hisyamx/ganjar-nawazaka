import React, { CSSProperties, ReactNode } from "react";

import { BonVivantFont } from "@/style/fonts";
import Text from "../Text";

const Title = ({
  children,
  display = "inline"
}: {
  children: ReactNode;
  display?: CSSProperties["display"];
}) => {
  return (
    <Text
      style={{ display }}
      className={`${BonVivantFont.className} text-44pxr leading-45pxr medium:text-54pxr medium:leading-57pxr large:text-60pxr large:leading-64pxr whitespace-pre-line`}
    >
      {children}
    </Text>
  );
};

export default Title;
