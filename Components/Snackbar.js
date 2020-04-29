import React, { Component } from 'react';
import Styled from "styled-components";
import logosswitch from "../assets/logosswitch";

const SnackbarDiv = styled.div`

`

 class Snackbar extends Component {
    render() {
        return (
            <SnackbarDiv className="d-flex">
                <p>Github</p>
                <p>Resume</p>
                <p>LinkedIn</p>
                <p>Email</p>
            </SnackbarDiv>
        )
    }
}


export default Snackbar;