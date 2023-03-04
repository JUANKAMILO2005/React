import React, { useState } from 'react';

const Tweet = () => {

  const [tweetText, setTweetText] = useState('');
    const [archivedTweets, setArchivedTweets] = useState([]);
    const [tweetsToPublish, setTweetsToPublish] = useState([]);
    const [tweetsArchiveds, setTweetsArchiveds] = useState([]);

    const publishTweet = () => {
      if (tweetText.length <= 255){
        setTweetsToPublish([...tweetsToPublish, tweetText])
        setTweetText('')
      } else {
        alert('¡Tweet demasiado largo! Tweet máximo es de 255 caracteres.')
      }
    };

    const archivedTweet = () => {
      setArchivedTweets([...archivedTweets, ...tweetsToPublish])
      setTweetsToPublish([]);
    };

    const archivedsTweets = () => {
      setTweetsArchiveds([...tweetsArchiveds, ...archivedTweets])
      setArchivedTweets([]);
    }

  return (
    <div className='Hola'>
  <div className="container_tweets">

  <div class="bg-1">
    <h2 class="t-stroke t-shadow">PUBLICA TU TWEET</h2>
  </div>

    <div className='text'>
      <textarea placeholder='Escribe un tweet(max 255 caracteres)'
      value={tweetText}
      onChange = {(event) => setTweetText(event.target.value)}></textarea>
      <p className='contador'>{tweetText.length/255}</p>
    </div>
    
    <div className='middle'>
      <button className='botons bt1' onClick={publishTweet} >Publicar</button>
      <button className='botons bt2' onClick={archivedTweet} >Archivar</button>
      <button className='botons bt3' onClick={archivedsTweets} >Archivados</button>
    </div>

    <div className='resultado'>
      <h4 className=''>Aqui verás tu tweer actual</h4>
      <div className='ul_resultado'>
      <ul>
          {tweetsToPublish.map((tweet) => (
            <li key={tweet}>{tweet}</li>
          ))}
      </ul>

      <ul>
        {tweetsArchiveds.map((tweet) => (
          <li key={tweet}>{tweet}</li>
        ))}
      </ul>
      </div>
    </div>
  </div>

  <div class='bg-2'>
  <h2 class='t-stroke t-shadow'>Aqui se veran tus tweets archivados</h2>
  <div className='ul_resultado2'>
  {archivedTweets.map((tweet) => (
    <li key={tweet}>{tweet}</li>
  ))}
  </div>
  </div>
  </div>
  )
}
export default Tweet


