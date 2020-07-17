import React from "react";

export const context = React.createContext(null);

/**
 * React.createContext(defaultValue)  创建一个 context
 *
 * <Context.Provider value={value}></Context.Provider>
 *
 * Class.contextType 或 static contextType
 *
 * <Context.Consumer> 函数作为组件
 *  {value =>value }
 * </Context.Consumer>
 *
 * context.displayName = 'MyDisplayName' // 在开发工具中显示此名
 */
