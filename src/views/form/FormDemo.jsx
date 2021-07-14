import React from "react";
import { Form, Input, Tooltip, Cascader, Select, Row, Col, Button, AutoComplete, DatePicker } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
    {
        value: "zhejiang",
        label: "浙江",
        children: [
            {
                value: "hangzhou",
                label: "杭州",
                children: [
                    {
                        value: "xihu",
                        label: "西湖",
                    },
                ],
            },
        ],
    },
    {
        value: "jiangsu",
        label: "江苏",
        children: [
            {
                value: "nanjing",
                label: "南京",
                children: [
                    {
                        value: "zhonghuamen",
                        label: "中华门",
                    },
                ],
            },
        ],
    },
];

class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };
    formRef = React.createRef();

    handleSubmit = (values) => {
        // this.formRef.current.validateFieldsAndScroll((err, values) => {
        //     if (!err) {
        //         console.log(values["times"].format("YYYY-MM-DD HH:mm:ss"));
        //         console.log("Received values of form: ", values);
        //     }
        // });
    };

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value) => {
        const form = this.formRef.current;
        if (value && value !== form.getFieldValue("password")) {
            return Promise.reject("两次密码不一致");
        } else {
            return Promise.resolve();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            this.formRef.validateFields(["confirm"], { force: true });
        }
        callback();
    };

    handleWebsiteChange = (value) => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = [".com", ".org", ".net"].map((domain) => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    };
    componentDidMount() {
        console.log(process.env);
    }

    render() {
        const { getFieldDecorator } = this.formRef;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 4 },
                // sm: { span: 4 }
            },
            wrapperCol: {
                xs: { span: 12 },
                sm: { span: 4 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 4,
                    offset: 4,
                },
                sm: {
                    span: 4,
                    offset: 4,
                },
            },
        };
        const prefixSelector = (
            <Form.Item name="prefix" noStyle>
                <Select style={{ width: 70 }}>
                    <Option value="86">+86</Option>
                    <Option value="87">+87</Option>
                </Select>
            </Form.Item>
        );

        const websiteOptions = autoCompleteResult.map((website) =>
            // <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
            ({
                value: website,
                label: website,
            })
        );

        return (
            <Form {...formItemLayout} initialValues={
                {
                    prefix:"86"
                }
            } ref={this.formRef} onFinish={this.handleSubmit}>
                <Form.Item
                    label="邮箱"
                    name="email"
                    initialValue="xl07097@163.com"
                    rules={[
                        {
                            type: "email",
                            message: "email不合法",
                        },
                        {
                            required: true,
                            message: "邮箱不能为空",
                        },
                    ]}
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
                        {
                            validator: this.validateToNextPassword,
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="确认密码"
                    name="confirm"
                    rules={[
                        {
                            required: true,
                            message: "请确认密码",
                        },
                        {
                            validator: this.compareToFirstPassword,
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password onBlur={this.handleConfirmBlur} />
                </Form.Item>
                <Form.Item
                    label={
                        <span>
                            昵称&nbsp;
                            <Tooltip title="你想要别人怎么称呼你">
                                <QuestionCircleOutlined />
                            </Tooltip>
                        </span>
                    }
                    name="nickname"
                    rules={[
                        {
                            required: true,
                            message: "请输入昵称",
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="时间"
                    name="times"
                    rules={[{ type: "object", required: true, message: "请选择时间" }]}
                >
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                </Form.Item>
                <Form.Item
                    label="eHabitual Residenc"
                    name="residence"
                    initialValue={["zhejiang", "hangzhou", "xihu"]}
                    rules={[{ type: "array", required: true, message: "请选择地址" }]}
                >
                    <Cascader options={residences} />
                </Form.Item>
                <Form.Item label="电话号码" name="phone" rules={[{ required: true, message: "请输入电话号码" }]}>
                    <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item label="网址" name="website" rules={[{ required: true, message: "请输入网址" }]}>
                    <AutoComplete options={websiteOptions} onChange={this.handleWebsiteChange} placeholder="website">
                        <Input />
                    </AutoComplete>
                </Form.Item>
                <Form.Item
                    label="验证码"
                    name="captcha"
                    rules={[{ required: true, message: "请输入验证码" }]}
                    extra="我们确保您不是机器人"
                >
                    <Row gutter={8}>
                        <Col span={12}>
                            <Input />
                        </Col>
                        <Col span={12}>
                            <Button>获取验证码</Button>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Row gutter={8}>
                        <Col span={12}>
                            <Button type="primary" htmlType="submit">
                                提交
                            </Button>
                        </Col>
                    </Row>
                </Form.Item>
            </Form>
        );
    }
}

export default RegistrationForm;
