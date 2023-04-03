import React, {useState} from 'react'

import Body from './body/Body';
import Menu from './menu/Menu';
import Content from './content/Content';
import Center from './center/Center';

const Layout = (props) => {

  return (
      <Body>
        <Content>
          <Menu/>
            <Center>
                {props.children}
            </Center>
          <Menu/>
        </Content>
      </Body>
  );
}

export default Layout;