import {createTheme, responsiveFontSizes} from "@mui/material";
import ThemePalette from "./ThemePalette";

let theme = createTheme({
    palette:ThemePalette(),
    typography:{
        fontFamily:"Kunika",
        h3:{

            textTransform:"capitalize",
            textAlign:"center"
        },
        h5:{
            textTransform:"capitalize",
            textAlign:"center"
        },
        h6:{
            textTransform:"capitalize",
            textAlign:"center"
        },
        button:{
            fontFamily:"Overpass"
        },


    },
    components:{
      MuiButton:{
          styleOverrides:{
            root:{
                padding:" 10px 20px",
            }
          },
          variants:[
              {
                  props:{variant: "outlined",color:'secondary'},
                  style:{
                      color:"white",

                      border:"1px solid white",
                      ":hover":{
                          background:"green",
                          borderColor:"yellow",
                          transition:'background .6s,border-color .6s'
                      }
                  }
              },
              {
                  props:{variant: "text"},
                  style:{
                      color:"primary",

                      ":hover":{
                          background:'transparent',
                          color:'#FFC087'
                      },
                      ":active":{
                          background:'transparent',
                      },
                      ":visited":{
                          background:'transparent',
                      }


                  }
              },
              {
                  props:{variant: "contained"},
                  style:{
                      boxShadow:'0px 12px 21px 4px rgba(255,192,135,.5)',
                      ":hover":{
                          background:'#FFC087',
                          boxShadow:'0px 12px 21px 4px rgba(255,192,135,.6)',
                      }


                  }
              }
          ]
      },
      MuiLink:{
          styleOverrides:{
              root:{
                  fontFamily:"Kunika"
              }
          }
      }
    }
})

export default responsiveFontSizes(theme);
