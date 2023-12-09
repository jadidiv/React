import axios from "axios";

const SERVER_URL = "http://localhost:9000";

const contact = {
    first: "",
    last: "",
    avatar: "",
    email: "",
    notes: "",
    favorite: false,
};

// @desc Get All Contacts
// @route GET http://localhost:9000/contacts
export async function getContacts(q) {
    const url = `${SERVER_URL}/contacts`;

    try {
        if (q === null || q === "") {

            const response = await axios.get(url);
            return response;
        }
        else {
            const response = await axios.get(url).filter(contacts => contacts.first.toLowerCase().includes(q.toLowerCase()) || contacts.last.toLowerCase().includes(q.toLowerCase()));
            return response;
        }
    } catch (error) {
        console.error(error);
    }
};

// @desc Get All Contacts
// @route GET http://localhost:9000/contacts/:id
export const getContact = (id) => {
    const url = `${SERVER_URL}/contacts/${id}`;
    return axios.get(url);
};

// @desc Create New Contact
// @route POST http://localhost:9000/contacts
export const createContact = () => {
    const url = `${SERVER_URL}/contacts`;
    return axios.post(url, contact);
};

// @desc Update Contact
// @route PUT http://localhost:9000/contacts/:id
export const updateContact = (id, updates) => {
    const url = `${SERVER_URL}/contacts/${id}`;
    return axios.put(url, updates);
};

// @desc Update Contact
// @route PUT http://localhost:9000/contacts/:id
export const patchContact = (id, updates) => {
    const url = `${SERVER_URL}/contacts/${id}`;
    return axios.patch(url, updates);
};

// @desc Delete Contact
// @route PUT http://localhost:9000/contacts/:id
export const deleteContact = (id) => {
    const url = `${SERVER_URL}/contacts/${id}`;
    return axios.delete(url);
};