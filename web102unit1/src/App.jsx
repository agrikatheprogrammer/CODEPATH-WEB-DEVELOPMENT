import './App.css';
import Card from './components/Card';

const cards = [
  {
    title: 'All That\'s Left To Say',
    description: `"All That's Left to Say" by Emery Lord is a young adult novel that explores grief, loss, and the impact of the opioid crisis through the lens of a young woman, Hannah, who is trying to uncover the truth surrounding her cousin Sophie's overdose death. After Sophie's death, Hannah becomes obsessed with finding out who provided the pills that led to her demise, leading her to enroll at Sophie's private school and form new friendships and relationships.`,
    image: '/images/img1.jpg',
    url: 'https://www.goodreads.com/book/show/60784825-all-that-s-left-to-say'
  },
  {
    title: 'Curious Tides',
    description: `"Curious Tides," the first book in "The Drowned Gods" trilogy by Pascale Lacelle, follows Emory, a student at Aldryn College for Lunar Magics, as she grapples with her new, dangerous magical abilities after a tragic night at Dovermere sea caves leaves her as the sole survivor. These newfound powers, which no healer should possess, are particularly troubling as her best friend, Romie, was among the deceased. To understand what happened and control her new abilities, Emory seeks help from Baz, Romie's brother and a fellow student who is already well-versed in darker magic. However, their investigation leads them deeper into a secret society and a world of privilege and power, all while facing the possibility that the truth might lead them back to Dovermere, where they may have to confront their own fate.`,
    image: '/images/img2.jpg',
    url: 'https://www.goodreads.com/book/show/101141871-curious-tides?ref=nav_sb_ss_1_13'
  },
  {
    title: 'All the Fighting Parts',
    description: `"All the Fighting Parts" by Hannah V. Sawyerr is a young adult novel in verse that tells the story of Amina Conteh, a 16-year-old girl who is sexually assaulted by her church's pastor. The novel explores themes of reclaiming agency after trauma, finding one's voice, and healing from a complex past. It's a story about a girl who uses her voice as a weapon to fight for her rights and reclaim her life, but also one about the struggles and complexities of faith, family, and the healing process after a traumatic event.`,
    image: '/images/img3.jpg',
    url: 'https://www.goodreads.com/book/show/98652414-all-the-fighting-parts?ref=nav_sb_ss_1_19'
  },
  {
    title: 'Ander & Santi Were Here',
    description: `"Ander & Santi Were Here" by Jonny Garza Villa is a contemporary YA romance about a nonbinary Mexican American teen named Ander, who falls in love with Santi, a new waiter at their family's taqueria. The story explores themes of love, immigration, and community as Ander and Santi navigate their budding relationship while facing the reality of ICE raids and Santi's undocumented status.`,
    image: '/images/img4.jpg',
    url: 'https://www.goodreads.com/book/show/57884665-ander-santi-were-here?ref=nav_sb_ss_1_11'
  },
  {
    title: 'Champion of Fate',
    description: `"Champion of Fate" by Kendare Blake is a fantasy novel that follows Reed, an initiate of the Aristene, a legendary order of female warriors who guide heroes to glory. Reed, after being rescued from her village's massacre as a child, is raised by the Aristene and strives to become one of them. As her Hero's Trial begins, she is assigned to guide Hestion, a prince from a country teetering on the brink of war, to victory`,
    image: '/images/img5.jpg',
    url: 'https://www.goodreads.com/book/show/75302241-champion-of-fate?ref=nav_sb_ss_3_12'
  },
  {
    title: 'Daughters of Oduma ',
    description: `An elite female fighter must reenter the competition to protect her found family of younger sisters in this “absorbing, striking” (Publishers Weekly, starred review) young adult fantasy inspired by West African culture, perfect for fans of The Gilded Ones and Creed.`,
    image: '/images/img6.jpg',
    url: 'https://www.goodreads.com/book/show/61031140-daughters-of-oduma?ref=nav_sb_ss_1_18'
  },
  {
    title: 'A Door in the Dark',
    description: `"A Door in the Dark" by Scott Reintgen is a YA fantasy thriller about six students at a magical school, stranded in a dangerous wilderness after a malfunctioning portal spell. The students, including Ren Monroe, a skilled but impoverished wizard, must work together to survive against a hostile environment, a sinister entity, and each other's secrets. Ren, hoping to secure a future for herself and her family, must prove her worth and survive the perilous journey. `,
    image: '/images/img7.jpg',
    url:'https://www.goodreads.com/book/show/61273146-a-door-in-the-dark?ref=nav_sb_ss_1_14'
  },
  {
    title: 'Ever Since',
    description: `"Ever Since," Alena Bruzas' debut novel, follows 17-year-old Virginia who is labeled "That Kind of Girl" but finds herself falling in love with Rumi, Poppy's boyfriend. When Virginia discovers that Rumi's little sister, Lyra, is being groomed for abuse by a respected community member, she faces a difficult choice: stay silent and allow Lyra to become a victim, or come forward and risk her own safety and relationships. The story explores themes of friendship, boundaries, and finding your own voice after trauma. `,
    image: '/images/img8.jpg',
    url: 'https://www.goodreads.com/book/show/62192521-ever-since?ref=nav_sb_ss_1_10'
  },
  {
    title: 'Everyone’s Thinking It ',
    description: `"Everyone's Thinking It" by Aleema Omotoni is a YA novel set at an elite English boarding school where Nigerian cousins, Iyanu and Kitan, navigate a predominantly white environment. The story centers on the theft of photos taken during a matchmaking event, each with juicy secrets attached, which leads to a schoolwide scandal and suspicion falling on Iyanu. Iyanu and Kitan, along with their friends, must uncover the culprit to clear Iyanu's name and expose the truth about their own experiences with racism, identity, and the pressures of fitting in. `,
    image: '/images/img9.jpg',
    url: 'https://www.goodreads.com/book/show/65646931-everyone-s-thinking-it?ref=nav_sb_ss_1_19'
  },
  {
    title: 'Flowerheart',
    description: `"Flowerheart" by Catherine Bakewell is a young adult fantasy romance about Clara, whose uncontrollable magic accidentally causes poisonous flowers to bloom in her father's chest. To save her father, Clara seeks help from her former best friend, Xavier, who agrees to teach her how to control her magic, but on a condition. As Clara learns to master her magic and rebuild her relationship with Xavier, she discovers secrets and a growing darkness in their world that only she can stop. `,
    image: '/images/img10.jpg',
    url: 'https://www.goodreads.com/book/show/61319750-flowerheart?ref=nav_sb_ss_1_11'
  },
];


function App() {
  return (
    <div className="app">
      <h1>Best Sellers for Young Adult Books</h1>
      <div className="card-grid">
        {cards.map((item, index) => (
          <Card key={index} url={item.url} title={item.title} image={item.image} description={item.description} />
        ))}
      </div>
    </div>
  );
}

export default App;
