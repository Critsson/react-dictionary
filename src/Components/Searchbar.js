import React from "react"
import { TextField, InputAdornment } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

export default function Searchbar(props) {
    return (
        <>
            {props.wordState === false ?
                <TextField className="searchbar" error onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                        props.handleSearch()
                    }
                }} onChange={(e) => props.handleChange(e)} autoComplete="off" color="error" size="small"
                    InputProps={{ endAdornment: <InputAdornment position="end"><SearchIcon color="error" /></InputAdornment> }} /> :
                <TextField className="searchbar" onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                        props.handleSearch()
                    }
                }} onChange={(e) => props.handleChange(e)} autoComplete="off" color="primary" size="small"
                    InputProps={{ endAdornment: <InputAdornment position="end"><SearchIcon color="primary" /></InputAdornment> }} />}
        </>
    )
}