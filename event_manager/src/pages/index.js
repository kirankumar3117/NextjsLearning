import styled from "styled-components";
import './App.css';
import {IoMdRemoveCircleOutline,IoMdAddCircleOutline} from "react-icons/io";
import {AiOutlineDelete} from "react-icons/ai"
import LoginData from "./components/LoginData";

function App() {
  return (
    <div className="App">
    
    
      <Container> 
        <Nav>
         <Select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
         </Select>
          <Login >
            Login
          </Login>
        </Nav>
        <Title>
          <h1>HVG </h1> 
          <h2>store</h2>
        </Title>

        <Main>
          <AddingItems>
            + ADD ITEM
          </AddingItems>
          <Item>
            <Top>
            <ItemName>
              <Name>
                Kaju
              </Name>
              <Quantity>
                500000
              </Quantity>

            </ItemName>
            <In>
              <IoMdAddCircleOutline size={30}/>
            </In>
            <Out>
              <IoMdRemoveCircleOutline size={30}/>
            </Out>
            </Top>
          

          </Item>
        </Main>
      </Container>
    
    </div>
  );
}

const Container=styled.section`
  box-sizing: border-box;
  width:100vw;
 
`;

const Title=styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
  justify-content: center;
  margin-top:-30px;
  h1{
    color:red;
    letter-spacing:1.5px;
    font-size:29px;
    
  }
  h2{
    font-size:25px;
    padding:5px 20px;
  }
`;

const Nav=styled.nav`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  width:100vw;
  height:40px;
`;
const Select=styled.select`
   background-color: rgba(0, 0, 0, 0.6);
    padding:8px 16px;
    text-decoration:uppercase;
    letter-spacing:1.5px;
    border:1px solid #f9f9f9;
    border-radius:4px;
    transition:all 0.2s ease 0s;
    margin:10px  0 0 15px;
    height:36px;
    color:white;
    padding:0 10px;
    cursor:pointer;
   
    
`;

const Login=styled.div`
   background-color: rgba(0, 0, 0, 0.6);
    padding:8px 16px;
    text-decoration:uppercase;
    letter-spacing:1.5px;
    border:1px solid #f9f9f9;
    border-radius:4px;
    transition:all 0.2s ease 0s;
    margin:10px 15px 0 0;
    height:36px;
    &:hover{
        background-color:#f9f9f9;
        color:#000;
        cursor:pointer;
        border-color:transparent;
    }
`;

const Main=styled.section`
  width:60vw;
  margin-left:20vw;
  height:200px;
  @media (max-width:768px){
    width:100vw;
    margin-left:0;
  }
`;
const AddingItems=styled.div`
  color:#f9f9f9;
  width:100%;
  height:40px;
  background-color: #109056;
  font-weight:bold;
  font-size:24px;
  text-align: center;
  padding:5px 0;
  border:1px solid transparent;
  border-radius: 7px;
  &:hover{
    background-color: #109956;
    cursor:pointer;
  }
`;

const Item=styled.div`
  width:100%;
  height:40px;
  background-color:#90e78a;
  color:black;
  margin-top:15px;
  display:flex;
  flex-direction: column;
  border-radius:4px;
  border:2px solid white;
  overflow: hidden;
  cursor:pointer;
`;

const Top=styled.div`
  width:100%;
  height:40px;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
`;

const ItemName=styled.div` 
  width:88%; 
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  text-align:center;
  background-color:#5ba2e0;
  border-radius:4px;
`;
const Name=styled.div`
  padding:10px 5px;
  font-size:19px;
  font-weight:bold;
  text-align:center;
`;
const Quantity=styled.div`
  font-size:19px;
  padding:10px 0px;
  text-align: center;
`;
const In=styled.div`
  width:50px;
  background-color: #90e78a;
  padding:5px 10px;
`;
const Out=styled.div`
  width:50px;
  background-color:#e78a98;
  border-radius:4px;
  padding:5px 10px;
`;










export default App;