import {Component} from 'react'
import {
  MemeImgContainer,
  BgContainer,
  MainTitle,
  InputContainer,
  LabelText,
  InputText,
  SelectText,
  GenerateButton,
  MemeText,
  FormMemeLayout,
  FormContainer,
  OptionText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imgUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    isFormSubmitted: false,
  }

  onsubmitSuccess = () => {
    this.setState({isFormSubmitted: true})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {imgUrl, topText, bottomText} = this.state
    if (imgUrl !== '' && topText !== '' && bottomText !== '') {
      this.onsubmitSuccess()
    }
  }

  onChangeUrl = event => {
    if (event.target.value === '') {
      this.setState({imgUrl: event.target.value, isFormSubmitted: false})
    } else {
      this.setState({imgUrl: event.target.value})
    }
  }

  onChangeTopText = event => {
    if (event.target.value === '') {
      this.setState({topText: event.target.value, isFormSubmitted: false})
    } else {
      this.setState({topText: event.target.value})
    }
  }

  onChangeBottomText = event => {
    if (event.target.value === '') {
      this.setState({bottomText: event.target.value, isFormSubmitted: false})
    } else {
      this.setState({bottomText: event.target.value})
    }
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  render() {
    const {imgUrl, topText, bottomText, fontSize, isFormSubmitted} = this.state
    return (
      <BgContainer>
        <MainTitle>Meme Generator</MainTitle>
        <FormMemeLayout>
          {isFormSubmitted && (
            <MemeImgContainer bgImage={imgUrl} data-testid="meme">
              <MemeText fontSize={fontSize}>{topText}</MemeText>
              <MemeText fontSize={fontSize}>{bottomText}</MemeText>
            </MemeImgContainer>
          )}
          <FormContainer onSubmit={this.onSubmitForm}>
            <InputContainer>
              <LabelText htmlFor="img-url">Image URL</LabelText>
              <InputText
                type="text"
                id="img-url"
                onChange={this.onChangeUrl}
                value={imgUrl}
              />
            </InputContainer>
            <InputContainer>
              <LabelText htmlFor="top-text">Top Text</LabelText>
              <InputText
                type="text"
                id="top-text"
                onChange={this.onChangeTopText}
                value={topText}
              />
            </InputContainer>
            <InputContainer>
              <LabelText htmlFor="bottom-text">Bottom Text</LabelText>
              <InputText
                type="text"
                id="bottom-text"
                onChange={this.onChangeBottomText}
                value={bottomText}
              />
            </InputContainer>
            <InputContainer>
              <LabelText htmlFor="font-size">Font Size</LabelText>
              <SelectText
                id="font-size"
                onChange={this.onChangeFontSize}
                value={fontSize}
              >
                {fontSizesOptionsList.map(eachFontData => (
                  <OptionText
                    value={eachFontData.optionId}
                    selected={eachFontData.optionId === '8'}
                    key={eachFontData.optionId}
                  >
                    {eachFontData.displayText}
                  </OptionText>
                ))}
              </SelectText>
            </InputContainer>
            <GenerateButton type="submit">Generate</GenerateButton>
          </FormContainer>
        </FormMemeLayout>
      </BgContainer>
    )
  }
}

export default MemeGenerator
