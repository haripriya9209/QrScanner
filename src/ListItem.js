
const ListItem = ({items}) =>{

    const listing = items.map((element,index)=>{
            return(
                <tr style={{padding:"12px", border:"1px solid #dddddd"}}>{element}</tr>
            )
        })
    
    return (
        <div>
            <table style={{padding: "30px", display: "flex", flexDirection: "column", margin: "30px"}}>
            {listing}
            </table>
        </div>
    )
}

export default ListItem;