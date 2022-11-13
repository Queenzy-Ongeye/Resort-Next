import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Image from "next/image";
import "../styles/Home.module.css";
// import { Gabriella } from '@next/font/google';

// const gabriella = Gabriella();
function HomePage() {
    return (
        <main>
            {/* Add Bootstrap Navigation Bar for Testing */}
            <nav
                className="navbar navbar-dark bg-dark fixed-top"
                aria-label="First navbar example"
            >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        TembeaResort
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarsExample01"
                        aria-controls="navbarsExample01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample01">
                        <ul className="navbar-nav me-auto mb-2">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="root">
                <div style={{
                    zIndex: -1,
                    position: "fixed",
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "black",
                    backgroundBlendMode: "overlay",

                }}>
                    <Image
                        src="/images/roberto.jpg"
                        alt="beach"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div style={{
                    // background: "white",
                }}>
                    <h1 style={{
                        paddingTop: "50vh",
                        fontFamily: "Monospace",
                        textAlign: "center",
                        color: "black",
                        fontSize: "50px"

                    }}>Welcome to Tembea Resort</h1>
                    <p style={{
                        fontFamily: "cursive",
                        textAlign: "center",
                        color: "black",
                    }}>A place of tranquility and peace</p>
                </div>
            </div>

            <div style={{
                background: "white",
                height: "100vh",
                marginTop: "5%",
                width: "100vw",
                marginLeft: "auto",
                marginRight: "auto",
            }}>
                <h2 style={{
                    textAlign: "center",
                    fontSize: "25px"
                }}>About us</h2>

                <div style={{
                    display: "flex",
                }}>
                    <div>
                        <Image
                            src="/images/one.webp"
                            layout="fixed"
                            width={600}
                            height={500}
                        />
                    </div>
                    <div>
                        <p>
                            Journey through our worlds from our historic Heritage hotel to the
                            worldliness of modern Africa and from our lush, tropical beach resort
                            and spa spread over 22 acres to each adventure of our Safari Lodges
                            across National Parks and Conservancies.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default HomePage;