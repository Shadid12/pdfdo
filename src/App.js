import React, { Component } from 'react';
import './App.css';

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

class App extends Component {


  printDocument = () => {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'png', 0, 0);
        pdf.save("download.pdf");
      });
  }

  render() {
    return (
      <div>
        <div id="divToPrint" className="toPrint">
          <h1>Hello PDF</h1>
          <div className="para-holder">
            <p className='para'>
              Lorem Ipsum is simply dummy text of the printing and 
            </p>
            <p className='para p1-high'>
              Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. 
            </p>
          </div>
        </div>
        <div className="mb5">
          <button onClick={this.printDocument}>Print</button>
        </div>
      </div>
    );
  }
}

export default App;
