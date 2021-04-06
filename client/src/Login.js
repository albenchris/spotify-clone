import React from 'react'
import { Container } from 'react-bootstrap'

const AUTH_URL = 
    "https://accounts.spotify.com/authorize?" + 
    "client_id=" + "bb3f9e12b3e245a6bfe44b4f1e1f5543" +
    "&response_type=" + "code" +
    "&redirect_uri=" + "http://localhost3000" +
    "&scope=" + // listed below
        "streaming" + "%20" +
        "user-read-email" + "%20" +
        "user-read-private" + "%20" +
        "user-library-read" + "%20" +
        "user-library-modify" + "%20" +
        "user-read-playback-state" + "%20" +
        "user-modify-playback-state"

export default function Login() {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <a className="btn btn-success btn-lg" href={AUTH_URL}>
                Login With Spotify
            </a>
        </Container>
    )
}