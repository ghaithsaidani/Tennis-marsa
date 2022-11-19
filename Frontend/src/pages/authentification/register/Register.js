import React, {useState} from 'react';
import {TabPanel} from "@mui/lab";
import {Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack} from "@mui/material";
import {VisibilityOffOutlined, VisibilityOutlined} from "@mui/icons-material";
import {useFormik} from "formik";

const Register = () => {
    const [showPassword , setShowPassword] = useState(false);
    const {values,handleSubmit,handleChange} = useFormik({
        initialValues: {
            email: '',
            password: '',

        },
        validateOnChange: true,
        validateOnBlur: false,
        onSubmit:(values)=>{
            console.log(values);
        }
    });
    const handleClickShowPassword=()=>{
        setShowPassword(show=>!show)
    }
    return (
        <form onSubmit={handleSubmit}>
            <TabPanel value="2">
                <Stack>
                    <FormControl margin={"normal"} sx={{width:'400px'}} variant="outlined">
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <OutlinedInput
                            id="email"
                            name="email"
                            type={'email'}
                            value={values.email}
                            onChange={handleChange}
                            label="Email"
                        />
                    </FormControl>
                    <FormControl margin={"normal"} sx={{width:'400px'}} variant="outlined">
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <OutlinedInput
                            id="email"
                            name="email"
                            type={'email'}
                            value={values.email}
                            onChange={handleChange}
                            label="Email"
                        />
                    </FormControl>
                    <FormControl margin={"normal"} fullWidth variant="outlined">
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
                    </FormControl>
                    <Button disableElevation sx={{mt:10}} variant={"contained"} type={"submit"}>Submit</Button>
                </Stack>
            </TabPanel>
        </form>
    );
};

export default Register;
