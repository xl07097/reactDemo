import React from "react";
import { Form, Input, Button, message } from "antd";
import { userLogin } from "@/api/user";
class ModifyPassword extends React.Component {
  state = {
    confirmDirty: false,
  };
  formRef = React.createRef();

  /**
   * 加载时候调用 一次
   * 初始化 state
   *
   * @param {*} props
   */
  constructor(props) {
    super();
  }

  /**
   * render 之后，组建 虚拟 dom 之后，实际挂载之前，获取新的 props 或 state；
   * 接收新的 props 之后
   *
   * 返回一个对象作为新的 state
   * 返回 null 不更新 state
   *
   * @param {*} props
   * @param {*} state
   */
  static getDerivedStateFromProps(props, state) {
    return {};
  }

  /**
   * 组件挂载之后调用
   */
  componentDidMount() {}

  /**
   * 接收新的 props 或 state 变化时调用， 加载阶段不调用
   * 返回 true 组件更新
   * 返回 false 组件不更新
   * @param {*} nextProps
   * @param {*} nextState
   */
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  /**
   * 组件更新阶段
   * 组件 渲染之前
   * 返回一个值作为 componentDidUpdate 第三个参数
   * @param {*} prevProps
   * @param {*} prevState
   */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null;
  }

  /**
   * 组件更新之后调用
   * @param {*} prevProps
   * @param {*} prevState
   * @param {*} snapshot
   */
  componentDidUpdate(prevProps, prevState, snapshot) {}

  /**
   * 卸载之前调用
   */
  componentWillUnmount() {}

  /**
   * 捕获组件错误
   * @param {*} err
   * @param {*} info
   */
  componentDidCatch(err, info) {}

  handleSubmit = (e) => {
    this.formRef.current
      .validateFields()
      .then((values) => {
        console.log(values);
        userLogin(values).then((res) => {
          if (res.code === 200) {
            sessionStorage.setItem("token", res.data.token);
            sessionStorage.setItem("userinfo", JSON.stringify(res.data.user));
            this.props.onClose();
          } else {
            message.error(res.msg);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <Form ref={this.formRef} onFinish={this.handleSubmit}>
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            {
              required: true,
              message: "用户名不能为空",
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: "密码不能为空",
            },
          ]}
          hasFeedback
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          &emsp;
          <Button type="default" onClick={this.props.onClose}>
            关闭
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default ModifyPassword;
