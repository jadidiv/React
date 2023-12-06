import { Form, useLoaderData, useFetcher } from "react-router-dom";
import { getContact, updateContact } from "../contacts";

export async function loader({ params }) {
    const contact = await getContact(params.contactId);
    return { contact };
  }

  export async function action({ request, params }) {
    let formData = await request.formData();
    return updateContact(params.contactId, {
      favorite: formData.get("favorite") === "true",
    });
  }

export default function Contact() {
    const { contact } = useLoaderData();

    return (
        <div id="contact">
            <div className="contactImg">
                {contact.avatar ?(
                    <img
                    key={contact.avatar}
                    src={contact.avatar || null}
                />
                ):(
                    <img
                    key={contact.id}
                    src={"https://img.freepik.com/free-vector/user-follower-icons-social-media-notification-icon-speech-bubbles-vector-illustration_56104-847.jpg"}
                />
                )}                
            </div>

            <div>
                <h1>
                    {contact.first || contact.last ? (
                        <>
                            {contact.first} {contact.last}
                        </>
                    ) : (
                        <i>No Name</i>
                    )}{" "}
                    <Favorite contact={contact} />
                </h1>

                {contact.email && (
                    <p>
                        <a
                            target="_blank"
                            href={contact.email}
                        >
                            {contact.email}
                        </a>
                    </p>
                )}

                {contact.notes && <p className="notes">{contact.notes}</p>}

                <div className="actions">
                    <Form action="edit">
                        <button type="submit" className="btn">Edit</button>
                    </Form>
                    <Form
                        method="post"
                        action="destroy"
                        onSubmit={(event) => {
                            if (
                                !window.confirm(
                                    "Please confirm you want to delete this record."
                                )
                            ) {
                                event.preventDefault();
                            }
                        }}
                    >
                        <button type="submit" className="btn">Delete</button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

function Favorite({ contact }) {
    const fetcher = useFetcher();
    // yes, this is a `let` for later
    let favorite = contact.favorite;
    return (
        <fetcher.Form method="post" id="favoriteForm">
            <button
                name="favorite"
                id="favorite"
                value={favorite ? "false" : "true"}
                aria-label={
                    favorite
                        ? "Remove from favorites"
                        : "Add to favorites"
                }
            >
                {favorite ? "★" : "☆"}
            </button>
        </fetcher.Form>
    );
}