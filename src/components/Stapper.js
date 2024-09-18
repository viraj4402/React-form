import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const massage = ['First Learing Project' , 'Seacend Learing Project', 'Third Learing Project', 'First Learing Project' , 'Seacend Learing Project', 'Third Learing Project']
export default function Stapper() {
    const [step, setStep] = useState(0)

    function hendlePrev() {
        if(step > 1) setStep((step) => step -1)
            console.log("hiii");
    }

    function hendleNext() {
        if(step < 7) setStep((step) => step + 1)
    }
   

    return (
         <>
            <div className="malti-step">
                <div className="container">
                    <div className="stepper-section">
                    <div className="progressbar"></div>
                        <div className="malti-step-inner mb-5">
                            <div className={`${step >= 1 ? "circle actived" : "circle"}`}>1</div>
                            <div className={`${step >= 2 ? "circle actived" : "circle"}`}>2</div>
                            <div className={`${step >= 3 ? "circle actived" : "circle"}`}>3</div>
                            <div className={`${step >= 4 ? "circle actived" : "circle"}`}>4</div>
                            <div className={`${step >= 5 ? "circle actived" : "circle"}`}>5</div>
                            <div className={`${step >= 6 ? "circle actived" : "circle"}`}>6</div>
                            <div className={`${step >= 7 ? "circle actived" : "circle"}`}>7</div>
                        </div>
                        <Massage />
                        <div className="step-btn text-center">
                            <button onClick={hendlePrev} className="stepper_btn btn-sm-2 btn btn-primary rounded-pill">Prev</button>
                            <button onClick={hendleNext} className="stepper_btn m-2 btn btn-primary rounded-pill">Next</button>
                        </div>
                    </div>
                </div>  
            </div>
         </>
    );
}
export function Massage({step}) {
    return <h1 className="content text-center mb-3">{massage[step - 1]}</h1>
}