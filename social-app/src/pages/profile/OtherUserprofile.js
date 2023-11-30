import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import moment from 'moment';
import { GetSinglePostActions, PostCommandActions, PostCommandDeleteActions, PostCreateActions, PostDeleteActions, PostLikeActions } from '../../Redux/actions/Postactions';
import jwt_decode from "jwt-decode";
import { toast } from 'react-toastify';

import { useLocation } from "react-router-dom";
import { OtherUserPosts } from '../../Redux/actions/Otheruseractions';
import { getUserdata } from '../../services/user_services/user_services';


function OtherUserprofile({ state }) {


    const [getSingleUser, setGetSingleUser] = useState({});


    const id = useLocation();

    const [loading, setLoading] = useState(false);

    const [commands, setCommands] = useState("");

    const token = localStorage.getItem("accesstoken");

    const check = jwt_decode(token);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    const statepost = useSelector((state) => state);

    console.log(statepost?.otheruserpost?.Otheruserpost, 'statepost')

    const clearstore = () => {
        localStorage.clear();
        window.location.assign("/");
    }

    useEffect(() => {
        dispatch(OtherUserPosts(id?.state));

        getUserdata(id?.state).then((res) => {
            setGetSingleUser(res?.data);
        }).catch((err) => {

        })
    }, [state, id?.state])

    const [postdata, setPostData] = useState({
        url: "",
        command: ""
    })

    const { url, command } = postdata;

    const handleChange = (e) => {
        setPostData({ ...postdata, [e.target.name]: e.target.value });
    }


    const CreatePostUser = async (e) => {
        e.preventDefault();

        if (url?.length === 0 || command?.length === 0) {
            toast.error("Input Field Is Required");
        }

        if (url && command) {
            const data = {
                postImageUrl: url,
                userCommand: command,
                userid: check?.id
            }
            await dispatch(PostCreateActions(data, handleClose));
        }
    }



    const DeletePost = async (postid, userid) => {
        try {

            const data = {
                postid: postid,
                userid: userid
            }

            await dispatch(PostDeleteActions(data));
        } catch (error) {
            console.log(error)
        }
    }

    const Postliked = async (ids) => {

        await dispatch(PostLikeActions(ids))
    }


    const PostCommands = async (id) => {
        try {

            await dispatch(PostCommandActions(id, commands, setLoading));
            setCommands("");
        } catch (error) {

        }
    }


    const DeletCommand = async (id, cid) => {
        try {

            await dispatch(PostCommandDeleteActions(id, cid, setLoading));
        } catch (error) {

        }
    }

    return (
        <>
            <div>
                <div id="profile-banner-images">
                    <img src={getSingleUser?.bannerimage} alt="Banner image" />
                </div>
                <div id="profile-upper">

                    <div id="profile-d">
                        <div id="profile-pic">
                            <img src={getSingleUser?.profileimage} />
                        </div>
                        <div id="u-name">{getSingleUser?.username}</div>
                        <div class="tb" id="m-btns">
                        </div>
                    </div>
                    <div id="black-grd"></div>
                </div>
                <div id="main-content">
                    <div class="tb">
                        <div class="td" id="l-col">
                            <div class="l-cnt">
                                <div class="cnt-label">
                                    <i class="l-i" id="l-i-i"></i>
                                    <span> </span>
                                    <div class="lb-action"><i class="material-icons">edit</i></div>
                                </div>
                                <div id="i-box">
                                    <div id="intro-line">Front-end Engineer</div>
                                    <div id="u-occ">I love making applications with Angular.</div>
                                    <div id="u-loc"><i class="material-icons">location_on</i><a href="#">Bengaluru</a>, <a href="#">India</a></div>
                                </div>
                            </div>
                            <div class="l-cnt l-mrg">
                                <div class="cnt-label">
                                    <i class="l-i" id="l-i-p"></i>
                                    <span>Photos</span>
                                </div>
                                <div id="photos mb-4">
                                    <div class="row d-flex ">
                                        {statepost?.otheruserpost?.Otheruserpost?.map((item, index) => {
                                            return (
                                                <>
                                                    <div className='cards col-lg-4'>
                                                        <div>
                                                            <img src={item?.postImageUrl} className='post-imgs' style={{

                                                                width: "100px",
                                                                height: "100px",
                                                                objectFit: "contain"
                                                            }} />
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })}

                                    </div>
                                </div>
                            </div>

                            <div>
                                <button onClick={clearstore} style={{ border: "1px solid red", padding: "10px 40px", marginTop: "10px", borderRadius: "20px", cursor: "pointer" }}>
                                    Logout
                                </button>
                            </div>
                        </div>
                        <div class="td" id="m-col">
                            <div class="m-mrg" id="p-tabs">
                                <div class="tb">
                                    <div class="td">
                                        <div class="tb" id="p-tabs-m">
                                            <div class="td active"><i class="material-icons">av_timer</i><span>TIMELINE</span></div>
                                            <div class="td"><i class="material-icons">people</i><span>FRIENDS</span></div>
                                            <div class="td"><i class="material-icons">photo</i><span>PHOTOS</span></div>
                                            <div class="td"><i class="material-icons">explore</i><span>ABOUT</span></div>
                                            <div class="td"><i class="material-icons">archive</i><span>ARCHIVE</span></div>
                                        </div>
                                    </div>
                                    <div class="td" id="p-tab-m"><i class="material-icons">keyboard_arrow_down</i></div>
                                </div>
                            </div>
                            <div class="m-mrg" id="composer">
                                <div id="c-tabs-cvr">
                                    <div class="tb" id="c-tabs">
                                        <div class="td active"><i class="material-icons">subject</i><span>Make Post</span></div>
                                        <div class="td"><i class="material-icons">camera_enhance</i><span>Photo/Video</span></div>
                                        <div class="td"><i class="material-icons">videocam</i><span>Live Video</span></div>
                                        <div class="td"><i class="material-icons">event</i><span>Life Event</span></div>
                                    </div>
                                </div>
                                <div id="c-c-main">
                                    <div class="tb" onClick={handleShow}>
                                        <div class="td" id="p-c-i"><img src="https://imagizer.imageshack.com/img921/3072/rqkhIb.jpg" alt="Profile pic" /></div>
                                        <div class="td" id="c-inp">
                                            <input type="text" placeholder="What's on your mind?" />
                                        </div>
                                    </div>
                                    <div id="insert_emoji"><i class="material-icons">insert_emoticon</i></div>
                                </div>
                            </div>
                            <div>
                                {statepost?.otheruserpost?.Otheruserpost?.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <div class="post mt-4 mb-5">
                                                <div class="tb">
                                                    <div class="td p-p-pic cursor-pointer"><img src={item?.user?.profileimage} alt="Rajeev's profile pic" /></div>
                                                    <div class="td p-r-hdr">
                                                        <div class="p-u-info" onClick={() => {
                                                            window.location.assign("/profile")
                                                        }}>
                                                            <>{item?.user?.username}</>
                                                        </div>
                                                        <div class="p-dt">
                                                            <i class="material-icons"></i>
                                                            <span>{moment(item?.createdAt).format('llll')}</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        {check?.id === item?.user?._id &&
                                                            <Button variant='danger' onClick={() => DeletePost(item?._id, item?.user?._id)}>
                                                                Delete
                                                            </Button>
                                                        }
                                                    </div>
                                                </div>
                                                <div class="p-cnt-v">
                                                    <img src={item?.postImageUrl} className='post-img' />
                                                </div>
                                                <div>
                                                    <div class="p-acts">
                                                        <div class="p-act like"><div class="material-icons">{item?.userCommand}</div><span></span></div>
                                                    </div>

                                                    <div className='d-flex gap-2 align-items-center ' onClick={() => Postliked(item?._id)}>
                                                        {true ? <>
                                                            <i class="fa-solid fa-heart completed"></i>

                                                        </> : <>
                                                            <i class="fa-regular fa-heart uncompleted"></i>

                                                        </>}

                                                        <div>
                                                            {item?.likes?.length}
                                                        </div>

                                                    </div>

                                                    <div>
                                                        {item?.postcommands?.map((items, index) => {

                                                            return (
                                                                <div>
                                                                    <div>
                                                                        {items?.desc}

                                                                    </div>
                                                                    {check?.id === items?.user && <Button variant='danger' onClick={() => DeletCommand(item?._id, items?._id)}>
                                                                        delete
                                                                    </Button>}
                                                                </div>
                                                            )
                                                        })}
                                                    </div>


                                                    <div className='d-flex align-align-items-center justify-content-center'>
                                                        <div className='col-lg-8'>
                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Control type="url" placeholder="Enter Command" name="commands" value={commands} onChange={(e) => setCommands(e?.target?.value)} />
                                                                <Form.Text className="text-muted">
                                                                </Form.Text>
                                                            </Form.Group>
                                                        </div>
                                                        <div className=' col-lg-4 '>
                                                            <Button className=' w-75 h-auto ms-2' onClick={() => PostCommands(item?._id)}>Send</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                })}
                            </div>
                            <div id="loading"><i class="material-icons">autorenew</i></div>
                        </div>
                        <div class="td" id="r-col">
                            <div id="chat-bar">
                                <div id="chat-lb"><i class="material-icons">contacts</i><span>Contacts</span></div>
                                <div id="cts">
                                    <div class="on-ct active">
                                        <a href="#"><img src="https://imagizer.imageshack.com/img924/4231/JnFicn.jpg" /></a>
                                    </div>
                                    <div class="on-ct active">
                                        <a href="#"><img src="https://imagizer.imageshack.com/img923/332/1abR4H.png" /></a>
                                    </div>
                                    <div class="on-ct">
                                        <a href="#"><img src="https://imagizer.imageshack.com/img924/4231/JnFicn.jpg" /></a>
                                    </div>
                                    <div class="on-ct active">
                                        <a href="#"><img src="https://imagizer.imageshack.com/img923/332/1abR4H.png" /></a>
                                    </div>
                                    <div class="on-ct active">
                                        <a href="#"><img src="https://imagizer.imageshack.com/img924/4231/JnFicn.jpg" /></a>
                                    </div>
                                    <div class="on-ct">
                                        <a href="#"><img src="https://imagizer.imageshack.com/img924/4231/JnFicn.jpg" /></a>
                                    </div>
                                    <div class="on-ct">
                                        <a href="#"><img src="https://imagizer.imageshack.com/img923/332/1abR4H.png" /></a>
                                    </div>
                                    <div class="on-ct" id="ct-sett"><i class="material-icons">settings</i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="device-bar-2"><i class="fab fa-apple"></i></div>
            </div>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className='d-flex gap-3 align-items-center'>
                            <span><img src={getSingleUser?.profileimage} alt="Profile pic" style={{
                                width: "70px",
                                height: "70px",
                                borderRadius: "50%"
                            }} /></span>New Post You?
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Image Url</Form.Label>
                        <Form.Control type="url" placeholder="Enter Image Url" name="url" value={url} onChange={handleChange} />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control type="text" placeholder="Enter Comment" name="command" value={command} onChange={handleChange} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={CreatePostUser}>Create Post</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default OtherUserprofile