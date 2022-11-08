import Accordion from 'react-bootstrap/Accordion';
import './Blog.css';

function Blog() {
    return (
        <div className=' container'>
            <h2 className=' text-center fw-bolder text-primary mt-4 mb-4'>Electronics Doctor Service Review Blog</h2>

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header> <h5 className='fw-bold text-secondary'> Question-1 : Difference between SQL and NoSQL. </h5> </Accordion.Header>
                    <Accordion.Body>


                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> <h5 className='fw-bold text-secondary'> Question-2 : What is JWT, and how does it work? </h5> </Accordion.Header>
                    <Accordion.Body>


                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> <h5 className='fw-bold text-secondary'> Question-3 : What is the difference between javascript and NodeJS? </h5> </Accordion.Header>
                    <Accordion.Body>


                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header> <h5 className='fw-bold text-secondary'> Question-4 : How does NodeJS handle multiple requests at the same time? </h5> </Accordion.Header>
                    <Accordion.Body>


                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default Blog;