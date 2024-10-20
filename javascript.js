// Function to load content based on button clicks
function navigateTo(section) {
    const content = document.getElementById('content');
    content.style.display = 'block'; // Show the content section
    let htmlContent = '';

    switch (section) {
        case 'about':
            htmlContent = `
                <h2>About Me</h2>
                <p>Hi, I’m Hayden Yi, an early high school graduate and native English speaker passionate about teaching English to beginners.</p>
                <p>My goal is to inspire and empower my students to achieve their language learning objectives.</p>
            `;
            break;
        case 'experience':
            htmlContent = `
                <h2>Experience</h2>
                <h3>Private English Tutor</h3>
                <p>Freelance - Ongoing</p>
                <p>Tutoring beginners in conversational and academic English, focusing on grammar and speaking skills.</p>
            `;
            break;
        case 'projects':
            htmlContent = `
                <h2>Projects</h2>
                <p>Currently developing lesson plans and resources for English learners. Check back for more updates.</p>
            `;
            break;
        case 'skills':
            htmlContent = `
                <h2>Skills</h2>
                <ul>
                    <li>Native English fluency</li>
                    <li>Basic knowledge of Korean (TOPIK Level 1)</li>
                    <li>Clear and effective communication</li>
                    <li>Ability to create beginner-friendly learning materials</li>
                </ul>
            `;
            break;
        case 'contact':
            htmlContent = `
                <h2>Contact</h2>
                <p>If you’d like to get in touch, please email me at: <a href="mailto:haydenyi@example.com">haydenyi@example.com</a></p>
            `;
            break;
        case 'testimonials':
            htmlContent = `
                <h2>Testimonials</h2>
                <blockquote>
                    <p>“Hayden is a fantastic teacher! He makes learning fun and engaging.” - Student A</p>
                </blockquote>
                <blockquote>
                    <p>“I improved my English significantly thanks to Hayden's tutoring!” - Student B</p>
                </blockquote>
            `;
            break;
        default:
            htmlContent = '<h2>404 - Not Found</h2>';
    }

    content.innerHTML = htmlContent;
}
