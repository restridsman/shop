import React from 'react'
import styled from 'styled-components'


const Form = styled.form`

`

function PostFormDescription({handleSubmit, handleChange, item, pageId}) {
    return (
        <Form onSubmit={handleSubmit}>
            <textarea 
                name="descripion" 
                value={item.description} 
                onChange={handleChange}
                cols="30" 
                rows="5"
            ></textarea>
            {
                pageId === "CreateItem" 
                    ? <p>Created at: {item.date}</p>
                    : ''
            }
            
        </Form>
    )
}

export default PostFormDescription
