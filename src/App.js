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
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      });
    console.log('I like');
  }

  render() {
    return (
      <div className="App">
        <div id="divToPrint">
          <h1>Hello PDF</h1>
        </div>
        <div className="mb5">
          <button onClick={this.printDocument}>Print</button>
        </div>
      </div>
    );
  }
}

export default App;
