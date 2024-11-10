import React, { useEffect, useState } from "react";
import "./FirstAid.css"; // Assuming you have CSS files in the same directory
import { Modal, Carousel } from "react-bootstrap";

import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

import burnsThumbnail from "../images/burns.jpg";
import heartAttackThumbnail from "../images/heartattack.jpg";
import strokeThumbnail from "../images/stroke.jpg";
import bleedingThumbnail from "../images/bleeding.jpg";
import electricShockThumbnail from "../images/electric-shock.jpg";
import fractureThumbnail from "../images/fracture.jpg";
import burns1 from "../images/first-aid/burns/burns-1.png";
import burns2 from "../images/first-aid/burns/burns-2.png";
import burns3 from "../images/first-aid/burns/burns-3.png";
import burns4 from "../images/first-aid/burns/burns-4.png";
import burns5 from "../images/first-aid/burns/burns-5.png";
import burns6 from "../images/first-aid/burns/burns-6.png";
import heartAttack1 from "../images/first-aid/heart-attack/heart-attack-1.png";
import heartAttack2 from "../images/first-aid/heart-attack/heart-attack-2.png";
import heartAttack3 from "../images/first-aid/heart-attack/heart-attack-3.png";
import stroke1 from "../images/first-aid/stroke/stroke-1.png";
import stroke2 from "../images/first-aid/stroke/stroke-2.png";
import stroke3 from "../images/first-aid/stroke/stroke-3.png";
import stroke4 from "../images/first-aid/stroke/stroke-4.png";
import minorCut1 from "../images/first-aid/minor-cut/minor-cut-1.png";
import minorCut2 from "../images/first-aid/minor-cut/minor-cut-2.png";
import minorCut3 from "../images/first-aid/minor-cut/minor-cut-3.png";
import minorCut4 from "../images/first-aid/minor-cut/minor-cut-4.png";
import minorCut5 from "../images/first-aid/minor-cut/minor-cut-5.png";
import minorCut6 from "../images/first-aid/minor-cut/minor-cut-6.png";
import electricShock1 from "../images/first-aid/electric-shock/electric-shock-1.png";
import electricShock2 from "../images/first-aid/electric-shock/electric-shock-2.png";
import electricShock3 from "../images/first-aid/electric-shock/electric-shock-3.png";
import electricShock4 from "../images/first-aid/electric-shock/electric-shock-4.png";
import fracture1 from "../images/first-aid/fracture/fracture-1.png";
import fracture2 from "../images/first-aid/fracture/fracture-2.png";
import fracture3 from "../images/first-aid/fracture/fracture-3.png";
import fracture4 from "../images/first-aid/fracture/fracture-4.png";



const FirstAid = () => {
  const [procedures, setProcedures] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProcedure, setSelectedProcedure] = useState(null);

  useEffect(() => {
    const proceduresData = [
      {
        id: 1,
        title: "Minor Burns",
        thumbnail: burnsThumbnail,
        steps: [
          {
            step: "Cool the burn under cold running water for at least 10 minutes",
            img: burns1,
          },
          {
            step: "Remove any clothing or jewellery near the burn",
            img: burns2,
          },
          {
            step: "Apply the compress for 10 minutes, wait for 30 minutes, and then reapply.",
            img: burns3,
          },
          {
            step: "Take an over the counter pain reliever.",
            img: burns4,
          },
          {
            step: "Clean the burn, do not pop blisters.",
            img: burns5,
          },
          {
            step: "Lightly cover the burn with ointment and then, gauze.",
            img: burns6,
          },
        ],
      },
      {
        id: 2,
        title: "Heart Attack",
        thumbnail: heartAttackThumbnail,
        steps: [
          {
            step: "Assess the signs of heart attack.",
            img: heartAttack1,
          },
          {
            step: "Call 108 to contact an ambulance for professional treatment.",
            img: heartAttack2,
          },
          {
            step: "Assure the person and give them an ASPIRIN (if non-allergic).",
            img: heartAttack3,
          },
        ],
      },
      {
        id: 3,
        title: "Stroke",
        thumbnail: strokeThumbnail,
        steps: [
          {
            step: "Assess the signs of stroke, Ask the Person to Smile.",
            img: stroke1,
          },
          {
            step: "Ask the person to raise both arms.",
            img: stroke2,
          },
          {
            step: "Ask the person a simple question, like their name or their age.",
            img: stroke3,
          },
          {
            step: "If there are any anomalies in the behaviour tests, call an ambulance",
            img: stroke4,
          },
        ],
      },
      {
        id: 4,
        title: "Minor Cuts",
        thumbnail: bleedingThumbnail,
        steps: [
          {
            step: "Remove any clothing near or on the wound",
            img: minorCut1,
          },
          {
            step: "Control the Bleeding",
            img: minorCut2,
          },
          {
            step: "Remove any visible debris around the Wound",
            img: minorCut3,
          },
          {
            step: "Rinse the wound thoroughly",
            img: minorCut4,
          },
          {
            step: "Apply appropriate bandage and secure it",
            img: minorCut5,
          },
          {
            step: "Change the dressing periodically",
            img: minorCut6,
          },
        ],
      },
      {
        id: 5,
        title: "Electric Shock",
        thumbnail: electricShockThumbnail,
        steps: [
          {
            step: "Assess the signs of electric shock.",
            img: electricShock1,
          },
          {
            step: "Call 108 to contact an ambulance for professional treatment.",
            img: electricShock2,
          },
          {
            step: "Shut off the Power Source",
            img: electricShock3,
          },
          {
            step: "Separate the source from the victim",
            img: electricShock4,
          },
        ],
      },
      {
        id: 6,
        title: "Bone Fracture",
        thumbnail: fractureThumbnail,
        steps: [
          {
            step: "Assess the situation and identify fracture location, call 108",
            img: fracture1,
          },
          {
            step: "Apply Bandage",
            img: fracture2,
          },
          {
            step: "Stabilize the Bone",
            img: fracture3,
          },
          {
            step: "Apply Cold Compress periodically",
            img: fracture4,
          },
        ],
      },
    ];
    setProcedures(proceduresData);
  }, []);

  const handleShow = (procedure) => {
    setSelectedProcedure(procedure);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProcedure(null);
  };

  return (
    <>
      <Header/>
      <div id="first-aid-module">
        <div className="container py-5 first-aid-container">
          <h1 className="text-center mb-5">First Aid Guide</h1>
          <div
            className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
            id="firstaidcards"
          >
            {procedures.map((procedure) => (
              <div className="col" key={procedure.id}>
                <div
                  className="first-aid-card"
                  onClick={() => handleShow(procedure)}
                >
                  <img
                    src={procedure.thumbnail}
                    className="card-img-top"
                    alt={procedure.title}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/800x400";
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{procedure.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Modal show={showModal} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>{selectedProcedure?.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Carousel>
                {selectedProcedure?.steps.map((step, index) => (
                  <Carousel.Item key={index}>
                    <img
                      src={step.img}
                      className="d-block w-100"
                      alt={`Step ${index + 1}`}
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/800x400";
                      }}
                    />
                    <Carousel.Caption>
                      <p className="step-description">{step.step}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Modal.Body>
            <Modal.Footer>
              <button className="btn btn-secondary" onClick={handleClose}>
                Close
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <Footer/>
    </>

  );
};

export default FirstAid;
