import React, { useEffect ,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import moment from 'moment';
import { GetSinglePostActions, PostCreateActions } from '../../Redux/actions/Postactions';
import jwt_decode from "jwt-decode";
import { toast } from 'react-toastify';

function Profile({ state }) {

    const token = localStorage.getItem("accesstoken");

    const check = jwt_decode(token);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    const statepost = useSelector((state) => state?.postdata?.singleUserPost?.responsePost);

    console.log(statepost, 'statepost')

    const clearstore = () => {
        localStorage.clear();
        window.location.assign("/");
    }

    useEffect(() => {
        dispatch(GetSinglePostActions());
    }, [state])

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

    return (
        <>
            <div>
                <div id="profile-banner-images">
                    <img src={state?.bannerimage} alt="Banner image" />
                </div>
                <div id="profile-upper">

                    <div id="profile-d">
                        <div id="profile-pic">
                            <img src={state?.profileimage} />
                        </div>
                        <div id="u-name">{state?.username}</div>
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
                                    <span>Intro</span>
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
                                    <div class="lb-action" id="b-i"><i class="material-icons">keyboard_arrow_down</i></div>
                                </div>
                                <div id="photos">
                                    <div class="tb">
                                        <div class="tr">
                                            <div class="td"></div>
                                            <div class="td"></div>
                                            <div class="td"></div>
                                        </div>
                                        <div class="tr">
                                            <div class="td"></div>
                                            <div class="td"></div>
                                            <div class="td"></div>
                                        </div>
                                        <div class="tr">
                                            <div class="td"></div>
                                            <div class="td"></div>
                                            <div class="td"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="l-cnt l-mrg">
                                <div class="cnt-label">
                                    <i class="l-i" id="l-i-k"></i>
                                    <span>Did You Know<i id="k-nm">1</i></span>
                                </div>
                                <div>
                                    <div class="q-ad-c">
                                        <a href="#" class="q-ad">
                                            <img src="https://imagizer.imageshack.com/img923/1849/4TnLy1.png" />
                                            <span>My favorite superhero is...</span>
                                        </a>
                                    </div>
                                    <div class="q-ad-c">
                                        <a href="#" class="q-ad" id="add_q">
                                            <i class="material-icons">add</i>
                                            <span>Add Answer</span>
                                        </a>
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
                                {statepost?.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <div class="post mt-4 mb-5">
                                                <div class="tb">
                                                    <a href="#" class="td p-p-pic"><img src={item?.user?.profileimage} alt="Rajeev's profile pic" /></a>
                                                    <div class="td p-r-hdr">
                                                        <div class="p-u-info">
                                                            <a href="#">{item?.user?.username}</a>
                                                        </div>
                                                        <div class="p-dt">
                                                            <i class="material-icons"></i>
                                                            <span>{moment(item?.createdAt).format('llll')}</span>
                                                        </div>
                                                    </div>

                                                </div>
                                                <a href="#" class="p-cnt-v">
                                                    <img src={item?.postImageUrl} />
                                                </a>
                                                <div>
                                                    <div class="p-acts">
                                                        <div class="p-act like"><div class="material-icons">{item?.userCommand}</div><span></span></div>
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
                            <span><img src={state?.profileimage} alt="Profile pic" style={{
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

export default Profile