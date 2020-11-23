import React from "react";

function Home() {
  return (
    <div className="container" id="aboutMe">
      <div className="row">
        <div className="col-12">
          <h2 className="border-bottom pb-3 pt-3">About Me</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img
            className="float-left pr-3 pb-3"
            src="./me2.jpg"
            width="62.5%"
            id="me"
          />
          <p>
            My name is Kevin Miller. I am 28 years old and live in Chicago. I
            graduated with a bachelor's degree in Economics from DePaul
            University in 2014. Prior to this course I had been working in
            finance for Northern Trust Corporation for close to six years.
            There, I managed a small team tasked with valuing 401ks and pensions
            on a daily basis.
          </p>
          <p>
            In the last year or so I was at Northern Trust, we began working
            with some developers to automate and track a lot of our daily tasks.
            I have always been interested in computers and technology and began
            learning some coding on my own and with friends. It was then that I
            realized I was really enjoying the challenge of development and
            looked for ways to begin a career change. I am more than excited for
            this course and to continue learning! In my free time, I enjoy
            playing video games (CS:GO and other FPS games mostly), reading,
            watching sports, TV or movies, and spending time with my cat and
            fiancee.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
