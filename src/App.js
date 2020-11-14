import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import styled from 'styled-components';
import Loading from './Loading';
import Checkout from './Checkout';

const MainColumn = styled.div`
  max-width: 1150px;
  margin: 0 auto;
`;



const defaultHistory = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      loading: false,
      error: false,
      
    };
  }

  

  

  render() {
    const {
      total,
      loading,
      error,
    } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return (
        <MainColumn>
          Checkout indisponível!
        </MainColumn>
      );
    }

    return (
      <Router history={this.props.history || defaultHistory}>
        <MainColumn>
          <Checkout
            total={this.setTotal}
            
            
           
          />
          
        </MainColumn>
      </Router>
    );
  }
}

export default App;
