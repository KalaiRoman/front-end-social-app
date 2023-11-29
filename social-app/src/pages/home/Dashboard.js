import React, { useEffect, useState } from 'react'
import './Dashobard.scss'
function Dashboard() {
  const [show1, setShow1] = useState(null);
  const [showcheckbox, setShowcheckbox] = useState([]);
  const [showquestion, setShowQuestions] = useState(26);
  const [showquestion1, setShowQuestions1] = useState([]);


  console.log(showquestion, 'showquestion')



  useEffect(() => {
  }, [show1])

  const datas = [
    {
      id: 1,
      per: 25,
      name: "kalai",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,"
    },
    {
      id: 2,
      name: "kalai",
      per: 50,

      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,"

    },
    {
      id: 3,
      name: "kalai",
      per: 76,

      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,"

    },
    {
      id: 4,
      name: "kalai",
      per: 102,

      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,"

    }
  ]

  const handleChange = (index) => {
    setShow1(index)
  }
  const handleChange1 = () => {
    setShow1(null)
  }



  const handleChecboxchange = (id) => {
    if (showcheckbox.includes(id)) {
      setShowcheckbox(showcheckbox?.filter((item) => item !== id));
      return;
    }
    setShowcheckbox(showcheckbox.concat(id));
  }




  const handleChangeactivebox = (id) => {
    // if (showquestion1.includes(id)) {
    //   setShowQuestions1(showquestion1?.filter((item) => item !== id));
    //   return;
    // }
    // setShowQuestions1(showquestion1.concat(id));

    let c = +id + 1;
    setShowQuestions(c)
  }



  return (
    <div className='container'>


      {/* read more concepts */}

      <h1 className='mb-3 mt-2'>Read More</h1>

      <div className='row gap-4'>
        {datas?.map((item, index) => {
          return (
            <div className='card col-lg-3'>
              <div>
                {item?.name}
              </div>
              <div>
                {show1 === index ? <div>{item?.desc}<button onClick={() => handleChange1()}>Less More</button></div> : <div>{item?.desc?.slice(0, 50)}<button onClick={() => handleChange(index)}>Read More</button></div>}
              </div>
            </div>
          )
        })}
      </div>

      {/* check boxconcepts */}


      <h1 className='mb-3 mt-2'>Check Box</h1>
      <div>
        {showcheckbox?.map((item) => item)}
      </div>

      <div>
        {datas?.map((item) => {
          return (
            <div onClick={() => handleChecboxchange(item?.id)}>

              {showcheckbox?.includes(item?.id) ? <div className='d-flex gap-3'>
                <div>
                  <input type="checkbox" checked={true} />

                </div>
                <div>
                  {item?.name}

                </div>
              </div> : <div className='d-flex gap-2'>
                <div>
                  <input type="checkbox" checked={false} />

                </div>
                <div>
                  {item?.name}
                </div>

              </div>}
            </div>
          )
        })}
      </div>


      {/* question portal */}



      <div className='row gap-3 mt-5'>

        {datas?.map((item, index) => {
          return (
            <div className={item?.per < showquestion ? "cardactive  col-lg-3" : "cardinactive  col-lg-3"} onClick={() => handleChangeactivebox(item?.per)}>
              {item?.id}
            </div>
          )
        })}
      </div>

      {showquestion == 26 && <div>
        25
      </div>}

      {showquestion == 51 && <div>
        50
      </div>}

      {showquestion == 77 && <div>
        75
      </div>}

      {showquestion == 103 && <div>
        100
      </div>}

    </div>
  )
}

export default Dashboard