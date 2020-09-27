import React, { Component } from 'react'
import { GoogleSpreadsheet } from "google-spreadsheet";
export default class App extends Component {
  state = {
    currentMember: ""
  }
  //   componentDidMount(){
  //     const config = {
  //       type: "service_account",
  //       project_id: "react-destro",
  //       private_key_id: "a999dd8e608498e593b358112ce08635212cc0fb",
  //       private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDk+nC7fn8lEwsk\n+FaQA/MDOJttg0E4sypBeN6oUdyNEQvuNp2aAmM5ZKb1xIQFaosiQgFl+4Vy6qLR\ndCxPKvvC1XQHfa2HBM8v66pHQFDcxwRxuuLKfBzzdy6r0gm2fk70hugJxAln4CmU\nTcG2NPQyr8g5TN6OrXqTt+UvZNPB//z4yZ4HH20ZHri8AJnx4LwQ6pk4gW9ROliH\nRfsoiQA9SpM4hGSsm5DOcAjaesBvysCAfl6WMZrh8ipo4fqxdHUgfn7E32VhL1v9\ndyjud2lfhB77qMbBkWUoHe0QntlQ1aTGj/+0Su6sjl1xmYgq4PY+uU+E6tqZ2Cw7\nAwBu92XvAgMBAAECggEAZu39Rwsx9GR/GftYThy4XLZRiAT8iJRhZlUDIf7Kec8z\n4b1DUzvHhsEsHEZeYmDmclvhbQqHjoTS8/yY/m2ABrEVG1jvbEZJLG1ved/7eYMt\nCELON99a1Ea7ABnGq/ZTX7BVFi69W6h0iGn7rgBX1YEXLErVsKVi+IwtxgQ4/HdQ\ncymqlGV24e+9MWfTcRLob+cEqP1u8TfRjpsurN0w+ZEWJrzN9Bs7pMQgS0NMGj9X\ncO8KWJcfokuZ65oqeDfZPYwgzR09+n5vHqMX3gZVawEB4t5+Lmb6MPSENwYojhZ/\nph28ErbLBZYjAWFIRNdV3rSXo1KPLHQIoJ7ye9DfwQKBgQD3eIxxtWj4yoZLS1iH\nb5DgR28MsblCf6jgpeA2sOoK+sLZeA51wglmNDOYb+KB9qMY4b+24hKTzVpKNWSA\nEo7DjfoXah7Mzoosm/6pcEZKLPEjwe4pof31E5iqIsFtspy20BIRj5qW4oMDYQWh\nF6mtDwHEeGG4uP0Qz03GzevpdwKBgQDs3rrzZpo8fUEEJSaxJCoHEoQYQfDg4cbV\ngAf5/udzB1o6gCplXfXkY6qdrYtI0Wmuo5blpbfcazgly6oOiMU3UBSz4g0kp2SN\n2KzA+Bt4y2xSVSaIBFCXUtrLDKQJdN4N75AXFeQwMgh/FlhhgzZ/ZId8YaQwGnVb\nrzas5pGFSQKBgQCoEXHoo9jn5ruwFTrJuIZ/G2SbDXSRahvqfh05Z4t763Q7t6Ky\nbRZvGBLWe14s/7Ei6+aFMSKGyNeCQKLBrFjTDPCFyGeklr0WsNcSghLqu30F2OaD\n1eWg9S8glTwi4UQ3kDZFQO8vfCSYPeNR1b1BsEh2A3/ysYgFS5U56I5I3wKBgHdR\nl1EG7UjtO3QQFtaCxhz76ciiZumRMezYaqw3CHX8TSpM545ab4QV5Js7EX+j5Z2Q\nUHHsMZr587WuS0K5CMddMqCOjVpabB+79wHZuVT2++DZfehkbAheN1KzUmplEXpp\no+bNIz5X5cnHAsxUIX64sDsqoF+O5HFD6MHd/43pAoGBAKazzl1Hw7Qd7JSghIH+\nOm3+cbO+8Rp/Ltnyp1PAdPZvEBhsEuX6RBc5Vvzc5RJE781eKJKbKJqWEoIRc3U/\nu+wMhqNAdb9WFu2y7uMfrZpUNBbarscnKEUJXaTozZzB7EN2cjI7NcYKzkYplXxf\nLEfzqw9IgyQoeZzgg5THQlO/\n-----END PRIVATE KEY-----\n",
  //       client_email: "destro@react-destro.iam.gserviceaccount.com",
  //       client_id: "101291893705825509798",
  //       auth_uri: "https://accounts.google.com/o/oauth2/auth",
  //       token_uri: "https://oauth2.googleapis.com/token",
  //       auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  //       client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/destro%40react-destro.iam.gserviceaccount.com",
  //       spreadSheetId:"17rIs6jBVfM1lEHx4ifq2ktWJT4-xvXt_uaEQ6-ALd88",
  //       sheetId:0,
  //     }
  //     const SPREADSHEET_ID = config.spreadSheetId;
  // const SHEET_ID = config.sheetId;
  // const CLIENT_EMAIL = config.client_email;
  // const PRIVATE_KEY = config.private_key;

  // const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  // const appendSpreadsheet = async (row) => {
  //   try {
  //     await doc.useServiceAccountAuth({
  //       client_email: CLIENT_EMAIL,
  //       private_key: PRIVATE_KEY,
  //     });
  //     // loads document properties and worksheets
  //     await doc.loadInfo();

