import styled from 'styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
  padding: 20px;
  padding-top: 40px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans';
  @media screen and (min-width: 768px) {
    padding: 50px;
    padding-top: 60px;
    padding-bottom: 100px;
  }
`

export const MainTitle = styled.h1`
  text-align: center;
  color: #35469c;
  font-size: 25px;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`

export const FormMemeLayout = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const MemeImgContainer = styled.div`
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  height: 330px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 46%;
    order: 2;
  }
`

export const MemeText = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSize}px;
  font-weight: 500;
`

export const FormContainer = styled.form`
  @media screen and (min-width: 768px) {
    width: 46%;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const LabelText = styled.label`
  color: #7e858e;
  font-size: 14px;
  margin-bottom: 5px;
  margin-top: 20px;
`
export const InputText = styled.input`
  height: 35px;
  border: 1px solid #d7dfe9;
  font-size: 16px;
  padding: 10px;
  color: #5a7184;
`

export const SelectText = styled.select`
  height: 35px;
  border: 1px solid #d7dfe9;
  font-size: 16px;
  padding-left: 10px;
`

export const OptionText = styled.option`
  color: #1e293b;
`

export const GenerateButton = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
  margin-top: 30px;
  cursor: pointer;
  outline: none;
`
