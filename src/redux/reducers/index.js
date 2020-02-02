const initState = {
    blog: [
        {
            id: "1",
            title: "Dev Log: 01/25/2020",
            text: "Alright, I did the last two things I wanted to do in this network rewrite: having plots that last longer (using the existing civ-based spies as a model), and allowing plots to pass even further down the criminal organization networks (so that more evidence will be created while making the leaves of the org chart more active.) This has been good, and I think we're ready for investigation now! Hopefully! I also discovered a few problems with my org chart displayer, which is another way to make the networks look even more rich, ha ha (it wasn't printing certain assets.) This has been a long detour, but we should be to the heart of the adventure mode update now. Once that all works, fun for forts."
        },
        {
            id: "2",
            title: "Dev Log: 01/18/2020",
            text: "Plots can now propagate out into dedicated criminal organizations from the non-criminal position holders (often through intermediaries), and criminal organizations can also expand out into other cities, forming branches much as the merchant companies do, where they then try to muscle out and subordinate local groups. These together have led to even more pleasantly rich and geographically-varied networks. We'll take a few more steps along these lines before trying to implement player-led investigations, but we're almost ready to give them a shot.",
        },
        {
            id: "3",
            title: "Dev Log: 01/13/2020",
            text: "The new info screen has highlighted several defects in the plots and villainous behavior. We'll have to do some additional work to get more organizations merged or at least linked (there are too many isolated failed organizations with one person bossing one other person around for decades), and to make sure that more of the lower level members have their fingers in some evidence-creating cookie jar. Currently, too many of the low-level people try one gig and otherwise sit quiet for years. Our planned solution is to use the existing criminal organizations and bandit gangs; we put that off previously, but it'll have to be done now in some abridged fashion that addresses these issues. At the same time, it was really cool to see a 25 member gang all laid out, from the leader hidden in an abandoned monastery, to their lieutenant goblin childhood friend that actually did all the organizing, to the low-level members, to various thieves and snatchers they'd hired for jobs down at the leaves, along with one embezzler and a highly-placed asset connected to the tree through their handler.",
        }
    ],
    products: [
        {
            id: "1",
            name: "Cereal",
            subHeader: "Cost: $4.99"
        },
        {
            id: "2",
            name: "Chips",
            subHeader: "Cost: $2.99"
        },
        {
            id: "3",
            name: "12 Pack of Soda",
            subHeader: "Cost: $5.99"
        }
    ]
};

const rootReducer = (state=initState, action)=>{
    return state;
};

export default rootReducer;