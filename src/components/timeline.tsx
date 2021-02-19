import React from 'react';
import '../css/timeline.scss';

export default class TimeLine extends React.Component {
    render() {
        return (
            <div className="py-4 d-flex timeline justify-content-around">
                <div className="timeline-item">
                    <div className="timeline-icon shadow-sm bg-danger">
                        High school
                    </div>
                    <div className="timeline-body">
                        <div className="pb-2 font-weight-bold" style={{fontSize:'1.2rem'}}>2014</div>
                        <div className="mt-2">
                            <a href="https://hsgs.edu.vn/" rel="noopener noreferrer" target="_blank">Hight School for Gifted Student</a>
                            
                        </div>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-icon shadow-sm bg-primary">
                        University
                    </div>
                    <div className="timeline-body">
                        <div className="pb-2 font-weight-bold" style={{fontSize:'1.2rem'}}>2017</div>
                        <div className="mt-2">
                            <a href="https://daihoc.fpt.edu.vn/" rel="noopener noreferrer" target="_blank">FPT University</a>                     
                        </div>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-icon shadow-sm bg-dark">
                        Other
                    </div>
                    <div className="timeline-body">
                        <div className="pb-2 font-weight-bold" style={{fontSize:'1.2rem'}}>2020</div>
                        <div className="mt-2">
                            <a href="http://e-solutions.com.vn/" rel="noopener noreferrer" target="_blank">E-Solutions</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}