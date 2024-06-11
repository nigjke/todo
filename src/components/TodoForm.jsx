import React from 'react';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoButton from './TodoButton';
import TodoItems from './TodoItems';
import TodoActions from './TodoActions';

export default function TodoForm() {
    return (
        <>
            <TodoHeader/>
            <TodoInput/>
            <TodoButton/>
            <TodoItems/>
            <TodoActions/>
        </>
    );
}