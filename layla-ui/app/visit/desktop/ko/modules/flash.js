"use client"
import Link from "next/link"

export default function INV(){
    function getID(){
        const name = document.getElementById('getid').value
        console.log(name)
    }
    return (
        <div className="inv-head">
            <div className="inv-scs">
                <div className="inv-head1">
                    <input id="getid" placeholder="초대 번호를 입력하세요!" className="inv-inputa"></input>
                </div>        
                    <div onClick={getID} className="inv-bot2" style={{textAlign:"center", display:"flex", alignItems:"center", justifyContent:"center"}}>
                        <div className="sec" style={{fontFamily:"", fontStyle:"normal"}}>Join Session</div>
                    </div>
            </div>
        </div>
    )
}

export { INV }