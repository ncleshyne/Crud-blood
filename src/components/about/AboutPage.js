import React from 'react';
import { Link } from 'react-router'

class AboutPage extends React.Component {
  
  render() {
    return (
      <div className="container col-md-8 col-md-offset-3">
        <div className='aboutPage'>
         <h1>Blood Donation App</h1>
  		    <p>This app allows users to make requests and confirm donations for blood.</p>
  		    <p>It aims to help make it easier to request blood online and notify users who whould voluntary donate blood.</p>
  
  	   	<h1> Why did we build this app? </h1>
    	   	<p> We want to solve the urgent need of blood for blood transfusion in the Philippines </p>
    		  <p>"Michelle Maquiling, officer-in-charge of the PRC-Negros Oriental Chapter, said there is a dire need for blood donors because there are patients who need blood every day, but there is a shortage of supply even if the DOH has programs to strengthen blood donation in the province." <a href="http://www.philstar.com/region/2017/03/28/1685367/blood-donors-dearth-due-fear-needles" target="_blank">Read More</a></p> <br/>
    		  <p>"For a first class hospital like St. Luke’s to suffer from shortage of blood supply means public hospitals are more blood-challenged nationwide from source analysed" <a href="http://gulfnews.com/news/asia/philippines/blood-shortage-affecting-hospitals-in-philippines-1.1657914" target="_blank">Read More</a></p> <br/>
    		  <p>"Blood needed: With PH blood supply below target, patients seek help online. With the Philippines' blood supply still falling short of the target, patients in need of blood turn to online networks to look for kind-hearted strangers willing to donate" <a href="https://www.rappler.com/newsbreak/in-depth/180446-blood-donation-online-networks-philippine-red-cross" target="_blank">Read More</a></p>
        </div>
      </div>
    )
  }

}



export default AboutPage;
