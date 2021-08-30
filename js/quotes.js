const quotes = [
    {
      quote: "때가 되면 마땅히 스스로 공부에 힘써야 하며 세월은 사람을 기다리지 않는다.",
      author: "도연명",
    },
    {
      quote: "목적을 이루기 위해서 오랜 인내를 하기보다는 눈부신 노력을 하는 편이 쉽다.",
      author: "라 브뤼에르",
    },
    {
      quote:
        "무기력을 극복할 수 있는 유일한 방법은 열정이다.",
      author: "토인비",
    },
    {
      quote: "배우지 않으면, 곧 늙고 쇠해진다.",
      author: "주자",
    },
    {
      quote: "불행을 극복하는 유일한 것은 열심히 노력하는 것이다.",
      author: "해리 골든",
    },
    {
      quote: "슬픔이나 좌절이 생겼다 해도 해 지기 전에 반드시 즐겁게 보낼 시간을 따로 마련하라.",
      author: "얼 라이팅게일",
    },
    {
      quote: "실패하는 자가 패배하는 것이 아니라 포기하는 자가 패배하는 것이다.",
      author: "장 파울",
    },
    {
      quote: "옷을 입으면 추위를 막듯이 인내가 불의를 막아줄 것이다.",
      author: "레오나르도 다빈치",
    },
    {
      quote: "인내가 최상의 미덕이다.",
      author: "카토",
    },
    {
      quote: "인내는 쓰지만 그 열매는 달다.",
      author: "아리스토텔레스",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;