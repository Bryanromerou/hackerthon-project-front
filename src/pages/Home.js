import React from 'react';
import Navbar from "../components/Navbar";

const Home = () => {

    return (
        <>
        <section className="jumbotron landing-section lheader">
          <h1>
            This is the landing section.
          </h1>
        </section>
        <section className="container-fluid landing-section local-updates">
          <h1>
            This is where local updates will go.
          </h1>
        </section>
        <section className="container-fluid landing-section pinned-events">
          <h1>
            This is where pinned events will go.
          </h1>
        </section>
        <section className="container-fluid landing-section trending-topics">
          <h1>
            This is where trending topics will go.
          </h1>
        </section>
        </>
    );
}

export default Home;
