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
      <Footer style={{ backgroundColor: 'rgb(22, 9, 52)', position: 'absolute', left: '0', bottom: '0', right: '0' }}>
        <div className="footer" >
          <Counter />
          <div id="isim" >
            Designed By A.Asım
          </div>
        </div>
      </Footer>
    </Layout>

  );

}
export default App;
