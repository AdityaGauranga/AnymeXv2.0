import React, { useState } from "react";
import "./styles.css";

const AllSeries = {
  Adventure: [
    {
      Title: "One Piece ",
      Description:
        "Monkey D. Luffy, a 17-year-old boy, a wonderful and funny pirate, along with his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece.",
      Image:
        "https://ae01.alicdn.com/kf/HTB1ayvsOVXXXXcKXFXXq6xXFXXXy/Custom-Canvas-One-Piece-Poster-One-Piece-Anime-Wall-Stickers-Luffy-Crew-Wallpaper-Ace-Sticker-Kids.jpg_Q90.jpg",
      Rating: `9.5/10`
    },
    {
      Title: "Fullmetal Alchemist Brotherhood",
      Description:
        "Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms. Two brothers lose their mother to an incurable disease. With the power of 'alchemy', they use taboo knowledge to resurrect her.",
      Image: "https://static.wikia.nocookie.net/toonami/images/4/4f/Qyzm02.jpg",
      Rating: `9.8/10`
    },
    {
      Title: "Hunter x Hunter",
      Description: `A mysterious man abducts Netero and overpowers Heaven's Arena. Worried, Gon and his friends decide to fight against the evil and secure their lives.`,
      Image:
        "https://i.pinimg.com/564x/fe/d8/fa/fed8fa67fdaeeb4afbcf954ea5bcf6d8.jpg",
      Rating: `9.4/10`
    },
    {
      Title: "Attack on Titan",
      Description: `After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.`,
      Image:
        "https://m.media-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_.jpg",
      Rating: `9.1/10`
    },
    {
      Title: "One Punch Man",
      Description: `Saitama, a superhero who can defeat any opponent with a single punch but seeks to find a worthy opponent after growing bored by a lack of challenge due to his overwhelming strength.`,
      Image:
        "https://cdn.europosters.eu/image/750/posters/one-punch-man-destruction-i61133.jpg",
      Rating: `8.4/10`
    },
    {
      Title: "Terror in Resonance",
      Description: `Tokyo has been decimated by a terrorist attack, and the only clue to the culprit's identity is a bizarre internet video. While paranoia spreads, two mysterious children form "Sphinx," a clandestine entity determined to pull the trigger on this world.`,
      Image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/Terror_in_Resonance_Poster.jpg/220px-Terror_in_Resonance_Poster.jpg",
      Rating: `8.5/10`
    },
    {
      Title: "InuYasha",
      Description: `InuYasha is the story of a dog half-demon who is constantly after a jewel of immense power, the Shikon jewel, also no as the Shikon no tama. He lives in the forest near the village where the jewel is protected by a priestess named Kikyo who dies and the jewel is burned with her.`,
      Image:
        "https://rukminim1.flixcart.com/image/416/416/krdtlzk0/poster/b/y/x/medium-rin-inuyasha-kirara-kagome-kagura-poster-selectanimfpw336-original-imag56nqh8mffhrb.jpeg?q=70",
      Rating: `8.0/10`
    }
  ],
  Drama: [
    {
      Title: "Violet Evergarden",
      Image:
        "https://i.pinimg.com/564x/57/15/0d/57150d15b50015e6394781ba7fa5dd7a.jpg",
      Description:
        "Violet Evergarden struggles to cope with the loss of her mentor, Major Gilbert. But when she gets a job as a ghostwriter and begins to express the emotions of others, she comes to terms with her own, realizing the meaning of what the feeling of Love really is.",
      Rating: `10/10`
    },

    {
      Title: "Your Lie in April",
      Description:
        "A piano prodigy who lost his ability to play after suffering a traumatic event in his childhood is forced back into the spotlight by an eccentric girl with a secret of her own. The story follows Arima Kousei, a skilled pianist who hasn't played since his mother's death a few years ago.",
      Image: "https://media.redadn.es/series/p/your-lie-in-april_463.jpg",
      Rating: `8.5/10`
    },

    {
      Title: "Ano Hana",
      Description: `A group of six childhood friends drifts apart after one of them, Meiko "Menma" Honma, dies in an accident. Ten years after the incident, the leader of the group, Jinta Yadomi, has become withdrawn from society and lives as a recluse.`,
      Image:
        "https://ae01.alicdn.com/kf/H35ce516ee6b94342b02e8a943606a8beu/Romance-Anohana-Cartoon-Anime-Poster-Vintage-Retro-Decorative-DIY-Wall-Sticker-Canvas-Paintings-Home-Posters-Art.jpg_Q90.jpg",
      Rating: `8.2/10`
    },

    {
      Title: "Clannad",
      Description:
        "Clannad follows the life of Tomoya Okazaki, a third-year student who does not take his studies seriously. He hates his city and his everyday routine, while waiting for something that would bring color into his dull life.",
      Image: "https://m.media-amazon.com/images/I/612XKXc5ySL._AC_.jpg",
      Rating: `7.9/10`
    },

    {
      Title: "Classroom of the Elite",
      Description:
        "The story follows the perspective of Kiyotaka Ayanokōji, a quiet and unassuming boy who is not good at making friends and would rather keep his distance, but possesses unrivaled intelligence. He is a student of Class-D, which is where the school dumps its inferior students.",
      Image:
        "https://i.pinimg.com/564x/37/c8/39/37c839d6faec8a836e5541140ee952c0.jpg",
      Rating: `7.8/10`
    },

    {
      Title: "Orange",
      Description: `Naho Takamiya, a second year high school student, receives letters sent from herself 10 years into the future. Her future self asks her to prevent her "biggest regrets", which has something to do with the new transfer student from Tokyo, a boy named Kakeru Naruse.`,
      Image:
        "https://images6.fanpop.com/image/photos/39400000/Orange-anime-poster-orange-takano-ichigo-39441956-900-1248.jpg",
      Rating: `8.0/10`
    }
  ],

  Isekai: [
    {
      Title: "Re:Zero kara Hajimeru Isekai ",
      Description:
        "Subaru Natsuki is a NEET who is suddenly summoned to a fantasy-like world. Just after arriving, he is killed while trying to help a young half-elf he befriends, Emilia, who is a candidate to become the next ruler of the Kingdom of Lugunica, only to revive some hours in the past.",
      Image: "https://m.media-amazon.com/images/I/714CU0xW1hL._AC_SY879_.jpg",
      Rating: `9.0/10`
    },
    {
      Title: "Hataraku Maou Sama! The Devil is a Part Timer",
      Image:
        "https://i.pinimg.com/564x/cb/85/8d/cb858d80c3f42fbe73f00da2ef0c8aac.jpg",
      Description:
        "Demon Lord Satan seeks to conquer the world of Ente Isla by annexing its four continents with the help of his demon generals Alciel, Lucifer, Malacoda, and Adramelech. ... In order to survive, Satan takes a part-time job in a fast food restaurant named MgRonald's, while Alciel serves as his houseman.",
      Rating: `8.5/10`
    },
    {
      Title: "That Time I Got Reincarnated As A Slime",
      Image: "https://m.media-amazon.com/images/I/81k5ZKOw8UL._AC_SY550_.jpg",
      Description:
        "Lonely thirty-seven-year-old Mikami Satoru is stuck in a dead-end job, unhappy with his mundane life, but after dying at the hands of a robber, he awakens to a fresh start in a fantasy realm...as a slime monster.",
      Rating: `8.3/10`
    },
    {
      Title: "KonoSuba: God's Blessing on this Wonderful World!",
      Image: "https://m.media-amazon.com/images/I/81LsoKoV-bS._AC_SY550_.jpg",
      Description:
        "Following an untimely and embarrassing death, Kazuma Satō, a Japanese teenage shut-in NEET, meets a goddess named Aqua, who offers to reincarnate him in a parallel world with MMORPG elements, where he can go on adventures and battle monsters.",
      Rating: `8.2/10`
    },
    {
      Title: "Mushoku Tensei: Jobless Reincarnation",
      Image:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/1mFnzilCyj9Coa9jbN8vFYLEZdW.jpg",
      Description:
        "A 34-year-old Japanese NEET is run over by a speeding truck and dies. Before he knows it, he is reborn as Rudeus Greyrat, and begins a new life full of adventure. Before he knows it, he is reborn as Rudeus Greyrat, and begins a new life full of adventure",
      Rating: `8.0/10`
    }
  ]
};

const genreNames = Object.keys(AllSeries);

export default function App() {
  const [seriesList, setSeriesList] = useState(AllSeries.Adventure);

  function getSeriesPost(series) {
    const title = series.Title;
    const imageUrl = series.Image;
    const desc = series.Description;
    const rating = series.Rating;
    const htmlOfList = (
      <li>
        <img alt="poster" src={imageUrl} />
        <div style={{ padding: "0rem 1rem" }}>
          <h3>{title}</h3>
          <p>{desc}</p>
          <p style={{ fontWeight: "bold" }}>{rating}</p>
        </div>
      </li>
    );
    return htmlOfList;
  }

  function genreClickHandler(genre) {
    const series = AllSeries[genre];
    setSeriesList(series);
  }

  return (
    <div className="App">
      <h1>Anime Recommendation</h1>
      <h2>Select a Genre to get Started!</h2>
      <div>
        {genreNames.map((genre) => {
          return (
            <button
              key={genre}
              className="btn"
              onClick={() => genreClickHandler(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>

      <ul>
        {seriesList.map((series) => {
          return getSeriesPost(series);
        })}
      </ul>
    </div>
  );
}
