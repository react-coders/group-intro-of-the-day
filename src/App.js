import React, { Component } from 'react'
import { GoogleSpreadsheet } from "google-spreadsheet";
export default class App extends Component {
  state = {
    currentMember: ""
  }
  componentDidMount() {
    const config = {
      type: "service_account",
      project_id: "react-destro",
      private_key_id: process.env.REACT_APP_PROJECT_KEY_ID,
      private_key: process.env.REACT_APP_PRIVATE_KEY,
      client_email: process.env.REACT_APP_CLIENT_EMAIL,
      client_id: process.env.REACT_APP_CLIENT_ID,
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/destro%40react-destro.iam.gserviceaccount.com",
      spreadSheetId: process.env.REACT_APP_SPREADSHEET_ID,
      sheetId: 0,
    }
    const SPREADSHEET_ID = config.spreadSheetId;
    const SHEET_ID = config.sheetId;
    const CLIENT_EMAIL = config.client_email;
    const PRIVATE_KEY = config.private_key;

    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

    const appendSpreadsheet = async (row) => {
      try {
        await doc.useServiceAccountAuth({
          client_email: CLIENT_EMAIL,
          private_key: PRIVATE_KEY,
        });
        // loads document properties and worksheets
        await doc.loadInfo();

        const sheet = doc.sheetsById[SHEET_ID];
        await sheet.loadCells("A1:A200");
        const totalMembers = sheet.cellStats.nonEmpty;
        await sheet.loadCells(`A1:C${totalMembers}`);
        let numbers = [];
        var today = new Date().toLocaleDateString();
        for (let i = 2; i < totalMembers+1; i++) {
          const element = sheet.getCellByA1(`C${i}`).value;
          if (element === `"${today}"`) {
            numbers.push({ existingDate: element, cellId: i })
          }
        }
        if (numbers[0]?.existingDate) {
          console.log("Existing Date")
          var todaysMember = sheet.getCellByA1(`A${numbers[0].cellId}`);
          this.setState({ currentMember: todaysMember.value });
        } else {
          console.log("Existing Date Not Found")
          this.getAnotherMember(sheet,totalMembers);
        }
      } catch (e) {
        console.error('Error: ', e);
      }
    };
    const newRow = { Name: "new name", Value: "new value" };
    appendSpreadsheet(newRow);
  }
  getAnotherMember(sheet,totalMembers) {
    console.log("Getting Anther Random Member")
    let numbers = []
    for (let i = 2; i < totalMembers+1; i++) {
      const element = sheet.getCellByA1(`A${i}`).value;
      const status = sheet.getCellByA1(`B${i}`).value;
      const date = sheet.getCellByA1(`C${i}`).value;
      if(!element) break;
      if (element) {
        numbers.push({ number: element, status: status, CellNo: i, suggestedDate: date })
      }
    }
    var numbersData = numbers.filter((value) => value.status !== true);
    
    if (numbersData.length <= 0) {
      this.setState({ currentMember: "All members are reserved" })
    } else {
      var today = new Date().toLocaleDateString();
      const randomMember = numbersData[Math.floor(Math.random() * numbersData.length)];
      var randomStatus = sheet.getCellByA1(`B${randomMember.CellNo}`);
      var randomDate = sheet.getCellByA1(`C${randomMember.CellNo}`);
      randomStatus.value = true;
      randomDate.value = `"${today}"`;
      randomStatus.save();
      randomDate.save();
      this.setState({ currentMember: randomMember.number })
    }
  }
  copyNumber() {
    const { currentMember } = this.state;
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = `@${currentMember} Today is your Introduction Day`;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy)
  }
  render() {
    const { currentMember } = this.state
    return (
      <div>
        <div className="wrapper">
          <div className="modal modal--congratulations">
            <div className="modal-top">
              <img className="modal-icon u-imgResponsive" src="https://miro.medium.com/max/600/1*i1yreXvK0kGrS9_uy5qKHQ.jpeg" alt="Trophy" />
              <h1 className="modal-header">React Coders</h1>
              <div className="modal-header">Introduction of the day</div>
              <div className="modal-subheader">{currentMember}</div>
            </div>
            <div className="modal-bottom">
              <button className="modal-btn u-btn u-btn--share" onClick={()=>this.copyNumber()} >Copy</button>
              <button className="modal-btn u-btn u-btn--success"><a href={`https://api.whatsapp.com/send?text=Hey @${currentMember} Welcome, Its your day! &source=&data=&app_absent=`}>Share</a></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
