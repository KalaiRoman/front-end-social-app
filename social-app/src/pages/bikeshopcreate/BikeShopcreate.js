import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BikeGetData, BikeShopCreateAction, getsingleBikeGetData } from '../../Redux/actions/Bikeactions';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { deletesinglebikes, getsinglebikes } from '../../services/bike_services/bike_services';
import { toast } from 'react-toastify';
function BikeShopcreate() {
  const [loading, setLoading] = useState(false);
  const [checks, setChecks] = useState("");
  const [checks1, setChecks1] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    setBikes({})
  };
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useNavigate();
  const [bikes, setBikes] = useState({
    serviceName: "",
    price: "",
    offer: "",
    couponcode: "",
    vehicle: "",
    vehicleshopimages: "",
    shopbannerimage: "",
    description: ""
  });

  const [images, setImages] = useState([]);
  const {
    serviceName,
    price,
    offer,
    couponcode,
    vehicle,
    vehicleshopimages,
    shopbannerimage,
    description,
  } = bikes;
  const handleChange = (e) => {
    setBikes({ ...bikes, [e.target.name]: e.target.value });
  }
  const handleImageFiles = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e?.target?.files[0])
    reader.onload = () => {
      setImages([...images, reader.result])
    }
  }
  const handleSubmitData = (e) => {
    e.preventDefault();
    const data = {
      serviceName: serviceName,
      price: price,
      offer: offer,
      couponcode: couponcode,
      vehicle: vehicle,
      vehicleshopimages: images,
      shopbannerimage: "shopbannerimage",
      description: description,
      userid: JSON.parse(localStorage.getItem("userid"))
    }
    dispatch(BikeShopCreateAction(data, history, handleClose, setLoading))
  }

  useEffect(() => {
    dispatch(BikeGetData());
    setLoading(true);


    setBikes(state?.bikeedit?.singlebikeshop)


  }, [loading])


  const editDatas = (id) => {
    // if (id) {
    //   dispatch(getsingleBikeGetData(id));

    // }
    getsinglebikes(id).then((res) => {
      setBikes({
        serviceName: res?.serviceName,
        price: res?.price,
        offer: res?.offer,
        couponcode: res?.couponcode,
        vehicle: res?.vehicle,
        // // vehicleshopimages: res?.images,
        // shopbannerimage: "shopbannerimage",
        description: res?.description,
      })
    }).catch((err) => {
      console.log(err);
    })

  }

  const editData = (data) => {
    return (
      <React.Fragment>
        <i
          style={{ fontSize: "20px", cursor: "pointer" }}
          className="fas fa-pen mx-auto"
          onClick={() => {
            setChecks1(data?._id);
            handleShow();
            editDatas(data?._id)
          }}
        />
      </React.Fragment>
    );

  }


  const deleteDatabaseuse = (id) => {
    setLoading(true);
    deletesinglebikes(id).then((res) => {
      toast.success("Delete Bike Shop")
      setLoading(false);
    }).catch((err) => {
      console.log(err);
    })
  }

  const deleteData = (data) => {

    return (
      <React.Fragment>

        <i class="fa fa-trash" aria-hidden="true" style={{ fontSize: "20px", cursor: "pointer" }}
          onClick={() => {
            setChecks(data?._id)
            deleteDatabaseuse(data?._id)
          }
          }
        ></i>

      </React.Fragment>
    );
  }

  const statussections = (data) => {
    return (
      <React.Fragment>
        {data.approvalStatus == 1 ? "Pending Status" : null}
        {data.approvalStatus == 2 ? "Approvalstatus" : null}
      </React.Fragment>
    )
  }


  const viewbikes = (data) => {





    return (
      <React.Fragment>
        <i class="fa-sharp fa-solid fa-eye"
          onClick={() => history(`/bikecomment/${data?._id}`)
          }
        ></i>

      </React.Fragment>
    );
  }
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        + Add
      </Button>
      <DataTable value={state?.bike?.bikeshop} tableStyle={{ minWidth: '50rem' }}>
        <Column field="serviceName" header="serviceName"></Column>
        <Column field="price" header="price"></Column>
        <Column field="offer" header="offer"></Column>
        <Column field="description" header="description"></Column>
        <Column field="approvalStatus" header="approvalStatus" body={statussections}></Column>
        <Column field="_id" header="Edit Stylist" body={editData}></Column>
        <Column field="_id" header="View Stylist" body={deleteData}></Column>
        <Column field="_id" header="View shops" body={viewbikes}></Column>

      </DataTable>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">serviceName</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              name="serviceName"
              onChange={handleChange}
              value={serviceName}
            />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">price</label>
            <input type="text" className="form-control" id="exampleInputPassword1"
              name="price"
              onChange={handleChange}
              value={price}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">offer</label>
            <input type="text" className="form-control" id="exampleInputPassword1"
              name="offer"
              onChange={handleChange}
              value={offer}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">couponcode</label>
            <input type="text" className="form-control" id="exampleInputPassword1"
              name="couponcode"
              onChange={handleChange}
              value={couponcode}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">vehicle</label>
            <input type="text" className="form-control" id="exampleInputPassword1"
              name="vehicle"
              onChange={handleChange}
              value={vehicle}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">vehicleshopimages</label>
            <input type="file" className="form-control" id="exampleInputPassword1"
              name="vehicleshopimages"
              onChange={handleImageFiles}
              value={vehicleshopimages}
              accept="image/png, image/jpeg"
              multiple="multiple"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">shopbannerimage</label>
            <input type="file" className="form-control" id="exampleInputPassword1"
              name="shopbannerimage"
              onChange={handleChange}
              value={shopbannerimage}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">description</label>
            <input type="text" className="form-control" id="exampleInputPassword1"
              name="description"
              onChange={handleChange}
              value={description}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleSubmitData}>
            Create
          </button>
        </Modal.Footer>
      </Modal>



    </div>
  )
}

export default BikeShopcreate