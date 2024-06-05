import React from 'react';

function TopicsPage() {
    return (
        <>
    <h2>Web Dev Concepts</h2>
    <nav class="local">
        <a href="#webServers">Web Servers</a>
        <a href="#frontendDesign">Frontend Design</a>
        <a href="#optimizingImages">Optimizing Images</a>
        <a href="#favicons">Favicons</a>
        <a href="#cascadingStylesheets">Cascading Stylesheets</a>
        <a href="#forms">Forms</a>
        <a href="#express">Express</a>
        <a href="#javascript">JavaScript</a>
    </nav>
    <article id="webServers">
        <h3>Web Servers</h3>

        <p>A <strong>designated home page</strong> for a website is usually the default page that is used to navigate 
            throughout the website, through the use of links. This relates to a website's and server's 
            index file as it allows the user of the website to go through the links, or directories, 
            of the website and server to find the resource they are looking for in the index. The web page 
            is also configured to return to the designated home page whenever it receives a <strong>GET 
            request</strong>.</p>

            <p>When looking at a file's details from the web server, it gives a lot more details when compared to 
            looking at the file from the local computer. In general, the network tab output screen shows us the 
            <strong>request URL, request method, status code, and remote, or IP, address</strong>. As well as the type, 
            initiator, and size of the file. When viewed on the web server, the network output screen gives details 
            about the <strong>HTTP request and HTTP response</strong>, whereas when viewed on the local computer, 
            it does not give many details, if any.</p>

        <p>Favicon.ico has a status 200 because the response body has the needed information, therefore the server 
            was able to process the request. However, main.css and main.js have status code 404, which means the
            request source was not found on the server, therefore the server program was not able to process the
            request due to a client error.</p>

        <p>The <strong>scheme</strong> is "https", that identifies the protocol used to request the resource. 
            The <strong>subdomain</strong> is "web.engr" which brings us to the College of Engineering, the 
            <strong>host domain</strong> is "oregonstate.edu" which brings us to Oregon State. The <strong>resources         
            </strong> are under "~aokial" which is the designated homepage, and "a1-aokial" is the path to a 
            resource within the ~aokial resource.</p>
    </article>
    <figure class="gallery">
                    <img
                        src="../pictures/heart-latte.png"
                        alt="Heart latte art I made."
                        title="&copy; 2024 Allyson Aoki"
                    />
            </figure>
    <article id="frontendDesign">
        <h3>Frontend Design</h3>

        <p><strong>Frontend design</strong> is about creating the most appropriate experience for users. This is done
        by the use of visual design, the graphical user interface, otherwise known as the GUI, and the interactive experience, all making user
        the different aspects of the web app are cohesive. When it comes to visual design, things that are important include 
        a consistent color, font, and typography theme, as well as a photography, icon, and illustration theme, and  
        easy to use and effective navigation systems. In regards to <strong>response time</strong>, there are three 
        important time limits. 0.1 second is the time limit for a system to respond with an interaction that feels instantaneous
        to a user. 1 second is the time limit for a user's flow of thought to remain interrupted. Anything longer will make 
        the user consciously notice the delay. 10 seconds is the time limit for keeping a user's attention, anything longer will 
        cause the user to begin to think about other tasks. Some <strong>guidelines</strong> to address long response times include 
        a wait/busy cursor for a delay of 2 to 10 seconds, and a progress bar that shows the load percentage for anything 
        longer than 10 seconds. When it comes to <strong>content depth levels</strong>, a user should know where they are in the 
        system. A guideline to keep in mind to help keep them coming back to the web app would be to identify where 
        a user would traverse 5 or more levels in order to perform an action, and find ways to reduce the amount of traversals. 
        Using <strong>breadcrumbs</strong> to help maintain user orientation could also help a user be conscious of where they are 
        in the web app. The <strong>use of input devices</strong> should also be considered when designing the interface of the 
        web app. Mouse click and keyboard inputs should average around 1 second per input, whereas moving the cursor around the screen 
        should take around 1.5 seconds. Switching from one input to another should also take only about 0.5 seconds. Guidelines to 
        keep in mind include minimizing the amount of shifts between devices necessary.</p>


        <p>What are the <strong>"5 E's" of usability</strong> for web apps, and what do they mean?</p>
        <dl>
            <dt><strong>Effective</strong></dt>
            <dd>A usable website is effective at helping users achieve their goals, and helps them achieve accurate
                results.</dd>

            <dt><strong>Efficient</strong></dt>
            <dd>A usable website is efficient, so users can perform tasks with the least number of steps and get their
                results quickly.</dd>

            <dt><strong>Easy to Navigate</strong></dt>
            <dd>A usable website is easy to use, especially for users that have not used it before. It should allow the
                user to immediately understand how to locate their goal and remember how to use it next time.</dd>
            
                <dt><strong>Error-free</strong></dt>
            <dd>A usable website is error-free to avoid accessibility and availability issues. This is achieved through
                learning a user's common errors and how they occur to prevent potential roadblocks.</dd>
            
                <dt><strong>Enjoyable/Engaging</strong></dt>
            <dd>A usable website is enjoyable to use and/or engaging, and fits the unique needs of its intended audience in
                terms of both content and design.</dd>
        </dl>

        <p><strong>Page layout tags</strong> break up the flow of a web app's content and include the following tags. The
        <strong>&lt;header&gt;</strong> tag denotes the banner/masthead for a web app. The <strong>&lt;nav&gt;</strong>tag takes 
        users from the current page to other pages. The <strong>&lt;main&gt;</strong> tag denotes the primary block that holds 
        content. The <strong>&lt;section&gt;</strong> tag makes a thematic grouping of content. The <strong>&lt;article&gt;</strong> 
        tag denotes a single specific topic with a second-level headline. The <strong>&lt;aside&gt;</strong> tag floats to the 
        left or right of an article with a different style, including content relating to that article. The <strong>
        &lt;figure&gt;</strong> tag is used similarly to aside, but includes media with a corresponding &lt;figcaption&gt;. 
        The <strong>&lt;blockquote&gt;</strong> tag is designed for extended quotations that are too long for a paragraph. 
        The <strong>&lt;footer&gt;</strong> tag resides below &lt;main&gt; and holds legal and contact information and has 
        links to critical pages. Finally, the <strong>&lt;div&gt;</strong> tag is a placeholder for dynamic content and can 
        also be used to divide content when no other element makes sense.</p>


        <p>How do anchors link to <strong>external content, internal content, and from page-to-page content</strong>?</p>
        <ol>
            <li><strong>External anchors</strong> link to another source such as a web app. This is done using an <strong>absolute path</strong>, 
                which is a complete URL, including scheme, subdomains, main domain, directory, and file names, to a resource.</li>
            <li><strong>Internal anchors</strong> link to another element on the same page. It is good practice to do this 
                using <strong>relative paths</strong>, which is done by pointing to a location relative to the file in which we 
                use that URL, moving through directories.</li>
            <li><strong>Page-to-page</strong> navigation is done using decorative or button-like anchors, acting as 
                navigational points, that allow users to click and navigate from one page to another.</li>
        </ol>
    </article>
    <figure class="gallery">
                    <img
                        src="../pictures/cat-latte.png"
                        alt="Cat latte art I made."
                        title="&copy; 2024 Allyson Aoki"
                    />
            </figure>
    <article id="optimizingImages">
        <h3>Optimizing Images</h3>

        <p>The 6 major specifications for images are <strong>descriptive file names, small file size, exact dimensions, 
            correct file format, reduced resolution,</strong> and <strong>color mode</strong>. Descriptive file names are 
            important because they improve search engine optimizations by helping search engine bots categorize images for users. 
            Small file sizes and exact dimensions are important to help reduce load time. Reducing file size to as small as 
            possible and cropping the size of images to fit within a space of your web page will produce faster image load 
            times. Using the correct file format is also important as online photos are usually .JPG, line-art like images are 
            usually .GIF or 8-bit .PNG, and graphics with transparent elements need 24-bit .PNG. Failure to use these file formats 
            could lead to loading issues within the web page. Reduced resolution helps monitors displaying the web page render pixels 
            efficiently, with a good range being 72-300 pixels per inch. Lastly, color mode is important for the display of colors 
            on the web page. <strong>RGB</strong> is standard for .PNG, .JPG, .SVG, and .WebP, and <strong>Indexed</strong> is for .GIF 
            ,and sometimes .PNG. Avoid using CMYK color modes, as they are used for printing and dull the colors when viewed on the web.</p>

        <p>File formats that are most appropriate for line-art images like logos and icons are usually <strong>.GIF</strong> 
            and sometimes <strong>8-bit .PNG</strong>. This is because .GIF files can have 8-bit transparency along with animation 
            that are usually used for line-art graphics. Only some cases of .PNG are appropriate since .PNG files have the 
            transparency aspect, the alpha channel, however, if compressed, the image may become pixelated. For photos, the most 
            appropriate file formats include typically <strong>.JPG</strong> and <strong>.WebP</strong>. Both of these file types 
            are used only for photographic images since photos are very detailed, causing file sizes to be too big for web servers. 
            These file types make it easy to compress images into usable file sizes, with .WebP files being able 
            to be compressed smaller than .JPG files. Another file that is optimized for two-dimensional graphics such as line-art, 
            charts, and illustrations would be the <strong>.SVG</strong> file. These types of files are able to be scaled up and down 
            without losing resolution.</p>
    </article>
    <figure class="gallery">
                    <img
                        src="../pictures/skinny-heart-latte.png"
                        alt="Heart latte art I made."
                        title="&copy; 2024 Allyson Aoki"
                    />
            </figure>
    <article id="favicons">
        <h3>Favicons</h3>

        <p>A <strong>favicon</strong> is the symbol in the browser tab on a smartwatch, cellphone, large display, or search engine 
            results list to quickly identify a website, app, or company logo. They are also known as <strong>favorites icons</strong>, 
            or <strong>touch icons</strong>. Favicons begin with a symbol that gets modified to work on different devices, being saved as 
            multiple formats for different devices and browsers. Each file is then specifically picked by certain browsers or devices and 
            are saved and anchored to a bookmark or favorites list, along with a device screen or search engine results list. Favicons are 
            commonly saved as <strong>.ICO</strong>, .SVG, and .PNG file formats, but can also be saved as .GIF as well.</p>
    </article>
    <figure class="gallery">
                    <img
                        src="../pictures/leaf-latte.png"
                        alt="Leaf latte art I made."
                        title="&copy; 2024 Allyson Aoki"
                    />
            </figure>
    <article id="cascadingStylesheets">
        <h3>Cascading Stylesheets</h3>

        <p><strong>Cascading Stylesheets</strong> define how a web app's structure, content, and components should look and behave
            to improve usability, readability, legibility, and adhere to brand requirements whenever applicable. One benefit of CSS is that it can
            override predefined HTML style elements as it uses its own syntax to make revisions. Other benefits of CSS include browser compatibility,
            interactivity, optimized performance, consistency, and responsive design.</p>

        <p>The first way to incorporate styles is through <strong>externally linked stylesheets</strong>. This is typically the most efficient
            and preferred method to use for web apps. This is done through <strong>&lt;link&gt;</strong>ing a stylesheet file in the 
            global &lt;head&gt; area of a website. Externally linked stylesheets allow a web developer to define styles in a separate file, which 
            then allows the style to be reused across multiple HTML documents. It also allows for easier maintenance, as updating the external 
            stylesheet updates all pages linked to it. Incorporating style is also done through importing a CSS file using <strong>@import</strong>, 
            which is the second way to incorporate styles. This method allows for dynamic loading of stylesheets, which means you can load styles conditionally, 
            based on certain criteria. It also allows for use across multiple files and is good for organizing and maintaining a large database. A third way is 
            through <strong>embedding</strong> within &lt;style&gt;&lt;/style&gt; tags. This allows you to define styles for multiple elements on a single page. 
            For smaller projects, this can be a convenient way to quickly prototype small projects directly in the HTML document. It also means a web 
            developer does not need to maintain any external file dependencies. A fourth way would be through <strong>inline styles</strong>, however it should 
            not be used as it is too old to use. The last method is in regular <strong>JavaScript</strong> by manipulating the Document Object Model. The use of 
            Javascript can be used to create user interactive interfaces, handle events such as clicks or keyboard presses, add visual effects, and integrate 
            form validation to ensure user input meets certain criteria before form sumbission.</p>
    </article>
    <figure class="gallery">
                    <img
                        src="../pictures/happy-face-latte.png"
                        alt="Happy face latte art I made."
                        title="&copy; 2024 Allyson Aoki"
                    />
            </figure>
    <article id="forms">
        <h3>Form Usability and Accessibility</h3>

        <p>
            There are six major goals for accessible forms. The first is to <strong>provide clear instructions</strong> above the form and in the labels. This 
            helps users with cognitive disabilities or those who rely on screen readers a better understanding of how to fill out the form correctly
            and its purpose. The second goal is to <strong>explain to the user the reason you are gathering data and which fields are required.</strong> This ensures 
            the user knows why certain information is being requested and helps people make informed decisions about providing information. The third goal is <strong>
            setting the first field to autofocus</strong>. Doing this helps shift the user's focus to the input area and allows them to input information without using 
            the mouse, which improves accessibility. The fourth goal is to <strong>ensure that each form can be filled out with a keyboard.</strong> This is important as some 
            users may have mobility impairments or not have access to a mouse or trackpad, and keyboard navigation broadens accessibility as it allows users to move through 
            fields of the form with just a keyboard. The fifth goal is <strong>tab indexing for forms</strong>. This is important as it lays out the order in which the form 
            should be filled and reduces the need for a mouse or trackpad input. The last goal is to <strong>ensure validation messages are screen-readable</strong>. Clear 
            validation messages help users identify and correct errors, enhancing accessibility as they provide clear feedback.
        </p>

        <p>
            The major tags in in HTML forms are <strong>&lt;form&gt;, &lt;fieldset&gt;, &lt;legend&gt;, &lt;label&gt;, &lt;input&gt;, &lt;select&gt;, &lt;option&gt;, 
            &lt;textarea&gt;, and &lt;button&gt;</strong>. The &lt;form&gt; tag holds general content such as paragraphs, headers, and images, as well as &lt;input&gt; and 
            &lt;textarea&gt; elements for users to type or select data. There are two important attributes to &lt;form&gt; and they include the <strong>action</strong>, which 
            specifies where the request from the form should be sent, which can be either a relative path or URL. The second important attribute is <strong>method</strong>, 
            which specifies the HTTP method to be used in the HTTP request sent when the form was submitted. There are two typical values for the method attribute and they are 
            <strong>GET</strong> or <strong>POST</strong>. &lt;fieldset&gt; and &lt;legend&gt; separate form controls into logical groups and help make forms be more accessible 
            for the visually impaired. The &lt;fieldset&gt; contains a border and padding to separate content, and the &lt;legend&gt; is on top of the border and includes prompts 
            to help users understand the group's purpose. &lt;label&gt; helps the user understand the purpose of their data entry, and includes the <strong>for=""</strong> 
            attribute to match with the form control's id="". The &lt;input&gt; tag is used to receive data from the user. It has a <strong>type=""</strong> attribute that changes 
            how it is displayed, used, or what other attributes can be included. Some different types include <strong> email, checkbox, and radio</strong>. It is also important to provide 
            a <strong>name=""</strong> attribute so the server knows which part of the form each data item is associated with when data submitted by the form is received by the server. 
            The <strong>required</strong> attribute is also important to avoid server crashes due to an overload from a malicious bot sending in multiple forms. &lt;select&gt; and 
            &lt;option&gt; elements provide the user with a drop-down list of choices that send the user choice in the request. They contain the <strong>selected</strong> attribute 
            that will select an option by default which can be overridden by the user. The &lt;textarea&gt; element allows users to input multiple lines of text and gets its own 
            extensive list of attributes and &lt;label&gt;. Lastly, the &lt;button&gt; element is used to send a form submission and can be activated by a mouse click, keyboard 
            activation, voice command, or finger touch. It has an <strong>action=""</strong> attribute that is specified by the &lt;form&gt; tag.
        </p>

        <p>
            The HTML elements and attributes that can be styled to improve usability include fieldset, legend, label, input types, <strong>:focus, :required, :valid, :invalid, 
            ::placeholder, :disabled, and :enabled</strong>. Fieldset can be stylized by changing the border type, color, and width, as well as adding a margin and extra padding to 
            keep labels and controls from touching the edges. The legend can be stylized to incorporate better positioning properties, font size, and color to differentiate it from 
            the labels. The labels can be stylized to appear above, rather than inline. Input types can be stylized to help accommodate a larger range of users by increasing 
            font-size and padding, as well as inheriting the font-family to keep styling consistent. The :focus attribute helps users know where to start typing in a form as it autofocuses, 
            or puts the cursor in the first field for immediate typing, which should be accompanied by a color change to make it obvious to the user that they can start typing. The 
            :required field is important to let users know which fields they must fill in and which they can ignore, which is usually accompanied by an asterisk. To help users understand if 
            they fit the input requirements, changing the styling on :invalid and :valid attributes to have a different border color is a good indication. The ::placeholder's color can be changed 
            to improve contrast and readability when the input has the mouse's focus. In forms where one input relies on another, the :disabled and :enabled 
            attributes keep parts of a form from being accessed until the user provides the necessary input.
        </p>
    </article>
    <figure class="gallery">
                    <img
                        src="../pictures/solid-heart-latte.png"
                        alt="Heart latte art I made."
                        title="&copy; 2024 Allyson Aoki"
                    />
            </figure>
    <article id="express">
        <h3>Node, npm, and Express</h3>

        <p>
            <strong>Node</strong> is an open-source, cross-platform runtime environment for developing server-side and networking applications. These applications are written in 
            JavaScript and can be run within runtime of Node.js. Node also has an extensive library with various JavaScript modules which can simplify the development of web applications 
            that use Node.js. Node has open-source packages that have been developed and tested by the Node developer community called <strong>npm</strong> or the Node Package Manager. 
            npm is an online repository for publishing Node.js packages and can be searched for on the Node package manager website. It is also a command-line utility that can install 
            packages from the online repository and manage the dependencies we define for our projects. <strong>Express</strong> is a framework that has been developed for building web applications 
            using Node.js. It provides an <strong>Application Programming Interface</strong>, or APIs of common tasks that web applications need to do such as the ability to get, post, and delete data, and 
            define the ports and routes data will take. We can also serve static files, create templates that dynamically build responses that incorporate that data, and use middleware to handle 
            requests made within the route the data takes.
        </p>
    </article>
    <figure class="gallery">
                    <img
                        src="../pictures/flower-latte.png"
                        alt="Flower latte art I made."
                        title="&copy; 2024 Allyson Aoki"
                    />
            </figure>
    <article id="javascript">
        <h3>JavaScript</h3>

        <p>
            The main data types in JavaScript are <strong>numbers, Boolean, strings and symbols, special values, and objects</strong>. Numbers in JavaScript only come in one type, 
            <strong>double-precision floating-point numbers</strong>. Boolean data types have two values, <strong>true and false</strong>, and should only be used in conditions. Strings 
            are enclosed in single or double quotes, strings that only contain characters are called <strong>string literals</strong>, and strings that contain expressions are called 
            <strong>template literals</strong>, and are enclosed in backticks. Special values in JavaScript indicate the absence of a value, with <strong>undefined 
            and null</strong>. Objects are a composite data type that is composed of <strong>key-value</strong> pairs, where each key is a string or symbol, and the corresponding value 
            can be of any data type. These key-value pairs are also called the <strong>properties</strong> of the object.
        </p>

        <p>
            Objects in JavaScript can be created, read, updated, and deleted, also referred to as CRUD. Creating or updating a value is done using the <strong>.</strong> operator on the variable 
            in the assignment statement. Reading a value is done using the . operator as well, just without the assignment that is present in creating or updating a value. Deleting a value is 
            used by using the <strong>delete</strong> operator. <strong>Arrays</strong> are objects whose property names are the strings, and properties must be of a string data type. 
            <strong>JSON</strong> stands for JavaScript Object Notation and is used for exchanging data between applications as it is programming language independent. JSON is important because 
            although objects are represented differently in various programming languages, using JSON we can map objects in a program to a string in JSON format, and create objects in a program 
            from a string in the JSON format.
        </p>

        <p>
            <strong>Conditional branching</strong> using <strong>if and switch</strong> statements are supported in JavaScript. When using if statements, it will execute if the provided expression 
            is evaluated to be true. We can also add additional <strong>else if</strong> branches with expressions and/or an <strong>else</strong> statement which is executed if none of the other 
            statements were evaluated to be true. Switch statements use the same logic as if-then-else statements, except instead of looking if each statement is true and executing if it is, it checks 
            though different cases and executes the matching case branch. The <strong>conditional operator</strong> is used to code a simple decision with the format <strong>
            condition ? expression1 : expression 2</strong>. The condition gets evaluated and if it is true, expression1 is evaluated and its value is returned. Otherwise, expression2 is evaluated, and 
            its value is returned. <strong>Loops</strong> in JavaScript include <strong>while, do while, for, for of, and for in</strong> loops. While loops have an expression that is evaluated and 
            executes the body of the loop while the expression is true. Do while loops are the same as while loops, except that always execute once, then check the expression to be evaluated. For loops 
            have an initialization statement, loop condition, and repeating statement, and keep looping until the loop condition evaluates to false. For of loops are used to iterate over the elements 
            of an iterable value, such as strings or arrays. For in loops are used to iterate over the properties of an object.
        </p>

        <p>
            In <strong>object-oriented programming</strong>, objects are expected to have an <strong>identity, state, and behavior</strong>. In JavaScript, objects are a set of name-value pairs, with 
            the names of these pairs also called the properties of the object, and each property having the ability of being created, read, modified, and deleted. 
        </p>
        <p>
            <strong>Functions</strong> in JavaScript are "first-class" values, where we can assign function to variables, define functions that receive other functions as arguments, and define functions 
            that return functions. A <strong>higher-order function</strong> is a function that receives a function as an argument.
        </p>
    </article>
        </>
    );
}
export default TopicsPage;
