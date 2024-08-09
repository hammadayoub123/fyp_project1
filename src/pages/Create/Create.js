import React from 'react';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import CreateInner from '../../components/CreateInner/CreateInner';
import Header from "../../components/Header/Header";


function Create() {
  return (
    <>
      <Header />
      <CreateInner />
      <ScrollButton />
    </>
  );
}

export default Create;