  //     const sheet = doc.sheetsById[SHEET_ID];
  //     await sheet.loadCells("A1:C30");
  //     const totalNumbers = sheet.cellStats.loaded;
  //     let numbers = []
  //     for (let i = 2; i < 30; i++) {
  //       const element = sheet.getCellByA1(`A${i}`).value;
  //       const status = sheet.getCellByA1(`B${i}`).value;
  //       const date = sheet.getCellByA1(`C${i}`).value;
  //       if(element){
  //         numbers.push({number:element,status:status,CellNo:`A${i}`,suggestedDate:date})
  //       }
  //     }
  //     // console.log(numbers)
  //     var today = new Date().toLocaleDateString();
  //     const randomMember = numbers[Math.floor(Math.random()*30)];
  //     this.setState({currentMember:randomMember});
  //     console.log(randomMember)
  //   } catch (e) {
  //     console.error('Error: ', e);
  //   }
  // };

  // const newRow = { Name: "new name", Value: "new value" };

  // appendSpreadsheet(newRow);
  //   }
  componentDidMount() {
    const config = {
      type: "service_account",
      project_id: "react-destro",
      private_key_id: "a999dd8e608498e593b358112ce08635212cc0fb",
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDk+nC7fn8lEwsk\n+FaQA/MDOJttg0E4sypBeN6oUdyNEQvuNp2aAmM5ZKb1xIQFaosiQgFl+4Vy6qLR\ndCxPKvvC1XQHfa2HBM8v66pHQFDcxwRxuuLKfBzzdy6r0gm2fk70hugJxAln4CmU\nTcG2NPQyr8g5TN6OrXqTt+UvZNPB//z4yZ4HH20ZHri8AJnx4LwQ6pk4gW9ROliH\nRfsoiQA9SpM4hGSsm5DOcAjaesBvysCAfl6WMZrh8ipo4fqxdHUgfn7E32VhL1v9\ndyjud2lfhB77qMbBkWUoHe0QntlQ1aTGj/+0Su6sjl1xmYgq4PY+uU+E6tqZ2Cw7\nAwBu92XvAgMBAAECggEAZu39Rwsx9GR/GftYThy4XLZRiAT8iJRhZlUDIf7Kec8z\n4b1DUzvHhsEsHEZeYmDmclvhbQqHjoTS8/yY/m2ABrEVG1jvbEZJLG1ved/7eYMt\nCELON99a1Ea7ABnGq/ZTX7BVFi69W6h0iGn7rgBX1YEXLErVsKVi+IwtxgQ4/HdQ\ncymqlGV24e+9MWfTcRLob+cEqP1u8TfRjpsurN0w+ZEWJrzN9Bs7pMQgS0NMGj9X\ncO8KWJcfokuZ65oqeDfZPYwgzR09+n5vHqMX3gZVawEB4t5+Lmb6MPSENwYojhZ/\nph28ErbLBZYjAWFIRNdV3rSXo1KPLHQIoJ7ye9DfwQKBgQD3eIxxtWj4yoZLS1iH\nb5DgR28MsblCf6jgpeA2sOoK+sLZeA51wglmNDOYb+KB9qMY4b+24hKTzVpKNWSA\nEo7DjfoXah7Mzoosm/6pcEZKLPEjwe4pof31E5iqIsFtspy20BIRj5qW4oMDYQWh\nF6mtDwHEeGG4uP0Qz03GzevpdwKBgQDs3rrzZpo8fUEEJSaxJCoHEoQYQfDg4cbV\ngAf5/udzB1o6gCplXfXkY6qdrYtI0Wmuo5blpbfcazgly6oOiMU3UBSz4g0kp2SN\n2KzA+Bt4y2xSVSaIBFCXUtrLDKQJdN4N75AXFeQwMgh/FlhhgzZ/ZId8YaQwGnVb\nrzas5pGFSQKBgQCoEXHoo9jn5ruwFTrJuIZ/G2SbDXSRahvqfh05Z4t763Q7t6Ky\nbRZvGBLWe14s/7Ei6+aFMSKGyNeCQKLBrFjTDPCFyGeklr0WsNcSghLqu30F2OaD\n1eWg9S8glTwi4UQ3kDZFQO8vfCSYPeNR1b1BsEh2A3/ysYgFS5U56I5I3wKBgHdR\nl1EG7UjtO3QQFtaCxhz76ciiZumRMezYaqw3CHX8TSpM545ab4QV5Js7EX+j5Z2Q\nUHHsMZr587WuS0K5CMddMqCOjVpabB+79wHZuVT2++DZfehkbAheN1KzUmplEXpp\no+bNIz5X5cnHAsxUIX64sDsqoF+O5HFD6MHd/43pAoGBAKazzl1Hw7Qd7JSghIH+\nOm3+cbO+8Rp/Ltnyp1PAdPZvEBhsEuX6RBc5Vvzc5RJE781eKJKbKJqWEoIRc3U/\nu+wMhqNAdb9WFu2y7uMfrZpUNBbarscnKEUJXaTozZzB7EN2cjI7NcYKzkYplXxf\nLEfzqw9IgyQoeZzgg5THQlO/\n-----END PRIVATE KEY-----\n",
      client_email: "destro@react-destro.iam.gserviceaccount.com",
      client_id: "101291893705825509798",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/destro%40react-destro.iam.gserviceaccount.com",
      spreadSheetId: "17rIs6jBVfM1lEHx4ifq2ktWJT4-xvXt_uaEQ6-ALd88",
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
          if (element == `"${today}"`) {
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
