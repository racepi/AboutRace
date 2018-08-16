import React from 'react'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import get from 'lodash/get'

import {
  FiledUnderLink
} from '../'

import getCards from '../../utils/getCards'

import {
  black,
  white,
  darkWhite,
  whiteShadow,
  backgroundColor,
  red,
} from '../../colors'

const TICKER = 'INTERVIEW'
const gradient = `linear-gradient(to bottom, #D9B0B0 0%, rgba(109,88,88,0.92) 100%)`
const gradient2 = `linear-gradient(to bottom, #2A495C 0%, rgba(29,69,59,0.92) 100%)`

const Container = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;

  @media (min-width: 1025px) { /* desktop */

  }

  @media (max-width: 812px) { /* mobile */
     
  }
`

const TopContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;

  background: ${gradient};

  @media (min-width: 1025px) { /* desktop */
    background-color: ${ props => props.overlay ? 'rgba(0,0,0,0)' : white };
    background-image: none;
  }

  @media (max-width: 812px) { /* mobile */
    background-color: ${white};
    z-index: 1;
  }
`

const BottomContaniner = styled.div`
  position: relative;

  width: 100%;
  margin-top: -100px;

  padding-top: 60px;

  z-index: 2;

  background-color: ${black};
  background-image: ${gradient2};

  @media (min-width: 1025px) { /* desktop */
    background-color: ${ props => props.overlay ? 'rgba(0,0,0,0)' : white };
    background-image: none;
  }

  @media (max-width: 812px) { /* mobile */
     
  }
`

const Quote = styled.div`
  width: 100%;
  margin: auto;

  font-family: 'Tisa Pro';
  font-size: 40px;
  line-height: 60px;

  text-align: center;

  @media (min-width: 1025px) { /* desktop */
    width: 835px;
    font-size: 48px;
  }

  @media (max-width: 812px) { /* mobile */
    width: 100vw;
    font-size: 24px;
    line-height: 30px;
    padding-bottom: 50px;
  }
`

const QuoteContainer = styled.div`
  position: fixed;
  top: 100px;
  left: 60px;
  right: 60px;

  width: auto;
  height: 40vh;

  z-index: 2;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  color: ${white};

  transition: all .5s ease;

  @media (min-width: 1025px) { /* desktop */
    top: 0;
    left: 0;
    right: 0;
    
    height: 80vh;

    background-image: ${props => props.overlay ? null : gradient};
    box-shadow: none;
  }

  @media (max-width: 812px) { /* mobile */
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 40vh;
    min-height: 300px;
  }
`

const TextContainer = styled.div`
  z-index: 3;

  width: 80%;
  padding-top: 40vh;

  @media (min-width: 1025px) { /* desktop */
    width: 1000px;
    padding-top: 60vh;
  }

  @media (max-width: 812px) { /* mobile */
    width: 100vw;
    margin-top: 20vh;
  }
`

const TextInnerContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;

  width: auto;
  height: auto !important;

  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;

  background-color: ${white};
  color: ${backgroundColor};

  margin-bottom: 50px;

  &::before {
    content: '${TICKER}';
    position: absolute;

    height: 50px;

    font-family: Lato;
    font-size: 12;
    line-height: 50px;
    letter-spacing: 0.22em;

    top: -50px;
    left: 0;

    background-color: ${white};

    padding-left: 14px;
    padding-right: 14px;

    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  font-family: 'Tisa Pro';
  font-size: 36px;
  line-height: 48px;
`

const Author = styled.div`
  font-family: Lato;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.22em;

  text-transform: uppercase;

  padding-top: 18px;
  padding-bottom: 28px;
`

const Text = styled.div`
  font-family: 'Tisa Pro';
  font-size: 20px;
  line-height: 28px;
`

const ContentBar = styled(Column)`
  flex: 1;
  padding: 70px;

  z-index: 10;

  background-color: ${white};
  border-bottom-left-radius: 3px;

  box-shadow: 0px 3px 3px rgba(0,0,0,0.16);

  @media (min-width: 1025px) { /* desktop */
    
  }

  @media (max-width: 812px) { /* mobile */
    padding: 10px;
  }
`

const SideBar = styled(Column)`
  position: relative;

  display: none !important;

  display: flex;
  flex-direction: column;

  width: 390px;
  background-color: ${whiteShadow};

  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;

  box-shadow: 0px 3px 3px rgba(0,0,0,0.16);

  @media (min-width: 1025px) { /* desktop */
    display: flex !important;
  }

  @media (max-width: 812px) { /* mobile */
    display: none;
  }
`

const AuthorImage = styled.div`
  height: 481px;
  min-width: 373px;

  border-top-right-radius: 3px;

  background-size: cover !important;
  background-attachment: fixed;
  background: ${ props => props.background ? `url(${props.background}) center no-repeat` : null };

  @media (max-width: 812px) { /* mobile */
    width: 100vw;
    max-width: 100vw;
    margin-left: 0px;
  }
`

const Bio = styled.div`
  padding: 15px;

  font-family: Lato;
  font-size: 14px;
  line-height: 18px;

  margin-bottom: 60px;
`

const SubTitle = styled.div`
  font-family: Lato;
  font-size: 12px;
  line-height: 28px;
  letter-spacing: 0.22em;

  text-transform: uppercase;

  padding-left: 0;

  @media (min-width: 1025px) { /* desktop */
    padding-left: 15px;
  }

  @media (max-width: 812px) { /* mobile */
    padding-left: 0;
  }
`

///

const Tags = styled.div`
  padding-left: 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  overflow: auto;

  @media (min-width: 1025px) { /* desktop */
    padding-left: 15px;
  }

  @media (max-width: 812px) { /* mobile */
    padding-left: 0;
  }
`

const Tag = styled.div`
  padding-left: 10px;
  padding-right: 10px;

  font-family: Lato;
  font-size: 15px;
  line-height: 36px;
  letter-spacing: 0.22em;
  font-weight: 600;

  text-transform: uppercase;

  color: ${red};

  margin-right: 15px;
  margin-bottom: 15px;

  border-radius: 3px;
  background-color: ${white};
`

const BackTo = styled.div`
  width: 100%;

  @media (min-width: 1025px) { /* desktop */
    position: absolute;
    right: 0;
    bottom: 0;

    padding-bottom: 50px;
  }

  @media (max-width: 812px) { /* mobile */
    padding-bottom: 50px;
  }
`

const CardsContainer = styled.div`
  display: flex;  
  flex-direction: row; 
  flex-wrap: wrap;

  justify-content: flex-start;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 70px;

  @media (min-width: 1025px) { /* desktop */
    justify-content: center;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 200px;
  }

  @media (max-width: 812px) { /* mobile */
    justify-content: center;
    align-items: center;
    padding-left: 0;
    padding-right: 0;

    min-width: 100vw;
  }
`

const TextFooter = styled(Row)`
  position: relative;

  display: flex;
  flex-direction: row;

  margin-top: 50px;
  margin-left: 50px;
  margin-right: 50px;

  justify-content: center;

  @media (min-width: 1025px) { /* desktop */
    display: none;
  }

  @media (max-width: 812px) { /* mobile */
    margin-left: 0;
    margin-right: 0;
    padding-bottom: 100px;
  }
`

const Footer = styled(Row)`
  display: flex;

  width: auto;
  min-height: 20vh;

  @media (min-width: 1025px) { /* desktop */
    display: none;
  }

  @media (max-width: 812px) { /* mobile */
    display: flex;
  }
`

const MobileRow = styled(Row)`
  align-items: center;
  padding-left: 60px;

  margin-top: 60px;

  @media (max-width: 812px) { /* mobile */
    flex-direction: column;
    padding-left: 0;
    margin-top: 0;
    justify-content: center;
  }
`

const FirstMobileRow = styled(MobileRow)`
  @media (max-width: 812px) { /* mobile */
    margin-top: -150px;
  }
`

const MobileColumn = styled(Column)`
  padding: 0;

  @media (max-width: 812px) { /* mobile */
    padding-top: 60px;
    padding-left: 10px;
  }
`

const getFiledUnder = array => {
  let results = []
  if(!array) return []

  array && array.map( ({name}) =>
    results.push({
      name,
      link: `/subthemes/${kebabCase(name)}`
    })
  )

  return results
}

const getTags = array => {
  let results = []

  results = array && array.map( ({name}) => name )

  return results
}

const getRelatedContent = array => {
  const cards = {
    articles: [],
    clips: [],
    faqs: [],
  }

  array && array.forEach(item => {
    switch(item.__typename){
      case 'node__faq':
        cards.faqs.push(item)
        break
      case 'node__article':
        cards.articles.push(item)
        break
      case 'node__clip':
        cards.clips.push(item)
        break
      default:
        break;
    }
  })

  return getCards(cards)
}

const AllEntitiesContainer = styled(Row)`
  width: 100vw;
  justify-content: flex-end;

  padding-top: 90px;
  padding-right: 60px;

  z-index: 4;

  @media (min-width: 1025px) { /* desktop */
    position: fixed;
    top: 0;
  }

  @media (max-width: 812px) { /* mobile */
    justify-content: center;
    padding-right: 0;
  }
`

const AllEntitiesText = `All ${TICKER.toLowerCase()}s`
const AllEntities = () => <AllEntitiesContainer>
  <FiledUnderLink color={white}>{AllEntitiesText}</FiledUnderLink>
</AllEntitiesContainer>

///

class Interview extends React.Component {
  render() {
    const {overlay} = this.props
    const nodeName = 'nodeInterview'

    const title = get(this, `props.data.${nodeName}.title`)
    const author = get(this, `props.data.${nodeName}.field_interviewee_name.processed`)
    const authorImage = get(this, `props.data.${nodeName}.relationships.field_interviewee.localFile.childImageSharp.original.src`)
    const authorBio = get(this, `props.data.${nodeName}.field_interviewee_bio.processed`)
    const text = get(this, `props.data.${nodeName}.field_full_length_version.processed`)
    const keyQuote = get(this, `props.data.${nodeName}.field_key_quote.processed`)

    const filedUnder = getFiledUnder(get(this, `props.data.${nodeName}.relationships.field_which_subtheme_does_this_b`))
    const tags = getTags(get(this, `props.data.${nodeName}.relationships.field_tags`))
    const backTo = filedUnder[0]

    const relatedContent = getRelatedContent(get(this, `props.data.${nodeName}.relationships.field_article_related_content`))
    
    const LocalBackTo = () => backTo ? (
      <BackTo>
        <SubTitle>back to:</SubTitle>
        <FiledUnderLink key="backTo" to={backTo.link}>{backTo.name}</FiledUnderLink>
      </BackTo>
    ) : null

    ///

    const DesktopSideBar = () => (
      <SideBar>
        <AuthorImage background={authorImage}/>
        <Bio dangerouslySetInnerHTML={{ __html: authorBio }}/>
        <SubTitle>filed under:</SubTitle>
        {
          filedUnder && filedUnder.map( ({name, link}, key) => <FiledUnderLink key={key} to={link}>{name}</FiledUnderLink>)
        }
        <SubTitle style={{marginTop: 90}}>explore:</SubTitle>
        <Tags>
          {
            tags && tags.map( (name, key) => <Tag key={key}>{name}</Tag>)
          }
        </Tags>
        
        {
          relatedContent.length > 0 && <SubTitle style={{marginTop: 90}}>see also:</SubTitle>
        }

        <CardsContainer>
          { relatedContent }
        </CardsContainer>

        <LocalBackTo />
      </SideBar>
    )

    ///

    const MobileSideBar = () => (
      <Column style={{color: darkWhite}}>

        <FirstMobileRow>
          <AuthorImage background={authorImage}/>
          <Bio dangerouslySetInnerHTML={{ __html: authorBio }}/>
        </FirstMobileRow>

        <MobileRow style={{alignItems: 'flex-start'}}>
          <MobileColumn>
            <SubTitle>filed under:</SubTitle>
            {
              filedUnder && filedUnder.map( ({name, link}, key) => <FiledUnderLink key={key} to={link}>{name}</FiledUnderLink>)
            }
          </MobileColumn>

          <MobileColumn>
            <SubTitle>explore:</SubTitle>
            <Tags>
              {
                tags && tags.map( (name, key) => <Tag key={key}>{name}</Tag>)
              }
            </Tags>
          </MobileColumn>
        </MobileRow>

        <MobileRow>
          {
            relatedContent.length > 0 && <SubTitle style={{marginTop: 90}}>see also:</SubTitle>
          }
        </MobileRow>

        <CardsContainer>
          { relatedContent }
        </CardsContainer>
        
      </Column>
    )

    ///

    return (
      <Container>
        <TopContainer overlay={overlay}>
          { !overlay && <AllEntities /> }
          <QuoteContainer overlay={overlay}>
            <Quote dangerouslySetInnerHTML={{ __html: keyQuote }} />
          </QuoteContainer>
          <TextContainer>
            <TextInnerContainer>
              <ContentBar>
                <Title>{title.trim()}</Title>
                <Author>by {author}</Author>
                <Text dangerouslySetInnerHTML={{ __html: text}}/>
                <TextFooter>
                  <LocalBackTo />
                </TextFooter>
              </ContentBar>
              <DesktopSideBar />
            </TextInnerContainer>
          </TextContainer>
        </TopContainer>
        <BottomContaniner overlay={overlay}>
          <Footer>
            <MobileSideBar />
          </Footer>
        </BottomContaniner>
      </Container>
    )
  }
}

export default Interview