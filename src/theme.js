    import { createGlobalStyle } from "styled-components";

    export const lightTheme = {
    body: "rgb(248, 248, 248)",
    heading: "#000",
    p: "rgb(129, 128, 128)",
    border: "#D8D8D8",
    shadow: "2px 2px 2px rgba(160, 153, 153, 0.25);",
    loginCard: "#fff",
    inputBackground: "rgb(245, 245, 245)",
    textColor: "#000",
    };

    export const darkTheme = {
    body: "#000000",
    heading: "#fff",
    p: "rgb(248, 248, 248)",
    card: "#1C1B1B",
    border: "#393939",
    shadow: "2px 2px 3px 0px #0C0B0B;",
    loginCard: "#151517",
    inputBackground: "#000",
    textColor: "#fff",
    };

    export const GlobalStyle = createGlobalStyle`
        .header {
            background-color : ${(props) => props.theme.body};
            border-bottom : 1px solid  ${(props) => props.theme.border};
            color :  ${(props) => props.theme.p};
            
            input[type="text"] {
                background-color : ${(props) => props.theme.card};
                border : 1px solid  ${(props) => props.theme.border};
                &::placeholder {
                color  : ${(props) => props.theme.p}
                }
            }

            .navbrand {
                color :  ${(props) => props.theme.p};
            }

        }

        body {
            background-color : ${(props) => props.theme.body};
            height : "100%";
                color : ${(props) => props.theme.p};
            }

            .profileInfo {
                &:hover {
                    box-shadow : ${(props) => props.theme.shadow};
                }
            }

            
            .left {
                ul {
                    li {
                        &:hover {
                            box-shadow : ${(props) => props.theme.shadow};
                            background :  ${(props) => props.theme.card};
                            color  : ${(props) => props.theme.p};
                        }
                    }
                }
            }

            .card {
                background-color : ${(props) => props.theme.card};
                border : 1px solid  ${(props) => props.theme.border};
                color  : ${(props) => props.theme.p};

                .cardHeader {
                    border-bottom : 1px solid  ${(props) => props.theme.border};
                    color  : ${(props) => props.theme.p};

                    div {
                    div {
                        p {

                            color  : ${(props) => props.theme.p};
                        }
                    }
                    } 
                }

                input[type="text"] {
                    color : ${(props) => props.theme.p};
                    border : 1px solid  ${(props) => props.theme.border};
                }

                .cardBody {
                    .arrowBack {
                        background-color : ${(props) => props.theme.card};
                        box-shadow : ${(props) => props.theme.shadow};
                    } 
                    .arrowForward {
                        background-color : ${(props) => props.theme.card};
                        box-shadow : ${(props) => props.theme.shadow};
                    }
                }
            }
            
            .left {
                background-color : ${(props) => props.theme.card}
            }
            
            input[type="text"] {
                background-color : ${(props) => props.theme.card};

                &::placeholder {
                color  : ${(props) => props.theme.p}
                }
            }

            .login {
                section {
                    background-color : ${(props) => props.theme.loginCard};
                    .auth-provider {
                        p {  
                        color  : ${(props) => props.theme.textColor}
                        }
                    }
                }  

                h4 {
                    color  : ${(props) => props.theme.heading}
                }

            .form-control {
                    label {
                        color  : ${(props) => props.theme.p}
                    }
                input {
                    background-color : ${(props) => props.theme.inputBackground};
                    color  : ${(props) => props.theme.textColor};

                    &::placeholder {
                    color  : ${(props) => props.theme.textColor};
                    }
                    &::placeholder label {
                        color  : ${(props) => props.theme.textColor};
                    }
                }
            }
                
            }

    `;
