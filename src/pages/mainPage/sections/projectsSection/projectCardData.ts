export interface projCardProps {
  id: number;
  title: string;
  imageSrc: string;
  description: string;
  liveLink: string | null;
  gitHubLink: string;
}
const projectCardListData: projCardProps[] = [
  {
    id: 1,
    title: "Expense Track",
    imageSrc: "/Photos/ExpenseTrackerGif.gif",
    description:
      "An expense tracker built with Blazor Web Assembly, .NET 5 Web Api, and Postgres. Deployed on Netlify and Heroku(migrated from Microsoft SQL Server/Azure)",
    liveLink: null,
    gitHubLink: "https://github.com/sejogit28/ExpenseTrackerSol",
  },
  {
    id: 2,
    title: "Coding Mind",
    imageSrc: "/Photos/MernBlogGif.gif",
    description:
      "A personal blog application built using the MERN(MongoDb, Express, React and Node).",
    liveLink: null,
    gitHubLink: "https://github.com/sejogit28/MERN-Blog",
  },
  {
    id: 3,
    title: "The Bug Track",
    imageSrc: "/Photos/NewBugTrackerGif.gif",
    description:
      "A bug tracker built using .NET 5(MVC), Entity Framework, Bootstrap and Postgres. Deployed on Heroku(migrated from Microsoft SQL Server/Azure)",
    liveLink: null,
    gitHubLink: "https://github.com/sejogit28/BugTrackerTime2Sol",
  },
];

export default projectCardListData;
