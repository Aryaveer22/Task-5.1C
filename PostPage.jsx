import React, { useState } from 'react';
import { Button, Form, Segment, Header, Radio } from 'semantic-ui-react';
import QuestionForm from './QuestionForm';
import ArticleForm from './ArticleForm';
import './postpage.css'; 

const PostPage = () => {
  const [postType, setPostType] = useState('question'); 

  const handlePostTypeChange = (e, { value }) => {
    setPostType(value);
  };

  return (
    <div className="PostPage">
      <Segment>
        <Header as="h3">New Post</Header>
        <Form>
          <Form.Field>
            <label>Select Post Type:</label>
            <Radio
              label='Question'
              name='postType'
              value='question'
              checked={postType === 'question'}
              onChange={handlePostTypeChange}
            />
            <Radio
              label='Article'
              name='postType'
              value='article'
              checked={postType === 'article'}
              onChange={handlePostTypeChange}
              style={{ marginLeft: '15px' }}
            />
          </Form.Field>

          <Header as="h4">What do you want to ask or share</Header>
          <p>This section is designed based on the type of the post. It could be developed by conditional rendering. 
             {postType === 'question' 
              ? ' For post a question, the following section would be appeared.' 
              : ' For post an article, the following section would be appeared.'}
          </p>

          {postType === 'question' ? (
            <QuestionForm />
          ) : (
            <ArticleForm />
          )}

          <Button type='submit' primary disabled>
            Post
          </Button>
        </Form>
      </Segment>
    </div>
  );
};

export default PostPage;
