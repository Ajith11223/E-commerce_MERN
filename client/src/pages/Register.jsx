import styled from "styled-components"
import { useForm } from "react-hook-form";
import axios from "axios";



const Container = styled.div`
width: 100vw;
height: 100vh;
background-color: #babae8;
background-size: cover;

display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;
`
const Tilte = styled.h1`
font-size: 24px;
 font-weight: 300;

`
const Form = styled.form`
display: flex;
flex-wrap: wrap;


`
const Input = styled.input`
flex: 1;
min-width: 40% ;
margin: 20px 10px 0px 0px;
padding: 10px;

`
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;

`
const Button = styled.button`
width: 40%;
padding: 10px;
border: none;
border: 15px 10px;
background-color: teal;
color: wheat;
cursor: pointer;


`

export const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit =async (data) => {
    console.log("hai");
    console.log(data);
    const res = await axios.post("http://localhost:5000/api/auth/register",data)
  }
  return (
    <Container>
      <Wrapper>
        <Tilte>Create An Account</Tilte>
        <Form onSubmit={handleSubmit(onSubmit)}>
        {errors.name && <p>  Name</p>}

          <Input
            placeholder="name"
            name="name"
            type="text"
            {...register("name", { required: true})}
          />
          {errors.lastname && <p> Last Name</p>}

          <Input
            placeholder="Last name"
            name="lastName"
            id="lastName"
            type="text"
            {...register("lastName", { required: true })}
          />
          {errors.email && <p> Email </p>}

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
          placeholder="Phone" 
          name="phoneNumber" 
          id="phoneNumber"
          type="tel"
          {...register("phoneNumber", { required: true })}
          />
                    {errors.phoneNumber && <p>  Phone Number</p>}

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

          <Agreement>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est vitae quos explicabo impedit?</Agreement>
          <Button>Create </Button>
        </Form>

      </Wrapper>

    </Container>
  )
}
