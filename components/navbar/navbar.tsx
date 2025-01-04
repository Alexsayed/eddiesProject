import { useState } from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";

const Navbar = () => {
  return (
    <>
      <div className=" w-full h-14 p-4 align-middle inline-block" >
        <div className="inline">menu</div>
        <div className="inline">Project Name</div>
        <div className="inline">Serach</div>
        <div className=" float-right h-12">Cart</div>
      </div>
    </>
  )
}
export default Navbar;