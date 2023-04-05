// import React from 'react';
// import Layout from '../components/layout/Layout';



// import Activity from '../components/connection/chart/activity/Activity';

// const Modbus = () => {

//     const { id } = useParams(); // получение ID из URL
    
//     return (
//         <Layout>
//             <h1> Активность запросов</h1>
//             <DescreteInputsCell>
//                 <HoldingRegisters/>
//             </DescreteInputsCell>

//             <DescreteInputsCell>
//                 <HoldingRegisters/>
//             </DescreteInputsCell>

//             <DescreteInputsCell>
//                 <HoldingRegisters/>
//             </DescreteInputsCell>

//             <DescreteInputsCell>
//                 <HoldingRegisters/>
//             </DescreteInputsCell>
//             <h1> Значения регистров </h1>
//             <h2> Descrete Inputs </h2>
//             <DescreteInputsCell>
//                 <DiscreteInputs/>
//             </DescreteInputsCell>

//             <DescreteInputsCell>
//                 <DiscreteInputs/>
//             </DescreteInputsCell>

//             <DescreteInputsCell>
//                 <DiscreteInputs/>
//             </DescreteInputsCell>

//             <DescreteInputsCell>
//                 <DiscreteInputs/>
//             </DescreteInputsCell>
//             <h2> Holding Registers </h2>
//             <DescreteInputsCell>
//                 <HoldingRegisters/>
//             </DescreteInputsCell>

//             <DescreteInputsCell>
//                 <HoldingRegisters/>
//             </DescreteInputsCell>
//             <DescreteInputsCell>
//                 <HoldingRegisters/>
//             </DescreteInputsCell>
//             <DescreteInputsCell>
//                 <HoldingRegisters/>
//             </DescreteInputsCell>
//         </Layout>
//     );
// };

