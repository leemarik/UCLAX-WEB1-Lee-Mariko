import styled from "styled-components";

/* Component -----------------------------*/
import Essay from "./Essay.jsx";

const Essays = () => {
    return (
        <EssaysStyled className="Essays">
            <h2>Essays</h2>
            <Essay question="Q1: Explain the difference between HTML, CSS and JavaScript.">
                <p>
                    HTML, CSS, and JavaScript are all basic technology used to
                    build and design websites. Reviewing from last class, it
                    seems that each of them plays a unique role in the process
                    of web development.
                </p>
                <p>
                    Hypertext Markup Language, abbreviated to HTML, defines the
                    structure of the content. Using a series of tags o define
                    each elements such as title, headings, images, links, etc…,
                    HTML is used to organize the information rather than how it
                    appears visually. Ultimately, HTML is the backbone of the
                    web page to organize and structure the web page's contents.
                </p>
                <p>
                    CSS or Cascading Style Sheets is used to visually style and
                    present web pages. Just like from the Sun And Moon lesson,
                    CSS allows the web page to style the image of the sun and
                    moon with a boarder, margin, padding, background color, and
                    so on. It also allows developers to visually design the web
                    page's layout, colors, fonts, and other visual features of
                    HTML elements. The separation of HTML and CSS, helps
                    distinguish between content and presentation, allowing
                    developers to make changes to the website's appearance
                    easily.
                </p>
                <p>
                    JavaScript allows developers add interactivity and behavior
                    to web pages. Interactive features such as dropdown menu,
                    forms, image sliders are all created using JavaScript. By
                    dynamically manipulating the content and styling of HTML and
                    CSS, JavaScript can create interactive elements for users to
                    engage in.
                </p>
            </Essay>
            <Essay question="Q2: What is the difference between Git and Github?">
                <p>
                    Git and GitHub serves different purposes. Git is a version
                    control system that allows developers to change their code.
                    Git is designed for developers to manage source code and any
                    changes that are made to the files over time. Therefore,
                    developers are allowed to make branches, merge code, and
                    undo any changes, ultimately acting like a history log.
                    GitHub is a web-based hosting service for git repositories
                    where it provides a centralized platform where developers
                    can store Git repositories on remote servers. Git Hub
                    technically makes Git more user-friendly, providing a
                    platform for developers to share code to other developers.
                </p>
                <p>
                    Git is the most popular VCS that is used today. It is
                    open-source, free, and designed to handle any size of
                    project with speed and efficiency. Git also allows
                    developers to work on various branches of code
                    simultaneously and merge them when they are ready, also
                    known as non-llinear development.
                </p>
                <p>
                    GitHub on the other hand is a platform for a place for Git
                    repositories, making it easy to share code, collaborate, and
                    contribute to projects. GitHub is a Cloud-based, providing
                    web interface to view file changes. It also hosts a large
                    community of developers and various open-source projects,
                    making it a great platform to collaborate.
                </p>
                <p>
                    Git and GitHub are related and usually used together.
                    Developers would use Git to manage their source code on
                    their machines, and then push their cod to a repository
                    hosted on GitHub, which allows easier collaboration and
                    sharing of code. In summary, Git distributes version control
                    system that operate locally. While, GitHub is a web host
                    service built around Git that offers remote hosting,
                    collaboration features, and the rest of the world to see it.
                </p>
            </Essay>
            <Essay question="Q3: What is the difference between JQuery and React?">
                <p>
                    jQuery and React are both used in front-end web development,
                    popular in JavaScript libraries. However, jQuery and React
                    have different purposes and approaches. jQuery is a “write
                    less, do more” or “lightweight” JavaScript library, allowing
                    developers to build web apps easier using JavaScrip. On the
                    other hand, React is a JavaScript library for building UI or
                    user interfaces, allowing HTML to be embedded within
                    JavaScript.
                </p>
                <p>
                    jQuery is known to be relatively easy to learn and has been
                    widely used in the past. It simplifies complex calls from
                    JavaScript called AJAX and DOM manipulation. Therefore,
                    jQuery is made to make shifting from creating traditional
                    websites to developing dynamic web apps effortlessly.
                </p>
                <p>
                    React was created by Facebook in 2011, known to be an
                    open-source, declarative, efficient, and flexible JavaScrip
                    library. Its main purpose has been building interactive UI
                    elements. As React is relatively new, it has gained great
                    popularity due to its understandable approach to UI
                    development and its community. React allows developers to
                    build a large-scale dynamic web app at their convenience.
                </p>
            </Essay>
            <Essay question="Q4: What is the difference between a Front-End and Back-End Developer?">
                4. This is my answer
            </Essay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
