import React, { useState } from 'react';

//Create Component PrivatePage
function PrivatePage(props) {
  const { logout } = props;

  return (
    <>
      <h1>Welcome</h1>
      <button onClick={logout}>Logout</button>
    </>
  );
}

//Create Component GuestPage
function GuestPage(props) {
  const { login } = props;

  return (
    <>
      <h1>Please Sign</h1>
      <button onClick={login}>Login</button>
    </>
  );
}

function ConditionRenderin() {
  //init State
  const [isLogin, setIsLogin] = useState(false);

  // if (isLogin) {
  //   return <PrivatePage logout={() => setIsLogin(!isLogin)} />;
  // } else {
  //   return <GuestPage login={() => setIsLogin(!isLogin)} />;
  // }

  return (
    // Code Inside div
    <div>
      {isLogin ? (
        <PrivatePage logout={() => setIsLogin(!isLogin)} />
      ) : (
        <GuestPage login={() => setIsLogin(!isLogin)} />
      )}
    </div>
  );
}

export default ConditionRenderin;
