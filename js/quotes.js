const quotes = [
    {
        quote: "자신이 완벽해야만 자신을 사랑할 수 있다면, 당신은 온 인생을 낭비하게 될 것이다. 당신은 있는 그대로 완벽하다."
    },
    {
        quote: "행복하기로 마음먹은 만큼 행복을 가지게 된다."
    },
    {
        quote: "당신이 되고 싶었던 어떤 존재가 되기에는 지금도 결코 늦지 않았다."
    },
    {
        quote: "어제도 예뻤고 오늘도 예쁘고 내일도 예쁠 예정이구나."
    },
    {
        quote: "우리는 다른 사람과 같아지기 위해 인생의 3/4를 빼앗기고 있다."
    },
    {
        quote: "가장 용감한 행동은 자신을 위해 생각하고 그것을 큰 소리로 외치는 것이다."
    },
    {
        quote: "스스로를 경멸하는 사람은 경멸하는 자신을 존중한다."
    },
    {
        quote: "어제와 똑같이 살면서 다른 미래를 기대하는 것은 정신병 초기 증세이다."
    },
    {
        quote: "나에 대한 자신감을 잃으면 온 세상이 나의 적이 된다."
    },
    {
        quote: "이성을 비관해도 의지로써 낙관하라."
    },
]

const quote = document.querySelector("#quote span:first-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;