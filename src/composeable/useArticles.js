import { ref } from "vue";

const articles = ref([
  {
    id: 1,
    title:
      "India wins men’s T20 World Cup, defeating South Africa in dramatic final",
    image:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0NjA1M3wwfDF8c2VhcmNofDR8fGZsb3xlbnwwfHx8fDE2MzU5NDkxMjU&ixlib=rb-1.2.1&q=80&w=1080", // Unsplash image URL
    content:
      "India produced a brilliant performance to defeat South Africa by just seven runs in a dramatic men’s T20 World Cup final, ending a long 13-year wait for the cricket-obsessed nation since its last World Cup win. It was a nail-biting finale in Bridgetown, Barbados as India set a total of 177 to win – the highest ever score in a men’s T20 final – but South Africa matched it run for run, even pulling ahead at points before some exceptional bowling from India and an outstanding catch from Suryakumar Yadav restricted the Proteas right at the end. Victory sparked jubilant and emotional celebrations for India after a year of heartbreak for many of its players who lost to Australia in the finals of both the ODI Cricket World Cup and World Test Championship. India was under pressure early in its innings as some sharp South African bowling reduced it to 39-3 after five overs. But with Axar Patel and talismanic batter Virat Kohli at the crease, India rebuilt.",
    author: "John Doe",
    date: "June 30, 2024",
  },
  {
    id: 2,
    title:
      "USA crashes out of T20 Cricket World Cup with defeat against England, ending historic run",
    image:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0NjA1M3wwfDF8c2VhcmNofDR8fGZsb3xlbnwwfHx8fDE2MzU5NDkxMjU&ixlib=rb-1.2.1&q=80&w=1080", // Another Unsplash image URL
    content:
      "The USA crashed out of the T20 Men’s Cricket World Cup on Sunday, succumbing to a 10 wicket defeat against defending champion England in Barbados that scuppered its hopes of qualifying for the semifinals and ended its historic run at the tournament. Afghanistan players celebrate after defeating Australia. RELATED ARTICLE Afghanistan stuns Australia to secure one of the biggest upsets at T20 Cricket World Cup Defeat ends a fairytale debut for the co-host at this tournament which had exceeded all expectations by progressing past the group stages and into the Super Eights following victories against Canada and, more impressively, Pakistan as well as a narrow defeat to powerhouse India. It represented a remarkable string of results for the tournament’s underdog facing some of the best teams in the world, but the USA ultimately struggled to match its opponents in the second round of the T20 World Cup. Before the match, the USA required a near miracle to qualify for the semifinals – comfortably defeat the defending champion and hope that South Africa could similarly dismantle the West Indies – while England knew that victory over the US would likely secure its spot in the last four. And England ultimately outclassed the USA, chasing down its total of 115 in just 9.4 overs, led by captain Jos Buttler who scored 83 runs off only 38 balls. Such a comprehensive victory guarantees England’s progression by virtue of its net run rate. The USA batted first after losing the toss and struggled to build any momentum against England’s bowlers, most notably spinner Adil Rashid and Chris Jordan, who became the first English bowler to take three wickets in three consecutive balls – known as a hat trick – in a T20 match.",
    author: "Jane Smith",
    date: "June 29, 2024",
  },
  {
    id: 3,
    title: "Breaking News: Market Update",
    image:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0NjA1M3wwfDF8c2VhcmNofDR8fGZsb3xlbnwwfHx8fDE2MzU5NDkxMjU&ixlib=rb-1.2.1&q=80&w=1080", // Unsplash image URL
    content: "The market has seen significant changes today, with...",
    author: "John Doe",
    date: "June 30, 2024",
  },
  {
    id: 4,
    title: "Tech Innovations in 2024",
    image:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0NjA1M3wwfDF8c2VhcmNofDR8fGZsb3xlbnwwfHx8fDE2MzU5NDkxMjU&ixlib=rb-1.2.1&q=80&w=1080", // Another Unsplash image URL
    content: "This year, technology has taken leaps with new...",
    author: "Jane Smith",
    date: "June 29, 2024",
  },

  {
    id: 5,
    title: "Breaking News: Market Update",
    image:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0NjA1M3wwfDF8c2VhcmNofDR8fGZsb3xlbnwwfHx8fDE2MzU5NDkxMjU&ixlib=rb-1.2.1&q=80&w=1080", // Unsplash image URL
    content: "The market has seen significant changes today, with...",
    author: "John Doe",
    date: "June 30, 2024",
  },
  {
    id: 6,
    title: "Tech Innovations in 2024",
    image:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0NjA1M3wwfDF8c2VhcmNofDR8fGZsb3xlbnwwfHx8fDE2MzU5NDkxMjU&ixlib=rb-1.2.1&q=80&w=1080", // Another Unsplash image URL
    content: "This year, technology has taken leaps with new...",
    author: "Jane Smith",
    date: "June 29, 2024",
  },
]);

export function useArticles() {
  return { articles };
}
