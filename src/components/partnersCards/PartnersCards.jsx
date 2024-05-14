import React from 'react'
import bgImage from '../../assets/mainBgs/Image.png'
import './PartnersCards.css'

const PartnersCards = () => {
    const cardData=[
        {title:'Kamasys GmbH', bg:bgImage, info:'Kamasys is a German market-leading software company in the field of communal catering, operating since 2003. Within 20 years of market experience, kamasys has built up a broad portfolio of innovative products in cash register, payment systems and digital labeling in food industry. ', url:'https://www.kamasys.de/en/', width:48, linkTitle:'Startseite - kamasys'},
        {title:'MK Logic GmbH', bg:bgImage, info:'MK Logic represents a German IT firm specializing in software development and product certification. For extended period of market operations, the company has accumulated substantial expertise in product certification and Z-WAVE technologies. ', link:'https://www.mk-logic.de/', width:48, linkTitle:'MK Logic | Home (mk-logic.de)'},
        {title:'Osma Group', bg:bgImage, info:'Osma is a construction company with extensive experience in construction and renovation projects of various complexities. Holding a license for the construction of 9-story residential buildings in the Kyrgyz Republic and technical prowess in various finishing, roofing, and electrical installation works, Osma brings to life the creative and bold desires of its clients.', link:'https://osmagroup.org/#/', width:100, linkTitle:'OSMA GROUP'},
        {title:'The High Technologies Park of the Kyrgyz Republic ', link:'http://htp.kg/', bg:bgImage, info:'The High Technologies Park of the Kyrgyz Republic (HTP KR) is a platform for the advancement of information and communication technologies (ICT), innovative knowledge-intensive industries, and computer and digital solutions in the Kyrgyz Republic (KR) which stimulates an export-oriented economy with its special tax regime for legal entities and individual entrepreneurs engaged in ICT activities in accordance with Article 4 of the Law of KR "On High Technologies Park of the Kyrgyz Republic" dated July 8, 2011, #84.', width:100, linkTitle:'Htp'},
    ]
  return (
    <div className="partners-cards">
      <div className='bg-long bg-partners'/>
        {cardData.map(el=>(
            <div className="partners-card dark-blue" style={{width:`${el.width}%`}}>
            <img src={el.bg} alt={el.title} />
            <h4>{el.title}</h4>
            <p>{el.info}</p>
            <a  className='light-blue' style={{ textDecoration: 'underline' }} href={el.url}>{el.linkTitle}</a>
          </div>
        ))}

        {/* <div className="parners-card-small">
          <img className='parners-card-small-image' src={bgcard} alt="partners" />
          <h4>Kamasys GmbH</h4>
          <p>Kamasys is a German market-leading software company in the field of communal catering, operating since 2003. Within 20 years of market experience, kamasys has built up a broad portfolio of innovative products in cash register, payment systems and digital labeling in food industry. </p>
          <a style={{ textDecoration: 'underline' }} href="https://www.kamasys.de/en/">Startseite - kamasys</a>
        </div>

        <div className="parners-card-small">
          <img className='parners-card-small-image' src={bgcard} alt="partners" />
          <h4>MK Logic GmbH</h4>
          <p>MK Logic represents a German IT firm specializing in software development and product certification. For extended period of market operations, the company has accumulated substantial expertise in product certification and Z-WAVE technologies.</p>
          <a style={{ textDecoration: 'underline' }} href="https://www.mk-logic.de/">MK Logic | Home (mk-logic.de)</a>
        </div>

        <div className="partners-cards-big">
          <img className='Partnersimage' src={bgcard} alt="partners" />
          <h4>Osma Group</h4>
          <p>Osma is a construction company with extensive experience in construction and renovation projects of various complexities. Holding a license for the construction of 9-story residential buildings in the Kyrgyz Republic and technical prowess in various finishing, roofing, and electrical installation works, Osma brings to life the creative and bold desires of its clients.</p>
          <a style={{ textDecoration: 'underline' }} className='htp-partners' href="https://osmagroup.org/#/">OSMA GROUP</a>
        </div>

        <div className="partners-cards-big">
          <img className='Partnersimage' src={bgcard} alt="partners" />
          <h4>The High Technologies Park of the Kyrgyz Republic </h4>
          <p>The High Technologies Park of the Kyrgyz Republic (HTP KR) is a platform for the advancement of information and communication technologies (ICT), innovative knowledge-intensive industries, and computer and digital solutions in the Kyrgyz Republic (KR) which stimulates an export-oriented economy with its special tax regime for legal entities and individual entrepreneurs engaged in ICT activities in accordance with Article 4 of the Law of KR "On High Technologies Park of the Kyrgyz Republic" dated July 8, 2011, #84.</p>
          <a style={{ textDecoration: 'underline' }} className='htp-partners' href="http://htp.kg/">Htp</a>
        </div> */}
      </div>
  )
}

export default PartnersCards