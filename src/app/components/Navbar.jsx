import Link from "next/link";
import React from "react";
import { RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
const Navbar = async() => {


const {getUser} = getKindeServerSession();
const user = await getUser();
  return (
    <div className="flex justify-between bg-gray-300 p-5">
      <div className="text-2xl mt-2">Bloggers List</div>
      <div className="list-none flex gap-5">
        <li className="border p-3 rounded-xl">
          <Link href="/">Home</Link>
        </li>
       {
        user ? <li className="border p-3 rounded-xl"><LogoutLink >Logout</LogoutLink></li>
         : 
        (
      <>
        <li className="border p-3 rounded-xl">
        <LoginLink>Sign in</LoginLink>
      </li>
      <li className="border p-3 rounded-xl">
      <RegisterLink>Sign up</RegisterLink>
      </li>
      </>
      )
       }
      </div>
    </div>
  );
};

export default Navbar;
