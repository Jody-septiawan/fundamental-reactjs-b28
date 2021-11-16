import React from 'react';

function Event() {
  function Greeting() {
    return alert('Hello everyone have a nice day');
  }

  return (
    <div>
      <p>
        If you press <b>Click Here</b> then an alert will appear
      </p>
      <button onClick={() => alert('Hello full-stack bootcamp participants')}>
        Click here
      </button>

      <p>
        If you press <b>Greeting</b> then an alert will appear
      </p>
      <button onClick={Greeting}>Greeting</button>
    </div>
  );
}

export default Event;
