import React from 'react';
import Layout from '../components/layout/Layout';
import { useParams } from "react-router-dom";
import DiscreteInputs from '../components/connection/chart/modbus/discreteInputs/DiscreteInputs';
import DescreteInputsCell from './descreteInputsCell/descreteInputsCell';

const Modbus = () => {

    const { id } = useParams(); // получение ID из URL
    
    return (
        <Layout>
            <h1> Активность запросов</h1>
            <DescreteInputsCell>
                <DiscreteInputs/>
            </DescreteInputsCell>

            <DescreteInputsCell>
                <DiscreteInputs/>
            </DescreteInputsCell>

            <DescreteInputsCell>
                <DiscreteInputs/>
            </DescreteInputsCell>

            <DescreteInputsCell>
                <DiscreteInputs/>
            </DescreteInputsCell>
            <h1> Значения регистров </h1>
            <h2> Descrete Inputs </h2>
            <DescreteInputsCell>
                <DiscreteInputs/>
            </DescreteInputsCell>

            <DescreteInputsCell>
                <DiscreteInputs/>
            </DescreteInputsCell>

            <DescreteInputsCell>
                <DiscreteInputs/>
            </DescreteInputsCell>

            <DescreteInputsCell>
                <DiscreteInputs/>
            </DescreteInputsCell>
            <h2> Holding Registers </h2>
            <DescreteInputsCell>
                <DiscreteInputs/>
            </DescreteInputsCell>

            <DescreteInputsCell>
                <DiscreteInputs/>
            </DescreteInputsCell>
        </Layout>
    );
};

export default Modbus;