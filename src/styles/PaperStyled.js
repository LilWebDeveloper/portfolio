import { styled, Paper } from "@mui/material";

export const PaperStyled = styled(Paper)(({theme}) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    margin:'auto',
    width: '20rem',
    height: '15rem',
    color: '#000',
    marginBottom: '50px',
    backgroundColor: '#fff',
    boxShadow: '-5px 5px 0px 0px rgba(255, 154, 0, 1)'
}));