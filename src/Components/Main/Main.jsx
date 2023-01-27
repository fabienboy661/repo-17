import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, {useEffect,  useState} from 'react'
import './main.css'
import {ImLocation2} from 'react-icons/im'
import {HiClipboardCheck} from 'react-icons/hi'
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpeg'
import img4 from '../../Assets/img4.jpeg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgSrc:img1,
    destTtile:'Morondava',
    location:'Madagascar',
    grade:'Nature',
    fees:'$700',
    description:'Village touristique entoure des baobab'
  },

  {
    id:2,
    imgSrc:img2,
    destTtile:'Madagascar',
    location:'Madagascar',
    grade:'Park',
    fees:'$700',
    description:'sfklsndfsn sehf sen fe soef e'
  },

  {
    id:3,
    imgSrc:img3,
    destTtile:'Tamatave',
    location:'Madagascar',
    grade:'Ville',
    fees:'$700',
    description:'ville  eunfsfsenf sfu efenfjeh feih '
  },

  {
    id:4,
    imgSrc:img4,
    destTtile:'Ambomanajaka',
    location:'Ambalavao 301',
    grade:'CULTURE Historique',
    fees:'$700',
    description:'fns fsjfse ems efem e e fjeej'
  },

  {
    id:5,
    imgSrc:img5,
    destTtile:'Nosy be',
    location:'Madagascar',
    grade:'PLAGE',
    fees:'$700',
    description:'Plage magnifique avec des cocos naturel'
  },

  {
    id:6,
    imgSrc:img6,
    destTtile:'Parc Ranomafana',
    location:'Fianarantsoa 301',
    grade:'Tourisme',
    fees:'$700',
    description:'Une nature si pure avec des annimaux'
  },

  {
    id:7,
    imgSrc:img7,
    destTtile:'Majunga',
    location:'BOINA',
    grade:'CULTURE RELAX',
    fees:'$700',
    description:'af anffd fakdjf adjf aj'
  },

  {
    id:8,
    imgSrc:img9,
    destTtile:'Manakara',
    location:'Madagascar',
    grade:'CULTURE RELAX',
    fees:'$700',
    description:'Plage magnifique'
  },

  {
    id:9,
    imgSrc:img8,
    destTtile:'Haute Matsiatra',
    location:'Fianarantsoa',
    grade:'CULTURE VUE des hautes villes',
    fees:'$700',
    description:'Fianarantsoa est une grande ville entoure des vallles et des plateux'
  },
]

const Main = () => {

  //react hook, scrol animation
  useEffect(()=>{
    Aos.init({duration : 2000})
 }, [])

 const [show, setShow] = useState(false);

  return (
    <section className='main container section'>

        <div className="secTitle">
          <h3 
          data-aos="fade-right" id="title">
           
              Notre meilleurs offres
          </h3>
        </div>

        <div className="secContent grid">

          {
            Data.map(({id, imgSrc,
              destTtile, location, grade, fees,  
              description})=>{
                  return(
                    <div key={id}
                     data-aos="fade-up"
                     className="singleDestination">


                        <div className="imageDiv">
                          <img src={imgSrc} alt=
                          {destTtile} />
                        </div>

                        <div className="cardInfo">
                          <h4 className="destTitle">
                            {destTtile}</h4>
                            <span className="continent flex">
                                <ImLocation2 className='icon'/>
                                <span className="name">{location}</span>
                            </span>

                            <div className="fees flex">
                              <div className="grade">
                                <span>{grade}<small>+1</small></span>
                              </div>
                              <div className="price">
                                <h5>{fees}</h5>
                              </div>
                            </div>

                            <div className="desc">
                              <p>{description}</p>
                            </div>

                            <Modal
                            show={show}
                            onHide={() => setShow(false)}
                            dialogClassName="modal-90w"
                            aria-labelledby="example-custom-modal-styling-title"
                            >
                            <Modal.Header closeButton>
                              <Modal.Title id="example-custom-modal-styling-title">
                                Custom Modal Styling
                              </Modal.Title>
                            </Modal.Header>
                              <Modal.Body>
                                <p>
                                  Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                                  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                                  ipsam atque a dolores quisquam quisquam adipisci possimus
                                  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                                  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                                  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                                  deleniti rem!
                                </p>
                              </Modal.Body>
      </Modal>
      <Button variant="primary" className='btn flex' onClick={() => setShow(true)}>
        DETAIL <HiClipboardCheck className="icon"/>
      </Button>
                        </div>
                    </div>
                  )
            })
          }
        </div>

    </section>
  )
}

export default Main