// export default Modbus;
import React, {useState} from 'react'
import { DownOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { Badge, Dropdown, Space, Table, Button, Popconfirm, message, Progress, Card, Col, Row  } from 'antd';
import LayoutAntDesign from '../components/layout/Layout';

import DiscreteInputs from '../components/connection/chart/modbus/discreteInputs/DiscreteInputs';
import DescreteInputsCell from './descreteInputsCell/descreteInputsCell';
import HoldingRegisters from '../components/connection/chart/modbus/holdingRegisters/holdingRegisters';






const Modbus = () => {

  const getExpandedRowRender = (record, index) => {

        let expandedRowContent;

        if(index != 0){
            
            const columns = [
                {
                    title: 'Register ID',
                    dataIndex: 'registerNumber',
                    key: 'register',
                },
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: 'Status',
                    dataIndex: 'statusState',
                    key: 'statusState',
                },
                {
                    title: 'Train',
                    dataIndex: 'trainState',
                    key: 'trainState',
                },
                {
                    title: 'Time Series',
                    dataIndex: 'time_series',
                    key: 'time_series',
                    render: () =><DescreteInputsCell> <DiscreteInputs/> </DescreteInputsCell>,
                },
                {
                    title: 'Action',
                    dataIndex: 'action',
                    key: 'action',
                },
            ];
            const data = [];
    
            const btnsRegisters = () => {
                return(
                    <Space size="middle">
                        <Popconfirm
                            placement="leftTop"
                            title={'Train'}
                            description={'description'}
                            onConfirm={confirm}
                            okText="Yes"
                            cancelText="No"
                        >   
    
                            <a>Train</a>
    
                        </Popconfirm>
    
                        <Popconfirm
                        placement="leftTop"
                        title={'Rename'}
                        description={'description'}
                        onConfirm={confirm}
                        okText="Yes"
                        cancelText="No"
                        >   
                            <a>Rename</a>
                
                        </Popconfirm>
                    </Space>
                )
            }
    
            for (let i = 0; i < 6; ++i) {
            data.push({
                key: i.toString(),
                registerNumber: `№ ${i + 1}`,
                name: 'Untitled',
                upgradeNum: 'Upgraded: 56',
                statusState: <Badge status="processing" text="Need train" />,
                trainState: <Progress type="circle" size={35} percent={70} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />,
                action: btnsRegisters(),
                });
            }

            expandedRowContent = (
                <Table
                    columns={columns} 
                    dataSource={data} 
                    pagination={{
                        pageSize: 4, // количество строк на странице
                        total: data.length, // общее количество строк в таблице
                    }}
                />
            );
        }
        else{
            //** Functions  **//
            const columns = [
                {
                    title: 'Code',
                    dataIndex: 'code',
                    key: 'code',
                },
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: 'Type',
                    dataIndex: 'type',
                    key: 'type',
                },
                {
                    title: 'Status',
                    dataIndex: 'status',
                    key: 'status',
                },
                {
                    title: 'Train',
                    dataIndex: 'train',
                    key: 'train',
                },
                {
                    title: 'Access',
                    dataIndex: 'access',
                    key: 'access',
                },
                {
                    title: 'Activity',
                    dataIndex: 'activity',
                    key: 'activity',
                    render: () =><DescreteInputsCell> <HoldingRegisters/> </DescreteInputsCell>,
                },
                {
                    title: 'Action',
                    dataIndex: 'action',
                    key: 'action',
                },
            ];
            const data = [];
    
            const btnsFunctions = () => {
                return(
                    <Space size="middle">
                        <Popconfirm
                            placement="leftTop"
                            title={'Train'}
                            description={'description'}
                            onConfirm={confirm}
                            okText="Yes"
                            cancelText="No"
                        >   
    
                            <a>Train</a>
    
                        </Popconfirm>
    
                    </Space>
                )
            }
    
            
            data.push({
                key: 0,
                code: '0x01',
                name: 'Read Coils',
                type: 'Descrete',
                status: <Badge status="warning" text="Need train" />,
                train: <Progress type="circle" size={35} percent={70} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />,
                access: 'Read',
                action: btnsFunctions(),
            });
            
            data.push({
                key: 1,
                code: '0x02',
                name: 'Read Discrete Inputs',
                type: 'Descrete',
                status: <Badge status="warning" text="Need train" />,
                train: <Progress type="circle" size={35} percent={70} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />,
                access: 'Read',
                action: btnsFunctions(),
            });

            data.push({
                key: 2,
                code: '0x03',
                name: 'Read Holding Registers',
                type: '16 bit',
                status: <Badge status="warning" text="Need train" />,
                train: <Progress type="circle" size={35} percent={70} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />,
                access: 'Read',
                trainState: <Badge status="error" text="Not train" />,
                action: btnsFunctions(),
            });

            data.push({
                key: 3,
                code: '0x04',
                name: 'Read Input Registers',
                type: '16 bit',
                status: <Badge status="warning" text="Need train" />,
                train: <Progress type="circle" size={35} percent={70} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />,
                access: 'Read',
                trainState: <Badge status="error" text="Not train" />,
                action: btnsFunctions(),
            });

            data.push({
                key: 4,
                code: '0x05',
                name: 'Write Single Coil',
                type: 'Descrete',
                status: <Badge status="warning" text="Need train" />,
                train: <Progress type="circle" size={35} percent={70} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />,
                access: 'Write',
                trainState: <Badge status="error" text="Not train" />,
                action: btnsFunctions(),
            });

            data.push({
                key: 5,
                code: '0x06',
                name: 'Write Single Register',
                type: '16 bit',
                status: <Badge status="warning" text="Need train" />,
                train: <Progress type="circle" size={35} percent={70} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />,
                access: 'Write',
                trainState: <Badge status="error" text="Not train" />,
                action: btnsFunctions(),
            });
            
            data.push({
                key: 6,
                code: '0x0F',
                name: 'Write Multiple Coils',
                type: 'Discrete',
                status: <Badge status="warning" text="Need train" />,
                train: <Progress type="circle" size={35} percent={70} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />,
                access: 'Write',
                trainState: <Badge status="error" text="Not train" />,
                action: btnsFunctions(),
            });

            data.push({
                key: 7,
                code: '0x10',
                name: 'Write Multiple Register',
                type: '16 bit',
                status: <Badge status="warning" text="Need train" />,
                train: <Progress type="circle" size={35} percent={70} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />,
                access: 'Write',
                trainState: <Badge status="error" text="Not train" />,
                action: btnsFunctions(),
            });

            expandedRowContent = (
                <Table
                    columns={columns} 
                    dataSource={data} 
                    pagination={{
                        pageSize: 4, // количество строк на странице
                        total: data.length, // общее количество строк в таблице
                    }}
                />
            );
        }

        return expandedRowContent;
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Train',
            dataIndex: 'train',
            key: 'train',
            align: 'center'
        },
        {
            title: 'Activity',
            dataIndex: 'activity',
            key: 'activity'
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
        },
    ];

    const confirm = () => {
        message.info('Clicked on Yes.');
    };

    const btnTrain = () => {
        return(
        <Popconfirm
            placement="leftTop"
            title={'text'}
            description={'description'}
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
        >   
            <Button 
                type="primary"
                icon={<ThunderboltOutlined />}
                shape="round"
            > Train</Button>

        </Popconfirm> )
    }

    const data = [];


    data.push({
        key: 0,
        name: 'Functions Activity',
        action: btnTrain(),
        status:  <Badge status="success" text="Normal" />,
        train: <Progress type="circle" size={50} percent={20} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />,
        activity: <DescreteInputsCell> <HoldingRegisters/> </DescreteInputsCell>,
    });
    

    data.push({
        key: 1,
        name: 'Discrete Inputs',
        action: btnTrain(),
        status:  <Badge status="success" text="Normal" />,
        train: <Progress type="circle" size={50} percent={90} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />,
        activity: <DescreteInputsCell> <HoldingRegisters/> </DescreteInputsCell>,
    });

    data.push({
        key: 2,
        name: 'Coils',
        action: btnTrain(),
        status:  <Badge status="success" text="Normal" />,
        train: <Progress type="circle" size={50} percent={70} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />,
        activity: <DescreteInputsCell> <HoldingRegisters/> </DescreteInputsCell>,
    });

    data.push({
        key: 3,
        name: 'Input Registers',
        action: btnTrain(),
        status:  <Badge status="success" text="Normal" />,
        train: <Progress type="circle" size={50} percent={100} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />,
        activity: <DescreteInputsCell> <HoldingRegisters/> </DescreteInputsCell>,
    });

    data.push({
        key: 4,
        name: 'Holding Registers',
        action: btnTrain(),
        status:  <Badge status="error" text="Alert" />,
        train: <Progress type="circle" size={50} percent={0} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />,
        activity: <DescreteInputsCell> <HoldingRegisters/> </DescreteInputsCell>,
    });

    return (
        <LayoutAntDesign>
            
            <div style={{ width: '100%', height: '100%' }}>
                <Table
                    columns={columns}
                    pagination={false}
                    bordered
                    expandedRowRender={getExpandedRowRender}
                    dataSource={data}
                />
            </div>
        </LayoutAntDesign>
    );
};
export default Modbus;