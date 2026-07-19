import React from "react";
import System from "./System";
import Banner from "./Banner";
import ProfilePic from "./ProfilePic";

const Home = ({ contacts, setPage, setEditId, setContacts }) => {
  return (
    <div>
      <Banner setPage={setPage} />
      <System contacts={contacts} setPage={setPage} setEditId={setEditId} />
      <ProfilePic contacts={contacts} setContacts={setContacts} />
    </div>
  );
};

export default Home;
