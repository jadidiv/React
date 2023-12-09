import '../Style.css';
import { Outlet, NavLink, useLoaderData, Form, redirect, useNavigate, useSubmit } from "react-router-dom";
import { getContacts, createContact } from '../services/contactService';

export async function action() {
    const {data : contact} = await createContact();
    return redirect(`/contacts/${contact.id}/edit`);
}

export async function loader({ request }) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const {data : contacts} = await getContacts(q);
    return { contacts, q };
}

export default function Root() {
    const { contacts, q } = useLoaderData();
    const navigation = useNavigate();
    const submit = useSubmit();

    const searching =
        navigation.location &&
        new URLSearchParams(navigation.location.search).has(
            "q"
        );

    return (
        <div className="main">
            <div id="sidebar">
                <h1>React Router Demo</h1>
                <div className='discription'>
                    <h4>Install</h4>
                    <p>- npm i react-router-dom</p>
                </div>
                <div className='discription'>
                    <h4>Tutorial</h4>
                    <a href='https://reactrouter.com/en/main/start/tutorial' target='_blank' rel="noreferrer">- https://reactrouter.com/en/main/start/tutorial</a>
                </div>
                <div className="search-form">
                    <Form id="search-form" role="search">
                        <input
                            id="q"
                            autoComplete="off"
                            className={searching ? "loading" : ""}
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                            defaultValue={q}
                            onChange={(event) => {
                                const isFirstSearch = q == null;
                                submit(event.currentTarget.form, {
                                    replace: !isFirstSearch,
                                });
                            }}
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={!searching}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ><i class="material-icons">search</i></div>
                    </Form>
                    <Form method="post">
                        <button type="submit" className="btn">New</button>
                    </Form>
                </div>
                <nav>
                    {contacts.length ? (
                        <ul>
                            {contacts.map((contact) => (
                                <li key={contact.id}>
                                    <NavLink to={`contacts/${contact.id}`} className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}>
                                        {contact.first || contact.last ? (
                                            <>
                                                {contact.first} {contact.last}
                                            </>
                                        ) : (
                                            <i>No Name</i>
                                        )}{" "}
                                        {contact.favorite && <span className='Star'>★</span>}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>
                            <i>No contacts</i>
                        </p>
                    )}
                </nav>
            </div>
            <div id="detail" className={navigation.state === "loading" ? "loading" : ""}>
                <Outlet />
            </div>
        </div>
    )
}