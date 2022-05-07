import React from "react"
import Searchbar from "./Searchbar"
import { Paper, Grid, IconButton } from "@mui/material"
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import HomeIcon from '@mui/icons-material/Home';
import Definition from "./Definition";

export default function DefinitionCard(props) {


    const { word, phonetic, phonetics, meanings } = props.word
    let audioLink;
    let phoneticWord;
    console.log(props.word)

    const audioLinkSetter = () => {
        if (props.word !== false) {
            for (let i = 0; i < phonetics.length; i++) {
                if (phonetics[i].audio !== "") {
                    return phonetics[i].audio
                }
            }
        }

        return null;

    }

    const phoneticWordSetter = () => {
        if (props.word !== false) {
            for (let i = 0; i < phonetics.length; i++) {
                if (phonetics[i].text !== undefined) {
                    return phonetics[i].text
                }
            }
        }
        return null;
    }

    audioLink = audioLinkSetter()
    phoneticWord = phoneticWordSetter()

    const definitionElements = meanings.map((section) => {
        return <Definition key={section.partOfSpeech} partOfSpeech={section.partOfSpeech} definitions={section.definitions} />
    })

    return (
        <Grid container justifyContent="center" alignItems="center" flexDirection="column">
            <Grid item>
                <Paper className="paper-container" style={{ height: "100%", width: "50em", marginTop: "72px", paddingBottom: "60px", marginBottom: "72px" }} elevation={24}>
                    <div className="searchbar-container">
                        <Searchbar handleSearch={props.handleSearch} handleChange={props.handleChange} />
                        <IconButton onClick={props.handleHomeClick}>
                            <HomeIcon sx={{ fontSize: 44 }} />
                        </IconButton>
                    </div>
                    <div className="card-header">
                        <div className="word-sound">
                            <h1 className="word">{word}</h1>
                            {audioLink === null ?
                                <IconButton target="_blank" href={audioLink}>
                                    <VolumeOffIcon sx={{ fontSize: 45, color: "#212121" }} />
                                </IconButton>
                                :
                                <IconButton target="_blank" href={audioLink}>
                                    <VolumeUpIcon sx={{ fontSize: 45, color: "#212121" }} />
                                </IconButton>}
                        </div>
                        <h2 className="phonetic">{`[ ${phoneticWord} ]`}</h2>
                    </div>
                    <div className="card-body">
                        {definitionElements}
                    </div>
                </Paper>
            </Grid>
        </Grid>
    )
}