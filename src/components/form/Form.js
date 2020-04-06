import React, { useState } from 'react';
import { getYearDifference, getBrandValue, getPlanValue } from '../../utils'
import styled from '@emotion/styled';
const InputGroup = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`
const Label = styled.label`
    flex: 0 0 100px;
`

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`
const InputRadio = styled.input`
    margin: 0 1rem;
`

const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;
    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`
const ErrorMessage = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`

const Form = ({ setResume, setLoading }) => {
    //State
    const [error, setError] = useState(false);
    const [data, setData] = useState({
        carBrand: '',
        year: '',
        plan: ''
    })
    const { carBrand, year, plan } = data;
    const obtainInfo = ev => {
        setData({
            ...data,
            [ev.target.name]: ev.target.value
        })
    }
    const handleOnSubmit = ev => {
        ev.preventDefault();
        if(carBrand.trim() === '' || year.trim() === '' || plan.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        let price = 2000;
        let yearDifference = getYearDifference(year);
        price -= ((yearDifference * 3) * price) / 100;
        price = getBrandValue(carBrand) * price;
        let planValue = getPlanValue(plan);
        price = parseFloat(price * planValue).toFixed(2);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setResume({
                price,
                data
            })
        }, 3000)
    }
    return ( 
        <form
            onSubmit={handleOnSubmit}
        >
            {error ? <ErrorMessage>Todos los campos son obligatorios</ErrorMessage> : null}
            <InputGroup>
                <Label>Marca</Label>
                <Select
                    name="carBrand"
                    value={carBrand}
                    onChange={obtainInfo}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiático</option>
                </Select>
            </InputGroup>
            <InputGroup>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={obtainInfo}
                >                  
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </InputGroup>
            <InputGroup>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basic"
                    checked={plan === 'basic'}
                    onChange={obtainInfo}
                /> Básico
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="complete"
                    checked={plan === 'complete'}
                    onChange={obtainInfo}
                /> Completo
            </InputGroup>
            <Button type="submit">Cotizar</Button>
        </form>
     );
}
 
export default Form;