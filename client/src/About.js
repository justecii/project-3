import React, {Component} from 'react';
import {Card, CardTitle, Col} from 'react-materialize';

class About extends Component {
    render(){
        return(
          <div className="aboutBox">
              <h4>About the Developers</h4>
                <Col m={3} s={6} className="devs">
		              <Card className="aboutCard">
                    <CardTitle className="devNames">Stephanie Hester</CardTitle>
                     <img className="circle responsive-img" height="100" width="100" src="img/stephanie.jpg" alt="Stephanie Pic"/>
		                 <h5>Project Manager & Front End Developer</h5>
                     <br />
                     <p>German transplant in Seattle & aspiring front end developer. When not coding away at her latest project, Stephanie can be found out in the wild hiking, performing sick stunts, playing video games or scuba diving.</p>
                    <a href="https://github.com/steffidawn">Stephanie's Gitub</a>
                  </Card>
                </Col>
                <Col m={3} s={6} className="devs">
		              <Card className="aboutCard">
                    <CardTitle className="devNames">Justen Cracraft</CardTitle>
                     <img className="circle responsive-img" height="100" width="100" src="img/justen-pic.jpg" alt="Justen Pic"/>
		                 <h5>Back-End Developer & Git Master</h5>
                     <br />
                     <p>As full-stack developer from Seattle, Justen enjoys tossing around in bed, dreaming about writing senseless code. He'd like to tell you what he does besides programming, but he doesn't remember doing anything else</p>
                     <a href="https://github.com/justecii">Justen's Github</a>
		              </Card>
                </Col>
                <Col m={3} s={6} className="devs">
		              <Card className="aboutCard">
                    <CardTitle className="devNames">Chad Coker</CardTitle>
                    <img className="circle responsive-img" height="100" width="100" src="/img/chad-image.jpg" alt="Chad Pic" />
		                 <h5>Full Stack Developer & Chart-Man</h5>
                     <br />
                     <p>A full stack dev in training who has found a home in Seattle, WA. Prior to code training, Chad enjoyed equal parts hiking, kayaking, surfing, diagnosing allergies and reading with some Netflix binges sprinkled on top.</p>
                     <a href="https://github.com/willylikestokayak">Chad's Github</a>
		              </Card>
                </Col>
                <Col m={3} s={6} className="devs">
		              <Card className="aboutCard">
                    <CardTitle className="devNames">Ari Minton</CardTitle>
                     <img className="circle responsive-img" height="100" width="100" src="img/ari-pic.jpg" alt="Ari is smiling" />
		                 <h5>Full Stack Developer / API and Text Analysis</h5>
                     <p>Ari is a Full Stack Web Developer living in Seattle, WA, but he's mostly known for telling everybody that
                     he's from Alaska. You can see him cracking open a cold one (of La Croix sparkling water) during General Assembly's happy hour on Fridays.</p>
                     <a href='https://github.com/Ari-M'>Ari's Github</a>
		              </Card>
                </Col>
            </div>
        );
    }
}

export default About;
