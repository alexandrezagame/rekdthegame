import React, { useEffect, useState } from 'react';
import Faq from 'react-faq-component';
import useStyles from './styles';

const Questions = () => {
  const classes = useStyles();

  const data = {
    title: 'FAQ (How it works)',
    rows: [
      {
        title:
          'When I send drinks, can I split it them between several players?',
        content: `Of course! Do what you must to inflict the maximum amout of dama... I mean, have as much fun as possible. `,
      },
      {
        title: 'How many players max?',
        content: `There isn't really a max number of players, but to keep the game flowing and engaging we suggest 6 players max. Of course, the more players playing REKD, the more brutal the game and the drinkin gets.`,
      },
      {
        title: 'Can we play with two players',
        content: `Oh yeah! This is what we call lightning rounds! The games are quick and not as drinking heavy, so you can play several rounds in a row. `,
      },
      {
        title: 'Reccomended number of players?',
        content: `It depends. We've had amazing games with 3-5 players. Definitely the more the drunker.`,
      },
      {
        title: 'Should we play with beer/ Trulys or hard liquor?',
        content: `So, for legal reasons, we have to say neither. Alcohol is a no-no substance and we don't promote the consumption of alcohol. But beer is for lightweights. Whatever you do, don't play with shots, someone's going to die.`,
      },
      {
        title: 'How do the shortcuts work?',
        content: `If your roll lands you past where the shortcut begins (squares 6 and 24) you can choose whether to finish your current roll on the main path or roll again and use the new roll to go on the shortcut. If you roll again, you have to use the shortcut though!`,
      },
      {
        title: 'Can multiple SPECIAL cards be at play at once?',
        content: `No. Unless the card specifically says it stays active until the end of the game, every special card is replaced by the next one and all previous rules and privileges are lost.`,
      },
      {
        title: 'What are Direct Challenges?',
        content: `A Direct Challenge is our way of making you hate your friends. When several players fall on the same spot for any reason, they must all roll the dice. The highest number moves forward the lowest score and the lowest score moves backwards the highest number. If there are uneven number of players on the spot, the middle score will not be affected. If there are 4 players (for example) the highest score uses the lowest score and the second highest score uses the second lowest score, etc. If a direct challenge results in the same or different players falling on the same spot again, another direct challenge starts.`,
      },
      {
        title: 'How much can I expect to drink?',
        content: `A lot. On average a 5 player game seen to the end will result in a whole bottle per person. Of milk, of course (wink, wink).`,
      },
      {
        title: 'How do I win?',
        content: `To win a player must land on the FINISH spot with an exact roll. If the player is 3 spots away and rolls a 4, they must move 3 spots forward and 1 spot backwards and try again.`,
      },
      {
        title: 'Were you guys not hugged as children? Who comes up with this?',
        content: `Not even once.`,
      },
      {
        title: 'Can I play online?',
        content: `Yes! We offer a free to play virtual game! It's designed to host up to 6 players from 6 different devices. It must be laptop or desktop though, no mobile devices yet, but its the complete game!`,
      },
      {
        title: 'Wait, I can download the game for free?',
        content: `Oh yeah! You will have to cut out the board and all 150 cards but if you're willing to do the work, we're willing to give it for free!`,
      },
      {
        title: 'Can I submit a card?',
        content: `Of course! On our website there is a section to submit cards or you can just email us your idea at hello@rekdthegame.com. We're launching some expansion packs soon!`,
      },
      {
        title: 'Why buy REKD and not another drinking game?',
        content: `Well, the main selling point for REKD is REPLAYABILITY. With 150 cards that combine with each other, every game is different. The difficulty of actually finishing and surviving the game also makes groups of friends very competitive and eager to keep score. And, of course, it never gets old to see your friends go through one of the 45 unique punishments in the game. Ever seen a friend try to order a pizza without any dough whilst having to start every sentence by saying "back when I was a pedophile..." and not being able to hang up? We have 😂`,
      },
      {
        title: 'What is the meaning of life?',
        content: `Eat, Rekd, sleep, Anime, Hentai, Repeat`,
      },
    ],
  };

  const styles = {
    // bgColor: 'white',
    titleTextColor: '#C40607',
    rowTitleColor: 'black',
    rowContentColor: 'grey',
    arrowColor: '#C40607',
    // rowContentPaddingLeft: '1rem',
    transitionDuration: '0.3s',
    timingFunc: 'ease',
  };

  const config = {
    animate: true,
    // arrowIcon: 'V',
    // tabFocus: true,
  };

  return (
    <div className={classes.container}>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};

export default Questions;
