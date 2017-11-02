import React, {Component} from 'react';
import { Carousel, Slider, Slide } from 'react-materialize';
import $ from 'jquery';

class Demo extends Component {
    render(){
        return(
                  <div className="demo">
                    <Slider >
                    	<Slide 
                    		src="/img/logo.png"
                    		title="Welcome to WYM!"
                        placement="left">
                    		WYM is a tone analzyer app utilizing the IBM Watson API. This powerful tool will help you take your written communcation to the next level.
                    	</Slide>
                    	<Slide
                      	src="/img/logo.png"
                    		title="Receive immediate tone feedback on your written text."
                    		placement="left">
                        WYM is able to detect 7 different tones in submitted text. You will receive immediate feedback upon submission.
                    	</Slide>
                    	<Slide
                    		src="/img/SampleText.png">
                    	</Slide>
                      <Slide
                    		src="/img/logo.png"
                    		title="Review your tone feedback."
                        placement="left">
                    		Feedback is provided in helpful graphs and broken down line by line.
                    	</Slide>
                      <Slide
                    		src="/img/Graphs.png">
                    	</Slide>
                      <Slide
                    		src="/img/logo.png"
                    		title="Perfect your twitter feed."
                    		placement="left">
                    		Perform a tone analysis on your entire twitter feed to fine tune your social media presence.
                    	</Slide>
                      <Slide
                    		src="/img/Twitter.png">
                    	</Slide>

                    </Slider>

                </div>




        );
    }
}

export default Demo;
