import React from "react";

interface FCProps {
  children: React.ReactElement;
}

const MiddlePage: React.FC<FCProps> = (props) => <>{props.children}</>;

export default MiddlePage;
