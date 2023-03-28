import React from "react";
import "./Article.css";
import PropTypes from "prop-types";

const Article = ({imagePath, title}) => {
    return(
        <article className="about-coffee-article">
            <div className='img-box'>
                <img src={imagePath} alt="" />
            </div>
            <div className="about-coffee-content">
                <h2>
                    {title}
                </h2>
                <img src={"./Beans-logo-dark.svg"} alt="Logo" />
                <p>
                Cafeaua miroase a Rai proaspăt măcinat…
                </p>
                <p>
                5 motive pentru care trebuie sa ne alegi!
               <p> 1. Folosim o metodă de prăjire cu lemn de fag, pentru un plus de savoare;</p>
                <p> 2. Doar la Coffee House găsiți cafea de origine 100% naturală, prăjită cu 
                atenție în cantități mici, pentru a fi mereu proaspătă. </p>
                <p>3. Oferim suport pentru a obține gusturi alese din fiecare mod de preparare.</p>
                <p> 4. Suntem pasionați de ceea ce facem și încercăm să te surprindem. Dimineața 
                aducem un zâmbet în fiecare ceașcă de cafea.</p>
                <p> 5. Fiecare client este special. Orice experiență plăcută ne recomandă. Ne place să realizăm 
                legături de durată, pentru că orice client ne este și prieten.</p>
                </p>
            </div>
        </article>
    );
};

Article.propTypes = {
    imagePath: PropTypes.string,
    title: PropTypes.string
};

export default Article;