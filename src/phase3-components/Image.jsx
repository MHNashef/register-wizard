import React from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Image(props) {
    // email validation 
    const isValidURL = (urlStr) => {
        const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(urlStr);
    }

    const handleChange = (event) => {
        if (isValidURL(event.target.value)) {
            props.sendComponentData('imgURL', event.target.value);
        } else {
            console.log('error - invalid email')
        }
    }

    return (
        <Form.Group >
            <Form.Label htmlFor="img-url">Image URL: </Form.Label>
            <Form.Control onChange={(event) => handleChange(event)}
                type="url"
                id="img-url"
                placeholder='https://example.com' />
            <Form.Text></Form.Text>
        </Form.Group>

    )
}