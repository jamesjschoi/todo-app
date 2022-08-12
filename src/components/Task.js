import React from 'react';
import Header from './Header';
import TaskForm from './TaskForm';
import Section from '../UI/Section';

const Task = () => {
  return (
    <Section>
      <Header />
      <TaskForm />
    </Section>
  );
};

export default Task;
