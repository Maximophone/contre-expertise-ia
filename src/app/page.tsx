import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import Associations from '@/components/Associations'
// import avatarImage1 from '@/images/avatars/avatar-1.png'
import { Report } from '@/components/Report'
import Experts from '@/components/Experts'
import { Petition } from '@/components/Petition'
import Contacts from '@/components/Contacts'

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <NavBar />
      <Report />
      <Experts />
      <Associations />
      <Petition />
      <Contacts />
      <Footer />

      {/* <Testimonial
        id="testimonial-from-tommy-stroman"
        author={{
          name: 'Tommy Stroman',
          role: 'Front-end developer',
          image: avatarImage1,
        }}
      >
        <p>
          “I didn’t know a thing about icon design until I read this book. Now I
          can create any icon I need in no time. Great resource!”
        </p>
      </Testimonial> */}
    </>
  )
}
