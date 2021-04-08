import React, {useState} from 'react'
import styled from 'styled-components'

{/*walla*/ }
const CreateItem = () => {


    return (

        <Wrapper >
           
            <CreateItemContainer >
                <Item>
                    <Table>
                      <Thead>
                        <TitleCompartment>
                            <TitleTitle class='prop__name' data-prop-name='Title'>Title
                            </TitleTitle>
                            <TitleInput  placeholder="Write Title Here..." />
                          
                        </TitleCompartment>
                        <DescriptionCompartment>
                            <DescriptionTitle class='prop__name' data-prop-name='Title'>Description
                            </DescriptionTitle>
                        <DescriptionInput  placeholder="Write Description Here..." />
                        </DescriptionCompartment>
                        <InfoRow>
                            <PriceCompartment>
                                <PriceTitle class='prop__name' data-prop-name='Price'>Price
                                </PriceTitle>
                                <PriceInput  placeholder="Write Price Here..." />
                                

                            </PriceCompartment>
                            <StockCompartment>
                                <StockTitle class='prop__name' data-prop-name='Stock'>Stock
                                </StockTitle>
                                <StockInput  placeholder="Write Stock Here..." />


                            </StockCompartment>
                            <CategoryCompartment>
                                <CategoryTitle class='prop__name' data-prop-name='Category'>Category
                                </CategoryTitle>
                                <CategorySelect >
                                    <option value="Hoodies">Hoodies</option>
                                    <option value="Socks">Socks</option>
                                    <option value="Pants">Pants</option>

                                </CategorySelect>


                            </CategoryCompartment>
                        </InfoRow>
                        <ImageCompartment>
                            <ImageTitle class='prop__name' data-prop-name='Image'>Image
                                </ImageTitle>
                                <ImageInput  placeholder="Enter Image Here..." />
                        </ImageCompartment>
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
`

  


const CreateItemContainer = styled.div`
position: absolute;
top: 50%;
left: 50%;
z-index: 2;
transform: translate(-50%, -50%);
background-color: transparent;
padding: 0.5rem 1rem;
border-radius: 0.5rem;
display: flex;
justify-content: center;
align-items: center;
`

const Item = styled.div`
background-color: white;
height: 500px;
width: 500px;
padding: 10px;
`

const TitleCompartment = styled.tr`
width: 500px;
height: 100px;
display: flex;
justify-content: space-between;
align-items: center;
`

const TitleTitle = styled.h3`
align-items: top;
`

const TitleInput = styled.input`
width: 300px;
height: 25px;
align-self: center;
`
const DescriptionCompartment = styled.tr`
width: 500px;
height: 200px;
display: flex;
justify-content: space-between;
align-items: top;
`

const DescriptionTitle = styled.h3`

`

const DescriptionInput = styled.input`
width: 300px;
height: 150px;
align-self: center;
`

const InfoRow = styled.tr`
align-items: center;
width: 500px;
height: 100px;
display: flex;
justify-content: space-between;
`

const PriceCompartment = styled.th`

`

const PriceTitle = styled.h3` 

`
const PriceInput = styled.input`
width: 100px;
height: 25px;
`

const StockCompartment = styled.th`

`

const StockTitle = styled.h3` 

`
const StockInput = styled.input`
width: 100px;
height: 25px;
`

const CategoryCompartment = styled.th`

`

const CategoryTitle = styled.h3` 

`
const CategorySelect = styled.select`
width: 100px;
height: 25px;
`

const ImageCompartment = styled.tr`
width: 500px;
height: 100px;
display: flex;
justify-content: space-between;
align-items: center;
`

const ImageTitle = styled.h3` 

`
const ImageInput = styled.input`
width: 400px;
height: 25px;
`

const Table = styled.table`
min-height: 500px;
min-width: 500px;
`

const Thead = styled.thead`

width: 100%;

`

