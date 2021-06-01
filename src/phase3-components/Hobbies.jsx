import React from 'react';
import { Form } from 'react-bootstrap';

export default function Hobbies(props) {
    const hobbies = [];

    function handleChange(event) {
        const newHobbies = event.target.value.split(',');
        for (const hobby of newHobbies) {
            hobbies.push(hobby.replace(' ', ''))
        }
        props.sendComponentData('hobbies', hobbies);
    }

    return (
        <Form.Group>
            <Form.Label htmlFor="hobbies-input">Hobbies: </Form.Label>
            <Form.Control onChange={(event) => handleChange(event)}
                type="text"
                id='hobbies-input'
                placeholder="Hobby 1, Hobby 2, etc" />
        </Form.Group>
    )
}



