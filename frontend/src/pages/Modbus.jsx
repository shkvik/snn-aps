import React from 'react';
import Layout from '../components/layout/Layout';
import { useParams } from "react-router-dom";
import DiscreteInputs from '../components/connection/chart/modbus/discreteInputs/DiscreteInputs';

const Modbus = () => {

    const { id } = useParams(); // получение ID из URL
    
    return (
        <Layout>
            <h1> Активность запросов</h1>
            <DiscreteInputs/>
            <h1> Значения регистров </h1>
        </Layout>
    );
};

export default Modbus;