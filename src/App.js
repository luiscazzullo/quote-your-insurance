import React, { useState } from 'react';
import styled from '@emotion/styled';
//Components
import Header from './components/header/Header';
import Form from './components/form/Form';
import Resume from './components/resume/Resume';
import Result from './components/result/Result';
import Spinner from './components/spinner/Spinner';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const FormContainer = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {
  const [resume, setResume] = useState({
    price: 0,
    data: {
      carBrand: '',
      year: '',
      plan: ''
    }
  });
  const { price, data } = resume;
  const [loading, setLoading] = useState(false);
  return (
    <Container>
      <Header 
        title="Cotizador de seguros" />
      <FormContainer>
        <Form
          setResume={setResume}
          setLoading={setLoading}
        />
        { loading ? <Spinner /> : null}
        <Resume 
          data={data}
        />
        {
          !loading ?
          <Result 
          price={price}
          /> : null
        }
      </FormContainer>
    </Container>
  );
}

export default App;
