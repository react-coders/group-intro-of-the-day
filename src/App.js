import React, { Component } from 'react'
import { GoogleSpreadsheet } from "google-spreadsheet";
<<<<<<< HEAD
export default class App extends Component {
  state = {
    currentMember: ""
=======

export default class App extends Component {
  state = {
    currentMember: "Loading..."
>>>>>>> cc625285a05eb4b07e5018dc3845441260150cfc
  }

  componentDidMount() {
    const config = {
      type: "service_account",
      project_id: "react-destro",
<<<<<<< HEAD
      private_key_id: process.env.REACT_APP_PROJECT_KEY_ID,
      private_key: process.env.REACT_APP_PRIVATE_KEY,
      client_email: process.env.REACT_APP_CLIENT_EMAIL,
      client_id: process.env.REACT_APP_CLIENT_ID,
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/destro%40react-destro.iam.gserviceaccount.com",
      spreadSheetId: process.env.REACT_APP_SPREADSHEET_ID,
=======
      private_key_id: "a999dd8e608498e593b358112ce08635212cc0fb",
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC/eB44owSKc7Fh\ny6sEIa1s75mW37OggI12+IFJKFcVJARtCCP4C9lpfKhnXlpW8EWGJcxprtE7nNzM\nLgejokAbVzc55rH+aYuVFoWraqCMXyRMcxnFvxORbDPKvECsvFZxC4kQ8fY/Adm6\nXLTG1A/8MN0+hN+CAVcqchpSTtE9E3dkaWY2++77Z0OAOHK8BMdLGCB9kdGvZ5t1\nXbmRr9fYa4CAhTvnaVXHGRIB56L1tySxn8PFi3Xzj0EN9JNXv0nhH+T4MfZ5Qo0I\nmFndkM6V5WwQcxn1b3MSNoPtYw88EJknTaqhcIbwhjueZhZ4ZUdGt5OjxKr7trYP\nU+7ilsOpAgMBAAECggEAILPJ6Z+CQ4l+Fvd71qFP5ybHQ1si6Xt7bgIExvOCaCR2\nMw8sYY3YjOlTNBCL+oRgQ4jKMJTAvN9OYPtNp7erHmBXmOabqRnq0sR9gSkdkcwg\nPYR9NuarV2+1Kt/bZgVm+DjhqMjC58EPqIJ0B++paUgJScfVCvXipufFMiCvITCZ\nV1xDOt+8Xdk/2iO6VO8/fZ8F2jnHfxjgEgbMN+Qyr639ZttDyMlBbc0ihTYF0Trj\nzlOgW0XDSGclmY1jtt7y0vWkqfGB4L0mpqFQHLZoZkRpAnYcKiC6I6V5DdHPiwas\n9IQTX9zl+1bYRvkz4bqWPbd1CEcthxK18IQGNKO33wKBgQD4XNYelZopuKUx5ADk\nWwfQsjixp0ztBu5LUM4OawnWVFsZh0fOA4W3QdkIs4CXH/A2RCLVYMWLwS1t+HC9\ncEx+EoziAtqztLXit4E91KYp2RNo3Pe8MhZ5Iy0S0DOKjsd609LrVoHtZPif5bWx\nSptcZbRw7CyTaCCABApkq8zkXwKBgQDFW2eJvuKyb73VSsMfoApAsFlVN2h/UnYP\nxroWa5rMMkCoLj/xGLr2TqsepdumgH0SDgo1gvKo1z7AsRGAEMKWJ7CI0SIRfOJl\nx3T5wGHxyLS1jCuuz3W9vd/WAvfAfJzEdr61jSK5mqD0OQEESjemgyixz93ChASb\nN7bApFEU9wKBgHnqwKU01P+EB3utLA7s7LIyuofi021LSLCqEuya+LJAqJOoh8QG\nkJ478blGvGnzIKzS17KdFXwcMRvZqCYmOTZuDsBnnEo4/Ew1vnjGqWbDi7afOfEl\nOUjvzpF8qMBshFm0H8asqY0KUs3TKlTEhe1ec6w3E06s/783vI5ck3DLAoGAH0Us\nUpb8NGmgGnuODyS8eyN2BBqTZBkcu8MxGPxTuqb7t6ocV4cjmIM+ecyt0OPq7UFs\nPK5S5I22U7G6pCADtOb1AbihPUQcWyQPVMM2waibeWiMQ1Z7wWSkYrR1rPoRnM9z\nyDBkoCPv/MJLdvKLfsapXAMjj/56/F0Hh96BOmECgYAS/jPe7oVIQfBj3vC1z2u9\nGsS6LyTrnMQRa0B6FXP+deDPEn6hEOlB7Y8cALynDxbO2YjEb6gxh8oelghqUUkY\nclZvv95Mi4rJuLPpEi/gRUoioke8drpVuX5TGny5jy4XkK3dTkzRcWrImfKP2q8u\n20UMCQxDAxp+C1IaxOeHnQ==\n-----END PRIVATE KEY-----\n",
      client_email: "react-coders@dependable-star-814.iam.gserviceaccount.com",
      client_id: "101291893705825509798",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/react-coders@dependable-star-814.iam.gserviceaccount.com",
      spreadSheetId: "1tP4LBFUagjoNa_6Peao2K4sowdaOUXrDHd1TsGVkRvE",
>>>>>>> cc625285a05eb4b07e5018dc3845441260150cfc
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
<<<<<<< HEAD
        await sheet.loadCells("A1:A200");
        const totalMembers = sheet.cellStats.nonEmpty;
        await sheet.loadCells(`A1:C${totalMembers}`);
        let numbers = [];
        var today = new Date().toLocaleDateString();
        for (let i = 2; i < totalMembers+1; i++) {
=======
        await sheet.loadCells("A1:C30");
        let numbers = []
        var today = new Date().toLocaleDateString();
        for (let i = 2; i < 30; i++) {
>>>>>>> cc625285a05eb4b07e5018dc3845441260150cfc
          const element = sheet.getCellByA1(`C${i}`).value;
          if (element == `"${today}"`) {
            numbers.push({ existingDate: element, cellId: i })
          }
        }
<<<<<<< HEAD
        
=======
>>>>>>> cc625285a05eb4b07e5018dc3845441260150cfc
        if (numbers[0]?.existingDate) {
          console.log("Existing Date")
          var todaysMember = sheet.getCellByA1(`A${numbers[0].cellId}`);
          this.setState({ currentMember: todaysMember.value });
        } else {
          console.log("Existing Date Not Found")
<<<<<<< HEAD
          this.getAnotherMember(sheet,totalMembers);
=======
          this.getAnotherMember(sheet);
>>>>>>> cc625285a05eb4b07e5018dc3845441260150cfc
        }
      } catch (e) {
        console.error('Error: ', e);
      }
    };
    const newRow = { Name: "new name", Value: "new value" };
    appendSpreadsheet(newRow);
  }
<<<<<<< HEAD
  getAnotherMember(sheet,totalMembers) {
    console.log("Getting Anther Random Member")
    let numbers = []
    for (let i = 2; i < totalMembers+1; i++) {
      const element = sheet.getCellByA1(`A${i}`).value;
      const status = sheet.getCellByA1(`B${i}`).value;
      const date = sheet.getCellByA1(`C${i}`).value;
      if(!element) break;
=======
  getAnotherMember(sheet) {
    console.log("Getting Anther Random Member")
    const totalNumbers = sheet.cellStats.loaded;
    let numbers = []
    for (let i = 2; i < 30; i++) {
      const element = sheet.getCellByA1(`A${i}`).value;
      const status = sheet.getCellByA1(`B${i}`).value;
      const date = sheet.getCellByA1(`C${i}`).value;
>>>>>>> cc625285a05eb4b07e5018dc3845441260150cfc
      if (element) {
        numbers.push({ number: element, status: status, CellNo: i, suggestedDate: date })
      }
    }
<<<<<<< HEAD
    var numbersData = numbers.filter((value) => value.status !== true);
    
=======
    // console.log(numbers)
    var numbersData = numbers.filter((value) => value.status !== true);
>>>>>>> cc625285a05eb4b07e5018dc3845441260150cfc
    if (numbersData.length <= 0) {
      this.setState({ currentMember: "All members are reserved" })
    } else {
      var today = new Date().toLocaleDateString();
<<<<<<< HEAD
=======
      console.log(numbersData)
>>>>>>> cc625285a05eb4b07e5018dc3845441260150cfc
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
<<<<<<< HEAD
=======
    document.getElementById("message").display="block";
    this.setState({ message: true });
  
>>>>>>> cc625285a05eb4b07e5018dc3845441260150cfc
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
<<<<<<< HEAD
=======
            <div id="message" style={{display: this.state.message ? 'block' : 'none' }}>Message copied...</div>
>>>>>>> cc625285a05eb4b07e5018dc3845441260150cfc
          </div>
        </div>
      </div>
    )
  }
}
<<<<<<< HEAD
=======






>>>>>>> cc625285a05eb4b07e5018dc3845441260150cfc
