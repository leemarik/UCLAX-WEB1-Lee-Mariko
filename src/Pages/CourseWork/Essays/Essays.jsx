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
                <p>
                    Front-End and Back-End Developer are both essential parts of
                    web development as all websites require both. However, they
                    work on different aspects of a website or website
                    application. Front-end development focuses on the visual
                    elements of the website, whereas back-end development
                    consists of the site's structure, system, data, and logic.
                </p>
                <p>
                    Front-End developers are responsible for the visual and
                    interactive aspects of the website that users directly
                    interact with. They work on the UI and UX design to make
                    sure the website is visually appealing, easy to navigate,
                    and responsive. They build elements such as buttons,
                    layouts, navigation images, graphics, animation, etc.…
                    Front-End developers use the language HTML, CSS, and
                    JavaScript to build and design the 'front-end' of the
                    website. They also utilize technologies with various
                    libraries and frameworks like React, Angular, or Vue.js to
                    improve the interactivity and functionality of the site.
                </p>
                <p>
                    Back-End developers are responsible for the server side of
                    the web application. They mainly focus on the functionality
                    and logic that operates behind the scenes and assist the
                    front end of the website. They work on tasks such as
                    building code, troubleshooting and debugging web
                    applications, database management, and framework utilization
                    to ensure that the website communicates effectively with the
                    databases and external services. Back-End developers focus
                    on using server-side programming languages such as Python,
                    Ruby, Java, Node.js, or PHP to build the core functionality
                    of the application. They also work on databases such as
                    MySQL, PostgreSQL, or MongoDB for managing and retrieving
                    data from the server.
                </p>
                <p>
                    With Front-end developers taking the role of actors and
                    Back-end developers as the behind-the-scene worker, both
                    developers play a significant role together in building a
                    web application.
                </p>
            </Essay>
            <Essay question="Q5: What are the different ways we can link files/resources to our application? / Edit: What is the difference between Absolute, Root, and Document Relative linking?">
                <p>
                    Linking files or resources to our application is a
                    significant aspect of web development. There are multiple
                    ways to link files or resources, such as CSS, JavaScript,
                    images, and other assets. Three common ways in HTML are
                    Absolute, Root, and Document Relative linking.
                </p>
                <p>
                    Absolute Linking: absolute linking provides the complete URL
                    path to the resource, including the protocol (HTTP/HTTPS),
                    domain name, and the whole path to the resource. Absolute
                    links are independent of the current location of the HTML
                    file. It can point to resources on different websites or
                    servers.
                </p>
                <p>
                    Root Linking: root linking involves specifying the path to
                    the resource relative to the root directory of the site. It
                    begins with “/” and doesn't include the domain name.
                </p>
                <p>
                    Document Relative Linking: document relative linking
                    specifies the path to the resource relative to the location
                    of the current HTML document. This path is often used when
                    resources are located in the same directory as HTML files or
                    subdirectories.
                </p>
            </Essay>
            <Essay question="Q6: What is the difference between jpg, gif, png, and svg images?">
                <p>
                    JPG, GIF, PNG, and SVG are various image file formats, each
                    having its own characteristics.
                </p>
                <p>
                    JPG: JPG is known as the Joint Photographic Experts Group.
                    It is a lossy compression format, reducing its file size by
                    discarding some image data, which means it can lose the
                    image quality as a result, especially when the compression
                    level is too high. JPG supports millions of colors and is
                    suitable for photos and images with subtle color gradients.
                </p>
                <p>
                    GIF: GIF stands for Graphics Interchange Format, a bitmap
                    image format that supports both static and animated images.
                    Gif supports up to 256 colors, making it great for simple
                    graphics, animations, and images with flat colors. It
                    displays a sequence of frames to create simple animations.
                </p>
                <p>
                    PNG: Portable Network Graphics or PNG is a file format used
                    for lossless image compression. PNG almost entirely replaced
                    the GIF, which was very common. PNG supports millions of
                    colors and is suitable for images with transparency and
                    complex color gradients. PNG is commonly used for images
                    that require transparency, such as logos, graphics, and
                    images with sharp edges.
                </p>
                <p>
                    SVG: SVG is known as Scalable Vector Graphics. SVG is a
                    vector-based image format where a set of mathematical
                    figures represents the image. Therefore, the images are
                    defined by mathematical equations rather than pixels. SVG is
                    resolution-independent and can be scaled to any size without
                    losing quality, making it ideal for logos, icons, and
                    graphics that need to be scaled to various sizes. However,
                    it is less suitable for photographs.
                </p>
                <Essay
                    question="Q7: Define the following Agile roles: Product Owner, Product Manager, Business Analyst, Scrum Master, UX designer, Developer/Engineer, QA/SDET, and DevOps.
"
                >
                    <p>Q7. Answers</p>
                </Essay>
            </Essay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
