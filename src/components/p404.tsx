import React from "react";

/**
 * 填坑: tsx 中使用 require 报错要安装 @types/node tsconfig.json 中配置 "types": ["node"],
 */

const NoPage: React.FC<{}> = () => (
    <div style={{ textAlign: "center" }}>
        <h1>哈哈哈，找不到了吧！！！</h1>
        <img src={require("@/assets/huaji.jpg")} alt="huaji" />
    </div>
)

export default NoPage;
