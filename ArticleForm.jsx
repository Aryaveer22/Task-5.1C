import React from 'react';
import { Form, TextArea } from 'semantic-ui-react';

const ArticleForm = () => (
  <>
    <Form.Field>
      <label>Title</label>
      <Form.Input placeholder="Enter a descriptive title" />
    </Form.Field>
    <Form.Field>
      <label>Abstract</label>
      <TextArea placeholder="Enter a 1-paragraph abstract" />
    </Form.Field>
    <Form.Field>
      <label>Article Text</label>
      <TextArea placeholder="Enter your article text" />
    </Form.Field>
    <Form.Field>
      <label>Tags</label>
      <Form.Input placeholder="Please add up to 3 tags to describe what your article is about" />
    </Form.Field>
  </>
);

export default ArticleForm;
