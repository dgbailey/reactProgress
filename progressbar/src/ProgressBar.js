import React, {useState,useEffect}  from 'react';
import styled from 'styled-components';

export const ProgressBar = (props) =>{

    let {ratio} = props;

    const computeStyles = r => {

        let percentage = r*100;
        
        return {
            width:percentage + '%',
            height:'100%',
            background:'green'
        }
    }

    return(


        <StyledProgressBar>
            <div className='indicator' style={computeStyles(ratio)}></div>
        </StyledProgressBar>

    )

    //styling
    //number of questions?
    //number completed?








}

const StyledProgressBar = styled.div `

    margin:10px;
    border:1px solid black;
    width:600px;
    height:40px;
    



`