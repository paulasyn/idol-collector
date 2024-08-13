'use client'
import React from 'react';
import '/src/app/globals.css';

function LoginButton(){
  return (
    <>
      <button type="button" onClick={() => console.log("Button clicked!")} className="my-custom-class">
        Login&nbsp;
      </button>
    </>
  );
};

export default LoginButton;