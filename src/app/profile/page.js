import React from 'react';
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";


const page = async() => {
const {getUser} = getKindeServerSession();
const user = await getUser()
    return (
        <div className="min-h-screen bg-gray-100  flex items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow-md text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome to your Profile</h1>
          <h3 className="text-lg text-gray-600">{user.given_name}</h3>
        </div>
      </div>
      
    );
};

export default page;