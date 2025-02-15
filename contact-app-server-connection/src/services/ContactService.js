import axios from "axios";

class ContactService {
 
    static getContactList(){
      let serverURL = `https://gist.githubusercontent.com/thenaveensaggam/d8f0a59bd6c54cf62635ad27ee04748d/raw/2757b410fe931edd91560bb0e389989284802998/Contacts.03.15.2021json`;
        return axios.get(serverURL);
    }
}

export default ContactService;


