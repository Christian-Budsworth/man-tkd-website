import * as React from 'react'
import Layout from '../component/layout'

const text = {
  header: {
    title: "Mantkd Taekwondo Academy",
    header1: "The Mantkd Family",
    header2: "Why choose Taekwondo",
    header3: "Charity starts at home"
  },
  paragraph: {
    paragraph1: "Mantkd is a member of British Taekwondo and associated to the World Taekwondo organisation (WT) of Korea, which encompasses a multitude of people around the world and are proud to be part of that international body. Though we are a small number of clubs our links to national and international organisations, masters and events gives us that dynamic features that helps us train you to be 'the best that you can be'. You can be assured of our professional instructors whom have been trained and vetted by British Taekwondo.",
    paragraph2: "Many martial arts claim to be the 'best' or the most effective either in, self defence or street fighting or fitness. Taekwondo is continually evolving, from its ancients Korean martial arts root of 'Taek kyon' to its modern olympic style. So why TKD! quite simple: It suits all ages, genders, abilities and is easy to learn, plus a great cross trainer for other martial arts. Once you have membership, which is currently £22 with British Taekwondo (see below.) Purchase yourself a Dobok (uniform) You can approach any instructor at any club and they will be able to give you advice on situational techniques, such as self defence or how to exercise. Why not try us? and come train.",
    paragraph3: "Please contact us for More information and well send you an invite: Info@mantkd.co.uk",
    paragraph4: "We are now linked to The 'Taekwondo Humanitarian Foundation', helping refugees worldwide. Watch this space for events we promote to collect for this worthy cause through funding raising, sponsorship and much more...Click on the THF logo below for more information!",
  }
}

const IndexPage = () => {
  return (
    <Layout pageTitle={text.header.title}>
      <h2>{text.header.header1}</h2>
      <p>{text.paragraph.paragraph1}</p>
      <h2>{text.header.header2}</h2>
      <p>{text.paragraph.paragraph2}</p>
      <br/>
      <p>{text.paragraph.paragraph3}</p>
      <h2>{text.header.header3}</h2>
      <p>{text.paragraph.paragraph4}</p>
    </Layout>
  )
}
export default IndexPage