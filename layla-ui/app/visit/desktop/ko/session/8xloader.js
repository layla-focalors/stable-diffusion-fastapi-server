
export default function XLS(props){
    // props 객체로 이름을 전달해주어 변경
    return (
        <div className="xls-slb">
            <div className="xlst" style={{marginTop:"20px"}}>
                {props.core}
            </div>
        </div>
    )
}

export { XLS }