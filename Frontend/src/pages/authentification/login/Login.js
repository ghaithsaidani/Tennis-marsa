import React, {useState} from 'react';
import {TabPanel} from "@mui/lab";
import {
    Button,
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack, TextField
} from "@mui/material";
import {VisibilityOffOutlined, VisibilityOutlined} from "@mui/icons-material";
import {useFormik} from "formik";
import * as yup from 'yup';

const Login = () => {
    const [showPassword , setShowPassword] = useState(false);
    let validationschema=yup.object().shape({
        email: yup.string()
            .email("Email invalide")
            .required("Vous pouvez Entrez un Email"),
        password : yup.string()
            .required("Vous pouvez entrez une Mot de Passe"),
    })
    const {values,handleSubmit,handleChange,errors,touched} = useFormik({
        initialValues: {
            email: '',
            password: '',

        },
        validateOnChange: true,
        validateOnBlur: false,
        validationSchema:validationschema,
        onSubmit:(values)=>{
            console.log(values);
        }
    });
    const handleClickShowPassword=()=>{
        setShowPassword(show=>!show)
    }




    return (
        <form onSubmit={handleSubmit}>
            <TabPanel value="1">
                <Stack>
                    <FormControl error={touched.email && Boolean(errors.email)} margin={"normal"} sx={{width:'400px'}} variant="outlined">
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <OutlinedInput
                            id="email"
                            name="email"
                            type={'email'}
                            value={values.email}
                            onChange={handleChange}
                            label="Email"
                        />
                        {touched.email && errors.email && <FormHelperText>{errors.email}</FormHelperText>}
                    </FormControl>
                    <FormControl error={touched.password && Boolean(errors.password)} margin={"normal"} fullWidth variant="outlined">
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange}
                            name={"password"}

                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                        {touched.password && errors.password && <FormHelperText>{errors.password}</FormHelperText>}
                    </FormControl>
                    <Button disableElevation sx={{mt:10}} variant={"contained"} type={"submit"}>Submit</Button>
                </Stack>
            </TabPanel>
        </form>
    );
};

export default Login;
