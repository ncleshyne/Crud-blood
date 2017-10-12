import React from 'react';
import SkyLight from 'react-skylight';


class DonateModal extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div>
        <section>
          <h1>Blood Donations Eligibility Requirements:</h1>
          <h4>Blood donation helps save lives. You can donate blood if you...</h4>
          <ul>
            <li>Are in good health </li>
            <li>Are between 16 to 65 years old (16 and 17 years old need parents consent) </li>
            <li>Weigh at least 110 pounds</li>
            <li>Have a blood pressure between: Systolic: 90-160 mmHg, Diastolic: 60-100 mmHg</li>
            <li>Pass the physical and health history assessments</li>
          </ul>

          <h4> ABO Blood Group System </h4>
              <table>
                <tr>
                  <th>Donor</th> &nbsp; &nbsp;
                  <th>Recipient</th>
                </tr>
                <tr>
                  <td>O</td> &nbsp; &nbsp;
                  <td>O, A, B, AB</td>
                </tr>
                <tr>
                  <td>A</td> &nbsp; &nbsp;
                  <td>A & AB</td>
                </tr>
                <tr>
                  <td>B</td> &nbsp; &nbsp;
                  <td>B & AB</td>
                </tr>
                <tr>
                  <td>AB</td> &nbsp; &nbsp;
                  <td>AB</td>
                </tr>
              </table>
          <br/>
          <p>Steps in donating blood:</p>
          <ol> 
            <li>Have your weight taken</li>
            <li>Register and honestly and complete the donor registration form</li>
            <li>Have your blood type and hemoglobin checked</li>
            <li>A physician will conduct a blood donor examination</li>
            <li>Actual donation--the amount of blood to be donated (either 350cc or 450cc) will depend on the donor's weight and blood pressure. It usually takes 10 minutes or less</li>
            <li>A 5 to 10 minute rest and plenty of fluid-intake are necessary after donation</li>
          </ol>
          <br/>
          <p> For More Details </p>
          <ul>
            <li> <a href="https://www.redcross.org.ph/get-involved/give-blood/how-to-donate" target="_blank"> Philippine Red Cross </a></li>
            <li> <a href="http://www.redcrossblood.org/learn-about-blood/blood-types.html" target="_blank"> American Red Cross  </a> </li>
          </ul>
        <button onClick={() => this.simpleDialog.show()}>I want To Donate</button>
        </section>
        <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title="Thank you for Saving Life ">
          <p> Reminders: </p>
          <ol>
            <li> Before donating blood: </li>
              <ul>
                  <li>Have enough rest and sleep.</li>
                  <li>No alcohol intake 24 hours prior to blood donation</li>
                  <li>No medications for at least 24 hours prior to blood donation</li>
                  <li>Have something to eat prior to blood donation, avoid fatty food</li>
                  <li>Drink plenty of fluid, like water or juice</li>
              </ul>
            <li> After donating blood: </li>
              <ul>
                  <li>If there is discoloration and swelling on the punctured site, you may apply cold compress for 24 hours</li>
                  <li>Refrain from stooping down after blood donation</li>
                  <li>Refrain from strenuous activities</li>
                  <li>Avoid using the punctured arm in lifting heavy objects</li>
                  <li>If there is dizziness, just lie down with your feet elevated. </li>
              </ul>
          </ol>
        </SkyLight>
      </div>
    )
  }
}

DonateModal.displayName = 'DonateModal';

export default DonateModal;