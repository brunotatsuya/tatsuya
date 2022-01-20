import Typewriter from 'typewriter-effect';
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import { FiArrowDown } from 'react-icons/fi'

export default function PresentationCard() {
  return (
    <div className="h-100" id="presentationCard">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="row d-flex">
        <div className="container" id="presentationGreetings">
          <div>
            <h1 className="display-6 font-weight-bold text-white" data-aos="fade-right">{"hi, i'm"}</h1>
            <h1 className="display-2 font-weight-bold text-white" data-aos="fade-right" data-aos-delay="900">{"bruno tatsuya"}</h1>
            <div className="d-flex">
              <h4 className="font-weight-bold text-white mx-1 font-monospace" data-aos="flip-up" data-aos-delay="1800">
                <Typewriter
                  options={{
                    strings: ['Software Developer.', 'Computer Scientist.', 'Writer.', 'RPA Developer.'],
                    autoStart: true,
                    loop: true
                  }}
                />
              </h4>
            </div>
          </div>
          {/* <div className="d-inline-flex mt-3 bg-dark rounded-pill" id="linksWrapper" data-aos="fade-up" data-aos-delay="600">
            <a href="https://github.com/brunotatsuya" target="_blank" rel="noreferrer">
              <h2 className="mx-3 font-weight-bold text-white"><BsGithub /></h2>
            </a>
            <a href="https://www.linkedin.com/in/bruno-tatsuya/" target="_blank" rel="noreferrer">
              <h2 className="mx-2 font-weight-bold text-blue"><BsLinkedin /></h2>
            </a>
            <a href="mailto:brunomasunaga@gmail.com" target="_blank" rel="noreferrer">
              <h2 className="mx-3 font-weight-bold text-red"><SiGmail /></h2>
            </a>
          </div> */}
        </div>
        <div className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="3000">
          <a href="#resume">
            <button className="btn font-monospace fs-5 text-white" id="findOutMore">
              Discover me <FiArrowDown />
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}