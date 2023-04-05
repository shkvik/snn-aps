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
import { Badge, Dropdown, Space, Table, Button, Popconfirm, message } from 'antd';
import LayoutAntDesign from '../components/layout/Layout';

import DiscreteInputs from '../components/connection/chart/modbus/discreteInputs/DiscreteInputs';
import DescreteInputsCell from './descreteInputsCell/descreteInputsCell';
import HoldingRegisters from '../components/connection/chart/modbus/holdingRegisters/holdingRegisters';


const items = [
  {
    key: '1',
    label: 'Action 1',
  },
  {
    key: '2',
    label: 'Action 2',
  },
];


const Modbus = () => {
  const expandedRowRender = (record) => {
        const columns = [
            {
                title: 'Register',
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
                title: 'Activity',
                dataIndex: 'activity',
                key: 'activity',
                render: () =><DescreteInputsCell> <HoldingRegisters/> </DescreteInputsCell>,
            },
        ];
        const data = [];


        for (let i = 0; i < 6; ++i) {
        data.push({
            key: i.toString(),
            registerNumber: i + 1,
            name: 'Untitled',
            upgradeNum: 'Upgraded: 56',
            statusState: <Badge status="warning" text="Need train" />,
            trainState: <Badge status="error" text="Not train" />
        });
        }


        return (
            <Table
                columns={columns} 
                dataSource={data} 
                pagination={{
                    pageSize: 4, // количество строк на странице
                    total: data.length, // общее количество строк в таблице
                }}
            />
        );
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
        status:  <Badge status="success" text="Normal" /> ,
        train: <Badge status="warning" text="Need train" />,
        activity: <DescreteInputsCell> <HoldingRegisters/> </DescreteInputsCell>,
    });
    

    data.push({
        key: 1,
        name: 'Discrete Inputs',
        action: btnTrain(),
        status:  <Badge status="success" text="Normal" />,
        train: <Badge status="warning" text="Need train" />,
        activity: <DescreteInputsCell> <HoldingRegisters/> </DescreteInputsCell>,
    });

    data.push({
        key: 2,
        name: 'Coils',
        action: btnTrain(),
        status:  <Badge status="success" text="Normal" />,
        train: <Badge status="warning" text="Need train" />,
        activity: <DescreteInputsCell> <HoldingRegisters/> </DescreteInputsCell>,
    });

    data.push({
        key: 3,
        name: 'Input Registers',
        action: btnTrain(),
        status:  <Badge status="success" text="Normal" />,
        train: <Badge status="warning" text="Need train" />,
        activity: <DescreteInputsCell> <HoldingRegisters/> </DescreteInputsCell>,
    });

    data.push({
        key: 4,
        name: 'Holding Registers',
        action: btnTrain(),
        status:  <Badge status="success" text="Normal" />,
        train: <Badge status="warning" text="Need train" />,
        activity: <DescreteInputsCell> <HoldingRegisters/> </DescreteInputsCell>,
    });

    return (
        <LayoutAntDesign>
            <div style={{ width: '100%', height: '100%' }}>
                <Table
                columns={columns}
                pagination={false}
                bordered
                expandable={{
                    expandedRowRender,
                    defaultExpandedRowKeys: ['1'],
                }}
                dataSource={data}
                />
            </div>
        </LayoutAntDesign>
    );
};
export default Modbus;