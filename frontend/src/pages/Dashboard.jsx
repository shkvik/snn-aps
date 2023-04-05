import React from 'react';
import LayoutAntDesign from '../components/layout/Layout';

import '../pages/Dashboard.css';

import Activity from '../components/connection/chart/activity/Activity';

import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, Progress, Badge} from 'antd';
import { useRef, useState, Link, Text } from 'react';
import { useNavigate } from 'react-router-dom';
import Highlighter from 'react-highlight-words';


const data = [
    {
      key: '1',
      id: '1',
      age: 32,
      source: '192.168.0.131:8080',
      destination: '149.154.167.50:65399',
      address: 'New York No. 1 Lake Park',
      protocol: 'Modbus',
      trained: <Progress percent={100} steps={5} />,
      status: <Badge status="success" text="Normal" />,
      activity: <Activity/>
    },
    {
      key: '2',
      id: '2',
      age: 12,
      source: '192.168.0.131:8080',
      destination: '149.154.167.50:65399',
      address: 'London No. 1 Lake Park',
      protocol: 'Modbus',
      trained: <Progress percent={70} steps={5} />,
      status:  <Badge status="processing" text="Learning" />,
      activity: <Activity/>
    },
    {
      key: '3',
      id: '3',
      age: 32,
      source: '192.168.0.131:8080',
      destination: '149.154.167.50:65399',
      address: 'Sydney No. 1 Lake Park',
      protocol: 'Modbus',
      trained: <Progress percent={20} steps={5} />,
      status:  <Badge status="processing" text="Learning" />,
      activity: <Activity/>
    },
    {
      key: '4',
      id: '4',
      age: 32,
      source: '192.168.0.131:8080',
      destination: '149.154.167.50:65399',
      address: 'London No. 2 Lake Park',
      protocol: 'Modbus',
      trained: <Progress percent={0} steps={5} />,
      status:  <Badge status="default" text="Learning" />,
      activity: <Activity/>
    },
  ];

const Dashboard = () => {

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      setSearchText(selectedKeys[0]);
      setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
      clearFilters();
      setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
        <div
          style={{
            padding: 8,
          }}
          onKeyDown={(e) => e.stopPropagation()}
        >
          <Input
            ref={searchInput}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{
              marginBottom: 8,
              display: 'block',
            }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
              icon={<SearchOutlined />}
              size="small"
              style={{
                width: 90,
              }}
            >
              Search
            </Button>
            <Button
              onClick={() => clearFilters && handleReset(clearFilters)}
              size="small"
              style={{
                width: 90,
              }}
            >
              Reset
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                confirm({
                  closeDropdown: false,
                });
                setSearchText(selectedKeys[0]);
                setSearchedColumn(dataIndex);
              }}
            >
              Filter
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                close();
              }}
            >
              close
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered) => (
        <SearchOutlined
          style={{
            color: filtered ? '#1890ff' : undefined,
          }}
        />
      ),
      onFilter: (value, record) =>
        record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownOpenChange: (visible) => {
        if (visible) {
          setTimeout(() => searchInput.current?.select(), 100);
        }
      },
      render: (text) =>
        searchedColumn === dataIndex ? (
          <Highlighter
            highlightStyle={{
              backgroundColor: '#ffc069',
              padding: 0,
            }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ''}
          />
        ) : (
          text
        ),
    });
    const columns = [
        {
          title: 'Id',
          dataIndex: 'id',
          key: 'id',
          className: 'my-cursor-pointer', // добавляем стиль курсора
          ...getColumnSearchProps('id'),
          
        },
        {
            title: 'Source',
            dataIndex: 'source',
            key: 'source',
            className: 'my-cursor-pointer',
            ...getColumnSearchProps('age'),
        },
        {
            title: 'Destination',
            dataIndex: 'destination',
            key: 'destination',
            className: 'my-cursor-pointer',
            ...getColumnSearchProps('age'),
        },
        {
            title: 'Protocol',
            dataIndex: 'protocol',
            className: 'my-cursor-pointer',
            key: 'protocol',
        },
        {
            title: 'Packets',
            dataIndex: 'age',
            className: 'my-cursor-pointer',
            key: 'age',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            className: 'my-cursor-pointer',
            
            key: 'status',
        },
        {
            title: 'Trained',
            dataIndex: 'trained',
            className: 'my-cursor-pointer',
            key: 'trained',
        },
        {
          title: 'Activity',
          dataIndex: 'activity',
          key: 'activity',
          className: 'my-cursor-pointer',
        },
      ];
      let navigate = useNavigate();

      const handleRowClick = (record) => {
        navigate(`/modbus/${record.id}`);
      };

    return (
        <LayoutAntDesign>
            <div style={{ width: '100%', height: '100%' }}>
                <Table columns={columns} dataSource={data}  onRow={(record) => ({
                    onClick: () => handleRowClick(record),})} />
            </div>
        </LayoutAntDesign>
    );
};

export default Dashboard;