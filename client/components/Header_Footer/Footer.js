import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPagePro = () => {
  return (
    <MDBFooter color="bg-dark" className="font-small pt-4 mt-4" style={{ width: "auto" }}>
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3 text-white">
          <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Conference Management Tool (CMT)
            </h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p><br/>
            
              <ul className="list-unstyled list-inline mb-0">
                <li className="list-inline-item">
                  <h5 className="mb-1">Register In Here</h5>
                </li>
                <li className="list-inline-item">
                  <a href="/#" className="btn btn-danger btn-rounded">
                    Sign up!
                  </a>
                </li>
              </ul>
           
            <div className="text-center py-3">
              <ul className="list-unstyled list-inline mb-0">
              </ul>
            </div>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            <p>
              <a href="/addResearch">Research Paper</a>
            </p>
            <p>
              <a href="/addWorkshop">Workshops</a>
            </p>
            <p>
              <a href="/addAttendee">Attendee</a>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p>
              <i className="fa fa-home mr-3" /> No:110/3 Main Road, Colombo
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> AFFinalProject@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> +94 76 002 555
            </p>
            <p>
              <i className="fa fa-print mr-3" /> 011 333 1111
            </p>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="8" lg="8">
            <p className=" text-md-center text-white">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://www.AFFinalProject.com"> AFFinalProject.com | All Right Recevered </a>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}


export default FooterPagePro;