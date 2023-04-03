import React from 'react';
import Layout from '../components/layout/Layout';
import { useParams } from "react-router-dom";

const Modbus = () => {

    const { id } = useParams(); // получение ID из URL
    
    return (
        <Layout>
            <h1> Здорово говно {id} </h1>
        </Layout>
    );
};

export default Modbus;