import React from 'react';
import { Form, TextArea } from 'semantic-ui-react';

const QuestionForm = () => (
  <>
    <Form.Field>
      <label>Title</label>
      <Form.Input placeholder="Start your question with how, what, why, etc." />
    </Form.Field>
    <Form.Field>
      <label>Describe your problem</label>
      <TextArea placeholder="Describe your problem" />
    </Form.Field>
    <Form.Field>
      <label>Tags</label>
      <Form.Input placeholder="Please add up to 3 tags to describe what your question is about" />
    </Form.Field>
  </>
);

export default QuestionForm;
