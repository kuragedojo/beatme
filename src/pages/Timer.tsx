import Layout from '../components/Layout';
import React, { Component } from 'react';
import { RefresherEventDetail } from '@ionic/core';
import './Timer.css';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonRefresher, IonRefresherContent, IonContent } from '@ionic/react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

enum TimerPhase {
  START,
  WARMUP,
  REST,
  WORKOUT,
  END
}

type TimerState = {
  time: number,
  maxTime: number,
  round: number,
  set: number,
  phase: TimerPhase,
  interval: NodeJS.Timeout
}

type TimerProps = {
  warmUpTime: number,
  restTime: number,
  workoutTime: number,
  rounds: number,
  sets: number
}

export class Timer extends Component<TimerProps, TimerState> {

  constructor(props: TimerProps) {
    super(props);

    this.state = {
      time: props.warmUpTime,
      maxTime: props.warmUpTime,
      round: props.rounds,
      set: props.sets,
      phase: TimerPhase.START,
      interval: setTimeout(() => { }, 0)
    };

    this.doReset = this.doReset.bind(this);
  }

  doReset(event?: CustomEvent<RefresherEventDetail>) {
    const interval = setInterval(() => this.tick(), 1000);

    this.setState({
      time: this.props.warmUpTime,
      round: this.props.rounds,
      set: this.props.sets,
      phase: TimerPhase.START,
      interval: interval
    });

    if (event !== undefined) {
      event.detail.complete();
    }
  }

  getPhaseText() {
    if (this.state.phase === TimerPhase.START) {
      return 'START';
    }
    if (this.state.phase === TimerPhase.WARMUP) {
      return 'WARMUP';
    }
    if (this.state.phase === TimerPhase.WORKOUT) {
      return 'WORKOUT';
    }
    if (this.state.phase === TimerPhase.REST) {
      return 'REST';
    }
    if (this.state.phase === TimerPhase.END) {
      return 'END';
    }
  }

  getPhaseColorPath() {
    if (this.state.phase === TimerPhase.START) {
      return '#000';
    }
    if (this.state.phase === TimerPhase.WARMUP) {
      return '#aff';
    }
    if (this.state.phase === TimerPhase.WORKOUT) {
      return '#afa';
    }
    if (this.state.phase === TimerPhase.REST) {
      return '#ffa';
    }
    if (this.state.phase === TimerPhase.END) {
      return '#fff';
    }
  }

  getPhaseColorText() {
    if (this.state.phase === TimerPhase.START) {
      return '#000';
    }
    if (this.state.phase === TimerPhase.WARMUP) {
      return '#8dd';
    }
    if (this.state.phase === TimerPhase.WORKOUT) {
      return '#8d8';
    }
    if (this.state.phase === TimerPhase.REST) {
      return '#dd8';
    }
    if (this.state.phase === TimerPhase.END) {
      return '#fff';
    }
  }

  tick() {
    let newTime = this.state.time - 1;
    let newMaxTime = this.state.maxTime;
    let newPhase = this.state.phase;
    let newRound = this.state.round;
    let newSet = this.state.set;

    if (this.state.phase === TimerPhase.START) {
      newPhase = TimerPhase.WORKOUT;
    }

    if (newTime < 0) {
      if (this.state.phase === TimerPhase.WARMUP) {
        newPhase = TimerPhase.WORKOUT;
        newTime = this.props.workoutTime;
        newMaxTime = newTime;
      }

      if (this.state.phase === TimerPhase.WORKOUT) {
        newPhase = TimerPhase.REST;
        newTime = this.props.restTime;
        newMaxTime = newTime;
      }

      if (this.state.phase === TimerPhase.REST) {
        newPhase = TimerPhase.WARMUP;
        newTime = this.props.warmUpTime;
        newMaxTime = newTime;
        if (newSet === 1) {
          if (newRound === 1) {
            newPhase = TimerPhase.END;
            clearInterval(this.state.interval)
          } else {
            newSet = this.props.sets;
            newRound--;
          }
        } else {
          newSet--;
        }
      }
    }

    this.setState({
      time: newTime,
      maxTime: newMaxTime,
      phase: newPhase,
      round: newRound,
      set: newSet
    });
  }

  componentDidMount() {
    this.doReset();
  }

  render() {
    return (
      <Layout>
        <IonContent>
          <IonRefresher slot="fixed" onIonRefresh={this.doReset}>
            <IonRefresherContent></IonRefresherContent>
          </IonRefresher>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Test-Timer</IonCardTitle>
              <IonCardSubtitle>Nur zum Testen</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
            <CircularProgressbar 
            value={this.state.maxTime - this.state.time} 
            maxValue={this.state.maxTime} 
            text={this.state.time+'s'}
            styles={buildStyles({
              // Colors
              pathColor: this.getPhaseColorPath(),
              textColor: this.getPhaseColorText(),
              trailColor: '#eee',
              backgroundColor: '#3e98c7',
            })}
             />
              <strong>Runde:</strong> {this.state.round}/{this.props.rounds}<br />
              <strong>Set:</strong> {this.state.set}/{this.props.sets}<br />
              <strong>Phase:</strong> {this.getPhaseText()}<br />
            </IonCardContent>
          </IonCard>
        </IonContent>
      </Layout>
    );
  }
};

export default Timer;