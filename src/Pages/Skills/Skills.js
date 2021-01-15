import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import './Skills.scss';
 

const skills = () => (
    <div className="chart">
        <h1>SKILLS</h1>
        
        <div>
            <ul>
                <div style={{color: "#33E1ED",font: "Raleway"}}><span role="img" aria-label="programmer">👩‍💻</span>  Programmer</div><br/>
                <li>C, JAVA, Python</li>
                <li>JavaScript, CSS, HTML</li>
                <li>ReactJS</li>
                <li>MySQL</li>
                <li>ML/AI/Data Science</li>
                <br/>
                <div style={{color: "#33E1ED",font: "Raleway"}}><span role="img" aria-label="designer">✍</span>  Designer</div><br/>
                <li>UI/UX Designing</li>
                <li>Graphic Designing</li>
                <li>Figma</li>
                <li>Adobe XD</li>
                <li>Adobe Illustrator</li>
            </ul>
            

            
            <PieChart
            data={[
                { title: 'Designer', value: 40, color: '#2D2D44' },
                { title: 'Programmer', value: 60, color: '#1E1E2C' }
            ]}
            viewBoxSize={[200,100]}
            startAngle={126}
            segmentsShift={0.1}
            segmentsStyle={{

            }}
            center={[53,55]}
            radius={25}
            animate={1}
            animationDuration={900}
            label={(props) => {return props.dataEntry.title;}}
            labelStyle={{
                fontSize: '3px',
                fill: '#ffffff',
                fontFamily: 'Segoe UI',
            }}
            
            />;
            
            </div>
    </div>

);

export default skills;