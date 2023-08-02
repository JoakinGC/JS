import React, { useState } from "react";
import sun from "../../assets/images/sun.png";
import moon from "../../assets/images/moon.png";
import "./main.css";

const ThemeToggler = () => {
    const [theme, setTheme] = useState({
        image: moon,
    });

    return (
        <div className="theme__container">
            <div className="theme__head">
                <h2>Theme toggler</h2>
                <img
                    onClick={() => setTheme({ image: sun })}
                    src={theme.image}
                    alt="theme"
                />
            </div>
            <div className="text__container">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto sed voluptates nam eligendi veniam similique
                    maxime consequuntur deserunt eum laborum, facere modi
                    molestias consequatur dolor ipsum fugiat facilis magnam
                    quisquam. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Eaque recusandae quas quaerat in minima, nemo quos,
                    facilis maxime fuga officia cupiditate dignissimos fugit
                    pariatur, enim molestias quasi magnam placeat quam.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis cumque amet, ab doloribus, excepturi expedita non
                    repudiandae sequi obcaecati dolores nihil necessitatibus
                    veritatis, maiores maxime quibusdam impedit repellendus
                    aliquam earum!. Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Nemo sapiente veniam tempora nisi
                    repellendus non ea ut sunt quam, consequatur neque saepe
                    sit, fugiat adipisci sint commodi laudantium! Quis,
                    voluptatem!
                </p>
            </div>

            <div className="form__container">
                <input placeholder="Nombre" />
                <input placeholder="Apellido" />
                <div className="button__container">
                    <button className="button__exit">Exit</button>
                    <button className="button__save">Save</button>
                </div>
            </div>
        </div>
    );
};

export default ThemeToggler;
