import Link from "next/link"
export default function INC(){
    return (
        <div className="inx">
            <div className="conf_menu">
                <div className="sides">프로젝트 소개</div>
                <div className="ml-4 sides">이용약관</div>
                <div className="ml-4 sides" style={{fontWeight:"bold"}}>개인정보처리방침</div>
                <div className="ml-4 sides">공지사항</div>
            </div>
            <div className="sx" style={{
                width:"100%", height:"40px", backgroundColor:"transparent"
            }}>
            </div>
            <div className="conf_info">
                <pre className="config" style={{color:'#999', marginTop:"-10px"}}>
                    KR : <Link href={'https://github.com/layla-focalors'}>서준혁</Link> | <Link href={'https://bbdiary03.tistory.com/'}>이재성</Link><br/>
                    VT : Kim Thoa | Trần Thị Tuyết Nhung<br/>
                    
                    <Link href={'/blog/raumdoran/techbuild'}><span style={{
                        fontSize:"10px"
                    }}>TE : TechPages</span></Link>
                </pre>
            </div>
            <div className="copyright">
                <div className="text-xax">
                    ⓒRaumdoran 2023
                </div>
            </div>
        </div>
    )
}
export { INC }