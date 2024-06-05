import React from 'react';
import { IoMdFlower } from "react-icons/io";

function HomePage() {
    return (
        <>
        <h2><i><IoMdFlower /></i> Welcome to Ally's Web Dev Portfolio! <i><IoMdFlower /></i></h2>

        <article id="career">
            <h3>About this app</h3>

            <p>After recieving a Bachelor's Degree in Computer Science with a focus on simulation and game development, 
                I plan on looking into working for companies that work on and develop software, preferably games, as 
                game development was the reason I went into computer science since it is something I had been interested in 
                ever since I was a little kid.
            </p>
            <figure class="gallery">
                    <img
                        src="../pictures/latte-art-among-us.png"
                        alt="Latte art I made that unintentionally looks like the character from Among Us."
                        title="&copy; 2024 Allyson Aoki"
                    />
            </figure>
        </article>
        
        <article id="technologies">
            <p>The major technologies used in making this website are Semantic HTML, CSS, JavaScript, 
                Express, MongoDB, Mongoose, REST, and React.
            </p>
            <dl>
                <dt><strong>Semantic HTML</strong></dt>
                <dd>Use of Semantic HTML was used in the early stages of creating this web app. It was used to layout the 
                    necessary information and separate it into proper groups.
                </dd>
                <dt><strong>CSS</strong></dt>
                <dd>Cascading Style Sheets, otherwise known as CSS, was used in styling this web app. This was done by the 
                    implementation of fonts, a color scheme, and borders and spacing between content. It also helped determine 
                    how each element interacted with each other.
                </dd>
                <dt><strong>JavaScript</strong></dt>
                <dd>Through the use of JavaScript's variables, data types, objects, arrays, JSON text, conditionals, loops, 
                    object-oriented programming, functions, and functional programming, I was able to enhance the interactivity, 
                    functionality, and dynamism of this web app.
                </dd>
                <dt><strong>Express</strong></dt>
                <dd>With Express providing an API of common tasks web apps need to do, it helped me in being able to get, post, 
                    and delete data, as well as define ports and routes data will take.
                </dd>
                <dt><strong>MongoDB</strong></dt>
                <dd>Using a NoSQL database such as MongoDB, it allowed this web application to store and manage data.
                </dd>
                <dt><strong>Mongoose</strong></dt>
                <dd>Being used alongside MongoDB, Mongoose provides a schema-based solution for modeling application data as it 
                    interacts with MongoDB databases.
                </dd>
                <dt><strong>REST</strong></dt>
                <dd>REST emphasizes a stateless client-server communication model and defines a set of constraints for building this 
                    web app as scalable and reliable.
                </dd>
                <dt><strong>React</strong></dt>
                <dd>React is a JavaScript library that is used to build user interfaces, or UIs.
                </dd>
            </dl>
            </article>
            </> 
    );
}

export default HomePage;