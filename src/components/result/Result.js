import React from 'react';
import styled from '@emotion/styled'
import { TransitionGroup, CSSTransition} from 'react-transition-group';
const Message = styled.p`
    background-color: rgb(127,224,237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`
const PriceContainer = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127,224,237);
    margin-top: 1rem;
    position: relative;
`
const FinalPrice = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`
const Result = ({ price }) => {
    return ( 
            (price === 0) ? 
                <Message>Selecciona marca, año y tipo de seguro</Message> 
                : 
                    (
                        <PriceContainer>
                            <TransitionGroup
                                component="p"
                                className="resultado"
                            >
                                <CSSTransition
                                    classNames="resultado"
                                    key={price}
                                    timeout={{ enter: 500, exit: 500 }}
                                >
                                <FinalPrice>El total es: ${price}</FinalPrice>
                                </CSSTransition>
                            </TransitionGroup>
                        </PriceContainer>
                    )
     );
}
 
export default Result;