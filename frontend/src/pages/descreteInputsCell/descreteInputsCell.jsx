import React from 'react';
import './descreteInputsCell.css'
import { CircularProgressbarWithChildren , buildStyles } from 'react-circular-progressbar';

import { SettingOutlined, LoadingOutlined, QuestionCircleOutlined  } from '@ant-design/icons';
import { Button, Tooltip, Space, Popconfirm, message } from 'antd';

import 'react-circular-progressbar/dist/styles.css';

const DescreteInputsCell = (props) => {

    const percentage = 80;
    var test = false;
    const confirm = () => {
        message.info('Clicked on Yes.');
      };
    return (
        <div className='descreteInputsCell'>
            {/* <div>
                id: 1
            </div>

            <div>
            trained: false
            </div> */}
            {/*<div style={{ width: 50, height: 50 }}>*/}
                {/* <CircularProgressbarWithChildren 
                    value={80}
                    styles={buildStyles({
                        // Colors
                        pathColor: `rgba(0, 128, 0, ${percentage / 100})`,
                        trailColor: 'rgba(255, 255, 255,255)',
                      })}>
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
                                shape="circle"
                                color='#ff4d4f'
                                icon={<SettingOutlined />}
                                 
                            />
                        </Popconfirm>                    
                </CircularProgressbarWithChildren > */}
            {/*</div>}*/}
            {props.children}
        </div>
    );
};

export default DescreteInputsCell;