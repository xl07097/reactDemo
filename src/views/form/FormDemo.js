import React from "react";
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Button,
    AutoComplete,
} from "antd";

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

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
            }
        });
    };

    handleConfirmBlur = e => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue("password")) {
            callback("两次密码不一致");
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(["confirm"], { force: true });
        }
        callback();
    };

    handleWebsiteChange = value => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = [".com", ".org", ".net"].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    };
    componentDidMount(){
        console.log(process.env);
    }
    
    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 12 },
                sm: { span: 4 }
            },
            wrapperCol: {
                xs: { span: 12 },
                sm: { span: 4 }
            }
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 12,
                    offset: 0
                },
                sm: {
                    span: 12,
                    offset: 0
                }
            }
        };
        const prefixSelector = getFieldDecorator("prefix", {
            initialValue: "86",
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>,
        );

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="邮箱">
                    {getFieldDecorator("email", {
                        initialValue: "123@163.com",
                        rules: [
                            {
                                type: "email",
                                message: "email不合法",
                            },
                            {
                                required: true,
                                message: "邮箱不能为空",
                            },
                        ],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="密码" hasFeedback>
                    {getFieldDecorator("password", {
                        rules: [
                            {
                                required: true,
                                message: "密码不能为空",
                            },
                            {
                                validator: this.validateToNextPassword,
                            },
                        ],
                    })(<Input.Password />)}
                </Form.Item>
                <Form.Item label="确认密码" hasFeedback>
                    {getFieldDecorator("confirm", {
                        rules: [
                            {
                                required: true,
                                message: "请确认密码",
                            },
                            {
                                validator: this.compareToFirstPassword,
                            },
                        ],
                    })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                </Form.Item>
                <Form.Item
                    label={
                        <span>
                            昵称&nbsp;
                            <Tooltip title="你想要别人怎么称呼你">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                        </span>
                    }
                >
                    {getFieldDecorator("nickname", {
                        rules: [
                            { 
                                required: true, 
                                message: "请输入昵称",
                                whitespace: true 
                            }
                        ],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="eHabitual Residenc">
                    {getFieldDecorator("residence", {
                        initialValue: ["zhejiang", "hangzhou", "xihu"],
                        rules: [
                            { type: "array", required: true, message: "请选择地址" },
                        ],
                    })(<Cascader options={residences} />)}
                </Form.Item>
                <Form.Item label="电话号码">
                    {getFieldDecorator("phone", {
                        rules: [{ required: true, message: "请输入电话号码" }],
                    })(<Input addonBefore={prefixSelector} style={{ width: "100%" }} />)}
                </Form.Item>
                <Form.Item label="网址">
                    {getFieldDecorator("website", {
                        rules: [{ required: true, message: "请输入网址" }],
                    })(
                        <AutoComplete
                            dataSource={websiteOptions}
                            onChange={this.handleWebsiteChange}
                            placeholder="website"
                        >
                            <Input />
                        </AutoComplete>,
                    )}
                </Form.Item>
                <Form.Item label="验证码" extra="我们确保您不是机器人">
                    <Row gutter={8}>
                        <Col span={12}>
                            {getFieldDecorator("captcha", {
                                rules: [{ required: true, message: "请输入验证码" }],
                            })(<Input />)}
                        </Col>
                        <Col span={12}>
                            <Button>获取验证码</Button>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default  Form.create({ name: "register" })(RegistrationForm);

