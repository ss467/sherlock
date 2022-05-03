import React from 'react';
import Navbar from './containers/Navbar'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import SeasonNav from './components/SeasonNav';
import SeasonOne from './components/SeasonOne'
import SeasonTwo from './components/SeasonTwo';
import SeasonThree from './components/SeasonThree';
import SeasonFour from './components/SeasonFour'; 
import StreamPlayer from './components/StreamPlayer';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<SeasonNav />} />
      <Route exact path='/season1' element={<SeasonOne />} />
      <Route exact path='/season2' element={<SeasonTwo />} />
      <Route exact path='/season3' element={<SeasonThree />} />
      <Route exact path='/season4' element={<SeasonFour />} />
      <Route exact path='/season1/episode1' element={<StreamPlayer id='6a85897cc3d6ee523ed4ffcc27524ba7' next="/season1/episode2" prev = "/season1" title="1.A Study in the pink" descr="A woman in pink lies dead in a derelict house. She is the fourth in a series of seemingly impossible suicides. DI Lestrade is the best Scotland Yard has got, but even he knows that there's only one man who can help. Elsewhere in London, a war hero, invalided home from Afghanistan, meets a strange but charismatic genius who is looking for a flatmate; Dr John Watson and Sherlock Holmes are meeting for the first time." />} />
      <Route exact path='/season1/episode2' element={<StreamPlayer id='01cfd827905545daa3d9b741e7037606' next="/season1/episode3" prev = "/season1/episode1" title="2.The Blind Banker" descr="Watson's new life is never dull - after all, he's sharing a flat with Sherlock Holmes. But solving mysteries won't pay the bills. The trouble is, though, that Sherlock's idea of a visit to the bank is not quite what Watson had in mind. Mysterious ciphers are appearing on walls all over London and anyone who sees them is dead within hours, from the glittering financial hub of the city to the heart of a travelling Chinese circus. Sherlock and Watson must decipher the deadly symbols before anyone else falls victim to the mysterious Black Lotus." />} />
      <Route exact path='/season1/episode3' element={<StreamPlayer id='de1a24046483586da7781dfc57f346b9'  next="/season2/episode1" prev = "/season1/episode2" title="3.The Great Game" descr="Despairing of the ingenuity of London's criminals, Sherlock is invited to take on what looks to be a very ordinary case - a young civil servant found on a railway line with his head smashed in. It seems to be open and shut - or so he thinks. The curtain is about to rise on a terrifying game of cat and mouse as a crazed bomber pits his wits against Sherlock. A 20-year-old murder, a blood-soaked car, a rediscovered Old Master worth millions - it's just the kind of adventure Sherlock and John relish, but who is behind these deadly puzzles? London is set to become a battle ground as Sherlock confronts the one person capable of beating him."/>} />
      <Route exact path='/season2/episode1' element={<StreamPlayer id='24facb932579744d797a42143377a084' next="/season2/episode2" prev = "/season1/episode3" title="1. A Scandal in Belgravia" descr="A Royal scandal, a dazzling game of cat and mouse. The seductive Irene Adler is cold, calculating, brilliant. Has Sherlock finally met his match?" />} />
      <Route exact path='/season2/episode2' element={<StreamPlayer id='019ee0ab2424643b068719d218d553f8' next="/season2/episode3" prev = "/season2/episode1" title="2. The Hounds of Baskerville" descr="Sherlock's most famous case. A Hound from Hell. A terrified man. But is a monster really stalking Dartmoor? What seems like fantasy in Baker Street is a very different prospect in the ultra-secret army base" />} />
      <Route exact path='/season2/episode3' element={<StreamPlayer id='1fd92863e2172d6ec23a3e2f8a7cfdcd' next="/season3/episode1" prev = "/season2/episode2" title="3. The Reichenbach Fall" descr="The Tower of London, Pentonville Prison, the Bank of England. All broken into on the same day! Only James Moriarty could do it. But why didn't he steal anything? Soon a darker purpose unfolds. The final battle between the masterminds. And neither can hope to walk away from it." />} />
      <Route exact path='/season3/episode1' element={<StreamPlayer id='c4ca8f5cd35eb93ccb2f8406dd3c601b' next="/season3/episode2" prev = "/season2/episode3" title="1. The Empty Hearse" descr="Two years after Sherlock's 'death', Dr John Watson has got on with his life. But, with London under threat of a devastating terrorist attack, Sherlock is about to stage his outrageous resurrection. But if he thinks everything will be just as he left it, he's in for a very big surprise..." />} />
      <Route exact path='/season3/episode2' element={<StreamPlayer id='faafbf3506fb10f602026724f807a107' next="/season3/episode3" prev = "/season3/episode1" title="2. The Sign of Three" descr="Sherlock faces his biggest challenge of all - delivering a Best Man's speech on John's wedding day! But all isn't quite as it seems. Mortal danger stalks the reception - and someone might not make it to the happy couple's first dance. Sherlock must thank the bridesmaids, solve the case and stop a killer!" />} />
      <Route exact path='/season3/episode3' element={<StreamPlayer id='0f209d1276963f9d8501430aa69028e2' next="/season3/" prev = "/season3/episode2" title="3. His Last Vow " descr="A case of stolen letters leads Sherlock Holmes into a long conflict with Charles Augustus Magnussen, the Napoleon of blackmail, and the one man he truly hates. But how do you tackle a foe who knows the personal weakness of every person of importance in the Western world?" />} />
    </Routes>
    </Router>
  );
}

export default App;