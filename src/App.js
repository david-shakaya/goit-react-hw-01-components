import React from "react";
import ReactDOM from "react-dom";
import ProfileItem from "./components/ProfileItem";
import user from "./user.json";

const App = () => {
  return (
    <div>
      <ProfileItem item={user} />
    </div>
  );
};

export default App;
