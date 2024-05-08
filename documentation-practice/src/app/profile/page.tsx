import Link from "next/link";
import React from "react";

const Profile = () => {
  return (
    <div>
      <Link href={"/"} className='bg-slate-300 p-1'>
        Go Back To Home
      </Link>

      <h1>Profile</h1>
    </div>
  );
};

export default Profile;
