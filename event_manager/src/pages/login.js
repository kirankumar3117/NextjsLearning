import styled from "styled-components";

import {TiDeleteOutline} from "react-icons/ti"
const LoginData=()=>{
    return (

        <Container>
            <Main>
            <Remove><TiDeleteOutline size={30}/></Remove>
            <MainData>
            <Lables>User Id</Lables>
            <Input type="text" name="users" list="names"/>
            <DataList id="names">
            <option value="asik"/>
            <option value="abdhul"/>
            <option value="asik"/>
            <option value="abdhul"/>
            <option value="asik"/>
            <option value="abdhul"/>
            <option value="asik"/>
            <option value="abdhul"/>
            <option value="asik"/>
            <option value="abdhul"/>
            <option value="asik"/>
            <option value="abdhul"/>
            <option value="asik"/>
            <option value="abdhul"/>
            <option value="asik"/>
            <option value="abdhul"/>
            <option value="asik"/>
            <option value="abdhul"/>
            <option value="asik"/>
            <option value="abdhul"/>
            <option value="asik"/>
            <option value="abdhul"/>
            <option value="asik"/>
            <option value="abdhul"/>
            <option value="asik"/>
            <option value="abdhul"/>
            </DataList>
            <Lables>Password</Lables>
            <Input type="text" name="password"/>
            </MainData>
            </Main>
        </Container>
    )
}


const Container=styled.div`
    width:100%;
    height:100vh;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    position: fixed;
    background: rgb(82, 70, 70,0.5);
    align-items:center;
    
   
`;
const Main=styled.div`
    width:60%;
    height:50vh;
    border:3px solid white;
    margin-left:auto;
    margin-right:auto;
    margin-top:10vh;
   display:flex;
   flex-direction: column;
   background:#040717;
   border-radius:7px;
    @media (max-width:486px){
        width:80vw;
        height:50vh;
       
    }
    &:hover{
        color:white;
    }
`;

const Input=styled.input`
    width:80%;
    height:50px;
    margin-left:10%;
    font-size: 19px;
    color:black;
    @media (max-width:468px){
        width:100%;
        height:50px;
        margin-left:0;
    }
`;

const Lables=styled.div`
  
    margin-left:10%;
    font-size:19px;
    margin-top:50px;
    color:white;
    @media (max-width:468px){
        margin-left:0;
    }
`;

const DataList=styled.datalist`
    @media (max-width:468px){
        position:relative;
        margin-top:-100px;
    }
`;

const Remove=styled.div`
    height:30px;
    width:95%;
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    margin-top:15px;
    position:relative;
`;

const MainData=styled.div`
    margin-top:-15px;
`;


export default LoginData;