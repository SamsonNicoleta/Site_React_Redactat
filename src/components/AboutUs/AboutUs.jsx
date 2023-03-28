import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
    return(
        <article className="about-us-article">
            <h2>Despre Noi</h2>
            <img src={"./Beans-logo-dark.svg"} alt="logo" />
            <div className="beansLogo"></div>
            <p className="text">
            Cafeneaua noastră s-a născut din dragostea pentru cafeaua indiană bună, 
            de specialitate dar și pentru că noi credem în poveștile spuse la cafea, 
            în cafeaua care capătă gust de poveste atunci când reușești să te rupi din iureșul 
            cotidian ca să te întâlnești cu cineva drag sau în cele care capătă sens, când ne așternem gândurile, 
            bându-ne cafeaua. Coffe House te așteaptă la o cafea exclusivistă, cu gust de poveste, care își așteaptă, la rândul ei, 
            poveștile. În inima Edinețului, foarte aproape de centrul orașului, Coffe House deschide gustul 
            de povești cu o cafea cu totul specială. Băută în tihnă sau luată rapid la pachet. Pentru că fiecare poveste are ritmul ei.
            </p>
            <p className="text">
            Coffee House, una dintre cafenelele din orasul Edineț mai exact, o cafenea in aer liber la umbra copacilor.
            Prezenta o atmosfera racoroasa si confortabila bogata in oxigen. Pentru cei dintre voi care doresc să petreacă 
            o după-amiaza fără teama de a fi expuși la căldura soarelui,
             vă rugăm să treceți pe aici.Pentru meniul alimentar, vă oferim diverse tipuri de  cafea și alte gustări.
            </p>
        </article>
    );
};

export default AboutUs;