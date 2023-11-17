"use client"
import { FiAirplay } from "react-icons/fi";
import Link from "next/link";
import { CiUser, CiFolderOn, CiPlay1, CiYoutube } from "react-icons/ci";

export default function BTNN(){
    return (
        <div className="lvx" style={{width:"auto", display:"flex", justifyContent:"center", alignItems:"center", marginLeft:"3px", marginRight:"0px", fontSize:"18pt"}}>
            <CiYoutube className="ml-5"/>
            <CiPlay1 className="ml-5"/>
            <CiFolderOn className="ml-5" />
            <CiUser className="ml-5" />
        </div>
    )
}

export { BTNN }