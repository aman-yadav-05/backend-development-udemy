import express from "express";

const app = express();
const port = 3000;
app.get("/", (req, res) => {
    res.send("<h1>hello from <em>express.js</em></h1> <p>hello from aman yadav i am going to learn express.js from angela yu </p> <a href='about'>about</a> <a href='contact'>contact</a>");
});

app.get("/about", (req, res) => {
    res.send("  <h2>Introduction</h2><p>Hello, I am Aman Yadav, a resident of Janjgir, Chhattisgarh. I have a passion for technology and enjoy exploring new concepts in the digital world.</p><p>I have a keen interest in web development, programming, and learning about artificial intelligence. I am constantly looking for opportunities to expand my skills and knowledge in these areas.</p><h2>Hobbies</h2><p>When I'm not immersed in technology, I love spending time with nature, reading books, and playing sports like cricket and badminton.</p><h2>Contact Information</h2> <p>Email: <a href='mailto:amansocial12@gmail.com'>amansocial12@gmail.com</a></p>            <p>Phone: <a href='tel:9000099999'>9000099999</a></p> <a href='/'>home</a>");
})

app.get("/contact", (req, res) => {
    res.send("<h1> this is a contact page</h1><a href='/'>home</a>");
})

app.listen(port, () => {
    console.log(`server is connected to ${port} port.`)
})