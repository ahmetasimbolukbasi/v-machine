import React from 'react';
import MainPage from './MainPage';
import { Layout } from 'antd';
import Counter from './components/Counter';


const { Footer, Content } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Content>
        <MainPage />
      </Content>
      <Footer style={{ backgroundColor: "gray" }}>
        <div className="footer" >
          <div id="Counter">
            <Counter/>
          </div>
          <div id="isim">
           A.ASIM BÖLÜKBAŞI  
           </div>
        </div>
      </Footer>
    </Layout>
   
  );
  
}
export default App;
