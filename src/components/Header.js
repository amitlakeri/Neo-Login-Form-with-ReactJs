import styled from "styled-components";
const Header = (props) => {
  return (
    <header>
       <Box>
        <Form>
          <h2>Sign In</h2>
          <Inputbox>
          <input type="text" required="required"/>
          <span>Username</span>
          <i></i>
          </Inputbox>
          <Inputbox>
          <input type="password" required="required"/>
          <span>Password</span>
          <i></i>
          </Inputbox>
          <Links>
          <a href="#">Forgot Passowrd</a><a href="">Sign Up</a>
          </Links>
          <input type="submit" value='Login'/>
        </Form>
       </Box>
    </header>
  )
}
const Box = styled.div`
&{position:relative;
width:380px;
height:420px;
background:#1c1c1c;
border-radius:8px;
overflow:hidden;
}

 &:before{
  content:'';
  position:absolute;
  width:380px;
  height:420px;
  top:-50%;
  left:-50%;
  transform-origin:bottom right; 
  background:linear-gradient(0deg, transparent,#45f3ff,#45f3ff);
  animation: animate 6s linear infinite;
 }
 &:after{
  content:'';
  position:absolute;
  width:380px;
  height:420px;
  top:-50%;
  left:-50%;
  transform-origin:bottom right; 
  background:linear-gradient(0deg, transparent,#45f3ff,#45f3ff);
  animation: animate 6s linear infinite;
  animation-delay: 3s
 }

@keyframes animate{
  0%{
    transform:rotate(0deg);
  }
  100%{
    transform:rotate(360deg);
  }
}


`



const Form = styled.div`
position:absolute;
z-index:10;
background:#28292d;
inset:2px;
border-radius:8px;
padding: 50px 40px;
display:flex;
flex-direction:column;

h2{
  color:#45f3ff;
  font-weight:500;
  text-align:center;
  letter-spacing:0.1em;
}
input[type="submit"]{
  border:none;
  outline:none;
  background:#45f3ff;
  padding:11px 25px;
  width:100px;
  margin-top:10px;
  border-radius:4px;
  font-weight:600;
  cursor:pointer;
  &:active{
    opacity:0.8;
  }
}



`


const Links = styled.div`
display:flex;
justify-content:space-between;
a{
  margin:10px 0;
  font-size:0.75em;
  color:#8f8f8f;
  text-decoration:none;

  &:hover,&:nth-child(2){
    color:#45f3ff;
  }

}
`
const Inputbox = styled.div`
position:relative;
width:300px;
margin-top:35px;

input{
  position:relative;
  width:100%;
  padding: 20px 10px 10px;
  background:transparent;
  border:none;
  outline:none;
  color:#23242a;
  font-size:1em;
  letter-spacing:0.05em;
  z-index:10;
}
span{
  position:absolute;
  left:0;
  padding: 20px 10px 10px;
  font-size:1em;
  color:#8f8f8f;
  pointer-events:none;
  letter-spacing:0.05em;
  transition:0.5s;
}
input:valid ~ span,
input:focus ~ span
{
  color:#45f3ff;
  transform:translateX(-10px) translateY(-34px);
  font-size:0.75em;
}
i{
  position:absolute;
  left:0;
  bottom:0;
  width:100%;
  height:2px;
  background:#45f3ff;
  border-radius:4px;
  transition:0.5s;
  pointer-events:none;
  z-index:9;
}
input:valid ~ i,
input:focus ~ i{
  height:44px;

}

`


export default Header