import React from "react";
import System from "./System";
import Banner from "./Banner";

const Home = ({ contacts, setPage, setEditId }) => {
  return (
    <div>
      <Banner setPage={setPage} />
      <System contacts={contacts} setPage={setPage} setEditId={setEditId} />
    </div>
  );
};

export default Home;
