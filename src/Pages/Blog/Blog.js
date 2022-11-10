import Accordion from 'react-bootstrap/Accordion';
import useTitle from '../Hooks/useTitle';
import './Blog.css';

function Blog() {
    useTitle('Blog');
    return (
        <div className=' container'>
            <h2 className=' text-center fw-bolder text-primary mt-4 mb-4'>Electronics Doctor Service Review Blog</h2>

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header> <h5 className='fw-bold text-secondary'> Question-1 : Difference between SQL and NoSQL. </h5> </Accordion.Header>
                    <Accordion.Body>
                        When choosing a modern database, one of the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both are viable options, there are key differences between the two that users must keep in mind when making a decision. <br />

                        Here, we break down the most important distinctions and discuss the best SQL and NoSQL database systems available. <br /><br />

                        <b> The five critical differences between SQL vs NoSQL are:</b> <br /><br />

                        1. SQL databases are relational, NoSQL databases are non-relational. <br />
                        2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.<br />
                        3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.<br />
                        4. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.<br />
                        5. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> <h5 className='fw-bold text-secondary'> Question-2 : What is JWT, and how does it work? </h5> </Accordion.Header>
                    <Accordion.Body>

                        <b> JSON Web Token (JWT)</b> is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. <br />

                        It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.<br />

                        The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.<br /> <br />

                        JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.<br />


                        <br />
                        <b>    How it works? </b>
                        Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.

                        JWT

                        User sign-in using username and password or google/facebook. <br />
                        Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. <br />
                        User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. <br />
                        Resource server then verifies the authenticity of the token using the secret salt/ public key.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> <h5 className='fw-bold text-secondary'> Question-3 : What is the difference between javascript and NodeJS? </h5> </Accordion.Header>
                    <Accordion.Body>
                        <b>JavaScript</b> is a proper high-level programming language used to create web scripts whereas <br /> <b>  Node.js</b>  is a run time environment built on google’s v8 engine. <br /> <br />

                        JavaScript is executed in the browser whereas using <br /> Node.js gives us the ability to execute JavaScript outside the browser. <br /><br />

                        JavaScript can manipulate DOM or add HTML within whereas <br /> Node.js doesn’t have the capability to add HTML. <br /><br />

                        JavaScript is mainly used to create front end web applications or develop client-side whereas <br /> Node.js is used on the back end development that is server-side development<br /><br />

                        JavaScript follows the standard of JavaScript when writing programs whereas <br /> Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser. <br /><br />

                        JavaScript requires any running environment as it can execute on any engine such as Firefox’s spider monkey, v8 engine of google chrome, JavaScript core of Safari whereas <br /> Node.js runs only on the v8 engine of google chrome.

                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header> <h5 className='fw-bold text-secondary'> Question-4 : How does NodeJS handle multiple requests at the same time? </h5> </Accordion.Header>
                    <Accordion.Body>
                        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. <br />

                        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module. <br />

                        How to scale your NodeJS application with Cluster Module? <br />

                        A single instance of Node.js runs in a single thread. If you have a multi-core system then you can utilize every core. Sometimes developer wants to launch a cluster of NodeJS process to take advantage of the multi-core system.  <br />

                        The cluster module allows easy creation of child processes that all share the same server ports.


                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div >
    );
}

export default Blog;