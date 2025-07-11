import React from 'react';
import CounterProvider from './contexts/CounterProvider';
import TestCounter from './components/share/TestCounter';
// import ThemeProvider from './contexts/theme/ThemeProvider';
// import ThemeTest from './components/tests/ThemeTest';
// import FunctionCounter from './components/tests/FunctionCounter';
// import CounterClassTest from './components/tests/CounterClassTest';
// import { useState } from 'react';
// import User from './components/share/User';
// import Button from './components/Button';
// import Counter from './components/Counter';
// import UserProfile from './components/UserProfile';
// import Todo from './components/Todo';
// import Form from './components/Form';
// import UserInfo from './components/UserInfo';
// import AdminInfo from './components/AdminInfo';
// import type { AdminInfo as AI, UserInfo as UI } from './assets/types/types';
// import GeneralProvider from './contexts/general/GeneralProvider';
// import MyCounter from './components/MyCounter';
// import UserProvider from './contexts/User/UserProvider';
// import Profile from './components/Profile';
const App = () => {
  // const [user] = useState({
  //   name: 'aung',
  //   age: 22,
  //   isUser: true
  // })

  // const userInfo: UI = { 
  //   name: 'chan',
  //   age: 30,
  // }

  // const adminInfo: AI = {
  //   name: 'admin koko',
  //   age: 33,
  //   role: 'admin',
  //   lastLogin: new Date()
  // }
  return (
    <React.Fragment>
      <section>
        {/* <User {...user} />
        <Button label='This is Test Button' status={false} onClick={() => console.log('hihi')} />
        <Button /> */}
        {/* <UserInfo {...userInfo} test='lorem12' />
        <AdminInfo {...adminInfo} /> */}
        {/* <Counter /> */}
        {/* <UserProfile /> */}
        {/* <Todo /> */}
        {/* <Form /> */}
        {/* 
        <GeneralProvider name='this is test name'>
          <MyCounter />
        </GeneralProvider> */}

        {/* <UserProvider>
          <Profile />
        </UserProvider> */}

        {/* <CounterClassTest /> */}
        {/* <FunctionCounter /> */}

        {/* <ThemeProvider>
          <ThemeTest />
        </ThemeProvider> */}

        <CounterProvider>
          <TestCounter />
        </CounterProvider>
      </section>
    </React.Fragment>
  );
};

export default App; 