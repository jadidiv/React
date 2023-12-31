import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import { updateContact } from '../services/contactService';

export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);
}

export default function EditContact() {
    const { contact } = useLoaderData();
    const navigate = useNavigate();
    

    return (
        <Form method="post" id="contact-form">
            <p>
                <span>Name</span>
                <input
                    placeholder="First"
                    aria-label="First name"
                    type="text"
                    name="first"
                    defaultValue={contact.first}
                />
                <input
                    placeholder="Last"
                    aria-label="Last name"
                    type="text"
                    name="last"
                    defaultValue={contact.last}
                />
            </p>
            <label>
                <span>Email</span>
                <input
                    type="text"
                    name="email"
                    placeholder="jack@gmail.com"
                    defaultValue={contact.email}
                />
            </label>
            <label>
                <span>Avatar URL</span>
                <input
                    placeholder="https://example.com/avatar.jpg"
                    aria-label="Avatar URL"
                    type="text"
                    name="avatar"
                    defaultValue={contact.avatar}
                />
            </label>
            <label>
                <span>Notes</span>
                <textarea
                    name="notes"
                    defaultValue={contact.notes}
                    rows={6}
                />
            </label>
            <label>
                <span>Favorite</span>
                <input
                    type="checkbox"
                    name="favorite"
                    id="favorite"
                    defaultChecked={contact.favorite ? true : false}
                    value={contact.favorite ? "false" : "true"}
                />
            </label>
            <p>
                <span></span>
                <button type="submit" className="btn">Save</button>
                <button type="button" className="btn" onClick={() => { navigate(-1); }}>Cancel</button>
            </p>
        </Form>
    );
}