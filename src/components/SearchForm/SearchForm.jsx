import React, { useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from 'redux/todoSlice';
import { selectTodos } from 'redux/selectors';

export const SearchForm = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const handleInput = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const todo = {
      id: nanoid(),
      text: query,
    };
    const isExsistTodo = todos.find(todo => todo.text === query);
    if (isExsistTodo) {
      alert('Todo already exsist');
      return;
    }
    dispatch(addTodo(todo));
    setQuery('');
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={query}
        autoFocus
      />
    </SearchFormStyled>
  );
};
