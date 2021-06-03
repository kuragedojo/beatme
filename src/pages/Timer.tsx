import Layout from '../components/Layout';
import React, { Component } from 'react';
import { RefresherEventDetail } from '@ionic/core';
import './Timer.css';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonRefresher, IonRefresherContent, IonContent } from '@ionic/react';

enum TimerPhase {
  START,
  WARMUP,
  REST,
  WORKOUT,
  END
}

type TimerState = {
  time: number,
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

  tick() {
    let newTime = this.state.time - 1;
    let newPhase = this.state.phase;
    let newRound = this.state.round;
    let newSet = this.state.set;

    if (this.state.phase === TimerPhase.START) {
      newPhase = TimerPhase.WORKOUT;
    }

    if (newTime === 0) {
      if (this.state.phase === TimerPhase.WARMUP) {
        newPhase = TimerPhase.WORKOUT;
        newTime = this.props.workoutTime;
      }

      if (this.state.phase === TimerPhase.WORKOUT) {
        newPhase = TimerPhase.REST;
        newTime = this.props.restTime;
      }

      if (this.state.phase === TimerPhase.REST) {
        newPhase = TimerPhase.WARMUP;
        newTime = this.props.warmUpTime;
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
              <IonCardSubtitle><strong>Time:</strong> {this.state.time}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
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