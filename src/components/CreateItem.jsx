import React from 'react'
import styled from 'styled-components'

const CreateItem = () => {
    return (

        <Wrapper>
            <CreateItemContainer>
                <Item>
                    <Table>
                      <Thead>
                        <tr>
                            <Title class='prop__name' data-prop-name='Title'>Title</Title>
                            <TitleInput placeholder="Write Title Here..." />
                          
                        </tr>
                        <tr>
                            <th class='prop__name' data-prop-name='Description'>Description</th>
                        </tr>
                        <tr>
                            <th class='prop__name' data-prop-name='Price'>Price</th>
                            <th class='prop__name' data-prop-name='Stock'>Stock</th>
                            <th class='prop__name' data-prop-name='Category'>Category</th>
                        </tr>
                        <tr>
                            <th class='prop__name' data-prop-name='Image'>Image</th>
                        </tr>
                      </Thead>
                      <tbody></tbody>
                    </Table>
                </Item>
            </CreateItemContainer>
        </Wrapper>

        )
}

export default CreateItem

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transform: scale(1.1);
  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
  z-index: 999;
`
const CreateItemContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  padding: 0.5rem 1rem;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
display: flex;
justify-content: center;
align-items: center;
`

const Item = styled.div`
    background-color: white;
    height: 500px;
    width: 500px;
`

const TitleInput = styled.input`

`

const Table = styled.table`
height: 100%;
`

const Thead = styled.thead`

width: 100%;

`

const Title = styled.h1`

`