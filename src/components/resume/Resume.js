import React from 'react';
import styled from '@emotion/styled';
import { firstLetter } from '../../utils';
const ResumeContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`
const Resume = ({ data }) => {
    const { carBrand, year, plan} = data;
    if(carBrand === '' || year === '' || plan === '') return null
    return ( 
        <ResumeContainer>
            <h2>Resumen de cotización</h2>
            <ul>
                <li>Marca: {firstLetter(carBrand)}</li>
                <li>Año: {year}</li>
                <li>Plan: {firstLetter(plan)}</li>
            </ul>
        </ResumeContainer>
    );
}
 
export default Resume;