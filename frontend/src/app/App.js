import React, {Component} from 'react';
import { Table, Layout, Button, Modal, Row,Col,Form, Input,Image } from 'antd';
import {bindActionCreators} from "redux";
import {getArticlesAction, getArticleAction,saveArticleAction,updateArticleAction,deleteArticleAction} from "../action/ArticleAction";
import {connect} from "react-redux";
import AppModal from './../component/modal';

import './App.css';
const { Header, Footer, Sider, Content } = Layout;

const { TextArea } = Input;

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            columns : [
                {
                    title: 'ID',
                    width: 100,
                    dataIndex: 'id',
                    key: 'id',
                    fixed: 'left',
                },
                {
                    title: 'Title',
                    width: 100,
                    dataIndex: 'title',
                    key: 'title',
                    fixed: 'left',
                },
                {
                    title: 'Body',
                    dataIndex: 'body',
                    key: 'body',
                    width: 300,
                },
                {
                    title: 'Status',
                    dataIndex: 'status',
                    key: 'status',
                    width: 50,
                },
                {
                    title: 'Created By',
                    dataIndex: 'createdBy',
                    key: 'createdBy',
                    width: 100,
                },
                {
                    title: 'Created At',
                    dataIndex: 'createdAt',
                    key: 'createdAt',
                    width: 100,
                },
                {
                    title: 'Updated By',
                    dataIndex: 'updatedBy',
                    key: 'updatedBy',
                    width: 100,
                },
                {
                    title: 'Updated At',
                    dataIndex: 'updatedAt',
                    key: 'updatedAt',
                    width: 100,
                },
                {
                    title: 'Action',
                    key: 'operation',
                    fixed: 'right',
                    width: 100,
                    render: (text, record) => (<a onClick={(e) => { this.handleDelete(record.id, e); }}>Delete</a>),
                },
            ],
            articles : [],
            isLoading: true,
            visible:false
        };
        this.props.getArticlesAction(1,30);
    }

    componentWillReceiveProps(nextProps) {
        const articlesData = [];
        if(nextProps.articles.data !== undefined && nextProps.articles.data &&  nextProps.articles.data.length > 0){
            const dataAPI = nextProps.articles.data;
            for (let i = 0; i < dataAPI.length; i++) {
                articlesData.push({
                    key: dataAPI[i].id,
                    id:dataAPI[i].id,
                    title: dataAPI[i].title,
                    body: dataAPI[i].body,
                    status:dataAPI[i].status,
                    createdBy:dataAPI[i].createdBy,
                    createdAt:dataAPI[i].createdAt,
                    updatedBy:dataAPI[i].updatedBy,
                    updatedAt:dataAPI[i].updatedAt
                });
            }
            this.setState({
                articles: articlesData,
                isLoading: false,
                visible:false
            });
        }
    }

    handleDelete = (key, e) => {
        e.preventDefault();
        const articles = this.state.articles.filter(function(item) {
            return item.key === key;
        });
        const article = articles[0];
        this.props.deleteArticleAction(article.id);
        this.props.getArticlesAction(1,30);
    };

    handleUpdate = (key,e) => {
        e.preventDefault();
    };

    handleSave = () => {
        //e.preventDefault();

        const article = {
            "title": "Title1",
            "body": "Body1"
        };
        this.props.saveArticleAction(article);
        this.props.getArticlesAction(1,30);
    };

    state = {
        loading: false,
        visible: false,
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        //this.setState({ loading: true });

        // setTimeout(() => {
        //     this.setState({ loading: false, visible: false });
        // }, 3000);
        this.setState({ loading: false, visible: false });
        this.handleSave();
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    render() {
        const { visible, loading } = this.state;

        const onFinish = (values) => {
            console.log(values);
        };

        const validateMessages = {
            required: '${label} is required!',
            types: {
                email: '${label} is not a valid email!',
                number: '${label} is not a valid number!',
            },
            number: {
                range: '${label} must be between ${min} and ${max}',
            },
        };

        return (
            <Layout>
                <Header className={'appHeader'}>
                    <Row>
                        <Col span={4}>
                            <Image
                                width={100}
                                src="https://www.techostartup.center/static/img/why_us.gif"
                                preview={{
                                    src: "https://www.techostartup.center/static/img/why_us.gif",
                                }}
                            />
                        </Col>
                        <Col span={20} >
                            <h2>Spring Boot React Docker Demo</h2>
                        </Col>
                    </Row>
                </Header>
                <Layout>
                    <Sider className={'appSider'}>

                    </Sider>
                    <Content className={'appContent'}>
                        <Row>
                            <Col>
                                <Button type="primary" onClick={this.showModal}>
                                    Add new article
                                </Button>
                            </Col>
                            <Col>
                                {
                                    this.state.isLoading ? <h3>Loading...</h3> : (
                                        <Table key={"article"} columns={this.state.columns} dataSource={this.state.articles} scroll={{ x: 1500 }} sticky />
                                    )
                                }
                                <Modal
                                    visible={visible}
                                    title="Add new article"
                                    onOk={this.handleOk}
                                    onCancel={this.handleCancel}
                                    footer={[
                                        <Button key="back" onClick={this.handleCancel}>
                                            Cancel
                                        </Button>,
                                        <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                                            Submit
                                        </Button>,
                                    ]}
                                >
                                    <TextArea placeholder="Title" autoSize />
                                    <div style={{ margin: '24px 0' }} />
                                    <TextArea
                                        onChange={this.onChange}
                                        placeholder="Body"
                                        autoSize={{ minRows: 3, maxRows: 5 }}
                                    />
                                </Modal>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
                <Footer className={'appFooter'}>Copyright © 2021 All Rights Reserved, PRASAC MFI Plc.</Footer>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        articles: state.getArticlesReducer.articles
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({getArticlesAction,getArticleAction, saveArticleAction,updateArticleAction, deleteArticleAction}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);



