import styled from "styled-components"
import { mobile } from "../Responsive"
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
width: 100vw;
height: 100vh;
background-size: cover;
background-color: #babae8;
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
width: 30%;
padding: 20px;
background-color: white;
${mobile({ width: "75%" })}

`
const Tilte = styled.h1`
font-size: 24px;
 font-weight: 300;

`
const Form = styled.form`
display: flex;
flex-direction: column;


`
const Input = styled.input`
flex: 1;
min-width: 40% ;
margin: 10px 10px ;
padding: 10px;

`

const Button = styled.button`
width: 40%;
padding: 10px;
margin-bottom: 10px;

border: none;
border: 15px 10px;
background-color: teal;
color: wheat;
cursor: pointer;
`
const Link = styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;

`
export const Login = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    console.log("hai");
    console.log(data);
    const res = await axios.post("http://localhost:5000/api/auth/login", data)
    console.log(res.data);
    if (res.data.status) {
      navigate('/')
    }
  }
  return (
    <Container>
      <Wrapper>
        <Tilte>Create An Account</Tilte>
        <Form onSubmit={handleSubmit(onSubmit)}>


          <Input
            placeholder="Email"
            name="email"
            id="email"
            type="email"
            {...register("email",
              {
                required: true,

              })} />

          <Input
            placeholder="Password"
            name="password"
            id="password"
            type="password"
            {...register("password", {
              required: true,

            })}
          />
          {errors.password && <p> Password </p>}
          <Button>Login </Button>
          <Link>Forgot Password</Link>
          <Link>Create a new account  </Link>
        </Form>

      </Wrapper>
    </Container>
  )
}
