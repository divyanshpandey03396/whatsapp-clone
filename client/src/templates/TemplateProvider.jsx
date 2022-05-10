import React from 'react';
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const TemplateContext = React.createContext(null);

export const TemplateProvider = ({ children }) => {
    const theme = createMuiTheme({
        overrides: {
            MuiDrawer: {
                paperAnchorLeft: {
                    left: 62,
                    top: 17,
                    height: '95%',
                    width: '26.96%',
                    boxShadow: 'none'
                }
            },
            MuiBackdrop:{
                root:{
                    backgroundColor:'unset'
                }
            }
        }
    });

    return (
        <TemplateContext.Provider>
            <ThemeProvider theme={theme}>
                {/* <CssBaseline /> */}
                {children}
            </ThemeProvider>
        </TemplateContext.Provider>
    );
}

export default TemplateProvider;