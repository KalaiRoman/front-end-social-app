import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
function Bikecomments() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
    };

    const [comments, setComments] = useState({
        content: "",
    });


    const { content } = comments;
    const handleChange = (e) => {
        setComments({ ...comments, [e?.target?.value]: e?.target?.name });
    }

    const handleSubmits = (e) => {
        e?.preventDefault();

        const data={
            content:content,
            // userid:JSON.parse(localStorage.getItem("userid");
        }
    }
    return (
        <div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">content</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    name="content"
                    onChange={handleChange}
                    value={content}
                />

            </div>

            <button onClick={handleSubmits}>
                Create Comments
            </button>
        </div>
    )
}

export default Bikecomments