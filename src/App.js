import React from "react"
import Searchbar from "./Components/Searchbar"
import DefinitionCard from "./Components/DefinitionCard"
import { ThemeProvider, createTheme } from "@mui/material"

export default function App() {

    const [searchTerm, setSearchTerm] = React.useState("");
    const [badSearch, setBadSearch] = React.useState(false);
    const [firstSearched, setFirstSearched] = React.useState(false);
    const [firstRender, setFirstRender] = React.useState(false);
    const [word, setWord] = React.useState({});

    const theme = createTheme({
        palette: {
            type: 'light',
            primary: {
              main: '#223856',
            },
            secondary: {
              main: '#e6e9ed',
            },
            background: {
              default: '#223856',
            },
          },
          typography: {
            fontFamily: 'Roboto',
          },
        })

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleHomeClick = () => setFirstSearched(false)

    const handleSearch = () => {

        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
            .then(res => res.json())
            .then(data => {
                if (data.title !== "No Definitions Found") { 
                    setWord(data[0]) 
                    setBadSearch(false)
                } else {
                    setBadSearch(true)
                }
            })
    }

    React.useEffect(() => {
        if (firstRender === true && firstSearched === false) {
            if (word !== false) {
                setFirstSearched(true)
            }
        }
        setFirstRender(true)
    }, [word])


    return (
        <ThemeProvider theme={theme}>
            <div className="entire-container">
                {firstSearched === false ?
                    <div className="landing-page-container">
                        <h1 className="title">Chris' Dictionary</h1>
                        <Searchbar wordState={word} badSearch={badSearch} handleSearch={handleSearch} handleChange={handleSearchTermChange} />
                    </div>
                    :
                    <div className="definition-page-container">
                        <DefinitionCard badSearch={badSearch} handleHomeClick={handleHomeClick} handleSearch={handleSearch} handleChange={handleSearchTermChange} word={word} />
                    </div>}
            </div>
        </ThemeProvider>
    )
}