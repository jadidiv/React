import { useState } from "react";

export default function Posts(prop) {
    const [index, setIndex] = useState(0);
    const content = prop.content;

    function positiveClick() {
        if (index < content.length - 1) {
            setIndex(index + 1)
        }
    }

    function negativeClick() {
        if (index > 0) {
            setIndex(index - 1)
        }
    }

    let post = content[index]

    return (
        <div className="post-gallery">
            <div className="posts">
                <img src={post.url} alt="News"></img>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-body">{post.body}</p>
                <h5 className="post-date">🕗 {post.date}</h5>
            </div>
            <div className="post-control-buttons">
                <button onClick={negativeClick} className={index === 0 ? "disabled" : ""} >◀</button>
                <button onClick={positiveClick} className={index === content.length - 1 ? "disabled" : ""} >▶</button>
                <p id="pageOfContent"> <span id="currentPage">{index + 1}</span> of {content.length}</p>
            </div>
        </div>
    );
}