import React from 'react';
import { Form } from 'react-bootstrap';

export default function Hobbies(props) {
    const fixedTextHobbies = []; // this should be used when submitting the form

    function handleChange(event) {
        const newHobbies = event.target.value.split(',');
        for (const hobby of newHobbies) {
            fixedTextHobbies.push(hobby.replace(' ', ''))
        }
        props.sendComponentData('hobbies', fixedTextHobbies);
    }

    return (
        <Form.Group>
            <Form.Label htmlFor="hobbies-input">Hobbies: </Form.Label>
            <Form.Control onChange={(event) => handleChange(event)}
                type="text"
                id='hobbies-input'
                placeholder="hobby 1, hobby 2, etc" />
        </Form.Group>
    )
}



