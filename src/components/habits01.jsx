import React, { Component } from "react";
import Habit01 from "./habit01";

class Habits01 extends Component {
  state = {
    habits: [
      { id: 1, name: "Coding", count: 0 },
      { id: 2, name: "Swimming", count: 0 },
      { id: 3, name: "Eating", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    //리액트에서는 state를 직접적으로 변경하는 것이 좋지 않기 때문에 새로운 배열을 만들어서 count 값을 변경해주었음
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits: habits });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits: habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit01
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits01;
