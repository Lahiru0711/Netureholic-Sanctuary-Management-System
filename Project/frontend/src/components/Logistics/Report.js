import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableFooter from "@mui/material/TableFooter";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import jsPDF from "jspdf";
import "./Styles/Report.css";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";

export default class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ReportData: [],
      total: 0,
    };
  }

  printDocument() {
    const input = document.getElementById("pdfdiv");
    html2canvas(input).then((canvas) => {
      var img = new Image();
      //var doc = new jsPDF({ orientation: 'landscape' });
      const doc = new jsPDF("p", "mm", "a4");
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(32);
      doc.text(140, 25, "Natureholic");
      doc.setTextColor(24, 78, 119);
      doc.setFontSize(8);
      doc.text(10, 10, "Department - ");
      doc.setFontSize(16);
      doc.text(10, 20, "Logistics Management\n"+"Main Warehouse");
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(12);
      doc.text(10, 85, "Signature :");

      //Date
      var m_names = new Array(
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      );

      var today = new Date();
      var seconds = today.getSeconds();
      var minutes = today.getMinutes();
      var hours = today.getHours();
      var curr_date = today.getDate();
      var curr_month = today.getMonth();
      var curr_year = today.getFullYear();

      today =
        m_names[curr_month] +
        " " +
        curr_date +
        "/ " +
        curr_year +
        " | " +
        hours +
        "h : " +
        minutes +
        "min : " +
        seconds +
        "sec";
      var newdat = today;
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(11);
      doc.text(10, 90, newdat);
      var imgHeight = (canvas.height * 210) / canvas.width;
      const imgData = canvas.toDataURL("image/png");
      doc.addImage(imgData, "JPEG", 0, 100, 210, imgHeight);
      const date = Date().split(" ");
      // we use a date string to generate our filename.
      const dateStr =
        "LogisticsManagement_" +
        date[0] +
        date[1] +
        date[2] +
        date[3] +
        date[4];
      doc.save(`report_${dateStr}.pdf`);
    });
  }

  componentDidMount() {
    axios.get("/logistics").then((response) => {
      console.log(response?.data);
      this.setState({
        ReportData: response?.data,
      });
    });
  }

  state = { total: 0 };

  filterData = () => {
    this.state.ReportData.filter(
      (el) => (this.total += Number(el.unitPrice) * el.quantity)
    );
    console.log(this.state.total);
  };

  render() {
    console.log(this.state?.CustomerData);
    console.log(this.state.total);
    return (
      <div>
        <TableContainer id="pdfdiv" className="txt" component={Paper}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="left">PID</TableCell>
                <TableCell align="right">P.Name</TableCell>
                <TableCell align="right">Avail.C</TableCell>
                <TableCell align="right">Unit Price</TableCell>
                <TableCell align="right">Total</TableCell>
                <TableCell align="right">Demand</TableCell>
              </TableRow>
            </TableHead>

            <TableFooter>
              <TableCell align="left"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="center">
                total price :
                {/*this.state.ReportData.map((value) => {
                  return (this.total +=
                    Number(value.unitPrice) * Number(value.quantity));
                })*/}
              </TableCell>
            </TableFooter>

            <TableBody>
              {this.state?.ReportData?.map((p, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell align="left">{p.pID}</TableCell>
                    <TableCell align="right">{p.pName}</TableCell>
                    <TableCell align="right">{p.quantity}</TableCell>
                    <TableCell align="right">Rs.{p.unitPrice}</TableCell>
                    <TableCell align="right">Rs.{p.unitPrice * p.quantity}</TableCell>
                    <TableCell align="right">{p.demand}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>{" "}
        <br />
        <br />
        <center>
          <div>
            <button
              className="info__button"
              onClick={this.printDocument}
              variant="contained"
              color="primary"
            >
              <i class="fa fa-file-pdf-o" aria-hidden="true"></i> Download PDF
            </button>
            <br />

            <Link to="/inventory">
              <button
                variant="contained"
                color="primary"
                style={{ float: "right", background: "lightgreen" }}
              >
                <i class="fa fa-reply" aria-hidden="true"></i> Go Back
              </button>
            </Link>
          </div>
        </center>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
