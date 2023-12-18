export default function Sidebar(prop) {

    const content = prop.content;
    return (
        <>
            {content.length ? (

                <>
                    {content.map((post) => (
                        <div className="sidebar-post">
                            <img src={post.url} alt={post.title}></img>
                            <div className="post-details">
                                <span className="post-category">{post.category}</span>
                                <h5>{post.title} ...</h5>
                            </div>
                        </div>
                    ))}
                </>

            ) : (
                <p>There are no items to display</p >
            )
            }
        </>
    )
}