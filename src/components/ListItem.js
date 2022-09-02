import { Table, Column, MenuItem } from 'react-rainbow-components';
import { DataStore } from "@aws-amplify/datastore";
import {UserData} from "./../models";

const ListItem = ({loading, items, setSelectedItem, handlePrint }) =>{
    
    const deleteItem = async (id) => {
        // const list = JSON.parse(localStorage.list)
        // if(list){
        //     list.map(i => {
        //         if(i['Booking Id'] === id){
        //             list.pop(i)
        //         }
        //     })
        // }
        // localStorage.setItem("list", JSON.stringify(list));
        // window.location.reload();
        const todelete = await DataStore.query(UserData, id);
        DataStore.delete(todelete);
        // window.location.reload();
    }
    // console.log(items);
    return (
        <div className="dataTable-container">
            <div className="dataTable">
                
                <Table
                    keyField="id"
                    data={items}
                    isLoading={loading}
                >
                    <Column header="Name" field="name" />
                    <Column header="Email" field="email" />
                    <Column header="Number" field="phoneNumber" />
                    <Column header="Booking Id" field="bookingId" />
                    <Column type="action">
                        <MenuItem label="Delete" onClick={(event, data) => deleteItem(data['id'])} />
                        <MenuItem label="Print" onClick={(event, data) => {setSelectedItem(data);handlePrint()}} />
                    </Column>
                </Table>
            </div>
        </div>
    )
}

export default ListItem;