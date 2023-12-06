let contacts = [];

export const getContacts = (q) => {
    if (q === null || q === "") {
        return contacts;
    }
    else{
        return contacts.filter( contacts => contacts.first.toLowerCase().includes(q.toLowerCase()) || contacts.last.toLowerCase().includes(q.toLowerCase()));
    }
};

export const getContact = (contactId) => {
    return contacts.find(contacts => contacts.id === contactId);
};

export const createContact = () => {
    let contact = {
        id: Date.now().toString(),
        first: "",
        last: "",
        avatar: "",
        email: "",
        notes: "",
        favorite: false,
    };
    contacts.push(contact);
    return contact;
};

export const updateContact = (contactId, updates) => {
    const contactToUpdate = contacts.find(contact => contact.id === contactId);
    if (contactToUpdate) {
        Object.assign(contactToUpdate, updates);
    } else {
        console.error(`Contact with id ${contactId} not found.`);
    }
    return contacts;
};

export const deleteContact = (id) => {
    const index = contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
        contacts.splice(index, 1);
        console.log(`آبجکت با id ${id} با موفقیت حذف شد.`);
    } else {
        console.log(`آبجکت با id ${id} یافت نشد.`);
    }
}