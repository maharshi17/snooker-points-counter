import React, {useState, useEffect} from 'react';

import { Container, Button, Card } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import AddPlayerModal from './components/Modal';

import './App.css';

function App() {

  const points = [1, 2, 3, 4, 5, 6, 7];

  const [modalShow, setModalShow] = useState(false);
  const [scoreboard, setScoreboard] = useState([]);

  useEffect(() => {

  }, [])

  const openModalHandler = () => {
    setModalShow(true);
  }

  const addPlayer = (playerName) => {

    const playerDetail = {
      name: playerName,
      score: 0,
    };

    setScoreboard([
      ...scoreboard,
      playerDetail
    ]);

    setModalShow(false);
  }

  const updateScoreHandler = (points, index) => {
    const newArr = [...scoreboard];

    const currentScore = newArr[index].score;
    const updatedScore = currentScore + (points);

    newArr[index].score = updatedScore;

    setScoreboard(newArr);
  }

  const clearScoreboardHandler = () => {
    setScoreboard([]);
  }


  return (
    <div>
      <Header/>
      <main className='py-3'>
        <Container>
          <div className='App'>
          {
            scoreboard.length > 0 && (
              <div>
              {
                scoreboard.map((player, index) => (
                  <Card key={player.name}>
                    <Card.Body>
                      <div className='w-100 d-inline-flex'>
                        <div className='w-50 d-block'>
                          <Card.Title className='text-truncate'><h2>{player.name}</h2></Card.Title>
                        </div>
                        <div className='w-50' style={{textAlign: "right"}}>
                          <Card.Title>
                            <h2>{player.score}</h2>
                          </Card.Title>
                        </div>
                      </div>
                      <Container fluid className='px-0'>
                          <div style={{display: "flex", overflowX: "scroll"}}>
                            {
                              points.map((point) => (
                                <Button value={point} key={point} className='m-1 btn-success rounded-pill' onClick={() => updateScoreHandler(point, index, player.name)}>+{point}</Button>
                              ))
                            }
                          </div>
                          <div style={{display: "flex", overflowX: "scroll"}}>
                            {
                              points.map((point) => (
                                <Button value={-Math.abs(point)} key={-Math.abs(point)} className='m-1 btn-danger rounded-pill' style={{padding: "6px 14.3px"}} onClick={() => updateScoreHandler(-Math.abs(point), index, player.name)}>-{point}</Button>
                              ))
                            }
                          </div>
                      </Container>
                    </Card.Body>
                  </Card>
                ))
              }
              </div>
            )
          }
            <div className='my-4'>
              {
                scoreboard.length === 0 && (
                  <div className='text-center mb-5'>
                    <p style={{fontSize: "22px", fontWeight: "light", color: "#444"}}>Snooker Points Counter is a score tracker of individual player who plays snooker</p>
                    <p>Add players by clicking on "<strong>Add Player</strong>" button and start tracking thier scores.</p>
                  </div>
                )
              }
              <Button className='w-100' variant='primary' onClick={openModalHandler}>
                <i className='fa fa-plus'></i> <span style={{fontWeight: "bold"}}>Add Player</span>
              </Button>
              {
                scoreboard.length > 0 && (
                  <Button className='my-3 w-100' variant='danger' onClick={clearScoreboardHandler}>
                    <i class="fa-solid fa-trash-can"></i> <span style={{fontWeight: "bold"}}>Clear</span>
                  </Button>
                )
              }
            </div>
            <AddPlayerModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              onAdd={addPlayer}
            />
          </div>
        </Container>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
