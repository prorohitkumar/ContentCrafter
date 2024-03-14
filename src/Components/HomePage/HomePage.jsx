import React, { useEffect, useRef } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Carousel } from 'bootstrap'; // Import Carousel from Bootstrap
import './HomePage.css';

export default function HomePage() {


  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const carouselInstance = new Carousel(carousel, {
      interval: 4000, // Adjust as needed
    });

    return () => {
      carouselInstance.dispose();
    };
  }, []);
 
    const cardDetails = [
        {
          imageSrc: '/images/quiz.png',
          title: 'Quick Quiz',
          text: 'Test your knowledge with our quick quiz!',
          link: '/quick-quiz'
        },
        {
          imageSrc: '/images/assessment.png',
          title: 'Assessment Creator',
          text: 'Create Custom Assessments Effortlessly',
          link: '/assessment-creator'
        },
        {
          imageSrc: '/images/casestudy.png',
          title: 'Case Study Creator',
          text: 'Craft Engaging Case Studies',
          link: '/case-study-creator'
        },
        {
          imageSrc: '/images/code.jpg',
          title: 'Code Reviewer',
          text: 'Evaluate Code Effectively',
          link: '/code-reviewer'
        },
        {
          imageSrc: '/images/Mock.png',
          title: 'Mock Interview',
          text: 'Prepare for Success',
          link: '/code-reviewer'
        },
        {
          imageSrc: '/images/Prompt.png',
          title: 'Prompt Enhancer',
          text: 'Elevate Your Conversations with Intelligent Suggestions',
          link: '/code-reviewer'
        },
        {
          imageSrc: '/images/CodeGenerator.png',
          title: 'Code Generator',
          text: ' Empower Your Development Workflow',
          link: '/code-reviewer'
        }
      ];
     
  return (
  
    <div id="carouselExampleControls" style={{marginTop: '270px',}} className="carousel slide" data-bs-ride="carousel" ref={carouselRef}>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <div className="row justify-content-center">
              {cardDetails.slice(0, 4).map((card, index) => (
                <div className="col-lg-3 col-md-6 mb-6" key={index}>
                  <div className="card h-100 card-hover">
                    <img src={card.imageSrc} className="card-img-top" alt="Card" style={{ height: '300px', objectFit: 'cover' }} />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{card.title}</h5>
                      <p className="card-text">{card.text}</p>
                      <a href={card.link} className="btn btn-primary mt-auto" style={{backgroundColor: '#0061AF',marginLeft:'30px',marginRight:'30px'}}>
                  Start
                </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <div className="row">
              {cardDetails.slice(4).map((card, index) => (
                <div className="col-lg-3 col-md-6 mb-6" key={index}>
                  <div className="card h-100 card-hover">
                    <img src={card.imageSrc} className="card-img-top" alt="Card" style={{ height: '300px', objectFit: 'cover' }} />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{card.title}</h5>
                      <p className="card-text">{card.text}</p>
                      <a href={card.link} className="btn btn-primary mt-auto" style={{backgroundColor: '#0061AF',marginLeft:'30px',marginRight:'30px'}}>
                  Start
                </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" style={{marginTop: '12%'}}>
        <span className="carousel-control-prev-icon fontIcon" ></span>
        {/* <span>Previous</span> */}
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" style={{marginTop: '12%'}}>
        <span className="carousel-control-next-icon fontIcon"></span>
        {/* <span className="visually-hidden">Next</span> */}
      </button>
        
    </div>
    
  
    //-----------------------------------------------------------------------
    // <div className="container" style={{marginTop: '280px',}}>
    //   <div className="row">
    //     {cardDetails.map((card, index) => (
    //       <div className="col-lg-3 col-md-6 mb-4" key={index}>
    //         <div className="card h-100">
    //           <img src={card.imageSrc} className="card-img-top" alt="Card" style={{height: '200px', objectFit: 'cover'}} />
    //           <div className="card-body d-flex flex-column">
    //             <h5 className="card-title">{card.title}</h5>
    //             <p className="card-text">{card.text}</p>
                // <a href={card.link} className="btn btn-primary mt-auto" style={{backgroundColor: '#2980b9',marginLeft:'30px',marginRight:'30px'}}>
                //   Start
                // </a>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    //------------------------
)
}
