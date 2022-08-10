import { Table, Column, MenuItem } from 'react-rainbow-components';

const ListItem = ({loading, items, setSelectedItem, handlePrint }) =>{

    const deleteItem = (id) => {
        const list = JSON.parse(localStorage.list)
        if(list){
            list.map(i => {
                if(i['Booking Id'] === id){
                    list.pop(i)
                }
            })
        }
        localStorage.setItem("list", JSON.stringify(list));
        window.location.reload();
    }
    
    return (
        <div className="dataTable-container">
            <div className="dataTable">
                <Table
                    keyField="id"
                    data={items}
                    isLoading={loading}
                >
                    <Column header="Name" field="Name" />
                    <Column header="Email" field="Email Id" />
                    <Column header="Number" field="Phone Number" />
                    <Column header="Booking Id" field="Booking Id" />
                    <Column type="action">
                        <MenuItem label="Delete" onClick={(event, data) => deleteItem(data['Booking Id'])} />
                        <MenuItem label="Print" onClick={(event, data) => {setSelectedItem(data);handlePrint()}} />
                    </Column>
                </Table>
            </div>
        </div>
    )
}

export default ListItem;