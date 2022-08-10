import { Table, Column, MenuItem } from 'react-rainbow-components';
const ListItem = ({items}) =>{

    const deleteItem = (id) => {
        console.log(id, 'fff')
    }
    
    return (
        <div className="dataTable-container">
            <div className="dataTable">
                <Table
                    keyField="id"
                    data={items}
                >
                    <Column header="Name" field="Name" />
                    <Column header="Email" field="Email Id" />
                    <Column header="Number" field="Phone Number" />
                    <Column header="Booking Id" field="Booking Id" />
                    <Column type="action">
                        <MenuItem label="Delete" onClick={(event, data) => deleteItem(data['Booking Id'])} />
                    </Column>
                </Table>
            </div>
        </div>
    )
}

export default ListItem;